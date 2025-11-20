import React, { useEffect, useState } from "react";
import "./ptz-comparison.css";
import AOS from "aos";
import "aos/dist/aos.css";
import cameraimage from "../../../assets/ptz-cameras/5mp-ai-turret-camera-thumb.png";

const variants = [
  {
    id: 1,
    title: "Core AI",
    image: cameraimage,
    specs: {
      Resolution: "2MP",
      "On-board NPU": "1.2 TOPS",
      "IR Illumination": "Yes",
      Zoom: "4x",
      "PTZ Range": "355° / 80°",
      Storage: "SD Card",
    },
    features: ["Basic AI Detection", "Standard Recording", "Essential Analytics"],
    badge: "Standard"
  },
  {
    id: 2,
    title: "Edge AI+",
    image: cameraimage,
    specs: {
      Resolution: "8MP",
      "On-board NPU": "15 TOPS",
      "IR Illumination": "Yes",
      Zoom: "4x",
      "PTZ Range": "355° / 80°",
      Storage: "SD Card",
    },
    features: ["Advanced AI Detection", "4K Recording", "Smart Analytics", "Edge Computing", "Cloud Integration"],
    badge: "Premium",
    popular: true
  },
];

const PTZComparison = () => {
  const [selectedVariant, setSelectedVariant] = useState(1);
  
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const specLabels = Object.keys(variants[0].specs);

  return (
    <section className="ptz-comparison" id="ptz-comparison">
      <div className="container">
        <h2 className="section-title" data-aos="fade-up">
          Compare Models
        </h2>
        {/* <p className="section-subtitle" data-aos="fade-up" data-aos-delay="100">
          Choose the perfect PTZ camera for your needs
        </p> */}

        {/* Desktop Layout */}
        <div className="comparison-desktop" data-aos="fade-up" data-aos-delay="200">
          <div className="comparison-table">
            {/* Header Row */}
            <div className="table-header">
              <div className="header-cell features-header">
                <h3>Key Features & Specifications</h3>
              </div>
              {variants.map((variant) => (
                <div 
                  className={`header-cell product-header ${selectedVariant === variant.id ? 'selected' : ''} ${variant.popular ? 'popular' : ''}`}
                  key={variant.id}
                  onClick={() => setSelectedVariant(variant.id)}
                >
                  {/* {variant.popular && <div className="popular-badge">Most Popular</div>}
                  <div className="variant-badge">{variant.badge}</div> */}
                  <div className="product-image">
                    <img src={variant.image} alt={variant.title} />
                  </div>
                  <h3 className="product-title">{variant.title}</h3>
                  <div className="feature-list">
                    {variant.features.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <span className="check-icon">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Specifications */}
            <div className="table-body">
              {specLabels.map((label, index) => (
                <div className={`spec-row ${index % 2 === 0 ? 'even' : 'odd'}`} key={label}>
                  <div className="spec-label">{label}</div>
                  {variants.map((variant) => (
                    <div 
                      className={`spec-value ${selectedVariant === variant.id ? 'selected' : ''}`}
                      key={variant.id}
                    >
                      {variant.specs[label]}
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Action Row */}
            {/* <div className="table-footer">
              <div className="footer-cell"></div>
              {variants.map((variant) => (
                <div className="footer-cell" key={variant.id}>
                  <button className={`cta-button ${variant.popular ? 'primary' : 'secondary'}`}>
                    {variant.popular ? 'Buy Now' : 'Learn More'}
                  </button>
                </div>
              ))}
            </div> */}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="comparison-mobile">
          <div className="mobile-variant-selector">
            {variants.map((variant) => (
              <button
                key={variant.id}
                className={`variant-tab ${selectedVariant === variant.id ? 'active' : ''}`}
                onClick={() => setSelectedVariant(variant.id)}
              >
                {variant.title}
                {/* {variant.popular && <span className="mobile-badge">Popular</span>} */}
              </button>
            ))}
          </div>

          <div className="mobile-product-cards">
            {variants.map((variant) => (
              <div 
                className={`mobile-product-card ${selectedVariant === variant.id ? 'active' : ''}`}
                key={variant.id}
                data-aos="fade-up"
              >
                {/* {variant.popular } */}
                <div className="card-header">
                  <div className="product-image">
                    <img src={variant.image} alt={variant.title} />
                  </div>
                  <div className="product-info">
                    <h3>{variant.title}</h3>
                    {/* <div className="variant-badge">{variant.badge}</div> */}
                  </div>
                </div>

                <div className="specs-section">
                  <h4>Specifications</h4>
                  {specLabels.map((label) => (
                    <div className="mobile-spec-row" key={label}>
                      <span className="spec-name">{label}:</span>
                      <span className="spec-value">{variant.specs[label]}</span>
                    </div>
                  ))}
                </div>

                <div className="features-section">
                  <h4>Key Features</h4>
                  <div className="feature-list">
                    {variant.features.map((feature, index) => (
                      <div key={index} className="feature-item">
                        <span className="check-icon">✓</span>
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* <div className="card-footer">
                  <button className={`cta-button ${variant.popular ? 'primary' : 'secondary'}`}>
                    {variant.popular ? 'Buy Now' : 'Learn More'}
                  </button>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PTZComparison;