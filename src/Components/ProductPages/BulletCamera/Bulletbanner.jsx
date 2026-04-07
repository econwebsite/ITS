import React from "react";
import "./Bulletbanner.css";
import bannerImg from '../../../assets/bullet-camera/anpr-camera-banner.jpg'
import Modelbutton from "../../Button comp/Modelbutton";
const BulletBanner = () => {
  const banner = {
    image: bannerImg,
    title: "ANPR License Plate Recognition Cameras",
    subtitle:"Built for real-world plate capture",
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
          <Modelbutton 
            className="bullet-cameravariant-button gtm-btn" 
            text="Talk to an ITS Expert &gt;&gt;" 
            backgroundColor="#1e2f7ac9" 
            animationColor="#69ba2f" 
            hoverColor="#00aeef"
            padding="12px 25px"
            fontSize="14px"
            borderRadius="0"
            border="1px solid #fff"
            productName="Bullet Camera Series"
            title="Bullet Camera Series"
          />
          {/* <button className="banner-button">Talk to an Expert &gt;&gt;</button> */}
        </div>
      </div>
    </div>
  );
};

export default BulletBanner;
