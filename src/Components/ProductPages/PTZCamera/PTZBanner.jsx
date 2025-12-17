import React, { useState, useEffect } from "react";
import "./PTZBanner.css";
import banner1 from "../../../assets/ptz-cameras/ai-powered-incident-detection-camera.jpg"
import banner2 from "../../../assets/ptz-cameras/incident-detection-camera-dynamic-monitoring.jpg"
import banner3 from "../../../assets/ptz-cameras/intelligence-surveillance-camera.jpg"
// Temporary free images need to replace later)
const banners = [
  {
    image: banner1,
    title: "AI-Powered PTZ Cameras",
    subtitle: "Smarter traffic enforcement with full coverage and AI vision.",
  },
  {
    image: banner2,
    title: "Dynamic Monitoring",
    subtitle: "Reliable detection for red light enforcement and violations.",
  },
  {
    image: banner3,
    title: "Intelligent Surveillance",
    subtitle: "High-performance PTZ cameras for urban traffic solutions.",
  },
];

const PTZBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="ptz-banner">
      <div className="banner-slide">
        <img
          src={banners[activeIndex].image}
          alt={banners[activeIndex].title}
          className="banner-image"
        />
        <div className="banner-overlay">
          <h1>{banners[activeIndex].title}</h1>
          <p>{banners[activeIndex].subtitle}</p>
          <button className="banner-button">Talk to an Expert &gt;&gt;</button>
        </div>
      </div>

      {/* Dot Indicators */}
      <div className="banner-dots">
        {banners.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? "active" : ""}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default PTZBanner;
