import React from "react";
import bullet from "../../../assets/homepage/alpr-camera.png";
import ALPRsdk from "../../../assets/alpr/alpr-software-suite-thumb.jpg";
import "./Recomentedproducts.css";

const Recomentedproducts = () => {
  return (
    <section className="recomented-products hardware" id="products" style={{margin: "1em"}}>
      <div className="container">
        <div className="hardware-grid">
              <div className="platforms-section">
            <h2 className="hardware-title">Recommended ALPR Cameras</h2>
            <div className="hardware-item">
              <div className="hardware-icon">
                <a href="/products/anpr-alpr-bullet-cameras">
                  <img src={bullet} className="hardware-icon-img" alt="Cameras" />
                </a>
              </div>
              <a href="/products/anpr-alpr-bullet-cameras">
                <div className="hardware-details">
                  <h4 className="hardware-item-title">Recommended ALPR Cameras</h4>
                  <span className="explore-link" role="button" style={{ cursor: "pointer" }}>
                    Explore
                    <span className="arrow">→</span>
                  </span>
                </div>
              </a>
            </div>
          </div>
          <div className="hardware-section">
            <h2 className="hardware-title">Recommended ALPR SDK</h2>
            <div className="hardware-items">
              <div className="hardware-item">
                <div className="hardware-icon" style={{ width: "auto", height: "auto", backgroundColor: "transparent" }}>
                  <a href="/products/license-plate-recognition-software">
                    <img
                      src={ALPRsdk}
                      className="hardware-icon-img"
                      alt="ALPR SDK"
                      style={{ width: "200px", height: "200px" }}
                    />
                  </a>
                </div>
                <a href="/products/license-plate-recognition-software">
                  <div className="hardware-details">
                    <h4 className="hardware-item-title">
                      AI-based ALPR SDK optimized for edge and cloud deployments.
                    </h4>
                    <span className="explore-link" role="button" style={{ cursor: "pointer" }}>
                      Explore
                      <span className="arrow">→</span>
                    </span>
                  </div>
                </a>
              </div>
            </div>
          </div>

        
        </div>
      </div>
    </section>
  );
};

export default Recomentedproducts;
