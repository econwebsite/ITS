import './Styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import highSpeedImg from '../../../../assets/solutionpage/speed-enforcement/high-spee-img.jpg';
import lowLightImg from '../../../../assets/solutionpage/speed-enforcement/low-light-img.jpg';
import multiLaneImg from '../../../../assets/solutionpage/speed-enforcement/multi-lane-img.jpg';

const imageCards = [
  {
    title: 'Accurate reads at highway speeds',
    image: highSpeedImg,
    className: 'large-card',
  },
  {
    title: 'Clear captures in low-light conditions',
    image: lowLightImg,
    className: 'small-card top-card',
  },
  {
    title: 'Full lane coverage, plate-level accuracy',
    image: multiLaneImg,
    className: 'small-card bottom-card',
  },
];

const SpeedSolutions = () => {

  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: true,
      easing: 'ease-out-cubic',
      offset: 80,
    });
  }, []);

  return (
    <section className="vision-section" id="solutions">
      <div className="vision-container">

        {/* TOP HEADING */}
        <div
          className="vision-header"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-easing="ease-out-cubic"
        >
          <h2 className="vision-main-title">
            Vision Based <span>Speed Enforcement</span> Cameras
          </h2>

          <p className="vision-main-desc">
            Speed enforcement cameras are automated imaging systems that detect, document, and support enforcement of speeding violations in real time. These solutions help reduce speed-related crashes, protect vulnerable road users, and improve compliance across highways, school zones, and urban corridors.
          </p>
        </div>

        {/* SECOND ROW */}
        <div className="vision-content-row">

          {/* LEFT CONTENT */}
          <div
            className="vision-left"
            data-aos="fade-right"
            data-aos-duration="1300"
            data-aos-easing="ease-out-cubic"
          >
            <h3 className="vision-side-title">
              e-con Systems’ 
              <br />
              <span>Speed Enforcement Camera Solutions</span>
            </h3>

            <p className="vision-side-desc">
             e-con Systems’ vision solutions combine high-resolution imaging, global shutter sensors, IR illumination, edge AI processing, and on-camera ISP tuning. This ensures accurate license plate recognition (ANPR/LPR) even:
            </p>
            <ul>
              <li>At high speeds</li>
              <li>In low-light conditions</li>
              <li>Across multiple lanes</li>
            </ul>
            <p className="vision-side-desc">Our vision solutions meet evidentiary standards for violation documentation and prosecution, delivering imaging and metadata for legal workflows. We also provide integrated radar modules for precise speed detection and measurement, along with external triggers from induction loops, radar, or sensors to synchronize accurate image capture.</p>
          </div>

          {/* RIGHT IMAGE GRID */}
          <div className="vision-right">
            <div className="vision-grid">

              {/* IMAGE 1 - SLIDE FROM TOP */}
              <div
                className="vision-card large-card"
                data-aos="fade-down"
                data-aos-duration="1600"
                data-aos-delay="100"
                data-aos-easing="ease-out-cubic"
              >
                <img
                  src={imageCards[0].image}
                  alt="Speed enforcement camera"
                />

                <div className="vision-label">
                  {imageCards[0].title}
                </div>
              </div>

              {/* RIGHT SMALL IMAGES */}
              <div className="vision-small-grid">

                {/* IMAGE 2 - SLIDE FROM LEFT */}
                <div
                  className="vision-card small-card"
                  data-aos="fade-left"
                  data-aos-duration="1700"
                  data-aos-delay="250"
                  data-aos-easing="ease-out-cubic"
                >
                  <img
                    src={imageCards[1].image}
                    alt="Low light traffic monitoring"
                  />

                  <div className="vision-label">
                    {imageCards[1].title}
                  </div>
                </div>

                {/* IMAGE 3 - SLIDE FROM BOTTOM */}
                <div
                  className="vision-card small-card"
                  data-aos="fade-up"
                  data-aos-duration="1800"
                  data-aos-delay="400"
                  data-aos-easing="ease-out-cubic"
                >
                  <img
                    src={imageCards[2].image}
                    alt="Multi lane vehicle detection"
                  />

                  <div className="vision-label">
                    {imageCards[2].title}
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SpeedSolutions;