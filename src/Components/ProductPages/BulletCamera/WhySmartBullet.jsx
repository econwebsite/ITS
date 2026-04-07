import React, { useEffect } from "react";
import "./WhySmartBullet.css";

const WhySmartBullet = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".bullet-feature-card");

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

  const bulletFeatures = [
    {
      title: "Built-in Edge Compute Box",
      desc: "Integrates imaging, AI analytics, and compute in one compact housing.",
      number: "01",
    },
    {
      title: "High-Resolution Global Shutter Imaging",
      desc: "Global shutter sensors capture clear, distortion-free frames of fast-moving vehicles — ensuring accurate plate and vehicle recognition at high speeds.",
      number: "02",
    },
    {
      title: "Real-Time Edge AI Analytics",
      desc: "Built-in AI engines enable smart on-device analysis such as vehicle classification, violation detection, and motion tracking.",
      number: "03",
    },
    {
      title: "Superior Low-Light & HDR Performance",
      desc: "Ensures true-to-life imaging in challenging lighting — from bright daylight to dim tunnels — minimizing glare and reflection errors.",
      number: "04",
    },
    {
      title: "Rugged & Weatherproof Reliability",
      desc: "Designed for continuous outdoor operation with IP66 housing, vibration resistance, and temperature endurance for harsh roadside environments.",
      number: "05",
    },
    {
      title: "Low Power & Solar-Compatible Design",
      desc: "Energy-efficient architecture supports deployment in remote or solar-powered ITS locations, minimizing maintenance needs.",
      number: "06",
    },
    {
      title: "Multi-Sensor Fusion ",
      desc: "Easily integrates with radar, LiDAR, and trigger sensors for synchronized, multi-sensor enforcement and traffic analytics.",
      number: "07",
    },
    {
      title: "Simplified Connectivity & Deployment",
      desc: "Supports PoE-based Ethernet or wireless connectivity, enabling seamless installation and scalability.",
      number: "08",
    },
  ];

  return (
    <section id="smart-bullet" className="bullet-features-section">
      <h2>Why Choose Smart ANPR Cameras?</h2>

      <div className="bullet-features-grid">
        {bulletFeatures.map((item, index) => (
          <div key={index} className="bullet-feature-card">
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
            <div className="bullet-feature-number">{item.number}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhySmartBullet;
