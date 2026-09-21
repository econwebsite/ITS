import React from "react";
import { Link } from "react-router-dom";
import "./bullet-applications.css";
import laneDetectionImg from '../../../assets/bullet-camera/traffic-enforcement.jpg'
import parkinglotManagementImg from '../../../assets/bullet-camera/parking-management.jpg'
import redLightViolationImg from '../../../assets/bullet-camera/red-light-violation.jpg'
import tollingSystemImg from '../../../assets/bullet-camera/tolling-highway-infrastructure.jpg'

const BulletApplications = () => {
  const applications = [
    {
      img: tollingSystemImg,
      title: "Automated Tolling and MLFF systems",
    },
    {
      img: redLightViolationImg,
      title: "Traffic enforcement",
      link: "/solutions/traffic-enforcement-camera"
    },
    {
      img: parkinglotManagementImg,
      title: "Parking Lot & Access Control Management",
      link: "https://www.e-consystems.com/markets/smart-cities-cameras/parking-lot-management.asp"
    }
  ];

  return (
    <section id="bullet-applications" className="bullet-applications">
      <div className="bullet-title-section text-center">
        <h2 className="bullet-title-primary">Target Applications</h2>
      </div>

      <div className="bullet-applications-grid">
        {applications.map((app, index) => {
          const CardContent = (
            <div className="bullet-application-card">
              <img src={app.img} alt={app.title} />
              <div className="bullet-application-overlay">
                <h4>{app.title}</h4>
              </div>
            </div>
          );

          if (!app.link) {
            return <div key={index}>{CardContent}</div>;
          }

          return app.link.startsWith('http') ? (
            <a key={index} href={app.link} target="_blank" rel="noopener noreferrer">
              {CardContent}
            </a>
          ) : (
            <Link key={index} to={app.link}>
              {CardContent}
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default BulletApplications;