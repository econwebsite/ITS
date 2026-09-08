import React from "react";
import "./ParkingAccessControlPage.css";

import ParkingAccessControlBanner from "./bannercomp/ParkingAccessControlBanner";
import ParkingAccessControlOverview from "./overviewcomp/ParkingAccessControlOverview";
import AccessControlChallenges from "./challengescomp/AccessControlChallenges";
import AccessControlUseCases from "./usecasescomp/AccessControlUseCases";
import ParkingAccessControlHowItWorks from "./howitworkscomp/ParkingAccessControlHowItWorks";
import WhyChooseAccessControl from "./whychoosecomp/WhyChooseAccessControl";
import { Helmet } from "react-helmet-async";

const ParkingAccessControlPage = () => {
    const siteUrl =
    typeof window !== "undefined"
      ? window.location.origin.replace(/\/$/, "")
      : "https://its.e-consystems.com";
   const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${siteUrl}/`,
      },
       {
        "@type": "ListItem",
        position: 2,
        name: "Smart Parking Management",
        item: `${siteUrl}/solutions/smart-parking-management`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Parking Access Control",
        item: `${siteUrl}/solutions/parking-access-control-camera`,
      },
      
    ],
  };
  return (
    <div className="parking-access-control-page">

      <Helmet>
        
        <title>ANPR Cameras for Access Control and Parking  </title>
        <meta name='description' content='e-con Systems ANPR cameras power access control and parking. From garages to open lots, they deliver fast, accurate license plate recognition at entry and exit for reliable parking management' />
       <script type="application/ld+json">
                {JSON.stringify(breadcrumbSchema)}
              </script>
      </Helmet>
      <ParkingAccessControlBanner />
<div className="occupancy-breadcrumb">
  <a
    href="https://www.e-consystems.com/"
    title="Go to Home Page"
  >
    Home
  </a>

  <span>&gt;</span>

  <a href="/solutions/smart-parking-management">
    Smart Parking Management
  </a>

  <span>&gt;</span>

  <span className="breadcrumb-current">
   Parking Access Control
  </span>
</div>
      <ParkingAccessControlOverview />

      <AccessControlChallenges />

      <AccessControlUseCases />

      <ParkingAccessControlHowItWorks />

      <WhyChooseAccessControl />
    </div>
  );
};

export default ParkingAccessControlPage;