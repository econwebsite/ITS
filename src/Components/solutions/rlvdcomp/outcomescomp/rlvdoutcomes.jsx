import './styles.css';

const outcomes = [
  {
    title: 'Reduction in Red Light Violations',
    text: 'Measurable decrease in unsafe intersection behavior and red-light running incidents following deployment.',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23,6 13.5,15.5 8.5,10.5 1,18"/><polyline points="17,6 23,6 23,12"/></svg>,
  },
  {
    title: 'Decline in Angle Collisions',
    text: 'Measurable declines in angle collisions and serious injury rates at monitored intersections.',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/><polyline points="15,9 9,9 9,15"/></svg>,
  },
  {
    title: 'Enhanced Driver Compliance',
    text: 'Increased intersection compliance and driver awareness across monitored urban and suburban corridors.',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9,12 11,14 15,10"/></svg>,
  },
  {
    title: 'Data-Driven Safety Programs',
    text: 'Rich analytics and enforcement data that support long-term traffic safety decisions and resource allocation.',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>,
  },
];

const badges = [
  { val: '↓42%', label: 'Violations' },
  { val: '↓35%', label: 'Collisions' },
  { val: '↑89%', label: 'Compliance' },
];

const RLVDOutcomes = () => {
  return (
    <section className="rlvd-outcomes" id="outcomes">
      <div className="rlvd-outcomes__inner">
        <div className="rlvd-outcomes__header">
          <p className="rlvd-outcomes__eyebrow">Proven Results</p>
          <h2 className="rlvd-outcomes__title">Proven Safety Outcomes of Our RLVD Cameras</h2>
        </div>

        <div className="rlvd-outcomes__grid">
          {outcomes.map((o) => (
            <div className="rlvd-out-card" key={o.title}>
              <div className="rlvd-out-card__icon-wrap">{o.icon}</div>
              <div>
                <div className="rlvd-out-card__title">{o.title}</div>
                <p className="rlvd-out-card__text">{o.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rlvd-outcomes__analytics">
          <div className="rlvd-outcomes__analytics-text">
            <div className="rlvd-outcomes__analytics-title">Rich Analytics for Traffic Safety Programs</div>
            <p className="rlvd-outcomes__analytics-sub">
              Combining intelligent imaging hardware with advanced analytics, our RLVD cameras empower
              agencies with real-time, actionable insights to strengthen intersection safety programs.
            </p>
          </div>
          <div className="rlvd-outcomes__analytics-badges">
            {badges.map((b) => (
              <div className="rlvd-analytics-badge" key={b.label}>
                <div className="rlvd-analytics-badge__val">{b.val}</div>
                <div className="rlvd-analytics-badge__label">{b.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RLVDOutcomes;