import './styles.css';

const StopArmSVG = () => (
  <svg viewBox="0 0 420 260" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Road */}
    <rect x="0" y="185" width="420" height="75" fill="rgba(255,255,255,0.02)" />
    <line x1="0" y1="185" x2="420" y2="185" stroke="rgba(13,194,237,0.12)" strokeWidth="1" />
    {/* Lane dashes */}
    {[10,55,100,290,335,380].map((x,i) => (
      <line key={i} x1={x} y1="222" x2={x+32} y2="222" stroke="rgba(255,255,255,0.07)" strokeWidth="2" />
    ))}

    {/* School bus body */}
    <rect x="60" y="148" width="148" height="52" rx="5" fill="rgba(13,194,237,0.08)" stroke="rgba(13,194,237,0.5)" strokeWidth="2" />
    {/* Bus windows */}
    {[72,96,120,144,168].map((x,i) => (
      <rect key={i} x={x} y="156" width="18" height="14" rx="2" fill="rgba(13,194,237,0.15)" stroke="rgba(13,194,237,0.4)" strokeWidth="1" />
    ))}
    {/* Bus front */}
    <rect x="60" y="148" width="22" height="52" rx="5" fill="rgba(13,194,237,0.12)" stroke="rgba(13,194,237,0.5)" strokeWidth="2" />
    <rect x="64" y="156" width="14" height="12" rx="1" fill="rgba(13,194,237,0.3)" />
    {/* Wheels */}
    <circle cx="90" cy="202" r="10" stroke="rgba(13,194,237,0.5)" strokeWidth="2" />
    <circle cx="90" cy="202" r="4" fill="rgba(13,194,237,0.2)" />
    <circle cx="175" cy="202" r="10" stroke="rgba(13,194,237,0.5)" strokeWidth="2" />
    <circle cx="175" cy="202" r="4" fill="rgba(13,194,237,0.2)" />

    {/* SCHOOL BUS label */}
    <text x="128" y="144" textAnchor="middle" fill="rgba(13,194,237,0.55)" fontSize="8" fontWeight="bold" letterSpacing="2">SCHOOL BUS</text>

    {/* Stop arm extended */}
    <line x1="208" y1="165" x2="258" y2="165" stroke="#0dc2ed" strokeWidth="3" strokeLinecap="round" />
    <rect x="248" y="152" width="26" height="26" rx="4" fill="rgba(13,194,237,0.1)" stroke="#0dc2ed" strokeWidth="2" />
    <text x="261" y="169" textAnchor="middle" fill="#0dc2ed" fontSize="10" fontWeight="bold">STOP</text>

    {/* Warning lights on bus */}
    <circle cx="63" cy="152" r="5" fill="#f59e0b" opacity="0.9" />
    <circle cx="63" cy="152" r="8" fill="rgba(245,158,11,0.2)" />
    <circle cx="205" cy="152" r="5" fill="#ef4444" opacity="0.9" />
    <circle cx="205" cy="152" r="8" fill="rgba(239,68,68,0.2)" />

    {/* Violating vehicle */}
    <rect x="280" y="158" width="68" height="32" rx="4" fill="rgba(239,68,68,0.1)" stroke="#ef4444" strokeWidth="2" />
    <rect x="288" y="164" width="16" height="12" rx="2" fill="rgba(239,68,68,0.2)" />
    <rect x="308" y="164" width="16" height="12" rx="2" fill="rgba(239,68,68,0.15)" />
    <circle cx="294" cy="192" r="5" stroke="#ef4444" strokeWidth="1.5" />
    <circle cx="340" cy="192" r="5" stroke="#ef4444" strokeWidth="1.5" />

    {/* ANPR bracket on violating vehicle */}
    <rect x="280" y="158" width="68" height="32" rx="3" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.7" />
    <path d="M280 162 L280 158 L284 158" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M344 158 L348 158 L348 162" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M280 186 L280 190 L284 190" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
    <path d="M344 190 L348 190 L348 186" stroke="#ef4444" strokeWidth="1.5" strokeLinecap="round" />
    <text x="314" y="154" textAnchor="middle" fill="#ef4444" fontSize="8" fontWeight="bold">ILLEGAL PASS</text>

    {/* Camera on bus top */}
    <rect x="112" y="134" width="36" height="22" rx="4" fill="rgba(13,194,237,0.08)" stroke="#0dc2ed" strokeWidth="1.5" />
    <circle cx="124" cy="145" r="6" stroke="#0dc2ed" strokeWidth="1.5" />
    <circle cx="124" cy="145" r="3" fill="rgba(13,194,237,0.3)" />
    <rect x="134" y="139" width="10" height="12" rx="2" stroke="rgba(13,194,237,0.5)" strokeWidth="1" />
    <text x="130" y="131" textAnchor="middle" fill="rgba(13,194,237,0.5)" fontSize="7" letterSpacing="0.5">CAM</text>

    {/* Detection zone */}
    <path d="M142 156 L270 185 L350 185 L280 155 Z" fill="rgba(13,194,237,0.03)" stroke="rgba(13,194,237,0.1)" strokeWidth="1" strokeDasharray="4 3" />

    {/* Violation alert panel */}
    <rect x="56" y="60" width="120" height="68" rx="5" fill="rgba(239,68,68,0.1)" stroke="#ef4444" strokeWidth="1.5" />
    <text x="116" y="80" textAnchor="middle" fill="#ef4444" fontSize="9" fontWeight="bold">⚠ VIOLATION</text>
    <text x="116" y="94" textAnchor="middle" fill="rgba(239,68,68,0.7)" fontSize="8">STOP-ARM ACTIVE</text>
    <text x="116" y="106" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="7">08:12:44 · Route 7</text>
    <text x="116" y="118" textAnchor="middle" fill="rgba(255,255,255,0.35)" fontSize="7">GPS: 40.7128°N</text>

    {/* AI processing bubble */}
    <circle cx="310" cy="100" r="32" fill="rgba(13,194,237,0.05)" stroke="rgba(13,194,237,0.22)" strokeWidth="1" strokeDasharray="3 2" />
    <text x="310" y="96" textAnchor="middle" fill="#0dc2ed" fontSize="9" fontWeight="bold">AI EDGE</text>
    <text x="310" y="110" textAnchor="middle" fill="rgba(13,194,237,0.5)" fontSize="8">PROCESSING</text>

    {/* Connection lines */}
    <line x1="130" y1="134" x2="116" y2="128" stroke="rgba(239,68,68,0.3)" strokeWidth="1" strokeDasharray="3 2" />
    <line x1="142" y1="145" x2="278" y2="100" stroke="rgba(13,194,237,0.25)" strokeWidth="1" strokeDasharray="3 2" />
    <line x1="314" y1="174" x2="342" y2="132" stroke="rgba(13,194,237,0.2)" strokeWidth="1" strokeDasharray="2 2" />
  </svg>
);

