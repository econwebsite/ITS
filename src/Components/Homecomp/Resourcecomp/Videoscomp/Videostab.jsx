import React, { useState } from "react";
import "./Videostab.css";
import FsLightbox from "fslightbox-react";
import TrafficSpeed from '../../../../assets/homepage/3-traffic-speed-enforcement-cameras.jpg'
import AutomatedToll from '../../../../assets/homepage/automated-toll-systems-alpr-cameras.jpg'
import AnprDemo from '../../../../assets/homepage/anpr-alpr-demo-using-full-hd-global-shutter-usb-camera.jpg'
import EdgeaiDemo from '../../../../assets/homepage/edge-ai-powered-alpr-demo.jpg'
import DarsiPro from '../../../../assets/homepage/darsi-pro-action.jpg'

const videoData = [
  {
    title: "3 Traffic Speed Enforcement Cameras You NEED to Know",
    hashtags: ["SmartCity", "SurveillanceCamera"],
    link:"https://www.youtube.com/embed/546_L0cjXEo",
    image: TrafficSpeed,
  },
  {
    title: "How Automated Toll Systems Use ALPR Cameras for Multi-Lane Free-Flow Accuracy",
    hashtags: ["ALPR", "MLFFTolling", "AutomatedTolling"],
    link:  "https://www.youtube.com/embed/y9gpdLjDag8",
    image: AutomatedToll,
  },
  {
    title: "ANPR / ALPR demo using Full HD Global Shutter USB Camera",
    hashtags: ["smartparking", "anpr", "alpr"],
    link: "https://www.youtube.com/embed/nCaN9LarqSA",
    image: AnprDemo,
  },
   {
    title: "Edge AI-Powered ALPR Demo | License Plate Recognition",
    hashtags: ["smartparking", "anpr", "alpr"],
    link: "https://www.youtube.com/embed/2BDCiouCN4k",
    image: EdgeaiDemo,
  },
  {
    title: "Darsi Pro in Action | Edge AI Vision Box Demo",
    hashtags: ["smartparking", "anpr", "alpr"],
    link: "https://www.youtube.com/embed/yFZZH-1OxW8",
    image: DarsiPro,
  },
];

const VideoStab = () => {
  const [toggler, setToggler] = useState(false);
  const [slide, setSlide] = useState(1);

  const handleVideoClick = (index) => {
    setSlide(index + 1);
    setToggler(!toggler);
  };

  const lightboxSources = videoData.map((video) => video.link);

  return (
    <div className="VideoStab-container">
      <FsLightbox
        toggler={toggler}
        sources={lightboxSources}
        slide={slide}
        slideshow={{
          isEnabled: false,
        }}
        prevKeyTitle="Prev"
        nextKeyTitle="Next"
        showThumbsOnMount={false}
        disableLocalStorage={true}
      />
      <div className="VideoStab-grid">
        {videoData.map((video, index) => (
          <div 
            className="VideoStab-card" 
            key={index}
            onClick={() => handleVideoClick(index)}
            style={{ cursor: "pointer" }}
          >
            <img src={video.image} alt="placeholder" className="VideoStab-image" />
            <div className="VideoStab-content">
              <h3 className="VideoStab-cardTitle">{video.title}</h3>
              <div className="VideoStab-hashtags">
                {video.hashtags.map((tag, i) => (
                  <span key={i}>#{tag}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideoStab;