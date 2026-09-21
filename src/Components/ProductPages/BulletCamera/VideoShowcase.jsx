import React, { useState } from 'react';
import FsLightbox from 'fslightbox-react';
import './VideoShowcase.css';

const VideoShowcase = ({ videoData }) => {
  const [toggler, setToggler] = useState(false);
  const [selectedVideoIndex, setSelectedVideoIndex] = useState(0);
  const videos = Array.isArray(videoData) ? videoData : [videoData];

  // Extract YouTube video ID from embed/watch/short URLs and generate thumbnail.
  const getYouTubeThumbnail = (link) => {
    try {
      const normalizedLink = String(link || '');
      const videoId =
        normalizedLink.match(/(?:youtube\.com\/watch\?v=|youtube\.com\/embed\/|youtu\.be\/)([^&?/]+)/)?.[1];

      if (videoId) {
        return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
      }
    } catch (error) {
      console.error('Error extracting YouTube video ID:', error);
    }
    return videos[0]?.image || '';
  };

  const getYouTubeEmbedLink = (link) => {
    try {
      const normalizedLink = String(link || '');
      const videoId =
        normalizedLink.match(/(?:youtube\.com\/watch\?v=|youtube\.com\/embed\/|youtu\.be\/)([^&?/]+)/)?.[1];

      if (videoId) {
        return `https://www.youtube.com/embed/${videoId}`;
      }
    } catch (error) {
      console.error('Error extracting YouTube video ID:', error);
    }

    return link;
  };

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={videos.map((video) => getYouTubeEmbedLink(video.link))}
        sourceIndex={selectedVideoIndex}
        slideshow={{
          isEnabled: false,
        }}
        prevKeyTitle="Prev"
        nextKeyTitle="Next"
        showThumbsOnMount={false}
        disableLocalStorage={true}
      />
      
      <section className="video-showcase">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Related Videos</h2>
          </div>
          <div className="video-grid">
            {videos.map((video, index) => (
              <div className="video-container" key={video.link}>
                <div
                  className="video-wrapper"
                  onClick={() => {
                    setSelectedVideoIndex(index);
                    setToggler((prev) => !prev);
                  }}
                >
                  <img
                    src={getYouTubeThumbnail(video.link)}
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
    </>
  );
};

export default VideoShowcase;
