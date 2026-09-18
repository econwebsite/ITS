import React, { useState, useEffect, useRef } from "react";
import "./alpr-highlights.css";
import {
  FiZap,
  FiSun,
  FiCpu,
  FiShield,
  FiLink,
  FiArrowRight,
} from "react-icons/fi";

const AUTO_ROTATE_MS = 6000;

const ALPRHighlights = () => {
  const highlights = [
    {
      icon: <FiZap />,
      tag: "Speed",
      accent: "#116686",
      title: "High-Speed Capture",
      description:
        "Global shutter imaging reduces motion distortion for clear vehicle and plate capture at speeds up to 300 km/h. Pixel-based vehicle triggering uses image-based detection to trigger capture at the optimal moment, reducing the need for road sensors, inductive loops, and road-cutting infrastructure.",
    },
    {
      icon: <FiSun />,
      tag: "Illumination",
      accent: "#f5a623",
      title: "Challenging Lighting Conditions",
      description:
        "Auto Exposure Bracketing (AEB) captures multiple exposures per frame to preserve plate, windshield, and occupant detail in high-contrast scenes — including headlight glare and reflective HSRP plates. Synchronized 850 nm pulsed IR enables night-time plate capture up to 50m with reduced motion blur.",
    },
    {
      icon: <FiCpu />,
      tag: "Intelligence",
      accent: "#3b8506",
      title: "On-Camera Edge AI",
      description:
        "Edge AI processing supports ANPR, vehicle classification, wrong-way detection, traffic violation monitoring, and Make & Model Recognition (MMR) — reducing reliance on centralized processing.",
    },
    {
      icon: <FiShield />,
      tag: "Reliability",
      accent: "#5f0d24",
      title: "Deployment-Ready Design",
      description:
        "Secure Boot, ONVIF Profile T/G/M, up to 1 TB local storage, IP67/IK10 enclosure, PoE connectivity, and operation from −30°C to +70°C. Supports monitoring of up to two lanes and integrates with optional radar and external lighting for multi-sensor deployments.",
    },
    {
      icon: <FiLink />,
      tag: "Integration",
      accent: "#254c7b",
      title: "Built for Integration",
      description:
        "Designed to integrate with existing tolling infrastructure, traffic management systems, and enforcement applications — supporting vehicle detection, license plate recognition, and traffic violation monitoring at the edge.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const progressRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    if (isPaused) return undefined;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % highlights.length);
    }, AUTO_ROTATE_MS);

    return () => clearInterval(timer);
  }, [isPaused, highlights.length]);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const active = highlights[activeIndex];

  const handleSelect = (index) => {
    setActiveIndex(index);
  };

  return (
    <section
      className="alpr-highlights-section"
      ref={sectionRef}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="alpr-highlights-glow" style={{ "--accent": active.accent }} />

      <div className="alpr-highlights-wrapper">
        <div className="alpr-highlights-header">
          {/* <span className="alpr-highlights-eyebrow">Why TrafficSenz</span> */}
          {/* <h2>Engineered for Real-World Performance</h2>
          <p>
            Purpose-built capabilities that keep TrafficSenz accurate,
            reliable, and ready for deployment across highway, tolling, and
            enforcement environments.
          </p> */}
        </div>

        <div className="alpr-highlights-interactive">
          {/* Tab list */}
          <div className="alpr-highlights-tabs" role="tablist" aria-label="TrafficSenz highlights">
            {highlights.map((item, index) => {
              const isActive = index === activeIndex;
              return (
                <button
                  key={item.title}
                  role="tab"
                  aria-selected={isActive}
                  className={`alpr-highlight-tab ${isActive ? "active" : ""}`}
                  style={{ "--accent": item.accent }}
                  onClick={() => handleSelect(index)}
                >
                  <span className="alpr-highlight-tab-icon">{item.icon}</span>
                  <span className="alpr-highlight-tab-body">
                    <span className="alpr-highlight-tab-tag">{item.tag}</span>
                    <span className="alpr-highlight-tab-title">{item.title}</span>
                  </span>

                  {isActive && (
                    <span
                      className="alpr-highlight-tab-progress"
                      key={`progress-${activeIndex}-${isPaused}`}
                      ref={progressRef}
                      style={{
                        animationDuration: `${AUTO_ROTATE_MS}ms`,
                        animationPlayState: isPaused ? "paused" : "running",
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div className="alpr-highlight-panel" style={{ "--accent": active.accent }}>
            <div className="alpr-highlight-panel-icon">{active.icon}</div>
            {/* <span className="alpr-highlight-panel-tag">{active.tag}</span> */}
            <h3 key={`title-${activeIndex}`} className="alpr-highlight-panel-title">
              {active.title}
            </h3>
            <p key={`desc-${activeIndex}`} className="alpr-highlight-panel-desc">
              {active.description}
            </p>

            <button
              className="alpr-highlight-panel-next"
              onClick={() => handleSelect((activeIndex + 1) % highlights.length)}
            >
              Next capability
              <FiArrowRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ALPRHighlights;
