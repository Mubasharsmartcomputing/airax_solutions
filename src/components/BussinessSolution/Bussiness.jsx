import React from "react";

export default function BusinessSolution() {
  return (
    <div className="font-poppins px-2 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl">
        <div className="text-start md:text-center mb-16">
          <p className="text-[#00D254] font-poppins font-[500] text-[24px] mb-4">High-quality</p>
          <h2 className="text-start md:text-center font-semibold text-3xl md:text-4xl lg:text-5xl text-[#1D2130] max-w-3xl font-poppins mx-auto leading-tight">
          Get the best tools to streamline 
            <br />
            your business effortlessly
          </h2>
        </div>

        <div className="grid md:grid-cols-3 bg-[#E2EBFC] font-poppins p-auto py-4 md:p-10 rounded-[12px] gap-8">
          <FeatureCard
            icon={<img src="/BussinessIcons/image2.png" alt="Security" className="w-12 h-12" />}
            title="Strong Security"
            description="Your data is always safe, secure, and protected."
          />
          <FeatureCard
            icon={<img src="/BussinessIcons/image1.png" alt="Quality" className="w-12 h-12" />}
            title="Fast & Reliable"
            description="Enjoy smooth, high-quality operations every time."
          />
          <FeatureCard
            icon={<img src="/BussinessIcons/image3.png" alt="Support" className="w-12 h-12" />}
            title="24/7 Support"
            description="We are here to help anytime you need."
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 font-poppins rounded-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-[#1D2130] text-[28px] font-[600] mb-4">{title}</h3>
      <p className="text-[#1D2130] font-[400] text-[16px]">{description}</p>
    </div>
  );
}
