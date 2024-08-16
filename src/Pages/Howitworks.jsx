import React from "react";
import { Link } from "react-router-dom";
import Car from "../assets/images/car.png";
import HowItWorkSection from "../Components/HowItWorkSection";
import Apply from "../assets/images/apply.svg";
import Agreement from "../assets/images/agreement.svg";
import Book from "../assets/images/book.svg";
import Done from "../assets/images/done.svg";
import { AppStore, GooglePlay } from "../Utils/Svg";
import StoreImg from "../assets/images/store-img.png";


export default function Howitworks() {
  return (
    <>
      <section className="inline-block w-full relative my-[60px] lg:my-[100px] ">
        <div className="container">
          <div className="grid md:grid-cols-2 justify-center ">
            <div className="pb-[30px] lg:py-[30px]">
              <h1 className="lg:text-[54px] mb-[24px]">
                You are just a <span className="gradient-text">couple</span> of
                steps away!
              </h1>
              <p>
                Your Swift Ride journey is just moments away. Follow these
                simple steps to unlock the freedom of hassle-free car ownership.
              </p>
              <Link className="button-gradient mt-[24px] large-button" to="#">
                Get The App
              </Link>
            </div>
            <div className="mr-[-20px] lg:mr-[0]">
              <img
                className=" lg:absolute lg:right-0 z-[3] lg:max-w-[50%] top-0"
                src={Car}
              />
              <div className="box-shadow1 z-[2]"></div>
              <div className="box-shadow2 z-[2]"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="how-work-section relative z-[4] inline-block w-full">
        <div className="container">
          <h2 className="text-center">
            How <span className="gradient-text">It Works</span>
          </h2>
          <HowItWorkSection
            title={
              <>
                <span>01</span> Apply
              </>
            }
            content="Kickstart your Swift Ride experience by completing a hassle-free application."
            imageUrl={Apply}
          />
          <HowItWorkSection
            title={
              <>
                <span>02</span> Sign Agreement
              </>
            }
            content="Complete the process seamlessly by sigining our user-friendly agreement."
            imageUrl={Agreement}
          />
          <HowItWorkSection
            title={
              <>
                <span>03</span> Book
              </>
            }
            content="Choose your desired subscription and schedule a pick up or delivery time."
            imageUrl={Book}
          />
          <HowItWorkSection
            title={
              <>
                <span>04</span> All done!
              </>
            }
            content="With your booking confirmed, agreement signed, and pick-up/delivery scheduled, you’re all set!"
            imageUrl={Done}
          />
        </div>
      </section>

      <section className="how-work-section relative z-[4] inline-block w-full mt-[60px] lg:mt-[30px]">
        <div className="container">
          <div className='grid md:grid-cols-2 items-center gap-[24px]'>
            <div className=''>
              <h6 className="text-[#57E667] text-[24px]">Get the App</h6>
              <h2 className=" mb-[20px] max-w-[250px] lg:max-w-[350px]">Ya gratis dong, masa <span className="gradient-text">aplikasi</span></h2>
              <p className="max-w-[530px]">Ya gratis dong, masa aplikasi chat aja berbayar sih. Lo kalo nanya yang bener dong. Bayangin
                aja kalo aplikasi.</p>
              <div className="apple-store-icon flex items-center gap-[20px] flex-wrap mt-[20px] md:mt-[40px]">
                <Link to='#'> <AppStore /></Link>
                <Link to='#'> <GooglePlay /></Link>
              </div>
            </div>
            <div className='flex justify-center'>
              <img src={StoreImg} alt={StoreImg} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
