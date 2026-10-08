import React from "react";
import { MapPinned } from "lucide-react";
import { usePlacement } from "../../state/PlacementContext";

const dash = "—";

const Stat = ({ label, value }) => (
  <div className="cp-stat">
    <span className="cp-stat-label">{label}</span>
    <span className="cp-stat-value">{value}</span>
  </div>
);

const CoverageCard = () => {
  const { results, params } = usePlacement();
  const lanes = results ? results.lanes : [];

  return (
    <div className="cp-card cp-hud">
      <h2 className="cp-card-title"><MapPinned size={16} /> Coverage</h2>
      <div className="cp-stats">
        <Stat label="Road width" value={results ? `${results.roadW.toFixed(1)} m` : dash} />
        <Stat label="Slant to plate" value={results ? `${results.slant.toFixed(1)} m` : dash} />
        <Stat label="Near on road" value={results ? `${results.near.toFixed(1)} m` : dash} />
        <Stat label="Far on road" value={results ? `${results.farClamped ? "≥" : ""}${results.far.toFixed(1)} m` : dash} />
      </div>

      <h3 className="cp-card-sub">Per-lane W&times;H &middot; char (px)</h3>
      <div className="cp-lanes2">
        {lanes.map((L) => (
          <div className={`cp-lane2 ${L.inView ? "in" : "out"}`} key={L.lane}>
            <span className="cp-lane2-name">Lane {L.lane}</span>
            {L.inView ? (
              <>
                <span className="cp-lane2-size">
                  <b>{Math.round(L.wPx)}</b><i>×</i><b>{Math.round(L.hPx)}</b>
                </span>
                <span className="cp-lane2-char">c{Math.round(L.hPx * params.charRatio)}</span>
              </>
            ) : (
              <span className="cp-lane2-off">{dash}</span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CoverageCard;
