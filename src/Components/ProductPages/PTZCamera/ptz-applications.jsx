import React from "react";
import "./ptz-applications.css";
import redLightViolation from "../../../assets/ptz-cameras/red-light-violation.jpg";
import intersectionMonitoring from "../../../assets/ptz-cameras/intersection-monitoring.jpg"
import laneDiscipline from "../../../assets/ptz-cameras/lane-discipline.jpg"
import incidentDetection from "../../../assets/ptz-cameras/incident-detection.jpg"
import vehicleCounting from "../../../assets/ptz-cameras/vehicle-counting.jpg"
import wrongwayDetection from "../../../assets/ptz-cameras/wrong-way-detection.jpg"
import illegalParking from "../../../assets/ptz-cameras/illegal-parking-detection.jpg"
import pedestrianSafety from "../../../assets/ptz-cameras/pedestrian-monitoring.jpg"
import averageSpeed from "../../../assets/ptz-cameras/average-speed.jpg"

const PTZApplications = () => {
  const applications = [
    {
      img: redLightViolation,
      title: "Red-light and stop-line violation detection",
    },
    {
      img: intersectionMonitoring,
      title: "Intersection monitoring",
    },
    {
      img: laneDiscipline,
      title: "Lane discipline monitoring",
    },
    {
      img: incidentDetection,
      title: "Incident/accident detection",
    },
    {
      img: vehicleCounting,
      title: "Vehicle counting and classification",
    },
    {
      img: wrongwayDetection,
      title: "Wrong-way detection",
    },
    {
      img: illegalParking,
      title: "Illegal parking detection",
    },
    {
      img: pedestrianSafety,
      title: "Pedestrian safety monitoring",
    },
    {
      img: averageSpeed,
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
