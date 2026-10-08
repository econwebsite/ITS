import React, { useEffect, useRef } from "react";
import { usePlacement } from "../../state/PlacementContext";

const STEP_DEG = 15;
const STEP_PHI = 0.08;

/**
 * Rotate control: a ring with a North marker, four chevrons and a centre orb.
 * - drag the ring to rotate the scene (same as orbiting with the mouse)
 * - chevrons step the view: left/right rotate, up/down change elevation (hold to repeat)
 * - double-click the orb to reset the heading to North
 */
const RotateControl = () => {
  const { controllerRef } = usePlacement();
  const wrapRef = useRef(null);
  const dialRef = useRef(null);
  const nRef = useRef(null);
  const drag = useRef(null);
  const rep = useRef({ t: 0, iv: 0 });

  const paint = (bearing) => {
    if (dialRef.current) dialRef.current.style.transform = `rotate(${-bearing}deg)`;
    if (nRef.current) nRef.current.style.transform = `rotate(${bearing}deg)`; // keep the "N" upright
  };

  // follow the live view heading (mouse orbit also moves the marker)
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const c = controllerRef.current;
      if (c && !drag.current) paint(c.getBearing());
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf); clearTimeout(rep.current.t); clearInterval(rep.current.iv); };
  }, [controllerRef]);

  const angleAt = (e) => {
    const r = wrapRef.current.getBoundingClientRect();
    return (Math.atan2(e.clientX - (r.left + r.width / 2), -(e.clientY - (r.top + r.height / 2))) * 180) / Math.PI;
  };

  const onDown = (e) => {
    const c = controllerRef.current;
    if (!c) return;
    wrapRef.current.setPointerCapture(e.pointerId);
    drag.current = { start: angleAt(e), bearing: c.getBearing() };
  };
  const onMove = (e) => {
    const d = drag.current, c = controllerRef.current;
    if (!d || !c) return;
    const bearing = (d.bearing - (angleAt(e) - d.start) + 720) % 360; // ring turned clockwise -> heading decreases
    c.setBearing(bearing);
    paint(bearing);
  };
  const onUp = () => { drag.current = null; };

  const stopRepeat = () => { clearTimeout(rep.current.t); clearInterval(rep.current.iv); };
  const press = (dBearing, dPhi) => (e) => {
    e.stopPropagation();
    const step = () => controllerRef.current && controllerRef.current.orbitBy(dBearing, dPhi);
    step();
    stopRepeat();
    rep.current.t = setTimeout(() => { rep.current.iv = setInterval(step, 80); }, 350);
  };
  const reset = () => { if (controllerRef.current) controllerRef.current.setBearing(0); };

  const chev = (name, d, dBearing, dPhi, label) => (
    <g className="cp-chev" role="button" aria-label={label} onPointerDown={press(dBearing, dPhi)} onPointerUp={stopRepeat} onPointerLeave={stopRepeat}>
      <circle className="cp-chev-hit" r="9" cx={name.x} cy={name.y} />
      <path d={d} />
    </g>
  );

  return (
    <div
      className="cp-compass"
      ref={wrapRef}
      onPointerDown={onDown}
      onPointerMove={onMove}
      onPointerUp={onUp}
      onPointerCancel={onUp}
      title="Drag the ring to rotate · arrows step the view · double-click the orb to reset"
      aria-label="Rotate view"
    >
      <svg viewBox="-50 -50 100 100" className="cp-compass-svg">
        <defs>
          <radialGradient id="cpOrb" cx="35%" cy="30%" r="80%">
            <stop offset="0%" stopColor="#bcd6ff" />
            <stop offset="45%" stopColor="#6f86f4" />
            <stop offset="100%" stopColor="#6a2bdc" />
          </radialGradient>
        </defs>
        <circle r="48" className="cp-compass-bg" />
        <circle r="31" className="cp-compass-ring" />
        <g ref={dialRef} className="cp-compass-dial">
          <circle cx="0" cy="-31" r="2.2" className="cp-north-dot" />
          <g transform="translate(0,-41)">
            <text ref={nRef} x="0" y="0" className="cp-north" textAnchor="middle" dominantBaseline="central">N</text>
          </g>
        </g>
        {chev({ x: 0, y: -21 }, "M-4,-19 L0,-23.5 L4,-19", 0, -STEP_PHI, "Raise the view")}
        {chev({ x: 0, y: 21 }, "M-4,19 L0,23.5 L4,19", 0, STEP_PHI, "Lower the view")}
        {chev({ x: -21, y: 0 }, "M-19,-4 L-23.5,0 L-19,4", STEP_DEG, 0, "Rotate left")}
        {chev({ x: 21, y: 0 }, "M19,-4 L23.5,0 L19,4", -STEP_DEG, 0, "Rotate right")}
        <g className="cp-orb" onDoubleClick={reset} onPointerDown={(e) => e.stopPropagation()}>
          <circle r="11" fill="url(#cpOrb)" className="cp-orb-body" />
          <ellipse rx="4.6" ry="11" className="cp-orb-line" />
          <ellipse rx="11" ry="4.6" className="cp-orb-line" />
          <path d="M0,-11 L11,0 L0,11 L-11,0 Z" className="cp-orb-line" />
        </g>
      </svg>
    </div>
  );
};

export default RotateControl;
