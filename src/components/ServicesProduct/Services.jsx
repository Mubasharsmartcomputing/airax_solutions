import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const carouselItemsData = [
  {
    buttonText: "Human Resource Management",
    title: "Attract Top Talent and Drive Employee Success",
    description: [
      "Modern ERP revolutionizes workforce management by automating attendance tracking, payroll, and leave requests, eliminating manual errors. It streamlines recruitment, turning job postings into structured campaigns and ensuring smooth onboarding for new hires. This seamless integration enhances efficiency, compliance, and employee satisfaction, transforming HR into a strategic advantage.",
    ],
    linkText: "Get Free Trial",
    linkHref: "/contact",
    imageUrl: "/featureImg/image1.png",
  },
  {
    buttonText: "Supply Chain Management",
    title: "Inventory & Warehouse Management",
    description: [
      "ERP tracks inventory levels, stock movements, and warehouse conditions in real-time. It prevents overstocking, reduces waste, and ensures products are available when needed. Better inventory control minimizes financial losses and boosts efficiency.",
      
    ],
    linkText: "Get Free Trial",
    linkHref: "/contact",
    imageUrl: "/featureImg/image2.png",
  },
  {
    buttonText: "Customer Relationship Management",
    title: "Work smarter through strategic prioritization",
    description: [
      "ERP provides a visual representation of ongoing sales deals and revenue forecasts. Sales teams can monitor opportunities, set targets, and improve closing rates. Pipeline tracking helps businesses stay ahead in competitive markets.",
    ],
    linkText: "Get Free Trial",
    linkHref: "/contact",
    imageUrl: "/featureImg/image3.png",
  },
  {
     buttonText: "Production Planning",
     title: "Production Scheduling & Work Order Management",
    description: [
      "This feature assigns production tasks based on demand and resource availability. It helps manufacturers reduce bottlenecks, optimize workflow, and meet deadlines. Efficient scheduling enhances production capacity and cost-effectiveness.",
    ],
     linkText: "Learn More",
     linkHref: "/contact",
     imageUrl: "/public/featureImg/image4.png",
   },
  {
     buttonText: "Business Intelligence",
     title: "Custom Analysis & Performance Tracking",
    description: [
      "Custom reports allow teams to dig deeper into specific areas, revealing patterns that might otherwise remain hidden. Comprehensive KPI tracking ensures everyone stays focused on the metrics that truly matter to your business success.",
    ],
     linkText: "Learn More",
     linkHref: "/contact",
     imageUrl: "/public/featureImg/image5.png",
   },
];

export default function ProductServices() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? carouselItemsData.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === carouselItemsData.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="w-full  px-2 md:pt-10 font-Poppins text-[#1D2130] mx-auto">
      <div className="max-w-7xl justify-center items-center mx-auto">
        <h2 className="text-3xl sm:text-4xl px-2 lg:text-5xl font-bold md:text-center mb-8 text-[#1D2130]">
        Features
        </h2>
        <div className="hidden md:flex items-center justify-center mb-8 flex-wrap">
          {carouselItemsData.map((item, index) => (
            <button
              key={index}
              className={`m-2 px-4 py-2 border rounded transition-all duration-300 bg-white border-gray-300 ${
                activeIndex === index ? "bg-gradient-to-r from-[#0eec9e] to-[#40c5ed] text-white" : ""
              }`}
              onClick={() => setActiveIndex(index)}
            >
              {item.buttonText}
            </button>
          ))}
        </div>
        <div className="relative flex justify-center flex-col items-center">
          <div className="max-w-7xl overflow-hidden p-2 md:p-2">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-2 flex flex-col justify-center items-start">
                <h3 className="text-3xl sm:text-4xl md:text-5xl font-[600] pb-6 font-poppins tracking-tight text-gray-900">{carouselItemsData[activeIndex].title}</h3>
                {carouselItemsData[activeIndex].description.map((paragraph, idx) => (
                  <p key={idx} className="text-[16px] max-w-xl text-[#5F5F5F] font-poppins mb-4">
                    {paragraph}
                  </p>
                ))}
                <a
                  href={carouselItemsData[activeIndex].linkHref}
                  className="mt-4 px-4 py-2 bg-gradient-to-r from-[#0eec9e] to-[#40c5ed] hover:bg-emerald-600 text-white font-medium rounded-[12px] transition-transform hover:scale-105 inline-block"
                >
                  {carouselItemsData[activeIndex].linkText}
                </a>
              </div>
              <div className="lg:w-1/2">
  <img
    src={carouselItemsData[activeIndex].imageUrl}
    alt={carouselItemsData[activeIndex].title}
    className="w-full h-full object-cover rounded-lg"
  />
</div>
            </div>
          </div>
          <div className="flex justify-center mt-6">
            <button className="mx-2 p-2 bg-white border rounded" onClick={handlePrev}>
              <ChevronLeft size={24} />
            </button>
            <button className="mx-2 p-2 bg-white border rounded" onClick={handleNext}>
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
