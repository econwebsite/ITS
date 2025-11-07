import React, { useEffect } from "react";
import "./about-product.css";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import cameraFront from "../../../assets/ptz-cameras/5mp-ai-turret-camera-thumb.png";
import cameraSide from "../../../assets/ptz-cameras/ai-turret-camera-thumb.png";

const AboutProduct = () => {
useEffect(() => {
  Fancybox.bind("[data-fancybox='gallery']", {
    Toolbar: {
      display: [
        { id: "close", position: "right" } 
      ],
    },
    Thumbs: false,     
    compact: false,    // Optional: disable compact mode
    animated: true,    // Smooth transition
    dragToClose: true, // Allow closing by dragging down
  });

  return () => Fancybox.destroy();
}, []);


  return (
    <section className="about-product container-fluid mt-1 fade-in">
      <div className="row justify-content-center">
        <div className="col-lg-11">
          <div className="row">
            {/* Left: Text Section */}
            <div className="col-lg-8 mt-3 aboutParaMain text-left text-lg-start">
              <h2 className="titlePrimary">
                Smart PTZ Camera for Intelligent Traffic Monitoring
              </h2>

              <p className="paragraphtext">
                e-con Systems’ Smart PTZ Camera is engineered for next-generation
                smart city surveillance, combining advanced Sony-based imaging
                with powerful on-device edge AI processing to deliver real-time
                situational awareness and decision-making.
              </p>

              <p className="paragraphtext">
                This AI-powered camera solution autonomously detects, tracks, and
                analyzes critical road events—helping operators respond faster
                and smarter. Ideal for traffic violation detection, intersection
                monitoring, near-miss detection and more.
              </p>

              <p className="paragraphtext">
                Featuring a Sony image sensor optimized for high-sensitivity and
                HDR performance, an integrated edge AI engine, PoE connectivity,
                and rugged IP66-rated design, it delivers consistent, high-quality
                imaging and reliable 24×7 operation — even in low-light or harsh
                outdoor conditions.
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
  id="carouselExampleIndicators"
  className="carousel slide"
  data-bs-ride="carousel"
  data-bs-interval="5000"  // auto-slide every 5s
>
  {/* Carousel Indicators */}
  <div className="carousel-indicators">
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
      data-bs-slide-to="0"
      className="active"
      aria-current="true"
      aria-label="Slide 1"
    ></button>
    <button
      type="button"
      data-bs-target="#carouselExampleIndicators"
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
        data-caption="Turret Camera Front View"
      >
        <img
          src={cameraFront}
          className="carousel-image d-block mx-auto img-fluid"
          alt="Turret Camera Front View"
        />
      </a>
    </div>

    <div className="carousel-item">
      <a
        href={cameraSide}
        data-fancybox="gallery"
        data-caption="Turret Camera Side View"
      >
        <img
          src={cameraSide}
          className="carousel-image d-block mx-auto img-fluid"
          alt="Turret Camera Side View"
        />
      </a>
    </div>
  </div>

  {/* Left & Right Controls */}
  <button
    className="carousel-control-prev"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="prev"
  >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button
    className="carousel-control-next"
    type="button"
    data-bs-target="#carouselExampleIndicators"
    data-bs-slide="next"
  >
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutProduct;
