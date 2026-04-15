import React from "react";
import "./Styles.css";
import bannerImg from '../../../../assets/solutionpage/traffic-enforcement-banner.jpg'
import Modelbutton from "../../../Button comp/Modelbutton";

const SpeedBanner = () => {
  const banner = {
    image: bannerImg,
    title: "Speed Enforcement Cameras",
    subtitle: "Edge AI speed enforcement cameras for ensuring that highways, school zones, and intersections can reduce violations and improve safety",
  };

  return (
    <div className="spd-banner">
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
            className="spd-banner-button gtm-btn" 
            text="Talk to an ITS Expert &gt;&gt;" 
            backgroundColor="#1e2f7ac9" 
            animationColor="#69ba2f" 
            hoverColor="#00aeef"
            padding="12px 25px"
            fontSize="14px"
            borderRadius="0"
            border="1px solid #fff"
            productName="Speed Enforcement Cameras"
            title="Speed Enforcement Camera Solution"
          />
        </div>
      </div>
    </div>
  );
};

export default SpeedBanner;