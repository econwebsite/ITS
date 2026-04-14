import './Styles.css';

const outcomes = [
  {
    title: 'Reduction in red light violations and unsafe intersection behavior',
    text: 'Reduction in red light violations and unsafe intersection behavior',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="23,6 13.5,15.5 8.5,10.5 1,18"/><polyline points="17,6 23,6 23,12"/></svg>,
  },
  {
    title: 'Decline in Angle Collisions',
    text: 'Measurable declines in angle collisions and serious injury rates',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/><polyline points="15,9 9,9 9,15"/></svg>,
  },
  {
    title: 'Enhanced Driver Compliance',
    text: 'Enhanced intersection compliance and driver awareness',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9,12 11,14 15,10"/></svg>,
  },
  {
    title: 'Data-Driven Safety Programs',
    text: 'Rich analytics for data driven traffic safety programs',
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
          <h2 className="rlvd-outcomes__title">Proven Safety Outcomes of Our RLVD Cameras</h2>
        </div>

        <div className="rlvd-outcomes__grid">
          {outcomes.map((o) => (
            <div className="rlvd-out-card" key={o.title}>
              <div className="rlvd-out-card__icon-wrap">{o.icon}</div>
              <div>
                {/* s<div className="rlvd-out-card__title">{o.title}</div> */}
                <p className="rlvd-out-card__text">{o.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RLVDOutcomes;