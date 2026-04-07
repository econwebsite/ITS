import './Styles.css';

const RLVDCta = () => {
  return (
    <section className="rlvd-cta" id="contact">
      <div className="rlvd-cta__inner">
        <div className="rlvd-cta__icon">
          <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.63A2 2 0 012 .95h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16z"/>
          </svg>
        </div>
        <p className="rlvd-cta__eyebrow">Take the Next Step</p>
        <h2 className="rlvd-cta__title">
          Explore How Red Light Violation Detection Cameras Can Enhance Compliance and Support Your Intersection Safety Goals
        </h2>
        <p className="rlvd-cta__sub">
          Talk to our experts about deploying AI-powered RLVD cameras tailored to your intersection
          safety program — from urban corridors to suburban road networks.
        </p>
        <a href="mailto:camerasolutions@e-consystems.com" className="rlvd-cta__btn">
          Connect With Us
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>

        <div className="rlvd-cta__divider"></div>

        <div className="rlvd-cta__trust">
          <div className="rlvd-trust-item">
            <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            Evidentiary-Grade Imaging
          </div>
          <div className="rlvd-trust-item">
            <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/></svg>
            Edge AI On-Device
          </div>
          <div className="rlvd-trust-item">
            <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="10" rx="2"/><line x1="7" y1="12" x2="17" y2="12"/></svg>
            ANPR/LPR Ready
          </div>
          <div className="rlvd-trust-item">
            <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>
            OEM Support
          </div>
        </div>
      </div>
    </section>
  );
};

export default RLVDCta;