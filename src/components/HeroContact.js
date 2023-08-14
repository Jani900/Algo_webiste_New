import React from 'react'
import Typed from 'react-typed'
import ContactUs from '../assets/contactUs.jpg'


function HeroContact() {

  const windowWidth = window.innerWidth;
  const isMobile = windowWidth <= 768;
  const isDesktop = windowWidth > 768;

  return (
    <div className="lg:h-[800px] grid w-full grid-cols-1 xs:grid-cols-2 md:grid-cols-2 md:h-[800px] ">
      {isDesktop && (
        <div className=" grid-cols-1 col-span-2 md:grid-cols-2 ">
          <div className=" grid grid-cols-1 xs:grid-cols-1 md:grid-cols-1 md:col-span-2  md:align-middle lg:text-center lg:grid-rows-1">
            <div className=" grid col-span-1 justify-center h-auto md:self-center md:h-60 lg:h-auto lg:p-8">
              <Typed
                className="text-center text-lg p-4 xs:text-4xl md:text-4xl md:font-normal lg:text-4xl   lg:p-4  text-gray-300  font-serif"
                strings={['" Connect with us today ! "']}
                typeSpeed={60}

                showCursor={false}
              />
              <div className="grid justify-center lg:w-auto">
                <p className="text:xl text-center p-4 xs:text-2xl md:text-2xl md:font-normal lg:text-2xl lg:p-4  text-gray-300  font-serif ">
                  {" "}
                  Speak to one of our experts to learn more about our services
                  and how we can help you.
                </p>
              </div>
            </div>

            <div className=" max-w-full xs:row-start-2  xs:col-start-2 xs:self-center lg:self-center  ">
              <img
                className="  overflow-y-visible-[5rem]  lg:w-full lg:h-[600px]  object-cover"
                src={ContactUs}
                alt="contact us"
              />
            </div>
          </div>
        </div>
      )}
      {isMobile && (
        <div className=" grid-cols-1 col-span-2 md:grid-cols-2 lg:mt-16 md:h-[800px] h-[500px] ">
          <div className=" grid grid-cols-1  md:grid-cols-1 md:col-span-2  md:align-middle lg:text-center lg:grid-rows-1">
            <div className=" grid col-span-1 justify-center h-auto md:self-center md:h-60 lg:h-auto lg:p-8 mb-[-180px]">
              <Typed
                className="text-center text-lg p-4 xs:text-4xl md:text-4xl md:font-normal lg:text-4xl   lg:p-4  text-gray-300  font-serif"
                strings={['" Connect with us today ! "']}
                typeSpeed={60}
                showCursor={false}
              />
              <div className=" max-w-full xs:self-center lg:self-center  ">
                <img
                  className=" md:w-full pt-10 pb-10 lg:rounded-tl-full  lg:w-full lg:h-[450px]  object-cover"
                  src={ContactUs}
                  alt="contact us"
                />
              </div>
              <div className="grid justify-center lg:w-auto">
                <p className="text:xl text-center p-4 xs:text-2xl md:text-2xl md:font-normal lg:text-2xl lg:p-4  text-gray-300  font-serif lg:w-[500px]">
                  {" "}
                  Speak to one of our experts to learn more about our services
                  and how we can help you.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeroContact
