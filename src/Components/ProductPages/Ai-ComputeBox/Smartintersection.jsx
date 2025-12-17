import React, { useEffect } from "react";
import "./smart-intersection.css";
import Smartedge from "../../../assets/ai-compute-box/smart-intersection.jpg";

const Smartintersection = () => {
  useEffect(() => {
    const section = document.querySelector(".smart-int-container");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("smart-int-visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    if (section) observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="smart-int-section">
      <div className="smart-int-bg-shape"></div>

      <div className="smart-int-container">
        <div className="smart-int-left">
          <h2>Future-Ready for Smart Intersections</h2>
          <p>
            With upgradeable AI frameworks, support for multi-sensor fusion (radar, LiDAR, and cameras), and edge-to-cloud orchestration, the Rugged AI Vision Box delivers the compute backbone for next-generation intelligent intersections — enabling safer, smarter, and more connected urban mobility.
          </p>
        </div>

        <div className="smart-int-right">
  <img src={Smartedge} alt="Smart Intersection Illustration" className="smart-int-image"
  />
</div>

      </div>
    </section>
  );
};

export default Smartintersection;
