export default function FeaturesSection() {
    return (
      <div className="mx-auto py-auto md:py-12 items-center justify-center font-['Poppins'] text-[#5F5F5F]">
        <div className="container mx-auto max-w-7xl  items-center ">
        {/* Features Section */}
        <div className="container  mx-auto py-16 px-2">
          <h2 className="text-[48px] font-[600] font-poppins text-[#1D2130] lg:text-5xl leading-tight text-center mb-16">Features</h2>
  
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#E2EBFC] rounded-xl p-8">
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <img src="/featureImg/icons/image1.png" alt="Encryption Icon" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Advanced 256-bit encryption</h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
              </p>
            </div>
  
            {/* Feature 2 */}
            <div className="bg-[#E2EBFC] rounded-xl p-8">
              <div className="bg-white w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <img src="/featureImg/icons/image2.png" alt="Collaboration Icon" className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-black mb-4">Simple collaboration tools</h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
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
  
              <h3 className="text-xl font-bold text-black mb-4">Customizable AI features</h3>
              <p className="text-sm">
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.
              </p>
            </div>
          </div>
        </div>
  
        {/* ERP Dashboard Section */}
        <div className="bg-[#E2EBFC] py-16 px-4 md:px-6">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">
                STREAMLINE YOUR BUSINESS WITH OUR ERP DASHBOARD DESIGN
              </h2>
              <p className="mb-8">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                scrambled it to make a type specimen book. It has survived not only five centuries.
              </p>
              <button className="bg-emerald-500 text-white px-6 py-3 rounded-md uppercase text-sm font-medium hover:bg-emerald-600 transition-colors">
                See More
              </button>
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
  