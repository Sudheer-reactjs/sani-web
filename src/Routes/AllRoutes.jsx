import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home";
import Header from "../Components/Header";
import Howitworks from "../Pages/Howitworks";
import AboutUs from "../Pages/AboutUs";
import Plans from "../Pages/Plans";
import OurVision from "../Pages/OurVision";
import Contacts from "../Pages/Contacts"; 
import LogIn from "../Pages/LogIn";  
import Footer from "../Components/Footer";

export default function AllRoutes() {
  return (
    <>
      <BrowserRouter> 
       <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/how-it-work" element={<Howitworks />} />
          <Route path="/plans" element={<Plans />} />
          <Route path="/our-vision" element={<OurVision />} />
          <Route path="/how-it-work" element={<Howitworks />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </>
  );
}
