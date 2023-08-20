import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 bg-[#606161]">
      <div>
        <h1 className="w-full text-3xl font-bold text-[#81cdba]">Algotech</h1>
        <p className="py-4">
          "Cultivating Excellence in Software: Swift Delivery, Enduring Support,
          Competitive Prices. Reach out to Shape Your Digital Vision Today!"
        </p>
        <div className="flex md:justify-between md:w-[75%] my-6">
          <a
            href="https://www.facebook.com/profile.php?id=100095682576669"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2"
          >
            <FaFacebookSquare size={30} />
          </a>
          <a
            href="https://www.instagram.com/algotechlimited/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2"
          >
            <FaInstagram size={30} />
          </a>
          <a
            href="https://github.com/Jani900"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2"
          >
            <FaGithubSquare size={30} />
          </a>
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-between mt-6">
        <div>
          <h6 className="font-medium text-gray-400">Solutions</h6>
          <ul>
            <Link to={"/"} href="#analytics">
              <li className="py-2 text-sm" target="/" rel="noopener noreferrer">
                Analytics
              </li>
            </Link>
            <Link to={"/"} href="#crm">
              <li className="py-2 text-sm" target="/" rel="noopener noreferrer">
                CRM
              </li>
            </Link>
            <Link to={"/"} href="#gps">
              <li className="py-2 text-sm" target="/" rel="noopener noreferrer">
                GPS Monitoring
              </li>
            </Link>
            <Link to={"/"} href="#software">
              <li className="py-2 text-sm" target="/" rel="noopener noreferrer">
                Software
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Support</h6>
          <ul>
            <Link to={"/"} href="#price">
              <li className="py-2 text-sm">Pricing</li>
            </Link>
            <Link to={"/resources"}>
              <li className="py-2 text-sm">Resources</li>
            </Link>
            <Link to={"/resources"}>
              <li className="py-2 text-sm">Service</li>
            </Link>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Company</h6>
          <ul>
            <Link to={"/contact"} href="#name">
              <li className="py-2 text-sm">Jobs</li>
            </Link>
            <Link to={"/contact"} href="#name">
              <li className="py-2 text-sm">Careers</li>
            </Link>
          </ul>
        </div>
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <Link to={"/contact"} href="#name">
              <li className="py-2 text-sm">Claim</li>
            </Link>
            <Link to={"/privacy"}>
              <li className="py-2 text-sm">Privacy Policy</li>
            </Link>
            <Link to={"/contact"} href="#name">
              <li className="py-2 text-sm">Terms</li>
            </Link>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
