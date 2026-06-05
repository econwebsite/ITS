import './Styles.css';
import { useEffect, useRef } from 'react';
import Modelbutton from '../../../Button comp/Modelbutton';

const ITSCta = () => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add('animate');
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="its-cta" id="contact">
      <div className="its-cta__overlay"></div>

      <div className="its-cta__inner" ref={ref}>
        <div className="its-cta__left">
          
          <p className="its-cta__label">VISION-BASED ENFORCEMENT</p>

          <h2 className="its-cta__title">
            Explore how vision-based enforcement can strengthen{' '}
            <span>your traffic safety programs</span>
          </h2>

          {/* <p className="its-cta__desc">
            Leverage AI-powered cameras and real-time analytics to detect violations,
            reduce incidents, and create safer roads at scale.
          </p> */}

          <Modelbutton
            className="its-cta__btn gtm-btn"
            text="Connect with us >>"
            backgroundColor="#38bdf8"
            animationColor="#0ea5e9"
            hoverColor="#0284c7"
            padding="14px 24px"
            fontSize="14px"
            borderRadius="6px"
            border="none"
            productName="Traffic Enforcement Cameras"
            title="Traffic Enforcement Camera Solution"
          />

        </div>
      </div>
    </section>
  );
};

export default ITSCta;