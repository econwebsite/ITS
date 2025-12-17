import React from "react";
import "./applications-evms.css";
import laneDetectionImg from '../../../assets/bullet-camera/lane-discipline.jpg'
import incidentProofImg from '../../../assets/clovis-central/incident-evidence-review.jpg'
import redLightViolationImg from '../../../assets/bullet-camera/red-light-violation.jpg'

const ApplicationsEvms = () => {
  const applications = [
    {
      img: redLightViolationImg,
      title: "Red-Light & Stop-Line Violation Detection",
    },
    {
      img: laneDetectionImg,
      title: "Stop-Line & Lane Violation Detection",
    },
    {
      img: incidentProofImg,
      title: "Incident Evidence Review & Reporting",
    },
  ];

  return (
    <section className="evms-app-section">
      <h2 className="evms-app-title">Target Applications</h2>

      <div className="evms-app-grid">
        {applications.map((app, index) => (
          <div key={index} className="evms-app-card">
            <img src={app.img} alt={app.title} className="evms-app-img" />

            <div className="evms-app-overlay">
              <h4>{app.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ApplicationsEvms;
