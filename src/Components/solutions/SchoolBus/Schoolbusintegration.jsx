import './SchoolBusIntegration.css';

const privacyItems = [
  {
    num: '01',
    title: 'ONVIF standards',
    text: 'ONVIF standards and open APIs for integration with transportation and enforcement platforms',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="7" height="7" rx="1"/>
        <rect x="15" y="3" width="7" height="7" rx="1"/>
        <rect x="2" y="14" width="7" height="7" rx="1"/>
        <rect x="15" y="14" width="7" height="7" rx="1"/>
        <line x1="9" y1="6.5" x2="15" y2="6.5"/>
        <line x1="9" y1="17.5" x2="15" y2="17.5"/>
        <line x1="12" y1="6.5" x2="12" y2="17.5"/>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Configurable data retention policies ',
    text: 'Configurable data retention policies aligned with global privacy norms',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9"/>
        <polyline points="12 7 12 12 15 15"/>
        <line x1="3.6" y1="9" x2="20.4" y2="9"/>
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Anonymization of non relevant objects ',
    text: 'Anonymization of non relevant objects (faces, pedestrians) before storage or transmission',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <line x1="17" y1="8" x2="23" y2="8"/>
        <line x1="17" y1="11" x2="23" y2="11"/>
        <line x1="17" y1="14" x2="23" y2="14"/>
      </svg>
    ),
  },
  {
    num: '04',
    title: 'Secure transmission and storage',
    text: 'Secure transmission and storage with encryption and access controls',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        <circle cx="12" cy="16" r="1" fill="currentColor"/>
      </svg>
    ),
  },
];

const outcomes = [
  {
    num: '01',
    text: 'Increase driver compliance with school bus stop signals',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
  },
  {
    num: '02',
    text: 'Reduce illegal overtaking incidents near school buses',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"/>
        <line x1="12" y1="8" x2="12" y2="12"/>
        <line x1="12" y1="16" x2="12.01" y2="16"/>
      </svg>
    ),
  },
  {
    num: '03',
    text: 'Enhance overall route safety for students boarding and alighting',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
  },
  {
    num: '04',
    text: 'Provide actionable analytics for transportation planners',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
        <line x1="2" y1="20" x2="22" y2="20"/>
      </svg>
    ),
  },
];

const SchoolBusIntegration = () => {
  return (
    <>

      {/* ── SECTION 1: Integration, Privacy & Security — Grey bg ── */}
      <section className="sbi-priv" id="integration">
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
                <div className="sbi-priv__card-icon">{p.icon}</div>
                <div className="sbi-priv__card-num">{p.num}</div>
                <div className="sbi-priv__card-title">{p.title}</div>
                <div className="sbi-priv__card-text">{p.text}</div>
              </div>
            ))}
          </div>
            <p className="sbi-priv__desc" style={{marginTop: '20px', textAlign: 'left'}}>Our camera solutions also come with privacy by design features that ensure responsible, region agnostic data handling while maintaining enforcement effectiveness.</p>
        </div>
      </section>

      {/* ── SECTION 2: 24/7 Monitoring — White bg + images ── */}
      <section className="sbi-mon" id="monitoring">
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
      <section className="sbi-out" id="outcomes">
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
            {outcomes.map((o, i) => (
              <div className="sbi-out__row" key={i}>
                <div className="sbi-out__row-icon">{o.icon}</div>
                <span className="sbi-out__row-num"></span>
                <span className="sbi-out__row-text">{o.text}</span>
              </div>
            ))}
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