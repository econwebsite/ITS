import React from "react";
import "./compute-application.css";
import laneDetectionImg from '../../../assets/ai-compute-box/lane-violation-detection.jpg'
import anprImg from '../../../assets/ai-compute-box/anpr.jpg'
import redLightViolationImg from '../../../assets/bullet-camera/red-light-violation.jpg'
import pedestrianImg from '../../../assets/ai-compute-box/pedestrian-detection.jpg'
import vehicleClassificationImg from '../../../assets/ai-compute-box/vehicle-detection-classification.jpg'

const ComputeApplication = () => {
  const applications = [
    {
      img: "https://e-consystems.com/images/markets/its/smart-cities.jpg",
      title: "Adaptive Traffic Signal Control ",
    },
    {
      img: anprImg,
      title: "Automatic License Plate Recognition (ALPR) ",
    },
    {
      img: redLightViolationImg,
      title: "Red-Light & Speed Violation Detection ",
    },
    {
      img: laneDetectionImg,
      title: "Vehicle Detection & Classification ",
    },
    {
      img: pedestrianImg,
      title: "Pedestrian & Vulnerable Road User (VRU) Safety ",
    },
    {
      img: vehicleClassificationImg,
      title: "Congestion & Flow Analytics ",
    },
  ];

  return (
    <section id="compute-applications" className="compute-applications">
      <div className="compute-title-section text-center">
        <h2 className="compute-title-primary">Target Applications</h2>
      </div>

      <div className="compute-applications-grid">
        {applications.map((app, index) => (
          <div key={index} className="compute-application-card">
            <img src={app.img} alt={app.title} />
            <div className="compute-application-overlay">
              <h4>{app.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ComputeApplication;