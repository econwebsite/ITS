import React from 'react';
import "./Blogs.css";
import mobilevsfixed from "../../../../assets/Hubpages/mobile-vs-fixed-vs-average-speed-cameras-450x300.jpg"
import highResolution from "../../../../assets/Hubpages/how-high-resolution-cameras-450x300.jpg"
import howToChoose from "../../../../assets/Hubpages/how-to-choose-the-right-image-sensor-450x300.jpg";
import redLight from "../../../../assets/Hubpages/red-light-cameras-vs-traffic-sensors-450x300.jpg";
import stopSign from "../../../../assets/Hubpages/what-is-a-stop-sign-violation-450x300.jpg";
const BlogData = [
  {
    title: "How High-Resolution Cameras Are Transforming Traffic Enforcement and Monitoring",
    link: "https://www.e-consystems.com/blog/camera/applications/how-high-resolution-cameras-are-transforming-traffic-enforcement-and-monitoring/",
    image: highResolution,
  },
  {
    title: "Mobile vs. Fixed vs. Average Speed Cameras: Which Best Suits Traffic Enforcement?",
    link : "https://www.e-consystems.com/blog/camera/applications/mobile-vs-fixed-vs-average-speed-cameras-which-best-suits-traffic-enforcement/",
    image: mobilevsfixed,
  },
  {
    title: "How to Choose the Right Camera for ANPR?",
    link: "https://www.e-consystems.com/blog/camera/applications/how-to-choose-the-right-image-sensor-for-automatic-number-plate-recognition-anpr/",
    image: howToChoose,
  },
  {
    title: "Red Light Cameras vs. Traffic Sensors: The Ultimate Guide for Traffic Enforcement",
    link: "https://www.e-consystems.com/blog/camera/applications/red-light-cameras-vs-traffic-sensors-the-ultimate-guide-for-traffic-enforcement/",
    image: redLight,
  },
  {
    title: "What is a Stop Sign Violation, and How Do Cameras Help Prevent It?",
    link: "https://www.e-consystems.com/blog/camera/applications/what-is-a-stop-sign-violation-and-how-do-cameras-help-prevent-it/",
    image: stopSign,
  }
];
const Blogs = () => {
 return (
    <div className="BlogStab-container">
      <div className="BlogStab-grid">
        {BlogData.map((Blog, index) => (
          <div className="BlogStab-card" key={index}>
            <a href={Blog.link} target="_blank">
            <img src={Blog.image} alt="placeholder" className="BlogStab-image" />
            <div className="BlogStab-content">
              <h3 className="BlogStab-cardTitle">{Blog.title}</h3>
             
            </div>
          </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Blogs;
