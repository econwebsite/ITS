import './styles.css';

const SBSAIntegration = () => {
  return (
    <section className="sbsa-trust" id="integration">
      <div className="sbsa-trust__inner">
        <div className="sbsa-trust__grid">

          {/* Integration Panel */}
          <div className="sbsa-trust-panel">
            <p className="sbsa-trust-panel__eyebrow">Integration & Privacy</p>
            <h2 className="sbsa-trust-panel__title">Effortless Integration, Privacy and Security</h2>
            <p className="sbsa-trust-panel__desc">
              Our stop-arm enforcement solutions are designed for interoperability — built to
              integrate with existing transportation and enforcement platforms while maintaining
              responsible data governance.
            </p>
            <ul className="sbsa-trust-panel__list">
              <li>ONVIF standards and open APIs for integration with transportation and enforcement platforms</li>
              <li>Configurable data retention policies aligned with global privacy norms</li>
              <li>Anonymization of non-relevant objects (faces, pedestrians) before storage or transmission</li>
              <li>Secure transmission and storage with encryption and access controls</li>
              <li>Privacy-by-design features for responsible, region-agnostic data handling</li>
            </ul>
          </div>

          {/* 24/7 Monitoring Panel */}
          <div className="sbsa-trust-panel">
            <p className="sbsa-trust-panel__eyebrow">24/7 Operation</p>
            <h2 className="sbsa-trust-panel__title">24/7 Monitoring and High-Confidence Accuracy</h2>
            <p className="sbsa-trust-panel__desc">
              Our stop-arm enforcement cameras are equipped with continuous operation and AI-assisted
              detection — capturing illegal pass-bys around the clock under any environmental condition.
            </p>
            <ul className="sbsa-trust-panel__list">
              <li>Continuous 24/7 operation across all weather and lighting conditions</li>
              <li>Intelligent filtering and confidence scoring to reduce false positives</li>
              <li>Accurate capture in complex multi-vehicle traffic scenarios</li>
              <li>Adaptive detection thresholds for route-specific environments</li>
            </ul>
            <div className="sbsa-trust-panel__uptime">
              <div className="sbsa-uptime-badge">
                <div className="sbsa-uptime-badge__val">24/7</div>
                <div className="sbsa-uptime-badge__label">Always Active</div>
              </div>
              <div className="sbsa-uptime-badge">
                <div className="sbsa-uptime-badge__val">AI+</div>
                <div className="sbsa-uptime-badge__label">Confidence Filter</div>
              </div>
              <div className="sbsa-uptime-badge">
                <div className="sbsa-uptime-badge__val">Low</div>
                <div className="sbsa-uptime-badge__label">False Positives</div>
              </div>
              <div className="sbsa-uptime-badge">
                <div className="sbsa-uptime-badge__val">All</div>
                <div className="sbsa-uptime-badge__label">Weather Ready</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default SBSAIntegration;