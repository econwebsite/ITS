import "./Overview.css";
import smartParkingImg from "../assets/smart-parking.png"


const Overview = () => {
  return (
    <section className="overview">
      <div className="overview-container">

        {/* Left Content */}

        
       





        <div className="overview-content">
          <span className="overview-tag">
            Smart Parking Management
          </span>

          <h2 className="overview-title">
            Complete Vision Solutions for Modern Parking Operations
          </h2>

          <p>
         e-con Systems delivers complete vision solutions for modern parking operations, from ANPR-based access control and ticketless entry to real-time occupancy detection and automated enforcement. These solutions are powered by our cameras, Edge AI Vision Box, and ALPR SDK, engineered to perform across commercial and urban environments — from multi-level garages with harsh artificial lighting to outdoor lots exposed to glare, shadows, or night conditions.

          </p>

          <p>
          With imaging features like global shutter, HDR, low-light imaging, and on-device edge AI, we help parking operators automate plate recognition, monitor space availability, and flag violations in real time — without depending on heavy server infrastructure.

          </p>

        </div>

       <div className="overview-image">
          <img
            src={smartParkingImg}
            alt="Smart Parking Overview"
          />
        </div> 

      </div>
    </section>
  );
};

export default Overview;

