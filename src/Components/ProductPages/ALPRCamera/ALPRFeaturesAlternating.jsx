import React, { useState, useEffect } from "react";
import "./alpr-features-alternating.css";

const ALPRFeaturesAlternating = () => {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (sectionKey) => {
    setExpandedSection((prev) => (prev === sectionKey ? null : sectionKey));
  };

  useEffect(() => {
    const items = document.querySelectorAll(".feature-item");

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

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  const features = [
    {
      title: "High-Resolution Imaging",
      items: [
        "8MP CMOS sensor",
        "Supports monitoring of up to 3 traffic lanes",
        "Auto/Manual exposure mode for changing lighting conditions",
        "120 dB True WDR for high contrast scenes",
        "Sony® STARVIS™ technology for excellent low-light imaging ",
        "IR range up to 20m for night time monitoring",
        "M12 S-Mount lens, 25mm focal length",
        "Frame rate up to 30 fps",
        "H.265 / H.264 / MJPEG video compression"
      ],
      icon: (
        <svg viewBox="0 0 200 200" className="feature-svg">
          <rect x="40" y="50" width="120" height="90" fill="#196793" opacity="0.1" stroke="#196793" strokeWidth="2" rx="8"/>
          <circle cx="100" cy="90" r="20" fill="#196793" opacity="0.3"/>
          <circle cx="100" cy="90" r="14" fill="none" stroke="#00aeef" strokeWidth="2"/>
          <path d="M 70 130 Q 100 150 130 130" fill="none" stroke="#196793" strokeWidth="2" opacity="0.5"/>
          <line x1="60" y1="60" x2="70" y2="50" stroke="#00aeef" strokeWidth="2" opacity="0.7"/>
          <line x1="140" y1="60" x2="130" y2="50" stroke="#00aeef" strokeWidth="2" opacity="0.7"/>
        </svg>
      )
    },
    {
      title: "AI-Powered Edge Analytics",
      subtitle: "Powered by 4 TOPS onboard AI compute",
      groupedItems: [
        {
          heading: "Detection",
          items: ["Vehicle detection", "Pedestrian detection"]
        },
        {
          heading: "Classification",
          items: ["Vehicle classification", "Vehicle color recognition"]
        },
        {
          heading: "Enforcement",
          items: [
            "Lane violation detection",
            "Wrong-way driver detection",
            "Red light runner detection",
            "Helmet detection"
          ]
        },
        {
          heading: "Flexible Deployment Options",
          items: [
            "Designed for smart intersection monitoring, crosswalk safety, and parking management",
            "Supports fixed and solar-powered deployments",
            "Low-power options, including PoE or 12V DC input",
            "Integrated with the CloVis Central™ platform for remote device management "
          ]
        },
        {
          heading: "Durable & Connected",
          items: [
            "IP67-rated housing for outdoor use",
            "Operating range: -30°C to +65°C, humidity ≤95%",
            "Secure boot for device integrity and cybersecurity",
            "ONVIF Profile S/G/T compliant with support for secure network protocols",
            "Gigabit Ethernet connectivity",
            "Certified: BIS, CE, STQC, REACH, RoHS"
          ]
        }
      ],
      icon: (
        <svg viewBox="0 0 200 200" className="feature-svg">
          <rect x="30" y="30" width="140" height="140" fill="none" stroke="#196793" strokeWidth="2" rx="12" opacity="0.3"/>
          <circle cx="60" cy="70" r="15" fill="#00aeef" opacity="0.7"/>
          <circle cx="100" cy="60" r="15" fill="#69ba2f" opacity="0.7"/>
          <circle cx="140" cy="75" r="15" fill="#196793" opacity="0.7"/>
          <path d="M 60 85 L 100 110 L 140 90" fill="none" stroke="#00aeef" strokeWidth="2" opacity="0.6"/>
          <rect x="45" y="125" width="110" height="35" fill="#196793" opacity="0.1" stroke="#196793" strokeWidth="1.5" rx="4"/>
          <line x1="55" y1="135" x2="90" y2="135" stroke="#00aeef" strokeWidth="2" opacit="0.8"/>
          <line x1="55" y1="150" x2="140" y2="150" stroke="#00aeef" strokeWidth="1.5" opacity="0.6"/>
        </svg>
      )
    },
    {
      title: "Flexible Deployment Options",
      items: [
        "Designed for smart intersection monitoring, crosswalk safety, and parking management",
        "Supports fixed and solar-powered deployments",
        "Low-power options, including PoE or 12V DC, suitable for solar-powered roadside or rooftop installations",
        "Integrated with the CloVis Central™ platform for remote device management and monitoring"
      ],
      icon: (
        <svg viewBox="0 0 200 200" className="feature-svg">
          <circle cx="100" cy="100" r="50" fill="none" stroke="#196793" strokeWidth="2" opacity="0.3"/>
          <circle cx="100" cy="100" r="35" fill="none" stroke="#00aeef" strokeWidth="2" opacity="0.6"/>
          <circle cx="100" cy="100" r="25" fill="#196793" opacity="0.1"/>
          <circle cx="100" cy="100" r="15" fill="#00aeef" opacity="0.4"/>
          <path d="M 100 30 L 100 50" stroke="#69ba2f" strokeWidth="2.5" opacity="0.8" strokeLinecap="round"/>
          <path d="M 100 150 L 100 170" stroke="#69ba2f" strokeWidth="2.5" opacity="0.8" strokeLinecap="round"/>
          <path d="M 30 100 L 50 100" stroke="#69ba2f" strokeWidth="2.5" opacity="0.8" strokeLinecap="round"/>
          <path d="M 150 100 L 170 100" stroke="#69ba2f" strokeWidth="2.5" opacity="0.8" strokeLinecap="round"/>
          <path d="M 50 50 L 62 62" stroke="#69ba2f" strokeWidth="2" opacity="0.6" strokeLinecap="round"/>
          <path d="M 150 150 L 138 138" stroke="#69ba2f" strokeWidth="2" opacity="0.6" strokeLinecap="round"/>
        </svg>
      )
    },
    {
      title: "Durable & Connected",
      items: [
        "Rugged IP67 housing for outdoor use",
        "Operating range: -30°C to +65°C, humidity ≤95%",
        "Secure boot for device integrity and cybersecurity",
        "ONVIF Profile S/G/T compliant with support for secure network protocols",
        "Gigabit Ethernet connectivity",
        "Certified: BIS, CE, STQC, REACH, RoHS"
      ],
      icon: (
        <svg viewBox="0 0 200 200" className="feature-svg">
          <rect x="50" y="50" width="100" height="90" fill="none" stroke="#196793" strokeWidth="2.5" rx="8"/>
          <path d="M 60 70 L 140 70" stroke="#196793" strokeWidth="2" opacity="0.5"/>
          <rect x="65" y="80" width="70" height="35" fill="#00aeef" opacity="0.2" stroke="#00aeef" strokeWidth="1.5" rx="4"/>
          <circle cx="75" cy="95" r="5" fill="#196793" opacity="0.6"/>
          <circle cx="100" cy="95" r="5" fill="#196793" opacity="0.6"/>
          <circle cx="125" cy="95" r="5" fill="#196793" opacity="0.6"/>
          <path d="M 70 120 L 130 120" stroke="#69ba2f" strokeWidth="2.5" opacity="0.7"/>
          <path d="M 70 130 L 130 130" stroke="#69ba2f" strokeWidth="2.5" opacity="0.7"/>
          <path d="M 55 160 L 145 160" stroke="#196793" strokeWidth="3" opacity="0.4"/>
        </svg>
      )
    }
  ];

  return (
    <section className="alpr-features-alternating-section">
      <div className="features-alternating-wrapper">
        <div className="features-alternating-header">
          <h2>Key Features</h2>
        </div>

        <div className="features-alternating-container">
          {features.map((feature, index) => {
            // Special layout for AI-Powered Edge Analytics
            if (feature.title === "AI-Powered Edge Analytics") {
              return (
                <div key={index} className="feature-item ai-analytics-special">
                  <div className="feature-visual ai-visual">
                    {feature.icon}
                  </div>
                  <div className="feature-content ai-analytics-content">
                    <div className="ai-header">
                      <h3>{feature.title}</h3>
                    </div>

                    <div className="ai-sections-container">
                      {feature.groupedItems.map((group, groupIndex) => {
                        const sectionKey = `ai-section-${groupIndex}`;
                        const isExpanded = expandedSection === sectionKey;

                        return (
                          <div key={groupIndex} className="ai-section-accordion">
                            <button
                              className={`ai-section-toggle ${isExpanded ? "expanded" : ""}`}
                              onClick={() => toggleSection(sectionKey)}
                            >
                              <span className="ai-toggle-icon">
                                {isExpanded ? (
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                  </svg>
                                ) : (
                                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                                    <line x1="12" y1="5" x2="12" y2="19" />
                                    <line x1="5" y1="12" x2="19" y2="12" />
                                  </svg>
                                )}
                              </span>
                              <h4 className="ai-section-title">{group.heading}</h4>
                            </button>

                            <div
                              className={`ai-section-content ${isExpanded ? "visible" : ""}`}
                            >
                              <ul className="ai-items-list">
                                {group.items.map((item, itemIndex) => (
                                  <li key={itemIndex}>
                                    <span className="ai-checkmark">✓</span>
                                    <span className="ai-item-text">{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              );
            }

            // Default layout for other features
            return (
              <div
                key={index}
                className={`feature-item ${index % 2 === 0 ? "left-content" : "right-content"}`}
              >
                <div className="feature-content">
                  <h3>{feature.title}</h3>
                  <ul className="feature-items-list">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <span className="bullet-icon">✓</span>
                        <span className="item-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="feature-visual">
                  {feature.icon}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ALPRFeaturesAlternating;
