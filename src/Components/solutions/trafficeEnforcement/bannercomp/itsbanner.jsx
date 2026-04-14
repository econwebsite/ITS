import './Bannerstyles.css';
import bannerBg from '../../../../assets/solutionpage/traffic-enforcement-banner.jpg';

const ITSBanner = () => {
  return (
    <section
      className="its-banner"
      style={{
        backgroundImage:
          `linear-gradient(180deg, rgba(14,17,23,0.78), rgba(14,17,23,0.32)), url(${bannerBg})`,
      }}
    >
      <div className="its-banner__inner">
        <div className="its-banner__left">
          <h1 className="its-banner__title">
            Vision‑Based 
             <em> Traffic Enforcement </em>
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
      </div>
    </section>
  );
};

export default ITSBanner;