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
        <title>Edge AI ALPR Camera for MLFF Tolling & ITS | TrafficSenz</title>
        <meta name='description' content='TrafficSenz&trade; is an Edge AI ANPR camera for ITS & MLFF tolling. Captures plates at 300 km/h with global shutter, 850 nm IR, and on-camera ANPR, MMR & classification. ' />
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
