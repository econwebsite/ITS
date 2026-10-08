import React from "react";
import "./alpr-applications.css";
import parkingImg from '../../../assets/bullet-camera/tolling-highway-infrastructure.jpg'
import accessControlImg from '../../../assets/bullet-camera/parking-management.jpg'
import trafficMonitoringImg from '../../../assets/bullet-camera/traffic-enforcement.jpg'
import redLightViolationImg from '../../../assets/bullet-camera/red-light-violation.jpg'

const ALPRApplications = () => {
  const applications = [
    {
      img: parkingImg,
      title: "Automated Tolling and MLFF systems",
    },
    {
          img: redLightViolationImg,
          title: "Traffic enforcement",
          link: "/solutions/traffic-enforcement-camera"
    },
  ];

  return (
    <section id="alpr-applications" className="alpr-applications">
      <div className="alpr-title-section text-center">
        <h2 className="alpr-title-primary">Applications</h2>
      </div>

      <div className="alpr-applications-grid">
        {applications.map((app, index) => {
          const cardContent = (
            <>
              <img src={app.img} alt={app.title} />
              <div className="alpr-application-overlay">
                <h4>{app.title}</h4>
              </div>
            </>
          );

          return app.link ? (
            <a key={index} href={app.link} className="alpr-application-card">
              {cardContent}
            </a>
          ) : (
            <div key={index} className="alpr-application-card">
              {cardContent}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ALPRApplications;
