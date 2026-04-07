import './styles.css';

const IntersectionSVG = () => (
  <svg viewBox="0 0 420 280" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Road surface */}
    <rect x="0" y="100" width="420" height="80" fill="rgba(255,255,255,0.02)" />
    <rect x="170" y="0" width="80" height="280" fill="rgba(255,255,255,0.02)" />

    {/* Lane markings - horizontal */}
    {[20,60,100,140,290,330,370].map((x,i) => (
      <line key={i} x1={x} y1="140" x2={x+28} y2="140" stroke="rgba(255,255,255,0.08)" strokeWidth="2" strokeDasharray="0" />
    ))}
    {/* Lane markings - vertical */}
    {[20,60,100,200,240].map((y,i) => (
      <line key={i} x1="210" y1={y} x2="210" y2={y+22} stroke="rgba(255,255,255,0.08)" strokeWidth="2" />
    ))}

    {/* Stop line - horizontal road */}
    <line x1="163" y1="100" x2="163" y2="180" stroke="rgba(220,38,38,0.7)" strokeWidth="3" />
    <text x="152" y="97" fill="rgba(220,38,38,0.5)" fontSize="8" letterSpacing="0.5">STOP</text>

    {/* Traffic signal pole */}
    <line x1="165" y1="98" x2="165" y2="40" stroke="rgba(255,255,255,0.2)" strokeWidth="2" />
    <rect x="155" y="18" width="22" height="56" rx="4" fill="#1e1e28" stroke="rgba(220,38,38,0.35)" strokeWidth="1.5" />
    {/* Signals */}
    <circle cx="166" cy="32" r="6" fill="#dc2626" opacity="0.95" />
    <circle cx="166" cy="46" r="6" fill="rgba(255,176,0,0.2)" />
    <circle cx="166" cy="60" r="6" fill="rgba(0,200,100,0.15)" />
    {/* Red glow */}
    <circle cx="166" cy="32" r="10" fill="rgba(220,38,38,0.15)" />

    {/* Violation vehicle - running red */}
    <rect x="60" y="114" width="72" height="32" rx="4" fill="rgba(220,38,38,0.12)" stroke="#dc2626" strokeWidth="2" />
    <rect x="68" y="120" width="18" height="14" rx="2" fill="rgba(220,38,38,0.2)" stroke="rgba(220,38,38,0.5)" strokeWidth="1" />
    <rect x="90" y="120" width="18" height="14" rx="2" fill="rgba(220,38,38,0.15)" stroke="rgba(220,38,38,0.4)" strokeWidth="1" />
    <circle cx="72" cy="148" r="5" stroke="#dc2626" strokeWidth="1.5" />
    <circle cx="122" cy="148" r="5" stroke="#dc2626" strokeWidth="1.5" />

    {/* LPR bracket on violation vehicle */}
    <rect x="60" y="114" width="72" height="32" rx="4" stroke="#dc2626" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.6" />
    <path d="M60 118 L60 114 L64 114" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M128 114 L132 114 L132 118" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M60 142 L60 146 L64 146" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M128 146 L132 146 L132 142" stroke="#dc2626" strokeWidth="1.5" strokeLinecap="round" />
    <text x="96" y="110" textAnchor="middle" fill="#dc2626" fontSize="8" fontWeight="bold" letterSpacing="1">VIOLATION</text>

    {/* ANPR camera */}
    <rect x="338" y="90" width="44" height="26" rx="4" fill="rgba(220,38,38,0.06)" stroke="rgba(220,38,38,0.4)" strokeWidth="1.5" />
    <circle cx="352" cy="103" r="7" stroke="rgba(220,38,38,0.6)" strokeWidth="1.5" />
    <circle cx="352" cy="103" r="3.5" fill="rgba(220,38,38,0.3)" />
    <rect x="362" y="97" width="14" height="12" rx="2" fill="rgba(220,38,38,0.08)" stroke="rgba(220,38,38,0.3)" strokeWidth="1" />
    <line x1="360" y1="116" x2="360" y2="132" stroke="rgba(220,38,38,0.25)" strokeWidth="2" />
    <text x="360" y="86" textAnchor="middle" fill="rgba(220,38,38,0.5)" fontSize="7" letterSpacing="1">ANPR</text>

    {/* Overview camera top */}
    <rect x="266" y="8" width="46" height="28" rx="4" fill="rgba(220,38,38,0.05)" stroke="rgba(220,38,38,0.3)" strokeWidth="1.5" />
    <circle cx="282" cy="22" r="8" stroke="rgba(220,38,38,0.5)" strokeWidth="1.5" />
    <circle cx="282" cy="22" r="3.5" fill="rgba(220,38,38,0.25)" />
    <rect x="294" y="16" width="12" height="12" rx="2" stroke="rgba(220,38,38,0.3)" strokeWidth="1" />
    <line x1="289" y1="36" x2="289" y2="52" stroke="rgba(220,38,38,0.2)" strokeWidth="1.5" />
    <text x="289" y="6" textAnchor="middle" fill="rgba(220,38,38,0.45)" fontSize="7" letterSpacing="1">OVERVIEW</text>

    {/* Detection zone from overview cam */}
    <path d="M285 36 L180 100 L300 100 L295 36 Z" fill="rgba(220,38,38,0.03)" stroke="rgba(220,38,38,0.1)" strokeWidth="1" strokeDasharray="4 3" />

    {/* Alert box */}
    <rect x="290" y="148" width="110" height="56" rx="4" fill="rgba(220,38,38,0.1)" stroke="#dc2626" strokeWidth="1.5" />
    <text x="345" y="166" textAnchor="middle" fill="#dc2626" fontSize="9" fontWeight="bold" letterSpacing="0.5">⚠ RED LIGHT</text>
    <text x="345" y="180" textAnchor="middle" fill="rgba(220,38,38,0.7)" fontSize="8">VIOLATION CAPTURED</text>
    <text x="345" y="194" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="7">14:32:08 · Lane 2</text>

    {/* Connection lines */}
    <line x1="132" y1="130" x2="290" y2="176" stroke="rgba(220,38,38,0.25)" strokeWidth="1" strokeDasharray="4 3" />
    <line x1="352" y1="116" x2="345" y2="148" stroke="rgba(220,38,38,0.3)" strokeWidth="1" strokeDasharray="3 2" />
    <line x1="289" y1="52" x2="330" y2="148" stroke="rgba(220,38,38,0.2)" strokeWidth="1" strokeDasharray="3 2" />

    {/* Compliant vehicle */}
    <rect x="186" y="210" width="46" height="22" rx="3" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
    <circle cx="194" cy="234" r="3.5" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
    <circle cx="224" cy="234" r="3.5" stroke="rgba(255,255,255,0.15)" strokeWidth="1" />
  </svg>
);

