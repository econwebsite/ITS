import React from "react";
import { RotateCcw } from "lucide-react";
import InfoTooltip from "./InfoTooltip";

/**
 * Labelled range slider with a live value badge, an info tooltip and a reset-to-default button.
 * Shift + Arrow keys nudge the value by 10 steps.
 */
const SliderField = ({ label, tip, value, min, max, step, decimals = 1, onChange, defaultValue, disabled = false, id }) => {
  const pct = Math.max(0, Math.min(100, ((value - min) / (max - min)) * 100));
  const changed = defaultValue !== undefined && Math.abs(value - defaultValue) > 1e-9;

  const onKeyDown = (e) => {
    if (!e.shiftKey || (e.key !== "ArrowLeft" && e.key !== "ArrowRight" && e.key !== "ArrowUp" && e.key !== "ArrowDown")) return;
    e.preventDefault();
    const dir = e.key === "ArrowRight" || e.key === "ArrowUp" ? 1 : -1;
    onChange(Math.max(min, Math.min(max, +(value + dir * step * 10).toFixed(6))));
  };

  return (
    <div className="cp-ctrl">
      <label htmlFor={id}>
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
          {(+value).toFixed(decimals)}
        </span>
      </label>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        disabled={disabled}
        style={{ "--pct": `${pct}%` }}
        onKeyDown={onKeyDown}
        onChange={(e) => onChange(+e.target.value)}
      />
    </div>
  );
};

export default SliderField;
