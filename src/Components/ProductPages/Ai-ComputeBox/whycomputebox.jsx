// whycomputebox.jsx
import React, { useEffect } from "react";
import "./whycomputebox.css";

const WhyComputeBox = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".compute-feature-card");

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
      title: "NEMA TS2-Compliant Design",
      desc: "Built to meet NEMA TS2 standards for traffic cabinet environments — ensuring long-term reliability, vibration tolerance, and environmental resilience.",
      number: "01",
    },
    {
      title: "High-Performance Edge AI",
      desc: "Delivers up to 157 TOPS with NVIDIA® Orin NX, 48 TOPS with Qualcomm®, and 15 TOPS with Ambarella® — tailored for diverse ITS workloads.",
      number: "02",
    },
    {
      title: "Built-In Edge Compute for ANPR",
      desc: "Integrates imaging, AI analytics, and compute in one compact housing — enabling on-device license plate recognition, vehicle classification, and event detection without relying on external servers.",
      number: "03",
    },
    {
      title: "Rugged, Field-Ready Design",
      desc: "Designed for continuous outdoor operation with weatherproof housing and thermal stability across extreme temperatures and conditions.",
      number: "04",
    },
    {
      title: "Flexible Multi-Camera Support",
      desc: "Connect up to 8 PoE or GMSL2 cameras for full intersection coverage and synchronized vision analytics.",
      number: "05",
    },
    {
      title: "Optimized for Traffic Vision AI",
      desc: "Supports advanced CNN-based detection, tracking, and classification models for vehicles, pedestrians, and vulnerable road users.",
      number: "06",
    },
    {
      title: "Edge-to-Cloud Integration",
      desc: "Enables seamless data transmission via Ethernet, Wi-Fi, or 4G/5G, ensuring interoperability with smart city analytics and centralized ITS platforms.",
      number: "07",
    },
  ];

  return (
    <section id="why-compute-box" className="compute-features-section">
      <h2>Why e-con's Compute Box</h2>

      <div className="compute-features">
        {features.map((feature, index) => (
          <div key={index} className="compute-feature-card">
            <h3>{feature.title}</h3>
            <p>{feature.desc}</p>
            <div className="compute-feature-number">{feature.number}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyComputeBox;