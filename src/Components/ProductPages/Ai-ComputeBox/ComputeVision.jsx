import React, { useEffect } from "react";
import "./computevision.css";

const ComputeVision = () => {
  useEffect(() => {
    const section = document.querySelector(".computevision-wrapper");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.25 }
    );

    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="computevision-section">
      <div className="computevision-wrapper">
        <h2 className="cv-heading">Computer Vision at the Edge</h2>

        <div className="cv-content">
          <p>
           Powered by deep learning and image recognition, the Vision Box processes multiple camera feeds to identify vehicles, pedestrians, traffic signs, and events in real time — even under low light, glare, or rain.
          </p>

          <p>
            Using techniques such as background subtraction, CNN-based object detection, and multi-object tracking, it ensures accurate analytics in all traffic conditions.
          </p>

          <p>
           This edge-first architecture minimizes cloud dependency, reduces network load, and ensures millisecond-level decision-making — critical for intersection safety and congestion control.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComputeVision;
