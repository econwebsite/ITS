import React from 'react'
import ParkingEnforcementOverview from './overviewcomp/ParkingEnforcementOverview'
import EnforcementGaps from './gapscomp/EnforcementGaps'
import ViolationTypes from './violationcomp/ViolationTypes'
import ParkingEnforcementHowItWorks from './howitworkscomp/ParkingEnforcementHowItWorks'
import WhyChooseEnforcement from './whychoosecomp/WhyChooseEnforcement'
import ParkingAccessControlBanner from './bannercomp/ParkingEnforcementBanner'
import EnforcementReference from './referencecomp/EnforcementReference'
import { Helmet } from 'react-helmet-async'

function ParkingEnforcementPage() {

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
        name: "Parking Enforcement",
        item: `${siteUrl}/solutions/parking-enforcement-camera`,
      },
      
    ],
  };
  return (
   <div>
 <Helmet>
        
        <title>ANPR Cameras for Automated Curb & Parking Enforcement   </title>
        <meta name='description' content='e-con Systems ANPR cameras power automated curb and parking enforcement. Built for outdoor use, they deliver image quality, connectivity, and open integration for city-scale enforcement systems.' />
       <script type="application/ld+json">
                {JSON.stringify(breadcrumbSchema)}
              </script>
      </Helmet>

<ParkingAccessControlBanner/>

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
   Parking Enforcement 
  </span>
</div>
     <ParkingEnforcementOverview />

    <EnforcementGaps/>

    <ViolationTypes/>

    <ParkingEnforcementHowItWorks/>

    <WhyChooseEnforcement/>
<EnforcementReference/>
   
   </div>

  )
}

export default ParkingEnforcementPage