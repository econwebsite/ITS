import './rlvdoutcomes.css';
import redlightViolation from '../../../../assets/solutionpage/rlvd/red-light-violation-reduction.png';
import angleCollisions from '../../../../assets/solutionpage/rlvd/angle-collision-reduction.png';
import driverCompliance from '../../../../assets/solutionpage/rlvd/driver-compliance.png';
import dataDriven from '../../../../assets/solutionpage/rlvd/data-driven-safety-programs.png';
const outcomes = [
  {
    title: 'Reduction in Red Light Violations',
    text: 'Reduction in red light violations and unsafe intersection behavior',
    image: redlightViolation,
  },
  {
    title: 'Decline in Angle Collisions',
    text: 'Measurable declines in angle collisions and serious injury rates',
    image: angleCollisions,
  },
  {
    title: 'Enhanced Driver Compliance',
    text: 'Enhanced intersection compliance and driver awareness',
    image: driverCompliance,
  },
  {
    title: 'Data-Driven Safety Programs',
    text: 'Rich analytics for data driven traffic safety programs',
    image: dataDriven,
  },
];

const RLVDOutcomes = () => {
  return (
    <section className="rlvd-outcomes" id="outcomes">
      <div className="rlvd-outcomes__inner">

        <div className="rlvd-outcomes__header">
          <h2 className="rlvd-outcomes__title">
            Proven Safety Outcomes of Our RLVD Cameras
          </h2>
        </div>

        <div className="rlvd-outcomes__grid">

          {outcomes.map((o) => {
            return (
              <div className="rlvd-out-card" key={o.title}>

                <div className="rlvd-out-card__image-wrap">
                  <img
                    src={o.image}
                    alt={o.title}
                    className="rlvd-out-card__image"
                  />
                </div>

                <div className="rlvd-out-card__content">
                  {/* <h3 className="rlvd-out-card__title">{o.title}</h3> */}
                  <p className="rlvd-out-card__text">{o.text}</p>
                </div>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default RLVDOutcomes;