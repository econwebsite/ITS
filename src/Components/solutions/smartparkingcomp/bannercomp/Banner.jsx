import "./Banner.css";
import heroBannerImg from "../../../../assets/solutionpage/smart-parking-management/parking-banner.jpg";
import Modelbutton from "../../../Button comp/Modelbutton";

const Banner = () => {
  return (
    <section className="parking-banner">
      {/* Dummy Banner */}
      <img
        src={heroBannerImg}
        alt="Smart Parking Management"
        className="parking-banner-image"
      />

      {/* Overlay */}
      <div className="parking-banner-overlay"></div>

      {/* Content */}
      <div className="parking-banner-content">
        <h1>
           AI Vision Solutions for
          <span> Smart Parking Management</span>
        </h1>

<p className="parking-banner-caption">
  From <span>entry</span> to <span>exit</span>
</p>



<Modelbutton
  className=""
  text="Talk to an Expert →"
  backgroundColor="#1e2f7a"
  animationColor="#00aeef"
  hoverColor="#00aeef"
  padding="12px 25px"
  fontSize="14px"
  borderRadius="0"
  border="1px solid #fff"
  productName="Smart Parking Management"
  title="Smart Parking Management"
/>

      </div>
    </section>
  );
};

export default Banner;