const SBSABanner = () => {
  const pills = ['Student Safety', 'ANPR/LPR Ready', 'Edge AI', '24/7 Monitoring'];

  return (
    <section className="sbsa-banner">
      <div className="sbsa-banner__inner">
        <div className="sbsa-banner__left">
          <div className="sbsa-banner__tag">
            <div className="sbsa-banner__tag-shield">
              <svg viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            School Bus Stop Arm Enforcement
          </div>
          <h1 className="sbsa-banner__title">
            School Bus
            <em>Stop Arm Cameras</em>
          </h1>
          <p className="sbsa-banner__desc">
            Edge AI stop arm cameras for detecting illegal passing of school buses —
            improving student safety and enforcement compliance with evidentiary-grade imaging.
          </p>
          <div className="sbsa-banner__pills">
            {pills.map((p) => (
              <span className="sbsa-banner__pill" key={p}>
                <span className="sbsa-banner__pill-dot"></span>
                {p}
              </span>
            ))}
          </div>
          <a href="#contact" className="sbsa-banner__cta">
            Connect With Us
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>

        <div className="sbsa-banner__right">
          <div className="sbsa-banner__visual">
            <div className="sbsa-banner__visual-header">
              <span className="sbsa-banner__visual-title">Stop-Arm Enforcement Feed</span>
              <span className="sbsa-banner__visual-live">
                <span className="sbsa-banner__visual-live-dot"></span>
                LIVE MONITORING
              </span>
            </div>
            <div className="sbsa-banner__svg-wrap">
              <StopArmSVG />
            </div>
            <div className="sbsa-banner__stats">
              <div className="sbsa-bstat">
                <div className="sbsa-bstat__val">GPS</div>
                <div className="sbsa-bstat__label">Location Tagged</div>
              </div>
              <div className="sbsa-bstat">
                <div className="sbsa-bstat__val">ANPR</div>
                <div className="sbsa-bstat__label">Plate Capture</div>
              </div>
              <div className="sbsa-bstat">
                <div className="sbsa-bstat__val">24/7</div>
                <div className="sbsa-bstat__label">All Conditions</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SBSABanner;