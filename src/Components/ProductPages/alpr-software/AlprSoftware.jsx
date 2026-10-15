import React, { useState, useEffect } from 'react';
import './AlprSoftware.css';
import Modelbutton from "../../Button comp/Modelbutton";
import Banner from './alpr-banner';
import bullet from "../../../assets/homepage/alpr-camera.png"
import remotemgt from "../../../assets/alpr-sdk/remote-device-management.png"
import DarsiPro from "../../../assets/homepage/darsi-pro-action.jpg"
import FsLightbox from "fslightbox-react";
import { Helmet } from 'react-helmet-async';
import Vehicaldetection from "../../../assets/alpr-sdk/vehicle-detection.png";
import Licenseplatedetection from "../../../assets/alpr-sdk/license-plate-detection.png";
import Licenseplaterecognition from "../../../assets/alpr-sdk/license-plate-recognition.png";
import Licenseplateclassification from "../../../assets/alpr-sdk/license-plate-classification.png";
import Vehiclemakemodel from "../../../assets/alpr-sdk/vehicle-make-model.png";
import Vehiclecolor from "../../../assets/alpr-sdk/vehicle-color.png";

import nivdia from "../../../assets/alpr-sdk/nvidia.jpg"
import qualcomm from "../../../assets/alpr-sdk/qualcomm.png"
import ambarella from "../../../assets/alpr-sdk/ambarella.png"
import AI from "../../../assets/alpr-sdk/AI.jpg"


