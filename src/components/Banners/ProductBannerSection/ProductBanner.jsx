
export default function ProductHeroSection() {
    return (
      <div className="w-full relative bg-white flex flex-col items-center justify-center py-2 md:py-10 lg:py-2">
        {/* Gradient background with responsive positioning */}
        <div
          className="absolute hidden md:block"
          style={{
            width: "524px",
            height: "496px",
            top: "45vh",
            left: "47vw",
            background:
              "linear-gradient(45deg,rgba(215, 12, 225, 0.77),rgba(155, 255, 165, 0.83),rgba(174, 210, 255, 0.97), #C9D4EF, #CACFFA)",
            filter: "blur(100px)",
            transform: "translate(-50%, -50%)",
            zIndex: "0",
          }}
        />
  
        {/* Mobile gradient (simpler version) */}
        <div
         className="absolute md:hidden"
         style={{
           width: "80vw",
           height: "40vh",
           top: "30vh",
           left: "50%",
           background:
             "linear-gradient(45deg,rgba(215, 12, 225, 0.77),rgba(155, 255, 165, 0.83),rgba(174, 210, 255, 0.97), #C9D4EF, #CACFFA)",
           filter: "blur(80px)",
           transform: "translate(-50%, -50%)",
           zIndex: "0",
         }}
        />
  
        {/* Content container */}
        <div className="relative z-10 min-h-[40vh] md:min-h-[50vh] px-4 text-start md:text-center flex flex-col items-center justify-center">
          <h1 className="max-w-3xl text-3xl sm:text-4xl md:text-5xl lg:text-[56px] font-[600] font-poppins tracking-tight text-gray-900">
          The Right Solution, Made Just for You
          </h1>
  
          <p className="max-w-2xl mt-4 md:mt-6 font-poppins md:text-lg text-gray-600">
          Find simple and powerful solutions to make your work easier. Automate tasks, stay organized, and keep your team connected effortlessly.
          </p>
  
          {/* Email form - made responsive */}
          <div className="flex flex-col sm:flex-row w-full max-w-md mt-6 md:mt-10 relative">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="w-full px-4 sm:px-6 py-3 sm:py-4 text-gray-900 placeholder-gray-500 bg-white border border-gray-300  focus:outline-none focus:ring-2 focus:ring-[#9BFFA5] focus:border-transparent"
            />
            <button className="bg-gradient-to-r from-[#0eec9e] to-[#40c5ed] hover:bg-emerald-600 text-white font-medium px-6 sm:px-8 py-2 sm:py-3 rounded-[12px] mt-3 sm:mt-0 sm:absolute sm:right-1 sm:top-1/2 sm:-translate-y-1/2">
              Get Free Trial
            </button>
          </div>
        </div>
  
        {/* Image Section with Flex */}
        <div className="flex justify-center z-10 items-center w-full px-2 sm:px-2 md:px-2 max-w-6xl mt-6 md:mt-auto">
          <img src="/header.png" alt="Header Illustration" className="w-full h-auto" />
        </div>
      </div>
    )
  }
  
  