import React from 'react'
// import Banner from '../assets/IT_computer_Dev.mp4'
import Typed from 'react-typed'
import HeroBanner from "../assets/compressedCompanyPic.jpeg";
import useWindowDimensions from "./useWindowDimensions";

const HeroCompany = () => {

  const {windowWidth} = useWindowDimensions();
  console.log("width inside HeroCompany:", windowWidth);
  const isMobile = windowWidth < 768;
  const isDesktop = windowWidth >= 768;


  const DesktopBanner = () => { 
    return (
    <div>
      {isDesktop && (
        <div className="relative  w-full  ">
          <div className=" relative md:align-middle lg:text-center text-center h-full ">
            <div className=" absolute flex justify-center max-h-full w-full">
              <div className=" lg:text-7xl sm:text-6xl text-3xl font-bold align-middle   text-white ">
                <div className="w-full lg:mt-14">
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
                  className=" md:w-full  lg:w-full lg:h-[600px]"
                  src={HeroBanner}
                  alt="contact us"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
    )
  }

  const MobileBanner = () => {
    return (
      <div>
        {isMobile && (
          <div className=" relative w-full  ">
            <div className=" relative md:align-middle lg:text-center text-center h-full ">
              <div className=" absolute flex justify-center max-h-full w-full">
                <div className=" lg:text-7xl sm:text-6xl text-3xl font-bold align-middle   text-white ">
                  <div className="w-full lg:mt-14">
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
                    className=" md:w-full  lg:w-full lg:h-[600px]"
                    src={HeroBanner}
                    alt="contact us"
                  />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="  lg:h-full grid w-full ">
     {isDesktop ? <DesktopBanner/> : <MobileBanner/>}
    </div>
  );
}

export default HeroCompany