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
      title: "AI-Based Auto Tracking",
      desc: "Automatically detects and follows vehicles or pedestrians — ideal for real-time violation capture, near-miss alerts, and traffic event tracking.",
      number: "01",
    },
    {
      title: "Edge AI Analytics",
      desc: "Performs real-time object detection, vehicle classification, and incident analysis using an onboard NPU — reducing bandwidth and enabling faster edge decisions.",
      number: "02",
    },
    {
      title: "Exceptional Low-Light Imaging / HDR",
      desc: "Sony-based imaging ensures superior clarity, color accuracy, and detail in both bright daylight and dim nighttime environments.",
      number: "03",
    },
    {
      title: "Smart PTZ Control (Software-Based)",
      desc: "Provides adaptive, software-driven pan-tilt-zoom control for dynamic scene tracking and responsive monitoring across wide areas.",
      number: "04",
    },
    {
      title: "PoE-Powered Connectivity",
      desc: "Simplifies installation through single-cable power and data transfer — ideal for scalable, citywide deployments.",
      number: "05",
    },
    {
      title: "Rugged Weatherproof Design",
      desc: "IP66-rated housing ensures consistent performance in rain, dust, and extreme temperatures.",
      number: "06",
    },
    {
      title: "Seamless Smart Integration",
      desc: "ONVIF-compliant, allowing easy integration with existing VMS, ITS, and traffic management platforms.",
      number: "07",
    },
  ];

  return (
    <section id="smart-ptz" className="ptz-features-section">
      <h2>Why Choose Smart PTZ Cameras?</h2>

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
