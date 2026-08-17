import React from "react";
import "./ParkingEnforcementHowItWorks.css";

const processSteps = [
  {
    number: "01",
    title: "Detect",
    description:
      "Our ANPR camera captures a motion-blur-free plate image the moment a vehicle enters the enforcement zone. Multi-IR illumination (850nm or 940nm) fires automatically depending on ambient light conditions.",
  },
  {
    number: "02",
    title: "Process",
    description:
      "Edge AI runs ANPR on-device. Plate string and confidence score output in under 200ms. No raw video is transmitted — only metadata leaves the camera.",
  },
  {
    number: "03",
    title: "Package",
    description:
      "Detection events produce a complete NOV-ready evidence package, including plate string, GPS coordinates, UTC timestamp, and JPEG snapshots, ready for adjudication.",
  },
  {
    number: "04",
    title: "Integrate",
    description:
      "REST API or Linux/Android SDK delivers the evidence package directly to your enforcement platform or VMS. ONVIF compliance supports real-time video integration without manual exporting or processing delays.",
  },
];

const ParkingEnforcementHowItWorks = () => {
  return (
    <section className="parking-enforcement-process">
      <div className="parking-enforcement-process-container">

        <div className="parking-enforcement-process-header">
          <span>HOW IT WORKS</span>

          <h2>How Our Parking Enforcement Solution Works</h2>
        </div>

        <div className="parking-enforcement-process-grid">
          {processSteps.map((step) => (
            <div className="parking-process-item" key={step.number}>

              <div className="parking-process-circle">
                <div className="parking-process-inner">
                  <strong>{step.number}</strong>
                  <small>STEP</small>
                </div>
              </div>

              <h3>{step.title}</h3>

              <p>{step.description}</p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ParkingEnforcementHowItWorks;