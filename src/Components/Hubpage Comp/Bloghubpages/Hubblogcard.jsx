import React from 'react';
import './Hubblogcard.css';
import howtoovercome from "../../../assets/Hubpages/How-to-Overcome.jpg";
import understandextra from "../../../assets/Hubpages/UnderstandingExtraoral.jpg";
import AnimatedButton from "../../Button comp/AnimatedButton";
import howextraoral from "../../../assets/Hubpages/How-our-extraoral.jpg"
import whoShouldConsider from "../../../assets/Hubpages/who-should-consider-e-con-systems-intraoral-camera.jpg"
import { Link } from 'react-router-dom';

const Hubblogcard = () => {

  return (
    <div className="Hubblogcard-Total">
       <div className='mainContainer'>
      <div className="Hubblogcard-cards" data-aos="zoom-in-right" data-aos-duration="1000">
     
        <div className="Hubblogcard-card">
        <Link className="HUBcardImgLink" to="/blogs/imaging-challenges-dental-loupes-manufacturing" style={{ textDecoration: "none" }}>
          <img src={howtoovercome} alt="Imaging-Related Manufacturing Challenges" className="Hubblogcard-image" />
          </Link>
          <Link className="HUBcardTitleLink" to="/blogs/imaging-challenges-dental-loupes-manufacturing" style={{ textDecoration: "none" }}>
          <h2 className="Hubblogcard-titleh2">How to Overcome Imaging-Related Manufacturing Challenges of Dental Loupes</h2>
          </Link>
          <p className="Hubblogcard-text">The blog explores how overcoming issues like thermal dissipation, image stabilization...</p>
          <AnimatedButton className="Hubblogcard-button1" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/blogs/imaging-challenges-dental-loupes-manufacturing"></AnimatedButton>
        </div>
        <div className="Hubblogcard-card">
        <Link className="HUBcardImgLink" to="/blogs/extraoral-cameras-image-quality-tuning" style={{ textDecoration: "none" }}>
          <img src={howextraoral} alt="extraoral cameras are tuned to bring best image quality" className="Hubblogcard-image" />
          </Link>
          <Link className="HUBcardTitleLink" to="/blogs/extraoral-cameras-image-quality-tuning" style={{ textDecoration: "none" }}>
          <h2 className="Hubblogcard-titleh2">How our extraoral cameras are tuned to bring best image quality?</h2>
          </Link>
          <p className="Hubblogcard-text">Read about ISP features that enhance the image quality of extra-oral cameras, such as white balance, gamma correction, etc.</p>
          <AnimatedButton className="Hubblogcard-button1" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/blogs/extraoral-cameras-image-quality-tuning"></AnimatedButton>
        </div>
        <div className="Hubblogcard-card">
        <Link className="HUBcardImgLink" to="/blogs/understanding-extraoral-cameras-dentistry" style={{ textDecoration: "none" }}>
          <img src={understandextra} alt="Understanding Extraoral Cameras" className="Hubblogcard-image" />
          </Link>
          <Link className="HUBcardTitleLink" to="/blogs/understanding-extraoral-cameras-dentistry" style={{ textDecoration: "none" }}>
          <h2 className="Hubblogcard-titleh2">Understanding Extraoral Cameras and Their Role in Dentistry</h2>
          </Link>
          <p className="Hubblogcard-text">Click to explore the types of extraoral cameras, such as surgical light-mounted cameras and their benefits</p>
          <AnimatedButton className="Hubblogcard-button1" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="/blogs/understanding-extraoral-cameras-dentistry"></AnimatedButton>
        </div>
        <div className="Hubblogcard-card">
        <Link className="HUBcardImgLink" to="https://www.e-consystems.com/blog/camera/applications/who-should-consider-e-con-systems-intraoral-camera-and-why/" style={{ textDecoration: "none" }}>
          <img src={whoShouldConsider} alt="Who Should Consider E-Con Systems Intraoral Camera and Why" className="Hubblogcard-image" />
          </Link>
          <Link className="HUBcardTitleLink" to="https://www.e-consystems.com/blog/camera/applications/who-should-consider-e-con-systems-intraoral-camera-and-why/" style={{ textDecoration: "none" }}>
          <h2 className="Hubblogcard-titleh2">Who Should Consider E-Con Systems Intraoral Camera and Why?</h2>
          </Link>
          <p className="Hubblogcard-text">If you’re already in the intraoral camera space, you understand the effort and resources required for R&D, image tuning, testing, and validation before hitting the market.</p>
          <AnimatedButton className="Hubblogcard-button1" text="Read more" backgroundColor="#344ea1" animationColor="#69ba2f" hoverColor="#69ba2f" to="https://www.e-consystems.com/blog/camera/applications/who-should-consider-e-con-systems-intraoral-camera-and-why/"></AnimatedButton>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Hubblogcard;
