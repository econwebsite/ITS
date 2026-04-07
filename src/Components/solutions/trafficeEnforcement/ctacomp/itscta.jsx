import './styles.css';

const ITSCta = () => {
  return (
    <section className="its-cta" id="contact">
      <div className="its-cta__inner">
        <div className="its-cta__left">
          <p className="its-cta__label">Get In Touch</p>
          <h2 className="its-cta__title">
           Explore how vision-based enforcement can strengthen your traffic safety programs
          </h2>
          {/* <p className="its-cta__sub">
            Talk to our team about integrating edge AI cameras into your traffic enforcement
            infrastructure — from speed corridors to school zone protection.
          </p> */}
        </div>
        <div className="its-cta__right">
          <a href="mailto:camerasolutions@e-consystems.com" className="its-cta__btn-primary">
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

export default ITSCta;