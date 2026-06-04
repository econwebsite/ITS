import React, { useEffect, useRef } from "react";
import './Bannerstyles.css';
import bannerImg from '../../../../assets/solutionpage/traffic-enforcement-banner-img-en.png'
import Modelbutton from "../../../Button comp/Modelbutton";

const ITSBanner = () => {
  const textSectionRef = useRef(null);
  const imageSectionRef = useRef(null);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'slideInLeft 0.8s ease-out forwards, slideInRight 0.8s ease-out forwards';
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (textSectionRef.current) {
      observer.observe(textSectionRef.current);
    }
    if (imageSectionRef.current) {
      observer.observe(imageSectionRef.current);
    }

    return () => {
      if (textSectionRef.current) observer.unobserve(textSectionRef.current);
      if (imageSectionRef.current) observer.unobserve(imageSectionRef.current);
    };
  }, []);

  const banner = {
    image: bannerImg,
    title: "Vision Based Traffic Enforcement Cameras",
    subtitle: "Edge AI traffic enforcement cameras delivering real-time violation detection for speed, red-light, and school bus stop-arm safety programs",
  };

  return (
    <div className="its-banner">
      <div className="banner-slide">
        <div className="banner-content">
          <div className="banner-text-section" ref={textSectionRef}>
            <h1>
              <span className="title-dark">Vision Based</span>
              <br />
              <span className="title-light">Traffic</span>
              <br />
              <span className="title-light">Enforcement</span>
              <br />
              <span className="title-dark">Cameras</span>
            </h1>
            <p>{banner.subtitle}</p>
            <Modelbutton 
              className="its-banner-button gtm-btn" 
              text="Talk to an ITS Expert &gt;&gt;" 
              backgroundColor="#1e2f7ac9" 
              animationColor="#69ba2f" 
              hoverColor="#00aeef"
              padding="12px 25px"
              fontSize="14px"
              borderRadius="0"
              border="1px solid #fff"
              productName="Traffic Enforcement Cameras"
              title="Traffic Enforcement Camera Solution"
            />
          </div>
          <div className="banner-image-section" ref={imageSectionRef}>
            <img
              src={banner.image}
              alt={banner.title}
              className="banner-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITSBanner;