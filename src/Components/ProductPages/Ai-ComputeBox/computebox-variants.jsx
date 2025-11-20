import React from 'react';
import './computebox-variants.css';

// Sample data
const VARIANTS = [
  {
    model: 'A-Series',
    platform: 'Ambarella',
    aiPerformance: '15 TOPS',
    cameraInterface: '8× PoE',
    useCases: 'Smart parking, vehicle analytics',
  },
  {
    model: 'Q-Series',
    platform: 'Qualcomm',
    aiPerformance: '48 TOPS',
    cameraInterface: '8× GMSL2',
    useCases: 'Edge AI traffic analytics',
  },
  {
    model: 'N-Series',
    platform: 'NVIDIA Orin NX',
    aiPerformance: 'Up to 157 TOPS',
    cameraInterface: 'PoE / GMSL2 / Wireless',
    useCases: 'Intersection management, vehicle & pedestrian detection',
  },
];

function ComputeBoxVariants() {
  return (
    <section className="compute-box-variants">
      <h2>AI Compute Box Variants</h2>
      <div className="variant-table">
        <div className="variant-header">
          <span>Model</span>
          <span>Platform</span>
          <span>AI Performance</span>
          <span>Camera Interface</span>
          <span>Target Use Cases</span>
        </div>
        {VARIANTS.map((v, i) => (
          <div className="variant-row" key={i}>
            <span>{v.model}</span>
            <span>{v.platform}</span>
            <span>{v.aiPerformance}</span>
            <span>{v.cameraInterface}</span>
            <span>{v.useCases}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ComputeBoxVariants;