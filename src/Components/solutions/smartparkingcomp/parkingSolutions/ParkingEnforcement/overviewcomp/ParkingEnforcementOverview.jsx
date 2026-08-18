import React from "react";
import "./ParkingEnforcementOverview.css";

import heroBannerImg from "../../../assets/smart-parking.png";

const ParkingEnforcementOverview = () => {
  return (
    <section className="parking-enforcement-overview">
      <div className="parking-enforcement-overview-container">

        {/* Content */}
        <div className="parking-enforcement-overview-content">

          <span className="parking-enforcement-tag">
            PARKING ENFORCEMENT
          </span>

          <h1>
            Automated Curb and Parking Enforcement
          </h1>

          <p>
            Most curb violations don't last long — the vehicle is gone before anyone can respond, and
the violation goes unrecorded. Cities across North America are closing that gap with
stationary and mobile ANPR cameras that monitor bus stops, bike lanes, loading zones,
and transit-only lanes continuously, building an evidence record the moment a violation
occurs.
          </p>

          <p>
   
e-con Systems' ANPR cameras are the core imaging solution these platforms depend on.
Built for outdoor enforcement conditions, they deliver the image quality, connectivity,
and open integration that integrators need to build city-scale curb management systems.
          </p>

        </div>

        {/* Image */}
        <div className="parking-enforcement-overview-image">
          <img
            src={heroBannerImg}
            alt="Parking Enforcement"
          />
        </div>

      </div>
    </section>
  );
};

export default ParkingEnforcementOverview;