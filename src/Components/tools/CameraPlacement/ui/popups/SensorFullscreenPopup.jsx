import React from "react";
import { Download, X } from "lucide-react";
import { usePlacement } from "../../state/PlacementContext";

/** Full-resolution view of exactly what the camera sees, with PNG export */
const SensorFullscreenPopup = () => {
  const { camOpen, setCamOpen, camFullRef, params, saveSensorPng } = usePlacement();
  return (
    <div
      className={`cp-cam-modal${camOpen ? " open" : ""}`}
      onClick={(e) => { if (e.target === e.currentTarget) setCamOpen(false); }}
    >
      <button type="button" className="cp-close cp-close--dark" aria-label="Close" onClick={() => setCamOpen(false)}>
        <X size={20} />
      </button>
      <canvas ref={camFullRef} className="cp-cam-full" />
      <div className="cp-cam-bar">
        <span className="cp-cam-info">Full sensor resolution {params.sw}×{params.sh}</span>
        <button type="button" className="cp-btn cp-btn--primary" onClick={saveSensorPng}><Download size={15} /> Save PNG</button>
      </div>
    </div>
  );
};

export default SensorFullscreenPopup;
