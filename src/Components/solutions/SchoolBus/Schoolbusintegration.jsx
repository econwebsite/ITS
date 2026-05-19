import { useEffect, useRef } from 'react';
import './Schoolbusintegration.css';

const privacyItems = [
  {
    num: '01',
    title: 'ONVIF standards',
    text: 'ONVIF standards and open APIs for integration with transportation and enforcement platforms',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop',
  },
  {
    num: '02',
    title: 'Configurable data retention policies ',
    text: 'Configurable data retention policies aligned with global privacy norms',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
  },
  {
    num: '03',
    title: 'Anonymization of non relevant objects ',
    text: 'Anonymization of non relevant objects (faces, pedestrians) before storage or transmission',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=600&auto=format&fit=crop',
  },
  {
    num: '04',
    title: 'Secure transmission and storage',
    text: 'Secure transmission and storage with encryption and access controls',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop',
  },
];

const outcomes = [
  {
    num: '01',
    text: 'Increase driver compliance with school bus stop signals',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  },
  {
    num: '02',
    text: 'Reduce illegal overtaking incidents near school buses',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop',
  },
  {
    num: '03',
    text: 'Enhance overall route safety for students boarding and alighting',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=600&auto=format&fit=crop',
  },
  {
    num: '04',
    text: 'Provide actionable analytics for transportation planners',
    image: 'https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=600&auto=format&fit=crop',
  },
];

const SchoolBusIntegration = () => {
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('sbi-reveal--show');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );

    sectionRefs.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const setSectionRef = (index) => (el) => {
    sectionRefs.current[index] = el;
  };

  return (
    <>

      {/* ── SECTION 1: Integration, Privacy & Security — Grey bg ── */}
      <section className="sbi-priv sbi-reveal" id="integration" ref={setSectionRef(0)}>
        <div className="sbi-priv__inner">
          {/* Row 1: headline + description */}
          <div className="sbi-priv__intro">
            <h2 className="sbi-priv__title">
              Effortless Integration, Privacy and Security
            </h2>
            <p className="sbi-priv__desc">
             Our stop-arm enforcement camera solutions are designed for interoperability. They support:
            </p>
          </div>

          {/* Row 2: 4 icon cards */}
          <div className="sbi-priv__cards">
            {privacyItems.map((p) => (
              <div className="sbi-priv__card" key={p.num}>
                <div className="sbi-priv__card-image-wrap">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="sbi-priv__card-image"
                    loading="lazy"
                  />
                </div>
                <div className="sbi-priv__card-title">{p.title}</div>
                <div className="sbi-priv__card-text">{p.text}</div>
              </div>
            ))}
          </div>
            <p className="sbi-priv__desc" style={{marginTop: '20px', textAlign: 'left'}}>Our camera solutions also come with privacy by design features that ensure responsible, region agnostic data handling while maintaining enforcement effectiveness.</p>
        </div>
      </section>

      {/* ── SECTION 2: 24/7 Monitoring — White bg + images ── */}
      <section className="sbi-mon sbi-reveal" id="monitoring" ref={setSectionRef(1)}>
        <div className="sbi-mon__inner">
          <div className="sbi-mon__wrap">

            {/* Left: content panel */}
            <div className="sbi-mon__content">
              {/* <div className="sbi-mon__badge-row">
                <span className="sbi-mon__badge">24/7</span>
                <span className="sbi-mon__badge-label">Always active · All conditions</span>
              </div> */}
              <h2 className="sbi-mon__title">
                24/7 Monitoring and High Confidence Accuracy
              </h2>
              <p className="sbi-mon__desc">
                Our stop-arm enforcement camera solutions are equipped with continuous operation and AI assisted detection. They capture illegal pass bys 24 hours a day, 7 days a week under various environmental conditions. 
              </p>
              <p className="sbi-mon__desc">
                With intelligent filtering and confidence scoring, this greatly reduces the risk of false positives and false negatives, even in complex traffic scenarios or multi vehicle situations.
              </p>
            </div>

            {/* Right: stacked image panels */}
            <div className="sbi-mon__images">
              <div className="sbi-mon__img-main">
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                  alt="School bus on road"
                  loading="lazy"
                />
                <div className="sbi-mon__img-overlay" />
                {/* <div className="sbi-mon__img-tag">Route Surveillance</div> */}
              </div>
              {/* <div className="sbi-mon__img-sub">
                <img
                  src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80"
                  alt="AI monitoring technology"
                  loading="lazy"
                />
                <div className="sbi-mon__img-overlay" />
                <div className="sbi-mon__img-tag">AI Detection</div>
              </div> */}
            </div>

          </div>
        </div>
      </section>

      {/* ── SECTION 3: Proven Safety Outcomes — Grey bg ── */}
      <section className="sbi-out sbi-reveal" id="outcomes" ref={setSectionRef(2)}>
        <div className="sbi-out__inner">

          <div className="sbi-out__header">
            <div className="sbi-out__header-left">
              {/* <div className="sbi-out__mini-lbl">Proven Outcomes</div> */}
              <h2 className="sbi-out__title">
                Proven Safety Outcomes of Our School Bus Stop-arm Cameras
              </h2>
            </div>
          </div>

          <div className="sbi-out__list">
            <div className="sbi-out__list-left">
              {outcomes.map((o, i) => (
                <div className="sbi-out__row" key={i}>
                  <div className="sbi-out__row-image-wrap">
                    <img
                      src={o.image}
                      alt={o.text}
                      className="sbi-out__row-image"
                      loading="lazy"
                    />
                  </div>
                  <span className="sbi-out__row-text">{o.text}</span>
                </div>
              ))}
            </div>

            <div className="sbi-out__visual">
              <img
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
                alt="School bus route monitoring"
                className="sbi-out__visual-image"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </section>

      {/* ── CTA ── */}
      <div className="sbi-cta">
        <p className="sbi-cta__text">
          Explore how school bus stop arm enforcement cameras can enhance student safety, improve compliance, and more
        </p>
        <a href="#contact" className="sbi-cta__btn">Connect With Us</a>
      </div>

    </>
  );
};

export default SchoolBusIntegration;