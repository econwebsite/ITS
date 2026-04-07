import './Styles.css';



const SpeedCta = () => {
  return (
    <section className="spd-cta" id="contact">
      <div className="spd-cta__inner">
        <div className="spd-cta__left">
          {/* <p className="spd-cta__eyebrow">Take the Next Step</p> */}
          <h2 className="spd-cta__title">
            Explore how speed enforcement cameras can enhance compliance and protect your community
          </h2>
          {/* <p className="spd-cta__sub">
            Talk to our experts about deploying edge AI speed enforcement cameras tailored to your
            highway, school zone, or urban corridor safety programs.
          </p> */}
        </div>
        <div className="spd-cta__right">
          <a href="mailto:camerasolutions@e-consystems.com" className="spd-cta__btn">
            Connect With Us
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          {/* <p className="spd-cta__note">Fast response · Expert support · OEM ready</p> */}
        </div>
      </div>
    </section>
  );
};

export default SpeedCta;