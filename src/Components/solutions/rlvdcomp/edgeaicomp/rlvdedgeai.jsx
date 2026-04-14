import './Styles.css';

const RLVDEdgeAI = () => {
  return (
    <section className="rlvdai-page" id="edge-ai">
      <div className="rlvd-inner">

        {/* Section 1: Edge AI */}
        <div className="s1">
          {/* <h2>Inbuilt Edge AI Intelligence</h2> */}
          <div className="s1-body">
            <div className="s1-left">
              <div>
                <h2>Inbuilt Edge AI Intelligence</h2>
                <p>
                 Their edge centric architecture also ensures responsiveness and resilience in varying operational environments.
                </p>
              </div>
            </div>

            <div className="s1-right">
              <p>Our vision solutions’ on device computing delivers:</p>
              <div className="feat-row">
                <div className="feat-num">01</div>
                <div className="feat-content">
                  <h4>Real time event classification and violation verification</h4>
                 
                </div>
              </div>
              <div className="feat-row">
                <div className="feat-num">02</div>
                <div className="feat-content">
                  <h4>Local ANPR/LPR with configurable confidence thresholds</h4>
                  
                </div>
              </div>
              <div className="feat-row">
                <div className="feat-num">03</div>
                <div className="feat-content">
                  <h4>Reduced latency and network traffic by processing at the source</h4>
                 
                </div>
              </div>
              <div className="feat-row">
                <div className="feat-num">04</div>
                <div className="feat-content">
                  <h4>Health monitoring, remote firmware updates, and secure logs for system management</h4>
                  
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2: Privacy & Integration */}
        <div className="s2">
          <div className="s2-label"></div>
          <div className="s2-wrap">
            <div className="s2-header">
              <div className="s2-header-left">
                <h2><em>Seamless Integration</em>, Privacy and Security</h2>
                <p>
                  Our RLVD camera solutions drive responsible data handling without undermining enforcement efficacy. They support:
                </p>
              </div>
            </div>

            <div className="s2-pillars">
              <div className="pillar">
                <div className="pillar-bar"></div>
                <h4>ONVIF standards </h4>
                <p>ONVIF standards and open APIs for integration with ITS, signal control, and enforcement platforms</p>
              </div>
              <div className="pillar">
                <div className="pillar-bar"></div>
                <h4>Configurable data retention </h4>
                <p>Configurable data retention and regional privacy settings aligned with global data protection practices</p>
              </div>
              <div className="pillar">
                <div className="pillar-bar"></div>
                <h4>Anonymization</h4>
                <p>Anonymization of non relevant objects (faces, pedestrians) before storage or transmission</p>
              </div>
              <div className="pillar">
                <div className="pillar-bar"></div>
                <h4>Encrypted transit and storage </h4>
                <p>Encrypted transit and storage with role based access controls for enhanced data security</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default RLVDEdgeAI;