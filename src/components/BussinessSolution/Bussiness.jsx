import React from "react";

export default function BusinessSolution() {
  return (
    <div className="font-poppins px-2 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl">
        <div className="text-start md:text-center mb-16">
          <p className="text-[#00D254] font-poppins font-[500] text-[24px] mb-4">High-quality</p>
          <h2 className="text-start md:text-center font-semibold text-3xl md:text-4xl lg:text-5xl text-[#1D2130] max-w-3xl font-poppins mx-auto leading-tight">
            We have the Best Solution
            <br />
            for your Business
          </h2>
        </div>

        <div className="grid md:grid-cols-3 bg-[#E2EBFC] p-auto py-4 md:p-10 rounded-[12px] gap-8">
          <FeatureCard
            icon={<img src="/BussinessIcons/image2.png" alt="Security" className="w-12 h-12" />}
            title="High security to protect from piracy"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."
          />
          <FeatureCard
            icon={<img src="/BussinessIcons/image1.png" alt="Quality" className="w-12 h-12" />}
            title="Premium quality performance"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."
          />
          <FeatureCard
            icon={<img src="/BussinessIcons/image3.png" alt="Support" className="w-12 h-12" />}
            title="Full time customer support - 24/7"
            description="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy."
          />
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-6 rounded-lg">
      <div className="mb-4">{icon}</div>
      <h3 className="text-[#1D2130] text-[28px] font-[600] mb-4">{title}</h3>
      <p className="text-[#1D2130] font-[400] text-[16px]">{description}</p>
    </div>
  );
}
