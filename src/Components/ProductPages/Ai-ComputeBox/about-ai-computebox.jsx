import React, { useEffect } from "react";
import "./about-ai-computebox.css";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Modelbutton from "../../Button comp/Modelbutton";
// Temporary images (same as provided)
import visionBox from "../../../assets/ai-compute-box/ai-compute-box-thumb.png";

const AboutAIComputeBox = () => {
  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
      Toolbar: { display: [{ id: "close", position: "right" }] },
      Thumbs: false,
      dragToClose: true,
      animated: true,
      compact: false,
    });

    return () => Fancybox.destroy();
  }, []);

  return (
    <section className="about-compute-box container-fluid mt-1 fade-in">
      <div className="row justify-content-center">
        <div className="col-lg-11">
          <div className="row">
            {/* LEFT: TEXT SECTION */}
            <div className="col-lg-8 mt-3 aboutComputePara text-left text-lg-start">
              <h2 className="titlePrimary">
                AI Vision Box for Intelligent roads
              </h2>

              <p className="paragraphtext">
                The Robust AI Vision Box from e-con Systems is an advanced edge computing platform designed for vehicle and pedestrian detection, incident detection, and intersection analytics.
              </p>

              <p className="paragraphtext">
                Built on industry-leading platforms such as NVIDIA® Orin NX, Qualcomm®, and Ambarella®, this AI vision box combines edge AI performance, ruggedized reliability, and multi-camera connectivity to deliver real-time computer vision analytics—directly at the edge.
              </p>

              <p className="paragraphtext">
               It enables on-device ANPR, vehicle classification, and behavioral analytics, transmitting only final metadata to the cloud. This minimizes bandwidth usage, reduces latency, and ensures faster response times for critical traffic events. 
              </p>

              {/* BUTTONS */}
              <div className="d-flex flex-wrap gap-3 mt-3 justify-content-center justify-content-lg-start text-center text-lg-start">
                {/* Documents */}
                <div className="cardKnowMore p-3">
                  <p className="mb-2 fw-semibold section-label">Documents:</p>
                  <Modelbutton 
            className="computebox-download-button gtm-btn" 
            text="Download" 
            backgroundColor="#1e2f7ac9" 
            animationColor="#69ba2f" 
            hoverColor="#00aeef"
            padding="5px 15px"
            fontSize="14px" 
            productName={`ProductDocument`}
            title={`AI Vision Box`}
            docName="e-con-its-camera-brochure-ai-vision-box.pdf"
            type= 'download'
          />
                </div>

                {/* Contact Us */}
                <div className="cardKnowMore p-3">
                  <p className="mb-2 fw-semibold section-label">
                    For more details:
                  </p>
                <Modelbutton 
            className="computebox-contactbutton gtm-btn" 
            text="Contact Us" 
            backgroundColor="#69ba2f" 
            animationColor="#00aeef" 
            hoverColor="#00aeef"
            padding="5px 15px"
            fontSize="14px" 
            productName={`AI Compute Box`}
            type= 'contact'
          />
                </div>
              </div>
            </div>

            {/* RIGHT: IMAGE CAROUSEL */}
            <div className="col-lg-4 px-0 d-flex flex-column">
              <img src={visionBox} alt="AI Compute Box" className="img-fluid mb-3" />
            </div>
            {/* END CAROUSEL */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutAIComputeBox;
