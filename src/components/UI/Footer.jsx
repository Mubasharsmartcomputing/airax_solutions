import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaLinkedin, FaHome, FaInfoCircle, FaTools, FaPhone } from "react-icons/fa";
import { PiThreadsLogoFill } from "react-icons/pi";
import { MdProductionQuantityLimits } from "react-icons/md";

const Footer = () => {
  const navigationItems = [
    { name: 'Home', href: '/', icon: <FaHome /> },
    { name: 'About', href: '/about', icon: <FaInfoCircle /> },
    { name: 'Product', href: '/product', icon: <MdProductionQuantityLimits /> },
    { name: 'Contact', href: '/contact', icon: <FaPhone /> },
  ];

  return (
    <div className="flex flex-col">
      {/* Gradient blur background */}
      <div
        className="w-full h-[12vh]"
        style={{
          background: "linear-gradient(10deg, rgba(215, 80, 225, 0.7), rgba(155, 255, 165, 0.83), rgba(174, 210, 255, 0.97), #C9D4EF, #CACFFA)",
          filter: "blur(80px)",
        }}
      ></div>
      
      {/* Footer Section */}
      <footer className="bg-[#12141D] py-10 z-20 px-6 sm:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="flex flex-col md:flex-row justify-between gap-8">
            {/* Left Section (Logo & Description) */}
            <div className="text-white text-start md:text-left w-full md:w-1/3 max-w-md">
              <div className="flex items-center justify-start md:justify-start">
                <Link to="/" className="text-2xl font-bold text-emerald-500 flex items-center">
                  <span className="bg-gradient-to-r from-[#0eec9e] to-[#40c5ed] w-8 h-8 rounded-lg mr-2 flex items-center justify-center text-white">
                    B
                  </span>
                  Bizmate
                </Link>
              </div>
              <p className="mt-4 font-poppins text-gray-300">
              Bizmate is a powerful ERP solution that simplifies business operations, connects workflows, and provides real-time insights to support growth and efficiency.
              </p>
              
              {/* Newsletter Subscription */}
              <p className="mt-6 font-poppins text-gray-300">Subscribe to our Newsletter</p>
              <div className="mt-3 flex w-full max-w-sm mx-auto md:mx-0">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="px-4 py-2 font-poppins rounded-l-lg bg-[#1E2029] text-white border border-[#3A3D4A] focus:outline-none w-full"
                />
                <button className="px-5 py-2 font-poppins rounded-r-lg bg-gradient-to-r from-[#0eec9e] to-[#40c5ed] hover:bg-emerald-600 text-white font-medium transition-transform hover:scale-105 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
            
            {/* Middle Section (Navigation) */}
            <div className="flex flex-col gap-4 text-white">
              <h1 className="font-bold text-lg md:text-xl text-center md:text-left">Resources</h1>
              <ul className="mt-2 text-gray-300 flex flex-col gap-3">
                {navigationItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      to={item.href}
                      className="flex items-center gap-2 hover:text-[#0eec9e] transition-colors"
                    >
                      <span className="text-[#0eec9e]">{item.icon}</span>
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Right Section (Contact & Social Media) */}
            <div className="flex flex-col gap-4 text-white text-start md:text-left">
              <h1 className="font-bold text-lg md:text-xl">Contact</h1>
              <div className="text-gray-300 text-sm md:text-base">
                <p className="mb-2">
                  <span className="font-bold">Address:</span> 334 Business Avenue, Tech Park, Suite 102
                </p>
                <p className="mb-2">
                  <span className="font-bold">Email:</span> info@marcc.com.au
                </p>
                <p className="mb-2">
                  <span className="font-bold">Phone:</span> 03 5432 1234
                </p>
              </div>
              
              {/* Social Media Icons */}
              <div className="flex space-x-6 justify-center md:justify-start mt-2">
                <a href="#" className="text-white text-2xl hover:text-[#0eec9e] transition-colors">
                  <FaFacebook />
                </a>
                <a href="#" className="text-white text-2xl hover:text-[#0eec9e] transition-colors">
                  <PiThreadsLogoFill />
                </a>
                <a href="#" className="text-white text-2xl hover:text-[#0eec9e] transition-colors">
                  <FaInstagram />
                </a>
                <a href="#" className="text-white text-2xl hover:text-[#0eec9e] transition-colors">
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </div>
          
          {/* Divider Lines */}
          <div className="mt-16 flex justify-center">
            <div className="w-full mx-auto grid grid-cols-2 gap-8">
              <div className="border-b border-gray-600"></div>
              <div className="border-b border-gray-600"></div>
            </div>
          </div>
          
          {/* Copyright Section */}
          <div className="mt-6 text-center text-gray-400 text-sm flex flex-col md:flex-row justify-between">
            <p>Terms of use | Privacy Policy</p>
            <p>© {new Date().getFullYear()} Bizmate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;