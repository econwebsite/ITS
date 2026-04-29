import './Styles.css';
import { useEffect, useRef } from 'react';

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
            Explore how vision-based enforcement can strengthen <br />
            <span>your traffic safety programs</span>
          </h2>

          {/* <p className="its-cta__desc">
            Leverage AI-powered cameras and real-time analytics to detect violations,
            reduce incidents, and create safer roads at scale.
          </p> */}

          <a href="mailto:camerasolutions@e-consystems.com" className="its-cta__btn">
            Connect with us
            <svg viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>

        </div>
      </div>
    </section>
  );
};

export default ITSCta;