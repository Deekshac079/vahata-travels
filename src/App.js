// React App for VAHATA - Where Travel Becomes Learning
// import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

import Navbar from './Navbar';
import Hero from './Hero';
import CompanyDetails from './CompanyDetails';
import About from './About';
import Journeys from './Journeys';
import Services from './Services';
import Contact from './Contact';
import Enquire from './Enquire';
// import { i } from 'framer-motion/client';
import Footer from './Footer';
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import WhyVahata from './WhyVahata';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GalleryScroll from './GalleryScroll';
import Gallery from './Gallery';
import ProgramWeOffer from './ProgramWeOffer';
import OurService from './OurService';
import EnquiryLink from './EnquiryLink';
// console.log("React:", React);
// console.log("useEffect:", useEffect);




const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return(
  <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<><Hero /><CompanyDetails /><WhyVahata /><GalleryScroll /><Journeys /><ProgramWeOffer /><Enquire /></>} />
        <Route path="/about" element={<About />} />
        <Route path="/journeys" element={<Journeys />} />
        <Route path="/ourservice" element={<OurService />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Gallery" element={<Gallery />} />
        <Route path="/enquiry" element={<EnquiryLink />} />
      </Routes>
      <Footer />
     {/* <ToastContainer position="top-center" autoClose={3000} /> */}
  </Router>
  );
};

export default App;
