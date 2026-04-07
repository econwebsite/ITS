import './Styles.css';

const models = [
  {
    num: '01',
    type: 'Deployment Model',
    title: 'Fixed Intersection Sensors',
    text: 'Permanent installations at critical intersections for continuous monitoring and high-volume compliance tracking.',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="12"/><path d="M5 12H2a10 10 0 0020 0h-3"/><circle cx="12" cy="12" r="3"/></svg>,
  },
  {
    num: '02',
    type: 'Deployment Model',
    title: 'Mobile Enforcement Units',
    text: 'Transportable systems mounted on vehicles, tripods, or temporary poles for targeted campaigns or event-based deployments.',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"/><polygon points="16,8 20,8 23,11 23,16 16,16 16,8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
  },
  {
    num: '03',
    type: 'Deployment Model',
    title: 'Corridor & Hybrid Systems',
    text: 'Integrated deployments across multiple intersections or arterial corridors to analyze patterns and optimize compliance strategies.',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><circle cx="5" cy="12" r="3"/><circle cx="19" cy="12" r="3"/><path d="M5 8V4M19 8V4M12 9V4"/><circle cx="12" cy="12" r="2"/></svg>,
  },
];

const ruggedTags = ['Ruggedized Enclosures', 'Battery Operation', 'Solar Support', 'Adverse Weather', 'Infrastructure-Constrained Sites', 'Low-Power Design'];

const RLVDDeployment = () => {
  return (
    <section className="rlvd-deploy" id="deployment">
      <div className="rlvd-deploy__inner">
        <div className="rlvd-deploy__header">
          <div>
            <p className="rlvd-deploy__eyebrow">Flexible Deployment</p>
            <h2 className="rlvd-deploy__title">Flexible Deployment Models</h2>
          </div>
          <p className="rlvd-deploy__sub">
            Our vision solutions come in ruggedized, low-power designs — with battery and solar
            support for deployments in infrastructure-constrained locations.
          </p>
        </div>

        <div className="rlvd-deploy__models">
          {models.map((m) => (
            <div className="rlvd-deploy-card" key={m.num}>
              <div className="rlvd-deploy-card__accent"></div>
              <div className="rlvd-deploy-card__body">
                <div className="rlvd-deploy-card__num">{m.num}</div>
                <div className="rlvd-deploy-card__icon">{m.icon}</div>
                <div className="rlvd-deploy-card__type">{m.type}</div>
                <div className="rlvd-deploy-card__title">{m.title}</div>
                <p className="rlvd-deploy-card__text">{m.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rlvd-deploy__rugged">
          <span className="rlvd-deploy__rugged-label">Hardware Built For</span>
          <div className="rlvd-deploy__rugged-tags">
            {ruggedTags.map((t) => (
              <span className="rlvd-rugged-tag" key={t}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RLVDDeployment;