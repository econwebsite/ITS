import './Styles.css';

const TrafficSVG = () => (
  <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Road perspective lines */}
    <path d="M100 180 L30 60" stroke="rgba(255,176,0,0.15)" strokeWidth="1" />
    <path d="M100 180 L170 60" stroke="rgba(255,176,0,0.15)" strokeWidth="1" />
    <path d="M100 180 L100 50" stroke="rgba(255,176,0,0.2)" strokeWidth="1" strokeDasharray="6 4" />
    {/* Camera housing */}
    <rect x="78" y="20" width="44" height="30" rx="5" stroke="#ffb000" strokeWidth="2" fill="rgba(255,176,0,0.05)" />
    <circle cx="100" cy="35" r="9" stroke="#ffb000" strokeWidth="2" />
    <circle cx="100" cy="35" r="4" fill="#ffb000" opacity="0.5" />
    {/* Mount arm */}
    <line x1="100" y1="50" x2="100" y2="72" stroke="#ffb000" strokeWidth="2.5" />
    <line x1="80" y1="72" x2="120" y2="72" stroke="#ffb000" strokeWidth="2" />
    {/* Detection cone */}
    <path d="M85 50 L55 130 L145 130 L115 50 Z" fill="rgba(255,176,0,0.04)" stroke="rgba(255,176,0,0.18)" strokeWidth="1" strokeDasharray="4 3" />
    {/* Vehicle 1 */}
    <rect x="64" y="108" width="30" height="16" rx="3" fill="rgba(255,176,0,0.12)" stroke="#ffb000" strokeWidth="1.5" />
    <rect x="68" y="112" width="8" height="6" rx="1" fill="#ffb000" opacity="0.3" />
    {/* Vehicle 2 */}
    <rect x="105" y="112" width="26" height="14" rx="3" fill="rgba(255,176,0,0.08)" stroke="rgba(255,176,0,0.5)" strokeWidth="1" />
    {/* Speed alert */}
    <circle cx="152" cy="80" r="16" fill="rgba(255,80,60,0.1)" stroke="#ff503c" strokeWidth="1.5" />
    <text x="152" y="85" textAnchor="middle" fill="#ff503c" fontSize="10" fontWeight="bold">SPD</text>
    {/* Signal lines */}
    <path d="M100 35 L152 78" stroke="rgba(255,80,60,0.4)" strokeWidth="1" strokeDasharray="3 2" />
    {/* LPR bracket */}
    <rect x="57" y="105" width="36" height="22" rx="2" stroke="rgba(255,176,0,0.4)" strokeWidth="1" strokeDasharray="2 2" />
    {/* Corner marks */}
    <path d="M57 109 L57 105 L61 105" stroke="#ffb000" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M89 105 L93 105 L93 109" stroke="#ffb000" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M57 123 L57 127 L61 127" stroke="#ffb000" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M89 127 L93 127 L93 123" stroke="#ffb000" strokeWidth="1.5" strokeLinecap="round" />
    {/* LPR label */}
    <text x="75" y="100" textAnchor="middle" fill="#ffb000" fontSize="7" letterSpacing="1" opacity="0.8">LPR</text>
  </svg>
);

const ITSBanner = () => {
  return (
    <section className="its-banner">
      <div className="its-banner__inner">
        <div className="its-banner__left">
          <h1 className="its-banner__title">
            Vision‑Based<br />
            <em>Traffic Enforcement</em><br />
            Cameras
          </h1>
          <p className="its-banner__desc">
            Edge AI traffic enforcement cameras delivering real‑time violation detection
            for speed, red‑light, and school bus stop‑arm safety programs.
          </p>
          <a href="#contact" className="its-banner__cta">
            Connect With Us
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        <div className="its-banner__right">
          <div className="its-banner__visual">
            <TrafficSVG />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITSBanner;