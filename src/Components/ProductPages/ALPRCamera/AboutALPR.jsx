import React, { useEffect } from "react";
import "./about-alpr.css";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Modelbutton from "../../Button comp/Modelbutton";
// Temporary images (replace later if needed)
import alprCameraImg from "../../../assets/bullet-camera/automatic-number-plate-recognition-camera-thumb.png";

const AboutALPR = () => {
  useEffect(() => {
    Fancybox.bind("[data-fancybox='gallery']", {
      Toolbar: {
        display: [{ id: "close", position: "right" }],
      },
      Thumbs: false,
      compact: false,
      animated: true,
      dragToClose: true,
    });

    return () => Fancybox.destroy();
  }, []);

  return (
    <section className="about-alpr container-fluid mt-1 fade-in">
      <div className="row justify-content-center">
        <div className="col-lg-11">
          <div className="row">
            {/* Left: Text Section */}
            <div className="col-lg-8 mt-3 aboutParaMain text-left text-lg-start ps-0">
              <h2 className="titlePrimary">
                AI-enabled 8MP ALPR Camera for Traffic Analytics & Parking Monitoring
              </h2>

              <p className="paragraphtext">
                e-con Systems' AI-enabled 8MP ALPR camera is built with high-resolution imaging, advanced ISP tuning, and edge-based AI analytics. It performs reliable license plate recognition, vehicle classification, and AI-powered traffic analytics, delivering actionable traffic insights in low- to medium-speed environments such as Smart Intersection Monitoring, Crosswalk Safety, and Parking Management.
              </p>

              <p className="paragraphtext">
                Designed for continuous outdoor operation, this IP67-rated ALPR camera features a low-power design with PoE support to enable flexible deployment in power-constrained and remote locations. It ensures reliable operation across fixed and solar-powered installations.
              </p>
            </div>
            <div className="col-lg-4 px-0 d-flex flex-column align-items-center justify-content-center">
              <div className="col-12 mx-auto">
                <a
                  href={alprCameraImg}
                  data-fancybox="gallery"
                  data-caption="ALPR Camera"
                >
                  <img
                    src={alprCameraImg}
                    className="carousel-image d-block mx-auto img-fluid"
                    alt="ALPR Camera"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-11">
          <div className="row aboutParaMain">
            <div className="d-flex flex-wrap gap-3 mt-3 justify-content-center justify-content-lg-start text-center text-lg-start">
              {/* Download Datasheet */}
              <div className="cardKnowMore p-3">
                <p className="mb-2 fw-semibold section-label">Datasheet:</p>
                <Modelbutton
                  className="alpr-cameravariant-button gtm-btn"
                  text="Download"
                  backgroundColor="#1e2f7ac9"
                  animationColor="#69ba2f"
                  hoverColor="#00aeef"
                  padding="10px 30px"
                  fontSize="14px"
                  productName={`ProductDocument`}
                  title={`ALPR Camera`}
                  docName="e-con-its-camera-brochure.pdf"
                  type='download'
                />
              </div>

              {/* Contact Us */}
              <div className="cardKnowMore p-3">
                <p className="mb-2 fw-semibold section-label">
                  For more details:
                </p>
                <Modelbutton
                  className="alpr-cameravariant-button gtm-btn"
                  text="Contact Us"
                  backgroundColor="#69ba2f"
                  animationColor="#00aeef"
                  hoverColor="#00aeef"
                  padding="10px 30px"
                  fontSize="14px"
                  productName={`ALPR Camera`}
                  type='contact'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutALPR;
