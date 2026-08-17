import React from "react";
import "./WhyChooseAccessControl.css";

import WbTwilightIcon from "@mui/icons-material/WbTwilight";
import ShutterSpeedIcon from "@mui/icons-material/ShutterSpeed";
import MemoryIcon from "@mui/icons-material/Memory";
import LanIcon from "@mui/icons-material/Lan";
import Modelbutton from "../../../../../Button comp/Modelbutton";


const advantages = [
  {
    number: "01",
    icon: <WbTwilightIcon />,
    title: "Multi-Wavelength IR",
    description:
      "e-con Systems' ANPR cameras combine 850nm and 940nm multi-wavelength IR illumination, so plates stay readable in underground garages, covered car parks, and outdoor entries in direct sun — without adjusting settings or swapping cameras. Global shutter eliminates motion blur even at vehicle entry speeds, keeping plate reads clean.",
  },
  {
    number: "02",
    icon: <MemoryIcon />,
    title: "On-Device Processing",
    description:
      "All ANPR processing runs on-device. The camera outputs plate string, confidence score, and a JPEG snapshot per event, keeping integration clean and fast — only the data your PARCS or payment platform needs is delivered the moment the vehicle arrives.",
  },
  {
    number: "03",
    icon: <LanIcon />,
    title: "PoE + LTE Connectivity",
    description:
      "With PoE and LTE connectivity in a single unit, the camera works in basement-level garages, outdoor surface lots, and remote entry points without separate connectivity hardware.",
  },
  {
    number: "04",
    icon: <ShutterSpeedIcon />,
    title: "Open Integration",
    description:
      "An open Linux and Android SDK with REST API lets your engineering team integrate once with any PARCS, payment gateway, or VMS — avoiding per-transaction fees and proprietary lock-ins.",
  },
];

const WhyChooseAccessControl = () => {
  return (
    <section className="why-choose-access-control">
      <div className="why-choose-access-control-container">

        <div className="why-choose-access-control-header">
          <span>WHY E-CON SYSTEMS</span>

          <h2>Why Choose e-con Systems' ANPR Cameras?</h2>

          <div className="why-choose-access-control-line"></div>
        </div>

        <div className="why-choose-access-control-grid">
          {advantages.map((item) => (
            <article
              className="why-choose-access-control-card"
              key={item.number}
            >
              <div className="why-choose-access-control-icon">
                {item.icon}
              </div>

              

              <div className="why-choose-access-control-content">
                <h3>{item.title}</h3>

                <div className="why-choose-access-control-small-line"></div>

                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

        {/* CTA */}

        <div className="why-choose-access-control-cta">
          <h2>Deploy Ticketless Access Control with Futuristic Vision</h2>

          <p>
            Upgrading a gated facility or building a new ticketless system
            from the ground up? Our ITS team can walk you through camera
            placement, integration options, and deployment needs.
          </p>

          <Modelbutton
            className="why-choose-access-control-cta-button gtm-btn"
            text="Talk to an ITS Expert"
            backgroundColor="#00aeef"
            animationColor="#2f5780"
            hoverColor="#2f5780"
            padding="14px 30px"
            fontSize="14px"
            borderRadius="4px"
            border="none"
            productName="Parking Access Control"
            title="Frictionless Entry & Secure Access — With Zero Tickets"
          />
        </div>

      </div>
    </section>
  );
};

export default WhyChooseAccessControl;