import React from "react";
import { Link } from "react-router-dom";
import Car from "../assets/images/car.png";
import HowItWorkSection from "../Components/HowItWorkSection";
import Apply from "../assets/images/apply.svg"

export default function Howitworks() {
  return (
    <>
      <section className="w-full relative my-[50px] lg:my-[100px]">
        <div className="container">
          <div className="grid md:grid-cols-2 justify-center ">
            <div className="pb-[30px] lg:py-[30px]">
              <h1 className="lg:text-[54px] mb-[24px]">You are just a <span className="gradient-text">couple</span> of steps away!</h1>
              <p>
                Your Swift Ride journey is just moments away. Follow these
                simple steps to unlock the freedom of hassle-free car ownership.
              </p>
              <Link
                className="button-gradient mt-[24px] large-button"
                to="#"
              >
                Get The App
              </Link>
            </div>
            <div className="mr-[-20px] lg:mr-[0]">
               <img className=" lg:absolute lg:right-0 z-[3] lg:max-w-[50%] top-0" src={Car} />
               <div className="box-shadow1 z-[2]"></div>
               <div className="box-shadow2 z-[2]"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="how-work-section">
        <div className="container">
            <h2>How It <span className="gradient-text">Works</span></h2>
            <HowItWorkSection 
               title={<><span>1</span> Apply</>}
               content="Kickstart your Swift Ride experience by completing a hassle-free application."
               imageUrl={Apply}
            />
        </div>
      </section>
    </>
  );
}
