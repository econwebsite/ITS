import React from "react";

const DECIMALS = { camH: 1, camX: 1, tilt: 1, pan: 1, hfov: 1, vfov: 1, laneW: 1, pmh: 2 };
const unitOf = (k) => {
  if (k === "tilt" || k === "pan" || k.includes("fov")) return "°";
  if (["camH", "camX", "laneW", "pmh"].includes(k)) return " m";
  return "";
};

/** Report for a finished solve: solved values, constraint pass/fail, per-lane readable ranges */
const AutocomputeResults = ({ result: r, cfg, base }) => {
  const e = r.s.e;
  const need = base.speed_kmh / 3.6;
  const solved = cfg.free.map((f) => `${f.key} = ${(+r.p[f.key]).toFixed(DECIMALS[f.key] ?? 1)}${unitOf(f.key)}`);
  if (r.lanes !== undefined && cfg.binding === "lanes") solved.push(`lanes = ${r.lanes}`);

  const zoomCur = base.zoomOn ? Math.tan(base.fovWide * Math.PI / 360) / Math.tan(+r.p.hfov * Math.PI / 360) : 0;
  const zoomMax = base.zoomOn ? Math.tan(base.fovWide * Math.PI / 360) / Math.tan(base.fovTele * Math.PI / 360) : 0;
  const zoomOk = zoomCur <= zoomMax + 1e-6;

  return (
    <div>
      <span className={`cp-pill ${r.s.feasible ? "ok" : "bad"}`}>{r.s.feasible ? "FEASIBLE" : "INFEASIBLE"}</span>
      &nbsp; applied to the scene
      <br /><br />

      {cfg.binding === "lanes" && (
        <>
          {r.maxFeasibleLanes
            ? <><b>Max lanes supported:</b> {r.maxFeasibleLanes} of {cfg.maxLanes || 6} tested<br /></>
            : <><b>No lane count (1&ndash;{cfg.maxLanes || 6}) meets the constraints.</b> Closest achievable is shown below at {r.lanes} lane(s).<br /></>}
          {r.sweep && (
            <table className="cp-souttbl" style={{ marginTop: 6 }}>
              <tbody>
                {r.sweep.map((s) => (
                  <tr key={s.lanes}>
                    <td>{s.lanes} lane{s.lanes > 1 ? "s" : ""}</td>
                    <td>worst {s.worstPeak.toFixed(0)} px</td>
                    <td>zone {s.worstL.toFixed(2)} m</td>
                    <td className={s.feasible ? "cp-okrow" : "cp-badrow"}>{s.feasible ? "FEASIBLE" : "—"}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <br />
        </>
      )}

      <b>Solved values:</b> {solved.length ? solved.join(" · ") : "—"}<br />

      <table className="cp-souttbl">
        <tbody>
          {cfg.constraints.pixels && (() => {
            const ok = e.worstPeak >= base.reqPx - 1e-6;
            return (
              <tr>
                <td>Worst-lane plate pixels</td><td>{e.worstPeak.toFixed(0)} px</td><td>need &ge; {base.reqPx}</td>
                <td className={ok ? "cp-okrow" : "cp-badrow"}>{ok ? "PASS" : `short by ${(base.reqPx - e.worstPeak).toFixed(0)} px`}</td>
              </tr>
            );
          })()}
          {cfg.constraints.capture && (() => {
            const zoneNeed = need / base.fps, ok = e.worstL >= zoneNeed - 1e-6;
            return (
              <tr>
                <td>Worst-lane readable zone</td><td>{e.worstL.toFixed(2)} m</td><td>need &ge; {zoneNeed.toFixed(2)} m</td>
                <td className={ok ? "cp-okrow" : "cp-badrow"}>{ok ? "PASS" : `short by ${(zoneNeed - e.worstL).toFixed(2)} m`}</td>
              </tr>
            );
          })()}
          <tr>
            <td>Max speed (capture guaranteed)</td><td colSpan="2">{e.maxSpeed_kmh.toFixed(0)} km/h</td>
            <td className={e.maxSpeed_kmh >= base.speed_kmh ? "cp-okrow" : "cp-badrow"}>at {base.fps} fps</td>
          </tr>
          {base.zoomOn && (
            <tr>
              <td>Zoom factor needed</td><td colSpan="2">{zoomCur.toFixed(2)}&times; (hFOV {(+r.p.hfov).toFixed(1)}&deg;)</td>
              <td className={zoomOk ? "cp-okrow" : "cp-badrow"}>{zoomOk ? `within ${zoomMax.toFixed(2)}× lens` : "exceeds lens"}</td>
            </tr>
          )}
          <tr>
            <td>Readable frames @ {base.speed_kmh} km/h</td>
            <td colSpan="3">{isFinite(e.frames) ? e.frames : "—"} frame(s) on the worst lane</td>
          </tr>
        </tbody>
      </table>

      <b style={{ display: "block", marginTop: 10 }}>
        Per-lane readable range{base.covFrac ? " (worst point across lane width)" : " (lane centre)"}:
      </b>
      <table className="cp-souttbl">
        <tbody>
          {e.lanesDetail.map((l) => (
            <tr key={l.lane}>
              <td>Lane {l.lane}{base.covFrac && l.worstOffsetX !== undefined ? ` @ x=${l.worstOffsetX.toFixed(2)}m` : ""}</td>
              <td>peak {l.peakPx.toFixed(0)} px</td>
              <td>
                {l.readNear
                  ? `${l.readNear.toFixed(1)}–${l.readFar.toFixed(1)} m (${l.L.toFixed(2)} m)`
                  : <span className="cp-badrow">not readable</span>}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {!r.s.feasible && (
        <div style={{ marginTop: 8 }} className="cp-badrow">
          No configuration meets every constraint with the fixed values. Above is the closest achievable &mdash; free more
          parameters, relax the target, or widen a fixed value.
        </div>
      )}
    </div>
  );
};

export default AutocomputeResults;
