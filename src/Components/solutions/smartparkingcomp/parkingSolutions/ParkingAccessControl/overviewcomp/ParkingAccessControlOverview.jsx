import React from "react";
import "./ParkingAccessControlOverview.css";

import sideImage from "../../../../../../assets/solutionpage/smart-parking-management/Parking-access-control/side-image.jpg";

const ParkingAccessControlOverview = () => {
  return (
    <section className="parking-access-control-overview">
      <div className="parking-access-control-overview-container">

    

        {/* Content */}
        <div className="parking-access-control-overview-content">

          <h2  >
            Parking Access Control
          </h2>

         

          <p>
            Every paper ticket issued is a potential dispute, a queue, or a revenue leak. Tailgating at
barriers, lost-ticket claims, and manual permit management cost parking operators more
than most realize — operators who audit pre- and post-LPR deployments consistently find
8–18% revenue recovery from leakage alone.
          </p>

          <p>
           e-con Systems' ANPR cameras are the imaging core behind these access control platforms.
From underground garages to open surface lots, they deliver fast, accurate plate reads at
entry and exit points.
          </p>

        </div>


    {/* Image */}
        <div className="parking-access-control-overview-image">
          <img
            src={sideImage}
            alt="Parking Access Control"
          />
        </div>
      </div>
    </section>
  );
};

export default ParkingAccessControlOverview;