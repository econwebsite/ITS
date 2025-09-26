import React, { useState, useRef, useEffect } from "react";
import "./Applications.css";

const tabs = [
  "Smart Traffic Management",
  "Parking Lot Management",
  "Smart Cities",
  "Tolling and Highway Infrastructure",
  "Public Safety",
];

const tabContent = {
  "Smart Traffic Management": [
    {
      img: "https://cdn-icons-png.flaticon.com/512/744/744465.png",
      title: "Smart Traffic Management",
      desc: "Enable real-time vehicle detection, classification, and traffic enforcement using global shutter, high-resolution, and edge AI cameras.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/2972/2972185.png",
      title: "Traffic Flow Optimization",
      desc: "AI-powered traffic lights and sensors to reduce congestion and improve city mobility.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png",
      title: "Accident Detection",
      desc: "Early detection of accidents and emergencies for quick response and reduced risks.",
    },
  ],
  "Parking Lot Management": [
    {
      img: "https://cdn-icons-png.flaticon.com/512/854/854878.png",
      title: "Slot Occupancy Detection",
      desc: "Automate slot occupancy detection using AI cameras and sensors.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/2991/2991112.png",
      title: "Illegal Parking Alerts",
      desc: "Detect unauthorized vehicles and send instant alerts.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/1086/1086581.png",
      title: "Seamless Access Control",
      desc: "Enable ANPR-based automated vehicle access without delays.",
    },
  ],
  "Smart Cities": [
    {
      img: "https://cdn-icons-png.flaticon.com/512/854/854929.png",
      title: "Urban Surveillance",
      desc: "AI cameras ensure 24/7 monitoring of critical city zones.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/1903/1903162.png",
      title: "Environmental Monitoring",
      desc: "Real-time air quality, noise, and pollution monitoring.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/206/206865.png",
      title: "Smart Lighting",
      desc: "Adaptive street lighting powered by sensors and AI.",
    },
  ],
  "Tolling and Highway Infrastructure": [
    {
      img: "https://cdn-icons-png.flaticon.com/512/2548/2548228.png",
      title: "Automated Tolling",
      desc: "Seamless tolling with ANPR cameras and smart payment systems.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/1052/1052849.png",
      title: "Highway Monitoring",
      desc: "Detect traffic violations and improve highway safety.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/235/235861.png",
      title: "Weigh-in-Motion",
      desc: "Smart systems to detect overloaded vehicles in real-time.",
    },
  ],
  "Public Safety": [
    {
      img: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
      title: "Video Surveillance",
      desc: "AI-enabled surveillance for public places and critical assets.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
      title: "Emergency Response",
      desc: "Faster incident detection and automated emergency dispatch.",
    },
    {
      img: "https://cdn-icons-png.flaticon.com/512/3062/3062634.png",
      title: "Crowd Management",
      desc: "Monitor large gatherings and ensure safety with AI analytics.",
    },
  ],
};

const Applications = () => {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const [arrowLeft, setArrowLeft] = useState(0);
  const tabsRef = useRef([]);

  useEffect(() => {
    const activeIdx = tabs.indexOf(activeTab);
    if (tabsRef.current[activeIdx]) {
      const btn = tabsRef.current[activeIdx];
      setArrowLeft(btn.offsetLeft + btn.offsetWidth / 2);
    }
  }, [activeTab]);

   return (
    <div className="applications-container">
      <h2 className="applications-title">Markets We Serve</h2>

      {/* Desktop Tabs */}
      <div className="tabs-desktop">
        {tabs.map((tab, idx) => (
          <button
            key={tab}
            ref={(el) => (tabsRef.current[idx] = el)}
            onClick={() => setActiveTab(tab)}
            className={`tab-btn ${activeTab === tab ? "active" : ""}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Mobile Dropdown */}
      <div className="tabs-mobile">
        <select
          value={activeTab}
          onChange={(e) => setActiveTab(e.target.value)}
        >
          {tabs.map((tab) => (
            <option key={tab} value={tab}>
              {tab}
            </option>
          ))}
        </select>
      </div>

      {/* Inner Grey Background with Arrow */}
      <div className="tab-content-wrapper">
        <div
          className="active-tab-arrow"
          style={{ left: `${arrowLeft}px` }}
        ></div>

        <div className="cards-container">
          {tabContent[activeTab].map((item, idx) => (
            <div key={idx} className="card">
              <img src={item.img} alt={item.title} className="card-img" />
              <h3 className="card-title">{item.title}</h3>
              <p className="card-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Applications;
