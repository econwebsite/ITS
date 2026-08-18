import React from "react";
import "./EnforcementReference.css";
import Modelbutton from "../../../../../Button comp/Modelbutton";

const referenceItems = [
  {
    pillar: " Multi-Wavelength IR",
    benefit: "Plates readable in direct sun, headlights, fog, and rain",
  },
  {
    pillar: "On-Device Processing",
    benefit: "Only metadata leaves the camera — lean, fast, private ",
  },
  {
    pillar: "PoE + LTE Flexibility",
    benefit:
      "Deploy anywhere, even where wired infrastructure doesn't exist",
  },
  {
    pillar: "Open Integration",
    benefit: " Full SDK, REST API, ONVIF — no per-plate fees, no lock-in",
  },
];

const EnforcementReference = () => {
  return (
    <section className="enforcement-reference">
      <div className="enforcement-reference-container">

        <div className="enforcement-reference-header">
     
          <h3>Why Our ANPR Cameras Stand Out</h3>
        </div>

        <div className="enforcement-reference-table">
          <div className="enforcement-reference-row enforcement-reference-heading">
            <div>Pillar</div>
            <div>Benefit</div>
          </div>

          {referenceItems.map((item) => (
            <div
              className="enforcement-reference-row"
              key={item.pillar}
            >
              <div className="enforcement-reference-pillar">
                {item.pillar}
              </div>

              <div className="enforcement-reference-benefit">
                {item.benefit}
              </div>
            </div>
          ))}
        </div>

        <div className="enforcement-reference-cta">
          <h3>
          Maximize Vision Performance of Your Enforcement Platform
          </h3>

          <p>
         If you're building a new curb enforcement system or expanding an existing platform, our ITS team can walk you through integration options, camera configurations, and deployment requirements.
          </p>

          <Modelbutton
            className="enforcement-reference-cta-button gtm-btn"
            text="Talk to an ITS Expert"
            backgroundColor="#00aeef"
            animationColor="#2f5780"
            hoverColor="#2f5780"
            padding="14px 30px"
            fontSize="14px"
            borderRadius="4px"
            border="none"
            productName="Parking Enforcement"
            title="Automated Curb and Parking Enforcement"
          />
        </div>

      </div>
    </section>
  );
};

export default EnforcementReference;