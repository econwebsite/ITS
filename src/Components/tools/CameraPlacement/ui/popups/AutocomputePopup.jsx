import React, { useEffect, useState } from "react";
import { Sparkles, X } from "lucide-react";
import { DEFAULT_SOLVER, SLIDER_LIMITS, SOLVER_FREE_OPTIONS } from "../../config/toolSettings";
import { usePlacement } from "../../state/PlacementContext";
import { xRange } from "../../calculations/geometry";
import { solve } from "../../calculations/solver";
import NumberInput from "../shared/NumberInput";
import AutocomputeResults from "./AutocomputeResults";

const AutocomputePopup = () => {
  const { solverOpen, setSolverOpen, params, fovLock, zoom, applySolution, setLastTargets } = usePlacement();
  const [form, setForm] = useState(DEFAULT_SOLVER);
  const [output, setOutput] = useState(null); // { message } | { message: 'busy' } | { result, cfg, base }

  const set = (patch) => setForm((f) => ({ ...f, ...patch }));
  const setFree = (key, on) => setForm((f) => ({ ...f, free: { ...f.free, [key]: on } }));

  // A padlocked FOV axis is derived, so it can't be freed
  const hDerived = fovLock === "h", vDerived = fovLock === "v";
  useEffect(() => {
    if (hDerived && form.free.hfov) setFree("hfov", false);
    if (vDerived && form.free.vfov) setFree("vfov", false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hDerived, vDerived]);

  const runSolve = () => {
    const base = {
      lanes: params.lanes, laneW: params.laneW, camH: params.camH, camX: params.camX,
      tilt: params.tilt, pan: params.pan, hfov: params.hfov, vfov: params.vfov,
      SW: params.sw, SH: params.sh, plateW_in: params.pw, plateH_in: params.ph, pmh: params.pmh, yaw: params.yaw,
      reqPx: form.reqPx, metric: form.metric, speed_kmh: form.speed, fps: form.fps,
      covFrac: form.covFull ? 1 : 0, covSamples: 5,
      zoomOn: zoom.on, fovWide: zoom.on && zoom.wideH !== null ? zoom.wideH : params.hfov, fovTele: params.teleHfov,
      fovLock,
    };

    const free = [];
    SOLVER_FREE_OPTIONS.forEach(({ key }) => {
      if (!form.free[key]) return;
      let [min, max] = SLIDER_LIMITS[key] || [0, 0];
      if (key === "camX") ({ min, max } = xRange(params.lanes, params.laneW));
      if (key === "hfov" && zoom.on) { // clamp the zoomable FOV to the lens's tele..wide range
        min = Math.min(base.fovTele, base.fovWide);
        max = Math.max(base.fovTele, base.fovWide);
      }
      free.push({ key, min, max });
    });

    const cfg = {
      constraints: { pixels: form.cPixels, capture: form.cCapture },
      binding: form.binding, free, freeRes: false, maxLanes: 6,
    };

    if (free.length === 0 && cfg.binding !== "lanes") {
      setOutput({ message: "Pick at least one parameter to solve for." });
      return;
    }
    if (!cfg.constraints.pixels && !cfg.constraints.capture) {
      setOutput({ message: "Enable at least one constraint." });
      return;
    }

    setOutput({ busy: true });
    setTimeout(() => {
      const result = solve(base, cfg);
      applySolution(result);
      setOutput({ result, cfg, base });
      setLastTargets({
        reqPx: base.reqPx, metric: base.metric, speed_kmh: base.speed_kmh, fps: base.fps,
        covFrac: base.covFrac, covSamples: base.covSamples, binding: cfg.binding, constraints: cfg.constraints,
      });
    }, 20);
  };

  return (
    <div
      className={`cp-solver-modal${solverOpen ? " open" : ""}`}
      onClick={(e) => { if (e.target === e.currentTarget) setSolverOpen(false); }}
    >
      <div className="cp-solver-box">
        <button type="button" className="cp-close" aria-label="Close" onClick={() => setSolverOpen(false)}>
          <X size={18} />
        </button>
        <div className="cp-solver-head">
          <h2><Sparkles size={20} /> Autocompute solver</h2>
          <div className="cp-solver-sub">Fix some parameters, let the system solve the rest.</div>
        </div>

        <div className="cp-solver-layout">
        <div className="cp-solver-form">
        <div className="cp-scol">
          <div className="cp-sblk">
            <div className="cp-sh">Targets</div>
            <div className="cp-srow">
              <span>Required plate pixels</span>
              <NumberInput value={form.reqPx} min={10} onCommit={(v) => set({ reqPx: v })} />
            </div>
            <div className="cp-srow">
              <span>Measure</span>
              <label className="cp-rad">
                <input type="radio" name="smetric" checked={form.metric === "width"} onChange={() => set({ metric: "width" })} /> width
              </label>
              <label className="cp-rad">
                <input type="radio" name="smetric" checked={form.metric === "height"} onChange={() => set({ metric: "height" })} /> char/height
              </label>
            </div>
            <div className="cp-srow">
              <span>Vehicle speed (km/h)</span>
              <NumberInput value={form.speed} min={1} onCommit={(v) => set({ speed: v })} />
            </div>
            <div className="cp-srow">
              <span>Camera frame rate (fps)</span>
              <NumberInput value={form.fps} min={1} onCommit={(v) => set({ fps: v })} />
            </div>
            <div className="cp-srow">
              <label className="cp-chk">
                <input type="checkbox" checked={form.covFull} onChange={(e) => set({ covFull: e.target.checked })} /> Cover full lane width (not just centre)
              </label>
            </div>
          </div>

          <div className="cp-sblk">
            <div className="cp-sh">Solve for (free parameters)</div>
            <div className="cp-chips">
              {SOLVER_FREE_OPTIONS.map(({ key, label }) => {
                const disabled = (key === "hfov" && hDerived) || (key === "vfov" && vDerived);
                return (
                  <label
                    key={key}
                    className={`cp-chk${disabled ? " chip-disabled" : ""}`}
                    title={disabled ? `Locked — derived from ${key === "hfov" ? "vFOV" : "hFOV"} + sensor (change lock to free it)` : ""}
                  >
                    <input type="checkbox" checked={form.free[key]} onChange={(e) => setFree(key, e.target.checked)} /> {label}
                  </label>
                );
              })}
            </div>
            <div className="cp-note">Everything unchecked stays at its current value.</div>
          </div>

          <div className="cp-sblk">
            <div className="cp-sh">Constraints &amp; objective</div>
            <div className="cp-srow">
              <label className="cp-chk">
                <input type="checkbox" checked={form.cPixels} onChange={(e) => set({ cPixels: e.target.checked })} /> Plate pixels &ge; required
              </label>
            </div>
            <div className="cp-srow">
              <label className="cp-chk">
                <input type="checkbox" checked={form.cCapture} onChange={(e) => set({ cCapture: e.target.checked })} /> Capture guaranteed (zone &ge; speed/fps)
              </label>
            </div>
            <div className="cp-srow"><span>Optimize (binding)</span></div>
            <div className="cp-srow cp-srow--start">
              {[["pixels", "max pixels"], ["speed", "max speed"], ["lanes", "max lanes"]].map(([val, text]) => (
                <label className="cp-rad" key={val}>
                  <input type="radio" name="binding" checked={form.binding === val} onChange={() => set({ binding: val })} /> {text}
                </label>
              ))}
            </div>
            {form.binding === "lanes" && (
              <div className="cp-note" style={{ marginTop: 2 }}>
                Lanes are swept 1&ndash;6 automatically to find the largest count that still meets the constraints &mdash; no need to check it above.
              </div>
            )}
          </div>
        </div>

        <div className="cp-solver-actions">
          <button type="button" className="cp-btn cp-btn--primary" onClick={runSolve}>Solve</button>
        </div>
        </div>

        <div className="cp-solver-results">
          <div className="cp-sh">Results</div>
          <div className="cp-solver-out">
            {!output && <div className="cp-empty">Results appear here after you press Solve.</div>}
            {output && output.busy && "Solving…"}
            {output && output.message && <span className="cp-badrow">{output.message}</span>}
            {output && output.result && <AutocomputeResults result={output.result} cfg={output.cfg} base={output.base} />}
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default AutocomputePopup;
