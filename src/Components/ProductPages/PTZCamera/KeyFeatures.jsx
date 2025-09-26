import React, { useEffect } from "react";
import "./KeyFeatures.css";
import AOS from "aos";
import "aos/dist/aos.css";

const features = [
  {
    id: 1,
    title: "EDGE AI PROCESSING",
    desc: "Onboard NPUs enable real-time decision-making with low latency.",
  },
  {
    id: 2,
    title: "LOW-LIGHT CLARITY",
    desc: "Sony STARVIS sensors provide excellent visibility, even in nighttime or glare-prone settings.",
  },
  {
    id: 3,
    title: "DYNAMIC PTZ CONTROL",
    desc: "355° pan, 80° tilt, and 4x zoom for wide-area intersection coverage.",
  },
  {
    id: 4,
    title: "LOCAL STORAGE",
    desc: "SD card support allows footage and analytics logs to be recorded without cloud reliance.",
  },
  {
    id: 5,
    title: "OUTDOOR-READY",
    desc: "IP-rated enclosures (IP66/IK10) are built to handle extreme weather, vibration, and 24/7 operation.",
  },
  {
    id: 6,
    title: "RTSP & ONVIF SUPPORT",
    desc: "Easy integration with existing traffic management and VMS systems.",
  },
  {
    id: 7,
    title: "LOW POWER & SOLAR COMPATIBILITY",
    desc: "Designed with power efficiency in mind for remote, solar-powered deployments.",
  },
];

const KeyFeatures = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className="keyfeatures-section">
      <h2 className="section-title" data-aos="fade-up">
        Key Features
      </h2>
      <div className="timeline">
        <div className="timeline-line">
            <div className="Pointer-top"></div>
            <div className="Pointer-bottom"></div>
        </div>
        {features.map((feature, index) => (
          <div
            key={feature.id}
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
          >
            {/* Pointer line - Hidden on mobile */}
            <div className="pointer-line">
                <div
                    className={feature.id % 2 === 0 ? "pointing-dot-right" : "pointing-dot-left"}
                ></div>
            </div>

            {/* Circle - Hidden on mobile */}
            <span
                    className={`number-circle ${
                        feature.id % 2 === 0 ? "number-circle-right" : "number-circle-left"
                    }`}
                    >
                    {feature.id}
            </span>

            {/* Content */}
            <div className="content-box">
              <h3>
                <span className="label">{feature.id}</span> {feature.title}
              </h3>
              <p>{feature.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;