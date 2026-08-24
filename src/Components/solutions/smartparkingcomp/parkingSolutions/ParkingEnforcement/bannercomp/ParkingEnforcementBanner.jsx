import "./ParkingEnforcementBanner.css";
import Modelbutton from "../../../../../Button comp/Modelbutton";
import heroBannerImg from "../../../../../../assets/solutionpage/smart-parking-management/parking-enforcement/banner.jpg"

import React from 'react'

function ParkingEnforcementBanner() {
  return (
   <section className="parking-access-control-banner">

      {/* Banner Image */}
      <img
        src={heroBannerImg}
        alt="Parking Access Control"
        className="parking-access-control-banner-image"
      />

      {/* Overlay */}
      <div className="parking-access-control-banner-overlay"></div>

      {/* Content */}
      <div className="parking-access-control-banner-content">

        <h1>
          Automated Curb and 
          <span>Parking Enforcement</span>
        </h1>

     

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
          productName="Parking Access Control"
          title="Frictionless Entry & Secure Access — With Zero Tickets"
        />

      </div>

    </section>
  )
}

export default ParkingEnforcementBanner