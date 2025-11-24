import React from "react";
import Clovisbanner from "./Clovisbanner";
import Clovisoverview from "./ClovisEvms";
import ClovisArchitecture from "./ClovisArchitecture";
import ClovisEvmsWhy from "./ClovisEvmsWhy";
import ApplicationsEvms from "./applications-evms";
import ClovisEvidencePipeline from "./ClovisEvidencePipeline";

const ClovisCentral = () => {
  return (
    <div className="ptz-page">
       <Clovisbanner/>
       <Clovisoverview/>
       <ClovisArchitecture/>
       <ClovisEvmsWhy/>
       <ApplicationsEvms/>
       <ClovisEvidencePipeline/>
    </div>
  );
};

export default ClovisCentral;