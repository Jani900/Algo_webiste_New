import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Logo from '../assets/algo_transparent2png.png'

//Navigation 
import {Link,useMatch,useResolvedPath} from 'react-router-dom';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {

useEffect(() => {
  Aos.init({duration: 2000});
}, []);

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };


  return (
    <div className="flex justify-between items-center h-20 md:h-32 max-w-[1240px] mx-auto px-4 text-white lg:text-xl bg-[#606161]">
      <div className="w-[130px] md:max-w-[200px] lg:w-[200px]">
        <img src={Logo} alt="Algotech logo" />
      </div>

      <ul className="hidden md:flex">
        <CustomLink to="/" className="p-4  hover:text-[#81cdba]">
          Home
        </CustomLink>
        <CustomLink to="/company" className="p-4  hover:text-[#81cdba]">
          Company
        </CustomLink>
        <CustomLink to="/resources" className="p-4  hover:text-[#81cdba]">
          Resources
        </CustomLink>
        <CustomLink to="/contact" className="p-4  hover:text-[#81cdba]">
          Contact
        </CustomLink>
      </ul>

      <button onClick={handleNav} className="block md:hidden">
        {nav ? (
          <AiOutlineClose size={30} color="#81cdba" />
        ) : (
          <AiOutlineMenu size={30} color="#81cdba" />
        )}
      </button>

      <ul
        className={
          nav
            ? "  z-10 absolute left-0 top-0 w-[60%] h-full border-r border-r-gray-600 bg-[#606161] ease-in-out duration-500"
            : "ease-in-out duration-500 absolute left-[-100%]"
        }
      >
        <CustomLink
          to="/"
          className="flex justify-center p-6 border-b  hover:text-[#81cdba]"
         
        >
          Home
        </CustomLink>
        <CustomLink
          to="/company"
          className="flex justify-center p-6 border-b  hover:text-[#81cdba]"
        >
          Company
        </CustomLink>
        <CustomLink
          to="/resources"
          className="flex justify-center p-6 border-b hover:text-[#81cdba]"
        >
          Resources
        </CustomLink>
        <CustomLink
          to="/contact"
          className="flex p-6 justify-center border-b hover:text-[#81cdba]"
        >
          Contact
        </CustomLink>

        <div className=" flex justify-center align-middle pt-28">
          <img className=" w-[130px] " src={Logo} alt="algotech logo" />
        </div>
      </ul>
    </div>
  );



};


const CustomLink = ({to, children,...props}) => {
    const resolvedPath = useResolvedPath(to)
    const isActive     = useMatch({path: resolvedPath.pathname, end:true})
    return (
      <li className={isActive ? "text-[#81cdba]" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    );
}

export default Navbar;
