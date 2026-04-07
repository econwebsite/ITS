// src/components/Marketscomp/Products.jsx
import React from "react";
import "./Products.css";

const products = [
  {
    title: "PTZ Camera Series",
    img: "https://via.placeholder.com/200x150.png?text=PTZ+Camera",
    link: "/ptz-camera",
  },
  {
    title: "Bullet Camera Series",
    img: "https://via.placeholder.com/200x150.png?text=Bullet+Camera",
    link: "/products/anpr-alpr-bullet-cameras",
  },
  {
    title: "Camera Modules for ITS",
    img: "https://via.placeholder.com/200x150.png?text=Camera+Module",
    link: "/camera-modules",
  },
  {
    title: "AI Vision Box Series",
    img: "https://via.placeholder.com/200x150.png?text=AI+Vision+Box",
    link: "/ai-vision-box",
  },
];

const Products = () => {
  return (
    <section className="products-section">
      <h2 className="products-title">Products</h2>
      <div className="products-grid">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <img src={product.img} alt={product.title} className="product-img" />
            <h3 className="product-name">{product.title}</h3>

            {/* ✅ Fancy Arrow Button */}
            <a href={product.link} className="know-more-btn">
              <span className="btn-text">Know More</span>
              <i className="fas fa-arrow-right btn-icon"></i>
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
