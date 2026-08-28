import React from "react";
import "./WhyChooseAccessControl.css";

import Modelbutton from "../../../../../Button comp/Modelbutton";
// import whyANPRIcon1 from "../../../../../../assets/solutionpage/smart-parking-management/Parking-access-control/why-ANPR-icon1.svg";
// import whyANPRIcon2 from "../../../../../../assets/solutionpage/smart-parking-management/Parking-access-control/why-ANPR-icon2.svg";
// import whyANPRIcon3 from "../../../../../../assets/solutionpage/smart-parking-management/Parking-access-control/why-ANPR-icon3.svg";
import whyANPRIcon1 from "../../../../../../assets/solutionpage/smart-parking-management/parking-enforcement/why-econ-1.svg"
import whyANPRIcon2 from "../../../../../../assets/solutionpage/smart-parking-management/parking-enforcement/why-econ-2.svg"
import whyANPRIcon3 from "../../../../../../assets/solutionpage/smart-parking-management/parking-enforcement/why-econ-3.svg"
import IntegrationInstructionsIcon from "../../../../../../assets/solutionpage/smart-parking-management/parking-enforcement/why-econ-4.svg"
const WhyChooseAccessControl = () => {
  return (
    <section className="why-choose-access-control">
      <div className="why-choose-access-control-container">

        <div className="why-choose-access-control-header">
          <span>WHY E-CON SYSTEMS</span>

          <h3>Why Choose e-con Systems' ANPR Cameras?</h3>

          <div className="why-choose-access-control-line"></div>
        </div>

        <div className="why-choose-access-control-grid">

          <article className="why-choose-access-control-card">
            <div className="why-choose-access-control-icon">
              <img src={whyANPRIcon1} alt="" />
            </div>

            <div className="why-choose-access-control-content">
              <p>
               e-con Systems' ANPR cameras combine 850nm and 940nm multi-wavelength IR
illumination, so plates stay readable in underground garages, covered car parks, and
outdoor entries in direct sun — without adjusting settings or swapping cameras. Global
shutter eliminates motion blur even at vehicle entry speeds, keeping plate reads clean.

              </p>
            </div>
          </article>

          <article className="why-choose-access-control-card">
            <div className="why-choose-access-control-icon">
   <img src={whyANPRIcon2} alt="" />
            </div>

            <div className="why-choose-access-control-content">
              <p>
             All ANPR processing runs on-device. The camera outputs plate string, confidence score,
and a JPEG snapshot per event, keeping integration clean and fast — only the data your
PARCS or payment platform needs is delivered the moment the vehicle arrives.

              </p>
            </div>
          </article>

          <article className="why-choose-access-control-card">
            <div className="why-choose-access-control-icon">
           <img src={whyANPRIcon3} alt="" />
            </div>

            <div className="why-choose-access-control-content">
              <p>
              With PoE and LTE connectivity in a single unit, the camera works in basement-level
garages, outdoor surface lots, and remote entry points without separate connectivity
hardware. An open Linux and Android SDK with REST API lets your engineering team
integrate once with any PARCS, payment gateway, or VMS — avoiding per-transaction
fees and proprietary lock-ins.

              </p>
            </div>
          </article>

        </div>

        <div className="why-choose-access-control-cta">
          <h3> Deploy Ticketless Access Control with Futuristic Vision</h3>

          <p>
Upgrading a gated facility or building a new ticketless system from the ground up? Our ITS
team can walk you through camera placement, integration options, and deployment
needs.
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