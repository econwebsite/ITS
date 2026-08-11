import React, { useState, useEffect } from 'react';
import './AlprSoftware.css';
import Modelbutton from "../../Button comp/Modelbutton";
import Banner from './alpr-banner';
import bullet from "../../../assets/homepage/alpr-camera.png"
import remotemgt from "../../../assets/alpr-sdk/remote-device-management.png"
import { Helmet } from 'react-helmet-async';
import FAQ from './FAQ';
const AlprSoftware = () => {
  const [animateOnScroll, setAnimateOnScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect();
        const screenPosition = window.innerHeight / 1.2;

        if (elementPosition.top < screenPosition) {
          element.classList.add('visible');
        }
      });
    };

    // Add animation classes to elements on mount
    const animateElements = document.querySelectorAll(
      '.section-header, .workflow-step, .metric-card, .performance-detail, ' +
      '.application-card, .hardware-item, .contact-form-container'
    );

    animateElements.forEach(el => {
      el.classList.add('animate-on-scroll');
    });

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const workflowSteps = [
    {
      number: '01',
      title: 'Vehicle Detection',
      description: 'Accurately identify vehicles and license plates directly from live video feeds'
    },
    {
      number: '02',
      title: 'License Plate Detection',
      description: 'Support jurisdiction-level plate formats used in traffic systems - with inbuilt recognition logic'
    },
    {
      number: '03',
      title: 'License Plate Recognition',
      description: 'Classify based on plate format and usage for enforcement and access workflows'
    },
    {
      number: '04',
      title: 'License Plate Classification',
      description: 'Preserve vehicle/plate identity to reduce duplicate reads and stabilize traffic analytics'
    },
    {
      number: '05',
      title: 'Vehicle Make & Model',
      description: 'Extract visual attributes like vehicle make, model and color detection from moving vehicles'
    },
    {
      number: '06',
      title: 'Vehicle Color',
      description: 'Estimate vehicle direction and average speed to quantify movement and generate precise metadata.'
    }
  ];

  const features = [
    {
      title: 'Advanced AI models',
      description: "e-con Systems' ALPR SDK uses cutting-edge AI models optimized for cloud and edge deployments. This centralizes operations where compute placement varies.",
      image: 'https://www.e-consystems.com/images/anpr-software/advanced-ai-models.png',
      reverse: false
    },
    {
      title: 'High frame rates',
      description: "e-con Systems' ALPR SDK delivers real-time inference at high frame rates. It supports critical workflows that depend on traffic data availability.",
      image: 'https://www.e-consystems.com/images/anpr-software/high-frame-rates.png',
      reverse: true
    },
    {
      title: 'Hardware-agnostic platform support',
      description: "e-con Systems' ALPR SDK is hardware-agnostic - with support for NVIDIA, Qualcomm, Ambarella, and more. It cuts down deployment cycles and enables varied infrastructure choices.",
      image: 'https://www.e-consystems.com/images/anpr-software/hardware-agnostic-platform.png',
      reverse: false
    },
    {
      title: 'REST APIs and integration-friendly architecture',
      description: "e-con Systems' ALPR SDK exposes imaging outputs through REST APIs. This helps align with system requirements and existing software stacks.",
      image: 'https://www.e-consystems.com/images/anpr-software/rest-api-architecture.png',
      reverse: true
    },
     {
      title: 'Remote Device Management Platform',
      description: "Remotely configure, monitor, and maintain ANPR and intelligent vision devices with CloVis Central&trade;. Ensure reliable large-scale deployments with centralized device and AI model management.",
      image: remotemgt,
      reverse: false
    }
  ];

  const benefits = [
    {
      title: 'Accuracy',
      description: '~99.1% recognition accuracy in industry standard datasets',
      image: 'https://www.e-consystems.com/images/anpr-software/accuracy.png'
    },
    {
      title: 'Tilt',
      description: 'Up to 60° camera tilt and high vehicle speeds',
      image: 'https://www.e-consystems.com/images/anpr-software/tilt.png'
    },
    {
      title: 'Pixel Density',
      description: 'Low plate pixel density (30-60 px)',
      image: 'https://www.e-consystems.com/images/anpr-software/pixels.png'
    },
    {
      title: 'No Motion Blur',
      description: 'No motion blur, skew, or shadows during fast transitions',
      image: 'https://www.e-consystems.com/images/anpr-software/no-motion-blur.png'
    },
    {
      title: 'Varying light conditions',
      description: 'Consistent performance in extreme brightness, tunnels, and night-time scenes',
      image: 'https://www.e-consystems.com/images/anpr-software/performance.png'
    },
    {
      title: 'Adverse Weather',
      description: 'Stability in rain, fog, mist, and wet reflective roads',
      image: 'https://www.e-consystems.com/images/anpr-software/adverse-weather.png'
    }
  ];

  const applications = [
    {
      title: 'Traffic enforcement',
      image: 'https://www.e-consystems.com/images/ptz-camera/red-light-violation.jpg'
    },
    {
      title: 'Automated Tolling and MLFF systems',
      image: 'https://www.e-consystems.com/images/markets/its/tolling-highway-infrastructure.jpg'
    },
    {
      title: 'Parking lot management',
      image: 'https://www.e-consystems.com/images/markets/its/parking-management.jpg'
    }
  ];

  return (
    <div className="alpr-software">
      {/* Hero Banner */}
      <Banner />
      <Helmet>
        <title>High Accuracy Automatic License Plate Recognition Software</title>
        <meta name='description' content='Deep-learning ALPR software for vehicle and plate detection, recognition, tracking, and metadata generation, optimized for edge and cloud ITS deployments.' />
      </Helmet>
      {/* Paragraph Section */}
      <section className="alpr-para">
        <div className="container">
          <div className="aboutParaMain">
             <h2 className="titlePrimary">
                Automatic Licence Plate Recognition SDK
              </h2>
            <p className='paragraphtext'>e-con Systems' ALPR SDK leverages deep-learning models to support the complete ALPR workflow. This includes vehicle and plate detection, recognition, classification, tracking, and metadata generation.
              Optimized for both edge compute and cloud-scale deployments, the models are trained and validated on diverse global datasets and stress-tested traffic conditions. They maintain reliable performance in fast motion, low-light environments, and adverse weather.
            </p>
            <p className='paragraphtext'>This ALPR SDK also integrates seamlessly across platforms, with hardware acceleration for NVIDIA Jetson, Qualcomm, Ambarella, and custom AI accelerators via ONNX/TensorRT.</p>
          </div>
        </div>
      </section>

      {/* Workflow Section */}
      <section className="workflow">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">What our ALPR SDK Offers</h2>
          </div>

          <div className="workflow-steps">
            {workflowSteps.slice(0, 4).map((step, index) => (
              <div className="workflow-step" key={index}>
                <div className="step-number">{step.number}</div>
                <h4 className="step-title">{step.title}</h4>
              </div>
            ))}
          </div>
          <hr />
          <div className="workflow-steps">
            {workflowSteps.slice(4).map((step, index) => (
              <div className="workflow-step" key={index + 4}>
                <div className="step-number">{step.number}</div>
                <h4 className="step-title">{step.title}</h4>
              </div>
            ))}
          </div>
          <div className="text-center mt-4">
            <Modelbutton
              className="Advancing-Img-diagnostic-button gtm-btn"
              text="Contact Us"
              backgroundColor="#69ba2f"
              animationColor="#00aeef"
              hoverColor="#00aeef"
            />
          </div>
        </div>
      </section>

      {/* Features Zigzag Section */}
      <section className="software-features-zigzag">
        <div className="container">
          <div className="zigzag-header">
            <h2>Key ALPR SDK Features</h2>
          </div>

          {features.map((feature, index) => (
            <div key={index} className={`zigzag-row ${feature.reverse ? 'reverse' : ''}`}>
              <div className="zigzag-image">
                <img src={feature.image} alt={feature.title} />
              </div>
              <div className="zigzag-content">
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Performance Section */}
      <section className="performance">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title"> Performance Metrics</h2>
          </div>
          <div className="performance-details">
            {benefits.map((benefit, index) => (
              <div className="performance-detail" key={index}>
                <img src={benefit.image} alt={benefit.title} />
                <h4 className="detail-title">{benefit.title}</h4>
                <p className="detail-description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="applications" id="industries">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Popular ALPR Use Cases</h2>
          </div>

          <div className="applications-grid">
            {applications.map((app, index) => (
              <div className="application-card" key={index}>
                <img src={app.image} className="application-image" alt={app.title} />
                <div className="application-overlay">
                  <h4 className="application-title">{app.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*  FAQ */}

        <FAQ/>

      {/* Hardware Section */}
      <section className="hardware" id="products">
        <div className="container">
          <div className="hardware-grid">
            <div className="hardware-section">
              <h2 className="hardware-title">Recommended Compute Boxes</h2>
              <div className="hardware-items">
                <div className="hardware-item">
                  <div className="hardware-icon" style={{ width: 'auto', height: 'auto', backgroundColor: 'transparent' }}>
                    <a href="https://www.e-consystems.com/nvidia-embedded-computing-platforms.asp">
                      <img src="https://www.e-consystems.com/images/computebox/darsionx/ecu-compute-box-darsi-onx-image-thumb.png" className="hardware-icon-img" alt="Compute Box" style={{ width: '200px' }} />
                    </a>
                  </div>
                  <a href="https://www.e-consystems.com/nvidia-embedded-computing-platforms.asp">
                    <div className="hardware-details">
                      <h4 className="hardware-item-title">e-con Systems' Darsi Pro - an AI Compute Box based on NVIDIA&reg; Jetson Orin&trade; NX</h4>
                      <a href="https://www.e-consystems.com/nvidia-embedded-computing-platforms.asp" className="explore-link">
                        Explore
                        <span className="arrow">→</span>
                      </a>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="platforms-section">
              <h2 className="hardware-title">Recommended ALPR Cameras</h2>
              <div className="hardware-item">
                <div className="hardware-icon">
                  <a href="/products/anpr-alpr-bullet-cameras">
                    <img src={bullet} className="hardware-icon-img" alt="Cameras" /></a>
                </div>
                <a href="/products/anpr-alpr-bullet-cameras">
                  <div className="hardware-details">
                    <h4 className="hardware-item-title">Recommended ALPR Cameras</h4>
                    <a className="explore-link" role="button" style={{ cursor: 'pointer' }}>
                      Explore
                      <span className="arrow">→</span>
                    </a>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="contact-cta">
        <div className="contact-cta-inner">
          <div className="contact-cta-content">
            <h3 className="contact-cta-title">
              Let's Build Your Next ALPR Solution
            </h3>
            <p className="contact-cta-description">
              Ensure accuracy, speed, and long-term scalability — backed by 22+ years of proven expertise in embedded vision and AI systems.
            </p>
          </div>

          <div className="contact-cta-action">
            <Modelbutton
              className="Advancing-Img-diagnostic-button gtm-btn"
              text="Contact Us"
              backgroundColor="#69ba2f"
              animationColor="#00aeef"
              hoverColor="#00aeef"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AlprSoftware;
