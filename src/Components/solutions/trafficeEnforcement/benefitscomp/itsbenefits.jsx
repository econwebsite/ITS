import './Styles.css';
import { useEffect, useRef } from 'react';

const benefits = [
  {
    text: 'Minimize manual workflows',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M4 6h16M4 12h10M4 18h7" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    text: 'Authorities improve compliance',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 2l8 4v6c0 5-3.5 9-8 10-4.5-1-8-5-8-10V6l8-4z" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    text: 'Enhance situational awareness',
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="3" strokeWidth="2"/>
        <path d="M2 12s4-6 10-6 10 6 10 6-4 6-10 6-10-6-10-6z" strokeWidth="2"/>
      </svg>
    ),
  },
  {
    text: 'Support data-driven safety programs',
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M4 20v-6M10 20v-10M16 20v-4M22 20v-14" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
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