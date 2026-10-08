import { CFG_KEYS, PRESETS } from "../config/toolSettings";
import { diagonalFov, zoomInfo } from "../calculations/geometry";
import { evaluate } from "../calculations/solver";

export const downloadURL = (name, href) => {
  const a = document.createElement("a");
  a.download = name;
  a.href = href;
  a.click();
};

export const laneReadout = (L, charRatio) =>
  L.inView ? `${Math.round(L.wPx)}×${Math.round(L.hPx)} · c${Math.round(L.hPx * charRatio)}` : "—";

export const mountLabel = (p) =>
  Math.abs(p.camX) < (p.lanes * p.laneW) / 2 ? "Overhead gantry" : "Roadside pole";

// Solver inputs from the live scene + the last solver targets
export function solverParamsFrom(p, t, fovLock) {
  return {
    lanes: p.lanes, laneW: p.laneW, camH: p.camH, camX: p.camX, tilt: p.tilt, pan: p.pan,
    hfov: p.hfov, vfov: p.vfov, SW: p.sw, SH: p.sh,
    plateW_in: p.pw, plateH_in: p.ph, pmh: p.pmh, yaw: p.yaw,
    reqPx: t.reqPx, metric: t.metric, speed_kmh: t.speed_kmh, fps: t.fps,
    covFrac: t.covFrac, covSamples: t.covSamples, fovLock,
  };
}

/** Draw the configuration legend onto the saved setup image */
export function drawLegend(ctx, W, H, scale, data) {
  const { params: p, results, zoom, fovLock, lastTargets, presetText } = data;
  const s = scale || 1;
  const dfov = diagonalFov(p.hfov, p.vfov);
  const rows = [
    ["Road", `${p.lanes} lanes × ${p.laneW.toFixed(1)} m  (width ${results.roadW.toFixed(1)} m)`],
    ["Camera", `H ${p.camH.toFixed(1)} m · X ${p.camX.toFixed(1)} m · tilt ${p.tilt.toFixed(1)}° · pan ${p.pan.toFixed(1)}°`],
    ["Working dist", `${p.aim} m  (slant ${results.slant.toFixed(1)} m)`],
    ["FOV", `${p.hfov.toFixed(1)}° × ${p.vfov.toFixed(1)}°  (diagonal ${dfov.toFixed(1)}°)${zoom.on ? `  · ${zoomInfo(zoom, p)}` : ""}`],
    ["Sensor", `${p.sw} × ${p.sh} px`],
    ["Plate", `${presetText} · ${p.pw}×${p.ph} in · mount ${p.pmh.toFixed(2)} m`],
    ["Geometry", `approach ${p.yaw}° · char ratio ${p.charRatio.toFixed(2)}`],
    ["Coverage", `${results.near.toFixed(1)} m – ${results.farClamped ? "≥" : ""}${results.far.toFixed(1)} m on road · ${mountLabel(p)}`],
  ];
  const laneTxt = results.lanes.map((L) => `Lane ${L.lane}: ${laneReadout(L, p.charRatio)}`);
  for (let i = 0; i < laneTxt.length; i += 3) rows.push([i === 0 ? "Per-lane" : "", laneTxt.slice(i, i + 3).join("    ")]);

  // Autocompute result (recomputed against the current geometry) if a solve has run
  if (lastTargets) {
    const t = lastTargets;
    const ev = evaluate(solverParamsFrom(p, t, fovLock));
    const need = t.speed_kmh / 3.6, zoneNeed = need / t.fps;
    const pixOK = ev.worstPeak >= t.reqPx - 1e-6, capOK = ev.worstL >= zoneNeed - 1e-6;
    const feasible = (!t.constraints.pixels || pixOK) && (!t.constraints.capture || capOK);
    rows.push(["", ""]);
    rows.push(["AUTOCOMPUTE", `${feasible ? "FEASIBLE" : "INFEASIBLE"} · binding: ${{ pixels: "max pixels", speed: "max speed", lanes: "max lanes" }[t.binding] || t.binding} · ${t.covFrac ? "full-width" : "centre"}`]);
    rows.push(["Target", `plate ≥ ${t.reqPx} px (${t.metric}) · ${t.speed_kmh} km/h · ${t.fps} fps`]);
    rows.push(["Worst pixels", `${ev.worstPeak.toFixed(0)} px ${pixOK ? "✓" : `✗ short ${(t.reqPx - ev.worstPeak).toFixed(0)}px`}`]);
    rows.push(["Readable zone", `${ev.worstL.toFixed(2)} m (need ${zoneNeed.toFixed(2)} m) ${capOK ? "✓" : "✗"}`]);
    rows.push(["Max speed", `${ev.maxSpeed_kmh.toFixed(0)} km/h @ ${t.fps} fps`]);
    rows.push(["Frames", `${isFinite(ev.frames) ? ev.frames : "—"} @ ${t.speed_kmh} km/h (worst lane)`]);
    rows.push(["", ""]);
    rows.push(["Per-lane ranges", ""]);
    ev.lanesDetail.forEach((l) => {
      const rng = l.readNear ? `${l.readNear.toFixed(1)}–${l.readFar.toFixed(1)} m` : "— (not readable)";
      const off = t.covFrac && l.worstOffsetX !== undefined ? ` @ x=${l.worstOffsetX.toFixed(2)}m` : "";
      rows.push([`  Lane ${l.lane}${off}`, `${rng} (peak ${l.peakPx.toFixed(0)}px)`]);
    });
  }

  const pad = 16 * s, lh = 24 * s, titleH = 30 * s, labelW = 120 * s, x0 = 20 * s, y0 = 20 * s;
  ctx.font = `600 ${13 * s}px system-ui`;
  let maxV = 0;
  rows.forEach((r) => { maxV = Math.max(maxV, ctx.measureText(r[1]).width); });
  const boxW = Math.min(W - 40 * s, labelW + maxV + pad * 2);
  const boxH = pad * 2 + titleH + rows.length * lh;
  ctx.fillStyle = "rgba(15,20,32,0.86)";
  ctx.strokeStyle = "#2a3346";
  ctx.lineWidth = Math.max(1, 1.2 * s);
  if (ctx.roundRect) { ctx.beginPath(); ctx.roundRect(x0, y0, boxW, boxH, 10 * s); ctx.fill(); ctx.stroke(); }
  else { ctx.fillRect(x0, y0, boxW, boxH); ctx.strokeRect(x0, y0, boxW, boxH); }
  ctx.textBaseline = "alphabetic";
  ctx.fillStyle = "#6ea8fe";
  ctx.font = `700 ${17 * s}px system-ui`;
  ctx.fillText("Camera placement — configuration", x0 + pad, y0 + pad + 16 * s);
  let y = y0 + pad + titleH + 14 * s;
  rows.forEach((r) => {
    ctx.font = `600 ${13 * s}px system-ui`; ctx.fillStyle = "#8b95a7"; ctx.fillText(r[0], x0 + pad, y);
    ctx.font = `${13 * s}px system-ui`; ctx.fillStyle = "#e6e8ec"; ctx.fillText(r[1], x0 + pad + labelW, y);
    y += lh;
  });
}

