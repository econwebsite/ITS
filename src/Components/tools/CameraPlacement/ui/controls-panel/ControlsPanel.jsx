import React from "react";
import { Aperture, Camera, PanelLeftClose, Route, Ruler } from "lucide-react";
import { usePlacement } from "../../state/PlacementContext";
import AccordionSection from "../shared/AccordionSection";
import LensSettings from "./LensSettings";
import RoadSettings from "./RoadSettings";
import CameraSettings from "./CameraSettings";
import SensorPlateSettings from "./SensorPlateSettings";

const ControlsPanel = () => {
  const { setSidebarOpen, fullView, setDrawerOpen } = usePlacement();
  return (
  <aside className="cp-card cp-panel">
    <div className="cp-panel-top">
      <span>Controls</span>
      <button
        type="button"
        className="cp-panel-hide"
        onClick={() => (fullView ? setDrawerOpen(false) : setSidebarOpen(false))}
        title="Hide controls panel (B)"
        aria-label="Hide controls panel"
      >
        <PanelLeftClose size={18} />
      </button>
    </div>
    <AccordionSection title="Road" icon={Route} tourId="road">
      <RoadSettings />
    </AccordionSection>
    <AccordionSection title="Camera position & aim" icon={Camera} tourId="camera">
      <CameraSettings />
    </AccordionSection>
    <AccordionSection title="Lens & field of view" icon={Aperture} tourId="lens">
      <LensSettings />
    </AccordionSection>
    <AccordionSection title="Sensor & plate" icon={Ruler} tourId="plate">
      <SensorPlateSettings />
    </AccordionSection>
  </aside>
  );
};

export default ControlsPanel;
