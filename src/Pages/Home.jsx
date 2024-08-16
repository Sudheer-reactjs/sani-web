import React, { useEffect } from "react";
import BannerImage from "../assets/images/home-banner.png";
import MobileBanner from "../assets/images/mobile-banner.png";
import { Link } from "react-router-dom";

export default function Home() {
  useEffect(() => {
    document.body.classList.add("home-page");
    return () => {
      document.body.classList.remove("home-page");
    };
  }, []);
  return (
    <>
      <section className="w-full">
        <img
          className="w-full object-cover min-h-[100vh] hidden md:block"
          src={BannerImage}
        />
        <img
          className="w-full object-contain object-top min-h-[100vh] md:hidden"
          src={MobileBanner}
        />
        <div className="absolute w-full top-[23%] md:top-[228px]">
          <div className="container">
            <h1 className="mb-[18px]">Subscribe and Drive</h1>
            <p className="font-[300] text-[30px] max-w-[450px] leading-[34px] md:leading-[54px] md:text-[44px] md:max-w-[550px] ">
              Flexible instant car access to
              <span className="gradient-text"> anyone</span>
            </p>
            <Link
              className="button-gradient mt-[30px] large-button md:mt-[55px]"
              to="/how-it-work"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
