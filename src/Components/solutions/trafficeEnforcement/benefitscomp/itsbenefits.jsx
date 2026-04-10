import './Styles.css';

const benefits = [
  'Minimize manual workflows',
  'Authorities improve compliance',
  'Enhance situational awareness',
  'Support data-driven traffic safety programs ',
];


const ITSBenefits = () => {
  return (
    <section className="its-benefits" id="benefits">
      <div className="its-benefits__inner">
        <div className="its-benefits__top">
          <div>
            {/* <p className="its-benefits__eyebrow">Why Choose Us</p> */}
            <h2 className="its-benefits__title">
              <em>Benefits</em> of Our Traffic Enforcement Vision Solutions
            </h2>
            
          </div>
          <div className="its-benefits__list">
            <p className="its-benefits__subtitle">
              We combine custom imaging hardware with intelligent edge processing and analytics to help:
            </p>
            {benefits.map((b) => (
              <div className="its-benefit-item" key={b}>
                <div className="its-benefit-item__check">
                  <svg viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20,6 9,17 4,12" />
                  </svg>
                </div>
                <span className="its-benefit-item__text">{b}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ITSBenefits;