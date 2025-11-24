import React, { useEffect } from "react";
import "./clovis-evms-why.css";

const ClovisEvmsWhy = () => {
  useEffect(() => {
    const cards = document.querySelectorAll(".evms-card");

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

  const steps = [
    {
      title: "End-to-End Integration",
      desc: "With e-con’s edge AI vision systems, enabling on-device analytics and automated video uploads.",
      number: "01",
    },
    {
      title: "API-Based Connectivity",
      desc: "API-Based Connectivity for enforcement, ticketing, and MIS systems to ensure smooth evidence transfer.",
      number: "02",
    },
    {
      title: "Reliable & Scalable Storage Architecture ",
      desc: "Reliable & Scalable Storage Architecture with redundant backups, health monitoring, and fault-tolerant design for uninterrupted evidence retention.",
      number: "03",
    },
    {
      title: "High Uptime & Data Security ",
      desc: "High Uptime & Data Security through redundant storage, encryption, and access control.",
      number: "04",
    },
    {
      title: "Central Command Integration",
      desc: "Central Command Integration with CCC and law enforcement dashboards for real-time situational awareness.",
      number: "05",
    },
  ];

  return (
    <section className="evms-section">
      <h2 className="evms-title">Why e-con Systems EVMS</h2>

      <div className="evms-grid">
        {steps.map((step, index) => (
          <div key={index} className="evms-card">
            <div className="evms-number">{step.number}</div>
            <h3>{step.title}</h3>
            <p>{step.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClovisEvmsWhy;
