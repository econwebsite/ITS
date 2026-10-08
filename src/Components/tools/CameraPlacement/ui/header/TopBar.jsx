import React from "react";
import { BookOpen, Download, ImageDown, ScanEye, Sparkles, Upload } from "lucide-react";
import { usePlacement } from "../../state/PlacementContext";

/** Title bar: brand + page actions, all on one line */
const TopBar = () => {
  const { openManual, setSolverOpen, exportCfg, importCfg, saveSetup } = usePlacement();

  return (
    <header className="cp-header">
      <div className="cp-header-main">
        <div className="cp-header-title">
          <span className="cp-header-logo"><ScanEye size={24} /></span>
          <div className="cp-header-text">
            <h1>3D Camera Placement</h1>
            <p>Roadside pole to gantry, with per-lane plate pixels</p>
          </div>
        </div>

        <div className="cp-toolbar">
          <button type="button" className="cp-btn cp-btn--primary" data-tour="solve" onClick={() => setSolverOpen(true)} title="Autocompute (S)" aria-label="Autocompute">
            <Sparkles size={15} /> <span className="cp-btn-label cp-keep">Autocompute</span>
          </button>
          <div className="cp-toolbar-group">
            <button type="button" className="cp-btn" onClick={saveSetup} title="Save setup image" aria-label="Save setup image">
              <ImageDown size={15} /> <span className="cp-btn-label">Save setup image</span>
            </button>
            <button type="button" className="cp-btn" onClick={exportCfg} title="Export config" aria-label="Export config">
              <Download size={15} /> <span className="cp-btn-label">Export config</span>
            </button>
            <label className="cp-btn" style={{ cursor: "pointer", margin: 0 }} title="Import config">
              <Upload size={15} /> <span className="cp-btn-label">Import config</span>
              <input
                type="file"
                accept=".json,application/json"
                style={{ display: "none" }}
                onChange={(e) => {
                  if (e.target.files && e.target.files[0]) importCfg(e.target.files[0]);
                  e.target.value = "";
                }}
              />
            </label>
          </div>
          <button type="button" className="cp-btn cp-btn--ghost" onClick={openManual} title="Open the manual (M)" aria-label="Manual">
            <BookOpen size={15} /> <span className="cp-btn-label">Manual</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default TopBar;
