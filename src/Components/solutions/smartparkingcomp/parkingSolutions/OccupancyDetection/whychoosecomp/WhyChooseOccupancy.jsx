import React from "react";
import "./WhyChooseOccupancy.css";
import Modelbutton from "../../../../../Button comp/Modelbutton";

const WhyChooseOccupancy = () => {
  return (
    <section className="why-choose-occupancy">
      <div className="why-choose-occupancy-container">

        <div className="why-choose-occupancy-header">
          <span>WHY CHOOSE E-CON SYSTEMS</span>

          <h3>Why Choose e-con Systems’ AI Vision Cameras?
</h3>
        </div>

        <div className="why-choose-occupancy-content">

          <div className="why-choose-occupancy-highlight">
            <span className="why-choose-occupancy-number">4–6</span>

            <h3>Bays from a Single Mounting Point</h3>
          </div>

          <div className="why-choose-occupancy-text">
            <p>
            e-con Systems’ AI vision cameras can cover 4 to 6 bays from a single mounting point,
without road cutting, per-space sensors, failed loops, or phantom vacancies. They deliver
reliable reads in low light, direct sun, and mixed artificial lighting, with global shutter
technology ensuring every frame is detection-ready.
            </p>
          </div>

        </div>

        <div className="why-choose-occupancy-features">

          <div className="why-choose-occupancy-feature">
            <h3>IP66/IP67-rated for 24/7 outdoor performance
</h3>
          </div>

          <div className="why-choose-occupancy-feature">
            <h3>Complete on-device processing</h3>
          </div>

          <div className="why-choose-occupancy-feature">
            <h3>Occupancy status and dwell time per event</h3>
          </div>

          <div className="why-choose-occupancy-feature">
            <h3>Single REST API to your PGS or operator dashboard
</h3>
          </div>

          <div className="why-choose-occupancy-feature">
            <h3>850nm + 940nm multi-IR for low-light and night detection
</h3>
          </div>

          <div className="why-choose-occupancy-feature">
            <h3>PoE + LTE in one unit</h3>
          </div>

          <div className="why-choose-occupancy-feature">
            <h3>Open Linux and Android SDK</h3>
          </div>

          <div className="why-choose-occupancy-feature">
            <h3>
              No per-space licensing, per-transaction fees, or proprietary lock-ins

            </h3>
          </div>

        </div>

        {/* CTA */}

        <div className="why-choose-occupancy-cta">
          <h3>
           Build Real-Time Occupancy Platforms with Reliable Vision
          </h3>

          <p>
         Retrofitting an existing lot or designing a new parking guidance system? Our ITS team can
walk you through camera coverage, detection configuration, and API integration options.
          </p>

          <Modelbutton
            className="why-choose-occupancy-cta-button gtm-btn"
            text="Talk to an ITS Expert"
            backgroundColor="#00aeef"
            animationColor="#2f5780"
            hoverColor="#2f5780"
            padding="14px 30px"
            fontSize="14px"
            borderRadius="4px"
            border="none"
            productName="Occupancy Detection"
            title="Occupancy Detection: Know Every Space in Real Time"
          />
        </div>

      </div>
    </section>
  );
};

export default WhyChooseOccupancy;