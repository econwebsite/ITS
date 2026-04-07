import React,{useEffect } from 'react';
import { useNavigate } from "react-router-dom";   // ✅ import navigation
import AOS from 'aos';
import alpr from "../../../assets/alpr/alpr-software-suite-thumb.jpg"
import bullet from "../../../assets/homepage/alpr-camera.png"
// import cameramodules from "../../../assets/clovis-central/clovis-evms-thumbnail.png"
import aivision from "../../../assets/ai-compute-box/ai-compute-box-thumb.png";
import "./Productcards.css"

const productData = [
  {
    title: "ALPR Camera series",
    description: "Reliable fixed-view cameras for traffic enforcement, tolling and parking applications.",
    image: bullet,
    link: "/products/anpr-alpr-bullet-cameras",
  },
  {
    title: "AI Vision Box Series",
    description: "AI Vision Box with multi-camera support and a rugged design for mobile and fixed deployments.",
    image: aivision,
    link: "/products/ai-vision-box",
  },
  {
    title: "ALPR SDK",
    description: "AI-based ALPR SDK optimized for edge and cloud deployments.",
    image: alpr,
    link: "/products/license-plate-recognition-software",
  },
  // {
  //   title: "Evidence Video Management System",
  //   description: "Advanced imaging with global shutter, HDR, low light performance, and high-speed GigE connectivity.",
  //   image: cameramodules,
  //   link: "/products/evidence-video-management-system",
  // },
];

const ProductCards = () => {
  const navigate = useNavigate();
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
            onClick={() => item.link && navigate(item.link)} // ✅ only clickable if link exists
              style={{ cursor: item.link ? "pointer" : "default" }} // ✅ pointer only for PTZ
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
