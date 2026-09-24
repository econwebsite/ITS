import React from "react";
import "./BulletVariants.css";
import Modelbutton from "../../Button comp/Modelbutton";
import singleVisionImg from "../../../assets/alpr-camera/single-vision-camera.jpg";
import dualVisionImg from "../../../assets/alpr-camera/dual-vision-camera.png";

const products = [
  {
    name: "Single Vision ANPR Camera",
    image: singleVisionImg,
    points: [
      "Purpose built for Tolling such as MLFF",
      "5MP Global Shutter for capturing fast moving vehicles",
      "Inbuilt AI for real-time ANPR recognition without the need for additional compute",
    ],
    cta: "knowMore",
    link: "/products/trafficsenz/edge-ai-alpr-camera",
  },
  {
    name: "Dual Vision ANPR Camera",
    image: dualVisionImg,
    points: [
      "Purpose built for AI enabled Enforcement",
      "5MP Global Shutter camera for ANPR",
      "8MP HDR camera for context of the scene",
      "Inbuilt AI for advanced traffic analytics such as Stop sign Enforcement",
    ],
    cta: "contact",
  },
];

const BulletVariants = () => {
  return (
    <section className="bullet-variants-wrapper">
      <h2 className="variants-title">AI-Powered Smart ANPR Cameras</h2>

      <div className="variants-container">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <div className="product-card-media">
              <img src={product.image} alt={product.name} loading="lazy" />
            </div>

            <div className="product-card-body">
              <h3 className="product-card-title">{product.name}</h3>

              <ul className="product-card-points">
                {product.points.map((point, pointIndex) => (
                  <li key={pointIndex}>
                    <span className="product-card-point-icon">✓</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {product.cta === "knowMore" ? (
                <a href={product.link} className="product-card-btn gtm-btn">
                  Know More
                  <span className="product-card-btn-arrow">&gt;&gt;</span>
                </a>
              ) : (
                <Modelbutton
                  className="product-card-btn gtm-btn"
                  text="Contact Us"
                  backgroundColor="#69ba2f"
                  animationColor="#00aeef"
                  hoverColor="#00aeef"
                  padding="10px 24px"
                  fontSize="0.86rem"
                  borderRadius="999px"
                  productName={product.name}
                  title={product.name}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BulletVariants;
