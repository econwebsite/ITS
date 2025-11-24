import React from "react";
import "./clovis-banner.css";

const ClovisBanner = () => {
  const banner = {
    image: "https://source.unsplash.com/1600x600/?ai,technology", 
    title: "Evidence Video Management System (EVMS) for Traffic Enforcement",
    subtitle:
      "The Clovis Central is a secure, centralized device management solution built for traffic enforcement and legal evidence handling.",
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
          <button className="clovis-button">Talk to an Expert &gt;&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default ClovisBanner;
