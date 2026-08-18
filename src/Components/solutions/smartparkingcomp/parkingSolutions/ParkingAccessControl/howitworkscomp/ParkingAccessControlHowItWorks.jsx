import React from "react";
import "./ParkingAccessControlHowItWorks.css";

const steps = [
  {
    number: "01",
    title: "Read",
    description:
"Our ANPR camera captures a motion-blur-free plate image as the vehicle approaches the barrier, while multi-IR illumination handles underground garages, covered car parks, and low-light entry points."  },
  {
    number: "02",
    title: "Match",
    description:
"Edge AI runs ANPR on-device, with plate string output in under 200ms, matched against allow-list, deny-list, or reservation database in real time."  },
  {
    number: "03",
    title: "Authorize",
    description:
"Barrier lift signal triggers on match; tailgating detection fires a secondary alert if a second vehicle enters within the same barrier cycle."  },
  {
    number: "04",
    title: "Log",
    description:
"Plate strings, entry/exit timestamps, and match statuses are logged and pushed to your PARCS or payment platform via REST API, ensuring a full audit trail per transaction."  },
];

const ParkingAccessControlHowItWorks = () => {
  return (
    <section className="parking-access-control-how-it-works">
      <div className="parking-access-control-how-it-works-container">

        <div className="parking-access-control-how-it-works-header">
          <span>HOW IT WORKS</span>

          <h3> How Our ANPR Cameras Work
</h3>
        </div>

        <div className="parking-access-control-process">
          {steps.map((step, index) => (
            <React.Fragment key={step.number}>
              <article className="parking-access-control-process-step">

                <div className="parking-access-control-process-number">
                  {step.number}
                </div>

                <div className="parking-access-control-process-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>

              </article>

              {index < steps.length - 1 && (
                <div className="parking-access-control-process-line"></div>
              )}
            </React.Fragment>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ParkingAccessControlHowItWorks;