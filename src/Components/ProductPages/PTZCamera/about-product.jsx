import React, { useEffect } from "react";
import "./about-product.css";
import { Fancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import cameraFront from "../../../assets/ptz-cameras/incident-detection-camera-for-intelligent-traffic-monitoring-thumb.jpg";
import cameraSide from "../../../assets/ptz-cameras/smart-incident-detection-for-intelligent-traffic-monitoring-thumb.png";

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
                Smart Edge-AI Camera for Traffic Incident Detection
              </h2>

              <p className="paragraphtext">
              e-con Systems' Smart Edge-AI Traffic Incident Detection Camera is designed for ITS hardware vendors, software analytics companies, and smart mobility integrators who need a reliable, high-performance platform for next-generation traffic applications. With on-device AI and Sony-class imaging, it detects, tracks, and analyzes critical road events in real time — from violations and intersections to near-misses and incident response.
              </p>

              <p className="paragraphtext">
               Equipped with a high-sensitivity Sony sensor, integrated edge AI engine, PoE connectivity, and an IP66-rated enclosure, it ensures consistent, high-quality imaging and 24x7 outdoor reliability in low light and harsh weather. The integrator-ready architecture supports ONVIF, RTSP, standard protocols, and APIs — making it fully compatible with cloud platforms, custom AI models, and third-party software.
              </p>

              <p className="paragraphtext">
                All core hardware engineering — sensor tuning, thermal design, optics, and ruggedization — is already done, helping you skip months of development. Run your own AI models on the onboard NPU or use our preloaded event-detection algorithms, and deploy seamlessly across gantries, poles, intersections, highways, and tunnels. This allows you to accelerate time-to-market and focus on software innovation rather than camera hardware.
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
        data-caption="Smart Edge-AI Camera for Traffic Incident Detection"
      >
        <img
          src={cameraFront}
          className="carousel-image d-block mx-auto img-fluid"
          alt="Smart Edge-AI Camera for Traffic Incident Detection"
        />
      </a>
    </div>

    <div className="carousel-item">
      <a
        href={cameraSide}
        data-fancybox="gallery"
        data-caption="Smart Edge-AI Camera for Traffic Incident Detection"
      >
        <img
          src={cameraSide}
          className="carousel-image d-block mx-auto img-fluid"
          alt="Smart Edge-AI Camera for Traffic Incident Detection"
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
