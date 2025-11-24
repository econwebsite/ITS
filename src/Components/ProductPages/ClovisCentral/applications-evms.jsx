import React from "react";
import "./applications-evms.css";

const ApplicationsEvms = () => {
  const applications = [
    {
      img: "https://e-consystems.com/images/markets/its/smart-cities.jpg",
      title: "Red-Light & Stop-Line Violation Detection",
    },
    {
      img: "https://e-consystems.com/images/markets/its/smart-cities.jpg",
      title: "Stop-Line & Lane Violation Detection",
    },
    {
      img: "https://e-consystems.com/images/markets/its/smart-cities.jpg",
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
