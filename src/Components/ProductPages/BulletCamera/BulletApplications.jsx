import React from "react";
import "./bullet-applications.css";
import laneDetectionImg from '../../../assets/bullet-camera/lane-discipline.jpg'
import parkinglotManagementImg from '../../../assets/bullet-camera/parking-management.jpg'
import redLightViolationImg from '../../../assets/bullet-camera/red-light-violation.jpg'
import tollingSystemImg from '../../../assets/bullet-camera/tolling-highway-infrastructure.jpg'

const BulletApplications = () => {
  const applications = [
    {
      img: tollingSystemImg,
      title: "Automated Tolling ",
    },
    {
      img: redLightViolationImg,
      title: "Red-Light & Stop-Line Violation Detection ",
    },
    {
      img: parkinglotManagementImg,
      title: "Parking Lot & Access Control Management ",
    },
    {
      img: laneDetectionImg,
      title: "Speed & Lane Discipline Monitoring ",
    },
  ];

  return (
    <section id="bullet-applications" className="bullet-applications">
      <div className="bullet-title-section text-center">
        <h2 className="bullet-title-primary">Target Applications</h2>
      </div>

      <div className="bullet-applications-grid">
        {applications.map((app, index) => (
          <div key={index} className="bullet-application-card">
            <img src={app.img} alt={app.title} />

            <div className="bullet-application-overlay">
              <h4>{app.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BulletApplications;
