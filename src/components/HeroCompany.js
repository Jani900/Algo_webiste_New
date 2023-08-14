import React from 'react'
import Banner from '../assets/IT_computer_Dev.mp4'
import Typed from 'react-typed'
import HeroBanner from "../assets/connection_concept.jpg";

const HeroCompany = () => {

  const windowWidth = window.innerWidth;
  const isMobile = windowWidth <= 768;
  const isDesktop = windowWidth > 768;

  return (
    <div className="  lg:h-full grid w-full ">
      {isDesktop && (
        <div className="relative  w-full  ">
          <div className=" relative md:align-middle lg:text-center text-center ">
            <div className=" absolute flex justify-center max-h-full w-full">
              <div className=" lg:text-7xl sm:text-6xl text-3xl font-bold align-middle   text-white ">
                <div className="w-full">
                  <Typed
                    className=" text-center w-full xs:text-4xl md:text-3xl font-bold lg:text-5xl text-white text-3xl font-serif md:pb-10"
                    strings={['" Your Vision, Our Technological  Skills "']}
                    typeSpeed={60}
                    backSpeed={45}
                    showCursor={false}
                  />
                </div>
              </div>
            </div>
            <div className=" justify-center md:self-center lg:pt-0 h-full ">
              <div className=" w-full xs:self-center lg:self-center  ">
                <img
                  className=" md:w-full  lg:w-full lg:h-[800px]"
                  src={HeroBanner}
                  alt="contact us"
                />
                <div className="absolute inset-0 bg-black opacity-30"></div>{" "}
                {/* Overlay */}
              </div>
            </div>
          </div>
        </div>
      )}
      {isMobile && (
        <div className=" grid-cols-1 col-span-2 md:grid-cols-2 lg:mt-16 ">
          <div className=" grid grid-cols-1 grid-rows-2 xs:grid-rows-2 xs:grid-cols-1 md:grid-cols-2 md:col-span-2  md:align-middle lg:text-center lg:grid-rows-1 mb-[-400px]">
            <div className=" relative grid col-span-1 justify-center h-auto md:self-center md:h-60 lg:h-auto lg:p-8">
              <Typed
                className=" text-center text-lg p-4 xs:text-4xl md:text-4xl md:font-normal lg:text-4xl   lg:p-4  text-white  font-serif"
                strings={['" Your Vision, Our Technological  Skills "']}
                typeSpeed={60}
                showCursor={false}
              />
              <div className=" w-full  xs:row-start-2  xs:col-start-2 xs:self-center lg:self-center ">
                <div className=" w-full xs:self-center lg:self-center  ">
                  <img
                    className="w-full md:w-full pt-10 pb-10 lg:w-full lg:h-[700px]"
                    src={HeroBanner}
                    alt="contact us"
                  />
                </div>
              </div>
              <div className="grid justify-center lg:w-auto">
                <p className="text:xl text-center p-4 xs:text-2xl md:text-2xl md:font-normal lg:text-2xl lg:p-4  text-white  font-serif lg:w-[500px]">
                  {" "}
                  Our expertise ranges from developing complex and
                  mission-critical enterprise applications to creating robust
                  and data rich web applications for small and medium size
                  business needs
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeroCompany