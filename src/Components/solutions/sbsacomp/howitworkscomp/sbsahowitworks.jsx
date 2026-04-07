import './styles.css';

const steps = [
  {
    num: '01',
    title: 'Stop-Arm Event Detection',
    text: 'The system integrates with the bus wiring or sensor inputs to activate enforcement logic only when the stop-arm is extended and warning lights are deployed.',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
  },
  {
    num: '02',
    title: 'Intelligent Triggering',
    text: 'Multi-method triggers activate capture only when a vehicle illegally enters the defined stop-arm zone — eliminating false positives from normal traffic.',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/></svg>,
  },
  {
    num: '03',
    title: 'Multi-Frame Violation Capture',
    text: 'A sequence of high-resolution frames is captured before, during, and after the illegal pass — recording vehicle position, speed, trajectory, and stop-arm state.',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><rect x="6" y="7" width="4" height="6" rx="1"/><rect x="12" y="7" width="4" height="6" rx="1"/></svg>,
  },
  {
    num: '04',
    title: 'Edge AI Processing & Packaging',
    text: 'On-device AI performs ANPR recognition, event validation, and packages images with timestamps, GPS/location metadata, and trajectory data for enforcement workflows.',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/><line x1="12" y1="4" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="20"/><line x1="4" y1="12" x2="2" y2="12"/><line x1="22" y1="12" x2="20" y2="12"/></svg>,
  },
];

const triggers = [
  {
    text: 'Direct Bus Signal Input',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M1 6v16l7-4 8 4 7-4V2l-7 4-8-4-7 4z"/><line x1="8" y1="2" x2="8" y2="18"/><line x1="16" y1="6" x2="16" y2="22"/></svg>,
  },
  {
    text: 'Vision-Based Stop-Arm Detection',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/></svg>,
  },
  {
    text: 'Radar / Ultrasonic Verification',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5.64 5.64a9 9 0 1012.73 12.73"/><path d="M8.46 8.46a5 5 0 017.07 7.07"/><circle cx="12" cy="12" r="1"/></svg>,
  },
];

const SBSAHowItWorks = () => {
  return (
    <section className="sbsa-how" id="how-it-works">
      <div className="sbsa-how__inner">
        <div className="sbsa-how__header">
          <div>
            <p className="sbsa-how__eyebrow">System Process</p>
            <h2 className="sbsa-how__title">How School Bus Stop-Arm Enforcement Works</h2>
          </div>
          <p className="sbsa-how__intro">
            A stop-arm event is defined by deployment of the bus's stop-arm and activation of
            amber/red warning lights. The camera system activates enforcement logic only during
            this window — ensuring accurate capture of illegal pass-bys.
          </p>
        </div>

        <div className="sbsa-how__flow">
          {steps.map((s) => (
            <div className="sbsa-how-step" key={s.num}>
              <div className="sbsa-how-step__num">{s.num}</div>
              <div className="sbsa-how-step__content">
                <div className="sbsa-how-step__icon">{s.icon}</div>
                <div className="sbsa-how-step__title">{s.title}</div>
                <p className="sbsa-how-step__text">{s.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="sbsa-how__triggers">
          <span className="sbsa-how__triggers-label">Trigger Methods</span>
          <div className="sbsa-how__trigger-list">
            {triggers.map((t) => (
              <div className="sbsa-trigger-item" key={t.text}>
                {t.icon}
                {t.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SBSAHowItWorks;