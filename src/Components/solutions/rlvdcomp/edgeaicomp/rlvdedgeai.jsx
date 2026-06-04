import './rlvdedgeai.css';

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
    title: 'ONVIF standards ',
    text:
      'ONVIF standards and open APIs for integration with ITS, signal control, and enforcement platforms',
    image:
      'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Configurable data retention',
    text:
      'Configurable data retention and regional privacy settings aligned with global data protection practices',
    image:
      'https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Anonymization',
    text:
      'Anonymization of non relevant objects (faces, pedestrians) before storage or transmission',
    image:
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Encrypted transit and storage',
    text:
      'Encrypted transit and storage with role based access controls for enhanced data security',
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
                src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
                alt="Deployment"
              />

              <div className="image-overlay">
                <h2>
                 Inbuilt Edge AI Intelligence
                </h2>
              </div>

            </div>

          </div>

          {/* RIGHT CONTENT */}

          <div className="top-right fade-right">

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
             Our RLVD camera solutions drive responsible data handling without undermining enforcement efficacy. They support:
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