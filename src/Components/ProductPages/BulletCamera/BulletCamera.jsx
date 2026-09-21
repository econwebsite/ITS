import React from "react";
import BulletBanner from "./Bulletbanner";
import AboutBullet from "./Aboutbullet";
import WhysmartBullet from "./WhySmartBullet";
import Bulletvariants from "./BulletVariants";
import Applicationbullet from "./BulletApplications";
import VideoShowcase from "./VideoShowcase";
import BulletFaq from "./BulletCameraFaq"
import Recomentedproducts from "./Recomentedproducts";
import { Helmet } from 'react-helmet-async';

const PTZCamera = () => {
  const videoData = [
    {
      title: "ALPR Bullet Camera - Live Demo",
      hashtags: ["alpr", "bullet-camera", "license-plate"],
      link: "https://www.youtube.com/watch?v=2BDCiouCN4k"
    },
    {
      title: "Smart AI ANPR Camera: Cloud-Based Management Demo",
      hashtags: ["anpr", "cloud", "management"],
      link: "https://www.youtube.com/watch?v=28ZZYad57Jk"
    },
    {
      title: "ALPR Camera Demo | Automated License Plate Recognition",
      hashtags: ["alpr", "camera", "recognition"],
      link: "https://www.youtube.com/watch?v=91TcMA3Lt3Q"
    }
  ];

  const siteUrl = typeof window !== 'undefined'
    ? window.location.origin.replace(/\/$/, '')
    : 'https://its.e-consystems.com';

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${siteUrl}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Products',
        item: `${siteUrl}/products/anpr-alpr-bullet-cameras`,
      },
      {
        '@type': 'ListItem',
        position: 3,
        name: 'ANPR/ALPR Bullet Cameras',
        item: `${siteUrl}/products/anpr-alpr-bullet-cameras`,
      },
    ],
  };

  return (
    <div className="ptz-page">
      <Helmet>
                <title>AI-Powered ANPR/ALPR Camera Systems - Edge AI & Cloud-Ready</title>
                <meta name='description' content='Discover e-con Systems purpose-built ANPR/ALPR cameras with global shutter, edge AI, and HDR. Engineered for high-speed capture in tolling, traffic enforcement, and parking applications.' />
                <script type="application/ld+json">
                  {JSON.stringify(breadcrumbSchema)}
                </script>
            </Helmet>
        <BulletBanner/>
        <AboutBullet/>
        <WhysmartBullet/>
        <Bulletvariants/>
        <Applicationbullet/>
        <VideoShowcase videoData={videoData} />
        <BulletFaq/>
        <Recomentedproducts/>
    </div>
  );
};

export default PTZCamera;
