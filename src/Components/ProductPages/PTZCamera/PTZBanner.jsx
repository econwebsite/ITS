import React, { useState, useEffect } from "react";
import "./PTZBanner.css";

// Temporary free images need to replace later)
const banners = [
  {
    image: "https://source.unsplash.com/1600x600/?traffic,camera",
    title: "AI-Powered PTZ Cameras",
    subtitle: "Smarter traffic enforcement with full coverage and AI vision.",
  },
  {
    image: "https://source.unsplash.com/1600x600/?city,roads",
    title: "Dynamic Monitoring",
    subtitle: "Reliable detection for red light enforcement and violations.",
  },
  {
    image: "https://source.unsplash.com/1600x600/?surveillance,technology",
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
