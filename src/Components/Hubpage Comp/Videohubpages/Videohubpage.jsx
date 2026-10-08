import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import FsLightbox from 'fslightbox-react';
import './Videohubpage.css';
import { videoHubData } from '../../../utils/videoHubData';

const Videohubpage = () => {
  const [toggler, setToggler] = useState(false);
  const [slide, setSlide] = useState(1);

  const handleVideoClick = (index) => {
    setSlide(index + 1);
    setToggler(!toggler);
  };

  const lightboxSources = videoHubData.map((video) => video.embedLink);

  return (
    <div className="videohub-page">
      <Helmet>
        <title>ITS Videos Hub</title>
        <meta
          name="description"
          content="Explore ITS videos covering ANPR, ALPR, traffic enforcement, tolling and edge AI use cases."
        />
      </Helmet>

      <FsLightbox
        toggler={toggler}
        sources={lightboxSources}
        slide={slide}
        slideshow={{ isEnabled: false }}
        prevKeyTitle="Prev"
        nextKeyTitle="Next"
        showThumbsOnMount={false}
        disableLocalStorage={true}
      />

      <div className="mainContainer videohub-container">
        <div className="videohub-header">
          <h1>Our Videos</h1>
          <p>Watch product demos, solution explainers, and ITS deployment showcases.</p>
        </div>

        <div className="videohub-grid">
          {videoHubData.map((video, index) => (
            <article
              className="videohub-card"
              key={video.embedLink}
              onClick={() => handleVideoClick(index)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  handleVideoClick(index);
                }
              }}
            >
              <div className="videohub-thumb">
                <img src={video.image} alt={video.title} className="videohub-image" />
                {video.showYoutubeBadge && (
                  <span className="videohub-youtube-badge" aria-hidden="true">
                    <svg viewBox="0 0 68 48" width="52" height="37">
                      <path
                        d="M66.52,7.77a8,8,0,0,0-5.64-5.66C56.36.9,34,0.9,34,0.9s-22.36,0-26.88,1.21A8,8,0,0,0,1.48,7.77,83.4,83.4,0,0,0,.9,24a83.4,83.4,0,0,0,.58,16.23,8,8,0,0,0,5.64,5.66C11.64,47.1,34,47.1,34,47.1s22.36,0,26.88-1.21a8,8,0,0,0,5.64-5.66A83.4,83.4,0,0,0,67.1,24,83.4,83.4,0,0,0,66.52,7.77Z"
                        fill="#ff0000"
                      />
                      <polygon points="27 34 45 24 27 14" fill="#ffffff" />
                    </svg>
                  </span>
                )}
              </div>
              <div className="videohub-content">
                <h3>{video.title}</h3>
                <p>{video.description}</p>
                <div className="videohub-tags">
                  {video.hashtags.map((tag) => (
                    <span key={`${video.embedLink}-${tag}`}>#{tag}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Videohubpage;
