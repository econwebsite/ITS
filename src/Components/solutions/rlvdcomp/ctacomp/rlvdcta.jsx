import './rlvdcta.css';

const RLVDCta = () => {
  return (
    <section className="rlvd-cta" id="contact">

      <div className="rlvd-cta__bg"></div>

      <div className="rlvd-cta__overlay"></div>

      <div className="rlvd-cta__inner">

        <div className="rlvd-cta__content">

          <h2 className="rlvd-cta__title">
            Explore how Red Light Violation Detection cameras can enhance compliance and support your intersection safety goals
          </h2>

          <a
            href="mailto:camerasolutions@e-consystems.com"
            className="rlvd-cta__btn"
          >
            Connect With Us

            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>

          </a>

        </div>

      </div>

    </section>
  );
};

export default RLVDCta;