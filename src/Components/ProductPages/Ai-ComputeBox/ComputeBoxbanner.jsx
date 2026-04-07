import React from "react";
import "./ComputeBoxbanner.css";
import bannerImg from '../../../assets/ai-compute-box/ai-vision-compute-box-banner.jpg'
import Modelbutton from "../../Button comp/Modelbutton";
const ComputeBoxBanner = () => {
  const banner = {
    image: bannerImg,
    title: "AI Vision Box for Advanced Analytics",
    subtitle:"Real time edge AI for safer roads",
  };

  return (
    <div className="computeBox-banner">
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
            className="computebox-banner-button gtm-btn" 
            text="Talk to an ITS Expert &gt;&gt;" 
            backgroundColor="#1e2f7ac9" 
            animationColor="#69ba2f" 
            hoverColor="#00aeef"
            padding="12px 25px"
            fontSize="14px"
            borderRadius="0"
            border="1px solid #fff"
            productName="AI Compute Box Series"
            title="AI Compute Box Series"
          />
        </div>
      </div>
    </div>
  );
};

export default ComputeBoxBanner;
