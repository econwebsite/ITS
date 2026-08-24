import "./ParkingAccessControlBanner.css";
import heroBannerImg from "../../../../../../assets/solutionpage/smart-parking-management/Parking-access-control/banner.jpg";
import Modelbutton from "../../../../../Button comp/Modelbutton";

const ParkingAccessControlBanner = () => {
  return (
    <section className="parking-access-control-banner">

      {/* Banner Image */}
      <img
        src={heroBannerImg}
        alt="Parking Access Control"
        className="parking-access-control-banner-image"
      />

      {/* Overlay */}
      <div className="parking-access-control-banner-overlay"></div>

      {/* Content */}
      <div className="parking-access-control-banner-content">

        <h1>
         Frictionless Entry & Secure Access
          <span> — With Zero Tickets</span>
        </h1>

        <p className="parking-access-control-banner-caption">
           Vision solutions for reading every plate, logging every entry, and collecting
every dollar
        </p>

        <Modelbutton
          className=""
          text="Talk to an ITS Expert"
          backgroundColor="#1e2f7a"
          animationColor="#00aeef"
          hoverColor="#00aeef"
          padding="12px 25px"
          fontSize="14px"
          borderRadius="0"
          border="1px solid #fff"
          productName="Parking Access Control"
          title="Frictionless Entry & Secure Access — With Zero Tickets"
        />

      </div>

    </section>
  );
};

export default ParkingAccessControlBanner;