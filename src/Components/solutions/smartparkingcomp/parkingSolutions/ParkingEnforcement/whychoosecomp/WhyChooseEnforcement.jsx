import React from "react";
import "./WhyChooseEnforcement.css";

import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import MemoryIcon from "@mui/icons-material/Memory";
import CellTowerIcon from "@mui/icons-material/CellTower";
import IntegrationInstructionsIcon from "@mui/icons-material/IntegrationInstructions";

const advantages = [
  {
    number: "01",
    icon: <WbTwilightIcon />,
    title: "Multi-Wavelength IR",
    description:
      "e-con Systems' ANPR cameras combine 850nm and 940nm multi-wavelength IR illumination, so plates stay readable in direct sun, oncoming headlights, fog, and rain without swapping cameras or adjusting settings. Each frame that leaves the camera is evidence-ready, not a surveillance stream that needs post-processing.",
  },
  {
    number: "02",
    icon: <MemoryIcon />,
    title: "On-Device Processing",
    description:
"All ANPR processing runs on-device. The camera outputs plate metadata and a JPEG snapshot per event instead of a full video stream, so only the data needed to issue a NOV leaves the device — keeping the evidence package lean and the integration simple."  },
  {
    number: "03",
    icon: <CellTowerIcon />,
    title: "PoE + LTE Flexibility",
    description:
"PoE and LTE connectivity ship in a single unit, combined with 940nm covert IR illumination, so enforcement cameras can be deployed at bike lane junctions, temporary loading zones, and overnight curb locations where wired infrastructure doesn't exist."  },
  {
    number: "04",
    icon: <IntegrationInstructionsIcon />,
    title: "Open Integration",
    description:
"Our cameras also ship with a full Linux and Android SDK, REST API, and ONVIF compliance. Your engineering team can integrate once and own the platform end-to-end — no perplate licensing, no proprietary lock-ins, no recurring fees tied to citation volume."  },
];

const WhyChooseEnforcement = () => {
  return (
    <section className="why-choose-enforcement">
      <div className="why-choose-enforcement-container">

        <div className="why-choose-enforcement-header">
          <span>WHY E-CON SYSTEMS</span>

          <h3>Why Choose e-con Systems' ANPR Cameras?</h3>

          <div className="why-choose-line"></div>
        </div>

        <div className="why-choose-enforcement-list">
          {advantages.map((item) => (
            <article
              className="why-choose-enforcement-item"
              key={item.number}
            >
              <div className="why-choose-icon">
                {item.icon}
              </div>

              

              <div className="why-choose-enforcement-content">
                <h3>{item.title}</h3>

                <div className="why-choose-small-line"></div>

                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseEnforcement;