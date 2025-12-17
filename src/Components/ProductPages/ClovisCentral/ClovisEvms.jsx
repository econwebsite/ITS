import React from "react";
import "./clovis-evms.css";
import clovisThumbnail from '../../../assets/clovis-central/clovis-evms-thumbnail.png'

const ClovisEvms = () => {
  return (
    <section className="evms-section">
      <div className="evmspara-grid">
        
        {/* Left Image - PNG */}
        <div className="evms-image-wrapper">
          <img
            src={clovisThumbnail}
            alt="Traffic Enforcement Camera"
            className="evms-image"
          />
        </div>

        {/* Right Content */}
        <div className="evms-content">
          <h2 className="titlePrimary">
            Evidence Video Management System (EVMS) for Traffic Enforcement
          </h2>

          <p className="paragraphtext">
            The Clovis Central is a secure, centralized device management solution built for traffic enforcement and legal evidence handling.
          </p>

          <p className="paragraphtext">
            It enables automatic ingestion, tagging, storage, and retrieval of video evidence captured during red-light, speeding, and other traffic violations. This ensures that every frame is authenticated, time-stamped, and legally admissible.
          </p>

          <p className="paragraphtext">
           Designed for law enforcement, smart city authorities, and traffic command centers, EVMS brings together advanced video analytics, compliance-driven storage, and seamless integration with enforcement systems — all within a unified, scalable platform.
          </p>

          <div className="evms-btn-wrapper">
            <button className="btn-blue btn-with-icon">
              Contact Us
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ClovisEvms;
