import './Styles.css';

const RLVDCta = () => {
  return (
    <section className="rlvd-cta" id="contact">
      <div className="rlvd-cta__inner">
        <h2 className="rlvd-cta__title">
          Explore how Red Light Violation Detection cameras can enhance compliance and support your intersection safety goals
        </h2>
        
        <a href="mailto:camerasolutions@e-consystems.com" className="rlvd-cta__btn">
          Connect With Us
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default RLVDCta;