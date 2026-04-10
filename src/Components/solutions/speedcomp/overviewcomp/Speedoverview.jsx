import './Styles.css';

const outcomes = [
  {
    text: 'Reduce speed-related crashes and fatalities',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9,12 11,14 15,10"/></svg>,
  },
  {
    text: 'Protect vulnerable road users in school zones',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-4-3.87"/></svg>,
  },
  {
    text: 'Improve compliance across highways and urban corridors',
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>,
  },
];

const condCards = [
  {
    title: 'High-Speed Capture',
    text: 'Global shutter sensors eliminate motion blur at speeds up to 300+ km/h',
    wide: false,
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><polygon points="13,2 3,14 12,14 11,22 21,10 12,10 13,2"/></svg>,
  },
  {
    title: 'Low-Light / Night',
    text: 'IR illumination ensures clear plate capture in darkness and glare',
    wide: false,
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>,
  },
  {
    title: 'Multi-Lane Coverage',
    text: 'Wide-angle and motorized lens options provide simultaneous multi-lane monitoring from a single unit',
    wide: true,
    icon: <svg viewBox="0 0 24 24" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
  },
];

const SpeedOverview = () => {
  return (
    <section className="spd-overview" id="overview">
      <div className="spd-overview__inner">
        <div className="spd-overview__left">
          {/* <p className="spd-overview__eyebrow">What We Solve</p> */}
          <h2 className="spd-overview__title">
            Vision Based <em>Speed Enforcement</em> Cameras
          </h2>
          <p className="spd-overview__text">
            Speed enforcement cameras are automated imaging systems that detect, document, and support enforcement of speeding violations in real time. These solutions help reduce speed-related crashes, protect vulnerable road users, and improve compliance across highways, school zones, and urban corridors.
          </p>
          
        </div>

        
      </div>
    </section>
  );
};

export default SpeedOverview;   