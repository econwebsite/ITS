import React, { useEffect } from "react";
import "./about-ai-computebox.css";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

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
                AI Compute Box for Intelligent Intersections
              </h2>

              <p className="paragraphtext">
                The Robust AI Vision Box from e-con Systems is an advanced edge computing platform designed for vehicle and pedestrian detection, incident management, and intersection analytics.
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
                  <button className="btn btn-success btn-with-icon btn-darkgreen">
                    <i className="bi bi-download me-2"></i> Download
                  </button>
                </div>

                {/* Contact Us */}
                <div className="cardKnowMore p-3">
                  <p className="mb-2 fw-semibold section-label">
                    For more details:
                  </p>
                  <button className="btn btn-primary btn-with-icon contactus-product">
                    Contact Us
                  </button>
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
