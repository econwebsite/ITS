import React from "react";
import Computeboxbanner from "./ComputeBoxbanner";
import AboutAIComputeBox from "./about-ai-computebox";
import WhyComputebox from "./whycomputebox";
import Computeboxvariants from "./computebox-variants";
import Computeapplication from "./compute-application";
import Computevision from "./ComputeVision";
import SmartIntersection from "./Smartintersection";
import ComputeboxFaq from "./ComputeboxFaq";
import Recomentedproducts from "./Recomentedproducts";
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AiComputeBox = () => {
  const siteUrl = typeof window !== 'undefined'
    ? window.location.origin.replace(/\/$/, '')
    : 'https://its.e-consystems.com';

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${siteUrl}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Products',
        item: `${siteUrl}/market`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'AI Vision Box',
        item: `${siteUrl}/products/ai-vision-box`,
      },
    ],
  };

  return (
    <div className="ptz-page">
      <Helmet>
        <title>Rugged AI Vision Box for Traffic Analytics & Smart Intersections</title>
        <meta name='description' content='Explore e-con Systems rugged AI Vision Box for edge-based ANPR, vehicle detection, and incident analytics. Delivers up to 100 TOPS and multi-camera support for intelligent roads.' />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      <Computeboxbanner />
        {/* <nav className="ai-compute-box-breadcrumbs" aria-label="Breadcrumb">
        <Link to="/" className="ai-compute-box-breadcrumb-link">
          Home
        </Link>
        <span className="ai-compute-box-breadcrumb-separator" aria-hidden="true">
          ›
        </span>
        <Link to="/market" className="ai-compute-box-breadcrumb-link">
          Products
        </Link>
        <span className="ai-compute-box-breadcrumb-separator" aria-hidden="true">
          ›
        </span>
        <span className="ai-compute-box-breadcrumb-current">AI Vision Box</span>
      </nav> */}
      <AboutAIComputeBox />
      <WhyComputebox />
      <Computeboxvariants />
      <Computevision />
      <SmartIntersection />
      <Computeapplication />
      <ComputeboxFaq />
      <Recomentedproducts />
    </div>
  );
};

export default AiComputeBox;
