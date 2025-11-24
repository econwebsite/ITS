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
      desc: "Seamlessly connects with e-con's edge AI vision systems, enabling on-device analytics and automated evidence video uploads without manual intervention.",
      number: "01",
    },
    {
      title: "API-Based Connectivity",
      desc: "Ensures smooth, reliable integration with enforcement platforms, ticketing systems, and MIS dashboards for effortless evidence transfer.",
      number: "02",
    },
    {
      title: "Reliable & Scalable Storage",
      desc: "Built with redundant backups, health monitoring, and a fault-tolerant storage pipeline to ensure uninterrupted long-term evidence retention.",
      number: "03",
    },
    {
      title: "High Uptime & Security",
      desc: "Powered by encryption, access control, redundant clusters, and protected pathways to ensure security and maximum system availability.",
      number: "04",
    },
    {
      title: "Central Command Integration",
      desc: "Connects with CCC and law enforcement dashboards to deliver real-time situational awareness, playback, and violation intelligence.",
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
