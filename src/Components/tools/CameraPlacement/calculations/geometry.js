const RAD = Math.PI / 180;

// Lane 1 = nearest the camera's mounted side. camX>0 (right) numbers right->left.
export const laneLabel = (i, lanes, camX) => (camX > 0 ? lanes - i : i + 1);

export const deriveV = (hDeg, sw, sh) =>
  Math.max(1, Math.min(90, +((2 * Math.atan(Math.tan(hDeg * RAD / 2) * sh / sw)) / RAD).toFixed(1)));

export const deriveH = (vDeg, sw, sh) =>
  Math.max(1, Math.min(120, +((2 * Math.atan(Math.tan(vDeg * RAD / 2) * sw / sh)) / RAD).toFixed(1)));

export const diagonalFov = (hfov, vfov) =>
  (2 * Math.atan(Math.sqrt(Math.tan(hfov * RAD / 2) ** 2 + Math.tan(vfov * RAD / 2) ** 2))) / RAD;

export const xRange = (lanes, laneW) => {
  const rw = lanes * laneW;
  return { min: +(-rw / 2 - 4).toFixed(1), max: +(rw / 2 + 4).toFixed(1) };
};

// Tilt/pan that point the optical axis at the road centre at the working distance
export function recenterAngles(camH, camX, work, pmh) {
  const dx = 0 - camX;
  const horiz = Math.hypot(dx, work);
  let pan = Math.atan2(dx, work) / RAD;
  let tilt = Math.atan2(camH - pmh, horiz) / RAD;
  pan = Math.max(-90, Math.min(90, Math.round(pan * 10) / 10));
  tilt = Math.max(0, Math.min(89, Math.round(tilt * 10) / 10));
  return { tilt, pan };
}

export function zoomInfo(zoom, params) {
  if (!zoom.on || zoom.wideH === null) return "—";
  const wide = zoom.wideH, tele = params.teleHfov, cur = params.hfov;
  const curF = Math.tan(wide * RAD / 2) / Math.tan(cur * RAD / 2);
  const maxF = Math.tan(wide * RAD / 2) / Math.tan(tele * RAD / 2);
  return `${curF.toFixed(2)}× of ${maxF.toFixed(2)}× max  (wide ${wide.toFixed(1)}° → tele ${tele.toFixed(1)}°)`;
}

// Keep the zoomable FOV inside the lens's tele..wide range
export function clampToZoom(axis, v, zoom, params, fovLock) {
  if (!zoom.on || zoom.wideH === null) return v;
  if (axis === "hfov" && fovLock !== "h") {
    const lo = Math.min(params.teleHfov, zoom.wideH), hi = Math.max(params.teleHfov, zoom.wideH);
    return Math.max(lo, Math.min(hi, v));
  }
  if (axis === "vfov" && fovLock !== "v") {
    const lo = Math.min(params.teleVfov, zoom.wideV), hi = Math.max(params.teleVfov, zoom.wideV);
    return Math.max(lo, Math.min(hi, v));
  }
  return v;
}

// Re-derive the locked FOV axis (and tele pair) from the other axis + sensor aspect
export function applyFovLock(params, lock, zoomOn) {
  const next = { ...params };
  if (lock === "v") next.vfov = deriveV(next.hfov, next.sw, next.sh);
  else if (lock === "h") next.hfov = deriveH(next.vfov, next.sw, next.sh);
  if (zoomOn) {
    if (lock === "v") next.teleVfov = deriveV(next.teleHfov, next.sw, next.sh);
    else if (lock === "h") next.teleHfov = deriveH(next.teleVfov, next.sw, next.sh);
  }
  return next;
}
