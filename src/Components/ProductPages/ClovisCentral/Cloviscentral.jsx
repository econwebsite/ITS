import React from "react";
import Clovisbanner from "./Clovisbanner";
import Clovisoverview from "./ClovisEvms";
import ClovisArchitecture from "./ClovisArchitecture";
import ClovisEvmsWhy from "./ClovisEvmsWhy";
import ApplicationsEvms from "./applications-evms";
import ClovisEvidencePipeline from "./ClovisEvidencePipeline";
import { Helmet } from 'react-helmet-async';
const ClovisCentral = () => {
  return (
    
    <div className="ptz-page">
       <Helmet>
                <title>Evidence Video Management System for Intelligent Traffic Systems</title>
                <meta name='description' content='Centralized EVMS for traffic enforcement and smart cities, supporting secure ingestion, tagging, storage, and audit-ready video evidence.' />
            </Helmet>
       <Clovisbanner/>
       <Clovisoverview/>
       <ClovisArchitecture/>
       <ClovisEvmsWhy/>
       <ClovisEvidencePipeline/>
       <ApplicationsEvms/>
    </div>
  );
};

export default ClovisCentral;