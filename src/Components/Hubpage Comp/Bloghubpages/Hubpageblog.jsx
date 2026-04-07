import React from 'react';
import './Hubpageblog.css'; // Import the CSS file for styling
import mobilevsfixed from "../../../assets/Hubpages/mobile-vs-fixed-vs-average-speed-cameras-259x156.jpg"
import highResolution from "../../../assets/Hubpages/how-high-resolution-cameras-550x400.jpg"
import howToChoose from "../../../assets/Hubpages/how-to-choose-the-right-image-sensor-259x156.jpg";
import redLight from "../../../assets/Hubpages/red-light-cameras-vs-traffic-sensors-259x156.jpg";
import stopSign from "../../../assets/Hubpages/what-is-a-stop-sign-violation-259x156.jpg";
import AnimatedButton from "../../Button comp/AnimatedButton"
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Hubpageblog = () => {

  return (
    <div>
        <Helmet>
<title>ITS Insights Blog</title>
<meta name='description' content='Insights on intelligent transportation systems, covering traffic monitoring, enforcement, ANPR/ALPR, edge AI, and smart city vision technologies.' />
</Helmet>
    <div className='hubtot-blog'>
    <div className='mainContainer'>
      <h1>Our Blogs</h1>
    <div className="hubpageblog">
      <div className="hubblog-column hubblog-left" data-aos="zoom-in-right" data-aos-duration="1000">
        <div className="hubblog-border-box">
        <Link className="HUBcardImgLink" to="https://www.e-consystems.com/blog/camera/applications/how-high-resolution-cameras-are-transforming-traffic-enforcement-and-monitoring/" style={{ textDecoration: "none" }}>
          <img src={highResolution} alt="How to Choose the Right Camera for ANPR?" />
          </Link>
          <Link className="HUBcardTitleLink" to="https://www.e-consystems.com/blog/camera/applications/how-high-resolution-cameras-are-transforming-traffic-enforcement-and-monitoring/" style={{ textDecoration: "none" }}>
       
          <h2>How High-Resolution Cameras Are Transforming Traffic Enforcement and Monitoring</h2>
          </Link>
          <p>Smart traffic systems leverage embedded camera solutions to help manage roadways, record violations, and detect traffic anomalies. Get expert insights on how cameras work in these systems, their top use cases applications, and key imaging features.</p>
          <p>Modern urban traffic networks are shifting toward smart infrastructure powered by real-time data and automated systems. Smart traffic systems go a long way to help manage roadways and improve the commuter experience.</p>
          <AnimatedButton className="Hubread-more" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="https://www.e-consystems.com/blog/camera/applications/how-high-resolution-cameras-are-transforming-traffic-enforcement-and-monitoring/"></AnimatedButton>

        </div>
      </div>
      <div className="hubblog-column hubblog-right" data-aos="zoom-in-left" data-aos-duration="1000">
        <div className="hubblog-card-row" >
          <div className="hubblog-card">
          <Link className="HUBcardImgLink" to="https://www.e-consystems.com/blog/camera/applications/mobile-vs-fixed-vs-average-speed-cameras-which-best-suits-traffic-enforcement/" style={{ textDecoration: "none" }}>
            <img src={mobilevsfixed} alt="Autofocus vs. Fixed focus" />
            </Link>
            <Link className="HUBcardTitleLink" to="https://www.e-consystems.com/blog/camera/applications/mobile-vs-fixed-vs-average-speed-cameras-which-best-suits-traffic-enforcement/" style={{ textDecoration: "none" }}>
            <h6>Mobile vs. Fixed vs. Average Speed Cameras</h6>
            </Link>
              <p>Vision-based systems help control speed violations and create safer environments....</p>
            <AnimatedButton className="Hubread-more" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="https://www.e-consystems.com/blog/camera/applications/mobile-vs-fixed-vs-average-speed-cameras-which-best-suits-traffic-enforcement/"></AnimatedButton>
            </div>
            <div className="hubblog-card">
            <Link className="HUBcardImgLink" to="https://www.e-consystems.com/blog/camera/applications/how-to-choose-the-right-image-sensor-for-automatic-number-plate-recognition-anpr/" style={{ textDecoration: "none" }}>
            <img src={howToChoose} alt="Choosing the right CMOS cameras" />
            </Link>
            <Link className="HUBcardTitleLink" to="https://www.e-consystems.com/blog/camera/applications/how-to-choose-the-right-image-sensor-for-automatic-number-plate-recognition-anpr/" style={{ textDecoration: "none" }}>
            <h6>How to Choose the Right Camera for ANPR?</h6>
            </Link>
            <p>Automated Number Plate Recognition (ANPR) systems have transformed...</p>
            <AnimatedButton className="Hubread-more" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="https://www.e-consystems.com/blog/camera/applications/how-to-choose-the-right-image-sensor-for-automatic-number-plate-recognition-anpr/"></AnimatedButton>
            </div>
        </div>
        <div className="hubblog-card-row">
         
          <div className="hubblog-card">
          <Link className="HUBcardImgLink" to="https://www.e-consystems.com/blog/camera/applications/red-light-cameras-vs-traffic-sensors-the-ultimate-guide-for-traffic-enforcement/" style={{ textDecoration: "none" }}>
            <img src={redLight} alt="Three Important Parameters in Intra Oral"/>
            </Link>
            <Link className="HUBcardTitleLink" to="https://www.e-consystems.com/blog/camera/applications/red-light-cameras-vs-traffic-sensors-the-ultimate-guide-for-traffic-enforcement/" style={{ textDecoration: "none" }}>
            <h6>Red Light Cameras vs. Traffic Sensors</h6>
            </Link>
              <p>Intersections create the toughest mix of crashes, congestion, and violations...</p>
            <AnimatedButton className="Hubread-more" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="https://www.e-consystems.com/blog/camera/applications/red-light-cameras-vs-traffic-sensors-the-ultimate-guide-for-traffic-enforcement/"></AnimatedButton>
            </div>
            <div className="hubblog-card">
            <Link className="HUBcardImgLink" to="https://www.e-consystems.com/blog/camera/applications/what-is-a-stop-sign-violation-and-how-do-cameras-help-prevent-it/" style={{ textDecoration: "none" }}>
            <img src={stopSign} alt="Dental Loupe Cameras" />
            </Link>
            <Link className="HUBcardTitleLink" to="https://www.e-consystems.com/blog/camera/applications/what-is-a-stop-sign-violation-and-how-do-cameras-help-prevent-it/" style={{ textDecoration: "none" }}>
            <h6>What is a Stop Sign Violation, and How Do Cameras Help Prevent It?</h6>
            </Link>
              <p>Stop sign violations pose a serious risk to road users, especially at intersections...</p>
            <AnimatedButton className="Hubread-more" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="https://www.e-consystems.com/blog/camera/applications/what-is-a-stop-sign-violation-and-how-do-cameras-help-prevent-it/"></AnimatedButton>
            </div>
        </div>
      </div>
    </div>
    </div>
    </div>
    </div>
  );
};

export default Hubpageblog;
