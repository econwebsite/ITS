import React, { useEffect } from "react";
import "./ptz-features.css";

const PTZFeatures = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".feature-card");

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

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "Edge AI Analytics",
      desc: "Performs real-time object detection, vehicle classification, auto tracking and incident analysis using an onboard NPU — reducing bandwidth and enabling faster edge decisions.",
      number: "01",
    },
    {
      title: "Superior Low-Light and HDR Imaging",
      desc: "Ensures superior clarity, color accuracy, and detail in both bright daylight and dim nighttime environments.",
      number: "02",
    },
    {
      title: "Smart PTZ Control (Software-Based)",
      desc: "Provides adaptive, software-driven pan-tilt-zoom control for dynamic scene tracking and responsive monitoring across wide areas.",
      number: "03",
    },
    {
      title: "PoE-Powered Connectivity",
      desc: "Simplifies installation through single-cable power and data transfer — ideal for scalable, citywide deployments.",
      number: "04",
    },
    {
      title: "Rugged Weatherproof Design",
      desc: "IP66-rated housing ensures consistent performance in rain, dust, and extreme temperatures.",
      number: "05",
    },
    {
      title: "Seamless Smart Integration",
      desc: "ONVIF-compliant, allowing easy integration with existing VMS, ITS, and traffic management platforms.",
      number: "06",
    },
    {
      title: "Low Power & Solar-Compatible Design",
      desc: "Delivers power-efficient performance for reliable operation in remote and solar-powered environments.",
      number: "07",
    },
    {
      title: "Real-Time Event Detection and Alerts",
      desc: "Automatically identifies and flags critical traffic events—such as accidents, congestion, and violations—enabling faster response times and improved situational awareness.",
      number: "08",
    },
    {
      title: "Multi-Camera Synchronization",
      desc: "Supports synchronization with other cameras or sensors for unified monitoring across intersections, corridors, or large city zones.",
      number: "09",
    },
  ];

  return (
    <section id="smart-ptz" className="ptz-features-section">
      <h2>Why Choose the Smart Edge-AI Incident Camera?</h2>

      <div className="features">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
            <div className="feature-number">{feature.number}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PTZFeatures;
