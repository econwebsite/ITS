import React from "react";
import { DEFAULT_PARAMS as D } from "../../config/toolSettings";
import { usePlacement } from "../../state/PlacementContext";
import SliderField from "../shared/SliderField";

const RoadSettings = () => {
  const { params, setParam } = usePlacement();
  return (
    <>
      <SliderField
        label="Lanes" tip="How many lanes the camera must cover. Each lane is checked on its own; results follow the worst one."
        value={params.lanes} min={1} max={6} step={1} decimals={0} defaultValue={D.lanes} onChange={(v) => setParam("lanes", v)}
      />
      <SliderField
        label="Lane width (m)" tip="Centre-to-centre lane spacing. 3.5 m is typical for a motorway lane."
        value={params.laneW} min={2.5} max={4.5} step={0.1} defaultValue={D.laneW} onChange={(v) => setParam("laneW", v)}
      />
    </>
  );
};

export default RoadSettings;
