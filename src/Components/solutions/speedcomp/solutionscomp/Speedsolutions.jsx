import './styles.css';

const techItems = [
  {
    title: 'At high speeds',
    sub: 'Up to 4K global shutter sensors',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><circle cx="12" cy="10" r="3"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
  },
  {
    title: 'In low-light conditions',
    sub: 'Active night-time plate capture',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></svg>,
  },
  {
    title: 'Across multiple lanes ',
    sub: 'On-device detection & classification',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/></svg>,
  },
];

const anprTags = [
  'At High Speeds',
  'In Low-Light Conditions',
  'Across Multiple Lanes',
];

const SpeedSolutions = () => {
  return (
    <section className="spd-solutions" id="solutions">
      <div className="spd-solutions__inner">
        <div className="spd-solutions__top">
          {/* <div className="spd-solutions__badge">
            <div className="spd-solutions__badge-val">LPR</div>
            <div className="spd-solutions__badge-label">ANPR Ready</div>
          </div> */}
          <div className="spd-solutions__heading">
            {/* <p className="spd-solutions__eyebrow">e-con Systems' Approach</p> */}
            <h2 className="spd-solutions__title">e-con Systems’ Speed Enforcement Camera Solutions</h2>
            <p className="spd-solutions__desc">
              e-con Systems’ vision solutions combine high-resolution imaging, global shutter sensors, IR illumination, edge AI processing, and on-camera ISP tuning. This ensures accurate license plate recognition (ANPR/LPR) even:
            </p>
            {/* <p className="spd-solutions__desc">
              We also provide integrated radar modules for precise speed detection and measurement,
              along with external triggers from induction loops, radar, or sensors to synchronize
              accurate image capture. Our solutions meet evidentiary standards for violation
              documentation and prosecution.
            </p> */}
          </div>
        </div>

        <div className="spd-solutions__tech">
          {techItems.map((t) => (
            <div className="spd-tech-item" key={t.title}>
              <div className="spd-tech-item__icon">{t.icon}</div>
              <div className="spd-tech-item__title">{t.title}</div>
            </div>
          ))}
        </div>

        <div className="spd-solutions__anpr">
          <div>
            {/* <div className="spd-solutions__anpr-title">Accurate ANPR/LPR in Any Condition</div> */}
            <p className="spd-solutions__anpr-text">
              Our vision solutions meet evidentiary standards for violation documentation and prosecution, delivering imaging and metadata for legal workflows. We also provide integrated radar modules for precise speed detection and measurement, along with external triggers from induction loops, radar, or sensors to synchronize accurate image capture.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeedSolutions;