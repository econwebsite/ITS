import React from "react";
import "./AccessControlUseCases.css";
import LocalParkingIcon from "@mui/icons-material/LocalParking";
import PaymentIcon from "@mui/icons-material/Payment";
import BadgeIcon from "@mui/icons-material/Badge";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import EventIcon from "@mui/icons-material/Event";
import EvStationIcon from "@mui/icons-material/EvStation";
import LocationCityIcon from "@mui/icons-material/LocationCity";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import BlockIcon from "@mui/icons-material/Block";
const useCases = [
  {
    icon: <LocalParkingIcon />,
    title: "Gated Entry/Exit ",
    description: "barrier lift automated on plate match",
  },
  {
    icon: <PaymentIcon />,
    title: "Ticketless Payment Validation",
    description: " plate tied to payment, no ticket issued or collected",
  },
  {
     icon: <BadgeIcon />,
    title: "Monthly/Virtual Permit ",
    description: "allow-list management by plate, no physical pass",
  },
  {
    icon: <PersonAddIcon />,
    title: "Visitor and Guest Access",
    description:
      " pre-registered plates cleared for single or time-limited entry",
  },
  {
     icon: <EventIcon />,
    title: "Event Parking Management",
    description:
      " bulk permit activation and deactivation by plate list",
  },
  {
    icon: <EvStationIcon />,
    title: "EV Bay Authorized Access",
    description:
      " EV charging bays restricted to registered EVs only",
  },
  {
    icon: <LocationCityIcon />,
    title: "Multi-Site/Campus Access",
    description:
      "a single plate database across multiple entry points",
  },
  {
    icon: <DirectionsCarIcon />,
    title: "Tailgating Detection ",
    description:
      " alerts triggered by a second plate read within the barrier cycle",
  },
  {
   icon: <BlockIcon />,
    title: "Deny-List Enforcement",
    description:
      " flagged plates automatically blocked at any entry point",
  },
];

const AccessControlUseCases = () => {
  return (
    <section className="access-control-usecases">
      <div className="access-control-usecases-container">

        <div className="access-control-usecases-header">
          <span>ANPR USE CASES</span>

          <h3> ANPR Use Cases Supported by Our Cameras</h3>
        </div>

        <div className="access-control-usecases-grid">
          {useCases.map((useCase,index) => (
            <article
              className="access-control-usecase-card"
              key={index}
            >
              <div className="access-control-usecase-number">
         {useCase.icon}
              </div>

              <div className="access-control-usecase-content">
                <h3>{useCase.title}</h3>
                <p>{useCase.description}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default AccessControlUseCases;