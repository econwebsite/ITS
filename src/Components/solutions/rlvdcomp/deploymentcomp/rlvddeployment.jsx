import './rlvddeployment.css';
import deploymentModel from '../../../../assets/solutionpage/rlvd/deployment-model-img.jpg';
import mobileUnit from '../../../../assets/solutionpage/rlvd/mobile-unit-img.jpg';
import corridorSystem from '../../../../assets/solutionpage/rlvd/corridor-system-img.jpg';

const models = [
  {
    type: 'Deployment Model',
    title: 'Fixed Intersection Sensors',
    text: 'Permanent installations at critical intersections for continuous monitoring and high volume compliance tracking',
    image:deploymentModel,
  },
  {
    type: 'Deployment Model',
    title: 'Mobile Enforcement Units',
    text: 'Transportable systems mounted on vehicles, tripods, or temporary poles for targeted campaigns or event based deployments',
    image: mobileUnit,
  },
  {
    type: 'Deployment Model',
    title: 'Corridor & Hybrid Systems',
    text: 'Integrated deployments across multiple intersections or arterial corridors to analyze patterns and optimize compliance strategies',
    image: corridorSystem,
  },
];

const RLVDDeployment = () => {
  return (
    <section className="rlvd-deploy" id="deployment">
      <div className="rlvd-deploy__inner">

        <div className="rlvd-deploy__header">
          <h2 className="rlvd-deploy__title">
            Flexible Deployment Models of Our Vision Solutions
          </h2>
        </div>

        <div className="rlvd-deploy__models">
          {models.map((m) => (
            <div className="rlvd-deploy-card" key={m.title}>
              
              <div className="rlvd-deploy-card__image-wrap">
                <img
                  src={m.image}
                  alt={m.title}
                  className="rlvd-deploy-card__image"
                />
              </div>

              <div className="rlvd-deploy-card__body">
                <div className="rlvd-deploy-card__type">{m.type}</div>

                <h3 className="rlvd-deploy-card__title">
                  {m.title}
                </h3>

                <p className="rlvd-deploy-card__text">
                  {m.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="rlvd-deploy__rugged">
          <p className="rlvd-deploy__sub">
            Our vision solutions come in ruggedized, low power designs – with battery and solar support for deployments in infrastructure constrained locations.
          </p>
        </div>

      </div>
    </section>
  );
};

export default RLVDDeployment;