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
      title: "Built-In Edge Compute Box for ANPR",
      desc: "Integrates imaging, AI analytics, and compute in one compact housing — enabling on-device ANPR, classification, and event detection without external servers.",
      number: "01",
    },
    {
      title: "High-Resolution Global Shutter Imaging",
      desc: "Sony-based global shutter sensors capture clear, distortion-free frames of fast-moving vehicles — ensuring accurate plate and vehicle recognition at high speeds.",
      number: "02",
    },
    {
      title: "Real-Time Edge AI Analytics",
      desc: "Built-in NPUs enable intelligent, on-device analysis such as vehicle classification, violation detection, and motion tracking — reducing reliance on backend servers.",
      number: "03",
    },
    {
      title: "Superior Low-Light & HDR Performance",
      desc: "Ensures true-to-life imaging in challenging lighting — from bright daylight to dim tunnels — minimizing glare and reflection errors.",
      number: "04",
    },
    {
      title: "Rugged & Weatherproof Reliability",
      desc: "Designed for continuous outdoor operation with IP66/IP67 housing, vibration resistance, and temperature endurance for harsh roadside environments.",
      number: "05",
    },
    {
      title: "Low Power & Solar-Compatible Design",
      desc: "Energy-efficient architecture supports deployment in remote or solar-powered ITS locations, minimizing maintenance needs.",
      number: "06",
    },
    {
      title: "Smart Sensor Fusion & Integration",
      desc: "Easily integrates with radar, LiDAR, and trigger sensors for synchronized, multi-sensor enforcement and traffic analytics.",
      number: "07",
    },
    {
      title: "Simplified Connectivity & Deployment",
      desc: "PoE-based Ethernet connectivity enables single-cable power and data transmission — streamlining installation and scalability.",
      number: "08",
    },
  ];

  return (
    <section id="smart-bullet" className="bullet-features-section">
      <h2>Why Choose Smart Bullet Cameras?</h2>

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
