import React from "react";
import Computeboxbanner from "./ComputeBoxbanner";
import AboutAIComputeBox from "./about-ai-computebox";
import WhyComputebox from "./whycomputebox";
import Computeboxvariants from "./computebox-variants";
import Computeapplication from "./compute-application";
import Computevision from "./ComputeVision";
import SmartIntersection from "./Smartintersection";
import { Helmet } from 'react-helmet-async';

const AiComputeBox = () => {
  return (
    <div className="ptz-page">


      <Helmet>
        <title>AI Vision Box for Intelligent Intersections & Traffic Analytics</title>
        <meta name='description' content='The Robust AI Vision Box from e-con Systems is an advanced edge computing platform designed for vehicle and pedestrian detection, incident management, and intersection analytics.' />
      </Helmet>
      <Computeboxbanner />
      <AboutAIComputeBox />
      <WhyComputebox />
      <Computeboxvariants />
      <Computevision />
      <SmartIntersection />
      <Computeapplication />
    </div>
  );
};

export default AiComputeBox;
