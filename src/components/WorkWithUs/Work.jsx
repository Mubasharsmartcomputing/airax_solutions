import { AiOutlineArrowRight } from "react-icons/ai";

export default function BusinessWork() {
  return (
    <section className="max-w-7xl font-poppins text-[#1D2130] mx-auto px-2 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Left Column */}
        <div className="space-y-4">
          <h2 className="text-emerald-500 font-[400] text-[28px]">Why should you work with us?</h2>
          <h3 className="text-4xl text-start font-[600] text-[#1D2130] lg:text-[44px] leading-tight">
          All-in-One ERP for Smarter Business Management
          </h3>
          <p className="text-[16px] font-poppins font-[400] text-[#1D2130] lg:text-[16px] leading-[150%]">
          Manage finances, projects, and teams effortlessly with a single, easy-to-use platform. Automate tasks, gain real-time insights, and keep your team connected with seamless collaboration scaling with your business every step of the way.
          </p>
        </div>

        {/* Right Column */}
       {/* Right Column */}
<div className="space-y-6">
  {[
    "Streamline your workflow with our intuitive dashboard that centralizes all your critical metrics in one place, saving you time and improving team collaboration.",
    "Security is our priority with end-to-end encryption and compliance with international data protection standards to keep your information safe and your customers' trust intact.",
    "Scale effortlessly with our cloud-based solution that grows with your business, eliminating the need for costly infrastructure upgrades or technical overhauls."
  ].map((paragraph, item) => (
    <div key={item} className="flex items-start gap-4">
      <div className="bg-emerald-500 rounded-full p-2 shrink-0">
        <AiOutlineArrowRight className="w-5 h-5 text-white" />
      </div>
      <p className="text-[16px] font-poppins font-[400] text-[#1D2130] lg:text-[16px] leading-[150%]">
        {paragraph}
      </p>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}

