import './rlvdhowitworks.css';

const steps = [
  {
    num: '01',
    title: 'Traffic Signal Integration',
    text: 'The system receives real time signal phase data from the traffic controller, ensuring capture logic aligns with red signal duration.',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="2" width="6" height="20" rx="3"/><circle cx="12" cy="6" r="2" fill="#dc2626" stroke="none" opacity="0.9"/><circle cx="12" cy="12" r="2" opacity="0.3"/><circle cx="12" cy="18" r="2" opacity="0.2"/></svg>,
  },
  {
    num: '02',
    title: 'Intelligent Triggering',
    text: 'When a vehicle crosses the stop line after the light changes to red, the integrated detection logic (vision + sensor triggers) activates capture.',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/></svg>,
  },
  {
    num: '03',
    title: 'Multi-Frame Capture',
    text: 'A sequence of frames is recorded before, during, and after the violation, providing context and supporting legal defensibility.',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><rect x="6" y="7" width="4" height="6" rx="1"/><rect x="12" y="7" width="4" height="6" rx="1"/></svg>,
  },
  {
    num: '04',
    title: 'Edge AI Processing',
    text: 'AI processing performs license plate recognition, event validation, and classification directly on the device with minimal latency.',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="16" height="16" rx="2"/><rect x="8" y="8" width="8" height="8" rx="1"/><line x1="12" y1="4" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="20"/><line x1="4" y1="12" x2="2" y2="12"/><line x1="22" y1="12" x2="20" y2="12"/></svg>,
  },
  {
    num: '05',
    title: 'Metadata Packaging',
    text: 'Images, timestamps, signal state, lane data, and recognition results are securely packaged for back office integration and enforcement workflows.',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4"/><polyline points="17,8 12,3 7,8"/><line x1="12" y1="3" x2="12" y2="15"/></svg>,
  },
];

const triggerTags = [
  { text: 'Induction Loops', icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12a4 4 0 018 0"/><path d="M5 12a7 7 0 0114 0"/></svg> },
  { text: 'Radar Sensors', icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M5.64 5.64a9 9 0 1012.73 12.73"/><path d="M8.46 8.46a5 5 0 017.07 7.07"/><circle cx="12" cy="12" r="1"/></svg> },
  { text: 'Vision-Based Sensor Fusion', icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/></svg> },
  { text: 'Minimal False Positives', icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polyline points="20,6 9,17 4,12"/></svg> },
];

const RLVDHowItWorks = () => {
  return (
    <section className="rlvd-how" id="how-it-works">
      <div className="rlvd-how__inner">
        <div className="rlvd-how__header">
          {/* <p className="rlvd-how__eyebrow">System Process</p> */}
          <h2 className="rlvd-how__title">How <em>RLVD Works</em></h2>
        </div>

        <div className="rlvd-how__steps">
          {steps.map((s) => (
            <div className="rlvd-step" key={s.num}>
              <div className="rlvd-step__num">{s.num}</div>
              <div className="rlvd-step__icon">{s.icon}</div>
              <div className="rlvd-step__title">{s.title}</div>
              <p className="rlvd-step__text">{s.text}</p>
            </div>
          ))}
        </div>

        <div className="rlvd-how__triggers">
          <p>External triggers, including induction loops, radar, or vision based sensor fusion, ensure precise event capture and minimal false positives.</p>
        </div>
      </div>
    </section>
  );
};

export default RLVDHowItWorks;