import React from "react";
import "./EnforcementGaps.css";

import bgImage from "../../../assets/800x600.png";
import img1 from "../../../../../../assets/solutionpage/smart-parking-management/parking-enforcement/enforcement-1.png"
import img2 from "../../../../../../assets/solutionpage/smart-parking-management/parking-enforcement/enforcement-2.png"
import img3 from "../../../../../../assets/solutionpage/smart-parking-management/parking-enforcement/enforcement-3.png"
import img4 from "../../../../../../assets/solutionpage/smart-parking-management/parking-enforcement/enforcement-4.png"
import img5 from "../../../../../../assets/solutionpage/smart-parking-management/parking-enforcement/enforcement-5.png"
import img6 from "../../../../../../assets/solutionpage/smart-parking-management/parking-enforcement/enforcement-6.png"

const enforcementGaps = [
  {
    image:img1,
    title: "Violations Happen in Under 5 Minutes",
    description:
"Most double-parking and bus-stop-blocking events last under five minutes, too fast for any human response. The violation is gone before it can be recorded. Automated ANPR cameras capture it in real time."  },
  {image:img2,
    title: "No Coverage Overnight and Off-Hours",
    description:
"Bike lanes, loading zones, and no-standing zones go unmonitored for hours during off-peak and overnight periods. Stationary ANPR cameras enforce continuously, with no gaps in coverage."  },
  {image:img3,
    title: "Incomplete Evidence Dismisses NOVs",
    description:
"A Notice of Violation (NOV) requires a complete evidence package: plate string, GPS location, UTC timestamp, and image. A blurry plate in headlight glare, a dropped GPS fix, or a missing timestamp can get a citation challenged and dismissed at adjudication."  },
  {image:img4,
    title: "One Location, Multiple Violation Types",
    description:
"A single curb zone can generate double parking, bus stop blocking, bike lane incursion, and loading zone overstay violations simultaneously. City programs need multi-violation detection from one mounted camera, not a separate unit per violation type."  },
  {image:img5,
    title: "Siloed Systems Delay NOV Processing",
    description:
"When camera data, adjudication platforms, and curb maps are disconnected, violations expire before reaching the review queue. Real-time API integration between the camera and the enforcement platform determines whether a captured violation becomes an issued NOV."  },
  {image:img6,
    title: "Infrastructure Gaps at Curb Location",
    description:
"Many enforcement locations — bike lane junctions, temporary zones, loading bays — have no PoE infrastructure. Wired-only cameras leave these locations uncovered, making flexible connectivity a must-have deployment requirement."  },
];

const EnforcementGaps = () => {
  return (
    <section className="enforcement-gaps">
      <div className="enforcement-gaps-container">

        <div className="enforcement-gaps-header">
          <span className="enforcement-gaps-tag">
            ENFORCEMENT CHALLENGES
          </span>

          <h3>
 What Enforcement Gaps Are Cities Trying to Close?
          </h3>
        </div>

    <div className="enforcement-gaps-grid">
  {enforcementGaps.map((gap, index) => (
    <article className="enforcement-gap-card" key={gap.title}>

      <div
        className="enforcement-gap-image"
        style={{
          backgroundImage: `url(${gap.image})`,
        }}
      />

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