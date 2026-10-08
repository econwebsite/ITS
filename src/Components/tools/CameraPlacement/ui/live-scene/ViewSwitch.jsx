import React from "react";
import { Box, Grid2x2, Maximize, Minimize, PanelLeftOpen, PanelLeft } from "lucide-react";
import { usePlacement } from "../../state/PlacementContext";

/** 2D / 3D segmented switch, full-view button, and the controls-panel toggle */
const ViewSwitch = () => {
  const {
    viewMode, setViewMode, fullView, setFullView, drawerOpen, setDrawerOpen, sidebarOpen, setSidebarOpen,
  } = usePlacement();
  return (
    <div className="cp-vt">
      {!fullView && !sidebarOpen && (
        <button
          type="button"
          className="cp-vt-sq"
          onClick={() => setSidebarOpen(true)}
          title="Show controls panel (B)"
          aria-label="Show controls panel"
        >
          <PanelLeftOpen size={19} />
        </button>
      )}
      <div className="cp-vt-seg" role="tablist" aria-label="View mode">
        <button type="button" role="tab" aria-selected={viewMode === "2d"} className={viewMode === "2d" ? "on" : ""}
          onClick={() => setViewMode("2d")} title="Top-down plan view (2)">
          <Grid2x2 size={16} /> 2D
        </button>
        <button type="button" role="tab" aria-selected={viewMode === "3d"} className={viewMode === "3d" ? "on" : ""}
          onClick={() => setViewMode("3d")} title="Orbit view (3)">
          <Box size={16} /> 3D
        </button>
      </div>
      <button
        type="button"
        className="cp-vt-sq"
        onClick={() => { setFullView(!fullView); setDrawerOpen(false); }}
        title={fullView ? "Exit full view (Esc)" : "Full view (F)"}
        aria-label={fullView ? "Exit full view" : "Full view"}
      >
        {fullView ? <Minimize size={19} /> : <Maximize size={19} />}
      </button>
      {fullView && (
        <button type="button" className={`cp-vt-ctrl${drawerOpen ? " on" : ""}`} onClick={() => setDrawerOpen(!drawerOpen)}>
          <PanelLeft size={17} /> <span className="cp-vt-ctrl-label">Controls</span>
        </button>
      )}
    </div>
  );
};

export default ViewSwitch;
