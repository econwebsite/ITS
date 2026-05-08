import './Styles.css';
import { useEffect, useRef } from 'react';
import workflowsIcon from '../../../../assets/solutionpage/trafficEnforcement/workflows-icon.png';
import complianceIcon from '../../../../assets/solutionpage/trafficEnforcement/compliance-icon.png';
import awarenessIcon from '../../../../assets/solutionpage/trafficEnforcement/awareness-icon.png';
import safetyIcon from '../../../../assets/solutionpage/trafficEnforcement/safety-icon.png';

const benefits = [
  {
    text: 'Minimize manual workflows',
    icon: <img src={workflowsIcon} alt="Minimize manual workflows" />,
  },
  {
    text: 'Authorities improve compliance',
    icon: <img src={complianceIcon} alt="Authorities improve compliance" />,
  },
  {
    text: 'Enhance situational awareness',
    icon: <img src={awarenessIcon} alt="Enhance situational awareness" />,
  },
  {
    text: 'Support data-driven safety programs',
    icon: <img src={safetyIcon} alt="Support data-driven safety programs" />,
  },
];

const ITSBenefits = () => {
  const ref = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.2 }
    );

    ref.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="its-benefits" id="benefits">
      <div className="its-benefits__inner">

        {/* HEADER */}
        <div className="its-benefits__header">
          <h2 className="its-benefits__title">
            Benefits of Our Traffic Enforcement Vision Solutions
          </h2>

          <p className="its-benefits__desc">
            We combine custom imaging hardware with intelligent edge processing and analytics to help:
          </p>
        </div>

        {/* ICON ROW */}
        <div className="its-benefits__grid">
          {benefits.map((b, i) => (
            <div
              className="its-benefit-card"
              key={i}
              ref={(el) => (ref.current[i] = el)}
            >
              <div className="its-benefit-card__icon">
                {b.icon}
              </div>
              <p className="its-benefit-card__text">{b.text}</p>
            </div>
          ))}
        </div>

        {/* FOOTER */}
        {/* <div className="its-benefits__footer">
          <p>
            These capabilities empower authorities to improve road safety, optimize enforcement operations,
            and build smarter, data-driven transportation ecosystems.
          </p>
        </div> */}

      </div>
    </section>
  );
};

export default ITSBenefits;