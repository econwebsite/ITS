import React from "react";
import { Mouse } from "lucide-react";
import { usePlacement } from "../../state/PlacementContext";
import RotateControl from "./RotateControl";
import ViewSwitch from "./ViewSwitch";
import SceneUtilityButtons from "./SceneUtilityButtons";

/** 3D viewport: three.js mount point plus view toolbar, utilities, rotate control and a hint overlay */
const LiveScene = () => {
  const { mountRef } = usePlacement();
  return (
    <div className="cp-viewport">
      <div className="cp-scene" ref={mountRef} />
      <ViewSwitch />
      <SceneUtilityButtons />
      <RotateControl />
      <div className="cp-hint">
        <Mouse size={14} /> drag to orbit · scroll to zoom · <span className="cp-hint-dot" /> green = plate readable in frustum
      </div>
    </div>
  );
};

export default LiveScene;
