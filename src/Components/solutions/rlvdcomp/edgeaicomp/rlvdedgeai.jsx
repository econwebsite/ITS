import './styles.css';

const RLVDEdgeAI = () => {
  return (
    <section className="rlvd-intel" id="edge-ai">
      <div className="rlvd-intel__inner">
        <div className="rlvd-intel__grid">

          {/* Edge AI Panel */}
          <div className="rlvd-intel-panel">
            <p className="rlvd-intel-panel__eyebrow">On-Device Intelligence</p>
            <h2 className="rlvd-intel-panel__title">Inbuilt Edge AI Intelligence</h2>
            <p className="rlvd-intel-panel__desc">
              Our vision solutions' on-device computing delivers real-time event processing
              and system management — without cloud dependency or network latency.
            </p>
            <ul className="rlvd-intel-panel__list">
              <li>Real-time event classification and violation verification</li>
              <li>Local ANPR/LPR with configurable confidence thresholds</li>
              <li>Reduced latency and network traffic by processing at source</li>
              <li>Health monitoring, remote firmware updates, and secure logs</li>
            </ul>
            <div className="rlvd-intel-panel__note">
              Edge-centric architecture ensures responsiveness and resilience in varying operational environments.
            </div>
          </div>

          {/* Integration & Privacy Panel */}
          <div className="rlvd-intel-panel">
            <p className="rlvd-intel-panel__eyebrow">Integration & Data Governance</p>
            <h2 className="rlvd-intel-panel__title">Seamless Integration, Privacy & Security</h2>
            <p className="rlvd-intel-panel__desc">
              Our RLVD solutions drive responsible data handling without undermining enforcement efficacy —
              built for integration with existing ITS infrastructure.
            </p>
            <ul className="rlvd-intel-panel__list">
              <li>ONVIF standards and open APIs for ITS, signal control, and enforcement platforms</li>
              <li>Configurable data retention and regional privacy settings</li>
              <li>Anonymization of non-relevant objects (faces, pedestrians) before storage or transmission</li>
              <li>Encrypted transit and storage with role-based access controls</li>
            </ul>
            <div className="rlvd-intel-panel__note">
              Aligned with global data protection practices for responsible enforcement deployments.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RLVDEdgeAI;