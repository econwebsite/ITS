import React, { useEffect } from 'react';
import AOS from 'aos';
import './Certificate.css';
import iso9001Img from '../../../assets/certifications/iso-9001-certificate.jpg';

const Certificate = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
  }, []);

  // Certification data - Add your certification images here
  const certificates = [
    {
      id: 1,
      name: 'ISO 9001',
      image: iso9001Img, // Update with actual image path
      alt: 'ISO 9001 Certification'
    },
  ];

  return (
    <div className="certificate-section">
      <div className="certificate-container">
        {/* Title Section */}
        <div className="certificate-header" data-aos="fade-up">
          <h2 className="certificate-title">Certifications & Standards</h2>
        </div>

        {/* Certificates Grid */}
        <div className="certificates-grid">
          {certificates.map((cert) => (
            <div 
              key={cert.id} 
              className="certificate-card" 
              data-aos="fade-up" 
              data-aos-delay={cert.id * 100}
            >
              <div className="certificate-image-wrapper">
                <img 
                  src={cert.image} 
                  alt={cert.alt}
                  className="certificate-image"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"%3E%3Crect fill="%23e8eef5" width="200" height="200"/%3E%3C/svg%3E';
                  }}
                />
              </div>
              {/* <p className="certificate-name">{cert.name}</p> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificate;
