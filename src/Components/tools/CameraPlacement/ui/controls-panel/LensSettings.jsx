import React from "react";
import { DEFAULT_PARAMS as D } from "../../config/toolSettings";
import { usePlacement } from "../../state/PlacementContext";
import InfoTooltip from "../shared/InfoTooltip";
import FovSliderField from "./FovSliderField";

/** Horizontal / vertical FOV (with padlocks), diagonal readout and the optional zoom-lens pair */
const LensSettings = () => {
  const { params, setParam, fovLock, toggleLock, zoom, toggleZoom, dfov, zoomText } = usePlacement();
  const hDerived = fovLock === "h";
  const vDerived = fovLock === "v";

  const hint = vDerived ? "vFOV auto from sensor" : hDerived ? "hFOV auto from sensor" : "H & V independent";

  return (
    <>
      <FovSliderField
        label="Horizontal FOV (deg)" tip="Horizontal field of view from the lens datasheet. Type an exact value by clicking the number."
        value={params.hfov} min={1} max={120} derived={hDerived} lockable defaultValue={D.hfov}
        onToggleLock={() => toggleLock("h")} onChange={(v) => setParam("hfov", v)}
        zone={zoom.on && !hDerived ? [params.teleHfov, zoom.wideH] : null}
      />
      <FovSliderField
        label="Vertical FOV (deg)" tip="Vertical field of view. Lock it (padlock) to derive it from the horizontal FOV and the sensor shape."
        value={params.vfov} min={1} max={90} derived={vDerived} lockable defaultValue={D.vfov}
        onToggleLock={() => toggleLock("v")} onChange={(v) => setParam("vfov", v)}
        zone={zoom.on && !vDerived ? [params.teleVfov, zoom.wideV] : null}
      />

      <div className="cp-hint-line">
        Diagonal (computed): <b>{dfov.toFixed(1)}</b>&deg; &nbsp;<span className="cp-muted">{hint}</span>
      </div>

      <div className="cp-ctrl cp-zoom-toggle">
        <label className="cp-chk">
          <input type="checkbox" checked={zoom.on} onChange={(e) => toggleZoom(e.target.checked)} /> Zoom lens (adds tele FOV)
          <InfoTooltip text="Adds a narrower tele FOV so you can model a zoom lens. The current FOV becomes the wide end." />
        </label>
      </div>

      {zoom.on && (
        <div>
          <FovSliderField
            label="Tele horizontal FOV (deg)" tip="Narrowest horizontal angle the zoom lens reaches."
            value={params.teleHfov} min={1} max={120} derived={hDerived} defaultValue={D.teleHfov}
            onChange={(v) => setParam("teleHfov", v)}
          />
          <FovSliderField
            label="Tele vertical FOV (deg)" tip="Narrowest vertical angle the zoom lens reaches."
            value={params.teleVfov} min={1} max={90} derived={vDerived} defaultValue={D.teleVfov}
            onChange={(v) => setParam("teleVfov", v)}
          />
          <div className="cp-hint-line" style={{ margin: "-2px 0 12px" }}>
            Zoom range (wide&rarr;tele): <b>{zoomText}</b>
          </div>
        </div>
      )}
    </>
  );
};

export default LensSettings;
