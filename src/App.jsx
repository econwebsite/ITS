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
import PTZCamera from "./Components/ProductPages/PTZCamera/PTZCamera";
import BulletCamera from "./Components/ProductPages/BulletCamera/BulletCamera";
import AiComputeBox from './Components/ProductPages/Ai-ComputeBox/Ai-ComputeBox';
import ClovisCentral from './Components/ProductPages/ClovisCentral/Cloviscentral';
import Market from "./Components/Marketscomp/Market";


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

  {/* PTZ Camera page */}
            <Route path="/ptz-camera" element={<PTZCamera />} />
             <Route path="/bullet-camera" element={<BulletCamera />} />
             <Route path="/ai-compute-box" element={<AiComputeBox/>} />
             <Route path="/video-management-systems" element={<ClovisCentral/>} />
            {/* Applications page route */}
           <Route path="/market" element={<Market />} />
          </Routes>
          <Footer/>
        </div>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
