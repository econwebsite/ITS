import React from "react";
import "./BulletVariants.css";

const variants = [
  {
    name: "Bullet 5MP",
    tagline: "High-Performance",
    resolution: "5 MP (Sony-based)",
    zoom: "4× Optical",
    night: "Strobe IR Night Vision",
    ai: "Edge NPU for ANPR/ALPR",
    connectivity: "PoE Ethernet",
    storage: "SD Card",
  },
  {
    name: "Bullet Pro 8MP",
    tagline: "Advanced Professional Variant",
    resolution: "8 MP (Sony-based)",
    zoom: "18× Optical",
    night: "Enhanced Strobe IR",
    ai: "High-Performance NPU",
    connectivity: "PoE Ethernet",
    storage: "SD Card",
  },
];

const BulletVariants = () => {
  return (
    <section className="bullet-variants-wrapper">
      <h2 className="variants-title">Bullet Camera Variants</h2>
      {/* <p className="variants-subtitle">
        Choose the ideal bullet camera variant for your traffic enforcement and 
        ANPR/ALPR applications.
      </p> */}

      <div className="variants-container">
        {variants.map((variant, index) => (
          <div key={index} className="variant-card">
            <div className="variant-header">
              <h3>{variant.name}</h3>
              <span className="variant-tag">{variant.tagline}</span>
            </div>

                    <div className="variant-features">
            <div className="variant-label">Resolution</div>
            <div className="variant-value">{variant.resolution}</div>

            <div className="variant-label">Optical Zoom</div>
            <div className="variant-value">{variant.zoom}</div>

            <div className="variant-label">Night Vision</div>
            <div className="variant-value">{variant.night}</div>

            <div className="variant-label">On-board AI</div>
            <div className="variant-value">{variant.ai}</div>

            <div className="variant-label">Connectivity</div>
            <div className="variant-value">{variant.connectivity}</div>

            <div className="variant-label">Storage</div>
            <div className="variant-value">{variant.storage}</div>
            </div>

            {/* <button className="variant-button">Explore Variant →</button> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default BulletVariants;
