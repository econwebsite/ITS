import Modelbutton from "../../../Button comp/Modelbutton";
import "./Solutions.css";
import { Link } from "react-router-dom";
import ParkingAccessControl from "../assets/Parking-Access-Control.png";
import OccupancyDetection from "../assets/Occupancy-Detection.png";
import ParkingEnforcement from "../assets/Parking-Enforcement.png";

const solutions = [
  {
    number: "01",
    title: "Parking Access Control",
    description:
"Automate vehicle entry and exit with our ANPR cameras that recognize license plates at entry and exit points to automate access, validate payments, and enable ticketless parking.",   
 image: ParkingAccessControl,
    link: "/solutions/parking-access-control-camera",
  },
  {
    number: "02",
    title: "Occupancy Detection",
    description:
      "Track parking space availability in real time using our AI vision cameras, empowering drivers to find spots faster and operators to manage capacity efficiently.",
    image: OccupancyDetection,
    link: "/solutions/parking-occupancy-detection-camera",
  },
  {
    number: "03",
    title: "Parking Enforcement",
    description:
      "Detect violations such as overstay, no-permit, and restricted-zone parking to support automated enforcement.",
    image: ParkingEnforcement,
    link: "/solutions/parking-enforcement-camera",
  },
];

const Solutions = () => {
  return (
    <section className="parking-solutions">
      {/* Header */}
      <div className="parking-solutions-header">
        <h3 className="parking-solutions-badge">
          Our Three Solutions
        </h3>

        {/* <h2>
          Complete Vision Solutions for
          <span> Smart Parking Management</span>
        </h2> */}

      </div>

      {/* Solution Cards */}
      <div className="parking-solutions-grid">
        {solutions.map((solution) => (
          <Link
          to={solution.link}
            key={solution.number}
            className={`parking-solution-card ${
              solution.number === "02" ? "parking-solution-dark" : ""
            }`}
          >
            {/* Card Content */}
            <div className="parking-solution-info">
              <div className="parking-solution-heading">
                <div className="parking-solution-number">
                  {solution.number}
                </div>

                <h3>{solution.title}</h3>
              </div>

              <div className="parking-solution-line"></div>

              <p>{solution.description}</p>

              <div
              
                className="parking-solution-link"
              >
                Know More <span>→</span>
              </div>
            </div>

            {/* Card Image */}
            <div className="parking-solution-image">
              <img
                src={solution.image}
                alt={solution.title}
              />
            </div>

          
          </Link>
        ))}
      </div>

    

      {/* Additional Use Cases */}
      <div className="parking-usecases">
      

        <p>
       Our scalable architecture also extends to additional use cases such as multi-level garage 
monitoring and EV charging bay detection. 
        </p>

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
          productName="Smart Parking Management"
          title="Smart Parking Management"
        />
      </div>
    </section>
  );
};

export default Solutions;