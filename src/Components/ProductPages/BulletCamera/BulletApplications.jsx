import React from "react";
import "./bullet-applications.css";

const BulletApplications = () => {
  const applications = [
    {
      img: "https://e-consystems.com/images/markets/its/smart-cities.jpg",
      title: "Highway ANPR & Automated Tolling",
    },
    {
      img: "https://e-consystems.com/images/markets/its/smart-cities.jpg",
      title: "Red-Light & Stop-Line Violation Detection",
    },
    {
      img: "https://e-consystems.com/images/markets/its/smart-cities.jpg",
      title: "Parking Lot & Access Control Management",
    },
    {
      img: "https://e-consystems.com/images/markets/its/smart-cities.jpg",
      title: "Speed & Lane Discipline Monitoring",
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
