import './Styles.css';
import violation from '../../../../assets/solutionpage/trafficEnforcement/violation.jpg';
import enforcementAnalytics from '../../../../assets/solutionpage/trafficEnforcement/analytics.jpg'
import longTermSafety from '../../../../assets/solutionpage/trafficEnforcement/safety.jpg'


const pillars = [
  {
    num: '01',
    title: 'Violation Issuance',
    text: 'Automated documentation with timestamped evidence for legal-grade violation records and streamlined citation issuance workflows.',
    icon: violation,
  },
  {
    num: '02',
    title: 'Enforcement Analytics',
    text: 'Real-time dashboards and historical trend analysis to help authorities identify high-risk corridors and optimize deployment.',
    icon: enforcementAnalytics,
  },
  {
    num: '03',
    title: 'Long‑Term Safety',
    text: 'Data-driven programs that reduce repeat violations, lower accident rates, and build measurable long-term road safety outcomes.',
    icon: longTermSafety,
  },
];

const ITSOverview = () => {
  return (
    <section className="its-overview" id="overview">
      <div className="its-overview__inner">
        <div className="its-overview__header">
          {/* <p className="its-overview__eyebrow">What Is Traffic Enforcement</p> */}
          <h2 className="its-overview__title">Vision‑Based <em>Traffic Enforcement</em> Solutions</h2>
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
              <div className="its-overview__pillar-icon">
                <img src={p.icon} alt={p.title} />
              </div>
              <div className="its-overview__pillar-title">{p.title}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ITSOverview;