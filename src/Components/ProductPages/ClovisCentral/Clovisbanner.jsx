import React from "react";
import "./clovis-banner.css";
import bannerImg from '../../../assets/clovis-central/clovis-central-banner.jpg'
import Modelbutton from "../../Button comp/Modelbutton";
const ClovisBanner = () => {
  const banner = {
    image: bannerImg, 
    title: "Centralized EVMS for Traffic Enforcement",
    subtitle:
      "Designed for traffic authorities",
  };

  return (
    <div className="clovis-banner">
      <div className="clovis-slide">
        <img
          src={banner.image}
          alt={banner.title}
          className="clovis-image"
        />
        <div className="clovis-overlay">
           <h1>{banner.title}</h1>
          <p>{banner.subtitle}</p>
          <Modelbutton 
            className="clovis-banner-button" 
            text="Talk to an Expert &gt;&gt;" 
            backgroundColor="#1e2f7ac9" 
            animationColor="#69ba2f" 
            hoverColor="#00aeef"
            padding="12px 25px"
            fontSize="14px"
            borderRadius="0"
            border="1px solid #fff"
            productName="Evidence Video Management System"
          />
        </div>
      </div>
    </div>
  );
};

export default ClovisBanner;
