import "./Overview.css";
import smartParkingImg from "../../../../assets/solutionpage/smart-parking-management/vision-solutions.jpg"


const Overview = () => {
  return (
    <section className="overview">
      <div className="overview-container">

        {/* Left Content */}

        
    

        <div className="overview-content">
          <h3 className="overview-tag">
            Smart Parking Management
          </h3>

          {/* <h2 className="overview-title">
            Complete Vision Solutions for Modern Parking Operations
          </h2> */}

          <p>
e-con Systems delivers end to end AI vision solutions for modern parking operations, from 
ANPR-based access control and ticketless entry to real-time occupancy detection and 
automated enforcement. These solutions are powered by our cameras, Edge AI Vision 
Box, and ALPR SDK, engineered to perform across commercial and urban environments. 
          </p>

          <p>
With imaging features like global shutter, HDR, low-light imaging, and on-device edge AI, 
we help parking operators automate plate recognition, monitor space availability, and flag 
violations in real time — without depending on heavy server infrastructure. 
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

