import React from "react";
import "./ViolationTypes.css";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import DirectionsBusIcon from "@mui/icons-material/DirectionsBus";
import DirectionsTransitIcon from "@mui/icons-material/DirectionsTransit";
import DirectionsBikeIcon from "@mui/icons-material/DirectionsBike";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import DoNotDisturbIcon from "@mui/icons-material/DoNotDisturb";
import EvStationIcon from "@mui/icons-material/EvStation";
const violationTypes = [
  { icon: <LocalParkingIcon />,
    title: "Double Parking",
    description: "standing violation in the travel lane",
    number: "01",
  },
  { icon: <DirectionsBusIcon />,
    title: "Bus Stop Blocking",
    description: " vehicle occupying a transit stop zone",
    number: "02",
  },
  {icon: <DirectionsTransitIcon />,
    title: "Transit-Only Lane (TOL) Violatio",
    description: " non-transit vehicle in a bus-only lane",
    number: "03",
  },
  { icon: <DirectionsBikeIcon />,
    title: "Bike Lane Incursion",
    description: "vehicle blocking a protected cycle track",
    number: "04",
  },
  { icon: <LocalShippingIcon />,
    title: "Loading Zone Overstay",
    description: " dwell time exceeds authorized limit",
    number: "05",
  },
  {icon: <AccessTimeIcon />,
    title: "Electronic Chalkin",
    description: " two-pass ANPR for time-limit zone overstay",
    number: "06",
  },
  {icon: <DoNotDisturbIcon />,
    title: "No-Standing Zone Violation",
    description: "any stop in a posted no-standing zone",
    number: "07",
  },
  {icon: <EvStationIcon />,
    title: "EV Charging Misuse (ICEing)",
    description: " non-EV occupying an EV charging bay",
    number: "08",
  },
];

const ViolationTypes = () => {
  return (
    <section className="violation-types">
      <div className="violation-types-container">

        <div className="violation-types-header">
          <span className="violation-types-tag">
            ANPR CAPABILITIES
          </span>

          <h3>
            Violation Types Detected by Our {" "}
            <span>ANPR Cameras</span>
          </h3>
        </div>

        <div className="violation-types-grid">
          {violationTypes.map((violation, index) => (
            <article
              className={`violation-card ${
                index === 0 ? "violation-card-featured" : ""
              }`}
              key={violation.title}
            >
              <div className="violation-card-number">
                {violation.icon}
              </div>

              <div className="violation-card-content">
                <h3>{violation.title}</h3>
                <p>{violation.description}</p>
              </div>

              <div className="violation-card-accent"></div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ViolationTypes;