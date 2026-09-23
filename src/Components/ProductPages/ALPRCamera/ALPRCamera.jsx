import React from "react";
import ALPRBanner from "./ALPRBanner";
import AboutALPR from "./AboutALPR";
import ALPRHighlights from "./ALPRHighlights";
import ALPRKeyFeatures from "./ALPRKeyFeatures";
import ALPRFeaturesAlternating from "./ALPRFeaturesAlternating";
import ALPRApplications from "./ALPRApplications";
import ALPRFaq from "./ALPRFaq";
import { Helmet } from 'react-helmet-async';

const ALPRCamera = () => {
  return (
    <div className="alpr-page">
      <Helmet>
        <title>Reliable license plate recognition for low-light and high-speed traffic</title>
        <meta name='description' content='TrafficSenz is a rugged, AI-enabled ANPR camera designed for ITS, multi-lane free-flow tolling, Advanced Traffic Management Systems (ATMS), and law enforcement applications. ' />
      </Helmet>
      <ALPRBanner />
      <AboutALPR />
      <ALPRHighlights />
      <ALPRFeaturesAlternating />
      <ALPRApplications />
      {/* <ALPRFaq /> */}
    </div>
  );
};

export default ALPRCamera;
