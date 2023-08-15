import React, { useEffect } from 'react';
import Laptop from '../assets/laptop.jpg';
import WebDev from '../assets/Webdevelopment.jpg';
import Gps from '../assets/Gps_system.jpg';
import {Link} from 'react-router-dom';
import {Link as ScrollLink} from 'react-scroll';
import Aos from 'aos';
import 'aos/dist/aos.css';



const Analytics = () => {


useEffect(() => {
  Aos.init({duration: 2000});
}, []);

//--------------------------------------------Mobile view--------------------------------------------
const windowWidth = window.innerWidth;
const isMobile = windowWidth < 1250;
const isDesktop = windowWidth > 1250;



//--------------------------------------------Main render function--------------------------------------------
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 border-b md:border-b-1 border-b-[#80ccba]">
        <img
          className="w-[300px]  lg:w-[500px] mx-auto my-4"
          src={Laptop}
          alt="/"
          data-aos="fade-up"
        />
        <div className="flex flex-col justify-center" id="crm">
          <p
            className=" md:text-2xl text-xl font-bold text-gray-700 pt-[100px] p-[20px] pb-[100px]"
            data-aos="fade-up"
          >
            "We are dedicated to the highest quality of technology and IT
            services delivered with ingenuity and freshness"
          </p>
          <ScrollLink to="analytics" smooth={true} duration={1000}>
            <p
              className="text-[#80ccba] font-bold md:text-4xl sm:text-3xl text-2xl "
              id="analytics"
            >
              CRM Systems
            </p>
          </ScrollLink>
          <h1 className="md:text-3xl sm:text-2xl text-1xl font-bold py-2">
            Manage your business Centrally from one place
          </h1>
          <p data-aos="fade-right">
            "Discover the perfect CRM solution for your business with our IT
            company's expertise. We create cutting-edge CRM Systems that are
            tailored to your unique needs, delivering affordability without
            compromising quality. Experience rapid development times and unlock
            the potential of streamlined customer management. Elevate your
            business with our specific CRM solutions."
          </p>
          <button
            className="bg-[#606161] text-[#81cdba] w-[200px] rounded-md font-semibold my-6 mx-auto md:mx-0 py-3 "
            data-aos="flip-right"
          >
            <Link to="/contact" href="#name">
              Enquire now
            </Link>
          </button>
        </div>
      </div>
      {isDesktop && (
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 pt-20 border-b md:border-b-1 border-b-[#80ccba]">
          <div className="flex flex-col justify-center">
            <p
              className=" md:text-2xl text-xl font-bold text-gray-700 pt-[100px] p-[20px] pb-[100px]"
              data-aos="fade-up"
            >
              "We turn your vision into online reality with expert software
              development and ongoing support."
            </p>
            <ScrollLink to="software" smooth={true} duration={1000}>
              <p className="text-[#80ccba] font-bold md:text-4xl sm:text-3xl text-2xl ">
                Software Development
              </p>
            </ScrollLink>
            <h1 className="md:text-3xl sm:text-2xl text-1xl font-bold py-2">
              Empowering Digitel Success
            </h1>
            <p data-aos="fade-right">
              "Transforming Visions into Reality: Your One-Stop Destination for
              Dynamic Websites, E-commerce Platforms, and Comprehensive Online
              Services. Experience top-tier software development, from
              small-scale gems to grand online solutions. Partner with us for
              expert guidance and ongoing support on your digital journey."
            </p>
            <button
              className="bg-[#606161] text-[#81cdba] w-[200px] rounded-md font-semibold my-6 mx-auto md:mx-0 py-3 "
              data-aos="flip-right"
            >
              <Link to="/contact" href="#name">
                Enquire now
              </Link>
            </button>
          </div>

          <img
            className="w-[300px] lg:w-[500px] mx-auto my-4"
            src={WebDev}
            alt="/"
            data-aos="fade-right"
          />
        </div>
      )}
      {isMobile && (
        <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 border-b md:border-b-1 border-b-[#80ccba]">
          <img
            className="w-[300px] lg:w-[500px] mx-auto my-4 pt-20"
            src={WebDev}
            alt="/"
            data-aos="fade-up"
          />
          <div className="flex flex-col justify-center" data-aos="fade-up">
            <p
              className=" md:text-2xl text-xl font-bold text-gray-700 pt-[100px] p-[20px] pb-[100px]"
              id="software"
            >
              "We turn your vision into online reality with expert software
              development and ongoing support."
            </p>
            <ScrollLink to="software" smooth={true} duration={1000}>
              <p className="text-[#80ccba] font-bold md:text-4xl sm:text-3xl text-2xl ">
                Software Development
              </p>
            </ScrollLink>
            <h1 className="md:text-3xl sm:text-2xl text-1xl font-bold py-2">
              Empowering Digitel Success
            </h1>
            <p data-aos="fade-right">
              "Transforming Visions into Reality: Your One-Stop Destination for
              Dynamic Websites, E-commerce Platforms, and Comprehensive Online
              Services. Experience top-tier software development, from
              small-scale gems to grand online solutions. Partner with us for
              expert guidance and ongoing support on your digital journey."
            </p>
            <button
              className="bg-[#606161] text-[#81cdba] w-[200px] rounded-md font-semibold my-6 mx-auto md:mx-0 py-3 "
              data-aos="flip-right"
            >
              <Link to="/contact" href="#name">
                Enquire now
              </Link>
            </button>
          </div>
        </div>
      )}
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2 pt-20">
        <img
          className="w-[300px] lg:w-[500px] mx-auto my-4"
          src={Gps}
          alt="/"
          data-aos="fade-up"
        />
        <div className="flex flex-col justify-center" data-aos="fade-up">
          <p className=" md:text-2xl text-xl font-bold text-gray-700 pt-[100px] p-[20px] pb-[100px]">
            "We elevate your fleet management with precision: navigating
            boundaries, unleashing GPS potential."
          </p>
          <ScrollLink to="gps" smooth={true} duration={1000}>
            <p
              className="text-[#80ccba] font-bold md:text-4xl sm:text-3xl text-2xl "
              id="gps"
            >
              GPS Systems
            </p>
          </ScrollLink>
          <h1 className="md:text-3xl sm:text-2xl text-1xl font-bold py-2">
            Manage your business Fleet with GPS
          </h1>
          <p data-aos="fade-right">
            "Navigate Beyond Boundaries: Unleashing the Potential of GPS
            Systems. From cutting-edge GPS technology to tailored solutions, we
            empower seamless navigation and location-based services. Discover a
            world of possibilities with our GPS expertise and ongoing support."
          </p>
          <button
            className="bg-[#606161] text-[#81cdba] w-[200px] rounded-md font-semibold my-6 mx-auto md:mx-0 py-3 "
            data-aos="flip-right"
          >
            <Link to="/contact" href="#name">
              Enquire now
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
