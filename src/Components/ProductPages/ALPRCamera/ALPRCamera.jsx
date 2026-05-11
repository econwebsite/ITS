import React from "react";
import ALPRBanner from "./ALPRBanner";
import AboutALPR from "./AboutALPR";
import ALPRKeyFeatures from "./ALPRKeyFeatures";
import ALPRFeaturesAlternating from "./ALPRFeaturesAlternating";
import ALPRApplications from "./ALPRApplications";
import ALPRFaq from "./ALPRFaq";
import { Helmet } from 'react-helmet-async';

const ALPRCamera = () => {
  return (
    <div className="alpr-page">
      <Helmet>
        <title>AI-Enabled 8MP ALPR Camera for Traffic Analytics & Parking</title>
        <meta name='description' content='e-con Systems AI-enabled 8MP ALPR camera with edge AI analytics for vehicle identification, parking monitoring, and traffic insights in low- to medium-speed environments.' />
      </Helmet>
      <ALPRBanner />
      <AboutALPR />
      <ALPRFeaturesAlternating />
      <ALPRApplications />
      <ALPRFaq />
    </div>
  );
};

export default ALPRCamera;
