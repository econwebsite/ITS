import './Styles.css';

const usecases = [
  {
    num: '01',
    title: 'Speed Enforcement',
    text: 'Our cameras measure vehicle speed and capture violations against posted limits.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="26" stroke="#2ae1e1" strokeWidth="2" />
        <path d="M32 14 L32 20" stroke="#2ae1e1" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 32 L20 32" stroke="#2ae1e1" strokeWidth="2" strokeLinecap="round" />
        <path d="M50 32 L44 32" stroke="#2ae1e1" strokeWidth="2" strokeLinecap="round" />
        <path d="M20 20 L24.2 24.2" stroke="#2ae1e1" strokeWidth="2" strokeLinecap="round" />
        <path d="M44 20 L39.8 24.2" stroke="#2ae1e1" strokeWidth="2" strokeLinecap="round" />
        <path d="M32 32 L44 22" stroke="#2ae1e1" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="32" cy="32" r="3" fill="#2ae1e1" />
        <text x="32" y="46" textAnchor="middle" fill="#2ae1e1" fontSize="9" fontWeight="bold" opacity="0.7">SPD</text>
      </svg>
    ),
  },
  {
    num: '02',
    title: 'Red Light Violation Detection',
    text: 'Our cameras detect and record vehicles entering intersections on a red signal.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="26" y="8" width="12" height="38" rx="6" stroke="#2ae1e1" strokeWidth="2" />
        <circle cx="32" cy="18" r="5" fill="#ff3c3c" opacity="0.9" />
        <circle cx="32" cy="30" r="5" fill="#ffb000" opacity="0.3" />
        <circle cx="32" cy="42" r="5" fill="rgba(255,176,0,0.2)" />
        <line x1="8" y1="50" x2="56" y2="50" stroke="#2ae1e1" strokeWidth="2" />
        <line x1="32" y1="46" x2="32" y2="50" stroke="#2ae1e1" strokeWidth="2" />
        <rect x="10" y="50" width="44" height="8" rx="1" fill="rgba(255,176,0,0.1)" stroke="#2ae1e1" strokeWidth="1" opacity="0.4" />
      </svg>
    ),
  },
  {
    num: '03',
    title: 'School Bus Stop Arm',
    text: 'Our cameras identify and record vehicles passing illegally when school bus stop-arms are deployed.',
    icon: (
      <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="22" width="36" height="24" rx="3" stroke="#2ae1e1" strokeWidth="2" />
        <rect x="14" y="26" width="7" height="6" rx="1" stroke="#2ae1e1" strokeWidth="1.5" />
        <rect x="25" y="26" width="7" height="6" rx="1" stroke="#2ae1e1" strokeWidth="1.5" />
        <circle cx="17" cy="48" r="4" stroke="#2ae1e1" strokeWidth="2" />
        <circle cx="36" cy="48" r="4" stroke="#2ae1e1" strokeWidth="2" />
        <line x1="46" y1="30" x2="56" y2="30" stroke="#ff3c3c" strokeWidth="2.5" strokeLinecap="round" />
        <text x="10" y="20" fill="#2ae1e1" fontSize="8" fontWeight="bold" opacity="0.7">SCHOOL BUS</text>
        <path d="M50 24 L58 30 L50 36" stroke="#ff3c3c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

const extendedTags = [
  'Wrong-Way Detection',
  'Bus-Lane Enforcement',
  'Other ITS safety functions',
];

const ITSUseCases = () => {
  return (
    <section className="its-usecases" id="usecases">
      <div className="its-usecases__inner">
        <div className="its-usecases__header">
          {/* <p className="its-usecases__eyebrow">Enforcement Use Cases</p> */}
          <h2 className="its-usecases__title">Enforcement <em>Use Cases</em> of Our Vision Solutions</h2>
        </div>

        <div className="its-usecases__list">
          {usecases.map((uc) => (
            <div className="its-uc-row" key={uc.num}>
              <div className="its-uc-row__num">{uc.num}</div>
              <div className="its-uc-row__body">
                <div className="its-uc-row__title">{uc.title}</div>
                <p className="its-uc-row__text">{uc.text}</p>
              </div>
              <div className="its-uc-row__visual">{uc.icon}</div>
            </div>
          ))}
        </div>

        <div className="its-usecases__extended">
          <p>Built on a scalable architecture, our solutions cater to other use cases such as </p>
          <div className="its-usecases__extended-label"></div>
          <div className="its-usecases__extended-tags">
            {extendedTags.map((tag) => (
              <span className="its-uc-tag" key={tag}>{tag}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITSUseCases;