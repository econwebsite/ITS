import React from "react";
import './Bannerstyles.css';
import bannerImg from '../../../../assets/solutionpage/traffic-enforcement-banner.jpg'
import Modelbutton from "../../../Button comp/Modelbutton";

const ITSBanner = () => {
  const banner = {
    image: bannerImg,
    title: "Vision-Based Traffic Enforcement Cameras",
    subtitle: "Edge AI traffic enforcement cameras delivering real-time violation detection for speed, red-light, and school bus stop-arm safety programs",
  };

  return (
    <div className="its-banner">
      <div className="banner-slide">
        <img
          src={banner.image}
          alt={banner.title}
          className="banner-image"
        />
        <div className="banner-overlay">
          <h1>{banner.title}</h1>
          <p>{banner.subtitle}</p>
          <Modelbutton 
            className="its-banner-button gtm-btn" 
            text="Talk to an ITS Expert &gt;&gt;" 
            backgroundColor="#1e2f7ac9" 
            animationColor="#69ba2f" 
            hoverColor="#00aeef"
            padding="12px 25px"
            fontSize="14px"
            borderRadius="0"
            border="1px solid #fff"
            productName="Traffic Enforcement Cameras"
            title="Traffic Enforcement Camera Solution"
          />
        </div>
      </div>
    </div>
  );
};

export default ITSBanner;