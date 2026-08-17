import React from "react";
import "./ParkingAccessControlPage.css";

import ParkingAccessControlBanner from "./bannercomp/ParkingAccessControlBanner";
import ParkingAccessControlOverview from "./overviewcomp/ParkingAccessControlOverview";
import AccessControlChallenges from "./challengescomp/AccessControlChallenges";
import AccessControlUseCases from "./usecasescomp/AccessControlUseCases";
import ParkingAccessControlHowItWorks from "./howitworkscomp/ParkingAccessControlHowItWorks";
import WhyChooseAccessControl from "./whychoosecomp/WhyChooseAccessControl";

const ParkingAccessControlPage = () => {
  return (
    <div className="parking-access-control-page">
      <ParkingAccessControlBanner />

      <ParkingAccessControlOverview />

      <AccessControlChallenges />

      <AccessControlUseCases />

      <ParkingAccessControlHowItWorks />

      <WhyChooseAccessControl />
    </div>
  );
};

export default ParkingAccessControlPage;