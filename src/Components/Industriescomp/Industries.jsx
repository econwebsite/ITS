import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import AOS from 'aos';
import './industries.css';
import industries from "../../assets/industries.png"
import prductimg from "../../assets/homepage/bullet-camera.png"


const slugify = (text) => text.toLowerCase().replace(/ /g, '-');
const deslugify = (slug) => {
  const match = tabContentData.find((t) => slugify(t.tab) === slug);
  return match?.tab || tabContentData[0].tab;
};

const tabContentData = [
  {
    tab: 'Smart Cities',
    paragraph: "Cities today are evolving into smart ecosystems where data-driven decision-making is key to safety, mobility, and sustainability. At the heart of this transformation is vision AI—enabling real-time monitoring, traffic optimization, automated parking, and public safety. e-con Systems empowers smart cities with industrial-grade, AI-ready camera solutions that seamlessly integrate into urban infrastructure, delivering accurate insights, round-the-clock reliability, and unmatched performance in challenging environments.",
    sections: [
      {
        title: 'Smart Traffic Management',
        description:
          'Enable real-time vehicle detection, classification, and traffic enforcement using global shutter, high-resolution, and edge AI cameras.',
        image: industries,

      },
      {
        title: 'Parking Lot Management',
        description:
          'Automate slot occupancy detection, ANPR, illegal parking alerts, and seamless access control—even in challenging lighting conditions.',
        image: industries,

      },
      {
        title: 'Automated Tolling & ALPR',
        description:
          'Replace transponder-based tolling with low-infrastructure, AI-powered solutions for license plate recognition and dynamic toll enforcement.',
        image: industries,

      },
    ],
    products: [
      {
        name: 'PTZ Camera Series',
        image: prductimg,
      },

      {
        name: 'Camera Modules for ITS ',
        image: prductimg,
      },
      {
        name: 'AI Vision Box Series',
        image: prductimg,
      },
    ],
  },
  {
    tab: 'Traffic Management',
    paragraph: [
      "Modern traffic enforcement demands more than just passive monitoring—it requires real-time intelligence and automation. With increasing traffic volumes and safety concerns, law enforcement and urban planners are turning to vision-based systems for faster violation detection, accurate evidence capture, and improved compliance.",
      "e-con Systems offers high-performance traffic enforcement cameras with global shutter, high-resolution sensors, and edge AI capabilities. From red-light and speed violation detection to stop line enforcement and intersection analytics, our solutions are purpose-built for accuracy, scalability, and 24x7 reliability."
    ],

    sections: [
      {
        title: 'Red-Light Violation Detection ',
        description:
          'Capture vehicles crossing stop lines or running red lights using synchronized high-speed imaging and AI inference.',
        image: industries,

      },
      {
        title: 'Speed & Lane Violation Enforcement',
        description:
          'Detect speed limit breaches, lane misuse, and illegal overtaking with low-latency, on-device analytics.',
        image: industries,

      },
      {
        title: 'Intersection & Stop Line Monitoring',
        description:
          'Gain full situational awareness at intersections with wide-angle, global shutter cameras and zone-based detection.',
        image: industries,

      },
      {
        title: 'Vehicle Classification & Number Plate Capture',
        description:
          'Accurately identify vehicle type, class, and license plate across regions with multi-format ANPR/ALPR capabilities.',
        image: industries,

      },
    ],
    products: [
      {
        name: 'PTZ Camera Series',
        image: prductimg,
      },

      {
        name: 'Camera Modules for ITS ',
        image: prductimg,
      },
      {
        name: 'AI Vision Box Series',
        image: prductimg,
      },
    ],
  },
  {
    tab: 'Tolling & Highway Infrastructure',
    paragraph: [
      "Highways are rapidly transforming into intelligent corridors where real-time insights drive seamless mobility, accurate billing, and better commuter experiences. Traditional tolling infrastructure—reliant on transponders, gantries, or manual intervention—is giving way to edge AI-driven vision systems.",
      "e-con Systems delivers plug-and-play, industrial-grade camera solutions built for automated tolling and highway enforcement—combining global shutter imaging, edge processing, and multi-lane license plate recognition for unmatched accuracy, even at high speeds and in harsh outdoor conditions."
    ],
    sections: [
      {
        title: 'Free-Flow Tolling with ANPR',
        description:
          'Capture and process license plates with high precision using global shutter and high-res sensors—even on fast-moving vehicles in variable lighting.',
        image: industries,

      },
      {
        title: 'Dynamic Toll Pricing & Enforcement',
        description:
          'Enable real-time pricing based on lane usage, vehicle type, speed, and congestion level using on-device AI.',
        image: industries,

      },
      {
        title: 'Multi-Lane Monitoring & Occupancy Detection',
        description:
          'Track vehicles across multiple lanes simultaneously, support occupancy-based tolling (1–4+ passengers), and ensure data accuracy with synchronized imaging.',
        image: industries,

      },
      {
        title: 'Edge-Ready for Highway Environments',
        description:
          'Designed for rugged roadside deployment, our systems support solar power, wireless backhaul, and IP67 enclosures to withstand heat, rain, and vibration.',
        image: industries,

      },
    ],
    products: [
      {
        name: 'PTZ Camera Series',
        image: prductimg,
      },

      {
        name: 'Camera Modules for ITS ',
        image: prductimg,
      },
      {
        name: 'AI Vision Box Series',
        image: prductimg,
      },
    ],
  },
  {
    tab: 'Parking Lot Management',
    paragraph: "One of the top benefits of smart traffic management systems is the predictive insights that they offer. Data collected from smart traffic sensors can be analyzed to assist governing bodies in determining how frequently roadways are used, the daily quantity of vehicles at specific intersections, and essential urban data. Ultimately, ITS can provide crucial preventative roadway insights.",

    sections: [
      {
        title: 'Application 2',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident',
        image: industries,

      },
      {
        title: 'Parking Lot Management',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident',
        image: industries,

      },
    ],
    products: [
      {
        name: 'PTZ Camera Series',
        image: prductimg,
      },

      {
        name: 'Camera Modules for ITS ',
        image: prductimg,
      },
      {
        name: 'AI Vision Box Series',
        image: prductimg,
      },
    ],
  },
  {
    tab: 'Public safety & law enforcement',
    paragraph: "Public safety is evolving—and today, it’s powered by vision intelligence. Law enforcement agencies and urban security operators are increasingly relying on real-time video analytics to respond faster, deter crime, and ensure safer communities. e-con Systems provides AI-ready, industrial-grade camera solutions tailored for public surveillance, facial detection, crowd analysis, border control, and incident monitoring—delivering clear imaging in all environments and enabling AI inference at the edge.",

    sections: [
      {
        title: 'Urban Surveillance & Monitoring',
        description:
          'Deploy synchronized multi-camera systems with wide-angle, low-light, and HDR capabilities to monitor public areas 24x7.',
        image: industries,

      },
      {
        title: 'Crowd & Behavior Analytics',
        description:
          'Detect unusual behavior, monitor crowd density, and support emergency response with AI-based video intelligence.',
        image: industries,

      },
      {
        title: 'Facial & Object Detection at the Edge',
        description:
          'Enable secure and privacy-aware facial or object detection with support for on-device inference and real-time alerts.',
        image: industries,

      },


    ],
    products: [
      {
        name: 'PTZ Camera Series',
        image: prductimg,
      },

      {
        name: 'Camera Modules for ITS ',
        image: prductimg,
      },
      {
        name: 'AI Vision Box Series',
        image: prductimg,
      },
    ],
  },


];

const tabs = tabContentData.map((item) => item.tab);

export default function SmartCities() {
  const { tabSlug } = useParams();
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState(() => deslugify(tabSlug));

  useEffect(() => {
    const validTab = deslugify(tabSlug);
    setActiveTab(validTab);
  }, [tabSlug]);

  const currentTab = tabContentData.find((t) => t.tab === activeTab);

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: true,
      easing: 'ease-out-cubic',
      offset: 0,
    });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      AOS.refresh();
    }, 100);
  }, [activeTab]);

  const handleTabClick = (tab) => {
    navigate(`/${slugify(tab)}`);
  };

  return (
    <div style={{ backgroundColor: "#f1f2f2" }}>
      <div className="Marketcomp-Wrapper">
        <div className="mainContainer">
          <h1>MARKETS WE SERVE</h1>

          <div className="Marketcomp-Tabs">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`Marketcomp-TabItem ${activeTab === tab ? 'active' : ''}`}
                onClick={() => handleTabClick(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className='Marketcomp-tabcontent' key={activeTab}>
            {currentTab?.paragraph && (
              <div className="Marketcomp-tab-paragraph">
                {Array.isArray(currentTab.paragraph) ? (
                  currentTab.paragraph.map((para, idx) => <p key={idx}>{para}</p>)
                ) : (
                  <p>{currentTab.paragraph}</p>
                )}
              </div>
            )}

            {currentTab?.sections.map((section, idx) => (
              <div key={idx} className="Marketcomp-SectionBlock">
                <div
                  className={`Marketcomp-section-content ${idx % 2 !== 0 ? 'reverse' : ''}`}
                  data-aos={idx % 2 === 0 ? 'fade-right' : 'fade-left'}
                >
                  <div className="Marketcomp-text-side" data-aos="fade-up-left">
                    <h2>{section.title}</h2>
                    <p>{section.description}</p>
                  </div>
                  <div className="Marketcomp-image-side">
                    <img src={section.image} alt={section.title} />
                  </div>
                </div>
              </div>
            ))}

            {currentTab?.products && (
              <>
                <h3 className="Marketcomp-product-heading">Recommended Products</h3>
                <div className="Marketcomp-product-grid-container">
                  <div className="Marketcomp-product-grid">
                    {currentTab.products.map((product, index) => (
                      <div className="Marketcomp-product-card" key={index} data-aos="zoom-in">
                        <img src={product.image} alt={product.name} />
                        <h4>{product.name}</h4>
                        <p>{product.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}