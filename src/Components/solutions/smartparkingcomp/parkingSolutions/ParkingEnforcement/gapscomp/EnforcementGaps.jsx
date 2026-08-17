import React from "react";
import "./EnforcementGaps.css";

import bgImage from "../../../assets/bg-parking-image.jpg";

const enforcementGaps = [
  {
    title: "Violations Happen in Under 5 Minutes",
    description:
      "Most double-parking and bus-stop-blocking events last under five minutes, too fast for any human response. The violation is gone before it can be recorded. Automated ANPR cameras capture it in real time.",
  },
  {
    title: "No Coverage Overnight and Off-Hours",
    description:
      "Bike lanes, loading zones, and no-standing zones go unmonitored for hours during off-peak and overnight periods. Stationary ANPR cameras enforce continuously, with no gaps in coverage.",
  },
  {
    title: "Incomplete Evidence Dismisses NOVs",
    description:
      "A Notice of Violation (NOV) requires a complete evidence package: plate string, GPS location, UTC timestamp, and image. A blurry plate in headlight glare, a dropped GPS fix, or a missing timestamp can get a citation challenged and dismissed at adjudication.",
  },
  {
    title: "One Location, Multiple Violation Types",
    description:
      "A single curb zone can generate double parking, bus stop blocking, bike lane incursion, and loading zone overstay violations simultaneously. City programs need multi-violation detection from one mounted camera, not a separate unit per violation type.",
  },
  {
    title: "Siloed Systems Delay NOV Processing",
    description:
      "When camera data, adjudication platforms, and curb maps are disconnected, violations expire before reaching the review queue. Real-time API integration between the camera and the enforcement platform determines whether a captured violation becomes an issued NOV.",
  },
  {
    title: "Infrastructure Gaps at Curb Locations",
    description:
      "Many enforcement locations — bike lane junctions, temporary zones, loading bays — have no PoE infrastructure. Wired-only cameras leave these locations uncovered, making flexible connectivity a must-have deployment requirement.",
  },
];

const EnforcementGaps = () => {
  return (
    <section className="enforcement-gaps">
      <div className="enforcement-gaps-container">

        <div className="enforcement-gaps-header">
          <span className="enforcement-gaps-tag">
            ENFORCEMENT CHALLENGES
          </span>

          <h2>
            What Enforcement Gaps Are Cities Trying to Close?
          </h2>
        </div>

        <div className="enforcement-gaps-grid">
          {enforcementGaps.map((gap, index) => (
            <article
              className="enforcement-gap-card"
              key={gap.title}
              style={{
                backgroundImage: `url(${bgImage})`,
              }}
            >
              <div className="enforcement-gap-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="enforcement-gap-overlay"></div>

              <div className="enforcement-gap-content">
                <h3>{gap.title}</h3>

                <p>{gap.description}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EnforcementGaps;