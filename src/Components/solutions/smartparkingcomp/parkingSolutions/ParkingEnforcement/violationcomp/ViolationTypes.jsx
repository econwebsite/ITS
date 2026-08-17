import React from "react";
import "./ViolationTypes.css";

const violationTypes = [
  {
    title: "Double Parking",
    description: "Standing violation in the travel lane",
    number: "01",
  },
  {
    title: "Bus Stop Blocking",
    description: "Vehicle occupying a transit stop zone",
    number: "02",
  },
  {
    title: "Transit-Only Lane (TOL) Violation",
    description: "Non-transit vehicle in a bus-only lane",
    number: "03",
  },
  {
    title: "Bike Lane Incursion",
    description: "Vehicle blocking a protected cycle track",
    number: "04",
  },
  {
    title: "Loading Zone Overstay",
    description: "Dwell time exceeds authorized limit",
    number: "05",
  },
  {
    title: "Electronic Chalking",
    description: "Two-pass ANPR for time-limit zone overstay",
    number: "06",
  },
  {
    title: "No-Standing Zone Violation",
    description: "Any stop in a posted no-standing zone",
    number: "07",
  },
  {
    title: "EV Charging Misuse (ICEing)",
    description: "Non-EV occupying an EV charging bay",
    number: "08",
  },
];

const ViolationTypes = () => {
  return (
    <section className="violation-types">
      <div className="violation-types-container">

        <div className="violation-types-header">
          <span className="violation-types-tag">
            ANPR CAPABILITIES
          </span>

          <h2>
            Violation Types Detected by Our{" "}
            <span>ANPR Cameras</span>
          </h2>
        </div>

        <div className="violation-types-grid">
          {violationTypes.map((violation, index) => (
            <article
              className={`violation-card ${
                index === 0 ? "violation-card-featured" : ""
              }`}
              key={violation.title}
            >
              <div className="violation-card-number">
                {violation.number}
              </div>

              <div className="violation-card-content">
                <h3>{violation.title}</h3>
                <p>{violation.description}</p>
              </div>

              <div className="violation-card-accent"></div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ViolationTypes;