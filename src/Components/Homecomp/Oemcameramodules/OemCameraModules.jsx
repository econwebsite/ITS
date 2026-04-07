import React, { useEffect, useState } from 'react';
import { Table, Tag, Space, Divider } from 'antd';
import AOS from 'aos';
import './OemCameraModules.css';

const OemCameraModules = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    AOS.init({ once: true, duration: 1000 });
    
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Camera modules data
  const cameraData = [
    {
      opticalFormat: '1/1.7',
      cameras: [
        {
          mp: '8MP',
          name: 'OX08B40',
          url: 'https://www.e-consystems.com/gmsl-cameras/8mp-ox08b40-ip67-gmsl2-140db-hdr-camera.asp',
          badges: ['mipi', 'gmsl']
        }
      ]
    },
    {
      opticalFormat: '1/1.8',
      cameras: [
        {
          mp: '5MP',
          name: 'IMX568 - Global Shutter',
          url: 'https://www.e-consystems.com/camera-modules/5mp-sony-pregius-imx568-global-shutter-camera-module.asp',
          badges: ['mipi', 'gmsl']
        },
        {
          mp: '8MP',
          name: 'IMX678',
          url: 'https://www.e-consystems.com/camera-modules/4k-sony-starvis2-imx678-low-light-camera-module.asp',
          badges: ['mipi', 'gige']
        }
      ]
    },
    {
      opticalFormat: '1/2.5',
      cameras: [
        {
          mp: '5MP',
          name: 'OX05B1S - Global Shutter',
          url: 'https://www.e-consystems.com/gmsl-cameras/5mp-ox05b1s-rgb-ir-global-shutter-gmsl2-camera.asp',
          badges: ['gmsl']
        }
      ]
    },
    {
      opticalFormat: '1/2.6',
      cameras: [
        {
          mp: '2MP',
          name: 'AR0234 - Global Shutter',
          url: 'https://www.e-consystems.com/camera-modules/ar0234-global-shutter-camera-module.asp',
          badges: ['mipi', 'gige', 'gmsl', 'usb']
        }
      ]
    },
    {
      opticalFormat: '1/2.8',
      cameras: [
        {
          mp: '2MP',
          name: 'IMX662',
          url: 'https://www.e-consystems.com/camera-modules/sony-starvis-imx662-ultra-low-light-hdr-camera-module.asp',
          badges: ['mipi', 'gige']
        }
      ]
    },
    {
      opticalFormat: '1/3.1',
      cameras: [
        {
          mp: '3MP',
          name: 'IMX900 - Global Shutter',
          url: 'https://www.e-consystems.com/camera-modules/3mp-sony-pregius-imx900-global-shutter-camera-module.asp',
          badges: ['mipi', 'gmsl']
        }
      ]
    }
  ];

  const badgeConfig = {
     gige: { label: 'GigE', color: '#f39c12' },
    mipi: { label: 'MIPI CSI-2', color: '#3498db' },
    gmsl: { label: 'GMSL 2', color: '#27ae60' },
    usb: { label: 'USB', color: '#9b59b6' }
  };

  // Create table data structure
  const tableData = cameraData.map((row, index) => {
    const rowData = { key: index, opticalFormat: row.opticalFormat };
    
    // Group cameras by MP
    const mpGroups = { '2MP': null, '3MP': null, '5MP': null, '8MP': null };
    row.cameras.forEach(camera => {
      mpGroups[camera.mp] = camera;
    });

    Object.keys(mpGroups).forEach(mp => {
      rowData[mp] = mpGroups[mp];
    });

    return rowData;
  });

  // Table columns
  const columns = [
    {
      title: 'Optical Format',
      dataIndex: 'opticalFormat',
      key: 'opticalFormat',
      width: 100,
      render: (text) => <span className="optical-format-text">{text}</span>
    },
    {
      title: '2MP',
      dataIndex: '2MP',
      key: '2MP',
      width: 240,
      render: (camera) => renderCamera(camera)
    },
    {
      title: '3MP',
      dataIndex: '3MP',
      key: '3MP',
      width: 150,
      render: (camera) => renderCamera(camera)
    },
    {
      title: '5MP',
      dataIndex: '5MP',
      key: '5MP',
      width: 150,
      render: (camera) => renderCamera(camera)
    },
    {
      title: '8MP',
      dataIndex: '8MP',
      key: '8MP',
      width: 150,
      render: (camera) => renderCamera(camera)
    }
  ];

  const renderCamera = (camera) => {
    if (!camera) return '-';
    return (
      <div className="camera-cell">
        <a href={camera.url} target="_blank" rel="noopener noreferrer" className="camera-link">
          {camera.name}
        </a>
        <Space direction="horizontal" wrap size={[4, 4]} style={{ width: '100%', marginTop: '8px', justifyContent: 'center' }}>
          {camera.badges.map((badge) => (
            <Tag
              key={badge}
              style={{
                backgroundColor: badgeConfig[badge].color,
                color: '#ffffff',
                border: 'none',
                fontSize: '0.7rem',
                padding: '4px 7px',
                borderRadius: '6px',
                cursor: 'pointer'
              }}
            >
              <a
                href={camera.url}
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#ffffff', textDecoration: 'none' }}
              >
                {badgeConfig[badge].label}
              </a>
            </Tag>
          ))}
        </Space>
      </div>
    );
  };

  // Mobile view - responsive cards
  const MobileView = () => (
    <div className="mobile-cards">
      {cameraData.map((row, index) => (
        <div key={index} className="mobile-card">
          <div className="mobile-header">
            <h3 className="mobile-optical-format">Optical Format: {row.opticalFormat}</h3>
          </div>
          <Divider style={{ margin: '12px 0' }} />
          {row.cameras.length > 0 ? (
            <div className="mobile-cameras">
              {row.cameras.map((camera, cIdx) => (
                <div key={cIdx} className="mobile-camera-item">
                  <div className="mobile-mp-label">{camera.mp}</div>
                  <a href={camera.url} target="_blank" rel="noopener noreferrer" className="mobile-camera-name">
                    {camera.name}
                  </a>
                  <Space wrap size={[4, 4]} style={{ marginTop: '8px' }}>
                    {camera.badges.map((badge) => (
                      <Tag
                        key={badge}
                        style={{
                          backgroundColor: badgeConfig[badge].color,
                          color: '#ffffff',
                          border: 'none',
                          fontSize: '0.7rem',
                          fontWeight: '600',
                          padding: '1px 8px',
                          borderRadius: '4px'
                        }}
                      >
                        {badgeConfig[badge].label}
                      </Tag>
                    ))}
                  </Space>
                </div>
              ))}
            </div>
          ) : (
            <div className="mobile-no-data">No cameras available</div>
          )}
        </div>
      ))}
    </div>
  );

  return (
    <section className="oemcamera-section" data-aos="fade-up">
      <div className="oemcamera-container">
        <h2 className="oemcamera-title">OEM Camera Modules</h2>

        {/* Legend - Above Table */}
        <div className="legend-section">
          {Object.entries(badgeConfig).map(([key, config]) => (
            <div key={key} className="legend-item">
              <span
                className="legend-dot"
                style={{ backgroundColor: config.color }}
              />
              <span className="legend-text">{config.label}</span>
            </div>
          ))}
        </div>

        {/* Responsive Content */}
        {isMobile ? (
          <MobileView />
        ) : (
          <div className="table-wrapper">
            <Table
              columns={columns}
              dataSource={tableData}
              pagination={false}
              bordered
              size="middle"
              scroll={{ x: 800 }}
              className="custom-table"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default OemCameraModules;
