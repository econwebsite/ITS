import './styles.css';

const trustItems = [
  {
    text: 'Evidentiary-Grade Imaging',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14,2 14,8 20,8"/><polyline points="9,15 11,17 15,13"/></svg>,
  },
  {
    text: 'GPS & Metadata Bundled',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
  },
  {
    text: 'ANPR/LPR Ready',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="7" width="18" height="10" rx="2"/><line x1="7" y1="12" x2="17" y2="12"/></svg>,
  },
  {
    text: 'OEM Support',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/></svg>,
  },
];

const SBSACta = () => {
  return (
    <section className="sbsa-cta" id="contact">
      <div className="sbsa-cta__inner">
        <div className="sbsa-cta__icon-wrap">
          <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <polyline points="9,12 11,14 15,10"/>
          </svg>
        </div>
        <p className="sbsa-cta__eyebrow">Protect Your Students</p>
        <h2 className="sbsa-cta__title">
          Explore How School Bus Stop Arm Enforcement Cameras Can Enhance Student Safety, Improve Compliance, and More
        </h2>
        <p className="sbsa-cta__sub">
          Talk to our experts about deploying edge AI stop-arm cameras for your school district —
          bus-mounted, fixed zone, or hybrid configurations tailored to your program.
        </p>
        <a href="mailto:camerasolutions@e-consystems.com" className="sbsa-cta__btn">
          Connect With Us
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>

        <div className="sbsa-cta__trust">
          {trustItems.map((t) => (
            <div className="sbsa-cta-trust-item" key={t.text}>
              {t.icon}
              {t.text}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SBSACta;