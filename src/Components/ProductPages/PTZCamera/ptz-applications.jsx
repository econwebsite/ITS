import React from "react";
import "./ptz-applications.css";

const PTZApplications = () => {
  const applications = [
    {
      img: "https://e-consystems.com/images/markets/its/smart-cities.jpg",
      title: "Red-light and stop-line violation detection",
    },
    {
      img: "https://e-consystems.com/images/markets/its/smart-cities.jpg",
      title: "Intersection monitoring",
    },
    {
      img: "https://e-consystems.com/images/markets/its/smart-cities.jpg",
      title: "Lane discipline monitoring",
    },
    {
      img: "https://e-consystems.com/images/markets/its/smart-cities.jpg",
      title: "Incident/accident detection",
    },
    {
      img: "https://e-consystems.com/images/markets/its/smart-cities.jpg",
      title: "Vehicle counting and classification",
    },
    {
      img: "https://e-consystems.com/images/markets/its/smart-cities.jpg",
      title: "Wrong-way detection",
    },
    {
      img: "https://e-consystems.com/images/markets/its/smart-cities.jpg",
      title: "Illegal parking detection",
    },
    {
      img: "https://e-consystems.com/images/markets/its/smart-cities.jpg",
      title: "Pedestrian safety monitoring",
    },
    {
      img: "https://e-consystems.com/images/markets/its/smart-cities.jpg",
      title: "Average Speed Detection",
    },
  ];

  return (
    <section id="applications" className="ptz-applications">
      <div className="titleSection text-center">
        <h2 className="titlePrimary">Target Applications</h2>
      </div>

      <div className="applications-grid">
        {applications.map((app, index) => (
          <div key={index} className="application-card-new">
            <img src={app.img} alt={app.title} />
            <div className="application-card-overlay">
              <h4>{app.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PTZApplications;
