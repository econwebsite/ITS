import React from "react";
import { LocateFixed } from "lucide-react";
import { DEFAULT_PARAMS as D } from "../../config/toolSettings";
import { usePlacement } from "../../state/PlacementContext";
import { xRange } from "../../calculations/geometry";
import SliderField from "../shared/SliderField";

const CameraSettings = () => {
  const { params, setParam, recenter } = usePlacement();
  const x = xRange(params.lanes, params.laneW);
  const roadW = params.lanes * params.laneW;
  const isGantry = Math.abs(params.camX) < roadW / 2;

  return (
    <>
      <div className="cp-mount-row">
        <span>Mount type</span>
        <span className={`cp-mount-badge ${isGantry ? "gantry" : "pole"}`}>
          {isGantry ? "Overhead gantry" : "Roadside pole"}
        </span>
      </div>
      <SliderField
        label="Height (m)" tip="Mounting height above the road. Higher reduces vehicles hiding each other but steepens the view onto the plate."
        value={params.camH} min={1} max={12} step={0.1} defaultValue={D.camH} onChange={(v) => setParam("camH", v)}
      />
      <SliderField
        label="Lateral X (m)" tip="Sideways offset from the road centre. 0 is an overhead gantry; move it sideways for a roadside pole."
        value={params.camX} min={x.min} max={x.max} step={0.1} defaultValue={D.camX} onChange={(v) => setParam("camX", v)}
      />
      <SliderField
        label="Tilt — down angle (deg)" tip="How far the lens points below horizontal. 0° looks at the horizon; larger values look steeply down."
        value={params.tilt} min={0} max={89} step={0.1} defaultValue={D.tilt} onChange={(v) => setParam("tilt", v)}
      />
      <SliderField
        label="Pan — aim L/R (deg)" tip="Left/right rotation. Needed when the camera sits to one side and must swing back across the road."
        value={params.pan} min={-90} max={90} step={0.1} defaultValue={D.pan} onChange={(v) => setParam("pan", v)}
      />
      <SliderField
        label="Working distance (m)" tip="The down-road distance you design for. Re-center aims the camera at the road centre at this distance."
        value={params.aim} min={0} max={150} step={1} decimals={0} defaultValue={D.aim} onChange={(v) => setParam("aim", v)}
      />
      <div className="cp-ctrl">
        <button type="button" className="cp-btn cp-btn--block" onClick={recenter} title="Shortcut: R">
          <LocateFixed size={15} /> Re-center on road
        </button>
      </div>
    </>
  );
};

export default CameraSettings;
