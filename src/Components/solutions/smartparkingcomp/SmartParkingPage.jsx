import React from "react";
import Banner from "./bannercomp/Banner";
import Overview from "./overviewcomp/Overview";
import Features from "./featurescomp/Features";
import Solutions from "./solutionscomp/Solutions";
import "./SmartParkingPage.css";
import { Helmet } from "react-helmet-async";

function SmartParkingPage() {
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
        name: "Solutions",
        item: `${siteUrl}/solutions`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "Smart Parking Management",
        item: `${siteUrl}/solutions/smart-parking-management`,
      },
    ],
  };

  return (
    <div className="smart-parking-page">

<Helmet>
  
  <title>Smart Parking Camera Solutions | ANPR & Edge AI | e-con Systems  </title>
  <meta name='description' content='Complete AI vision solutions for parking management — ANPR 
access control, ticketless entry, occupancy detection, and enforcement — powered by 
edge AI cameras.' />
 <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
</Helmet>
      
      <Banner />
      <div>
        <Overview />
        <Features />
        <Solutions />
      </div>
    </div>
  );
}

export default SmartParkingPage;
