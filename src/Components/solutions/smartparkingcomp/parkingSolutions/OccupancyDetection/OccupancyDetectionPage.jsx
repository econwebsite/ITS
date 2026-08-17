import React from "react";
import OccupancyDetectionBanner from "./bannercomp/OccupancyDetectionBanner";
import OccupancyDetectionOverview from "./overviewcomp/OccupancyDetectionOverview";
import OccupancyChallenges from "./challengescomp/OccupancyChallenges";
import OccupancyUseCases from "./usecasescomp/OccupancyUseCases";
import OccupancyHowItWorks from "./howitworkscomp/OccupancyHowItWorks";
import WhyChooseOccupancy from "./whychoosecomp/WhyChooseOccupancy";

import "./OccupancyDetectionPage.css";

function OccupancyDetectionPage() {
  return (
    <div className="occupancy-detection-page">

      <OccupancyDetectionBanner />

      <OccupancyDetectionOverview />

      <OccupancyChallenges />

      <OccupancyUseCases />

      <OccupancyHowItWorks />

      <WhyChooseOccupancy />

    </div>
  );
}

export default OccupancyDetectionPage;