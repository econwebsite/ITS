import React from "react";
import "./ComputeBoxbanner.css";

const ComputeBoxBanner = () => {
  const banner = {
    image: "https://source.unsplash.com/1600x600/?traffic,ai,computing", // Temporary AI/ITS themed placeholder
    title: "AI Compute Box for Intelligent Intersections",
    subtitle:
      "The Rugged AI Vision Box from e-con Systems™ is an advanced edge computing solution designed for vehicle and pedestrian detection, incident management, and intersection analytics in Intelligent Transportation Systems (ITS).",
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
          <button className="banner-button">Talk to an Expert &gt;&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default ComputeBoxBanner;
