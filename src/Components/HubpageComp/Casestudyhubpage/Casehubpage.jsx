import React from 'react';
import './casehubpage.css'; 
import SmartTrafficMangement from "../../../assets/Hubpages/camera-for-smart-traffic-management-system-550x400.jpg";
import NextGenToll from "../../../assets/Hubpages/powering-next-generation-tolling-450x300.jpg"
import SmartTraffic from "../../../assets/Hubpages/smart-traffic-case-study-450x300.jpg";
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import AnimatedButton from '../../Button comp/AnimatedButton';

const Casehubpage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Helmet>
<title>Intelligent Transportation Case Studies | ITS Vision Successes</title>
<meta name='description' content='Read ITS success stories demonstrating traffic monitoring, violation enforcement, ANPR/ALPR integration, and smart city vision solutions in action.' />
</Helmet>
      <div className='casehubpage'>
        <div className='mainContainer'>
          <h1>Case Studies</h1>
          <div className="casepageblog">
            <div className="casehubpage-column casehubpage-left" data-aos="zoom-in-right" data-aos-duration="1000">
              <a href="https://www.e-consystems.com/resources/case-studies/camera-for-smart-traffic-management-system.asp" target='_blank'>
              <div className="casehubpage-border-box">
              
                <img src={SmartTrafficMangement} alt="Building a world-class, camera for Smart Traffic Management System" />
                
                <h2>Building a world-class, camera for Smart Traffic Management System</h2>
                
                <p>This case study details how e-con Systems developed a rugged, weather-resistant camera solution for a leading smart city provider's Intelligent Transportation System. By deploying the STURDeCAM21, featuring HDR, LED Flicker Mitigation, and a GMSL interface, the system effectively overcame lighting challenges and long-distance cabling needs. This integration resulted in a 20% reduction in traffic congestion and significant cost savings, ensuring high-accuracy vehicle tracking.</p>
                <AnimatedButton className="casestudy-btn1" text="Know more" backgroundColor="#00aeef" animationColor="#344ea1" hoverColor="#344ea1" title="Know More"/>
              </div>
              </a>
            </div>
            <div className="casehubpage-column casehubpage-right" data-aos="zoom-in-left" data-aos-duration="1000">
              <a href="https://www.e-consystems.com/resources/case-studies/powering-next-generation-tolling-with-end-to-end-vision-solutions.asp" target='_blank'>
              <div className="casehubpage-card-row">
                <div className="casehubpage-card">
                  <div className="casehubpage-card-left">
                  
                    <img src={NextGenToll} alt="Point-Of-Care Device" />
                  </div>
                  <div className="casehubpage-card-right">
                    <h6>Powering Next-Generation Multi-Lane Free-Flow (MLFF) Tolling with End-to-End Vision Solutions</h6>
                    <p>Read to know how e-con Systems developed a custom camera solution for next generation Multi-Lane Free-Flow (MLFF) Tolling.</p>
                    <AnimatedButton className="casestudy-btn" text="Know more" backgroundColor="#00aeef" animationColor="#344ea1" hoverColor="#344ea1" title="Know More"/>
                  </div>
                </div>
              </div>
              </a>
              <a href="https://www.e-consystems.com/resources/case-studies/smart-traffic-case-study.asp" target='_blank'>
              <div className="casehubpage-card-row">
                <div className="casehubpage-card">
                  <div className="casehubpage-card-left">
                    <img src={SmartTraffic} alt="4k Dental Loupe Camera" />
                  </div>
                  <div className="casehubpage-card-right">
                    <h6>Enabling better city management with an HDR camera for smart traffic</h6>
                    <p>This case study explores how e-con Systems is enabling better city management by developing an HDR camera for smart traffic systems.</p>
                    <AnimatedButton className="casestudy-btn" text="Know more" backgroundColor="#00aeef" animationColor="#344ea1" hoverColor="#344ea1"  title="Know More"/>
                  </div>
                </div>
              </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Casehubpage;
