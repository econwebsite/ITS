import React from 'react';
import "./CaseStudies.css";
import InsightsAlpr from "../../../../assets/Hubpages/delivering-reliable-edge-ai-alpr-solution-thumb-en.jpg"
import NextGenToll from "../../../../assets/Hubpages/powering-next-generation-tolling-450x300.jpg"
import CameraForSTM from "../../../../assets/Hubpages/camera-for-smart-traffic-management-system-450x300.jpg"
import SmartTraffic from "../../../../assets/Hubpages/smart-traffic-case-study-450x300.jpg";
const CaseStudiesData = [
  {
    title: "Delivering Reliable Edge AI ALPR Solution for Fixed and Mobile Traffic Enforcement",
    link: "https://www.e-consystems.com/resources/case-studies/delivering-reliable-edge-ai-alpr-solution-for-fixed-and-mobile-traffic-enforcement.asp",
    image: InsightsAlpr,
  },
  {
    title: "Powering Next-Generation Multi-Lane Free-Flow (MLFF) Tolling with End-to-End Vision Solutions",
    link: "https://www.e-consystems.com/resources/case-studies/powering-next-generation-tolling-with-end-to-end-vision-solutions.asp",
    image: NextGenToll,
  },
  {
    title: "Building a world-class, camera for Smart Traffic Management System",
    link : "https://www.e-consystems.com/resources/case-studies/camera-for-smart-traffic-management-system.asp",
    image: CameraForSTM,
  },
  {
    title: "Enabling better city management with an HDR camera for smart traffic",
    link: "https://www.e-consystems.com/resources/case-studies/smart-traffic-case-study.asp",
    image: SmartTraffic,
  },
   {
    title: "Adding vision power to a parking lot management system for real-time guidance",
    link: "https://www.e-consystems.com/resources/case-studies/parking-lot-management-case-study.asp",
    image: "https://d2u56hfpsewfc3.cloudfront.net/images/markets/case-study/all-case-study/parking-lot-management.jpg",
  }
];
const CaseStudies = () => {
 return (
    <div className="CaseStudytab-container">
      <div className="CaseStudytab-grid">
        {CaseStudiesData.map((CaseStudy, index) => (
          <div className="CaseStudytab-card" key={index}>
            <a href={CaseStudy.link} target="_blank">
            <img src={CaseStudy.image} alt="placeholder" className="CaseStudytab-image" />
            <div className="CaseStudytab-content">
              <h3 className="CaseStudytab-cardTitle">{CaseStudy.title}</h3>
             
            </div>
          </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CaseStudies;
