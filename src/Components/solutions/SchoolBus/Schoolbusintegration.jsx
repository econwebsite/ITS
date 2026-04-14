import './SchoolBusIntegration.css';

const privacyItems = [
  {
    num: '01',
    title: 'ONVIF Standards & Open APIs',
    text: 'Integration with transportation and enforcement platforms',
  },
  {
    num: '02',
    title: 'Configurable Data Retention',
    text: 'Policies aligned with global privacy norms',
  },
  {
    num: '03',
    title: 'Object Anonymization',
    text: 'Non-relevant objects (faces, pedestrians) anonymized before storage or transmission',
  },
  {
    num: '04',
    title: 'Secure Transmission & Storage',
    text: 'Encryption and access controls throughout',
  },
];

const outcomes = [
  'Increase driver compliance with school bus stop signals',
  'Reduce illegal overtaking incidents near school buses',
  'Enhance overall route safety for students boarding and alighting',
  'Provide actionable analytics for transportation planners',
];

const SchoolBusIntegration = () => {
  return (
    <>
      {/* ────────────────────────────────────────────────────
          SECTION 1 — Integration, Privacy & Security
          Layout : Grey bg · 2 rows (title/desc + 4 cards)
      ──────────────────────────────────────────────────── */}
      <section className="sbint-priv" id="integration">
        <div className="sbint-priv__inner">

          <div className="sbint-priv__label">Integration &amp; Data Governance</div>

          {/* Row 1 — full-width title + description */}
          <div className="sbint-priv__row1">
            <h2 className="sbint-priv__title">
              Effortless Integration, Privacy and Security
            </h2>
            <p className="sbint-priv__desc">
              Our stop-arm enforcement camera solutions are designed for interoperability.
              Our camera solutions also come with privacy by design features that ensure
              responsible, region agnostic data handling while maintaining enforcement
              effectiveness.
            </p>
          </div>

          {/* Row 2 — 4 numbered point cards */}
          <div className="sbint-priv__cards">
            {privacyItems.map((p) => (
              <div className="sbint-priv__card" key={p.num}>
                <div className="sbint-priv__card-num">{p.num}</div>
                <div className="sbint-priv__card-title">{p.title}</div>
                <div className="sbint-priv__card-text">{p.text}</div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ────────────────────────────────────────────────────
          SECTION 2 — 24/7 Monitoring
          Layout : White bg · split panel + image
      ──────────────────────────────────────────────────── */}
      <section className="sbint-mon" id="monitoring">
        <div className="sbint-mon__inner">
          <div className="sbint-mon__label">Monitoring</div>
          <div className="sbint-mon__split">

            {/* Left: dark content panel */}
            <div className="sbint-mon__left">
              <div className="sbint-mon__left-bg">24/7</div>
              <div className="sbint-mon__mini-lbl">Monitoring</div>
              <h2 className="sbint-mon__title">
                24/7 Monitoring and High Confidence Accuracy
              </h2>
              <p className="sbint-mon__desc">
                Our stop-arm enforcement camera solutions are equipped with continuous
                operation and AI assisted detection. They capture illegal pass bys 24 hours
                a day, 7 days a week under various environmental conditions.
              </p>
              <p className="sbint-mon__note">
                With intelligent filtering and confidence scoring, this greatly reduces the
                risk of false positives and false negatives, even in complex traffic
                scenarios or multi vehicle situations.
              </p>
            </div>

            {/* Right: image panel */}
            <div className="sbint-mon__right">
              <img
                className="sbint-mon__img"
                src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=80"
                alt="School bus on road"
                loading="lazy"
              />
              <div className="sbint-mon__overlay" />
              <div className="sbint-mon__badge">Always On</div>
            </div>

          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────
          SECTION 3 — Proven Safety Outcomes
          Layout : Grey bg · header row + 2x2 outcome cards
      ──────────────────────────────────────────────────── */}
      <section className="sbint-out" id="outcomes">
        <div className="sbint-out__inner">

          <div className="sbint-out__header">
            <div>
              <div className="sbint-out__mini-lbl">Proven Outcomes</div>
              <h2 className="sbint-out__title">
                Proven Safety Outcomes of Our School Bus Stop-arm Cameras
              </h2>
            </div>
            <p className="sbint-out__intro">
              Our cameras deliver measurable, real-world improvements in road safety,
              compliance, and enforcement efficiency across every route and deployment
              scenario.
            </p>
          </div>

          <div className="sbint-out__grid">
            {outcomes.map((o, i) => (
              <div className="sbint-out__card" key={i}>
                <span className="sbint-out__num">0{i + 1}</span>
                <span className="sbint-out__text">{o}</span>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── CTA bar ── */}
      <div className="sbint-cta">
        <p className="sbint-cta__text">
          Explore how school bus stop arm enforcement cameras can enhance student safety,
          improve compliance, and more
        </p>
        <a href="#contact" className="sbint-cta__btn">Connect With Us</a>
      </div>
    </>
  );
};

export default SchoolBusIntegration;