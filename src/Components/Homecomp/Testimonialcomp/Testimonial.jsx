import React, { useState, useEffect } from 'react';
import AOS from 'aos';
import './Testimonial.css';

const Testimonial = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  // Video testimonials data 
  const videoTestimonials = [
    {
      id: 1,
      videoId: 'BAsZTcsnK8w',
      title: 'Customer Testimonial: Stellarview on Working with e-con Systems | India AI Impact Summit 2026',
      description: 'Hear how our ITS vision solutions have transformed traffic management operations.'
    }
  ];

  // Get YouTube thumbnail URL
  const getThumbnailUrl = (videoId) => {
    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  };

  // Open video modal
  const handleVideoClick = (videoId) => {
    setSelectedVideo(videoId);
  };

  // Close modal
  const handleCloseModal = () => {
    setSelectedVideo(null);
  };

  // Close modal on backdrop click
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCloseModal();
    }
  };

  return (
    <div className="testimonial-section">
      <div className="testimonial-container">
        {/* Title Section */}
        <div className="testimonial-header" data-aos="fade-up">
          <h2 className="testimonial-title">Customer Testimonials</h2>
          {/* <p className="testimonial-subtitle">
            Discover what our clients say about working with e-con Systems' ITS vision solutions
          </p> */}
        </div>

        {/* Videos Grid */}
        <div className="testimonials-grid">
          {videoTestimonials.map((video) => (
            <div 
              key={video.id} 
              className="testimonial-card" 
              data-aos="fade-up" 
              data-aos-delay={video.id * 100}
            >
              <div 
                className="video-box"
                onClick={() => handleVideoClick(video.videoId)}
              >
                <img 
                  src={getThumbnailUrl(video.videoId)} 
                  alt={video.title}
                  className="video-thumb"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 180"%3E%3Crect fill="%23444" width="320" height="180"/%3E%3Ctext x="50%25" y="50%25" font-size="16" fill="white" text-anchor="middle" dy=".3em"%3EVideo Thumbnail%3C/text%3E%3C/svg%3E';
                  }}
                />
                {/* Play Icon Overlay */}
                <span className="play-icon">▶</span>
              </div>

              <div className="video-content">
                <h3 className="video-title">{video.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      {selectedVideo && (
        <div className="video-modal-overlay" onClick={handleBackdropClick}>
          <div className="video-modal-content">
            <button className="modal-close-btn" onClick={handleCloseModal}>
              ✕
            </button>
            <div className="video-player-wrapper">
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1`}
                title="Customer Testimonial Video"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Testimonial;
