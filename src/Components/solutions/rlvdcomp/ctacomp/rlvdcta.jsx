import './rlvdcta.css';
import Modelbutton from '../../../Button comp/Modelbutton';

const RLVDCta = () => {
  return (
    <section className="rlvd-cta" id="contact">

      <div className="rlvd-cta__bg"></div>

      <div className="rlvd-cta__overlay"></div>

      <div className="rlvd-cta__inner">

        <div className="rlvd-cta__content">

          <h2 className="rlvd-cta__title">
            Explore how Red Light Violation Detection cameras can enhance compliance and support <br /><em>your intersection safety goals</em>
          </h2>

          <Modelbutton
            className="rlvd-cta__btn gtm-btn"
            text="Connect With Us >>"
            backgroundColor="#74d3f7"
            animationColor="#2f5780"
            hoverColor="#2f5780"
            padding="18px 34px"
            fontSize="14px"
            borderRadius="4px"
            border="none"
            productName="RLVD Cameras"
            title="Red Light Violation Detection Solution"
          />

        </div>

      </div>

    </section>
  );
};

export default RLVDCta;