import AlprSdkFaq from './AlprSdkFaq';
const AlprSoftware = () => {
  const [animateOnScroll, setAnimateOnScroll] = useState(false);
  const [toggler, setToggler] = useState(false);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);

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
      icon: Vehicaldetection,
      title: 'SDK & REST API',
      description: 'Integrate ALPR directly into your application or access recognition results through supported REST APIs'
    },
     {
      icon: Vehicaldetection,
      title: 'RTSP Live Streams',
      description: 'Process live camera streams for continuous vehicle and license plate recognition'
    }, {
      icon: Vehicaldetection,
      title: 'Recorded Video',
      description: 'Analyze recorded traffic footage with timestamped vehicle and plate recognition results'
    }, {
      icon: Vehicaldetection,
      title: 'Images & Batch Processing',
      description: 'Examine individual vehicle images or batches of captured frames'
    },
    //   {
    //   icon: Vehicaldetection,
    //   title: 'Vehicle Detection',
    //   description: 'Accurately identify vehicles and license plates directly from live video feeds'
    // },
    // {
    //   icon: Licenseplatedetection,
    //   title: 'License Plate Detection',
    //   description: 'Support jurisdiction-level plate formats used in traffic systems - with inbuilt recognition logic'
    // },
    // {
    //   icon: Licenseplaterecognition,
    //   title: 'License Plate Recognition',
    //   description: 'Classify based on plate format and usage for enforcement and access workflows'
    // },
    // {
    //   icon: Licenseplateclassification,
    //   title: 'License Plate Classification',
    //   description: 'Preserve vehicle/plate identity to reduce duplicate reads and stabilize traffic analytics'
    // },
    // {
    //   icon: Vehiclemakemodel,
    //   title: 'Vehicle Make & Model',
    //   description: 'Extract visual attributes like vehicle make, model and color detection from moving vehicles'
    // },
    // {
    //   icon: Vehiclecolor,
    //   title: 'Vehicle Color',
    //   description: 'Estimate vehicle direction and average speed to quantify movement and generate precise metadata.'
    // }
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
      reverse: false,
      link: 'https://www.e-consystems.com/vision-solution/smart-fcaps-device-remote-management.asp'
    }
  ];

  const benefits = [


  {
      title: 'Real-Time Processing',
      description: 'Inspect vehicle and plate data directly at the edge',
      image: 'https://www.e-consystems.com/images/anpr-software/accuracy.png'
    },
      {
      title: 'Lower Bandwidth Requirements',
      description: 'Reduce the need to continuously transmit high-bandwidth video to the cloud',
      image: 'https://www.e-consystems.com/images/anpr-software/accuracy.png'
    },
      {
      title: 'More Data Control',
      description: 'Keep image and video processing within the deployment environment',
      image: 'https://www.e-consystems.com/images/anpr-software/accuracy.png'
    },
      {
      title: 'Low-Latency Integration',
      description: 'Make recognition results available directly to local applications and workflows',
      image: 'https://www.e-consystems.com/images/anpr-software/accuracy.png'
    },

    // {
    //   title: 'Accuracy',
    //   description: '~99.1% recognition accuracy in industry standard datasets',
    //   image: 'https://www.e-consystems.com/images/anpr-software/accuracy.png'
    // },
    // {
    //   title: 'Tilt',
    //   description: 'Up to 60° camera tilt and high vehicle speeds',
    //   image: 'https://www.e-consystems.com/images/anpr-software/tilt.png'
    // },
    // {
    //   title: 'Pixel Density',
    //   description: 'Low plate pixel density (30-60 px)',
    //   image: 'https://www.e-consystems.com/images/anpr-software/pixels.png'
    // },
    // {
    //   title: 'No Motion Blur',
    //   description: 'No motion blur, skew, or shadows during fast transitions',
    //   image: 'https://www.e-consystems.com/images/anpr-software/no-motion-blur.png'
    // },
    // {
    //   title: 'Varying light conditions',
    //   description: 'Consistent performance in extreme brightness, tunnels, and night-time scenes',
    //   image: 'https://www.e-consystems.com/images/anpr-software/performance.png'
    // },
    // {
    //   title: 'Adverse Weather',
    //   description: 'Stability in rain, fog, mist, and wet reflective roads',
    //   image: 'https://www.e-consystems.com/images/anpr-software/adverse-weather.png'
    // }
  ];

  const applications = [
    {
      // title: 'Automated Tolling and MLFF systems',
      title: 'Tolling',
      image: 'https://www.e-consystems.com/images/markets/its/tolling-highway-infrastructure.jpg'
    },
    {
      title: 'Traffic Enforcement',
      image: 'https://www.e-consystems.com/images/ptz-camera/red-light-violation.jpg',
      // link: '/solutions/traffic-enforcement-camera'
    },
      {
      title: 'Parking',
      image: 'https://www.e-consystems.com/images/markets/its/parking-management.jpg',
      // link: 'https://www.e-consystems.com/markets/smart-cities-cameras/parking-lot-management.asp'
    },
   
    {
      // title: 'Automated Tolling and MLFF systems',
      title: 'Traffic Management',
      image: 'https://www.e-consystems.com/images/markets/its/tolling-highway-infrastructure.jpg'
    },
    // {
    //   // title: 'Parking lot management',
    //   title: 'Traffic Management',
    //   image: 'https://www.e-consystems.com/images/markets/its/parking-management.jpg',
    //   link: 'https://www.e-consystems.com/markets/smart-cities-cameras/parking-lot-management.asp'
    // },
     
  ];

  const videoData = [
    {
      title: "Darsi Pro in Action | Edge AI Vision Box Demo",
      hashtags: ["smartparking", "anpr", "alpr"],
      link: "https://www.youtube.com/embed/yFZZH-1OxW8",
      image: "https://img.youtube.com/vi/yFZZH-1OxW8/hqdefault.jpg",
    },
    {
      title: "Real-Time License Plate Recognition demo using ALPR SDK",
      hashtags: ["alpr", "license plate recognition", "sdk"],
      link: "https://www.youtube.com/embed/XMwK9oYzB4g",
      image: "https://img.youtube.com/vi/XMwK9oYzB4g/hqdefault.jpg",
    },
    {
      title: "ALPR Camera Demo | Automated License Plate Recognition",
      hashtags: ["alpr", "camera", "recognition"],
      link: "https://www.youtube.com/embed/91TcMA3Lt3Q",
      image: "https://img.youtube.com/vi/91TcMA3Lt3Q/hqdefault.jpg",
    }
  ];

  const siteUrl = typeof window !== 'undefined'
    ? window.location.origin.replace(/\/$/, '')
    : 'https://its.e-consystems.com';

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${siteUrl}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Products',
        item: `${siteUrl}/products/license-plate-recognition-software`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'ALPR Software',
        item: `${siteUrl}/products/license-plate-recognition-software`,
      },
    ],
  };

  return (
    <div className="alpr-software">
      {/* Hero Banner */}
      <Banner />
      <Helmet>
        <title>AI-Powered ALPR SDK for Edge & Cloud Deployment</title>
        <meta name='description' content='Unlock ~99.1% accuracy with e-con Systems ALPR SDK. Featuring deep-learning models, hardware-agnostic support, and REST APIs for seamless integration into traffic, tolling, and parking systems.' />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>
      {/* Paragraph Section */}
      <section className="alpr-para">
        <div className="container">
          <div className="aboutParaMain">
             <h2 className="titlePrimary">
              All-in-One SDK: From Vehicle Detection to Plate Recognition
              </h2>
            <p className='paragraphtext'>e-con Systems' ALPR SDK uses deep-learning models for vehicle and license plate detection, recognition, classification, tracking, and metadata generation.
            </p>
            <p className='paragraphtext'>Designed primarily for edge AI deployments, the SDK processes vehicle and license plate data close to the camera. This reduces cloud dependency, bandwidth demands, and response latency.</p>
            <p className='paragraphtext'>e-con Systems' ALPR SDK is ideal for challenging traffic conditions, such as fast-moving vehicles, low light, glare, multiple vehicles, and adverse weather.</p>

          </div>
        </div>
      </section>



      
{/* Real-World Plate Recognition Section */}
<section className="real-world-recognition">
  <div className="container">
    <div className="real-world-header">
       <h2 className="titlePrimary">
Enabling Real-World Plate Recognition              </h2>
      
    </div>

    <div className="recognition-conditions">
      {[
        "Low Light",
        "Glare",
        "High-Speed Traffic",
        "Multi-Line License Plates",
        "Multiple Vehicles",
        "Rain",
      ].map((condition, index) => (
        <div className="recognition-condition" key={index}>
          <span className="recognition-check">✓</span>
   
          <img src="" alt="" />
          <span>{condition}</span>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* Workflow Section */}
      <section className="workflow">
        <div className="container">
          <div className="section-header">
            {/* <h2 className="section-title">What our ALPR SDK Offers</h2> */}
      <h2 className="section-title">      Easily Integrate ALPR into Your Application</h2>
          </div>

          <div className="workflow-steps">
            {workflowSteps.slice(0, 4).map((step, index) => (
              <div className="workflow-step" key={index}>
                <div className="step-icon">
                  <img src={step.icon} alt={step.title} />
                </div>
                <h4 className="step-title">{step.title}</h4>
                <p>{step.description}</p>

              </div>
            ))}
          </div>
          <hr />
          <div className="workflow-steps">
            {workflowSteps.slice(4).map((step, index) => (
              <div className="workflow-step" key={index + 4}>
                <div className="step-icon">
                  <img src={step.icon} alt={step.title} />
                </div>
                <h4 className="step-title">{step.title}</h4>
                 <p>{step.description}</p>
              </div>
            ))}
          </div>
          {/* <div className="text-center mt-4">
            <Modelbutton
              className="Advancing-Img-diagnostic-button gtm-btn"
              text="Contact Us"
              backgroundColor="#69ba2f"
              animationColor="#00aeef"
              hoverColor="#00aeef"
            />
          </div> */}
        </div>
      </section>

      {/* Features Zigzag Section */}
      {/* <section className="software-features-zigzag">
        <div className="container">
          <div className="zigzag-header">
            <h2>Key ALPR SDK Features</h2>
          </div>

          {features.map((feature, index) => {
            const content = (
              <>
                <div className="zigzag-image">
                  <img src={feature.image} alt={feature.title} />
                </div>
                <div className="zigzag-content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </>
            );
            return (
              <div key={index} className={`zigzag-row ${feature.reverse ? 'reverse' : ''}`}>
                {feature.link ? (
                  <a href={feature.link} style={{ display: 'contents' }}>
                    {content}
                  </a>
                ) : (
                  content
                )}
              </div>
            );
          })}
        </div>
      </section> */}

      {/* Performance Section */}
      <section className="performance">
        <div className="container">
          <div className="section-header">
            {/* <h2 className="section-title"> Performance Metrics</h2> */}
                        <h2 className="section-title">Cloud-Ready and Perfect for Edge AI</h2>

            
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


{/* Embedded AI Platforms Section */}

<section className="ai-platforms">
  <div className="container">
    <h2 className="ai-platforms-title">
      Optimized for Embedded AI Platforms
    </h2>

    {/* Row 1: Supported Platform */}
    <div className="platform-row">
      <h3>Supported Platform</h3>
      <div className="platform-logo-card">
        <img src={nivdia} alt="NVIDIA" />
        <div>
          <h4>NVIDIA Jetson</h4>
          <p>with TensorRT acceleration</p>
        </div>
      </div>
    </div>

    {/* Row 2: Integration Options */}
    <div className="platform-row">
      <h3>Integration Options</h3>
      <div className="integration-logos">
        <div className="platform-logo-card">
          <img src={qualcomm} alt="Qualcomm" />
        </div>

        <div className="platform-logo-card">
          <img src={ambarella} alt="Ambarella" />
        </div>

       <div className="custom-accelerator-card">
  <img
    src={AI}
    alt="Custom AI Accelerator Chip"
    className="custom-accelerator-image"
  />
  <h4>Custom AI Accelerators</h4>
  <p>Available on request</p>
</div>
      </div>
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
              <a href={app.link} key={index} style={{ textDecoration: 'none' }}>
                <div className="application-card">
                  <img src={app.image} className="application-image" alt={app.title} />
                  <div className="application-overlay">
                    <h4 className="application-title">{app.title}</h4>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      
      {/* ALPR FAQ section */}
      <AlprSdkFaq />
    

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
{/* Video Section */}
      <section className="video-showcase">
        <FsLightbox
          toggler={toggler}
          sources={videoData.map((video) => video.link)}
          sourceIndex={selectedVideoIndex}
          slideshow={{
            isEnabled: false,
          }}
          prevKeyTitle="Prev"
          nextKeyTitle="Next"
          showThumbsOnMount={false}
          disableLocalStorage={true}
        />
        
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Related Videos</h2>
          </div>

          <div className="video-grid">
            {videoData.map((video, index) => (
              <div className="video-container" key={video.link}>
                <div
                  className="video-wrapper"
                  onClick={() => {
                    setSelectedVideoIndex(index);
                    setToggler((prev) => !prev);
                  }}
                >
                  <img
                    src={video.image}
                    alt={video.title}
                    className="video-thumbnail"
                  />
                  <div className="play-btn-overlay">
                    <div className="play-btn">
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                        <polygon points="8,5 20,12 8,19" fill="white"/>
                      </svg>
                    </div>
                  </div>
                </div>

                <div className="video-content">
                  <h3 className="video-title">{video.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
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
     
    </div>
  );
};

export default AlprSoftware;
