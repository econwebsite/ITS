import React from "react";
import "./OccupancyHowItWorks.css";

const steps = [
  {
    number: "01",
    title: "Monitor",
    description:
      "Our AI Vision camera covers multiple bays from a single mounting point, capturing the complete detection zone across daylight, low-light, and artificial lighting conditions.",
  },
  {
    number: "02",
    title: "Detect",
    description:
      "Edge AI classifies each space as occupied or vacant, frame by frame, directly on-device — no plate read required to know whether a bay is free.",
  },
  {
    number: "03",
    title: "Update",
    description:
      "Occupancy status updates per event, not on a polling cycle. Both arrivals and departures trigger immediate count updates, with no lag between a vehicle arriving and the system reflecting it.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "Live occupancy feed pushes via REST API to parking guidance systems, operator dashboards, mobile apps, or dynamic pricing engines, with ONVIF compliance for VMS integration.",
  },
];

const OccupancyHowItWorks = () => {
  return (
    <section className="occupancy-how-it-works">
      <div className="occupancy-how-it-works-container">

        <div className="occupancy-how-it-works-header">
          <span>HOW IT WORKS</span>

          <h2>How Our AI Vision Cameras Work</h2>
        </div>

        <div className="occupancy-process">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <article className="occupancy-process-step">

                <div className="occupancy-process-number">
                  {step.number}
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

      </div>
    </section>
  );
};

export default OccupancyHowItWorks;