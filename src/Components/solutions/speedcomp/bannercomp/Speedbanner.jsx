import './Styles.css';

const SpeedCamSVG = () => (
  <svg viewBox="0 0 320 230" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Road */}
    <rect x="0" y="170" width="320" height="60" fill="rgba(255,255,255,0.03)" />
    <line x1="160" y1="170" x2="160" y2="230" stroke="rgba(255,255,255,0.08)" strokeWidth="1" strokeDasharray="12 8" />
    <line x1="0" y1="170" x2="320" y2="170" stroke="rgba(0,210,170,0.12)" strokeWidth="1" />

    {/* Speed camera pole */}
    <line x1="60" y1="30" x2="60" y2="170" stroke="rgba(0,210,170,0.3)" strokeWidth="3" strokeLinecap="round" />

    {/* Camera arm */}
    <path d="M60 50 Q60 36 90 36" stroke="rgba(0,210,170,0.35)" strokeWidth="2" fill="none" />

    {/* Camera body */}
    <rect x="88" y="24" width="52" height="28" rx="4" fill="rgba(0,210,170,0.06)" stroke="#00d2aa" strokeWidth="1.5" />
    <circle cx="104" cy="38" r="8" stroke="#00d2aa" strokeWidth="1.5" />
    <circle cx="104" cy="38" r="4" stroke="#00d2aa" strokeWidth="1" opacity="0.6" />
    <circle cx="104" cy="38" r="1.5" fill="#00d2aa" opacity="0.7" />
    <rect x="118" y="30" width="16" height="16" rx="2" fill="rgba(0,210,170,0.08)" stroke="rgba(0,210,170,0.4)" strokeWidth="1" />
    <line x1="122" y1="38" x2="130" y2="38" stroke="#00d2aa" strokeWidth="1" strokeDasharray="2 1.5" opacity="0.5" />

    {/* Detection cone */}
    <path d="M114 52 L68 160 L200 160 L156 52 Z" fill="rgba(0,210,170,0.03)" stroke="rgba(0,210,170,0.12)" strokeWidth="1" strokeDasharray="5 4" />

    {/* Vehicle 1 - being tracked */}
    <rect x="80" y="148" width="54" height="22" rx="3" fill="rgba(0,210,170,0.1)" stroke="#00d2aa" strokeWidth="1.5" />
    <rect x="86" y="152" width="14" height="10" rx="1" fill="rgba(0,210,170,0.2)" stroke="#00d2aa" strokeWidth="1" />
    <rect x="104" y="152" width="14" height="10" rx="1" fill="rgba(0,210,170,0.15)" stroke="#00d2aa" strokeWidth="1" />
    <circle cx="88" cy="172" r="4" stroke="#00d2aa" strokeWidth="1.5" />
    <circle cx="126" cy="172" r="4" stroke="#00d2aa" strokeWidth="1.5" />

    {/* LPR bracket on vehicle */}
    <rect x="80" y="148" width="54" height="22" rx="3" stroke="#00d2aa" strokeWidth="1" strokeDasharray="2 2" opacity="0.4" />
    <path d="M80 152 L80 148 L84 148" stroke="#00d2aa" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M130 148 L134 148 L134 152" stroke="#00d2aa" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M80 166 L80 170 L84 170" stroke="#00d2aa" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M130 170 L134 170 L134 166" stroke="#00d2aa" strokeWidth="1.5" strokeLinecap="round" />

    {/* Vehicle 2 */}
    <rect x="160" y="152" width="44" height="18" rx="3" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
    <circle cx="168" cy="172" r="4" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
    <circle cx="196" cy="172" r="4" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />

    {/* Speed readout */}
    <rect x="218" y="60" width="84" height="48" rx="4" fill="rgba(255,50,50,0.1)" stroke="#ff4444" strokeWidth="1.5" />
    <text x="260" y="82" textAnchor="middle" fill="#ff4444" fontSize="22" fontWeight="bold" fontFamily="monospace">87</text>
    <text x="260" y="98" textAnchor="middle" fill="rgba(255,68,68,0.6)" fontSize="9" letterSpacing="2">KM/H</text>

    {/* Alert line */}
    <line x1="134" y1="38" x2="218" y2="84" stroke="rgba(255,68,68,0.3)" strokeWidth="1" strokeDasharray="4 3" />

    {/* AI processing node */}
    <circle cx="188" cy="38" r="16" fill="rgba(0,210,170,0.06)" stroke="rgba(0,210,170,0.3)" strokeWidth="1" strokeDasharray="3 2" />
    <text x="188" y="35" textAnchor="middle" fill="#00d2aa" fontSize="7" fontWeight="bold" letterSpacing="0.5">AI</text>
    <text x="188" y="46" textAnchor="middle" fill="rgba(0,210,170,0.6)" fontSize="6">EDGE</text>
    <line x1="140" y1="38" x2="172" y2="38" stroke="rgba(0,210,170,0.3)" strokeWidth="1" strokeDasharray="2 2" />
    <line x1="204" y1="38" x2="218" y2="60" stroke="rgba(0,210,170,0.3)" strokeWidth="1" strokeDasharray="2 2" />

    {/* IR illuminator dots */}
    <circle cx="136" cy="28" r="2" fill="#00d2aa" opacity="0.5" />
    <circle cx="136" cy="38" r="2" fill="#00d2aa" opacity="0.5" />
    <circle cx="136" cy="48" r="2" fill="#00d2aa" opacity="0.5" />

    {/* Radar icon */}
    <path d="M56 120 Q60 108 70 104 Q80 100 84 108" stroke="rgba(0,210,170,0.4)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
    <path d="M56 120 Q62 104 76 98 Q90 92 96 108" stroke="rgba(0,210,170,0.2)" strokeWidth="1" fill="none" strokeLinecap="round" />
    <circle cx="56" cy="120" r="3" fill="#00d2aa" opacity="0.5" />
  </svg>
);

const metrics = [
  { val: '4K', label: 'Resolution' },
  { val: 'IR', label: 'Night Vision' },
  { val: 'ANPR', label: 'LPR Ready' },
];

const SpeedBanner = () => {
  return (
    <section className="spd-banner">
      <div className="spd-banner__inner">
        <div className="spd-banner__left">
         
          <h1 className="spd-banner__title">Speed Enforcement</h1>
          <span className="spd-banner__title-accent">Cameras</span>
          <p className="spd-banner__desc">
            Edge AI speed enforcement cameras for ensuring that highways, school zones, and intersections can reduce violations, improve safety, and more.
          </p>
          <div className="spd-banner__actions">
            <a href="#contact" className="spd-banner__btn">
              Connect With Us
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#solutions" className="spd-banner__link">Explore Solutions ↓</a>
          </div>
        </div>

        <div className="spd-banner__right">
          <div className="spd-banner__visual-wrap">
            <div className="spd-banner__visual-header">
              <div className="spd-banner__visual-dot"></div>
              <div className="spd-banner__visual-dot"></div>
              <div className="spd-banner__visual-dot"></div>
              <span className="spd-banner__visual-label">Live Detection Feed</span>
            </div>
            <div className="spd-banner__svg-box">
              <SpeedCamSVG />
            </div>
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default SpeedBanner;