import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const carouselItemsData = [
  {
    buttonText: "Division Status Report",
    title: "Capture live performance data",
    description: [
      "Custom dashboards streamline your data analysis and strategic decision-making process. Generate reports, create summaries, monitor progress, and gain comprehensive visibility across your entire organization at a high level.",
    ],
    linkText: "Get Free Trial",
    linkHref: "/contact",
    imageUrl: "/featureImg/image.png",
  },
  {
    buttonText: "Sales Metrics Dashboard",
    title: "Customize your data visualization",
    description: [
      "Create customized reporting for your company using simple-to-edit dashboards without coding knowledge. Add visual details such as timelines and charts to maximize data presentation and keep tabs in real time on your work and results.",
      
    ],
    linkText: "Get Free Trial",
    linkHref: "/contact",
    imageUrl: "/featureImg/image.png",
  },
  {
    buttonText: "Chronological Record",
    title: "Work smarter through strategic prioritization",
    description: [
      "Our team is composed of passionate professionals with diverse backgrounds in marketing, design, and technology. Each member brings unique skills and perspectives, allowing us to craft comprehensive strategies that cater to our clients' specific needs.",
    ],
    linkText: "Get Free Trial",
    linkHref: "/contact",
    imageUrl: "/featureImg/image.png",
  },
//   {
//     buttonText: "Careers at Airax Solutions",
//     title: "Careers",
//     description: [
//       "We're always looking for great web developers and marketers. To apply, please send your resume and work samples to hello@primemarketingexperts.com and we'll be in touch.",
//     ],
//     linkText: "Learn More",
//     linkHref: "/contact",
//     imageUrl: "/public/featureImg/image.png",
//   },
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
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold md:text-center mb-8 text-[#1D2130]">
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
          <div className="max-w-7xl overflow-hidden bg-[#E2EBFC] p-6">
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-2 flex flex-col justify-center items-start">
                <h3 className="text-3xl font-bold mb-4 text-gray-900">{carouselItemsData[activeIndex].title}</h3>
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
