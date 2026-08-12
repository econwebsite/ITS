import Modelbutton from "../../../Button comp/Modelbutton";
import "./Solutions.css";

import ParkingAccessControl from "../assets/Parking-Access-Control.png";
import OccupancyDetection from "../assets/Occupancy-Detection.png";
import ParkingEnforcement from "../assets/Parking-Enforcement.png";

const solutions = [
  {
    number: "01",
    title: "Parking Access Control",
    description:
"Our ANPR cameras recognize license plates at entry and exit points to automate access, validate payment, and enable ticketless parking.",    image: ParkingAccessControl,
    link: "/solutions/parking-access-control-camera",
  },
  {
    number: "02",
    title: "Occupancy Detection",
    description:
      "Our AI vision cameras monitor space-level availability in real time, empowering drivers to find spots faster and operators to manage capacity efficiently.",
    image: OccupancyDetection,
    link: "/solutions/parking-occupancy-detection-camera",
  },
  {
    number: "03",
    title: "Parking Enforcement",
    description:
      "Our ANPR cameras detect violations such as overstay, no-permit, and restricted-zone parking to support automated enforcement.",
    image: ParkingEnforcement,
    link: "/solutions/parking-enforcement-camera",
  },
];

const Solutions = () => {
  return (
    <section className="parking-solutions">
      {/* Header */}
      <div className="parking-solutions-header">
        <span className="parking-solutions-badge">
          OUR THREE SOLUTIONS
        </span>

        <h2>
          Complete Vision Solutions for
          <span> Smart Parking Management</span>
        </h2>

        <p className="parking-solutions-subtitle">
          AI-powered vision technologies that streamline operations,
          enhance user experience, and maximize parking efficiency.
        </p>
      </div>

      {/* Solution Cards */}
      <div className="parking-solutions-grid">
        {solutions.map((solution) => (
          <div
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

              <a
                href={solution.link}
                className="parking-solution-link"
              >
                Know More <span>→</span>
              </a>
            </div>

            {/* Card Image */}
            <div className="parking-solution-image">
              <img
                src={solution.image}
                alt={solution.title}
              />
            </div>

          
          </div>
        ))}
      </div>

      {/* Benefits
      <div className="parking-benefits">
        <div className="parking-benefit">
          <div className="parking-benefit-icon">
            ◴
          </div>

          <div>
            <h4>Improve Efficiency</h4>
            <p>
              Automate operations and reduce manual effort.
            </p>
          </div>
        </div>

        <div className="parking-benefit">
          <div className="parking-benefit-icon">
            ◇
          </div>

          <div>
            <h4>Enhance Security</h4>
            <p>
              Accurate monitoring and real-time alerts for safer parking.
            </p>
          </div>
        </div>

        <div className="parking-benefit">
          <div className="parking-benefit-icon">
            ↗
          </div>

          <div>
            <h4>Increase Revenue</h4>
            <p>
              Optimize space utilization and boost collections.
            </p>
          </div>
        </div>
      </div> */}

      {/* Additional Use Cases */}
      <div className="parking-usecases">
        <h3>Additional Use Cases</h3>

        <p>
          Our scalable architecture also extends to additional use cases
          such as multi-level garage monitoring and EV charging bay detection.
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