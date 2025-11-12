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
import Market from "./Components/Marketscomp/Market";
import RoadInspection from './Components/solutions/RoadInspection/RoadInspection';
import StopArm from './Components/solutions/StopArm/StopArm';
import ANPR from './Components/solutions/ANPR/ANPR';


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
            {/* Applications page route */}
           <Route path="/market" element={<Market />} />
           <Route path="/road-inspection" element={<RoadInspection />} />
           <Route path="/stop-arm" element={<StopArm />} />
           <Route path="/anpr" element={<ANPR />} />
          </Routes>
          <Footer/>
        </div>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
