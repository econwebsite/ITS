import './rlvdedgeai.css';
import inbuiltAi from '../../../../assets/solutionpage/rlvd/inbuilt-ai-img.png';
const features = [
  {
    title: 'Real time event classification and violation verification',
  },
  {
    title: 'Local ANPR/LPR with configurable confidence thresholds',
  },
  {
    title: 'Reduced latency and network traffic by processing at the source',
  },
  {
    title:
      'Health monitoring, remote firmware updates, and secure logs for system management',
  },
];

const deploymentCards = [
  {
    title: 'ONVIF Standards & Open APIs',
    text:
      'Integration with ITS platforms, signal control systems, and enforcement back-office workflows.',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Configurable Data Retention',
    text:
      'Regional privacy settings aligned with evolving data protection regulations and agency policy requirements.',
    image:
      'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'On-Device Anonymization',
    text:
      'Faces, pedestrians, and non-relevant objects anonymized at the edge before storage or transmission.',
    image:
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Encrypted Transit & Storage',
    text:
      'Role-based access controls and end-to-end encryption for secure data handling across the full evidence workflow.',
    image:
      'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop',
  },
];

const RLVDEdgeAI = () => {
  return (
    <section className="rlvdai-page" id="edge-ai">

      <div className="rlvd-inner">

        {/* =========================
            SECTION 1
        ========================= */}

        <div className="top-section">

          {/* LEFT IMAGE CARD */}

          <div className="top-left fade-left">

            <div className="image-card">

              <img
                src={inbuiltAi}
                alt="Inbuilt Edge AI Intelligence"
                className="edge-ai-image"
              />

            </div>

          </div>

          {/* RIGHT CONTENT */}

          <div className="top-right fade-right">
          <h2>
                 Inbuilt Edge AI Intelligence
                </h2>
            <p className="top-right-text">
             Our vision solutions’ on device computing delivers:
            </p>

            <div className="feature-grid">

              {features.map((item, index) => (
                <div className="feature-box" key={index}>

                  <h4>{item.title}</h4>

                </div>
              ))}

            </div>
              <p className="top-right-text" style={{ marginTop: '20px' }}>Their edge centric architecture also ensures responsiveness and resilience in varying operational environments.</p>
          </div>

        </div>

        {/* =========================
            SECTION 2
        ========================= */}

        <div className="bottom-section">

          <div className="bottom-header fade-up">

            <h2>
            Seamless Integration, Privacy and Security
            </h2>

            
            <p> 
            Our RLVD camera solutions support responsible data handling without compromising enforcement effectiveness. They support:
            </p>
          </div>

          <div className="deployment-grid">
          
            {deploymentCards.map((item, index) => (
              <div className="deployment-card fade-card" key={index}>

                {/* <div className="deployment-image">

                  <img
                    src={item.image}
                    alt={item.title}
                  />

                </div> */}

                <div className="deployment-content">

                  <h4>{item.title}</h4>

                  <p>{item.text}</p>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default RLVDEdgeAI;