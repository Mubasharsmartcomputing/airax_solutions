
import { useState } from "react";
import { Link } from "react-router-dom";

function LoginPage() {
  const [formData, setFormData] = useState({
    name: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
  };

  return (
    <div className="relative z-[999] min-h-screen w-full py-6 sm:py-8 md:py-10 my-auto md:my-20 px-2 sm:px-6 flex flex-col lg:flex-row items-center lg:items-start justify-center bg-white">
      {/* Background Gradient Blur */}
      <div
        className="absolute hidden md:block"
        style={{
          width: "524px",
          height: "496px",
          top: "40vh",
          left: "60vw",
          background:
            "linear-gradient(45deg,rgba(215, 1, 225, 0.77),rgba(155, 255, 165, 0.83),rgba(174, 210, 255, 0.97), #C9D4EF, #CACFFA)",
          filter: "blur(100px)",
          transform: "translate(-50%, -50%)",
          zIndex: "2",
        }}
      />

      {/* Mobile Gradient (Simpler) */}
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

      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between w-full relative z-50">
        {/* Left Section - Branding */}
        <div className="w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left px-6 sm:px-12 xl:pl-24 pb-6 lg:pb-0">
          <h1 className="font-[600] font-poppins text-4xl sm:text-5xl xl:text-7xl text-[#444444]">
            Dream
            <br />
            <span className="text-[#00D285]">Destination</span>
          </h1>
          <p className="mt-3 font-poppins sm:mt-4 text-base sm:text-lg xl:text-xl text-[#666666]">
            Best ERP website for your business growth
          </p>
        </div>

        {/* Right Section - Login Form */}
        <div className="w-full lg:w-1/2 flex items-center justify-center px-2 sm:px-6 md:px-10">
          <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white/80 shadow-2xl rounded-3xl px-6 sm:px-8 py-8 sm:py-10 md:py-12">
            <div className="mb-5 sm:mb-7">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-medium text-[#444444]">
                Welcome back
              </h2>
              <p className="mt-1 sm:mt-2 text-[#666666] text-sm sm:text-base">
                Please login into your account below to continue
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 sm:py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00D285]/20 focus:border-[#00D285]"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 sm:py-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#00D285]/20 focus:border-[#00D285]"
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({ ...formData, password: e.target.value })
                  }
                />
              </div>

              <div className="text-right">
                <Link
                  to="/forgot-password"
                  className="text-[#00D285] cursor-pointer hover:text-[#00D285]/80 text-sm"
                >
                  Forgot password?
                </Link>
              </div>

              <div className="pt-2 sm:pt-4">
                <button
                  type="submit"
                  className="w-full py-3 sm:py-4 px-4 cursor-pointer bg-gradient-to-r from-[#0eec9e] to-[#40c5ed] hover:bg-emerald-600 text-white font-medium rounded-[12px] transition-transform hover:scale-105"
                >
                  Log in
                </button>
              </div>

              <p className="text-center text-[#666666] text-sm sm:text-base pt-2">
                Don't have an account? {" "}
                <Link to="/signup" className="text-[#00D285] cursor-pointer hover:text-[#00D285]/80">
                  Signup
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;