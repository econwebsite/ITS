import './RLVDOverview.css';
import { useState } from 'react';
import visionCamera from '../../../../assets/solutionpage/rlvd/rlvd-camera-img.jpg';

const outcomes = [
  {
    num: '01',
    label: 'Enhance intersection safety',
  },
  {
    num: '02',
    label: 'Improve compliance',
  },
  {
    num: '03',
    label: 'Reduce angle collisions across urban and suburban road networks',
  },
];

const RLVDOverview = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videoData = {
    title: "Red Light Violation Detection Demo",
    hashtags: ["rlvd", "traffic-enforcement", "violation-detection"],
    link: "https://www.youtube.com/embed/ISIaD0HaLBI",
    image: "https://img.youtube.com/vi/ISIaD0HaLBI/hqdefault.jpg",
  };

  const getThumbnailUrl = (link) => {
    try {
      const videoId = link.match(/(?:youtube\.com\/watch\?v=|youtube\.com\/embed\/|youtu\.be\/)([^&?/]+)/)?.[1];
      return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : videoData.image;
    } catch (error) {
      console.error('Error extracting YouTube video ID:', error);
      return videoData.image;
    }
  };

  const getVideoId = (link) => {
    try {
      return link.match(/(?:youtube\.com\/watch\?v=|youtube\.com\/embed\/|youtu\.be\/)([^&?/]+)/)?.[1];
    } catch (error) {
      console.error('Error extracting YouTube video ID:', error);
      return null;
    }
  };

  const handleVideoClick = () => {
    const videoId = getVideoId(videoData.link);
    setSelectedVideo(videoId);
  };

  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <div className="rlvd-overview-wrapper">
      <section className="rlvd-overview">

        {/* Heading */}
        <div className="rlvd-header fade-up">
        <h2>
          Vision-Based <span>Red Light Violation</span> Detection (RLVD) Cameras
        </h2>

        <p>
          Red Light Violation Detection (RLVD) cameras are automated, AI powered imaging solutions that identify, capture, and document vehicles that enter intersections after the traffic signal has turned red.
        </p>
      </div>

      {/* Main Row */}
      <div className="rlvd-row">

        {/* Left Side Video */}
        <div className="rlvd-left fade-left">
          <div className="rlvd-video-box" onClick={handleVideoClick}>
            <img
              src={getThumbnailUrl(videoData.link)}
              alt={videoData.title}
              className="rlvd-video-thumbnail"
            />
            {/* Play Icon Overlay */}
            <span className="rlvd-play-icon">▶</span>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="rlvd-right fade-right">

          <p className="rlvd-right-text">
            They bring together precise imaging, intelligent triggering, and intelligent analytics, helping agencies to:
          </p>

          <div className="rlvd-points">
            {outcomes.map((item) => (
              <div className="rlvd-point" key={item.num}>

                <div className="rlvd-icon-box">
                  <span>{item.num}</span>
                </div>

                <div className="rlvd-label">
                  {item.label}
                </div>

              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="rlvd-video-modal-overlay" onClick={handleBackdropClick}>
          <div className="rlvd-video-modal-content">
            <button className="rlvd-modal-close-btn" onClick={handleCloseModal}>
              ✕
            </button>
            <div className="rlvd-video-player-wrapper">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title={videoData.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}

      </section>
    </div>
  );
};

export default RLVDOverview;