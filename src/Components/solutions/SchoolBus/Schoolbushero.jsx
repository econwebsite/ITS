import './SchoolBusHero.css';

const points = [
  'Improve student safety',
  'Reduce illegal overtaking incidents',
  'Provide clear, legally valid evidence for compliance and enforcement',
];

const SchoolBusHero = () => {
  return (
    <section className="sbhero" id="hero">
      <div className="sbhero__inner">

        <div className="sbhero__content">

          {/* LEFT IMAGE */}
          <div className="sbhero__image-wrap fade-left">

            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1400&auto=format&fit=crop"
              alt="School Bus Enforcement"
            />

          </div>

          {/* RIGHT CONTENT */}
          <div className="sbhero__right fade-right">

            <h1 className="sbhero__title">
              Vision Based School Bus Stop Arm Enforcement Solutions
            </h1>

            <p className="sbhero__desc">
              School bus stop arm enforcement cameras detect and document vehicles that illegally pass a school bus while its stop-arm and warning lights are deployed. These enforcement vision solutions equip agencies and school transportation departments to:
            </p>

            <div className="sbhero__outcomes">

              {points.map((item, index) => (
                <div className="sbhero__outcome" key={index}>

                  <div className="sbhero__bullet"></div>

                  <span>{item}</span>

                </div>
              ))}

            </div>

            <p className="sbhero__bottom-text">
              School bus stop-arm enforcement cameras combine imaging hardware, synchronized triggering, and edge AI analytics. Our vision solutions provide continuous monitoring and high confidence violation capture without manual observation.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default SchoolBusHero;