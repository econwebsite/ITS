import React from 'react';
import './computebox-variants.css';
import Modelbutton from '../../Button comp/Modelbutton';
// Sample data
const VARIANTS = [
  {
    model: 'A-Series',
    platform: 'Ambarella',
    aiPerformance: '15 TOPS',
    useCases: 'Optimized for low-power and solar-based deployments',
  },
  {
    model: 'Q-Series',
    platform: 'Qualcomm',
    aiPerformance: '48 TOPS',
    useCases: 'Mid-power, multi-camera capable platform',
  },
  {
    model: 'N-Series',
    platform: 'NVIDIA Orin NX',
    aiPerformance: 'Up to 157 TOPS',
    useCases: 'High-performance platform with extensive multi-camera support',
  },
];

function ComputeBoxVariants() {
  return (
    <section className="compute-box-variants">
      <h2>AI Vision Box Variants</h2>
      <div className="variant-table">
        <div className="variant-header">
          <span>Platform</span>
          <span>AI Performance</span>
          <span>Power & Scalability Profile</span>
        </div>
        {VARIANTS.map((v, i) => (
          <div className="variant-row" key={i}>
            <span>{v.platform}</span>
            <span>{v.aiPerformance}</span>
            <span>{v.useCases}</span>
            <span>  <Modelbutton 
            className="computebox-variantcontactbutton gtm-btn" 
            text="Contact Us" 
            backgroundColor="#69ba2f" 
            animationColor="#00aeef" 
            hoverColor="#00aeef"
            padding="5px 15px"
            fontSize="14px" 
            productName={`AI Compute Box - ${v.platform}`}
            type= 'contact'
          /></span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ComputeBoxVariants;