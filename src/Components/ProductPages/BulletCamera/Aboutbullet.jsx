import React, { useEffect } from "react";
import "./about-bullet.css";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Modelbutton from "../../Button comp/Modelbutton";
// Temporary images (replace later if needed)
import bulletCameraImg from "../../../assets/bullet-camera/automatic-number-plate-recognition-camera-thumb.png";

const AboutBullet = () => {
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
    <section className="about-bullet container-fluid mt-1 fade-in">
      <div className="row justify-content-center">
        <div className="col-lg-11">
          <div className="row">
            {/* Left: Text Section */}
            <div className="col-lg-8 mt-3 aboutParaMain text-left text-lg-start ps-0">
              <h2 className="titlePrimary">
                Automatic Number Plate Recognition Cameras
              </h2>

              <p className="paragraphtext">
               e-con Systems' ALPR cameras are purpose-built for law enforcement and traffic management. They are designed to handle real-world challenges such as fast-moving vehicles, multi-lane traffic, glare, low-light conditions, and adverse weather.
              </p>

              <p className="paragraphtext">
                Engineered for outdoor deployment, these cameras are used across highways, toll plazas, parking areas, and intersections. They support both edge-based processing and cloud-based architectures, offering flexibility for fixed and mobile deployments.
              </p>
              <p className="paragraphtext">High-resolution imaging with global shutter and rolling shutter sensor options enables accurate license plate recognition and reliable vehicle detection, even in complex multi-lane traffic.</p>
              <p className="paragraphtext">Beyond enforcement imaging, overview camera configurations capture the broader scene. They provide vehicle context such as make, model, and recognition (MMR), along with surrounding environmental details. This added context strengthens evidence quality and supports investigations, auditing, and traffic analysis.</p>
              <p className="paragraphtext">Depending on deployment needs, the cameras can perform real-time edge analytics or stream data to centralized cloud-based ALPR engines. This flexibility helps reduce false positives and delivers actionable insights for Traffic Control Center (TCC) operations.</p>
              <p className="paragraphtext">Rugged and IP-rated for harsh roadside environments, e-con Systems' ANPR (ALPR) cameras integrate seamlessly into modern Intelligent Transportation Systems (ITS).</p>
            </div>
            <div className="col-lg-4 px-0 d-flex flex-column align-items-center justify-content-center">
              <div className="col-12 mx-auto">

                <a
                  href={bulletCameraImg}
                  data-fancybox="gallery"
                  data-caption="Bullet Camera Front View"
                >
                  <img
                    src={bulletCameraImg}
                    className="carousel-image d-block mx-auto img-fluid"
                    alt="Bullet Camera Front View"
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
                  className="bullet-cameravariant-button gtm-btn"
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
                  className="bullet-cameravariant-button gtm-btn"
                  text="Contact Us"
                  backgroundColor="#69ba2f"
                  animationColor="#00aeef"
                  hoverColor="#00aeef"
                  padding="10px 30px"
                  fontSize="14px"
                  productName={`Bullet Camera`}
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

export default AboutBullet;
