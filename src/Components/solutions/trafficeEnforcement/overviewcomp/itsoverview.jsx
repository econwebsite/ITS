import './styles.css';

const pillars = [
  {
    num: '01',
    title: 'Violation Issuance',
    text: 'Automated documentation with timestamped evidence for legal-grade violation records and streamlined citation issuance workflows.',
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14,2 14,8 20,8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10,9 9,9 8,9" />
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Enforcement Analytics',
    text: 'Real-time dashboards and historical trend analysis to help authorities identify high-risk corridors and optimize deployment.',
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
        <line x1="2" y1="20" x2="22" y2="20" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'Long‑Term Safety',
    text: 'Data-driven programs that reduce repeat violations, lower accident rates, and build measurable long-term road safety outcomes.',
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <polyline points="9,12 11,14 15,10" />
      </svg>
    ),
  },
];

const ITSOverview = () => {
  return (
    <section className="its-overview" id="overview">
      <div className="its-overview__inner">
        <div className="its-overview__header">
          {/* <p className="its-overview__eyebrow">What Is Traffic Enforcement</p> */}
          <h2 className="its-overview__title">Vision‑Based Traffic Enforcement Solutions</h2>
          <p className="its-overview__lead">
            Traffic enforcement cameras are automated imaging devices deployed on public roads to detect, identify,
            and document traffic law violations — including speeding, red‑light running, and illegal school bus
            stop‑arm violations. These systems combine high‑resolution video capture with license plate recognition
            (ANPR/LPR) and intelligent processing to support enforcement workflows and long-term safety outcomes.
          </p>
        </div>

        <div className="its-overview__grid">
          {pillars.map((p) => (
            <div className="its-overview__pillar" key={p.num}>
              <div className="its-overview__pillar-num">{p.num}</div>
              <div className="its-overview__pillar-icon">{p.icon}</div>
              <div className="its-overview__pillar-title">{p.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITSOverview;