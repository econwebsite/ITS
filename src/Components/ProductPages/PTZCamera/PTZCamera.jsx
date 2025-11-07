import React from "react";
import PTZBanner from "./PTZBanner";
import AboutProduct from "./about-product";
import PTZSpecs from "./ptz-specs";
import PTZFeatures from "./ptz-features";
import PTZApplications from "./ptz-applications";
import PTZComparison from "./ptz-comparison";
import KeyFeatures from "./KeyFeatures";
import ProductVariants from "./ProductVariants";
import Certifications from "./Certifications";
import "./PTZCamera.css";

const PTZCamera = () => {
  return (
    <div className="ptz-page">
      <PTZBanner />

      {/* <section className="ptz-content">
        <h2>AI-Powered PTZ Cameras</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          error laudantium provident, similique eum necessitatibus ea molestiae
          tempora incidunt cumque ad cum dolorum mollitia minus dolore. Tempora
          qui exercitationem nulla?
        </p>
      </section> */}
       <AboutProduct />
        <PTZFeatures/>
         <PTZSpecs />
        <PTZApplications/>
        <PTZComparison/>
      {/* Key Features Section */}
      {/* <KeyFeatures /> */}
      {/* <ProductVariants />
      <Certifications /> */}
    </div>
  );
};

export default PTZCamera;
