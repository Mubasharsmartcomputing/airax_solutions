import { motion } from "framer-motion";

const ImpressionsSection = () => {
  return (
    <section className="font-poppins w-full flex flex-col items-center justify-center">
      <div className="relative overflow-hidden max-w-7xl w-full px-4 sm:px-6 py-12 sm:py-16 my-8 sm:my-12 md:px-8 lg:px-12">
        {/* Blur Gradient Background */}
        <div
          className="absolute top-0 left-0 w-full h-full -z-10"
          style={{
            background: "linear-gradient(70deg, #9BFFA5, #AED3FF, #C9D4EF, #CACFFA)",
            filter: "blur(100px)",
            opacity: 0.8,
          }}
        ></div>

        {/* Content Container */}
        <div className=" px-0 sm:px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between">
            {/* Left Side - Text Content */}
            <div className="w-full lg:w-5/12 mb-12 lg:mb-0">
              <h2 className="max-w-3xl text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-[600] pb-6 font-poppins tracking-tight text-gray-900">
                More impressions,
                <br className="hidden sm:block" />
                more conversions
              </h2>
              <p className="text-base sm:text-lg text-[#5F5F5F] font-poppins mb-6 sm:mb-8 max-w-lg">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.
              </p>
              <button className="bg-[#00D285] text-white font-medium py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg hover:bg-[#00B273] transition-colors">
                Get Free trial
              </button>
            </div>

            {/* Right Side - Cards */}
            <div className="w-full lg:w-7/12 relative">
              <div className="relative flex flex-col items-center lg:items-end">
                {/* New Clients Card */}
                <div className="bg-white mr-0 sm:mr-16 md:mr-28 rounded-xl shadow-md p-4 mb-4 flex items-center justify-between w-full max-w-xs z-10">
                  <div className="flex items-center">
                    <div className="bg-[#00D285] w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center mr-2 sm:mr-3">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                          fill="white"
                        />
                        <path d="M20 22H4V21C4 17.134 7.13401 14 11 14H13C16.866 14 20 17.134 20 21V22Z" fill="white" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs sm:text-sm text-[#5F5F5F]">New Clients</p>
                      <p className="font-bold text-base sm:text-lg">453+</p>
                    </div>
                  </div>
                  <div>
                    <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M1 17C8.5 11.5 14 1 22.5 8C31 15 33.5 21.5 39 23" stroke="#00D285" strokeWidth="2" />
                    </svg>
                  </div>
                </div>

                {/* Tips Card */}
                <div
                  className="bg-white font-poppins rounded-xl shadow-md p-4 sm:p-6 mb-4 w-full sm:w-60 max-w-xs 
                             relative sm:absolute sm:top-20 md:top-50 sm:left-4 lg:left-28 z-auto md:z-30 mx-auto sm:mx-0"
                >
                  <p className="text-center font-[600] font-poppins mb-2 sm:mb-4 text-sm sm:text-base">Tips to Improve Score</p>
                  <div className="relative flex items-center justify-center">
                    <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-6 sm:border-8 border-[#f0f0f0] flex items-center justify-center">
                      <div className="text-center">
                        <p className="font-bold text-xl sm:text-2xl">75K</p>
                        <p className="text-xs sm:text-sm #5F5F5F">Excellent</p>
                      </div>
                    </div>
                    <div className="absolute w-full h-full">
                      <svg viewBox="0 0 120 120" className="w-full h-full">
                        <circle
                          cx="60"
                          cy="60"
                          r="54"
                          stroke="#EAEAEA"
                          strokeWidth="12"
                          fill="none"
                          strokeDasharray="339.29"
                          strokeDashoffset="0"
                          transform="rotate(-90, 60, 60)"
                        />
                        <circle
                          cx="60"
                          cy="60"
                          r="54"
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
                <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 w-full sm:w-90 h-auto sm:h-[45vh] max-w-sm mt-4 sm:mt-20 md:mt-6 z-20">
                  <h3 className="text-center font-[600] font-poppins mb-4 sm:mb-6 text-sm sm:text-base">Overall Performance</h3>
                  <div className="flex justify-center mb-4 sm:mb-6">
                    <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40">
                      <div className="w-full h-full rounded-full flex items-center justify-center">
                        <div className="text-center">
                          <svg
                            width="16"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="mx-auto mb-1"
                          >
                            <path
                              d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
                              fill="#00D285"
                            />
                            <path d="M12 14C7.58172 14 4 17.5817 4 22H20C20 17.5817 16.4183 14 12 14Z" fill="#00D285" />
                          </svg>
                          <p className="font-bold text-xl sm:text-2xl md:text-4xl">350</p>
                        </div>
                      </div>
                      <svg viewBox="0 0 120 120" className="absolute top-0 left-0 w-full h-full">
                        <circle cx="60" cy="60" r="54" stroke="#EAEAEA" strokeWidth="12" fill="none" />
                        <path d="M60 6 A54 54 0 1 1 6 60" stroke="url(#gradient)" strokeWidth="12" fill="none" />
                        <defs>
                          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#00D285" />
                            <stop offset="100%" stopColor="#40c5ed" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                  <div className="flex justify-center items-center space-x-4 sm:space-x-8">
                    <div className="flex items-center">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gray-200 mr-1 sm:mr-2"></div>
                      <div>
                        <p className="font-bold text-sm sm:text-base">$5.6k</p>
                        <p className="text-xxs sm:text-xs text-gray-500">New</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-[#00D285] mr-1 sm:mr-2"></div>
                      <div>
                        <p className="font-bold text-sm sm:text-base">5.9k</p>
                        <p className="text-xxs sm:text-xs text-gray-500">Returning</p>
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-xs sm:text-sm mt-4 sm:mt-6">
                    Get the best out of your customer support
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl flex justify-around overflow-hidden items-center w-full h-20">
        
      <marquee behavior="scroll" direction="left" scrollamount="10">
    <div className="flex space-x-10">
      <img src="/CompanyLogo/image1.png" alt="Logo 1" className="w-[158px] h-[32px]" />
      <img src="/CompanyLogo/image2.png" alt="Logo 2" className="w-[158px] h-[32px]" />
      <img src="/CompanyLogo/image3.png" alt="Logo 3" className="w-[158px] h-[32px]" />
      <img src="/CompanyLogo/image4.png" alt="Logo 4" className="w-[158px] h-[32px]" />
      <img src="/CompanyLogo/image5.png" alt="Logo 5" className="w-[158px] h-[32px]" />
      <img src="/CompanyLogo/image6.png" alt="Logo 6" className="w-[158px] h-[32px]" />
    </div>
  </marquee>
        </div>
        

     
    </section>
  )
}

export default ImpressionsSection

