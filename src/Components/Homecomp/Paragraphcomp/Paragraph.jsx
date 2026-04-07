import React from 'react';
import './Paragraph.css';

const Paragraph = () => {
  return (
    <div className="containerparagraph">
      <div className="mainContainer">
        <p className="paragraphtext">
       e-con Systems’ ITS vision solutions deliver reliable, high-quality visual intelligence for traffic management, enforcement, and tolling applications. Designed for real-world roadside conditions, we support Vision Zero initiatives by accurately capturing fast-moving vehicles in all lighting and weather conditions.
        </p>
        <p className="paragraphtext">
        Advanced imaging technologies such as global shutter, HDR, low-light optimization, high resolution, and multi-vision synchronization are combined with an edge-based AI Vision Box. This enables real-time analysis, low-latency decision-making, and reduced bandwidth dependency. The result is precise detection and actionable insights across complex traffic scenarios.
        </p>
        <p className="paragraphtext">
       Built for 24/7 outdoor operation, e-con Systems’ ITS vision solutions are rugged and IP-rated. They integrate seamlessly into existing infrastructure and comply with NEMA, FCC Part 15, NDAA, and BABA standards. This delivers improved enforcement accuracy and safer, smarter roads powered by edge AI vision intelligence.
        </p>
      </div>
    </div>
  );
};

export default Paragraph;
