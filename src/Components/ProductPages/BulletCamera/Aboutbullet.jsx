import React, { useEffect } from "react";
import "./about-bullet.css";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Temporary images (replace later if needed)
import cameraFront from "../../../assets/ptz-cameras/5mp-ai-turret-camera-thumb.png";
import cameraSide from "../../../assets/ptz-cameras/ai-turret-camera-thumb.png";

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
            <div className="col-lg-8 mt-3 aboutParaMain text-left text-lg-start">
              <h2 className="titlePrimary">
                Smart Bullet Cameras for ANPR/ALPR
              </h2>

              <p className="paragraphtext">
               e-con Systems’ high-performance Bullet Cameras are purpose-built for ANPR/ALPR, law enforcement, and traffic management. Designed for outdoor deployment across highways, toll plazas, parking areas, and intersections, these cameras combine Sony-based high-resolution global shutter sensors with integrated edge compute to deliver exceptional imaging, on-device analytics, and 24×7 reliability.
              </p>

              <p className="paragraphtext">
                With optical zoom options, strobe-assisted IR night vision, and AI-powered edge processing, they enable real-time vehicle recognition, violation detection, and traffic flow analysis — even in challenging lighting or weather conditions.
              </p>

              <div className="d-flex flex-wrap gap-3 mt-3 justify-content-center justify-content-lg-start text-center text-lg-start">
                {/* Download Datasheet */}
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

            {/* Right: Carousel Section */}
            <div className="col-lg-4 px-0 d-flex flex-column">
              <div className="carousel-container">
                <div
                  id="carouselBulletIndicators"
                  className="carousel slide"
                  data-bs-ride="carousel"
                  data-bs-interval="5000"
                >
                  {/* Carousel Indicators */}
                  <div className="carousel-indicators">
                    <button
                      type="button"
                      data-bs-target="#carouselBulletIndicators"
                      data-bs-slide-to="0"
                      className="active"
                      aria-current="true"
                      aria-label="Slide 1"
                    ></button>
                    <button
                      type="button"
                      data-bs-target="#carouselBulletIndicators"
                      data-bs-slide-to="1"
                      aria-label="Slide 2"
                    ></button>
                  </div>

                  {/* Carousel Items */}
                  <div className="carousel-inner text-center">
                    <div className="carousel-item active">
                      <a
                        href={cameraFront}
                        data-fancybox="gallery"
                        data-caption="Bullet Camera Front View"
                      >
                        <img
                          src={cameraFront}
                          className="carousel-image d-block mx-auto img-fluid"
                          alt="Bullet Camera Front View"
                        />
                      </a>
                    </div>

                    <div className="carousel-item">
                      <a
                        href={cameraSide}
                        data-fancybox="gallery"
                        data-caption="Bullet Camera Side View"
                      >
                        <img
                          src={cameraSide}
                          className="carousel-image d-block mx-auto img-fluid"
                          alt="Bullet Camera Side View"
                        />
                      </a>
                    </div>
                  </div>

                  {/* Controls */}
                  <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselBulletIndicators"
                    data-bs-slide="prev"
                  >
                    <span
                      className="carousel-control-prev-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                  </button>
                  <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselBulletIndicators"
                    data-bs-slide="next"
                  >
                    <span
                      className="carousel-control-next-icon"
                      aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                  </button>
                </div>
              </div>
            </div>
            {/* End of Carousel */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutBullet;
