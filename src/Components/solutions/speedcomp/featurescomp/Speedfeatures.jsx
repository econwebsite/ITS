import './Styles.css';

const EdgeAISVG = () => (
  <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="48" y="48" width="64" height="64" rx="6" stroke="#2ae1e1" strokeWidth="1.5" fill="rgba(0,210,170,0.04)" strokeDasharray="4 3" />
    <rect x="60" y="60" width="40" height="40" rx="4" stroke="#2ae1e1" strokeWidth="1.5" fill="rgba(0,210,170,0.06)" />
    <text x="80" y="83" textAnchor="middle" fill="#2ae1e1" fontSize="14" fontWeight="bold" fontFamily="monospace">AI</text>
    <text x="80" y="96" textAnchor="middle" fill="rgb(0 231 255 / 66%)" fontSize="8" letterSpacing="2">EDGE</text>
    {[0,1,2,3].map(i => {
      const angles = [0, 90, 180, 270];
      const rad = (angles[i] * Math.PI) / 180;
      const x1 = 80 + Math.cos(rad) * 52;
      const y1 = 80 + Math.sin(rad) * 52;
      const x2 = 80 + Math.cos(rad) * 68;
      const y2 = 80 + Math.sin(rad) * 68;
      return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="#2ae1e1" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />;
    })}
    <circle cx="80" cy="12" r="8" fill="rgba(0,210,170,0.1)" stroke="#2ae1e1" strokeWidth="1.5" />
    <circle cx="148" cy="80" r="8" fill="rgba(0,210,170,0.1)" stroke="#2ae1e1" strokeWidth="1.5" />
    <circle cx="80" cy="148" r="8" fill="rgba(0,210,170,0.1)" stroke="#2ae1e1" strokeWidth="1.5" />
    <circle cx="12" cy="80" r="8" fill="rgba(0,210,170,0.1)" stroke="#2ae1e1" strokeWidth="1.5" />
    <circle cx="26" cy="26" r="4" fill="rgba(0,210,170,0.08)" stroke="rgb(0 231 255 / 66%)" strokeWidth="1" />
    <circle cx="134" cy="26" r="4" fill="rgba(0,210,170,0.08)" stroke="rgb(0 231 255 / 66%)" strokeWidth="1" />
    <circle cx="26" cy="134" r="4" fill="rgba(0,210,170,0.08)" stroke="rgb(0 231 255 / 66%)" strokeWidth="1" />
    <circle cx="134" cy="134" r="4" fill="rgba(0,210,170,0.08)" stroke="rgb(0 231 255 / 66%)" strokeWidth="1" />
  </svg>
);

const IntegrationSVG = () => (
  <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="80" cy="80" r="30" stroke="#2ae1e1" strokeWidth="1.5" fill="rgba(0,210,170,0.04)" />
    <text x="80" y="77" textAnchor="middle" fill="#2ae1e1" fontSize="9" fontWeight="bold" letterSpacing="1">ONVIF</text>
    <text x="80" y="89" textAnchor="middle" fill="rgb(0 231 255 / 66%)" fontSize="8">API</text>
    {[30, 90, 150, 210, 270, 330].map((angle, i) => {
      const rad = (angle * Math.PI) / 180;
      const cx = 80 + Math.cos(rad) * 60;
      const cy = 80 + Math.sin(rad) * 60;
      const lx1 = 80 + Math.cos(rad) * 32;
      const ly1 = 80 + Math.sin(rad) * 32;
      const lx2 = 80 + Math.cos(rad) * 48;
      const ly2 = 80 + Math.sin(rad) * 48;
      const labels = ['TMS','ITS','TOLLING','PRIVACY','HTTPS','LOG'];
      return (
        <g key={i}>
          <line x1={lx1} y1={ly1} x2={lx2} y2={ly2} stroke="rgba(0,210,170,0.25)" strokeWidth="1" strokeDasharray="3 2" />
          <circle cx={cx} cy={cy} r="14" fill="rgba(0,210,170,0.08)" stroke="rgba(0,210,170,0.3)" strokeWidth="1" />
          <text x={cx} y={cy + 4} textAnchor="middle" fill="rgb(0 231 255 / 66%)" fontSize="6.5" fontWeight="bold">{labels[i]}</text>
        </g>
      );
    })}
    <circle cx="80" cy="80" r="22" stroke="rgba(0,210,170,0.12)" strokeWidth="1" strokeDasharray="4 3" />
  </svg>
);

