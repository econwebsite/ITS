import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import NavBar from "./Components/NavBarcomp/NavBar";
import TotalHome from "./Components/Homecomp/TotalHome";
import ScrollToTop from "./ScrollToTop";
import Footer from "./Components/Footercomp/Footer"
import "./App.css";
import ContactUs from './Components/Homecomp/Contactuscomp/Contactus';
import Industries from './Components/Industriescomp/Industries';
import IncidentDetectionCamera from "./Components/ProductPages/PTZCamera/PTZCamera";
import BulletCamera from "./Components/ProductPages/BulletCamera/BulletCamera";
import AiComputeBox from './Components/ProductPages/Ai-ComputeBox/Ai-ComputeBox';
import TrafficEnforcement from './Components/solutions/trafficeEnforcement/Itspage';
import SpeedPage from './Components/solutions/speedcomp/Speedpage';
import Market from "./Components/Marketscomp/Market";
import Hubpageblog from './Components/Hubpage Comp/Bloghubpages/Hubpageblog';
import Casehubpage from './Components/Hubpage Comp/Casestudyhubpage/casehubpage';
import AlprSoftware from './Components/ProductPages/alpr-software/AlprSoftware';
const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <BrowserRouter>
      <HelmetProvider>
        <ScrollToTop /> 
        <div className='fixed-container'>
          <NavBar />
          <Routes>
            <Route path="/" element={<TotalHome />} />
           <Route path="/company/contact-us" element={<ContactUs />} />
          <Route path="/:tabSlug?" element={<Industries />} />
            <Route path="/incident-detection-camera" element={<IncidentDetectionCamera />} />
             <Route path="/products/anpr-alpr-bullet-cameras" element={<BulletCamera />} />
             <Route path="/products/ai-vision-box" element={<AiComputeBox/>} />
             <Route path="/products/license-plate-recognition-software" element={<AlprSoftware/>} />
              <Route path="/solutions/traffic-enforcement" element={<TrafficEnforcement />} />
              <Route path="/solutions/speed-enforcement" element={<SpeedPage />} />
            {/* Applications page route */}
           <Route path="/market" element={<Market />} />
           <Route path="/blog" element={<Hubpageblog />} />
            <Route path="/case-study" element={<Casehubpage />} />
          </Routes>
          <Footer/>
        </div>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
