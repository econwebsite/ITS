import React from "react";
import "./OccupancyDetectionBanner.css";

import heroBannerImg from "../../../assets/parking-banner.png";
import Modelbutton from "../../../../../Button comp/Modelbutton";
const OccupancyDetectionBanner = () => {
  return (
    <section className="occupancy-detection-banner">
      <img
        src={heroBannerImg}
        alt="Occupancy Detection"
        className="occupancy-detection-banner-image"
      />

      <div className="occupancy-detection-banner-overlay"></div>

      <div className="occupancy-detection-banner-content">
        <h1>
          Occupancy Detection:
          <span>Know Every Space in Real Time</span>
        </h1>

        <p className="occupancy-detection-banner-caption">
          Get live space-level occupancy data, instead of delayed sensor
          readings
        </p>

        <Modelbutton
          className=""
          text="Talk to an ITS Expert"
          backgroundColor="#1e2f7a"
          animationColor="#00aeef"
          hoverColor="#00aeef"
          padding="12px 25px"
          fontSize="14px"
          borderRadius="0"
          border="1px solid #fff"
          productName="Occupancy Detection"
          title="Occupancy Detection: Know Every Space in Real Time"
        />
      </div>
    </section>
  );
};

export default OccupancyDetectionBanner;