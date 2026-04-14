import './Styles.css';
import SpeedEnforcement from '../../../../assets/solutionpage/trafficEnforcement/speed-enforcement.jpg';
import RedLight from '../../../../assets/solutionpage/trafficEnforcement/red-light.jpg';
import SchoolBus from '../../../../assets/solutionpage/trafficEnforcement/school-bus.jpg';

const usecases = [
  {
    num: '01',
    title: 'Speed Enforcement',
    text: 'Our cameras measure vehicle speed and capture violations against posted limits.',
    icon: SpeedEnforcement,
  },
  {
    num: '02',
    title: 'Red Light Violation Detection',
    text: 'Our cameras detect and record vehicles entering intersections on a red signal.',
    icon: RedLight,
  },
  {
    num: '03',
    title: 'School Bus Stop Arm',
    text: 'Our cameras identify and record vehicles passing illegally when school bus stop-arms are deployed.',
    icon: SchoolBus,
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
              <div className="its-uc-row__visual">
                <img src={uc.icon} alt={uc.title} />
              </div>
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