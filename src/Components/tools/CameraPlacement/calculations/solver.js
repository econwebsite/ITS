// Autocompute solver — pure JS, mirrors THREE's projection math
const D = Math.PI / 180;
const IN2M = 0.0254;
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const crs = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
const nrm = (a) => { const m = Math.hypot(a[0], a[1], a[2]); return [a[0] / m, a[1] / m, a[2] / m]; };

function camera(p) {
  // Honour the FOV lock: recompute the derived axis from the other + sensor aspect on every evaluation
  let hfov = p.hfov, vfov = p.vfov;
  if (p.fovLock === "v" && p.SW && p.SH) vfov = (2 * Math.atan(Math.tan(hfov * D / 2) * p.SH / p.SW)) / D;
  else if (p.fovLock === "h" && p.SW && p.SH) hfov = (2 * Math.atan(Math.tan(vfov * D / 2) * p.SW / p.SH)) / D;
  const tr = p.tilt * D, pr = p.pan * D;
  const f = [Math.sin(pr) * Math.cos(tr), -Math.sin(tr), Math.cos(pr) * Math.cos(tr)];
  const r = nrm(crs(f, [0, 1, 0]));
  const u = crs(r, f);
  return { C: [p.camX, p.camH, 0], f, r, u, tanH: Math.tan(hfov * D / 2), tanV: Math.tan(vfov * D / 2) };
}

function project(cam, P, SW, SH) {
  const v = sub(P, cam.C);
  const zc = dot(v, cam.f);
  if (zc <= 1e-4) return { front: false, inside: false, px: [0, 0] };
  const ndx = (dot(v, cam.r) / zc) / cam.tanH, ndy = (dot(v, cam.u) / zc) / cam.tanV;
  return {
    front: true,
    inside: ndx >= -1 && ndx <= 1 && ndy >= -1 && ndy <= 1,
    px: [(ndx * 0.5 + 0.5) * SW, (1 - (ndy * 0.5 + 0.5)) * SH],
  };
}

function plateAt(p, cam, laneX, d) {
  const W = p.plateW_in * IN2M, H = p.plateH_in * IN2M;
  const psi = (p.yaw || 0) * D, cy = Math.cos(psi), sy = Math.sin(psi);
  const uL = [-W / 2, W / 2, W / 2, -W / 2], vL = [H / 2, H / 2, -H / 2, -H / 2];
  const pts = [];
  let inFrame = true;
  for (let i = 0; i < 4; i++) {
    const pr = project(cam, [laneX + uL[i] * cy, p.pmh + vL[i], d + uL[i] * sy], p.SW, p.SH);
    if (!pr.front || !pr.inside) inFrame = false;
    pts.push(pr.px);
  }
  const mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
  const dst = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);
  return {
    inFrame,
    wPx: dst(mid(pts[0], pts[3]), mid(pts[1], pts[2])),
    hPx: dst(mid(pts[0], pts[1]), mid(pts[3], pts[2])),
  };
}

function offsetZone(p, cam, laneX) {
  const req = p.reqPx, metric = p.metric, dmin = 1, dmax = 170, step = 0.5;
  let inNear = null, inFar = null;
  const val = (d) => {
    const r = plateAt(p, cam, laneX, d);
    return { ok: r.inFrame, m: metric === "width" ? r.wPx : r.hPx };
  };
  for (let d = dmin; d <= dmax; d += step) {
    const r = val(d);
    if (r.ok) { if (inNear === null) inNear = d; inFar = d; }
  }
  if (inNear === null) return { inNear: null, inFar: null, peakPx: 0, readNear: null, readFar: null, L: 0 };
  const mAt = (d) => val(d).m;
  if (mAt(inNear) < req) return { inNear, inFar, peakPx: mAt(inNear), readNear: null, readFar: null, L: 0 };
  let readFar;
  if (mAt(inFar) >= req) readFar = inFar;
  else {
    let lo = inNear, hi = inFar;
    for (let it = 0; it < 40; it++) { const m = (lo + hi) / 2; if (mAt(m) >= req) lo = m; else hi = m; }
    readFar = lo;
  }
  return { inNear, inFar, peakPx: mAt(inNear), readNear: inNear, readFar, L: Math.max(0, readFar - inNear) };
}

function laneZone(p, cam, laneCenter) {
  const n = p.covSamples || 5, frac = p.covFrac == null ? 1 : p.covFrac, half = (p.laneW / 2) * frac;
  let worstL = Infinity, worstPeak = Infinity, wz = null, wx = laneCenter;
  for (let i = 0; i < n; i++) {
    const x = n > 1 ? laneCenter - half + (2 * half * i) / (n - 1) : laneCenter;
    const z = offsetZone(p, cam, x);
    if (z.peakPx < worstPeak) worstPeak = z.peakPx;
    if (z.L < worstL) { worstL = z.L; wz = z; wx = x; }
  }
  return {
    inNear: wz ? wz.inNear : null, inFar: wz ? wz.inFar : null, peakPx: worstPeak,
    readNear: wz ? wz.readNear : null, readFar: wz ? wz.readFar : null, L: worstL, worstOffsetX: wx,
  };
}

export function evaluate(p) {
  const cam = camera(p), roadW = p.lanes * p.laneW, lanesDetail = [];
  let worstPeak = Infinity, worstL = Infinity;
  for (let i = 0; i < p.lanes; i++) {
    const laneX = -roadW / 2 + (i + 0.5) * p.laneW;
    const label = p.camX > 0 ? p.lanes - i : i + 1;
    const z = laneZone(p, cam, laneX);
    lanesDetail.push({ lane: label, laneX, ...z });
    worstPeak = Math.min(worstPeak, z.peakPx);
    worstL = Math.min(worstL, z.L);
  }
  lanesDetail.sort((a, b) => a.lane - b.lane);
  const need = p.speed_kmh / 3.6;
  return {
    worstPeak, worstL,
    maxSpeed_kmh: worstL * p.fps * 3.6,
    frames: p.speed_kmh > 0 ? Math.floor((worstL * p.fps) / need) : Infinity,
    lanesDetail, need,
  };
}

function score(p, cfg) {
  const e = evaluate(p), need = p.speed_kmh / 3.6;
  const defPixels = cfg.constraints.pixels ? Math.max(0, p.reqPx - e.worstPeak) : 0;
  const defCapture = cfg.constraints.capture ? Math.max(0, need - e.worstL * p.fps) : 0;
  const violation = defPixels / Math.max(1, p.reqPx) + defCapture / Math.max(0.1, need);
  const objective = cfg.binding === "pixels" ? e.worstPeak : e.worstL;
  const feasible = violation < 1e-9;
  const tiebreak = (cfg.binding === "pixels" ? 1e-3 * e.worstL : 0) - 1e-4 * p.camH;
  const fitness = feasible ? objective + tiebreak : -1e6 - violation * 1e3;
  return { fitness, feasible, violation, objective, e, defPixels, defCapture };
}

function aimAt(camH, camX, work, pmh) {
  const dx = 0 - camX, dz = Math.max(1, work), horiz = Math.hypot(dx, dz);
  const pan = (Math.atan2(dx, dz) * 180) / Math.PI;
  const tilt = (Math.atan2(camH - pmh, horiz) * 180) / Math.PI;
  return { tilt: Math.max(0, Math.min(89, tilt)), pan: Math.max(-90, Math.min(90, pan)) };
}

export function solve(base, cfg) {
  const free = cfg.free, rand = (a, b) => a + Math.random() * (b - a);

  function refine(p0, scoreCfg) {
    let p = { ...p0 }, best = score(p, scoreCfg);
    let steps = free.map((f) => (f.max - f.min) * 0.25);
    for (let it = 0; it < 60; it++) {
      let imp = false;
      free.forEach((f, i) => {
        for (const dir of [1, -1]) {
          const c = { ...p };
          c[f.key] = Math.max(f.min, Math.min(f.max, p[f.key] + dir * steps[i]));
          const s = score(c, scoreCfg);
          if (s.fitness > best.fitness) { best = s; p = c; imp = true; }
        }
      });
      if (!imp) steps = steps.map((s) => s * 0.5);
      if (steps.every((s) => s < 1e-3)) break;
    }
    return { p, s: best };
  }

  function bestAtLanes(lanes, scoreCfg) {
    const fixed = { ...base, lanes };
    const seeds = [{ ...fixed }];
    // deterministic "aimed at road" seeds so the search always starts from a sane pose
    const hasT = free.some((f) => f.key === "tilt"), hasP = free.some((f) => f.key === "pan");
    if (hasT || hasP) {
      [10, 20, 40, 80].forEach((work) => {
        const aim = aimAt(fixed.camH, fixed.camX, work, fixed.pmh);
        const q = { ...fixed };
        const tf = free.find((f) => f.key === "tilt"), pf = free.find((f) => f.key === "pan");
        if (tf) q.tilt = Math.max(tf.min, Math.min(tf.max, aim.tilt));
        if (pf) q.pan = Math.max(pf.min, Math.min(pf.max, aim.pan));
        seeds.push(q);
      });
    }
    const N = Math.max(24, 14 * free.length * free.length);
    for (let i = 0; i < N; i++) {
      const q = { ...fixed };
      free.forEach((f) => (q[f.key] = rand(f.min, f.max)));
      seeds.push(q);
    }
    seeds.sort((a, b) => score(b, scoreCfg).fitness - score(a, scoreCfg).fitness);
    let gb = null;
    for (const seed of seeds.slice(0, 8)) {
      const { p, s } = refine(seed, scoreCfg);
      if (!gb || s.fitness > gb.s.fitness) gb = { p, s };
    }
    return gb;
  }

  if (cfg.binding === "lanes") {
    // Largest lane count (1..maxLanes) that still satisfies every enabled constraint
    const innerBinding = cfg.constraints.capture ? "speed" : "pixels";
    const innerCfg = { ...cfg, binding: innerBinding };
    const maxL = cfg.maxLanes || 6;
    let bestFeasible = null, bestAny = null;
    const sweep = [];
    for (let L = 1; L <= maxL; L++) {
      const r = bestAtLanes(L, innerCfg);
      sweep.push({ lanes: L, feasible: r.s.feasible, worstPeak: r.s.e.worstPeak, worstL: r.s.e.worstL });
      if (r.s.feasible && (!bestFeasible || L > bestFeasible.lanes)) bestFeasible = { p: r.p, s: r.s, lanes: L };
      if (!bestAny || r.s.violation < bestAny.s.violation - 1e-9 ||
        (Math.abs(r.s.violation - bestAny.s.violation) < 1e-9 && L < bestAny.lanes)) bestAny = { p: r.p, s: r.s, lanes: L };
    }
    const chosen = bestFeasible || bestAny;
    chosen.sweep = sweep;
    chosen.maxFeasibleLanes = bestFeasible ? bestFeasible.lanes : null;
    return chosen;
  }

  const lanesList = cfg.freeLanes ? [1, 2, 3, 4, 5, 6] : [base.lanes];
  let gb = null;
  for (const lanes of lanesList) {
    const r = bestAtLanes(lanes, cfg);
    if (!gb || r.s.fitness > gb.s.fitness) gb = { p: r.p, s: r.s, lanes };
  }
  return gb;
}
