import './RLVDOverview.css';

const outcomes = [
  {
    num: '01',
    label: 'Enhance intersection safety',
    sub: 'Automated 24/7 monitoring with legally-grade documentation at every intersection',
  },
  {
    num: '02',
    label: 'Improve compliance',
    sub: 'Visible enforcement programs that drive measurable driver behaviour change',
  },
  {
    num: '03',
    label: 'Reduce angle collisions across urban and suburban road networks ',
    sub: 'Measurable declines across urban and suburban road networks post-deployment',
  },
];

const cameras = [
  {
    badge: 'Camera Type 01',
    title: 'High-Resolution Overview Cameras',
    text: 'Captures the full violation scenario — vehicle position, intersection geometry, stop line, and signal status — delivering the complete picture required for legally defensible context.',
  },
  {
    badge: 'Camera Type 02',
    title: 'Dedicated ANPR Cameras',
    text: 'High-contrast license plate imaging regardless of lighting conditions — day, night, glare, or adverse weather. Engineered for legal-grade plate capture at all traffic speeds.',
  },
];

const alsoItems = [
  {
    title: 'AI and OCR vision engines ',
    text: 'AI and OCR vision engines for automated plate extraction, classification, and event verification',
  },
  {
    title: 'Advanced on camera ISP tuning ',
    text: 'Advanced on camera ISP tuning to optimize exposure, contrast, and detail under varied lighting and weather',
  },
];

const RLVDOverview = () => {
  return (
    <section className="rlvd-overview" id="overview">

      {/* ── Section 1: Title + Outcomes + Evidentiary Card ── */}
      <div className="rlvd-s1">
        <div className="rlvd-title-block">
          <h2>
            Vision&#8209;Based <em>Red Light Violation</em> Detection (RLVD) Cameras
          </h2>
        </div>

        <div className="rlvd-s1-grid">

          {/* Left: description + outcomes */}
          <div className="rlvd-s1-left">
            <p className="rlvd-s1-desc">
             Red Light Violation Detection (RLVD) cameras are automated, AI powered imaging solutions that identify, capture, and document vehicles that enter intersections after the traffic signal has turned red. They bring together precise imaging, intelligent triggering, and intelligent analytics, helping agencies to:
            </p>
            <div className="rlvd-outcomes">
              {outcomes.map((o) => (
                <div className="rlvd-outcome-row" key={o.num}>
                  <span className="rlvd-outcome-num">{o.num}</span>
                  <div className="rlvd-outcome-body">
                    <div className="rlvd-outcome-label">{o.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Section 2: Camera Hardware + Also Provides ── */}
      <div className="rlvd-s2">
        <div className="rlvd-s2-label"><h2>e-con Systems’ Red Light Violation Detection Cameras </h2></div>
              <p>Our high resolution overview cameras capture the full violation scenario, including vehicle position, intersection geometry, stop line, and signal status. Our dedicated ANPR (Automatic Number Plate Recognition) cameras provide clear, high contrast license plate imaging regardless of lighting conditions.</p>
        <div className="rlvd-also-wrap">
          <div className="rlvd-also-header">
            <span>We also provide:</span>
          </div>
          <div className="rlvd-also-grid">
            {alsoItems.map((a) => (
              <div className="rlvd-also-item" key={a.title}>
                <h4>{a.title}</h4>
                <p>{a.text}</p>
              </div>
            ))}
          </div>
        </div>
            <p style={{marginTop: '20px'}}>e-con Systems’ RLVD cameras meet evidentiary standards for violation documentation and legal review. They deliver reliable images and detailed metadata that support enforcement workflows and public compliance programs.</p>
      </div>

    </section>
  );
};

export default RLVDOverview;