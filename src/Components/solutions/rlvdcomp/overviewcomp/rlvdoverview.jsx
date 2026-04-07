import './styles.css';

const outcomes = [
  {
    text: 'Enhance intersection safety',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9,12 11,14 15,10"/></svg>,
  },
  {
    text: 'Improve compliance',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>,
  },
  {
    text: 'Reduce angle collisions across urban and suburban road networks ',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="4.93" y1="4.93" x2="19.07" y2="19.07"/></svg>,
  },
];

const cameras = [
  {
    badge: 'Camera Type 01',
    title: 'High-Resolution Overview Cameras',
    text: 'Capture the full violation scenario — vehicle position, intersection geometry, stop line, and signal status — for legally defensible context.',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><circle cx="12" cy="10" r="3"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
  },
  {
    badge: 'Camera Type 02',
    title: 'Dedicated ANPR Cameras',
    text: 'High-contrast license plate imaging regardless of lighting conditions — day, night, glare, or adverse weather. Built for legal-grade plate capture.',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="10" rx="2"/><line x1="7" y1="12" x2="17" y2="12"/><path d="M7 4l-2 3M17 4l2 3"/></svg>,
  },
];

const alsoItems = [
  {
    title: 'AI and OCR Vision Engines',
    text: 'for automated plate extraction, classification, and event verification',
  },
  {
    title: 'Advanced On-Camera ISP Tuning',
    text: 'to optimize exposure, contrast, and detail under varied lighting and weather',
  },
];

const RLVDOverview = () => {
  return (
    <section className="rlvd-overview" id="overview">
      <div className="rlvd-overview__inner">
        <div className="rlvd-overview__header">
          <div>
            <h2 className="rlvd-overview__title">
             Vision Based Red Light Violation Detection (RLVD) Cameras
            </h2>
          </div>
          
        </div>
        <div className="rlvd-overview__desc">
            <p className="rlvd-overview__desc">
             Red Light Violation Detection (RLVD) cameras are automated, AI powered imaging solutions that identify, capture, and document vehicles that enter intersections after the traffic signal has turned red. They bring together precise imaging, intelligent triggering, and intelligent analytics, helping agencies to:
            </p>
            <div className="rlvd-overview__outcomes">
              {outcomes.map((o) => (
                <div className="rlvd-outcome" key={o.text}>
                  <div className="rlvd-outcome__icon">{o.icon}</div>
                  <span className="rlvd-outcome__text">{o.text}</span>
                </div>
              ))}
            </div>
          </div>
        <div className="rlvd-overview__cameras">
          {cameras.map((c) => (
            <div className="rlvd-cam-card" key={c.title}>
              <div className="rlvd-cam-card__badge">{c.badge}</div>
              <div className="rlvd-cam-card__icon">{c.icon}</div>
              <div className="rlvd-cam-card__title">{c.title}</div>
              <p className="rlvd-cam-card__text">{c.text}</p>
            </div>
          ))}
        </div>

        <div className="rlvd-overview__also">
          {alsoItems.map((a) => (
            <div className="rlvd-also-item" key={a.title}>
              <div className="rlvd-also-item__dot"></div>
              <p className="rlvd-also-item__text">
                <strong>{a.title}</strong> — {a.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RLVDOverview;