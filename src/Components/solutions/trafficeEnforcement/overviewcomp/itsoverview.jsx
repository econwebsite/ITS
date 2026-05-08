import './Styles.css';
import { useEffect, useRef } from 'react';

import violation from '../../../../assets/solutionpage/trafficEnforcement/violation-issuance.jpg';
import enforcementAnalytics from '../../../../assets/solutionpage/trafficEnforcement/enforcement-analytics.jpg';
import longTermSafety from '../../../../assets/solutionpage/trafficEnforcement/safety-outcomes.jpg';

const pillars = [
  {
    title: 'Violation issuance',
    icon: violation,
  },
  {
    title: 'Enforcement analytics',
    icon: enforcementAnalytics,
  },
  {
    title: 'Long-term safety outcomes',
    icon: longTermSafety,
  },
];

const ITSOverview = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.dataset.index;

            setTimeout(() => {
              entry.target.classList.add('animate');
            }, index * 180); // 👈 stagger delay
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="its-overview" id="overview">
      <div className="its-overview__inner">
        
        {/* HEADER */}
        <div className="its-overview__header">
          <h2 className="its-overview__title">
            Vision-Based Traffic Enforcement Solutions
          </h2>
          <p className="its-overview__lead">
            Traffic enforcement cameras are automated imaging devices deployed on public roads to detect, identify, and document traffic law violations. It includes speeding, red‑light running, and illegal school bus stop‑arm violations. These systems combine high‑resolution video capture with license plate recognition (ANPR/LPR) and intelligent processing to support:
          </p>
        </div>

        {/* CARDS */}
        <div className="its-overview__grid">
          {pillars.map((p, i) => (
            <div
              className="its-card"
              key={i}
              data-index={i}
              ref={(el) => (cardsRef.current[i] = el)}
            >
              <div className="its-card__image">
                <img src={p.icon} alt={p.title} />
              </div>

              {/* OVERLAY HALF OUTSIDE */}
              <div className="its-card__overlay">
                {p.title}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ITSOverview;