import React from "react";
import bullet from "../../../assets/homepage/alpr-camera.png";
import ALPRsdk from "../../../assets/alpr/alpr-software-suite-thumb.jpg";
import "./Recomentedproducts.css";

const Recomentedproducts = () => {
  return (
    <section className="recomented-products hardware" id="products" style={{margin: "2em 0em", padding: "2em 0em", background: "#f9fafb"}}>
      <div className="container">
        <div className="hardware-grid">
            <div className="hardware-section">
            <h2 className="hardware-title">Recommended Compute Boxes</h2>
            <div className="hardware-items">
              <div className="hardware-item">
                <div className="hardware-icon" style={{ width: "auto", height: "auto", backgroundColor: "transparent" }}>
                  <a href="https://www.e-consystems.com/nvidia-embedded-computing-platforms.asp">
                    <img
                      src="https://www.e-consystems.com/images/computebox/darsionx/ecu-compute-box-darsi-onx-image-thumb.png"
                      className="hardware-icon-img"
                      alt="Compute Box"
                      style={{ width: "200px", height: "200px" }}
                    />
                  </a>
                </div>
                <a href="https://www.e-consystems.com/nvidia-embedded-computing-platforms.asp">
                  <div className="hardware-details">
                    <h4 className="hardware-item-title">
                      e-con Systems' Darsi Pro - an AI Compute Box based on NVIDIA&reg; Jetson Orin&trade; NX
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
