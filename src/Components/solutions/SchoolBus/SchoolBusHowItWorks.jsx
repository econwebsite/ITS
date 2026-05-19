import { useEffect, useRef } from 'react';
import './SchoolBusHowItWorks.css';

const triggers = [
  {
    tag: 'Method 01',
    title: 'Direct Signal Input',
    text: 'Direct signal input from the bus stop arm system',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop',
  },
  {
    tag: 'Method 02',
    title: 'Vision-Based Detection',
    text: 'Vision based detection of stop-arm state',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=600&auto=format&fit=crop',
  },
  {
    tag: 'Method 03',
    title: 'Auxiliary Sensor Triggers',
    text: 'Auxiliary sensor triggers (e.g., radar or ultrasonic verification)',
    image:
      'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?q=80&w=600&auto=format&fit=crop',
  },
];

const SchoolBusHowItWorks = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = sectionRef.current.querySelectorAll('.sbhiw2-card');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('show');
          }
        });
      },
      { threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="sbhiw2" id="how-it-works" ref={sectionRef}>
      <div className="sbhiw2__inner">

        {/* TOP CONTENT */}
        <div className="sbhiw2__top fade-up">
          <h2 className="sbhiw2__title">
            How School Bus Stop-arm Enforcement Vision Works
          </h2>

          <p className="sbhiw2__desc">
            A stop arm event is defined by the deployment of the bus’s stop-arm and activation of amber/red warning lights. The system integrates with the bus wiring or sensor inputs to activate enforcement logic only when the stop-arm is extended, ensuring accurate capture of illegal pass bys.
          </p>
        </div>

        {/* MIDDLE CONTENT */}
        <div className="sbhiw2__middle fade-up">
          <p className="sbhiw2__middle-text">
            The camera system supports multiple triggering methods
          </p>

          <div className="sbhiw2__cards">

            {triggers.map((item, index) => (
              <div
                className="sbhiw2-card"
                key={index}
                style={{ transitionDelay: `${index * 0.2}s` }}
              >

                <div className="sbhiw2-card__image">
                  <img src={item.image} alt={item.title} />
                </div>

                <div className="sbhiw2-card__content">
                  <span className="sbhiw2-card__tag">{item.tag}</span>

                  <h4>{item.title}</h4>

                  <p>{item.text}</p>
                </div>

              </div>
            ))}

          </div>
        </div>

        {/* BOTTOM TEXT */}
        <div className="sbhiw2__bottom fade-up">
          <p>
            This ensures the camera only captures violations when a vehicle illegally enters the defined stop arm zone.
          </p>
        </div>

      </div>
    </section>
  );
};

export default SchoolBusHowItWorks;