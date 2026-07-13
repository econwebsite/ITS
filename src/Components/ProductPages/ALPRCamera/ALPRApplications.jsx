import React from "react";
import "./alpr-applications.css";
import parkingImg from '../../../assets/bullet-camera/parking-management.jpg'
import accessControlImg from '../../../assets/bullet-camera/parking-management.jpg'
import trafficMonitoringImg from '../../../assets/bullet-camera/traffic-enforcement.jpg'

const ALPRApplications = () => {
  const applications = [
    {
      img: parkingImg,
      title: "Smart Intersection Monitoring",
    },
    {
      img: accessControlImg,
      title: "Crosswalk Safety",
    },
    {
      img: trafficMonitoringImg,
      title: "Parking Management",
    }
  ];

  return (
    <section id="alpr-applications" className="alpr-applications">
      <div className="alpr-title-section text-center">
        <h2 className="alpr-title-primary">Applications</h2>
      </div>

      <div className="alpr-applications-grid">
        {applications.map((app, index) => (
          <div key={index} className="alpr-application-card">
            <img src={app.img} alt={app.title} />
            <div className="alpr-application-overlay">
              <h4>{app.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ALPRApplications;
