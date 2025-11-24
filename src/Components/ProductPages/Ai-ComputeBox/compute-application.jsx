import React from "react";
import "./compute-application.css";

const ComputeApplication = () => {
  const applications = [
    {
      img: "https://e-consystems.com/images/markets/its/smart-cities.jpg",
      title: "Adaptive Traffic Signal Control ",
    },
    {
      img: "https://e-consystems.com/images/markets/its/smart-cities.jpg",
      title: "Automatic License Plate Recognition (ALPR) ",
    },
    {
      img: "https://e-consystems.com/images/markets/its/smart-cities.jpg",
      title: "Red-Light & Speed Violation Detection ",
    },
    {
      img: "https://e-consystems.com/images/markets/its/smart-cities.jpg",
      title: "Vehicle Detection & Classification ",
    },
    {
      img: "https://e-consystems.com/images/markets/its/smart-cities.jpg",
      title: "Pedestrian & Vulnerable Road User (VRU) Safety ",
    },
    {
      img: "https://e-consystems.com/images/markets/its/smart-cities.jpg",
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