import './Styles.css';

const models = [
  {
    num: '01', type: 'Deployment Model',
    title: 'Bus-Mounted Cameras',
    text: 'Cameras mounted directly on school buses provide continuous coverage along routes, capturing violations wherever the bus travels.',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" stroke="#0dc2ed" fill="none" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"/><polygon points="16,8 20,8 23,11 23,16 16,16 16,8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
  },
  {
    num: '02', type: 'Deployment Model',
    title: 'Fixed Stop Zone Cameras',
    text: 'Permanent installations near schools, bus stops, or high-incident zones offer static monitoring for increased safety and visibility.',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" stroke="#0dc2ed" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="12"/><path d="M5 12H2a10 10 0 0020 0h-3"/><circle cx="12" cy="12" r="3"/></svg>,
  },
  {
    num: '03', type: 'Deployment Model',
    title: 'Hybrid Installations',
    text: 'Combined bus-mounted and fixed cameras deliver comprehensive route coverage serving both dynamic and static enforcement needs.',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" stroke="#0dc2ed" fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><circle cx="5" cy="12" r="3"/><circle cx="19" cy="12" r="3"/><path d="M5 8V4M19 8V4M12 9V4"/><circle cx="12" cy="12" r="2"/></svg>,
  },
];

const SBSADeployment = () => (
  <section className="sbsa-deploy" id="deployment">
    <div className="sbsa-deploy__inner">
      <div className="sbsa-deploy__header">
        <div>
          <p className="sbsa-deploy__eyebrow">Flexible Deployment</p>
          <h2 className="sbsa-deploy__title">Flexible Deployment Models</h2>
        </div>
        <p className="sbsa-deploy__sub">
          Three scalable deployment options to match every school district's infrastructure,
          route coverage requirements, and enforcement strategy.
        </p>
      </div>
      <div className="sbsa-deploy__cards">
        {models.map((m) => (
          <div className="sbsa-deploy-card" key={m.num}>
            <div className="sbsa-deploy-card__stripe"></div>
            <div className="sbsa-deploy-card__body">
              <div className="sbsa-deploy-card__num">{m.num}</div>
              <div className="sbsa-deploy-card__icon">{m.icon}</div>
              <div className="sbsa-deploy-card__type">{m.type}</div>
              <div className="sbsa-deploy-card__title">{m.title}</div>
              <p className="sbsa-deploy-card__text">{m.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SBSADeployment;