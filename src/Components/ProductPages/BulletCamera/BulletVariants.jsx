import React from "react";
import "./BulletVariants.css";
import productImg from "../../../assets/bullet-camera/automatic-number-plate-recognition-camera-thumb.png";

const product = {
  name: "5 MP Edge AI ANPR & Traffic Intelligence Camera",
  description:
    "AI-enabled ANPR camera designed for ITS",
  link: "/products/automatic-license-plate-recognition-camera",
};

const BulletVariants = () => {
  return (
    <section className="bullet-variants-wrapper">
      <h2 className="variants-title">AI-Powered Smart ANPR Camera</h2>

      <div className="variants-container">
        <div className="product-card">
          <div className="product-card-media">
            <img src={productImg} alt={product.name} loading="lazy" />
          </div>

          <div className="product-card-body">
            <h3 className="product-card-title">{product.name}</h3>
            <p className="product-card-description">{product.description}</p>

            <a href={product.link} className="product-card-btn gtm-btn">
              Know More
              <span className="product-card-btn-arrow">&gt;&gt;</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BulletVariants;
