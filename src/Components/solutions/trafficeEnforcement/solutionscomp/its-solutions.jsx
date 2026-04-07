import './styles.css';

const solCards = [
  {
    title: 'Edge AI Processing',
    text: 'Advanced on-device intelligence for real-time vehicle recognition and event classification — no cloud latency.',
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
  {
    title: 'Low Latency Response',
    text: 'Reduced network dependency enables on-device decisions critical for limited-connectivity deployments and instant response.',
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2" />
      </svg>
    ),
  },
  {
    title: 'Evidentiary Standards',
    text: 'High-quality images and metadata that meet legal standards for violation documentation and prosecution workflows.',
    icon: (
      <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" />
        <line x1="21" y1="21" x2="16.65" y2="16.65" />
        <line x1="11" y1="8" x2="11" y2="14" />
        <line x1="8" y1="11" x2="14" y2="11" />
      </svg>
    ),
  },
];

const ITSSolutions = () => {
  return (
    <section className="its-solutions" id="solutions">
      <div className="its-solutions__inner">
        <div className="its-solutions__header">
          <div>
            {/* <p className="its-solutions__eyebrow">Our Approach</p> */}
            <h2 className="its-solutions__title">
              e-con Systems' <em>Vision-Based</em><br />Enforcement Solutions
            </h2>
          </div>
          <div>
            <p className="its-solutions__desc">
              Our traffic enforcement vision solutions easily surpass traditional fixed cameras by incorporating advanced edge AI for real-time vehicle recognition and event classification. Such edge-centric intelligence reduces latency, lowers network dependency, and enables on-device decision-making, which is critical for deployment in locations with limited connectivity or where instantaneous response is essential.
            </p>
            <p className="its-solutions__desc">
              Our solutions also meet evidentiary standards for violation documentation and prosecution. They offer reliable, high-quality images and metadata despite challenging environments, such as low light, high speeds, and multi-lane traffic conditions.
            </p>
          
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITSSolutions;