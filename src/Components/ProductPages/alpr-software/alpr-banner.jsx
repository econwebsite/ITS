import React, { useState, useEffect } from "react";
import "./alpr-banner.css";
import banner1 from "../../../assets/alpr/alpr-software-suite-banner.jpg"
import Modelbutton from "../../Button comp/Modelbutton";
// Temporary free images need to replace later)
const banners = [
  {
    image: banner1,
    title: "Automatic License Plate Recognition SDK",
    subtitle: "Real-Time Vehicle and License Plate Intelligence — Built for Edge Vision",
  }
];

const Banner = () => {



  return (
    <div className="ptz-banner">
      <div className="banner-slide">
        <img
          src={banners[0].image}
          alt={banners[0].title}
          className="banner-image"
        />
        <div className="banner-overlay">
          <h1>{banners[0].title}</h1>
          <p>{banners[0].subtitle}</p>

     <div className="alpr-banner-buttons">
  <button className="alpr-banner-btn">View Demo</button>
          <Modelbutton 
            className="alpr-banner-button gtm-btn" 
            text="Get SDK Evaluation &gt;&gt;" 
            backgroundColor="#1e2f7ac9" 
            animationColor="#69ba2f" 
            hoverColor="#00aeef"
            padding="12px 25px"
            fontSize="14px"
            borderRadius="0"
            border="1px solid #fff"
            productName="ALPR Software Suite"
            title="ALPR Software Suite"
          /> 
          </div>

       



        </div>
      </div>


    </div>
  );
};

export default Banner;
