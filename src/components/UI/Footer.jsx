import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { PiThreadsLogoFill } from "react-icons/pi";
import { NavLink } from "react-router-dom"; // Fixed import from "react-router" to "react-router-dom"

const Footer = () => {
  return (
    <div className="flex flex-col">
       <div
  className="w-full h-[12vh]"
  style={{
    background: "linear-gradient(10deg, rgba(215, 80, 225, 0.7), rgba(155, 255, 165, 0.83), rgba(174, 210, 255, 0.97), #C9D4EF, #CACFFA)",
    filter: "blur(80px)"
  }}
></div>

      {/* Gradient Background
      <div
        className=" top-0 left-0 right-0 bottom-0 w-full h-full
          bg-gradient-to-r from-[#D798E1] via-[#9BFFA5] via-[#AED3FF] via-[#C9D4EF] to-[#CACFFA] blur-[100px]">
      </div> */}
      
      {/* Footer Section */}
      <footer className="bg-[#12141D] py-10 z-10 px-6 sm:px-12 ">
        <div className="max-w-7xl mx-auto">
          {/* Main Content */}
          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
            {/* Left Section (Logo & Newsletter) */}
            <div className="text-white text-center md:text-left w-full md:w-auto max-w-md">
              <div className="flex items-center justify-center md:justify-start">
                <NavLink to="/" className="text-2xl font-bold text-emerald-500 flex items-center">
                  <span className="bg-gradient-to-r from-[#0eec9e] to-[#40c5ed] w-8 h-8 rounded-lg mr-2 flex items-center justify-center text-white">
                    B
                  </span>
                  Bizmate
                </NavLink>
              </div>
              <p className="mt-4 font-poppins text-gray-300">Subscribe to our Newsletter</p>
              <div className="mt-3 flex w-full max-w-sm mx-auto md:mx-0">
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="px-4 py-2 font-poppins rounded-l-lg bg-[#1E2029] text-white border border-[#3A3D4A] focus:outline-none w-full"
                />
                <button className="bg-[#00D285] px-5 py-2 font-poppins rounded-r-lg bg-gradient-to-r from-[#0eec9e] to-[#40c5ed] hover:bg-emerald-600 text-white font-medium transition-transform hover:scale-105 whitespace-nowrap">
                  Subscribe
                </button>
              </div>
            </div>
            
            {/* Right Section (Social Media Icons) */}
            <div className="flex space-x-6 mt-6 md:mt-24">
              <a href="#" className="text-white text-2xl hover:text-[#00D285] transition-colors"><FaFacebook /></a>
              <a href="#" className="text-white text-2xl hover:text-[#00D285] transition-colors"><PiThreadsLogoFill /></a>
              <a href="#" className="text-white text-2xl hover:text-[#00D285] transition-colors"><FaInstagram /></a>
              <a href="#" className="text-white text-2xl hover:text-[#00D285] transition-colors"><FaLinkedin /></a>
            </div>
          </div>
          
          {/* Divider Lines */}
          <div className="mt-16 flex justify-center">
            <div className="w-full  mx-auto grid grid-cols-2 gap-8">
              <div className="border-b m-2xl border-gray-600"></div>
              <div className="border-b border-gray-600"></div>
            </div>
          </div>
          
          {/* Copyright Section (optional) */}
          <div className="mt-6 text-center text-gray-400 text-sm">
            <p>© {new Date().getFullYear()} Bizmate. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;