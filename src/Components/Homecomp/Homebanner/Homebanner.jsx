import React, { useState } from 'react';
import './Homebanner.css';
import homevideo1 from "../../../assets/homepage/homevideo1.mov"
import homevideo2 from "../../../assets/homepage/homevideo2.mp4"
import homevideo3 from "../../../assets/homepage/homevideo3.mp4"

const videos = [
  {
    src: homevideo3,
    title: 'Smart Camera Solution for ITS',
    subtitle: 'Reliable cameras build for intelligent traffic solution.',
  },
  {
    src: homevideo2,
    title: 'Smart camera',
    subtitle: 'Reliable cameras build for intelligent traffic solution',
  },
  {
    src: homevideo1,
    title: 'Smart camera',
    subtitle: 'Reliable cameras build for intelligent traffic solution',
  },
];

const VideoBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="video-banner-container">
      <video
        key={activeIndex}
        className="video-banner"
        src={videos[activeIndex].src}
        autoPlay
        muted
        loop
      />
      <div className="overlay">
        <div className="text-content">
          <h1>{videos[activeIndex].title}</h1>
          <p>{videos[activeIndex].subtitle}</p>
          <button>Talk to an Expert &gt;&gt;</button>
        </div>
      </div>
      <div className="carousel-dots">
        {videos.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoBanner;
