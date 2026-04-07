import './Styles.css';

const aiTiles = [
  {
    title: 'Instant Violation Verification',
    text: 'Real-time event classification on-device',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/></svg>,
  },
  {
    title: 'Automated ANPR/OCR',
    text: 'On-device plate recognition and extraction',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="10" rx="2"/><line x1="7" y1="12" x2="17" y2="12"/></svg>,
  },
  {
    title: 'Multi-Frame Packaging',
    text: 'Evidentiary-complete event bundles',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><rect x="6" y="7" width="4" height="6" rx="1"/><rect x="12" y="7" width="4" height="6" rx="1"/></svg>,
  },
  {
    title: 'Health & Audit Logs',
    text: 'Remote firmware updates and diagnostics',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>,
  },
];

const deployModels = [
  {
    num: '01',
    type: 'Bus Mounted',
    title: 'Bus Mounted Cameras',
    text: 'Cameras mounted directly on school buses provide continuous coverage along routes — capturing violations wherever the bus travels.',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13" rx="2"/><polygon points="16,8 20,8 23,11 23,16 16,16 16,8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>,
  },
  {
    num: '02',
    type: 'Fixed Zone',
    title: 'Fixed Stop Zone Cameras',
    text: 'Permanent installations near schools, bus stops, or high-incident zones offer static monitoring for increased visibility and deterrence.',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="2" x2="12" y2="12"/><path d="M5 12H2a10 10 0 0020 0h-3"/><circle cx="12" cy="12" r="3"/></svg>,
  },
  {
    num: '03',
    type: 'Hybrid',
    title: 'Hybrid Installations',
    text: 'Combined bus-mounted and fixed cameras deliver comprehensive route coverage — serving both dynamic and static enforcement needs simultaneously.',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><circle cx="5" cy="12" r="3"/><circle cx="19" cy="12" r="3"/><path d="M5 8V4M19 8V4M12 9V4"/><circle cx="12" cy="12" r="2"/></svg>,
  },
];

const SBSAEdgeAI = () => {
  return (
    <section className="sbsa-intelligence" id="edge-ai">
      <div className="sbsa-intelligence__inner">

        {/* Edge AI */}
        <div className="sbsa-edgeai__header">
          <p className="sbsa-edgeai__eyebrow">On-Device Intelligence</p>
          <h2 className="sbsa-edgeai__title">Intelligent Edge AI and On-Device Processing</h2>
        </div>

        <div className="sbsa-edgeai__grid">
          {aiTiles.map((t) => (
            <div className="sbsa-edgeai-tile" key={t.title}>
              <div className="sbsa-edgeai-tile__icon">{t.icon}</div>
              <div className="sbsa-edgeai-tile__title">{t.title}</div>
              <div className="sbsa-edgeai-tile__text">{t.text}</div>
            </div>
          ))}
        </div>

        <div className="sbsa-edgeai__note">
          Edge-centric architecture ensures reliable performance in connectivity-constrained areas —
          rural routes, temporary deployments, and mobile enforcement operations.
        </div>

        {/* Deployment Models */}
        <div className="sbsa-deploy__header">
          <div>
            <p className="sbsa-deploy__eyebrow">Flexible Deployment</p>
            <h2 className="sbsa-deploy__title">Flexible Deployment Models</h2>
          </div>
          <p className="sbsa-deploy__sub">
            Three deployment configurations to match every program structure —
            from district-wide fleet coverage to fixed-zone enforcement at high-incident stops.
          </p>
        </div>

        <div className="sbsa-deploy__models">
          {deployModels.map((m) => (
            <div className="sbsa-deploy-card" key={m.num}>
              <div className="sbsa-deploy-card__num">{m.num}</div>
              <div className="sbsa-deploy-card__icon">{m.icon}</div>
              <div className="sbsa-deploy-card__type">{m.type}</div>
              <div className="sbsa-deploy-card__title">{m.title}</div>
              <p className="sbsa-deploy-card__text">{m.text}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SBSAEdgeAI;