import './Styles.css';

const camFeatures = [
  {
    title: 'High-Resolution Overview',
    text: 'Capture the entire violation scene including the bus, stop-arm, and passing vehicle — providing full situational context for enforcement.',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><circle cx="12" cy="10" r="3"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
  },
  {
    title: 'Dedicated ANPR Camera',
    text: 'Clear, high-contrast license plate imaging at various distances — regardless of lighting, glare, or weather conditions.',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="10" rx="2"/><line x1="7" y1="12" x2="17" y2="12"/><path d="M7 4l-2 3M17 4l2 3"/></svg>,
  },
  {
    title: 'Global Shutter Sensors',
    text: 'Eliminates motion blur even at fast vehicle approach speeds — delivering sharp, legally admissible images in all scenarios.',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>,
  },
  {
    title: 'High-Output IR Illumination',
    text: 'Consistent night-time and low-light performance with active IR — ensuring uninterrupted enforcement around the clock.',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/></svg>,
  },
  {
    title: 'Advanced ISP Tuning',
    text: 'On-camera image signal processing enhances contrast and detail under varied lighting and weather — optimized per deployment environment.',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93l-1.41 1.41M6.34 17.66l-1.41 1.41M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41"/><line x1="12" y1="2" x2="12" y2="4"/><line x1="12" y1="20" x2="12" y2="22"/><line x1="2" y1="12" x2="4" y2="12"/><line x1="20" y1="12" x2="22" y2="12"/></svg>,
  },
  {
    title: 'GPS & Metadata Bundling',
    text: 'Every event is packaged with timestamps, GPS location, and vehicle trajectory — delivering robust evidentiary records for citations.',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  },
];

const evidenceTags = ['Timestamps', 'GPS Location', 'Vehicle Trajectory', 'Signal State', 'Lane Data', 'ANPR Result'];

const SBSACameras = () => {
  return (
    <section className="sbsa-cameras" id="cameras">
      <div className="sbsa-cameras__inner">
        <div className="sbsa-cameras__header">
          <p className="sbsa-cameras__eyebrow">Camera Capabilities</p>
          <h2 className="sbsa-cameras__title">e-con Systems' School Bus Stop-Arm Cameras</h2>
          <p className="sbsa-cameras__subtitle">
            Our stop-arm vision solutions provide reliable, evidentiary-grade evidence under all conditions —
            built to meet legal standards for enforcement and prosecution.
          </p>
        </div>

        <div className="sbsa-cameras__features">
          {camFeatures.map((f) => (
            <div className="sbsa-cam-feat" key={f.title}>
              <div className="sbsa-cam-feat__icon">{f.icon}</div>
              <div className="sbsa-cam-feat__title">{f.title}</div>
              <p className="sbsa-cam-feat__text">{f.text}</p>
            </div>
          ))}
        </div>

        <div className="sbsa-cameras__evidence">
          <div>
            <div className="sbsa-cameras__evidence-title">Robust Evidentiary Record Packaging</div>
            <p className="sbsa-cameras__evidence-text">
              Captured images are automatically bundled with comprehensive metadata — supporting enforcement decisions and legal citation workflows.
            </p>
          </div>
          <div className="sbsa-cameras__evidence-tags">
            {evidenceTags.map((tag) => (
              <span className="sbsa-evidence-tag" key={tag}>
                <span className="sbsa-evidence-tag__dot"></span>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SBSACameras;