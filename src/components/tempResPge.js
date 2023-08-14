import React,{useEffect, } from 'react'
import { Link } from 'react-router-dom'
import JsLogo from '../assets/JavaScript-Logo.png'
import ReactLogo from '../assets/react_logo.png'
import NodeLogo from '../assets/nodejs.png'
import CLogo from '../assets/CLogo2.png'
import Html5 from '../assets/html-5.png'
import Css from '../assets/css.png'
import Python from '../assets/python (1).png'
import CPlus from "../assets/c-logo.png"
import DB from "../assets/database.png"
import Ruby from "../assets/ruby.jpg"
import PhP from "../assets/PHP-logo.svg.png"
import Vue from "../assets/ruby.jpeg"
import StepSheet from "../assets/requirement.png";
import Steps from "../assets/steps.png";
import Checked from "../assets/checked-data.png";
import '../styles.css';
import Aos from 'aos';
import 'aos/dist/aos.css';


const TempResPge = () => {

useEffect(() => {
    Aos.init({duration: 2000});
}, []);


  return (
    <div className=" w-full bg-white lg:pt-20   grid grid-cols-1 md:p-15 ">
      <div className="text-gray-600 text-center lg:text-start">
        <h1
          className="lg:text-5xl text-2xl xs:text-3xl sm:text-4xl pt-8 sm:pt-10 "
          id="resources"
        >
          Tools and Resources
        </h1>
      </div>
      <div className="lg:max-w-[1250px] lg:mx-auto ">
        <div className=" lg:max-w-[1250px]  grid grid-cols-1  lg:flex  text-black  pt-20 gap-4 ">
          <div className="w-[150px] lg:w-[300px] mx-auto my-4">
            <img
              className="w-[120px] lg:w-[300px] mx-auto my-4"
              src={JsLogo}
              alt=""
            />
          </div>
          <div className="flex flex-col content-center text-center lg:text-right ">
            <p className=" w-full lg:w-[300px] text-md md:text-1xl font-bold text-gray-700 p-[20px] pb-[100px] md:pt-10">
              "JavaScript is a widely-used programming language primarily used
              for front-end web development to enhance interactivity and user
              experience in web browsers. It allows you to create dynamic and
              interactive elements on web pages, such as animations, forms
              validation, and real-time updates."
            </p>
          </div>
          <div className="w-[150px] lg:w-[300px] mx-auto my-4">
            <img
              className="w-[120px] lg:w-[300px] mx-auto my-4"
              src={ReactLogo}
              alt=""
            />
          </div>
          <div className="flex flex-col content-center text-center lg:text-right">
            <p className=" w-full lg:w-[300px] text-md md:text-1xl font-bold text-gray-700 p-[20px] pb-[100px] md:pt-10">
              "React is a popular and widely used JavaScript library for
              building user interfaces (UIs) for web applications. Developed and
              maintained by Facebook, React has gained significant adoption in
              the web development community due to its efficiency, modularity,
              and ability to create dynamic and interactive user interfaces."
            </p>
          </div>
          <div className="w-[150px] lg:w-[300px] mx-auto my-4">
            <img
              className="w-[120px] lg:w-[300px] mx-auto my-4"
              src={NodeLogo}
              alt=""
            />
          </div>
          <div className="flex flex-col content-center text-center lg:text-right">
            <p className=" w-full lg:w-[300px] text-md md:text-1xl font-bold text-gray-700 p-[20px] pb-[100px] md:pt-10">
              "Node.js is an open-source, server-side JavaScript runtime
              environment that allows you to execute JavaScript code on the
              server rather than just in the browser. Node.js enables developers
              to build a wide range of applications, from simple command-line
              tools to complex web servers"
            </p>
          </div>
        </div>
      </div>
      <div className="lg:max-w-[1250px] lg:mx-auto">
        <div className="  grid grid-cols-1 lg:grid-cols-3 lg:flex  text-black justify-center pt-20 gap-4">
          <div className="w-[150px] lg:w-[300px] mx-auto my-4">
            <img
              className="w-[120px] lg:w-[300px] mx-auto my-4"
              src={CLogo}
              alt=""
            />
          </div>
          <div className="flex flex-col content-center text-center lg:text-right">
            <p className=" w-full lg:w-[300px] text-md md:text-1xl font-bold text-gray-700 p-[20px] pb-[100px] md:pt-10">
              "C# is often used for building server-side applications, web APIs,
              and other backend services. ASP.NET Core, a cross-platform
              framework, is commonly used for this purpose, as well as machine
              learning and AI"
            </p>
          </div>
          <div className="w-[150px] lg:w-[300px] mx-auto my-4">
            <img
              className="w-[120px] lg:w-[300px] mx-auto my-4"
              src={Html5}
              alt=""
            />
          </div>
          <div className="flex flex-col content-center text-center lg:text-right">
            <p className=" w-full lg:w-[300px] text-md md:text-1xl font-bold text-gray-700 p-[20px] pb-[100px] md:pt-10">
              "HTML5 is an essential technology for web development and is
              typically used in conjunction with other technologies like CSS
              (Cascading Style Sheets) and JavaScript to create modern and
              interactive web applications"
            </p>
          </div>
          <div className="w-[150px] lg:w-[300px] mx-auto my-4">
            <img
              className="w-[120px] lg:w-[300px] mx-auto my-4"
              src={Css}
              alt=""
            />
          </div>
          <div className="lg:max-w-[1250px] lg:mx-auto">
            <div className="flex flex-col content-center text-center lg:text-right">
              <p className=" w-full lg:w-[300px] text-md md:text-1xl font-bold text-gray-700 p-[20px] pb-[100px] md:pt-10">
                "CSS (Cascading Style Sheets) is a styling language used to
                control the presentation and layout of web pages. It works in
                conjunction with HTML and JavaScript to create visually
                appealing and responsive web designs. "
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:flex  text-black justify-center pt-20 gap-4">
          <div className="w-[150px] lg:w-[300px] mx-auto my-4">
            <img
              className="w-[120px] lg:w-[300px] mx-auto my-4"
              src={Python}
              alt=""
            />
          </div>
          <div className="flex flex-col content-center text-center lg:text-right">
            <p className=" w-full lg:w-[300px] text-md md:text-1xl font-bold text-gray-700 p-[20px] pb-[100px] md:pt-10">
              "Python is a versatile and popular programming language known for
              its simplicity, readability, and extensive library support. It is
              used for a wide range of applications, from web development and
              data analysis to scientific computing and artificial intelligence.
              "
            </p>
          </div>
          <div className="w-[150px] lg:w-[300px] mx-auto my-4">
            <img
              className="w-[120px] lg:w-[300px] mx-auto my-4"
              src={CPlus}
              alt=""
            />
          </div>
          <div className="flex flex-col content-center text-center lg:text-right">
            <p className=" w-full lg:w-[300px] text-md md:text-1xl font-bold text-gray-700 p-[20px] pb-[100px] md:pt-10">
              "C++ is often used for system-level programming, where direct
              memory manipulation and hardware interaction are required.
              Operating systems, device drivers, and low-level software are
              often written in C++"
            </p>
          </div>
          <div className="w-[150px] lg:w-[300px] mx-auto my-4">
            <img
              className="w-[120px] lg:w-[300px] mx-auto my-4"
              src={DB}
              alt=""
            />
          </div>
          <div className="flex flex-col content-center text-center lg:text-right">
            <p className=" w-full lg:w-[300px] text-md md:text-1xl font-bold text-gray-700 p-[20px] pb-[100px] md:pt-10">
              " Database design play a crucial role in modern software
              applications by providing a structured and reliable method for
              storing and accessing data. Popular SQL include MySQL, PostgreSQL,
              Oracle. NoSQL top of the list include MongoDB, CouchDB, Redis,
              Cassandra and Firebase. "
            </p>
          </div>
        </div>
      </div>
      <div className="lg:max-w-[1250px] lg:mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 lg:flex  text-black justify-center pt-20 gap-4">
          <div className="w-[150px] lg:w-[300px] mx-auto my-4">
            <img
              className="w-[120px] lg:w-[300px] mx-auto my-4"
              src={Ruby}
              alt=""
            />
          </div>
          <div className="flex flex-col content-center text-center lg:text-right">
            <p className=" w-full lg:w-[300px] text-md md:text-1xl font-bold text-gray-700 p-[20px] pb-[100px] md:pt-10">
              "Ruby's clean syntax and ease of use make it a great choice for
              scripting and automating tasks. It can be used for writing small
              scripts to perform various tasks, such as file manipulation, data
              processing, and system administration."
            </p>
          </div>
          <div className="w-[150px] lg:w-[300px] mx-auto my-4">
            <img
              className="w-[120px] lg:w-[300px] mx-auto my-4"
              src={Vue}
              alt=""
            />
          </div>
          <div className="flex flex-col content-center text-center lg:text-right">
            <p className=" w-full lg:w-[300px] text-md md:text-1xl font-bold text-gray-700 p-[20px] pb-[100px] md:pt-10">
              "Vue.js (pronounced "view") is a progressive JavaScript framework
              used for building user interfaces, particularly for single-page
              applications (SPAs) and dynamic web interfaces. It focuses on
              providing a simple and approachable way to create reactive and
              interactive front-end applications. "
            </p>
          </div>
          <div className="w-[150px] lg:w-[300px] mx-auto my-4">
            <img
              className="w-[120px] lg:w-[300px] mx-auto my-4"
              src={PhP}
              alt=""
            />
          </div>
          <div className="flex flex-col content-center text-center lg:text-right">
            <p className=" w-full lg:w-[300px] text-md md:text-1xl font-bold text-gray-700 p-[20px] pb-[100px] md:pt-10 ">
              "PHP is a widely-used open-source scripting language that is
              primarily used for server-side web development. It is particularly
              well-suited for creating dynamic and interactive web applications.
              "
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1  text-gray-600 text-2xl w-full lg:flex justify-center  py-20 lg:h-full lg:max-w-auto text-center border-t border-gray-400">
        <div
          className="flex justify-center pb-10 md:max-w-auto md:mr-[1rem] lg:max-w-auto lg:mr-[1rem]"
          data-aos="fade-right"
        >
          <img src={StepSheet} className="w-40  " alt="/" />
        </div>

        <p
          className=" px-5 lg:max-w-[40rem] text-xl sm:text-3xl self-center md:text-4xl"
          id="service"
        >
          One stop solution for all software needs
        </p>
      </div>
      <div className=" py-20 flex flex-col-4 w-full lg:justify-evenly ">
        <div className="grid grid-col-1 w-full lg:flex  justify-center text-gray-600">
          <div className="w-full px-10 lg:flex flex-col ">
            <div className="flex justify-center" data-aos="flip-up">
              <img
                src={Checked}
                className="lg:w-20 md:w-20 w-16"
                alt="algotech"
              />
            </div>
            <p className=" w-[300px] text-center text-xl lg:self-center  md:text-2xl py-10">
              We register your domain
            </p>
          </div>
          <div className="w-full px-10 lg:flex flex-col ">
            <div className="flex justify-center" data-aos="flip-up">
              <img
                src={Checked}
                className="lg:w-20 md:w-20 w-16"
                alt="algotech"
              />
            </div>
            <p className=" w-[300px] text-center text-xl lg:self-center  md:text-2xl py-10 ">
              We host your domain on our servers
            </p>
          </div>
          <div className="w-full px-10 lg:flex flex-col ">
            <div className="flex justify-center" data-aos="flip-up">
              <img
                src={Checked}
                className="lg:w-20 md:w-20 w-16"
                alt="algotech"
              />
            </div>
            <p className=" w-[300px] text-center text-xl md:self-center  md:text-2xl py-10 ">
              We present you with website templates to choose from, we can
              customise your website to create a new unique look and feel
            </p>
          </div>
          <div className="w-full px-10 lg:flex flex-col md:max-w-full self-center md:pt-4">
            <div className="flex justify-center" data-aos="flip-up">
              <img
                src={Steps}
                className="w-26 h-24 md:w-32 md:h-32 hover:scale-125  md:w-30 md:h-30 md:hover:scale-150 duration-300"
                alt="algotech"
              />
            </div>
            <p className=" w-[300px] text-center text-xl md:self-center  md:text-2xl py-10">
              We publish, host and maintain your website and online
              applications, keeping it up to date and secure including regular
              backups, database cloud hosting and regular updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TempResPge