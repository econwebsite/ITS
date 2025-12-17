import React from "react";
import "./Bulletbanner.css";
import bannerImg from '../../../assets/bullet-camera/bullet-camera-banner.jpg'

const BulletBanner = () => {
  const banner = {
    image: bannerImg,
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
