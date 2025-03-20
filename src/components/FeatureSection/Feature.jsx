import { NavLink } from "react-router";

export default function FeaturesSection() {
  return (
    <div className="mx-4 py-auto md:py-12 items-center justify-center font-['Poppins'] text-[#5F5F5F]">
      <div className="container mx-auto max-w-7xl items-center">
        {/* Features Section */}
        <div className="container text-start md:text-center mx-auto py-16 px-2">
          <h2 className="text-3xl sm:text-4xl font-[600] font-poppins text-[#1D2130] lg:text-5xl text-start md:text-center leading-tight mb-16">Features</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#E2EBFC] rounded-xl p-8">
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <img src="/featureImg/icons/image1.png" alt="Encryption Icon" className="w-8 h-8" />
              </div>
              <h3 className="text-[24px] font-bold text-black mb-4">Advanced 256-bit encryption</h3>
              <p className="text-[16px] text-[#5F5F5F] font-poppins">
                Protect your sensitive business data with military-grade encryption that safeguards against unauthorized access. Your financial records and customer information remain confidential and compliant with global security standards.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#E2EBFC] rounded-xl p-8">
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <img src="/featureImg/icons/image2.png" alt="Collaboration Icon" className="w-8 h-8" />
              </div>
              <h3 className="text-[24px] font-bold text-black mb-4">Simple collaboration tools</h3>
              <p className="text-[16px] text-[#5F5F5F] font-poppins">
                Connect your entire team with intuitive tools that make working together effortless. Share reports, assign tasks, and track progress in real-time, breaking down departmental silos and boosting productivity across your organization.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#E2EBFC] rounded-xl p-8 relative">
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <img src="/featureImg/icons/image3.png" alt="AI Features Icon" className="w-8 h-8" />
              </div>

              {/* Earnings Badge */}
              <div className="absolute top-6 right-6">
                <div className="bg-white shadow-md rounded-md">
                  <div className="p-2 flex items-center space-x-2">
                    <div className="bg-emerald-500 rounded-full w-6 h-6 flex items-center justify-center">
                      <img src="/featureImg/icons/image4.png" alt="Earnings Icon" className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs font-medium">Earning</p>
                      <p className="text-sm font-bold text-black">$483.45</p>
                    </div>
                  </div>
                </div>
              </div>

              <h3 className="text-[24px] font-bold text-black mb-4">Customizable AI features</h3>
              <p className="text-[16px] text-[#5F5F5F] font-poppins">
                Harness the power of AI to forecast sales trends, optimize inventory levels, and automate routine tasks. Our adaptive intelligence learns your business patterns and delivers actionable insights that drive growth and efficiency.
              </p>
            </div>
          </div>
        </div>

        {/* ERP Dashboard Section */}
        <div className="bg-[#E2EBFC] py-16 px-4 md:px-6">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="max-w-3xl text-3xl sm:text-4xl md:text-[36px] lg:text-[44px] font-[600] pb-6 font-poppins tracking-tight text-[#1D2130] mb-6">
              Monitor achievements and propel outcomes through visual dashboards
              </h2>
              <p className="mb-8 text-[16px] text-[#5F5F5F] font-poppins">
                Transform how you manage your business with our intuitive ERP dashboard that brings all your critical data into one clear view. Built with real businesses in mind, our solution eliminates the complexity of traditional enterprise systems while delivering powerful insights at your fingertips. From inventory management to financial reporting, every aspect of your operation becomes more efficient, allowing you to make faster, data-driven decisions that propel your business forward.
              </p>
              <NavLink to="/contact"> 
              <button className="px-6 py-3 bg-gradient-to-r from-[#0eec9e] to-[#40c5ed] hover:bg-emerald-600 text-white font-medium rounded-[12px] transition-transform hover:scale-105">
                See More
              </button>
              </NavLink>
            </div>

            <div className="flex justify-center">
              <img
                src="/featureImg/image.png"
                alt="ERP Dashboard"
                className="rounded-lg shadow-xl max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}