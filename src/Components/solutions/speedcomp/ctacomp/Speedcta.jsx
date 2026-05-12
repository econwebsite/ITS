import './Ctastyles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const SpeedCta = () => {

  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: true,
      easing: 'ease-out-cubic',
      offset: 80,
    });
  }, []);

  return (
    <section className="spd-cta" id="contact">

      {/* DARK OVERLAY */}
      <div className="spd-cta-overlay"></div>

      <div className="spd-cta__inner">

        {/* LEFT CONTENT */}
        <div
          className="spd-cta__content"
          data-aos="fade-right"
        >
          <h2 className="spd-cta__title">
            Explore how speed enforcement cameras can enhance compliance and protect your community
          </h2>

          <a
            href="mailto:camerasolutions@e-consystems.com"
            className="spd-cta__btn"
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

export default SpeedCta;