import './SchoolBusHero.css';

const SchoolBusHero = () => {
  return (
    <section className="sbhero" id="hero">
      <div className="sbhero__inner">

        {/* <div className="sbhero__label">Vision-Based Enforcement Solutions</div> */}

        <div className="sbhero__content">
          <div className="sbhero__left">
            <h1 className="sbhero__title">
              Vision Based School Bus Stop Arm Enforcement Solutions
            </h1>
            <p className="sbhero__desc">
              School bus stop arm enforcement cameras detect and document vehicles that illegally pass a school bus while its stop-arm and warning lights are deployed. These enforcement vision solutions equip agencies and school transportation departments to:
            </p>
            <div className="sbhero__outcomes">
              <div className="sbhero__outcome">
                <span className="sbhero__outcome-bar" />
                <span>Improve student safety</span>
              </div>
              <div className="sbhero__outcome">
                <span className="sbhero__outcome-bar" />
                <span>Reduce illegal overtaking incidents</span>
              </div>
              <div className="sbhero__outcome">
                <span className="sbhero__outcome-bar" />
                <span>Provide clear, legally valid evidence for compliance and enforcement</span>
              </div>
            </div>
             <div className="sbhero__card">
              <div className="sbhero__card-accent" />
              <p className="sbhero__card-body">
               School bus stop-arm enforcement cameras combine imaging hardware, synchronized triggering, and edge AI analytics. Our vision solutions provide continuous monitoring and high confidence violation capture without manual observation.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default SchoolBusHero;