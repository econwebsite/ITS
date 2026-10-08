import React from "react";
import { Maximize2, Video } from "lucide-react";
import { usePlacement } from "../../state/PlacementContext";

const SensorViewCard = () => {
  const { sensorRef, sensorCaption, openCamModal } = usePlacement();
  return (
    <div className="cp-card cp-sensor" onClick={openCamModal} role="button" tabIndex={0}
      onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") openCamModal(); }}>
      <h2 className="cp-card-title">
        <Video size={16} /> Camera sensor view
        <Maximize2 size={14} className="cp-card-title-end" />
      </h2>
      <canvas ref={sensorRef} />
      <div className="cp-sensor-cap">{sensorCaption}</div>
    </div>
  );
};

export default SensorViewCard;
