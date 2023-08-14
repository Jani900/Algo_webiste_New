import React from 'react';
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'
import { Link}  from 'react-router-dom';



const Cards = () => {



  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      {/* <ScrollLink to="pricing" smooth={true} duration={1000}> */}
        <h1 className="text-4xl font-bold text-center mb-16 text-gray-600">
          Current Plans
        </h1>

        <div className=" max-w-[1240px] mx-auto grid lg:grid-cols-3 gap-8">
          <div className=" w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 hover:bg-gray-100 pt-20 mb-20">

            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={Single}
              alt="/"
            />

            <h2 className="text-2xl font-bold text-center py-8">Basic</h2>

            <p className="text-center text-4xl font-bold">From $20 per year</p>

            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
              <p className="py-2 border-b mx-8">1 Granted User</p>
              <p className="py-2 border-b mx-8">Register Domain</p>
              <p className="py-2 border-b mx-8">Domain hosting</p>
              <p className="py-2 border-b mx-8">SSL certificate</p>
            </div>

            <div className="flex-grow"></div>

            <Link
              to="/contact"
              className=" bottom-0 bg-[#606161] w-[200px] rounded-md font-medium my-4 mx-auto px-6 py-3 text-center"
            >
              <button className="text-[#81cdba] font-semibold">Enquire now</button>
            </Link>

          </div>
          
          <div className="w-full shadow-xl bg-white flex flex-col p-4  my-4 rounded-lg hover:scale-105 duration-300 hover:bg-gray-100 pt-20 mb-20 ">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={Double}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">
              Package Plan
            </h2>
            <p className="text-center text-4xl font-bold">$199 per year</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">Dynamic Website builder</p>
              <p className="py-2 border-b mx-8">
                Design based on customisable templates
              </p>
              <p className="py-2 border-b mx-8">DB hosting up to 2GB</p>
              <p className="py-2 border-b mx-8">Single user Email hosting </p>
              <p className="py-2 border-b mx-8">Website hosting </p>
              <p className="py-2 border-b mx-8">SSL certificate</p>
            </div>
            <div className="flex-grow"></div>
            <Link
              to="/contact"
              className=" bottom-0 bg-[#606161] w-[200px] rounded-md font-medium my-4 mx-auto px-6 py-3 text-center"
            >
              <button className="text-[#81cdba] font-semibold">Enquire now</button>
            </Link>
          </div>
          <div className="w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 hover:bg-gray-100 pt-20 mb-20">
            <img
              className="w-20 mx-auto mt-[-3rem] bg-white"
              src={Triple}
              alt="/"
            />
            <h2 className="text-2xl font-bold text-center py-8">
              Enterprise Package
            </h2>
            <p className="text-center text-4xl font-bold">Get in touch</p>
            <div className="text-center font-medium">
              <p className="py-2 border-b mx-8 mt-8">Cloud Storage</p>
              <p className="py-2 border-b mx-8">Unlimited Email hostings</p>
              <p className="py-2 border-b mx-8">Data transfer services</p>
              <p className="py-2 border-b mx-8">Backup and disaster recovery</p>
              <p className="py-2 border-b mx-8">Mobile App services</p>
              <p className="py-2 border-b mx-8">Domain register</p>
              <p className="py-2 border-b mx-8">Domain hosting </p>
              <p className="py-2 border-b mx-8">Dynamic Website builder</p>
              <p className="py-2 border-b mx-8">SSL certificate</p>
              <p className="py-2 border-b mx-8">IT consultancy & support</p>
              <p className="py-2 border-b mx-8">Design solution</p>
              <p className="py-2 border-b mx-8">
                Network topology map services
              </p>
            </div>
            <div className="flex-grow"></div>
            <Link
              to="/contact"
              className=" bottom-0 bg-[#606161] w-[200px] rounded-md font-medium my-4 mx-auto px-6 py-3 text-center"
            >
              <button className="text-[#81cdba] font-semibold">Enquire now</button>
            </Link>
          </div>
        </div>

      {/* </ScrollLink> */}
    </div>
  );
};

export default Cards;
