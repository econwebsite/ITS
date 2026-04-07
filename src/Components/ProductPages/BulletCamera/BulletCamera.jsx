import React from "react";
import BulletBanner from "./Bulletbanner";
import AboutBullet from "./Aboutbullet";
import WhysmartBullet from "./WhySmartBullet";
import Bulletvariants from "./BulletVariants";
import Applicationbullet from "./BulletApplications";
import { Helmet } from 'react-helmet-async';
const PTZCamera = () => {
  return (
    <div className="ptz-page">
      <Helmet>
                <title>AI-Powered ALPR Cameras for Traffic, Tolling & Parking</title>
                <meta name='description' content='e-con Systems ANPR/ALPR cameras deliver accurate license plate recognition for traffic enforcement, tolling, parking, and ITS with edge & cloud processing.' />
            </Helmet>
        <BulletBanner/>
        <AboutBullet/>
        <WhysmartBullet/>
        <Bulletvariants/>
        <Applicationbullet/>
    </div>
  );
};

export default PTZCamera;
