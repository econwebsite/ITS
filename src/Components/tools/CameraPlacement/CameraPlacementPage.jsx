import React from "react";
import { Helmet } from "react-helmet-async";
import { PlacementProvider, usePlacement } from "./state/PlacementContext";
import TopBar from "./ui/header/TopBar";
import LiveScene from "./ui/live-scene/LiveScene";
import ControlsPanel from "./ui/controls-panel/ControlsPanel";
import CoverageCard from "./ui/side-cards/CoverageCard";
import SensorViewCard from "./ui/side-cards/SensorViewCard";
import SensorFullscreenPopup from "./ui/popups/SensorFullscreenPopup";
import AutocomputePopup from "./ui/popups/AutocomputePopup";
import KeyboardShortcutsPopup from "./ui/popups/KeyboardShortcutsPopup";
import GuidedTour from "./ui/tour/GuidedTour";
import "./camera-placement.css";

const Layout = () => {
  const { fullView, drawerOpen, sidebarOpen } = usePlacement();
  return (
    <div className={`cp-root${fullView ? " cp-full" : ""}${drawerOpen ? " cp-drawer-open" : ""}${sidebarOpen ? "" : " cp-collapsed"}`}>
      <TopBar />
      <div className="cp-body">
        <ControlsPanel />
        <LiveScene />
        <div className="cp-side">
          <CoverageCard />
          <SensorViewCard />
        </div>
      </div>
      <SensorFullscreenPopup />
      <AutocomputePopup />
      <KeyboardShortcutsPopup />
      <GuidedTour />
    </div>
  );
};

const CameraPlacementPage = () => (
  <PlacementProvider>
    <Helmet>
      <title>3D Camera Placement Tool — Road, Gantry &amp; Plate Pixels | TrafficSenz</title>
      <meta
        name="description"
        content="Plan ANPR/ALPR camera installs in 3D: set road, mount, lens and plate, then see per-lane plate pixels, coverage and capture speed."
      />
    </Helmet>
    <Layout />
  </PlacementProvider>
);

export default CameraPlacementPage;
