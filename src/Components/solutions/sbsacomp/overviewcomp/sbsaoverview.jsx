import './Styles.css';

const outcomes = [
  {
    text: 'Improve student safety',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9,12 11,14 15,10"/></svg>,
  },
  {
    text: 'Reduce illegal overtaking incidents',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>,
  },
  {
    text: 'Provide clear, legally valid evidence for compliance and enforcement',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><polyline points="9,15 11,17 15,13"/></svg>,
  },
];

const platformTiles = [
  {
    title: 'Imaging Hardware',
    text: 'High-res overview & dedicated ANPR cameras',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><circle cx="12" cy="10" r="3"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
  },
  {
    title: 'Sync Triggering',
    text: 'Direct bus wiring and vision-based triggers',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/></svg>,
  },
  {
    title: 'Edge AI Analytics',
    text: 'On-device recognition and classification',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/></svg>,
  },
  {
    title: 'Continuous Monitoring',
    text: 'High-confidence capture without manual observation',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12,6 12,12 16,14"/></svg>,
  },
];

const SBSAOverview = () => {
  return (
    <section className="sbsa-overview" id="overview">
      <div className="sbsa-overview__inner">
        <div className="sbsa-overview__top">
          <div>
            {/* <p className="sbsa-overview__eyebrow">About the Solution</p> */}
            <h2 className="sbsa-overview__title">
              Vision Based School Bus Stop Arm Enforcement Solutions
            </h2>
          </div>
          <div>
            <p className="sbsa-overview__desc">
             School bus stop arm enforcement cameras detect and document vehicles that illegally pass a school bus while its stop-arm and warning lights are deployed. These enforcement vision solutions equip agencies and school transportation departments to:
            </p>
            <p className="sbsa-overview__desc">
              By combining imaging hardware, synchronized triggering, and edge AI analytics, our
              solutions provide continuous monitoring and high-confidence violation capture —
              without manual observation.
            </p>
            <div className="sbsa-overview__outcomes">
              {outcomes.map((o) => (
                <div className="sbsa-outcome-row" key={o.text}>
                  <div className="sbsa-outcome-row__icon">{o.icon}</div>
                  <span className="sbsa-outcome-row__text">{o.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="sbsa-overview__platform">
          {platformTiles.map((t) => (
            <div className="sbsa-platform-tile" key={t.title}>
              <div className="sbsa-platform-tile__icon">{t.icon}</div>
              <div className="sbsa-platform-tile__title">{t.title}</div>
              <div className="sbsa-platform-tile__text">{t.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SBSAOverview;