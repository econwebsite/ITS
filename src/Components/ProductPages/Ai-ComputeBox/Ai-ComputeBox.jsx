import React from "react";
import Computeboxbanner from "./ComputeBoxbanner";
import AboutAIComputeBox from "./about-ai-computebox";
import WhyComputebox from "./whycomputebox";
import Computeboxvariants from "./computebox-variants";
import Computeapplication from "./compute-application";
import VisionIntelligence from "./vision-intelligence";
import Computevision from "./ComputeVision";
import SmartIntersection from "./Smartintersection";


const AiComputeBox = () => {
  return (
    <div className="ptz-page">
        <Computeboxbanner/>
        <AboutAIComputeBox/>
        <WhyComputebox/>
        <Computeboxvariants/>
        <Computeapplication/>
        <VisionIntelligence/>
        <Computevision/>
        <SmartIntersection/>
    </div>
  );
};

export default AiComputeBox;
