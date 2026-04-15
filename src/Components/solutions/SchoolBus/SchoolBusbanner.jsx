import React from "react";
import "./SchoolBusbanner.css";
import bannerImg from '../../../assets/solutionpage/traffic-enforcement-banner.jpg'
import Modelbutton from "../../Button comp/Modelbutton";

const SchoolBusBanner = () => {
  const banner = {
    image: bannerImg,
    title: "School Bus Stop Arm Enforcement",
    subtitle: "AI-powered stop arm violation detection for safer school zones",
  };

  return (
    <div className="schoolbus-banner">
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
            className="schoolbus-banner-button gtm-btn" 
            text="Talk to an ITS Expert &gt;&gt;" 
            backgroundColor="#1e2f7ac9" 
            animationColor="#69ba2f" 
            hoverColor="#00aeef"
            padding="12px 25px"
            fontSize="14px"
            borderRadius="0"
            border="1px solid #fff"
            productName="School Bus Stop Arm"
            title="School Bus Stop Arm Solution"
          />
        </div>
      </div>
    </div>
  );
};

export default SchoolBusBanner;
