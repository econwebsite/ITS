import React from "react";
import "./AccessControlUseCases.css";

const useCases = [
  {
    number: "01",
    title: "Gated Entry/Exit",
    description: "barrier lift automated on plate match",
  },
  {
    number: "02",
    title: "Ticketless Payment Validation",
    description: "plate tied to payment, no ticket issued or collected",
  },
  {
    number: "03",
    title: "Monthly/Virtual Permit",
    description: "allow-list management by plate, no physical pass",
  },
  {
    number: "04",
    title: "Visitor and Guest Access",
    description:
      "pre-registered plates cleared for single or time-limited entry",
  },
  {
    number: "05",
    title: "Event Parking Management",
    description:
      "bulk permit activation and deactivation by plate list",
  },
  {
    number: "06",
    title: "EV Bay Authorized Access",
    description:
      "EV charging bays restricted to registered EVs only",
  },
  {
    number: "07",
    title: "Multi-Site/Campus Access",
    description:
      "a single plate database across multiple entry points",
  },
  {
    number: "08",
    title: "Tailgating Detection",
    description:
      "alerts triggered by a second plate read within the barrier cycle",
  },
  {
    number: "09",
    title: "Deny-List Enforcement",
    description:
      "flagged plates automatically blocked at any entry point",
  },
];

const AccessControlUseCases = () => {
  return (
    <section className="access-control-usecases">
      <div className="access-control-usecases-container">

        <div className="access-control-usecases-header">
          <span>ANPR USE CASES</span>

          <h2>ANPR Use Cases Supported by Our Cameras</h2>
        </div>

        <div className="access-control-usecases-grid">
          {useCases.map((useCase) => (
            <article
              className="access-control-usecase-card"
              key={useCase.number}
            >
              <div className="access-control-usecase-number">
                {useCase.number}
              </div>

              <div className="access-control-usecase-content">
                <h3>{useCase.title}</h3>
                <p>{useCase.description}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AccessControlUseCases;