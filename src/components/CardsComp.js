import React, { useEffect } from 'react'
import Developer from '../assets/developer.png'
import Engineer from '../assets/software-engineer.png'
import DBAdmin from '../assets/database (1).png'
import Social from '../assets/social-media.png'
import UIDesign from '../assets/ui-design (1).png'
import Aos from 'aos'
import 'aos/dist/aos.css'

const CardsComp = () => {

    useEffect(() => {
    Aos.init({duration: 2000});
    }, [])

  return (
    <div className="w-full pt-[3rem] lg:pt-[3rem] px-4 bg-white ">
      <div className="pt-10 max-w-[full] mx-auto grid lg:grid-cols-5 gap-8 lg:flex lg:justify-evenly">
        <div
          className="pb-20 md:pt-0 lg:pt-0 w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white"
          
        >
          <img
            className="w-20 mx-auto mt-[-3rem]  bg-white"
            src={Developer}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Software Engineers
          </h2>
          <div className="text-center font-medium text-gray-600">
            <p className="py-2 border-b mx-8 mt-8">Workflow</p>
            <p className="py-2 border-b mx-8">Database</p>
            <p className="py-2 border-b mx-8">Content Management</p>
            <p className="py-2 border-b mx-8">Operating Systems</p>
            <p className="py-2 border-b mx-8">Architecture</p>
          </div>
        </div>
        <div
          className="py-20 lg:pt-0 w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white md:pt-28"
          
        >
          <img
            className="w-20 mx-auto mt-[-3rem]  bg-white"
            src={Engineer}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Front-End Developer
          </h2>
          <div className="text-center font-medium text-gray-600">
            <p className="py-2 border-b mx-8 mt-8">HTML</p>
            <p className="py-2 border-b mx-8">CSS</p>
            <p className="py-2 border-b mx-8">JavaScript</p>
            <p className="py-2 border-b mx-8">JSON</p>
            <p className="py-2 border-b mx-8">AJAX</p>
            <p className="py-2 border-b mx-8">Node.js</p>
            <p className="py-2 border-b mx-8">MySQL</p>
          </div>
        </div>
        <div
          className=" py-20 md:pt-0 lg:pt-0 w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white md:pt-28"
          
        >
          <img
            className="w-20 mx-auto mt-[-3rem]   bg-white"
            src={DBAdmin}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Database Administrator
          </h2>
          <div className="text-center font-medium text-gray-600">
            <p className="py-2 border-b mx-8 mt-8">Security</p>
            <p className="py-2 border-b mx-8">Integrity</p>
            <p className="py-2 border-b mx-8">Data management</p>
            <p className="py-2 border-b mx-8">Optimization</p>
            <p className="py-2 border-b mx-8">Backup</p>
            <p className="py-2 border-b mx-8">Archive</p>
            <p className="py-2 border-b mx-8">Recovery</p>
          </div>
        </div>
        <div
          className="py-20 w-full lg:pt-0 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white md:pt-28"
          
        >
          <img
            className="w-20 mx-auto mt-[-3rem]  bg-white"
            src={UIDesign}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            User Experience Designer
          </h2>
          <div className="text-center font-medium text-gray-600">
            <p className="py-2 border-b mx-8 mt-8">Research</p>
            <p className="py-2 border-b mx-8">User flow</p>
            <p className="py-2 border-b mx-8">Design</p>
            <p className="py-2 border-b mx-8">Graphics</p>
            <p className="py-2 border-b mx-8">Interface</p>
            <p className="py-2 border-b mx-8">Technology</p>
          </div>
        </div>
        <div
          className=" py-20 w-full lg:pt-0 shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300 bg-white md:pt-28"
         
        >
          <img
            className="w-20 mx-auto mt-[-3rem]  bg-white"
            src={Social}
            alt="/"
          />
          <h2 className="text-2xl font-bold text-center py-8">
            Marketing Specialist
          </h2>
          <div className="text-center font-medium text-gray-600">
            <p className="py-2 border-b mx-8 mt-8">Workflow</p>
            <p className="py-2 border-b mx-8">Database</p>
            <p className="py-2 border-b mx-8">Content Management</p>
            <p className="py-2 border-b mx-8">Operating Systems</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsComp