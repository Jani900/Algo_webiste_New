import React from 'react';
import Typed from 'react-typed';
import Banner from '../assets/IT_compressed.mp4';
import imgBanner from '../assets/MainPicNew2R.jpg';

const Hero = () => {

const windowWidth = window.innerWidth;
const isMobile = windowWidth <= 767;
const isTablet = windowWidth >= 768 && windowWidth <= 1439;
const isDesktop = windowWidth >= 1440;
const ios = /iphone/i.test(navigator.userAgent);
console.log( "what OS is it"  + ios);



  return (
    <div className="text-white relative bg-[#606161]">
      {isDesktop && (
        <div className="relative flex justify-center min-w-full lg:self-center items-center ">
          <div className=" min-w-full lg:self-center ">
            <div style={{ maxHeight: "700px", overflow: "hidden" }}>
              <video
                className=" lg:w-full w-full bg-gradient-overlay filter-high-contrast  "
                src={Banner}
                id="videos"
                muted="muted"
                type="video/mp4"
                autoPlay="autoplay"
                loop
              ></video>
            </div>
          </div>
          <div className="absolute inset-0 opacity-30 text-white"></div>{" "}
          {/* Overlay */}
          <div className="absolute lg:max-w-[1200px]  mx-auto text-center flex flex-col justify-center text-shadow-black-outline ">
            <h1 className="lg:text-7xl md:text-5xl sm:text-6xl text-3xl font-bold md:py-6 align-middle pt-28">
              Grow your digital footprint
            </h1>
            <div className=" flex-col justify-center items-center text-shadow-black-outline">
              <p className="lg:text-5xl md:text-4xl sm:text-4xl text-xl font-bold ">
                What we do:
              </p>
              <ul className=" lg:text-5xl font-bold  pl-2 text-[#80ccba] flex-col lg:py-10 text-shadow-black-outline ">
                <li className="text-shadow-black-outline">Software Hardware</li>
                <li>Integration</li>
                <li>Web Applications</li>
                <li>Mobile Applications</li>
                <li>Customer Management Systems</li>
                <li>GPS systems</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {isTablet && (
        <div className="relative flex justify-center min-w-full lg:self-center ">
          <div className=" min-w-full lg:self-center ">
            <div style={{ maxHeight: "700px", overflow: "hidden" }}>
              <video
                className=" lg:w-full w-full bg-gradient-overlay filter-high-contrast "
                src={Banner}
                id="videos"
                muted="muted"
                type="video/mp4"
                autoPlay="autoplay"
                loop
              ></video>
            </div>
          </div>
          <div className="absolute inset-0 bg-white opacity-30"></div>{" "}
          {/* Overlay */}
          <div className="absolute lg:max-w-[1200px] lg:pt-20 mx-auto text-center flex flex-col justify-center text-shadow-black-outline">
            <h1 className="lg:text-7xl md:text-5xl sm:text-6xl text-3xl font-bold md:py-6 align-middle pt-10">
              Grow your digital footprint
            </h1>
            <div className=" flex-col justify-center items-center">
              <p className="lg:text-5xl md:text-4xl sm:text-4xl text-xl font-bold ">
                What we do:
              </p>
              <ul className=" lg:text-5xl font-bold  pl-2 text-[#80ccba] flex-col lg:py-10 text-shadow-black-outline md:text-3xl md:pt-14 xs:pt-10 sm:text-2xl">
                <li className="text-shadow-black-outline">Software Hardware</li>
                <li>Integration</li>
                <li>Web Applications</li>
                <li>Mobile Applications</li>
                <li>Customer Management Systems</li>
                <li>GPS systems</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {isMobile && (
        <div className=" relative items-center">
          {ios ? (
            <div className=" items-center ">
              <img
                className="w-full h-[500px] bg-gradient-overlay filter-high-contrast"
                src={imgBanner}
                alt="banner"
              />

              <div className="absolute text-center w-full top-0 left-0 items-center text-shadow-black-outline pt-16">
                <h1 className=" md:text-5xl text-3xl font-bold  text-white ">
                  Grow your digital footprint
                </h1>
                <div className=" flex-col justify-center items-center pt-10">
                  <p className="lg:text-5xl md:text-4xl sm:text-4xl text-2xl font-bold text-white text-shadow-black-outline">
                    We help with:
                  </p>
                  <ul className="text-2xl font-bold  pl-2 text-[#80ccba] flex-col text-shadow-black-outline pt-6 ">
                    <li className="text-shadow-black-outline">
                      Software needs
                    </li>
                    <li>Hardware Integration</li>
                    <li>Web Applications</li>
                    <li>Mobile Applications</li>
                    <li>Customer Management Systems</li>
                    <li>GPS systems</li>
                  </ul>
                </div>
              </div>
            </div>
          ) : (
            <div className="relative">
              <div>
                <video className="w-full" src={Banner} muted autoPlay loop />
              </div>
              <div className=" absolute text-center w-full top-0">
                <h1 className=" md:text-5xl text-2xl font-bold md:py-6 align-bottom text-shadow-black-outline ">
                  Grow your digital footprint
                </h1>
                <div className=" flex-col justify-center items-center">
                  <p className="lg:text-5xl md:text-4xl sm:text-4xl text-xl font-bold text-shadow-black-outline">
                    What we do:
                  </p>
                  <ul className="text-xxl font-bold  pl-2 text-[#80ccba] flex-col text-shadow-black-outline ">
                    <li className="text-shadow-black-outline">
                      Software Hardware
                    </li>
                    <li>Integration</li>
                    <li>Web Applications</li>
                    <li>Mobile Applications</li>
                    <li>Customer Management Systems</li>
                    <li>GPS systems</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Hero;
