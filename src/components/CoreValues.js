import React, { useEffect } from 'react'
import { FaLaptopCode } from 'react-icons/fa'
import {AiFillCreditCard} from 'react-icons/ai'
//icons
import HealthPlus from '../assets/healthplus.svg'
import Donate from '../assets/donate.svg'
import Mobile from '../assets/mobile.svg'
import Plant from '../assets/plant.svg'
import Insurance from '../assets/term insuramce.svg'
import Bulb from '../assets/bulb.svg'
import Beauty from '../assets/beauty.svg'
import Aos from 'aos'
import 'aos/dist/aos.css'




const CoreValues = () => {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])


  return (
    <div className="grid grid-cols-1 md:mx-auto bg-white ">
      <div className=" lg:mx-28 pb-8 ">
        <h1 className="text-4xl p-4 text-center md:text-[60px] text-gray-600 md:pt-[3rem] font-serif  pt-20 pb-20">
          Our Core Values
        </h1>
      </div>
      <div className="grid  grid-cols-1 grid-rows-4 xs:grid-cols-1 md:grid-cols-1 md:justify-center lg:grid-cols-2 lg:grid-rows-2 lg:mx-32">
        <div className=" w-full grid-rows-4 pb-4 lg:p-20 lg:flex grid-cols-1 xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 lg:justify-around ">
          <div className="flex justify-center " data-aos="flip-up">
            <img
              className=" w-28 "
              src={HealthPlus}
              width={150}
              alt="planet"
            />
          </div>
          <div className="md:w-full lg:w-[400px] lg:grid-cols-4 pb-20 md:grid-cols-1 ">
            <p className="font-extrabold text-2xl p-2 md;justify-center items-center md:text-[30px] text-center">
              Respect and Integrity
            </p>
            <p className="text-xl text-center p-2 md:justify-center md:text-[20px] text-gray-600 md:pt-[20px] md:text-center md:w-100">
              We are commited to achieve the best results for our customers with
              passion, respect and integrity for our team and our partners
            </p>
          </div>
        </div>
        <div className="grid-rows-4 pb-4 lg:p-20 lg:flex grid-cols-1 xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 lg:justify-around">
          <div className="flex justify-center" data-aos="flip-up">
            <img
              className=" w-28 "
              src={Donate}
              width={150}
              alt=""
            />
          </div>
          <div className="md:w-full lg:w-80 pb-20">
            <p className=" font-extrabold text-2xl p-2 md:justify-center items-center md:text-[30px] text-center  ">
              Support each other
            </p>
            <p className="md:w-100 text-xl  p-2 md:justify-center md:text-[20px] text-gray-600 md:pt-[20px] text-center ">
              Always work together as a team, help each other and take every
              opportunity to keep learning and innovating as one unit
            </p>
          </div>
        </div>
        <div className="grid-rows-4 pb-4 lg:p-20 lg:flex grid-cols-1 xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 lg:justify-around">
          <div className="flex justify-center" data-aos="flip-up">
            <img
          className=" w-28 "
              src={Plant}
              width={150}
              alt=""
            />
          </div>
          <div className="md:w-full lg:w-80 pb-20">
            <p className="font-extrabold text-2xl p-2 md;justify-center items-center md:text-[30px] text-center  ">
              Care of our environment
            </p>
            <p className="text-xl text-center p-2 md:justify-center md:text-[20px] text-gray-600 md:pt-[20px] md:text-center">
              Our mission is to create products that will make our world a
              better, more sustainable place
            </p>
          </div>
        </div>
        <div className="grid-rows-4 pb-4 lg:p-20 lg:flex grid-cols-1 xs:grid-cols-1 md:grid-cols-1 lg:grid-cols-4 lg:justify-around">
          <div className="flex justify-center" data-aos="flip-up">
            <img
          className=" w-28 "
              src={Insurance}
              width={150}
              alt=""
            />
          </div>
          <div className="md:w-full lg:w-80 pb-20">
            <p className="font-extrabold text-2xl p-2 md;justify-center items-center md:text-[30px] text-center  ">
              Make the world a better place
            </p>
            <p className="text-xl text-center p-2 md:justify-center md:text-[20px] text-gray-600 md:pt-[20px] md:text-center">
              Our mission is to create products that will make our world a
              better, more sustainable place
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoreValues