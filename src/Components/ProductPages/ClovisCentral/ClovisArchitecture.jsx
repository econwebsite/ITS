import React from "react";
import "./clovis-architecture.css";
import { FaVideo, FaTags, FaShieldAlt, FaSearchLocation } from "react-icons/fa";

const ClovisArchitectureTimeline = () => {
  const data = [
    {
      icon: <FaVideo />,
      title: "Automated Video Ingestion",
      text: "Integrates directly with e-con Systems' AI traffic cameras and compute boxes to receive high-resolution video feeds along with metadata (timestamp, GPS, and violation type).",
    },
    {
      icon: <FaTags />,
      title: "Violation Tagging & Indexing",
      text: "Automatically tags and categorizes footage based on red-light jumps, speeding, stop-line breaches, or near-miss events — simplifying incident review and legal workflows.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Authenticated & Legally Compliant",
      text: "Ensures every video is watermarked, time-synced, and cryptographically hashed to maintain integrity and chain of custody.",
    },
    {
      icon: <FaSearchLocation />,
      title: "Centralized Access & Review",
      text: "Authorized users can search, playback, and export video evidence by location, event, or license plate, with full audit trails and export logs.",
    },
  ];

  return (
    <section className="clovis-timeline-section">
      <div className="timeline-background-overlay">
        <div className="timeline-animated-bg">
        </div>
      </div>

      <div className="timeline-container">
        <h2 className="timeline-title">Evidence-Centric Architecture</h2>

        <div className="timeline-content">
          {data.map((item, index) => (
            <div className="timeline-item" key={index}>
              <div className="timeline-marker">
                <div className="marker-icon-wrapper">
                  <div className="marker-icon">{item.icon}</div>
                  <div className="marker-pulse"></div>
                </div>
                {index !== data.length - 1 && <div className="timeline-line"></div>}
              </div>

              <div className="timeline-card">
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClovisArchitectureTimeline;