import React from "react";
import "./ALPRBanner.css";
import bannerImg from '../../../assets/bullet-camera/anpr-camera-banner.jpg'
import Modelbutton from "../../Button comp/Modelbutton";

const ALPRBanner = () => {
  const banner = {
    image: bannerImg,
    title: "AI-Enabled 8MP ALPR Camera",
    subtitle: "Advanced Vehicle Identification for Traffic Analytics & Parking Monitoring",
  };

  return (
    <div className="alpr-banner">
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
            className="alpr-cameravariant-button gtm-btn" 
            text="Talk to an ITS Expert &gt;&gt;" 
            backgroundColor="#1e2f7ac9" 
            animationColor="#69ba2f" 
            hoverColor="#00aeef"
            padding="20px 25px"
            fontSize="14px"
            borderRadius="0"
            border="1px solid #fff"
            productName="ALPR Camera"
            title="ALPR Camera Series"
          />
        </div>
      </div>
    </div>
  );
};

export default ALPRBanner;
