import './Styles.css';
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

import SpeedEnforcement from '../../../../assets/solutionpage/trafficEnforcement/speed-enforcement-camera-img.jpg';
import RedLight from '../../../../assets/solutionpage/trafficEnforcement/red-light-img.jpg';
import SchoolBus from '../../../../assets/solutionpage/trafficEnforcement/school-bus-img.jpg';

const usecases = [
  {
    title: 'Speed Enforcement',
    text: 'Our cameras measure vehicle speed and capture violations against posted limits.',
    icon: SpeedEnforcement,
    link: '/solutions/speed-enforcement-camera',
  },
  {
    title: 'Red Light Violation Detection',
    text: 'Our cameras detect and record vehicles entering intersections on a red signal.',
    icon: RedLight,
    link: '/solutions/red-light-violation-detection-camera',
  },
  // {
  //   title: 'School Bus Stop Arm',
  //   text: 'Our cameras identify and record vehicles passing illegally when school bus stop-arms are deployed.',
  //   icon: SchoolBus,
  //   link: '/solutions/school-bus-stop-arm-camera',
  // },
];

const ITSUseCases = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
          }
        });
      },
      { threshold: 0.2 }
    );

    cardsRef.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="its-usecases" id="usecases">
      <div className="its-usecases__inner">

        {/* HEADER */}
        <div className="its-usecases__header">
          <h2 className="its-usecases__title">
            Enforcement Use Cases of Our Vision Solutions
          </h2>
        </div>

        {/* CARDS */}
        <div className="its-usecases__grid">
          {usecases.map((uc, i) => (
            <Link
              className={`its-uc-card ${i % 2 === 0 ? 'from-top' : 'from-bottom'}`}
              key={i}
              to={uc.link}
              ref={(el) => (cardsRef.current[i] = el)}
            >
              <h3 className="its-uc-card__title">{uc.title}</h3>
              <p className="its-uc-card__text">{uc.text}</p>

              <div className="its-uc-card__image">
                <img src={uc.icon} alt={uc.title} />
              </div>

              <span className="its-uc-card__cta">
                <span className="cta-inner">
                  <span className="cta-arrow"></span>
                  <span className="cta-text">Know More</span>
                </span>
              </span>
            </Link>
          ))}
        </div>

        {/* FOOTER TEXT */}
        <div className="its-usecases__footer">
          <p>
            Built on a scalable architecture, our solutions cater to other use cases such as wrong-way detection,
            bus-lane enforcement, and other ITS safety functions.
          </p>
        </div>

      </div>
    </section>
  );
};

export default ITSUseCases;