const SafetyOutcomeSVG = () => (
  <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Chart bars */}
    <line x1="28" y1="130" x2="132" y2="130" stroke="rgba(0,210,170,0.2)" strokeWidth="1.5" />
    <line x1="28" y1="130" x2="28" y2="30" stroke="rgba(0,210,170,0.2)" strokeWidth="1.5" />
    {/* Bars - violations going down */}
    <rect x="36" y="70" width="16" height="60" rx="2" fill="rgba(255,80,80,0.3)" stroke="rgba(255,80,80,0.5)" strokeWidth="1" />
    <rect x="58" y="80" width="16" height="50" rx="2" fill="rgba(255,80,80,0.2)" stroke="rgba(255,80,80,0.4)" strokeWidth="1" />
    <rect x="80" y="95" width="16" height="35" rx="2" fill="rgba(255,176,0,0.2)" stroke="rgba(255,176,0,0.4)" strokeWidth="1" />
    <rect x="102" y="108" width="16" height="22" rx="2" fill="rgba(0,210,170,0.2)" stroke="#2ae1e1" strokeWidth="1" />
    {/* Trend line */}
    <path d="M44 70 L66 80 L88 95 L110 108" stroke="#2ae1e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    {[{cx:44,cy:70},{cx:66,cy:80},{cx:88,cy:95},{cx:110,cy:108}].map((p,i)=>(
      <circle key={i} cx={p.cx} cy={p.cy} r="4" fill="#2ae1e1" opacity="0.7" />
    ))}
    {/* Down arrow */}
    <path d="M120 40 L120 58 M116 54 L120 58 L124 54" stroke="#2ae1e1" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    <text x="118" y="38" textAnchor="middle" fill="#2ae1e1" fontSize="9" fontWeight="bold">-42%</text>
    <text x="118" y="30" textAnchor="middle" fill="rgb(0 231 255 / 66%)" fontSize="10">violations</text>
    <text x="36" y="64" fill="rgba(255,255,255,0.2)" fontSize="7">Before</text>
    <text x="100" y="104" fill="rgb(0 231 255 / 66%)" fontSize="7">After</text>
  </svg>
);

const features = [
  {
    num: 'Feature 01',
    title: 'Edge AI intelligence',
    text: 'On-device processing reduces latency, minimizes network dependency, and delivers instant violation alerts. Integrated health monitoring, remote firmware updates, and audit-ready logs ensure long-term deployment readiness and regulatory compliance.',
    points: [
      'Integrated health monitoring',
      'Remote firmware updates',
      'Audit-ready logs ensure long-term deployment readiness and ',
      'Regulatory compliance'
    ],
    visual: <EdgeAISVG />,
    reverse: false,
  },
  {
    num: 'Feature 02',
    title: 'Integration, Privacy & Security',
    text: 'With ONVIF standards and open APIs, our vision solutions integrate seamlessly with traffic management systems, tolling solutions, and other ITS applications. Privacy-by-design features include configurable data retention, anonymization, and access control, along with secure HTTPS transmission. This ensures responsible data handling while maintaining enforcement effectiveness.',
    points: [
      'Privacy-by-design with configurable data retention',
      'Anonymization and access control',
      'Secure HTTPS data transmission',
      'Responsible data handling',
    ],
    visual: <IntegrationSVG />,
    reverse: true,
  },
  {
    num: 'Feature 03',
    title: 'Proven safety outcomes',
    text: 'Field deployments consistently show reduced speeding violations and improved compliance, supporting safer communities and measurable crash reduction. By combining intelligent imaging hardware with advanced analytics, our vision-based speed enforcement cameras empower agencies with real-time, actionable insights to strengthen road safety programs.',
    points: [
      'Real-time actionable insights',
      'Measurable compliance improvement',
      'Crash reduction evidence',
      'Agency performance dashboards',
    ],
    visual: <SafetyOutcomeSVG />,
    reverse: false,
  },
];

const SpeedFeatures = () => {
  return (
    <section className="spd-features" id="features">
      <div className="spd-features__inner">
        <div className="spd-features__header">
          {/* <p className="spd-features__eyebrow">Key Features</p> */}
          <h2 className="spd-features__title">Key Features of Our Speed Enforcement Vision Solutions</h2>
        </div>

        <div className="spd-features__list">
          {features.map((f) => (
            <div className={`spd-feat-row${f.reverse ? ' spd-feat-row--reverse' : ''}`} key={f.num}>
              <div className="spd-feat-row__content">
                <div className="spd-feat-row__num">{f.num}</div>
                <h3 className="spd-feat-row__title">{f.title}</h3>
                <p className="spd-feat-row__text">{f.text}</p>
                {/* <ul className="spd-feat-row__points">
                  {f.points.map((p) => <li key={p}>{p}</li>)}
                </ul> */}
              </div>
              <div className="spd-feat-row__visual">
                <div className="spd-feat-row__svg">{f.visual}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeedFeatures;