import React, { useState } from 'react';
import './industries.css';
import industries from "../../assets/industries.png"
import prductimg from "../../assets/homepage/bullet-camera.png"

const tabContentData = [
  {
    tab: 'Smart Traffic Management',
    paragraph:"One of the top benefits of smart traffic management systems is the predictive insights that they offer. Data collected from smart traffic sensors can be analyzed to assist governing bodies in determining how frequently roadways are used, the daily quantity of vehicles at specific intersections, and essential urban data. Ultimately, ITS can provide crucial preventative roadway insights.",
    sections: [
      {
        title: 'Automated Tolling & ALPR',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident',
        image: industries,
        products: [
          {
            name: 'PTZ Camera Series',
            description: 'Dynamic monitoring for traffic violations, red light enforcement, and near-miss detection at intersections.',
            image: prductimg,
          },
          {
            name: 'Bullet Camera Series',
            description: 'Reliable fixed-view cameras for lane discipline, speed enforcement, and tolling applications',
            image: prductimg,
          },
          {
            name: 'Camera Modules for ITS ',
            description: 'Advanced imaging with global shutter, HDR, low light performance, and high-speed GigE connectivity',
            image: prductimg,
          },
           {
            name: 'AI Vision Box Series',
            description: 'AI Vision Box for real-time edge analytics with NPU, multi-camera support, and rugged design for ITS',
            image: prductimg,
          },
        ],
      },
      {
        title: 'Parking Lot Management',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident',
        image: industries,
         products: [
          {
            name: 'PTZ Camera Series',
            description: 'Dynamic monitoring for traffic violations, red light enforcement, and near-miss detection at intersections.',
            image: prductimg,
          },
          
          {
            name: 'Camera Modules for ITS ',
            description: 'Advanced imaging with global shutter, HDR, low light performance, and high-speed GigE connectivity',
            image: prductimg,
          },
           {
            name: 'AI Vision Box Series',
            description: 'AI Vision Box for real-time edge analytics with NPU, multi-camera support, and rugged design for ITS',
            image: prductimg,
          },
        ],
      },
    ],
  },
   {
    tab: 'Parking Lot Management',
        paragraph:"One of the top benefits of smart traffic management systems is the predictive insights that they offer. Data collected from smart traffic sensors can be analyzed to assist governing bodies in determining how frequently roadways are used, the daily quantity of vehicles at specific intersections, and essential urban data. Ultimately, ITS can provide crucial preventative roadway insights.",

    sections: [
      {
        title: 'Application ',
        description:          
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident',
        image: industries,
        products: [
          {
            name: 'PTZ Camera Series',
            description: 'Dynamic monitoring for traffic violations, red light enforcement, and near-miss detection at intersections.',
            image: prductimg,
          },
          {
            name: 'Bullet Camera Series',
            description: 'Reliable fixed-view cameras for lane discipline, speed enforcement, and tolling applications',
            image: prductimg,
          },
          {
            name: 'Camera Modules for ITS ',
            description: 'Advanced imaging with global shutter, HDR, low light performance, and high-speed GigE connectivity',
            image: prductimg,
          },
           {
            name: 'AI Vision Box Series',
            description: 'AI Vision Box for real-time edge analytics with NPU, multi-camera support, and rugged design for ITS',
            image: prductimg,
          },
        ],
      },
      {
        title: 'Parking Lot Management',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident',
        image: industries,
         products: [
          {
            name: 'PTZ Camera Series',
            description: 'Dynamic monitoring for traffic violations, red light enforcement, and near-miss detection at intersections.',
            image: prductimg,
          },
          
          {
            name: 'Camera Modules for ITS ',
            description: 'Advanced imaging with global shutter, HDR, low light performance, and high-speed GigE connectivity',
            image: prductimg,
          },
           {
            name: 'AI Vision Box Series',
            description: 'AI Vision Box for real-time edge analytics with NPU, multi-camera support, and rugged design for ITS',
            image: prductimg,
          },
        ],
      },
    ],
  },
   {
    tab: 'Smart Cities',
        paragraph:"One of the top benefits of smart traffic management systems is the predictive insights that they offer. Data collected from smart traffic sensors can be analyzed to assist governing bodies in determining how frequently roadways are used, the daily quantity of vehicles at specific intersections, and essential urban data. Ultimately, ITS can provide crucial preventative roadway insights.",

     sections: [
      {
        title: 'Automated Application1',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident',
        image: industries,
        products: [
          {
            name: 'PTZ Camera Series',
            description: 'Dynamic monitoring for traffic violations, red light enforcement, and near-miss detection at intersections.',
            image: prductimg,
          },
          {
            name: 'Bullet Camera Series',
            description: 'Reliable fixed-view cameras for lane discipline, speed enforcement, and tolling applications',
            image: prductimg,
          },
          {
            name: 'Camera Modules for ITS ',
            description: 'Advanced imaging with global shutter, HDR, low light performance, and high-speed GigE connectivity',
            image: prductimg,
          },
           {
            name: 'AI Vision Box Series',
            description: 'AI Vision Box for real-time edge analytics with NPU, multi-camera support, and rugged design for ITS',
            image: prductimg,
          },
        ],
      },
      {
        title: 'Parking Lot Management',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident',
        image: industries,
         products: [
          {
            name: 'PTZ Camera Series',
            description: 'Dynamic monitoring for traffic violations, red light enforcement, and near-miss detection at intersections.',
            image: prductimg,
          },
          
          {
            name: 'Camera Modules for ITS ',
            description: 'Advanced imaging with global shutter, HDR, low light performance, and high-speed GigE connectivity',
            image: prductimg,
          },
           {
            name: 'AI Vision Box Series',
            description: 'AI Vision Box for real-time edge analytics with NPU, multi-camera support, and rugged design for ITS',
            image: prductimg,
          },
        ],
      },
    ],
  },
   {
    tab: 'Tolling and Highway Infrastructure',
        paragraph:"One of the top benefits of smart traffic management systems is the predictive insights that they offer. Data collected from smart traffic sensors can be analyzed to assist governing bodies in determining how frequently roadways are used, the daily quantity of vehicles at specific intersections, and essential urban data. Ultimately, ITS can provide crucial preventative roadway insights.",

     sections: [
      {
        title: 'Application 2',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident',
        image: industries,
        products: [
          
           {
            name: 'AI Vision Box Series',
            description: 'AI Vision Box for real-time edge analytics with NPU, multi-camera support, and rugged design for ITS',
            image: prductimg,
          },
        ],
      },
      {
        title: 'Parking Lot Management',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident',
        image: industries,
         products: [
        
          
          {
            name: 'Camera Modules for ITS ',
            description: 
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident',
            image: prductimg,
          },
           {
            name: 'AI Vision Box Serie',
            description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident',
            image: prductimg,
          },
        ],
      },
    ],
  },
   {
    tab: 'Public safety',
        paragraph:"One of the top benefits of smart traffic management systems is the predictive insights that they offer. Data collected from smart traffic sensors can be analyzed to assist governing bodies in determining how frequently roadways are used, the daily quantity of vehicles at specific intersections, and essential urban data. Ultimately, ITS can provide crucial preventative roadway insights.",

     sections: [
      {
        title: 'Automated Tolling & ALPR',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident',
        image: industries,
        products: [
          {
            name: 'PTZ Camera Series',
            description: 
            'Dynamic monitoring for traffic violations, red light enforcement, and near-miss detection at intersections.',
            image: prductimg,
          },
          {
            name: 'Bullet Camera Series',
            description: 'Reliable fixed-view cameras for lane discipline, speed enforcement, and tolling applications',
            image: prductimg,
          },
          {
            name: 'Camera Modules for ITS ',
            description: 'Advanced imaging with global shutter, HDR, low light performance, and high-speed GigE connectivity',
            image: prductimg,
          },
           {
            name: 'AI Vision Box Serie',
            description: 'AI Vision Box for real-time edge analytics with NPU, multi-camera support, and rugged design for ITS',
            image: prductimg,
          },
        ],
      },
      {
        title: 'Parking Lot Management',
        description:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident',
        image: industries,
         products: [
          {
            name: 'PTZ Camera Series',
            description: 'Dynamic monitoring for traffic violations, red light enforcement, and near-miss detection at intersections.',
            image: prductimg,
          },
          
          {
            name: 'Camera Modules for ITS ',
            description: 'Advanced imaging with global shutter, HDR, low light performance, and high-speed GigE connectivity',
            image: prductimg,
          },
           {
            name: 'AI Vision Box Serie',
            description: 'AI Vision Box for real-time edge analytics with NPU, multi-camera support, and rugged design for ITS',
            image: prductimg,
          },
        ],
      },
    ],
  },
  
  
];

const tabs = tabContentData.map((item) => item.tab);

export default function SmartCities() {
  const [activeTab, setActiveTab] = useState(tabs[0]);
  const currentTab = tabContentData.find((t) => t.tab === activeTab);

  return (
    <div className="Marketcomp-Wrapper">
      <h1>MARKETS WE SERVE</h1>
      <div className="Marketcomp-Tabs">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`Marketcomp-TabItem ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {currentTab?.paragraph && (
        <div className="Marketcomp-tab-paragraph">
          <p>{currentTab.paragraph}</p>
        </div>
      )}

      {currentTab?.sections.map((section, idx) => (
        <div key={idx} className="Marketcomp-SectionBlock">
          <div className="Marketcomp-section-content">
            <div className="Marketcomp-text-side">
              <h2>{section.title}</h2>
              <p>{section.description}</p>
            </div>
            <div className="Marketcomp-image-side">
              <img src={section.image} alt={section.title} />
            </div>
          </div>

          <h3 className="Marketcomp-product-heading">Recommended Products</h3>
          <div className="Marketcomp-product-grid-container">
            <div className="Marketcomp-product-grid">
              {section.products.map((product, index) => (
                <div className="Marketcomp-product-card" key={index}>
                  <img src={product.image} alt={product.name} />
                  <h4>{product.name}</h4>
                  <p>{product.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}