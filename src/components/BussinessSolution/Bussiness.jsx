import React from "react";
import { NavLink } from "react-router";

export default function BusinessSolution() {
  return (
    <div className="font-poppins px-4 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl">
        <div className="px-4">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
            {/* Left Side - Text Content */}
            <div className="w-full lg:w-6/12 text-start">
              <h2 className="max-w-xl text-3xl sm:text-4xl md:text-[44px] font-semibold pb-6 tracking-tight text-gray-900">
                Transform Your Business with Actionable Intelligence
              </h2>
              <p className="text-base sm:text-lg text-[#5F5F5F] mb-6 sm:mb-8 max-w-xl">
                See your business clearly with instant data visualization that turns complex information into obvious next steps. Our customizable dashboards put the metrics that matter most right at your fingertips.
              </p>
              <NavLink to="/contact">
                <button className="bg-gradient-to-r from-[#0eec9e] to-[#40c5ed] hover:scale-105 text-white font-medium py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg transition">
                  Get Free Trial
                </button>
              </NavLink>
            </div>

            {/* Right Side - Video */}
            <div className="w-full lg:w-6/12 relative">
              <div className="w-full aspect-video rounded-xl shadow-lg overflow-hidden">
                <video className="w-full h-full rounded-xl" autoPlay loop muted playsInline>
                  <source src="/vedio/Dashboard_5.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Feature Cards */}
        <div className="grid md:grid-cols-3 bg-[#E2EBFC] p-6 md:p-10 rounded-[12px] gap-8 mt-16">
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
      <h3 className="text-[#1D2130] text-[28px] font-semibold mb-4">{title}</h3>
      <p className="text-[#1D2130] font-normal text-[16px]">{description}</p>
    </div>
  );
}
