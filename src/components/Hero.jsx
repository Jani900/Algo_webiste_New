import React from 'react';
import Typed from 'react-typed';
import Banner from '../assets/IT_compressed.mp4';

const Hero = () => {

const windowWidth = window.innerWidth;
const isMobile = windowWidth <= 768;
const isTablet = windowWidth <= 1024 && windowWidth > 768;
const isDesktop = windowWidth >= 1440;



  return (
    <div className="text-white relative bg-[#606161]">
      {isDesktop && (
        <div className="relative flex justify-center min-w-full lg:self-center ">
          <div className=" min-w-full lg:self-center ">
            <div style={{ maxHeight: "700px", overflow: "hidden" }}>
          

              <video
                className=" lg:w-full w-full  "
                src={Banner}
                id="videos"
                muted="muted"
                type="video/mp4"
                autoPlay="autoplay"
                loop
              ></video>
    
            </div>
          </div>
          <div className="absolute inset-0 bg-black opacity-30"></div>{" "}
          {/* Overlay */}
          <div className="absolute lg:max-w-[900px] lg:pt-60 mx-auto text-center flex flex-col justify-center ">
            <h1 className="lg:text-7xl md:text-5xl sm:text-6xl text-3xl font-bold md:py-6 align-middle pt-28">
              Grow your digital footprint
            </h1>
            <div className=" flex justify-center items-center">
              <p className="lg:text-5xl md:text-4xl sm:text-4xl text-xl font-bold py-4">
                What we do:
              </p>
              <Typed
                className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#80ccba]"
                strings={[
                  "Software",
                  "Hardware Integration",
                  "Web Applications",
                  "Mobile Applications",
                  "Management Systems",
                  "GPS systems",
                  "CRM systems",
                ]}
                typeSpeed={50}
                backSpeed={45}
                showCursor={false}
                loop
              />
            </div>
          </div>
        </div>
      )}
      {isTablet && (
        <div className="relative flex justify-center min-w-full lg:self-center ">
          <div className=" min-w-full lg:self-center ">
            <div style={{ maxHeight: "700px", overflow: "hidden" }}>
              <video
                className=" lg:w-full w-full  "
                src={Banner}
                id="videos"
                muted="muted"
                type="video/mp4"
                autoPlay="autoplay"
                loop
              ></video>
            </div>
          </div>
          <div className="absolute inset-0 bg-black opacity-30"></div>{" "}
          {/* Overlay */}
          <div className="absolute lg:max-w-[900px] lg:pt-60 mx-auto text-center flex flex-col justify-center ">
            <h1 className="lg:text-7xl md:text-5xl sm:text-6xl text-3xl font-bold md:py-6 align-middle pt-28">
              Grow your digital footprint
            </h1>
            <div className=" flex justify-center items-center">
              <p className="lg:text-5xl md:text-4xl sm:text-4xl text-xl font-bold py-4">
                What we do:
              </p>
              <Typed
                className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#80ccba]"
                strings={[
                  "Software",
                  "Hardware Integration",
                  "Web Applications",
                  "Mobile Applications",
                  "Management Systems",
                  "GPS systems",
                  "CRM systems",
                ]}
                typeSpeed={50}
                backSpeed={45}
                showCursor={false}
                loop
              />
            </div>
          </div>
        </div>
      )}
      {isMobile && (
        <div className="relative flex justify-center min-w-full lg:self-center mb-[70px] ">
          <div className=" min-w-full lg:self-center h-100vh ">
            <div style={{ maxHeight: "800px", overflow: "hidden" }}>
              <video
                className=" lg:w-full w-full  "
                src={Banner}
                id="videos"
                muted="muted"
                type="video/mp4"
                autoPlay="autoplay"
                loop
              ></video>
            </div>
          </div>
          <div className="absolute inset-0 bg-black opacity-30"></div>{" "}
          {/* Overlay */}
          <div className="absolute lg:max-w-[900px] lg:pt-60 mx-auto text-center flex flex-col justify-center ">
            <h1 className="lg:text-7xl md:text-5xl sm:text-6xl text-3xl font-bold md:py-6 align-middle pt-3">
              Grow your digital footprint
            </h1>
          </div>
          <div className="absolute flex justify-center items-center mt-[225px]">
            <p className="lg:text-5xl md:text-4xl sm:text-4xl text-xl font-bold py-4">
              What we do:
            </p>
            <Typed
              className=" md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-[#80ccba]"
              strings={[
                "Software",
                "Hardware Integration",
                "Web Applications",
                "Mobile Applications",
                "Management Systems",
                "GPS systems",
                "CRM systems",
              ]}
              typeSpeed={50}
              backSpeed={45}
              showCursor={false}
              loop
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Hero;
