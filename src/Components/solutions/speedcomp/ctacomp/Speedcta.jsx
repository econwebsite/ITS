import './Ctastyles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import Modelbutton from '../../../Button comp/Modelbutton';

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
            Explore how speed enforcement cameras can enhance compliance and <br /><em>protect your community</em>
          </h2>

          <Modelbutton
            className="spd-cta__btn gtm-btn"
            text="Connect With Us >>"
            backgroundColor="#22b7f1"
            animationColor="#1d9fd1"
            hoverColor="#1d9fd1"
            padding="18px 34px"
            fontSize="16px"
            borderRadius="6px"
            border="none"
            productName="Speed Enforcement Cameras"
            title="Speed Enforcement Camera Solution"
          />
        </div>

      </div>
    </section>
  );
};

export default SpeedCta;