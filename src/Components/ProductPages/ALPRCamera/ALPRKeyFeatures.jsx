import React, { useEffect } from "react";
import "./alpr-key-features.css";

const ALPRKeyFeatures = () => {
  const features = [
    {
      title: "High-Resolution Imaging",
      image: "https://images.unsplash.com/photo-1606933248051-5ce98adc4157?w=600&q=80",
      items: [
        "8MP CMOS sensor",
        "Supports up to 3-lane coverage",
        "Auto/Manual exposure mode for changing lighting conditions",
        "120 dB True WDR for high-contrast environments",
        "Excellent low-light performance with Sony® STARVIS™ technology",
        "IR range up to 20m for night time monitoring"
      ]
    },
    {
      title: "AI-Powered Edge Analytics",
      image: "https://images.unsplash.com/photo-1679921021728-00b78f957865?w=600&q=80",
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
        }
      ]
    },
    {
      title: "Flexible Deployment Options",
      image: "https://images.unsplash.com/photo-1503387762-592411456993?w=600&q=80",
      items: [
        "Ideal for parking management, urban access control, and low-speed traffic monitoring",
        "Supports mobile and fixed deployments",
        "Low-power options, including PoE or 12V DC, suitable for solar-powered roadside or rooftop installations",
        "Integrated with the CloVis Central™ platform for remote device management and monitoring"
      ]
    },
    {
      title: "Durable & Connected",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80",
      items: [
        "Rugged IP67 housing for outdoor use",
        "Operating range: -30°C to +65°C, humidity ≤95%",
        "Secure boot for device integrity and cybersecurity",
        "ONVIF-compliant with support for secure network protocols",
        "Gigabit Ethernet connectivity"
      ]
    }
  ];

  useEffect(() => {
    const cards = document.querySelectorAll(".key-feature-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="alpr-key-features-section">
      <div className="key-features-wrapper">
        <div className="key-features-header">
          <h2>Key Features</h2>
        </div>

        <div className="key-features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="key-feature-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="key-feature-image-wrapper">
                <img
                  src={feature.image}
                  alt={feature.title}
                  className="key-feature-image"
                  loading="lazy"
                />
                <div className="key-feature-overlay"></div>
              </div>

              <div className="key-feature-content">
                <h3 className="key-feature-title">{feature.title}</h3>

                {feature.groupedItems ? (
                  <>
                    <p className="key-feature-subtitle">{feature.subtitle}</p>
                    {feature.groupedItems.map((group, groupIndex) => (
                      <div key={groupIndex} className="key-feature-group">
                        <h4 className="key-feature-group-title">{group.heading}</h4>
                        <ul className="key-feature-list">
                          {group.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <span className="list-icon">•</span>
                              <span className="list-text">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </>
                ) : (
                  <ul className="key-feature-list">
                    {feature.items.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <span className="list-icon">•</span>
                        <span className="list-text">{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ALPRKeyFeatures;
