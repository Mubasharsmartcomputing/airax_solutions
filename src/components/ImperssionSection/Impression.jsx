import React from "react";

const ImpressionsSection = () => {
  return (
    <div className="relative w-full overflow-hidden py-16 md:py-24">
      {/* Blur Gradient Background */}
      <div 
        className="absolute top-0 left-0 w-full h-full -z-10"
        style={{
          background: "linear-gradient(45deg, #D798E1, #9BFFA5, #AED3FF, #C9D4EF, #CACFFA)",
          filter: "blur(100px)",
          opacity: 0.8,
        }}
      ></div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Left Side - Text Content */}
          <div className="w-full lg:w-5/12 mb-12 lg:mb-0">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1D2130] mb-6">
              More impressions,<br />
              more conversions
            </h2>
            <p className="text-lg text-[#5F5F5F] font-poppins mb-8 max-w-lg">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
              nonumy eirmod tempor invidunt ut labore et dolore magna
              aliquyam erat, sed diam voluptua invidunt ut labore.
            </p>
            <button className="bg-[#00D285] text-white font-medium py-3 px-8 rounded-lg hover:bg-[#00B273] transition-colors">
              Get Free trial
            </button>
          </div>
          
          {/* Right Side - Cards */}
          <div className="w-full lg:w-7/12 relative">
            <div className="relative flex flex-col items-end">
              {/* New Clients Card */}
              <div className="bg-white rounded-xl shadow-md p-4 mb-4 flex items-center justify-between w-full max-w-xs">
                <div className="flex items-center">
                  <div className="bg-[#00D285] w-10 h-10 rounded-full flex items-center justify-center mr-3">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="white"/>
                      <path d="M20 22H4V21C4 17.134 7.13401 14 11 14H13C16.866 14 20 17.134 20 21V22Z" fill="white"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">New Clients</p>
                    <p className="font-bold text-lg">453+</p>
                  </div>
                </div>
                <div>
                  <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 17C8.5 11.5 14 1 22.5 8C31 15 33.5 21.5 39 23" stroke="#00D285" strokeWidth="2"/>
                  </svg>
                </div>
              </div>
              
              {/* Tips Card */}
              <div className="bg-white rounded-xl shadow-md p-6 mb-4 w-full max-w-xs absolute top-24 left-4">
                <p className="text-center font-medium mb-4">Tips to Improve Score</p>
                <div className="relative flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full border-8 border-[#f0f0f0] flex items-center justify-center">
                    <div className="text-center">
                      <p className="font-bold text-2xl">75K</p>
                      <p className="text-sm text-gray-500">Excellent</p>
                    </div>
                  </div>
                  <div className="absolute w-full h-full">
                    <svg viewBox="0 0 120 120" className="w-full h-full">
                      <circle 
                        cx="60" cy="60" r="54" 
                        stroke="#EAEAEA" 
                        strokeWidth="12"
                        fill="none"
                        strokeDasharray="339.29"
                        strokeDashoffset="0"
                        transform="rotate(-90, 60, 60)"
                      />
                      <circle 
                        cx="60" cy="60" r="54" 
                        stroke="#00D285" 
                        strokeWidth="12"
                        fill="none"
                        strokeDasharray="339.29"
                        strokeDashoffset="85"
                        transform="rotate(-90, 60, 60)"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Performance Card */}
              <div className="bg-white rounded-xl shadow-md p-6 w-full max-w-sm">
                <h3 className="text-center font-medium mb-6">Overall Performance</h3>
                <div className="flex justify-center mb-6">
                  <div className="relative w-40 h-40">
                    <div className="w-full h-full rounded-full flex items-center justify-center">
                      <div className="text-center">
                        <svg width="20" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mx-auto mb-1">
                          <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" fill="#00D285"/>
                          <path d="M12 14C7.58172 14 4 17.5817 4 22H20C20 17.5817 16.4183 14 12 14Z" fill="#00D285"/>
                        </svg>
                        <p className="font-bold text-4xl">350</p>
                      </div>
                    </div>
                    <svg viewBox="0 0 120 120" className="absolute top-0 left-0 w-full h-full">
                      <circle 
                        cx="60" cy="60" r="54" 
                        stroke="#EAEAEA" 
                        strokeWidth="12"
                        fill="none"
                      />
                      <path 
                        d="M60 6 A54 54 0 1 1 6 60"
                        stroke="url(#gradient)"
                        strokeWidth="12"
                        fill="none"
                      />
                      <defs>
                        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" stopColor="#00D285" />
                          <stop offset="100%" stopColor="#40c5ed" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </div>
                <div className="flex justify-center items-center space-x-8">
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-gray-200 mr-2"></div>
                    <div>
                      <p className="font-bold">$5.6k</p>
                      <p className="text-xs text-gray-500">New</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 rounded-full bg-[#00D285] mr-2"></div>
                    <div>
                      <p className="font-bold">5.9k</p>
                      <p className="text-xs text-gray-500">Returning</p>
                    </div>
                  </div>
                </div>
                <p className="text-center text-sm mt-6">
                  Get the best out of your customer support
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Company Logos */}
        
      </div>
    </div>
  );
};

export default ImpressionsSection;