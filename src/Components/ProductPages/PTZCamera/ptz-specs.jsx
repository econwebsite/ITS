import React from "react";
import "./ptz-specs.css";

const PTZSpecs = () => {
  return (
    <section id="specifications" className="ptz-spec-container">
      <h2>Specifications</h2>

      <table className="specs-table">
        <thead>
          <tr>
            <th>Category</th>
            <th>Specifications</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Image Sensor</td>
            <td>Sony STARVIS, 1/2.8” CMOS, 2MP</td>
          </tr>
          <tr>
            <td>Dynamic Range</td>
            <td>88dB HDR</td>
          </tr>
          <tr>
            <td>Resolution</td>
            <td>
              <ul>
                <li>FHD (1920 × 1080)</li>
                <li>HD (1280 × 720)</li>
                <li>VGA (640 × 480)</li>
                <li>QVGA (340 × 240)</li>
              </ul>
            </td>
          </tr>
          <tr>
            <td>Frame Rate</td>
            <td>30 & 60 fps</td>
          </tr>
          <tr>
            <td>Format</td>
            <td>MJPEG, H.265 and H.264</td>
          </tr>
          <tr>
            <td>On board AI Processing</td>
            <td>Integrated NPU for Edge AI Inference</td>
          </tr>
          <tr>
            <td>Network Interface</td>
            <td>RJ45, supports PoE</td>
          </tr>
          <tr>
            <td>Protection Grade</td>
            <td>IP66 weatherproof</td>
          </tr>
          <tr>
            <td>Remote Control</td>
            <td>Windows & Linux</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default PTZSpecs;
