import React from "react";
import "./OccupancyUseCases.css";

import LocalParkingIcon from "@mui/icons-material/LocalParking";
import ApartmentIcon from "@mui/icons-material/Apartment";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LoadingIcon from "@mui/icons-material/LocalShipping";
import EventIcon from "@mui/icons-material/Event";
import SignpostIcon from "@mui/icons-material/Signpost";
import PriceChangeIcon from "@mui/icons-material/PriceChange";
import AnalyticsIcon from "@mui/icons-material/Analytics";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const useCases = [
  {
    icon: <LocalParkingIcon />,
    title: "Surface Lot Monitoring",
    description: "space-level occupied/vacant status identified per bay",
  },
  {
    icon: <ApartmentIcon />,
    title: "Structured Parking (Multi-Level)",
    description: "floor-by-floor and zone-level availability",
  },
  {
    icon: <DirectionsCarIcon />,
    title: "On-Street Bay Monitoring",
    description: "individual bay occupancy along curbside corridors",
  },
  {
    icon: <LoadingIcon />,
    title: "Loading Zone Availability",
    description: "real-time dwell time and availability per loading bay",
  },
  {
    icon: <EventIcon />,
    title: "Event Surge Monitoring",
    description: "live count during peak arrival and departure windows",
  },
  {
    icon: <SignpostIcon />,
    title: "Parking Guidance System (PGS) Data Feed",
    description: "real-time availability feed for guidance signage",
  },
  {
    icon: <PriceChangeIcon />,
    title: "Dynamic Pricing Trigger",
    description:
      "rate changes triggered in real time based on occupancy threshold",
  },
  {
    icon: <AnalyticsIcon />,
    title: "Utilization Analytics",
    description: "dwell time, peak periods, and turnover rate per space",
  },
  {
    icon: <BookmarkBorderIcon />,
    title: "Reserved Space Monitoring",
    description:
      "alerts on unauthorized use of reserved or permit bays",
  },
];

const OccupancyUseCases = () => {
  return (
    <section className="occupancy-use-cases">
      <div className="occupancy-use-cases-container">

        <div className="occupancy-use-cases-header">
          <span>DETECTION USE CASES</span>

          <h2>Detection Use Cases of Our AI Vision Cameras</h2>
        </div>

        <div className="occupancy-use-cases-grid">
          {useCases.map((item, index) => (
            <article className="occupancy-use-case" key={item.title}>
              <div className="occupancy-use-case-icon">
                {item.icon}
              </div>

              <div className="occupancy-use-case-number">
                {String(index + 1).padStart(2, "0")}
              </div>

              <div className="occupancy-use-case-content">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OccupancyUseCases;