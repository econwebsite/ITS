import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import './Industries.css';

import smartcities from "../../../assets/homepage/smart-cities.png"; 
import traffic from "../../../assets/homepage/traffic-enforcement.png"; 
import tolling from "../../../assets/homepage/tolling-infrastucture.png"; 
import parking from "../../../assets/homepage/parking-management.png"; 

const comp = [
  { title: 'Smart Cities', image: smartcities },
  { title: 'Traffic Management', image: traffic },
  { title: 'Tolling & Highway Infrastructure', image: tolling },
  { title: 'Parking Management', image: parking },
];

const Industries = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });

    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % comp.length);
    }, 2000); // 2 seconds per cycle

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="industries-section">
      <h2 className="industries-title">Industries</h2>
                  <div className="mainContainer">

      <div className="industries-grid">
        {comp.map((item, index) => (
          <div
            className="industry-card"
            key={index}
            data-aos="fade-left"
            data-aos-delay={index * 200}
          >
            <img
              src={item.image}
              alt={item.title}
              className={`industry-img ${index === activeIndex ? 'active' : ''}`}
            />
            <p className={`industry-label ${index === activeIndex ? 'active' : ''}`}>
              {item.title}
            </p>
          </div>
        ))}
      </div>
      </div>
    </div>
  );
};

export default Industries;
