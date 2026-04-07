import React, { useState } from 'react';
import './Homebanner.css';
import homevideo3 from "../../../assets/homepage/homevideo3.mp4"
import Modelbutton from "../../Button comp/Modelbutton";
const videos = [
  {
    src: homevideo3,
    title: 'Vision That Powers Safer Roads',
    subtitle: 'Reliable imaging and edge intelligence for intelligent transportation systems',
  }
];

const VideoBanner = () => {

  return (
    <div className="video-banner-container">
      <video
        key={0}
        className="video-banner"
        src={videos[0].src}
        autoPlay
        muted
        loop
      />
      <div className="overlay">
        <div className="text-content">
          <h1>{videos[0].title}</h1>
          <p>{videos[0].subtitle}</p>
          <Modelbutton 
            className="ptz-cameravariant-button gtm-btn" 
            text="Talk to an ITS Expert &gt;&gt;" 
            backgroundColor="transparent" 
            animationColor="#69ba2f" 
            hoverColor="#00aeef"
            padding="12px 25px"
            fontSize="14px"
            borderRadius="2px"
            border="2px solid #fff"
            productName="Incident Detection Camera"
            title="Incident Detection Camera"
          />
        </div>
      </div>
   
    </div>
  );
};

export default VideoBanner;
