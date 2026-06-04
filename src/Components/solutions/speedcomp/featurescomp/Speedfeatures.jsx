import './Styles.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import edgeAIImg from '../../../../assets/solutionpage/speed-enforcement/edge-ai-img.jpg';
import integrationImg from '../../../../assets/solutionpage/speed-enforcement/integration-img.jpg';
import safetyImg from '../../../../assets/solutionpage/speed-enforcement/safety-outcomes-img.jpg';

const features = [
  {
    title: 'Edge AI intelligence',
    text:
      'On-device processing reduces latency, minimizes network dependency, and delivers instant violation alerts. Integrated health monitoring, remote firmware updates, and audit-ready logs ensure long-term deployment readiness and regulatory compliance.',
    image: edgeAIImg,
  },
  {
    title: 'Integration, Privacy & Security',
    text:
      'With ONVIF standards and open APIs, our vision solutions integrate seamlessly with traffic management systems, tolling solutions, and other ITS applications. Privacy-by-design features include configurable data retention, anonymization, and access control, along with secure HTTPS transmission. This ensures responsible data handling while maintaining enforcement effectiveness.',
    image: integrationImg,
  },
  {
    title: 'Proven safety outcomes',
    text:
      'Field deployments consistently show reduced speeding violations and improved compliance, supporting safer communities and measurable crash reduction. By combining intelligent imaging hardware with advanced analytics, our vision-based speed enforcement cameras empower agencies with real-time, actionable insights to strengthen road safety programs.',
    image: safetyImg,
  },
];

const SpeedFeatures = () => {

  useEffect(() => {
    AOS.init({
      duration: 1400,
      once: true,
      easing: 'ease-out-cubic',
      offset: 80,
    });
  }, []);

  return (
    <section className="feature-section" id="features">

      <div className="feature-container">

        {/* TITLE */}
        <div
          className="feature-header"
          data-aos="fade-up"
        >
          <h2 className="feature-main-title">
            Key Features of Our
            <span> Speed Enforcement Vision Solutions</span>
          </h2>
        </div>

        {/* CARDS */}
        <div className="feature-grid">

          {/* CARD 1 */}
          <div
            className="feature-card"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="feature-image-wrap">
              <img
                src={features[0].image}
                alt={features[0].title}
              />
            </div>

            <div className="feature-content">
              <h3 className="feature-title">
                {features[0].title}
              </h3>

              <p className="feature-text">
                {features[0].text}
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div
            className="feature-card"
            data-aos="fade-up"
            data-aos-delay="250"
          >
            <div className="feature-image-wrap">
              <img
                src={features[1].image}
                alt={features[1].title}
              />
            </div>

            <div className="feature-content">
              <h3 className="feature-title">
                {features[1].title}
              </h3>

              <p className="feature-text">
                {features[1].text}
              </p>
            </div>
          </div>

          {/* CARD 3 */}
          <div
            className="feature-card"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="feature-image-wrap">
              <img
                src={features[2].image}
                alt={features[2].title}
              />
            </div>

            <div className="feature-content">
              <h3 className="feature-title">
                {features[2].title}
              </h3>

              <p className="feature-text">
                {features[2].text}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SpeedFeatures;