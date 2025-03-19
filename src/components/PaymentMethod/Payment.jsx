import { Check } from "lucide-react";

export default function PricingSection() {
  const pricingPlans = [
    {
      name: "Basic",
      price: "$1,950",
      period: "/year",
      description: "Annual Subscription",
      features: ["Data", "Simple Tax", "Fund", "Fund", "Fund", "Investor"],
      highlighted: false,
    },
    {
      name: "Standard",
      price: "$9,950",
      period: "",
      description: "Setup Cost",
      features: [
        "Series of Entity Included",
        "Bank Account",
        "Investor Onboarding",
        "Fund Manager",
        "Regulatory Filings",
        "Simple Tax",
      ],
      highlighted: true,
    },
    {
      name: "Premium",
      price: "$19,500",
      period: "/year",
      description: "Annual Subscription",
      features: [
        "30 Investments Included",
        "18 Month Raising Period",
        "36 Month Investing Period",
        "Annual Financial Statements",
        "Multiple Closes Supported",
      ],
      highlighted: false,
    },
    {
      name: "Gold",
      price: "$49,500",
      period: "/year",
      description: "Annual Subscription",
      features: [
        "Custom Investments",
        "Custom Raising Period",
        "Custom Investment Period",
        "Custom Financial Statements",
        "Custom Financial Statements",
        "Custom Classes",
      ],
      highlighted: false,
    },
  ];

  return (
    <div className="w-full py-12 px-4 md:py-16 font-Poppins">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h1 className="text-start md:text-center font-semibold text-3xl md:text-4xl lg:text-5xl text-[#1D2130] max-w-3xl mx-auto leading-tight">
        Choose your own way to create and bring ideas to life.
        </h1>

        {/* Subtitle */}
        <p className="max-w-3xl mx-auto text-[16px] font-poppins font-[400] text-[#1D2130] lg:text-[16px] leading-[150%] text-start md:text-center mt-4 md:mt-6 mb-8 md:mb-16">
        Find the perfect plan that fits your needs and budget. Whether you're a small team or a growing business, we have flexible options to help you succeed.
        </p>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-xl border ${plan.highlighted ? "bg-emerald-500 text-white" : "bg-white"} p-6 md:p-8 flex flex-col h-full shadow-lg`}
            >
              {/* Plan Name */}
              <h2 className={`text-2xl md:text-3xl font-bold ${plan.highlighted ? "text-white" : "text-black"}`}>{plan.name}</h2>
              <p className={`text-sm ${plan.highlighted ? "text-white/80" : "text-gray-500"}`}>Starting at</p>

              {/* Price */}
              <div className="mt-4 md:mt-6 mb-2">
                <span className={`text-3xl md:text-4xl font-semibold ${plan.highlighted ? "text-white" : "text-emerald-500"}`}>
                  {plan.price}
                </span>
                <span className={`text-sm ${plan.highlighted ? "text-white/80" : "text-gray-500"}`}>{plan.period}</span>
              </div>

              {/* Description */}
              <p className={`text-sm mb-4 md:mb-6 ${plan.highlighted ? "text-white/80" : "text-gray-500"}`}>{plan.description}</p>

              {/* Button */}
              <button
                className={`py-3 px-4 rounded-md font-medium text-center mb-6 md:mb-8 transition-all ${
                  plan.highlighted
                    ? "bg-white text-emerald-500 hover:bg-gray-100"
                    : "bg-emerald-500 text-white hover:bg-emerald-600"
                }`}
              >
                Get Price Estimate
              </button>

              {/* Features */}
              <div className="space-y-3 md:space-y-4 mt-auto">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center">
                    <Check className={`w-5 h-5 mr-2 ${plan.highlighted ? "text-white" : "text-emerald-500"}`} />
                    <span className={`text-sm ${plan.highlighted ? "text-white" : "text-[#1D2130]"}`}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
