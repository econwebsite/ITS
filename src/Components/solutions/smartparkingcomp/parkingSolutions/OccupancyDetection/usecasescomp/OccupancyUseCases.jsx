import React from "react";
import "./OccupancyUseCases.css";

import icon03 from "../../../../../../assets/solutionpage/smart-parking-management/occupancy-detection-camera/icons-03.svg";
import icon04 from "../../../../../../assets/solutionpage/smart-parking-management/occupancy-detection-camera/icons-04.svg";
import icon05 from "../../../../../../assets/solutionpage/smart-parking-management/occupancy-detection-camera/icons-05.svg";
import icon06 from "../../../../../../assets/solutionpage/smart-parking-management/occupancy-detection-camera/icons-06.svg";
import icon07 from "../../../../../../assets/solutionpage/smart-parking-management/occupancy-detection-camera/icons-07.svg";
import icon08 from "../../../../../../assets/solutionpage/smart-parking-management/occupancy-detection-camera/icons-08.svg";
import icon09 from "../../../../../../assets/solutionpage/smart-parking-management/occupancy-detection-camera/icons-09.svg";
import icon10 from "../../../../../../assets/solutionpage/smart-parking-management/occupancy-detection-camera/icons-10.svg";
import icon11 from "../../../../../../assets/solutionpage/smart-parking-management/occupancy-detection-camera/icons-11.svg";
const useCases = [
  {
    icon: icon03,
    title: "Surface Lot Monitoring",
    description: "space-level occupied/vacant status identified per bay",
  },
  {
    icon: icon04,
    title: "Structured Parking (Multi-Level) ",
    description: "floor-by-floor and zone-level availability",
  },
  {
    icon: icon05,
    title: "On-Street Bay Monitoring",
    description: "individual bay occupancy along curbside corridors",
  },
  {
    icon: icon06,
    title: "Loading Zone Availability ",
    description: "real-time dwell time and availability per loading bay",
  },
  {
    icon: icon07,
    title: "Event Surge Monitoring",
    description: " live count during peak arrival and departure windows",
  },
  {
    icon: icon08,
    title: "Parking Guidance System (PGS) Data Feed",
    description: "real-time availability feed for guidance signage",
  },
  {
    icon: icon09,
    title: "Dynamic Pricing Trigger ",
    description:
      "rate changes triggered in real time based on occupancy threshold",
  },
  {
    icon: icon10,
    title: "Utilization Analytics",
    description: " dwell time, peak periods, and turnover rate per space",
  },
  {
    icon: icon11,
    title: "Reserved Space Monitoring",
    description:
      "alerts on unauthorized use of reserved or permit bays",
  },
];

const OccupancyUseCases = () => {
  return (
    <section className="occupancy-use-cases">
      <div className="occupancy-use-cases-container">

        <div className="occupancy-use-cases-header">
          <span>DETECTION USE CASES</span>

          <h3>Detection Use Cases of Our AI Vision Cameras
</h3>
        </div>

        <div className="occupancy-use-cases-grid">
          {useCases.map((item, index) => (
            <article className="occupancy-use-case" key={item.title}>
              <div className="occupancy-use-case-icon">
                <img src={item.icon} alt="icons" />
              </div>

              <div className="occupancy-use-case-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="occupancy-use-case-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OccupancyUseCases;