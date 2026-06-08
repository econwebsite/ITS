import React from "react";
import "./rlvdbanner.css";
import bannerImg from '../../../../assets/solutionpage/red-light-violation-banner-img.jpg'
import Modelbutton from "../../../Button comp/Modelbutton";

const RLVDBanner = () => {
  const banner = {
    image: bannerImg,
    title: "Vision-Based Red Light Violation Detection Cameras",
    subtitle: "Every Red Light. Every Time",
  };

  return (
    <div className="rlvd-banner">
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
            className="rlvd-banner-button gtm-btn" 
            text="Talk to an ITS Expert &gt;&gt;" 
            backgroundColor="#1e2f7ac9" 
            animationColor="#69ba2f" 
            hoverColor="#00aeef"
            padding="12px 25px"
            fontSize="14px"
            borderRadius="0"
            border="1px solid #fff"
            productName="RLVD Cameras"
            title="Red Light Violation Detection Solution"
          />
        </div>
      </div>
    </div>
  );
};

export default RLVDBanner;