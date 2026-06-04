import './Styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import fixedCameraImg from '../../../../assets/solutionpage/speed-enforcement/fixed-camera-img.jpg';
import mobileCameraImg from '../../../../assets/solutionpage/speed-enforcement/mobile-camera-img.jpg';
import pointToPointImg from '../../../../assets/solutionpage/speed-enforcement/point-to-point-img.jpg';

const models = [
  {
    title: 'Fixed Systems',
    text: 'Permanent roadside systems for continuous monitoring',
    image: fixedCameraImg,
  },
  {
    title: 'Mobile Systems',
    text: 'Flexible systems for vehicle-based and portable deployments',
    image: mobileCameraImg,
  },
  {
    title: 'Rapid Deployment Systems',
    text: 'Portable vision systems for temporary enforcement and quick deployment',
    image: pointToPointImg,
  },
];

const SpeedDeployment = () => {

  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: true,
      easing: 'ease-out-cubic',
      offset: 80,
    });
  }, []);

  return (
    <section className="deployment-section" id="deployment">

      <div className="deployment-wrapper">

        {/* HEADER */}
        <div
          className="deployment-header"
          data-aos="fade-up"
        >
          <h2 className="deployment-title">
            <span>Flexible Deployment</span> Models of Our Vision Solutions
          </h2>

          <p className="deployment-description">
           Our cameras are built for diverse environments, featuring motorized or multi-focal lenses, strobe and trigger synchronization, and rugged, low-power designs capable of battery or solar operation. It ensures reliable operation in adverse weather, glare, and variable lighting conditions.
          </p>
        </div>

        {/* IMAGE CARDS */}
        <div className="deployment-cards">

          {/* CARD 1 */}
          <div
            className="deployment-card"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="deployment-image-wrap">
              <img
                src={models[0].image}
                alt={models[0].title}
              />
            </div>

            <h3 className="deployment-card-title">
              {models[0].title}
            </h3>

            <p className="deployment-card-text">
              {models[0].text}
            </p>
          </div>

          {/* CARD 2 */}
          <div
            className="deployment-card"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <div className="deployment-image-wrap">
              <img
                src={models[1].image}
                alt={models[1].title}
              />
            </div>

            <h3 className="deployment-card-title">
              {models[1].title}
            </h3>

            <p className="deployment-card-text">
              {models[1].text}
            </p>
          </div>

          {/* CARD 3 */}
          <div
            className="deployment-card"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="deployment-image-wrap">
              <img
                src={models[2].image}
                alt={models[2].title}
              />
            </div>

            <h3 className="deployment-card-title">
              {models[2].title}
            </h3>

            <p className="deployment-card-text">
              {models[2].text}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SpeedDeployment;