const RLVDBanner = () => {
  return (
    <section className="rlvd-banner">
      <div className="rlvd-banner__inner">
        <div className="rlvd-banner__left">
          <h1 className="rlvd-banner__title">
            Vision Based Red Light<br />Violation Detection Cameras
          </h1>
          <p className="rlvd-banner__desc">
            AI-based RLVD cameras for boosting intersection safety by reducing red light violations and angle collisions while improving compliance.
          </p>
          <a href="#contact" className="rlvd-banner__cta">
            Connect With Us
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="rlvd-banner__right">
          <div className="rlvd-banner__visual">
            <div className="rlvd-banner__visual-top">
              <span className="rlvd-banner__visual-title">Intersection Monitor</span>
              <span className="rlvd-banner__visual-status">
                <span className="rlvd-banner__visual-status-dot"></span>
                VIOLATION DETECTED
              </span>
            </div>
            <div className="rlvd-banner__svg-area">
              <IntersectionSVG />
            </div>
            <div className="rlvd-banner__stats">
              <div className="rlvd-stat">
                <div className="rlvd-stat__val">ANPR</div>
                <div className="rlvd-stat__label">LPR Ready</div>
              </div>
              <div className="rlvd-stat">
                <div className="rlvd-stat__val">AI</div>
                <div className="rlvd-stat__label">Edge Processing</div>
              </div>
              <div className="rlvd-stat">
                <div className="rlvd-stat__val">24/7</div>
                <div className="rlvd-stat__label">Monitoring</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RLVDBanner;