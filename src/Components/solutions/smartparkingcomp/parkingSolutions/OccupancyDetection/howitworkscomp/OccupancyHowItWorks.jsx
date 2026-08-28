import React from "react";
import "./OccupancyHowItWorks.css";

import Monitor from "../../../../../../assets/solutionpage/smart-parking-management/occupancy-detection-camera/camera-works-1.svg";
import Detect from "../../../../../../assets/solutionpage/smart-parking-management/occupancy-detection-camera/camera-works-2.svg";
import Update from "../../../../../../assets/solutionpage/smart-parking-management/occupancy-detection-camera/camera-works-3.svg";
import Deliver from "../../../../../../assets/solutionpage/smart-parking-management/occupancy-detection-camera/camera-works-4.svg";

const steps = [
  {
    number: "01",
    icon: Monitor,
    title: "Monitor",
    description:
"Our AI Vision camera covers multiple bays from a single mounting point, capturing the complete detection zone across daylight, low-light, and artificial lighting conditions."  },
  {
    number: "02",
    icon: Detect,
    title: "Detect",
    description:
"Edge AI classifies each space as occupied or vacant, frame by frame, directly on-device — no plate read required to know whether a bay is free."  },
  {
    number: "03",
     icon: Update,
    title: "Update",
    description:
"Occupancy status updates per event, not on a polling cycle. Both arrivals and departures trigger immediate count updates, with no lag between a vehicle arriving and the system reflecting it."  },
  {
    number: "04",
     icon: Deliver,
    title: "Deliver",
    description:
"Live occupancy feed pushes via REST API to parking guidance systems, operator dashboards, mobile apps, or dynamic pricing engines, with ONVIF compliance for VMS integration."  },
];

const OccupancyHowItWorks = () => {
  return (
    <section className="occupancy-how-it-works">
      <div className="occupancy-how-it-works-container">

        <div className="occupancy-how-it-works-header">
          <span>HOW IT WORKS</span>

          <h3>How Our AI Vision Cameras Work</h3>
        </div>

        <div className="occupancy-process">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <article className="occupancy-process-step">

                <div className="occupancy-process-number">
                  <img src={step.icon} alt="" />
                </div>

                <div className="occupancy-process-content">
                  <h3>{step.title}</h3>

                  <p>{step.description}</p>
                </div>

              </article>

              {index < steps.length - 1 && (
                <div className="occupancy-process-connector">
                  <span></span>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>

  <div className="occupancy-integration-note">
          <h3>
            Need plate-linked dwell time as well as occupancy status?
          </h3>

          <p>
            Pair an occupancy camera with
one of e-con Systems’ ANPR cameras at the entry/exit point. The two systems can easily
be integrated over the same REST API, giving you space-level vacancy and plate-level
entry/exit records, without asking one wide-FoV camera to do both jobs at once.

          </p>
        </div>

      </div>
    </section>
  );
};

export default OccupancyHowItWorks;