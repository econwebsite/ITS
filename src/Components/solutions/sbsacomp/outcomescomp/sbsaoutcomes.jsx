import './Styles.css';

const outcomes = [
  {
    title: 'Increase Driver Compliance',
    text: 'Measurable improvement in driver compliance with school bus stop signals across monitored routes and districts.',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>,
  },
  {
    title: 'Reduce Illegal Overtaking Incidents',
    text: 'Significant reduction in vehicles illegally passing school buses during stop-arm activation — documented through enforcement data.',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/><polyline points="15,9 9,9 9,15"/></svg>,
  },
  {
    title: 'Enhance Student Route Safety',
    text: 'Improved overall route safety for students boarding and alighting — particularly in rural and suburban areas with limited visibility.',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9,12 11,14 15,10"/></svg>,
  },
  {
    title: 'Actionable Transportation Analytics',
    text: 'Rich analytics for transportation planners — enabling data-driven decisions on route design, stop placement, and enforcement resource allocation.',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/><polyline points="6,9 9,12 12,9 15,12 18,9"/></svg>,
  },
];

const SBSAOutcomes = () => {
  return (
    <section className="sbsa-outcomes" id="outcomes">
      <div className="sbsa-outcomes__inner">
        <div className="sbsa-outcomes__header">
          <div>
            <p className="sbsa-outcomes__eyebrow">Proven Results</p>
            <h2 className="sbsa-outcomes__title">Proven Safety Outcomes of Our School Bus Stop-Arm Cameras</h2>
          </div>
          <p className="sbsa-outcomes__intro">
            Field deployments of our school bus stop-arm enforcement cameras demonstrate consistent
            improvements in student safety, driver behavior, and route compliance — backed by
            comprehensive data and analytics.
          </p>
        </div>

        <div className="sbsa-outcomes__grid">
          {outcomes.map((o) => (
            <div className="sbsa-outcome-card" key={o.title}>
              <div className="sbsa-outcome-card__icon-box">{o.icon}</div>
              <div>
                <div className="sbsa-outcome-card__title">{o.title}</div>
                <p className="sbsa-outcome-card__text">{o.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SBSAOutcomes;