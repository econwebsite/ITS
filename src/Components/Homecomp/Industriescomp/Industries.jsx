import React, { useState, useEffect } from 'react';
import Snowfall from 'react-snowfall';
import './Industries.css';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import smart from "../../../assets/homepage/smart-cities.png";
import traffic from "../../../assets/homepage/traffic-enforcement.png";
import tolling from "../../../assets/homepage/tolling-infrastucture.png";
import parking from "../../../assets/homepage/parking-management.png";

const cards = [
  { id: 1, title: 'Smart Cities', color: '#E4E0E1', image: smart, link: "/smart-cities" },
  { id: 2, title: 'Traffic Management', color: '#ADB2D4', image: traffic, link: "/traffic-management" },
  { id: 3, title: 'Tolling & Highway Infrastructure', color: '#DCCFC0', image: tolling, link: "/tolling-&-highway-infrastructure" },
  { id: 4, title: 'Parking Lot Management', color: '#D0DDD0', image: parking, link: "/parking-lot-management" },
  { id: 5, title: 'Public safety & law enforcement', color: '#E6B2BA', image: parking, link: "/public-safety-&-law-enforcement" },
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(2);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  const getOffset = (index) => {
    let offset = index - currentIndex;
    if (offset > cards.length / 2) offset -= cards.length;
    if (offset < -cards.length / 2) offset += cards.length;
    return offset;
  };

  return (
    <div className="Industries-wrapper">
     <div className="Industries-snow-container">
    <Snowfall
      snowflakeCount={150}
      color="white"
      style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        pointerEvents: 'none',
        zIndex: 0,
      }}
    />

      <div className="Industries-content">
        <h2 className="Industries-title">Industries</h2>
        <div className="Industries-container">
          {cards.map((card, index) => {
            const offset = getOffset(index);
            const absOffset = Math.abs(offset);

            const zIndex = 10 - absOffset;
            const scale = 1 - absOffset * 0.1;
            const rotateY = offset * 5;
            const translateX = offset * 195;

            return (
              <div
                key={card.id}
                className={`Industries-card ${offset === 0 ? 'active' : ''}`}
                style={{
                  transform: `translateX(${translateX}px) scale(${scale}) rotateY(${rotateY}deg)`,
                  zIndex,
                  backgroundColor: card.color,
                  opacity: absOffset > 2 ? 0 : 1,
                }}
              >
                <Link to={card.link} className="Industries-link">
                  <img src={card.image} alt={card.title} />
                </Link>
                <h3>{card.title}</h3>
                <Link to={card.link}>
                  <button className="Industries-btn">Know more</button>
                </Link>
              </div>
            );
          })}
        </div>
        <div className="Industries-arrows">
          <button onClick={handlePrev}><ArrowLeft /></button>
          <button onClick={handleNext}><ArrowRight /></button>
        </div>
      </div>
    </div>
    </div>
  );
}
