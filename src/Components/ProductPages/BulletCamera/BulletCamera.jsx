import React from "react";
import BulletBanner from "./Bulletbanner";
import AboutBullet from "./Aboutbullet";
import WhysmartBullet from "./WhySmartBullet";
import Bulletvariants from "./BulletVariants";
import Applicationbullet from "./BulletApplications";

const PTZCamera = () => {
  return (
    <div className="ptz-page">
        <BulletBanner/>
        <AboutBullet/>
        <WhysmartBullet/>
        <Bulletvariants/>
        <Applicationbullet/>
    </div>
  );
};

export default PTZCamera;
