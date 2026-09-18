import React, { useEffect } from "react";
import "./about-alpr.css";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Modelbutton from "../../Button comp/Modelbutton";
// Temporary images (replace later if needed)
import alprCameraImage from "../../../assets/alpr-camera/ai-anpr-camera-thumb.png";

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
                Built to read plates at highway speed 
              </h2>

              <p className="paragraphtext">
               TrafficSenz is a rugged, AI-enabled ANPR camera designed for ITS, multi-lane free-flow tolling, and Advanced Traffic Management Systems (ATMS) applications. It combines a 5 MP Sony Pregius S global shutter sensor with synchronized 850 nm pulsed IR illumination and on-camera edge AI processing to reliably capture license plates across varying traffic and environmental conditions.
              </p>

              {/* <p className="paragraphtext">
                From an ITS and tolling perspective, the camera is positioned as an edge-based solution that can support vehicle detection, license plate recognition, wrong-way detection, and traffic violation monitoring, reducing reliance on centralized processing.
              </p>
              <p className="paragraphtext">Its rugged IP67/IK10 enclosure, PoE connectivity, multi-lane coverage, and optional radar/external lighting integration make it suitable for integration into existing tolling infrastructure, traffic management systems, and enforcement applications.</p> */}
            </div>
            <div className="col-lg-4 px-0 d-flex flex-column align-items-center justify-content-center">
              <div className="col-12 mx-auto">
                <a
                  href={alprCameraImage}
                  data-fancybox="gallery"
                  data-caption="ALPR Camera"
                >
                  <img
                    src={alprCameraImage}
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
