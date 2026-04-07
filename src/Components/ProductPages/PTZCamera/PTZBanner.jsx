import React, { useState, useEffect } from "react";
import "./PTZBanner.css";
import banner1 from "../../../assets/ptz-cameras/ai-powered-incident-detection-camera.jpg"
import Modelbutton from "../../Button comp/Modelbutton";
// Temporary free images need to replace later)
const banners = [
  {
    image: banner1,
    title: "AI-Powered Incident Detection Cameras",
    subtitle: "Smarter traffic enforcement driven by real-time AI vision.",
  }
];

const PTZBanner = () => {



  return (
    <div className="ptz-banner">
      <div className="banner-slide">
        <img
          src={banners[0].image}
          alt={banners[0].title}
          className="banner-image"
        />
        <div className="banner-overlay">
          <h1>{banners[0].title}</h1>
          <p>{banners[0].subtitle}</p>
          <Modelbutton 
            className="ptz-cameravariant-button" 
            text="Talk to an Expert &gt;&gt;" 
            backgroundColor="#1e2f7ac9" 
            animationColor="#69ba2f" 
            hoverColor="#00aeef"
            padding="12px 25px"
            fontSize="14px"
            borderRadius="0"
            border="1px solid #fff"
            productName="Incident Detection Camera"
            title="Incident Detection Camera"
          />
        </div>
      </div>


    </div>
  );
};

export default PTZBanner;
