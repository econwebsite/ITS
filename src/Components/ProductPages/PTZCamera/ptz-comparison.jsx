import React, { useEffect } from "react";
import "./ptz-comparison.css";
import AOS from "aos";
import "aos/dist/aos.css";

const variants = [
  {
    id: 1,
    title: "Core AI",
    image:
      "https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&h=750&w=1600",
    specs: {
      Resolution: "2MP",
      "On-board NPU": "1.2 TOPS",
      "IR Illumination": "Yes",
      Zoom: "4x",
      "PTZ Range": "355° / 80°",
      Storage: "SD Card",
    },
  },
  {
    id: 2,
    title: "Edge AI+",
    image:
      "https://images.pexels.com/photos/267614/pexels-photo-267614.jpeg?auto=compress&cs=tinysrgb&h=750&w=1600",
    specs: {
      Resolution: "8MP",
      "On-board NPU": "15 TOPS",
      "IR Illumination": "Yes",
      Zoom: "4x",
      "PTZ Range": "355° / 80°",
      Storage: "SD Card",
    },
  },
];

const PTZComparison = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const specLabels = Object.keys(variants[0].specs);

  return (
    <section className="ptz-comparison" id="ptz-comparison">
      <h2 className="section-title" data-aos="fade-up">
        Product Comparison
      </h2>

      <div className="comparison-wrapper" data-aos="fade-up">
        {/* Desktop Layout */}
        <div className="comparison-desktop">
          <div className="comparison-header">
            <div className="spec-col">Specifications</div>
            {variants.map((v) => (
              <div className="variant-col" key={v.id}>
                <div className="variant-card">
                  <img src={v.image} alt={v.title} className="variant-image" />
                  <h3>{v.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="comparison-body">
            {specLabels.map((label, idx) => (
              <div className="comparison-row" key={idx}>
                <div className="spec-label">{label}</div>
                {variants.map((v) => (
                  <div className="spec-value" key={v.id}>
                    {v.specs[label]}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="comparison-mobile">
          {specLabels.map((label, idx) => (
            <div className="mobile-comparison-card" key={idx}>
              <div className="mobile-spec-label">{label}</div>
              <div className="mobile-spec-values">
                {variants.map((v) => (
                  <div key={v.id} className="mobile-spec-item">
                    <strong>{v.title}</strong> - {v.specs[label]}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PTZComparison;
