import React from "react";
import OccupancyDetectionBanner from "./bannercomp/OccupancyDetectionBanner";
import OccupancyDetectionOverview from "./overviewcomp/OccupancyDetectionOverview";
import OccupancyChallenges from "./challengescomp/OccupancyChallenges";
import OccupancyUseCases from "./usecasescomp/OccupancyUseCases";
import OccupancyHowItWorks from "./howitworkscomp/OccupancyHowItWorks";
import WhyChooseOccupancy from "./whychoosecomp/WhyChooseOccupancy";

import "./OccupancyDetectionPage.css";
import { Helmet } from "react-helmet-async";

function OccupancyDetectionPage() {
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
        name: "Occupancy Detection",
        item: `${siteUrl}/solutions/parking-occupancy-detection-camera`,
      },
      
    ],
  };
  return (
    <div className="occupancy-detection-page">
<Helmet>
  
  <title>Parking Occupancy Detection Cameras  </title>
  <meta name='description' content='e-con Systems AI vision cameras enable accurate parking occupancy detection.
   For outdoor, indoor and structured parking,
   they classify space-level occupancy in real time with low-latency API data.' />
 <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
</Helmet>



      <OccupancyDetectionBanner />
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
    Occupancy Detection
  </span>
</div>
      <OccupancyDetectionOverview />

      <OccupancyChallenges />

      <OccupancyUseCases />

      <OccupancyHowItWorks />

      <WhyChooseOccupancy />

    </div>
  );
}

export default OccupancyDetectionPage;