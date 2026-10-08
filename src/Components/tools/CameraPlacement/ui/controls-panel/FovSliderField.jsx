import React from "react";
import { Lock, LockOpen, RotateCcw } from "lucide-react";
import ClickToEditNumber from "../shared/ClickToEditNumber";
import InfoTooltip from "../shared/InfoTooltip";

const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v));

/**
 * One FOV axis: label, tooltip, optional padlock, click-to-type readout, reset and slider.
 * `zone` ([lo, hi] in degrees) shades the real range of a zoom lens on the track.
 */
const FovSliderField = ({
  label, tip, value, min, max, step = 0.1, derived, onChange, lockable = false, onToggleLock, zone, defaultValue,
}) => {
  const commitTyped = (v) => onChange(clamp(v, min, max));
  const changed = defaultValue !== undefined && !derived && Math.abs(value - defaultValue) > 1e-9;

  let zoneStyle = null;
  if (zone) {
    const pct = (v) => clamp(((v - min) / (max - min)) * 100, 0, 100);
    const l = pct(Math.min(zone[0], zone[1])), r = pct(Math.max(zone[0], zone[1]));
    zoneStyle = { left: `${l}%`, width: `${r - l}%` };
  }

  const onKeyDown = (e) => {
    if (!e.shiftKey || !/^Arrow(Left|Right|Up|Down)$/.test(e.key)) return;
    e.preventDefault();
    const dir = e.key === "ArrowRight" || e.key === "ArrowUp" ? 1 : -1;
    onChange(clamp(+(value + dir * step * 10).toFixed(6), min, max));
  };

  return (
    <div className="cp-ctrl">
      <label>
        <span className="cp-lbl">{label}{tip && <InfoTooltip text={tip} />}</span>
        <span className="cp-val">
          {defaultValue !== undefined && (
            <button
              type="button"
              className={`cp-reset${changed ? " show" : ""}`}
              title="Reset to default"
              aria-label={`Reset ${label} to default`}
              tabIndex={changed ? 0 : -1}
              onClick={() => onChange(defaultValue)}
            >
              <RotateCcw size={12} />
            </button>
          )}
          {lockable && (
            <button
              type="button"
              className={`cp-lockbtn${derived ? " on" : ""}`}
              title={label.startsWith("Horizontal") ? "Lock hFOV (derive from vFOV + sensor)" : "Lock vFOV (derive from hFOV + sensor)"}
              onClick={onToggleLock}
            >
              {derived ? <Lock size={13} /> : <LockOpen size={13} />}
            </button>
          )}
          <ClickToEditNumber value={value} locked={derived} onCommit={commitTyped} />
        </span>
      </label>
      <div className="cp-sliderwrap">
        {zoneStyle && <div className="cp-zoomzone on" style={zoneStyle} />}
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          disabled={derived}
          style={{ "--pct": `${clamp(((value - min) / (max - min)) * 100, 0, 100)}%` }}
          onKeyDown={onKeyDown}
          onChange={(e) => onChange(+e.target.value)}
        />
      </div>
    </div>
  );
};

export default FovSliderField;
