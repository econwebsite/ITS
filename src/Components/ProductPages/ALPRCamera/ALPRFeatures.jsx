import React, { useEffect } from "react";
import "./alpr-features.css";

const ALPRFeatures = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".alpr-feature-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const alprFeatures = [
    {
      title: "High-Resolution 8MP Imaging",
      desc: "CMOS sensor with 3-lane coverage capability, advanced ISP tuning, and 120 dB True WDR for clear vehicle capture in varying lighting conditions.",
      number: "01",
    },
    {
      title: "Edge-Based AI Analytics",
      desc: "Real-time vehicle detection, classification, pedestrian detection, and color recognition directly on the camera for instant insights.",
      number: "02",
    },
    {
      title: "Sony STARVIS Technology",
      desc: "Exceptional low-light performance with IR illumination up to 20m, ensuring reliable operation day and night in both bright and dark environments.",
      number: "03",
    },
    {
      title: "Low-Power & Flexible Deployment",
      desc: "Power-efficient design (2-10W) supporting PoE, 12V DC, and solar-powered installations for remote and power-constrained locations.",
      number: "04",
    },
    {
      title: "Rugged & Weather-Resistant",
      desc: "IP67-rated housing withstands harsh outdoor conditions, operating from -30°C to +65°C with humidity up to 95% for coastal and extreme environments.",
      number: "05",
    },
    {
      title: "CloVis Central Integration",
      desc: "Seamless integration with e-con's management platform for remote monitoring, device management, and centralized analytics.",
      number: "06",
    },
    {
      title: "Secure & Compliant",
      desc: "Secure boot, ONVIF compliance, and advanced network protocols ensure data integrity and cybersecurity across your ITS deployment.",
      number: "07",
    },
    {
      title: "Multi-Scenario Support",
      desc: "Optimized for parking management, urban access control, low-speed traffic monitoring, and fixed/mobile deployments.",
      number: "08",
    },
  ];

  return (
    <section id="alpr-features" className="alpr-features-section">
      <h2>Why Choose AI-Enabled ALPR Cameras?</h2>

      <div className="alpr-features-grid">
        {alprFeatures.map((item, index) => (
          <div key={index} className="alpr-feature-card">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <div className="alpr-feature-number">{item.number}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ALPRFeatures;
