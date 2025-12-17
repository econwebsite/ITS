import React, { useEffect } from "react";
import "./clovis-evidence-pipeline.css";
import pipelineImage from '../../../assets/clovis-central/clovis-evidence-pipeline.jpg'

const ClovisEvidencePipeline = () => {
  useEffect(() => {
    const section = document.querySelector(".pipeline-container");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="pipeline-section">
      <div className="pipeline-container">
        <div className="pipeline-content">
          <h2 className="pipeline-title">Building Reliable Digital Evidence Pipelines</h2>

          <p className="pipeline-desc">
            The Clovis Central EVMS transforms raw traffic footage into actionable, legally valid evidence — simplifying violation processing, accelerating reporting, and ensuring transparency.
          </p>

          <p className="pipeline-desc">
           Combined with e-con Systems' Smart PTZ Cameras, Smart Bullet cameras, and AI Compute Box,  it delivers a complete enforcement ecosystem that empowers cities and authorities to enforce smarter, faster, and more accurately.
          </p>
        </div>

        <div className="pipeline-image">
          <img
            src={pipelineImage}
            alt="Digital Evidence Pipeline"
          />
        </div>
      </div>
    </section>
  );
};

export default ClovisEvidencePipeline;
