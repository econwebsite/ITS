import React, { useState, useEffect } from 'react';
import { hasViewedPopup, markPopupAsViewed } from '../../utils/cookieUtils';
import './NewsAdsPopup.css';
import popupImg from '../../assets/its-america-popup-image-new.jpg'; 

const NewsAdsPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const popupId = 'its_america_news_popup';

  useEffect(() => {
    // Check if user has already closed this popup
    if (hasViewedPopup(popupId)) {
      setIsVisible(false);
    } else {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    markPopupAsViewed(popupId, 7); // Don't show again for 7 days
  };

  const handleImageClick = () => {
    markPopupAsViewed(popupId, 7); // Mark as viewed when user clicks the image
    window.open('https://www.e-consystems.com/events/its-america-2026.asp', '_blank');
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="news-ads-popup-overlay">
      <div
        className="news-ads-popup-container news-ads-image-only"
        onClick={handleImageClick}
        onKeyDown={(event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            handleImageClick();
          }
        }}
        role="button"
        tabIndex={0}
      >
        {/* Close Button */}
        <button
          className="news-ads-close-btn"
          onClick={(e) => {
            e.stopPropagation();
            handleClose();
          }}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.stopPropagation();
              handleClose();
            }
          }}
          aria-label="Close popup"
          title="Close"
        >
          ✕
        </button>

        {/* Full Width Image */}
        <img 
          src={popupImg} 
          alt="ITS America Conference Event"
          className="news-ads-image-full"
        />
      </div>
    </div>
  );
};

export default NewsAdsPopup;
