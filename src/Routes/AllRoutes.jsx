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
import Invest from "../Pages/Invest";
import Services from "../Pages/Services";
import Apply from "../Pages/Apply";
import Terms from "../Pages/Terms";
import Privacy from "../Pages/Privacy";

export default function AllRoutes() {
  return (
    <>
      <BrowserRouter> 
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/how-it-work" element={<Howitworks />} />
            <Route path="/plans" element={<Plans />} />
            <Route path="/our-vision" element={<OurVision />} />
            <Route path="/how-it-work" element={<Howitworks />} />
            <Route path="/contacts" element={<Contacts />} />
            <Route path="/login" element={<LogIn />} />
            <Route path="/invest" element={<Invest />} />
            <Route path="/services" element={<Services />} />
            <Route path="/apply" element={<Apply />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </>
  );
}
