import React from "react";
import "./Bulletbanner.css";

const BulletBanner = () => {
  const banner = {
    image: "https://source.unsplash.com/1600x600/?security,camera", // Temporary placeholder image
    title: "Smart Bullet Cameras for ANPR/ALPR",
    subtitle:
      "e-con Systems’ high-performance Bullet Cameras are purpose-built for ANPR/ALPR, law enforcement, and traffic management.",
  };

  return (
    <div className="bullet-banner">
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

export default BulletBanner;
