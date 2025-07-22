import React from "react";
import "./Application.css";
import appImg from "../../../../assets/homepage/application.png";

const Applications = () => {
  return (
    <div className="application-container">
      <div className="application-left">
        <img src={appImg} alt="Applications" />
      </div>
      <div className="application-right">
        <h2>ITS Software Suite</h2>
        <p>
          End-to-end solution for ANPR, speed tracking, lane and signal
          violation, and wrong-way detection.
        </p>
        <button className="arrow-button">➜</button>
      </div>
    </div>
  );
};

export default Applications;
