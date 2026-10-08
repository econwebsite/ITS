import React, { useEffect, useState } from 'react';
import './Homebanner.css';
import monitoringBannerImage from '../../../assets/homepage/vision-that-powers-safer-roads-home-page-banner-image-en.jpg';
import itsindiacongressBanner from '../../../assets/its-india-banner-en.jpg';
import Modelbutton from '../../Button comp/Modelbutton';

const bannerSlides = [
   {
    id: 1,
    image: itsindiacongressBanner,
    alt: 'ITS India Congress',
    link: 'https://www.e-consystems.com/events/its-india-congress-2026.asp',
  },
  {
    id: 2,
    image: monitoringBannerImage,
    title: 'Vision that powers safer roads',
    subtitle:
      'Real-time AI insights to improve safety, flow, and operational response.',
    buttonText: 'Explore ITS Solutions >>',
    productName: 'Dynamic Monitoring System',
    link: null,
  },
];

const slides = bannerSlides.filter((slide) => Boolean(slide?.image));

const ImageBanner = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  useEffect(() => {
    if (slides.length <= 1) {
      return;
    }

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  if (slides.length === 0) {
    return null;
  }

  const currentSlide = slides[activeIndex];

  const handleBannerClick = () => {
    setIsContactModalOpen(true);
  };

  const slideMarkup = (
    <img
      className="image-banner"
      src={currentSlide.image}
      alt={currentSlide.alt || currentSlide.title}
    />
  );

  return (
    <div className="image-banner-container">
      <div className="image-banner-slide">
        {currentSlide.link ? (
          <a
            href={currentSlide.link}
            target="_blank"
            rel="noopener noreferrer"
            className="banner-link"
            aria-label={currentSlide.alt}
          >
            {slideMarkup}
          </a>
        ) : (
          <div
            className="banner-image-wrapper"
            onClick={handleBannerClick}
            onKeyDown={(event) => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                handleBannerClick();
              }
            }}
            role="button"
            tabIndex={0}
          >
            {slideMarkup}
          </div>
        )}
      </div>

      {slides.length > 1 && (
        <div className="carousel-dots" aria-label="Banner navigation">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Show slide ${index + 1}`}
            />
          ))}
        </div>
      )}

      <div style={{ display: 'none' }} aria-hidden="true">
        <Modelbutton
          className="computebox-contactbutton gtm-btn"
          text="Contact Us"
          backgroundColor="#69ba2f"
          animationColor="#00aeef"
          hoverColor="#00aeef"
          padding="10px 30px"
          fontSize="14px"
          productName="Contact Us"
          type="contact"
          isOpen={isContactModalOpen}
          onOpen={() => setIsContactModalOpen(true)}
          onClose={() => setIsContactModalOpen(false)}
        />
      </div>
    </div>
  );
};

export default ImageBanner;
