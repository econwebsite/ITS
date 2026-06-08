// RLVDCameras.jsx

import './RLVDCameras.css';
import violationCamera from '../../../../assets/solutionpage/rlvd/violation-camera-img.jpg';

const features = [
  {
    title: 'Edge AI and OCR Vision Engines',
    text: 'On-device processing for automated plate extraction, vehicle classification, and event verification — without cloud dependency.',
  },
  {
    title: 'Advanced On-Camera ISP Tuning',
    text: 'Optimized exposure, contrast, and detail retention under varied lighting and weather conditions — from direct sunlight to low-light night operation.',
  },
];

const RLVDCameras = () => {
  return (
    <section className="rlvd-cameras">

      <div className="rlvd-cameras-container">

        {/* LEFT CONTENT */}
        <div className="rlvd-cameras-left fade-left">

          <h2>
            e-con Systems’ Red Light Violation Detection Cameras
          </h2>

          <p className="rlvd-description">
            Our high resolution overview cameras capture the full violation scenario, including vehicle position, intersection geometry, stop line, and signal status. 
          </p>

          <p className="rlvd-description">
            Our dedicated ANPR (Automatic Number Plate Recognition) cameras provide clear, high contrast license plate imaging regardless of lighting conditions.
          </p>

          <h3>We also provide:</h3>

          <div className="rlvd-feature-grid">

            {features.map((item, index) => (
              <div className="rlvd-feature-card" key={index}>

                <h4>{item.title}</h4>

                <p>{item.text}</p>

              </div>
            ))}

          </div>

          <p className="rlvd-bottom-text">
            e-con Systems’ RLVD cameras meet evidentiary standards for violation documentation and legal review. They deliver reliable images and detailed metadata that support enforcement workflows and public compliance programs.
          </p>

        </div>

        {/* RIGHT IMAGE */}
        <div className="rlvd-cameras-right fade-right">

          <div className="rlvd-camera-image">

            {/* Replace image path */}
            <img
              src={violationCamera}
              alt="Red Light Violation Detection Camera"
              className="rlvd-camera-img"
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default RLVDCameras;