import './Styles.css';

const models = [
  {
    num: '01',
    type: 'Deployment Model',
    title: 'Fixed Cameras',
    text: 'Permanent roadside installations for continuous monitoring',
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="2" x2="12" y2="12"/>
        <path d="M5 12H2a10 10 0 0020 0h-3"/>
        <circle cx="12" cy="12" r="3"/>
      </svg>
    ),
  },
  {
    num: '02',
    type: 'Deployment Model',
    title: 'Mobile Cameras',
    text: 'Vehicle-mounted units for flexible enforcement coverage',
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="1" y="3" width="15" height="13" rx="2"/>
        <polygon points="16,8 20,8 23,11 23,16 16,16 16,8"/>
        <circle cx="5.5" cy="18.5" r="2.5"/>
        <circle cx="18.5" cy="18.5" r="2.5"/>
      </svg>
    ),
  },
  {
    num: '03',
    type: 'Deployment Model',
    title: 'Point-to-Point (Average Speed)',
    text: 'Across defined road segments',
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12"/>
        <circle cx="5" cy="12" r="3"/>
        <circle cx="19" cy="12" r="3"/>
        <path d="M5 8V4M19 8V4"/>
      </svg>
    ),
  },
];

const ruggedTags = [
  { text: 'Motorized Zoom Lens', icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg> },
  { text: 'Strobe Synchronization', icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/></svg> },
  { text: 'Battery & Solar Operation', icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></svg> },
  { text: 'Adverse Weather Ready', icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="8" y1="19" x2="8" y2="21"/><line x1="8" y1="13" x2="8" y2="15"/><line x1="16" y1="19" x2="16" y2="21"/><line x1="16" y1="13" x2="16" y2="15"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="12" y1="15" x2="12" y2="17"/><path d="M20 16.58A5 5 0 0018 7h-1.26A8 8 0 104 15.25"/></svg> },
  { text: 'Multi-focal Lens Options', icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="20" height="15" rx="2"/><circle cx="12" cy="14" r="4"/><path d="M16 3l-4 4-4-4"/></svg> },
  { text: 'Low-Power Design', icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="7" width="16" height="11" rx="2"/><line x1="22" y1="11" x2="22" y2="13"/></svg> },
];

const SpeedDeployment = () => {
  return (
    <section className="spd-deployment" id="deployment">
      <div className="spd-deployment__inner">
        <div className="spd-deployment__header">
          <div>
            <p className="spd-deployment__eyebrow">Flexible Deployment</p>
            <h2 className="spd-deployment__title"> Models of Our Vision Solutions</h2>
          </div>
          <p className="spd-deployment__subtitle">
            Our cameras are built for diverse environments, featuring motorized or multi-focal lenses, strobe and trigger synchronization, and rugged, low-power designs capable of battery or solar operation. It ensures reliable operation in adverse weather, glare, and variable lighting conditions
          </p>
        </div>

        <div className="spd-deployment__models">
          {models.map((m) => (
            <div className="spd-model-card" key={m.num}>
              <div className="spd-model-card__num">{m.num}</div>
              <div className="spd-model-card__inner">
                <div className="spd-model-card__icon">{m.icon}</div>
                <div className="spd-model-card__type">{m.type}</div>
                <div className="spd-model-card__title">{m.title}</div>
                <p className="spd-model-card__text">{m.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeedDeployment;