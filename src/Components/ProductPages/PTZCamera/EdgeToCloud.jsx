import React from "react";
import "./edge-to-cloud.css";

const EdgeToCloud = () => {
  return (
    <section className="edge-cloud-section">
      <div className="edge-cloud-container">

        {/* LEFT SIDE IMAGE ILLUSTRATION */}
        <div className="edge-cloud-image-wrapper">
          <img
            src="src\assets\ptz-cameras\edge-to-cloud.png"
            alt="Edge to Cloud Diagram"
            className="edge-cloud-image"
          />
        </div>

        {/* RIGHT SIDE TEXT CONTENT */}
        <div className="edge-cloud-content">
          <h2 className="edge-cloud-title">
            Edge-to-Cloud Intelligence with Clovis Central
          </h2>

          <div className="edge-cloud-block">
            <h3>Seamless Edge-to-Cloud Coordination</h3>
            <p>
              When critical events (like accidents or violations) are detected at
              the edge, the camera invokes the main host or cloud for advanced
              processing and alert generation.
            </p>
          </div>

          <div className="edge-cloud-block">
            <h3>Secure Streaming & Local Control</h3>
            <p>
              Supports RTSP streaming in H.264 format, local web-based live view,
              and on-site camera configuration for ease of setup and diagnostics.
            </p>
          </div>

          <div className="edge-cloud-block">
            <h3>Centralized Management via Clovis Central</h3>
            <ul>
              <li>Remote device management & camera health monitoring</li>
              <li>Secure live feed access and historical video playback</li>
              <li>OTA firmware updates and rule-based data uploads</li>
              <li>SOC 2-level cybersecurity with MFA, SSO & encrypted transfer</li>
              <li>
                A unified dashboard to monitor, configure, and optimize all connected devices
              </li>
            </ul>
          </div>
        </div>

      </div>
    </section>
  );
};

export default EdgeToCloud;
