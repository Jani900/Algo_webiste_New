import React from 'react'
import PhonePic from "../assets/phone_3.png"
import Desktop from "../assets/Desktop-Application-Development-1-4268954739"
import Server from "../assets/iStock-1367728820.jpg"
import Dbpic from "../assets/iStock-1400292331.jpg"

const Ourskills = () => {

    const windowWidth = window.innerWidth;
    const isMobile = windowWidth < 1250;
    const isDesktop = windowWidth > 1250;

  return (
    <div className=" max-w-full grid gab-4 xs:grid-cols-1 xs:grid-rows-4 lg:grid bg-white">
      <h1 className=" pt-20 pb-20 text-4xl xs:cols-1 xs:gab-4 xs:grid-cols-1 py-10  text-gray-600  font-serif lg:text-5xl xl:py-20 xl:text-6xl text-center">
        Our Services
      </h1>
      {/* Mobile Application */}

      <div className="grid  grid-cols-1 grid-rows-2  lg:flex lg:gap-4  xl:w-5xl xl:grid-cols-2 xl:py-32  xl:justify-evenly pb-20 ">
        <div className="flex justify-center pb-[20px] ">
          <img
            className="  h-[16rem]  w-[13rem] lg:h-[500px]  lg:w-[400px] hover:scale-105 duration-300 "
            src={PhonePic}
            alt="Algotech "
          />
        </div>
        <div className="grid grid-cols-1 lg:self-center  ">
          <h1 className="black text-2xl font-serif font-semibold xl:text-3xl text-center">
            Mobile Applications
          </h1>
          <div className="text-gray-600 text-xl lg:text-2xl xl:pt-20 ">
            <ul className="text-center">
              <li>Design</li>
              <li>Development</li>
              <li>Production</li>
              <li>Testing</li>
              <li>Release</li>
              <li>Post-release management</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Web & Desktop Applications */}
      {isDesktop && (
        <div className="grid  grid-cols-1 grid-rows-2 lg:flex lg:gap-4  xl:w-5xl xl:grid-cols-2 xl:py-32  xl:justify-evenly ">
          <div className="grid grid-cols-1  lg:self-center">
            <h1 className="text-black text-2xl font-serif font-semibold xl:text-3xl text-center">
              Web & Desktop Applications
            </h1>
            <div className="text-gray-600 text-xl lg:text-2xl xl:pt-20 ">
              <ul className="text-center">
                <li>Customised CRM</li>
                <li>Analysis</li>
                <li>Cloud Hosting</li>
                <li>SaaS</li>
                <li>IaaS</li>
                <li>PaaS</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center pb-[20px]">
            <img
              className="h-[14rem]  w-[16rem] lg:h-[300px]  lg:w-[600px] hover:scale-105 duration-300 rounded-xl"
              src={Desktop}
              alt="Algotech "
            />
          </div>
        </div>
      )}
      {isMobile && (
        <div className="grid  grid-cols-1 grid-rows-2 lg:flex lg:gap-4  xl:w-5xl xl:grid-cols-2 xl:py-32  xl:justify-evenly pb-20">
          <div className="flex justify-center pb-[20px]">
            <img
              className="h-[14rem]  w-[16rem] lg:h-[300px]  lg:w-[600px] hover:scale-105 duration-300 rounded-xl"
              src={Desktop}
              alt="Algotech "
            />
          </div>

          <div className="grid grid-cols-1  lg:self-center">
            <h1 className="text-black text-2xl font-serif font-semibold xl:text-3xl text-center">
              Web & Desktop Applications
            </h1>
            <div className="text-gray-600 text-xl lg:text-2xl xl:pt-20 ">
              <ul className="text-center">
                <li>Customised CRM</li>
                <li>Analysis</li>
                <li>Cloud Hosting</li>
                <li>SaaS</li>
                <li>IaaS</li>
                <li>PaaS</li>
              </ul>
            </div>
          </div>
        </div>
      )}
      {/* Server Administration */}
      <div className="grid  grid-cols-1 grid-rows-2 lg:flex lg:gap-4  xl:w-5xl xl:grid-cols-2 xl:py-32  xl:justify-evenly pb-20 ">
        <div className="flex justify-center pb-[20px]">
          <img
            className="h-[14rem]  w-[16rem] lg:h-[300px]  lg:w-[600px] hover:scale-105 duration-300 rounded-lg"
            src={Dbpic}
            alt="Algotech "
          />
        </div>
        <div className="grid grid-cols-1  lg:self-center">
          <h1 className="text-black text-2xl font-serif  xl:text-3xl text-center">
            Database Administration
          </h1>
          <div className="text-gray-600 text-xl lg:text-2xl xl:pt-20 ">
            <ul className="text-center">
              <li>Customised Design</li>
              <li>Development</li>
              <li>Cloud Hosting</li>
              <li>Ongoing Support</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Domain Registration / Website Hosting / Email hosting */}
      {isDesktop && (
        <div className="grid  grid-cols-1 lg:flex lg:gap-4  xl:w-5xl xl:grid-cols-2 xl:py-32  xl:justify-evenly">
          <div className="grid grid-cols-1 lg:self-center">
            <h1 className="text-black text-2xl font-serif  xl:text-3xl text-center">
              Domain Registration / Website Hosting / Email hosting
            </h1>
            <div className="text-gray-600 text-xl lg:text-2xl xl:pt-20 ">
              <ul className="text-center">
                <li>Website Hosting</li>
                <li>Email Hosting</li>
                <li>SSL Certificates</li>
                <li>Server & Cloud</li>
                <li>24/7 Localy based Support</li>
              </ul>
            </div>
          </div>
          <div className="flex justify-center py-[20px]">
            <img
              className="h-[14rem]  w-[16rem] lg:h-[300px]  lg:w-[600px] hover:scale-105 duration-300 rounded-lg"
              src={Server}
              alt="Algotech "
            />
          </div>
        </div>
      )}
      {isMobile && (
        <div className="grid  grid-cols-1 lg:flex lg:gap-4  xl:w-5xl xl:grid-cols-2 xl:py-32  xl:justify-evenly pb-20">
          <div className="flex justify-center py-[20px]">
            <img
              className="h-[14rem]  w-[16rem] lg:h-[300px]  lg:w-[600px] hover:scale-105 duration-300 rounded-lg"
              src={Server}
              alt="Algotech "
            />
          </div>
          <div className="grid grid-cols-1 lg:self-center">
            <h1 className="text-black text-2xl font-serif  xl:text-3xl text-center">
              Domain Registration / Website Hosting / Email hosting
            </h1>
            <div className="text-gray-600 text-xl lg:text-2xl xl:pt-20 pt-10 ">
              <ul className="text-center">
                <li>Website Hosting</li>
                <li>Email Hosting</li>
                <li>SSL Certificates</li>
                <li>Server & Cloud</li>
                <li>24/7 Localy based Support</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Ourskills