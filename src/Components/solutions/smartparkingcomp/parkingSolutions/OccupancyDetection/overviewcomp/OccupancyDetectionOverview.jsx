import React from "react";
import "./OccupancyDetectionOverview.css";

import occupancyImage from "../../../assets/smart-parking.png";

const OccupancyDetectionOverview = () => {
  return (
    <section className="occupancy-detection-overview">
      <div className="occupancy-detection-overview-container">

        <div className="occupancy-detection-overview-image">
          <img
            src={occupancyImage}
            alt="Occupancy Detection"
          />
        </div>

        <div className="occupancy-detection-overview-content">
          <span className="occupancy-detection-overview-tag">
            OCCUPANCY DETECTION
          </span>

          <h2>
            Real-Time Visibility for Every Parking Space
          </h2>

          <p>
            Only 5% of off-street parking locations generate real-time space
            availability data, and even that data is often wrong. Operators
            tend to rely on estimated counts, manual tallies, or stale sensor
            readings — flying blind while frustrated drivers follow guidance
            signs to a lot that turns out to be full.
          </p>

          <p>
            e-con Systems’ AI vision cameras are the imaging core of effective
            occupancy platforms. Suited to outdoor and structured parking
            environments, they classify space-level occupancy continuously and
            push API-ready data with low latency.
          </p>
        </div>

      </div>
    </section>
  );
};

export default OccupancyDetectionOverview;