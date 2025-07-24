import React,{useEffect } from 'react';
import AOS from 'aos';
import ptz from "../../../assets/homepage/ptz-camera.png"
import bullet from "../../../assets/homepage/bullet-camera.png"
import cameramodules from "../../../assets/homepage/camera-module.png"
import aivision from "../../../assets/homepage/ai-visionbox.png"
import "./Productcards.css"

const productData = [
  {
    title: "PTZ Camera Series",
    description: "Dynamic monitoring for traffic violations, red light enforcement, and near-miss detection at intersections.",
    image: ptz,
  },
  {
    title: "Bullet Camera Series",
    description: "Reliable fixed-view cameras for lane discipline, speed enforcement, and tolling applications.",
    image: bullet,
  },
  {
    title: "Camera Modules for ITS",
    description: "Advanced imaging with global shutter, HDR, low light performance, and high-speed GigE connectivity.",
    image: cameramodules,
  },
  {
    title: "AI Vision Box Series",
    description: "AI Vision Box for real-time edge analytics with NPU, multi-camera support, and rugged design for ITS.",
    image: aivision,
  },
];

const ProductCards = () => {
     useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  return (
   <div className="product-section">
      <h2 className="product-title">Products</h2>
            <div className="mainContainer">

      <div className="card-container">
        {productData.map((item, index) => (
          <div
            className="product-card"
            key={index}
            data-aos="fade-right"
            data-aos-delay={index * 300}
          >
            <img src={item.image} alt={item.title} className="product-image" />
            <h4 className="product-heading">{item.title}</h4>
            <p className="product-description">{item.description}</p>
            <div className="arrow-button">➜</div>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default ProductCards;
