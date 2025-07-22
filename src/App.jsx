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
          </Routes>
          <Footer/>
        </div>
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
