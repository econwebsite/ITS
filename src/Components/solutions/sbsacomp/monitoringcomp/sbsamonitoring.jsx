import './styles.css';

const bars = [
  { label: 'Day Routes', pct: '92%', width: '92%' },
  { label: 'Night Routes', pct: '97%', width: '97%' },
  { label: 'All Weather', pct: '95%', width: '95%' },
  { label: 'Multi-Vehicle', pct: '89%', width: '89%' },
];

const SBSAMonitoring = () => (
  <section className="sbsa-monitoring" id="monitoring">
    <div className="sbsa-monitoring__inner">
      <div className="sbsa-monitoring__left">
        <p className="sbsa-monitoring__eyebrow">Always-On Protection</p>
        <h2 className="sbsa-monitoring__title">24/7 Monitoring and High-Confidence Accuracy</h2>
        <p className="sbsa-monitoring__desc">
          Our stop-arm enforcement camera solutions are equipped with continuous operation and AI-assisted
          detection. They capture illegal pass-bys 24 hours a day, 7 days a week under various environmental conditions.
        </p>
        <p className="sbsa-monitoring__desc">
          With intelligent filtering and confidence scoring, this greatly reduces the risk of false positives
          and false negatives — even in complex traffic scenarios or multi-vehicle situations.
        </p>
      </div>
      <div className="sbsa-monitoring__right">
        <div className="sbsa-monitoring__card">
          <div className="sbsa-monitoring__247">24/7</div>
          <div className="sbsa-monitoring__247-label">Continuous Monitoring</div>
          <div className="sbsa-monitoring__bars">
            {bars.map((b) => (
              <div className="sbsa-bar-row" key={b.label}>
                <span className="sbsa-bar-row__label">{b.label}</span>
                <div className="sbsa-bar-row__track">
                  <div className="sbsa-bar-row__fill" style={{ width: b.width }}></div>
                </div>
                <span className="sbsa-bar-row__val">{b.pct}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default SBSAMonitoring;