import React, { useEffect } from "react";
import "./Styles.css";
import heroBannerImg from "../../../../assets/solutionpage/speed-enforcement/traffic-enforcement-camera-banner-img.jpg";
import Modelbutton from "../../../Button comp/Modelbutton";

import AOS from "aos";
import "aos/dist/aos.css";

const SpeedHeroBanner = () => {

  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: true,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <section className="speedhero-wrapper">

      {/* BACKGROUND IMAGE */}
      <div className="speedhero-bg-wrap">
        <img
          src={heroBannerImg}
          alt="Speed Enforcement Cameras"
          className="speedhero-bg-image"
        />
      </div>

      {/* OVERLAY */}
      <div className="speedhero-dark-layer"></div>

      {/* CONTENT */}
      <div className="speedhero-content-wrap">

        <div
          className="speedhero-content-box"
          data-aos="zoom-in"
        >

          <h1 className="speedhero-main-title">
            Speed Enforcement Cameras
          </h1>

          <p className="speedhero-main-desc">
           Edge AI Speed Enforcement — Fewer Violations. Safer Roads.
          </p>

          <div className="speedhero-btn-wrap">

            <Modelbutton
              className="speedhero-cta-btn gtm-btn"
              text="Talk to an Expert >>"
              backgroundColor="transparent"
              animationColor="#00aeef"
              hoverColor="#00aeef"
              padding="12px 28px"
              fontSize="15px"
              borderRadius="0"
              border="1px solid #47bfff"
              productName="Speed Enforcement Cameras"
              title="Speed Enforcement Camera Solution"
            />

          </div>

        </div>
      </div>
    </section>
  );
};

export default SpeedHeroBanner;