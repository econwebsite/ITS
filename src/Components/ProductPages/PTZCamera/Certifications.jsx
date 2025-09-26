import React from "react";
import "./Certifications.css";
import certificationsImage from "./its-certifications-en.jpg"; // Make sure to place your image in the same folder

const Certifications = () => {
  return (
    <section className="certifications-section">
      <div className="container">
        <h2 className="certifications-title">Certifications</h2>
        <div className="certifications-image-container">
          <img 
            src={certificationsImage} 
            alt="Certifications" 
            className="certifications-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Certifications;