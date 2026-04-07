import React from 'react';
// import { Helmet } from 'react-helmet-async';
import Homebanner from './Homebanner/Homebanner';
import Paragraph from "./Paragraphcomp/Paragraph"
import ProductCards from "./Productcomp/Productcards"
import OemCameraModules from "./Oemcameramodules/OemCameraModules"
import Industries from "./Industriescomp/Industries"
import Tabs from "../Homecomp/Resourcecomp/Tabcomp/Tabs"
import Certificate from "./Certificatecomp/Certificate"
import Testimonial from "./Testimonialcomp/Testimonial"
import ContactUs from './Contactuscomp/Contactus';
import { Helmet } from 'react-helmet-async';
const Homepage = () => {
    return (
        <div>
             <Helmet>
      <title>ITS Vision Solutions for Traffic Monitoring & Enforcement</title>
      <meta name="description" content="ITS vision solutions for traffic monitoring and enforcement, supporting traffic analytics, speed detection, red-light enforcement, tolling, and smart city applications." />
    </Helmet> 
    <Homebanner/>
    <Paragraph/>
    <ProductCards/>
    <OemCameraModules/>
    <Industries/>
    {/* <Applications/> */}
    <Tabs/>
     <Testimonial/>
     <Certificate/>
    <ContactUs/>
        </div>
    );
}

export default Homepage;