/** Capture the 3D view at ~4K, draw the legend, download as PNG */
export function saveSetupImage(controller, legendData) {
  const out = controller.captureSetup();
  const W = out.width, H = out.height;
  drawLegend(out.getContext("2d"), W, H, W / 1600, legendData);
  downloadURL(`camera_setup_${W}x${H}.png`, out.toDataURL("image/png"));
}

export function exportConfig({ params, fovLock, zoom, lastTargets }) {
  const cfg = { _tool: "camera-3d-placement", _version: 1, _date: new Date().toISOString() };
  CFG_KEYS.forEach((k) => { cfg[k] = params[k]; });
  cfg.fovLock = fovLock;
  cfg.zoomOn = zoom.on;
  if (zoom.on) { cfg.zoomWideH = zoom.wideH; cfg.zoomWideV = zoom.wideV; }
  if (lastTargets) cfg.lastTargets = lastTargets;
  const url = URL.createObjectURL(new Blob([JSON.stringify(cfg, null, 2)], { type: "application/json" }));
  downloadURL("camera_config.json", url);
  URL.revokeObjectURL(url);
}

/** Parse an exported config file into the next page state (throws on invalid JSON) */
export function parseConfig(text, current) {
  const cfg = JSON.parse(text);
  const params = { ...current.params };
  // preset first (it sets pw/ph), then explicit values override
  if (cfg.preset) {
    params.preset = cfg.preset;
    const pr = PRESETS[cfg.preset];
    if (pr) { params.pw = pr.w; params.ph = pr.h; }
  }
  CFG_KEYS.forEach((k) => {
    if (cfg[k] === undefined) return;
    params[k] = k === "preset" ? cfg[k] : +cfg[k];
  });

  let fovLock = current.fovLock;
  if (cfg.fovLock !== undefined) fovLock = cfg.fovLock;
  else if (cfg.fovMode !== undefined) fovLock = { "link-v": "v", "link-h": "h", free: null }[cfg.fovMode];

  let zoom = current.zoom;
  if (cfg.zoomOn !== undefined) {
    zoom = cfg.zoomOn
      ? {
        on: true,
        wideH: cfg.zoomWideH !== undefined ? cfg.zoomWideH : +cfg.hfov,
        wideV: cfg.zoomWideV !== undefined ? cfg.zoomWideV : +cfg.vfov,
      }
      : { on: false, wideH: null, wideV: null };
  }
  return { params, fovLock, zoom, lastTargets: cfg.lastTargets || current.lastTargets };
}
