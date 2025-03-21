import { div, section } from "framer-motion/client";
import { useState, useRef, useEffect } from "react"
import { FiChevronLeft, FiChevronRight, FiGrid, FiCircle } from "react-icons/fi"

const categories = [
  {
    title: "HVAC Installations",
    subtitle: "",
    color: "bg-gradient-to-br from-indigo-800 to-indigo-600",
    textColor: "text-white",
    features: ["Furnace installation", "Air conditioner setup", "Heat pump integration", "Ductwork design"],
    recommended: true,
  },
  {
    title: "HVAC Maintenance",
    subtitle: "",
    color: "bg-gradient-to-br from-blue-500 to-blue-400",
    textColor: "text-white",
    features: ["Scheduled inspections", "System tune-ups", "Filter replacements", "Performance optimization"],
  },
  {
    title: "HVAC Repairs",
    subtitle: "",
    color: "bg-gradient-to-br from-emerald-500 to-emerald-400",
    textColor: "text-white",
    features: ["Emergency repairs", "Component replacements", "Leak fixes", "Thermostat repairs"],
  },
  {
    title: "Indoor Air Quality",
    subtitle: "Solutions",
    color: "bg-gradient-to-br from-purple-800 to-purple-600",
    textColor: "text-white",
    features: ["Air purifiers", "Humidifiers", "Dehumidifiers", "Ventilation systems"],
  },
  {
    title: "Duct Cleaning",
    subtitle: "",
    color: "bg-gradient-to-br from-blue-400 to-blue-300",
    textColor: "text-white",
    features: ["Comprehensive duct cleaning", "Mold remediation", "Dust and debris removal", "Airflow improvement"],
  },
  {
    title: "Emergency Services",
    subtitle: "",
    color: "bg-gradient-to-br from-indigo-400 to-indigo-300",
    textColor: "text-white",
    features: ["24/7 availability", "Rapid response", "Critical system repairs", "Safety assessments"],
  },
];


// Utility function to replace shadcn's cn
const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ')
}

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [isMobile, setIsMobile] = useState(false)
  const carouselRef = useRef(null)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const visibleItems = isMobile ? 1 : 3
  const maxIndex = categories.length - visibleItems

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0))
  }

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex))
  }

  return (
    <section className="w-full flex justify-center items-center mx-auto px-4 py-16">
    <div className="max-w-7xl bg-[#E2EBFC] p-2 md:p-6 my-10 md:py-16">
      <div className="text-center mb-10">
        <h2 className="text-4xl md:text-5xl font-medium text-gray-800 mb-4">Your Complete Workplace Solution</h2>
        <p className="text-xl text-gray-600">How will you transform your business with Airax Solutions?</p>
      </div>

      <div className="relative">
        <div ref={carouselRef} className="overflow-hidden">
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / visibleItems)}%)` }}
          >
            {categories.map((category, index) => (
              <div
                key={index}
                className={classNames("flex-shrink-0 w-full md:w-1/3 p-2 transition-all duration-300")}
                style={{
                  opacity: index >= currentIndex && index < currentIndex + visibleItems ? 1 : 0.5,
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div
                  className={classNames(
                    "rounded-xl h-72 flex flex-col justify-between p-8 relative overflow-hidden",
                    category.color,
                    category.textColor,
                    "shadow-lg hover:shadow-xl transition-shadow duration-300",
                    // Add shadow effect similar to the image
                    index >= currentIndex && index < currentIndex + visibleItems ? "shadow-[0_10px_25px_rgba(0,0,0,0.2)]" : ""
                  )}
                >
                  {hoveredIndex === index ? (
                    <div className="flex flex-col h-full">
                      {category.recommended && <div className="text-sm mb-2">Recommended product</div>}
                      <div className="flex items-center gap-2 mb-6">
                        <div className="bg-white/20 p-1 rounded">
                          <FiGrid size={16} />
                        </div>
                        <span className="text-sm font-medium">Airax {category.logo || "solutions"} </span>
                      </div>
                      <div className="flex-1">
                        {category.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center gap-2 mb-2">
                            <FiCircle size={8} className="fill-white text-white" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <button className="bg-white text-indigo-700 hover:bg-white/90 w-32 mt-4 py-1 px-2 rounded-md text-sm">
                        Get Started
                      </button>
                    </div>
                  ) : (
                    <>
                      <div className="text-3xl font-medium">
                        {category.title}
                        {category.subtitle && <div>{category.subtitle}</div>}
                      </div>
                      <div className="flex items-center gap-2">
                        <div className="bg-white/20 p-1 rounded">
                          <FiGrid size={16} />
                        </div>
                        <span className="text-sm font-medium">Airax {category.logo || "solutions"}</span>
                      </div>
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          className={classNames(
            "absolute top-1/2 -translate-y-1/2 left-2 rounded-full z-10 bg-gray-900 text-white p-3",
            "shadow-[0_0_15px_rgba(0,0,0,0.3)]",
            currentIndex === 0 ? "opacity-50 cursor-not-allowed" : "opacity-100 hover:bg-gray-800",
          )}
          onClick={handlePrev}
          disabled={currentIndex === 0}
        >
          <FiChevronLeft className="h-5 w-5" />
        </button>

        <button
          className={classNames(
            "absolute top-1/2 -translate-y-1/2 right-2 rounded-full z-10 bg-gray-900 text-white p-3",
            "shadow-[0_0_15px_rgba(0,0,0,0.3)]",
            currentIndex === maxIndex ? "opacity-50 cursor-not-allowed" : "opacity-100 hover:bg-gray-800",
          )}
          onClick={handleNext}
          disabled={currentIndex === maxIndex}
        >
          <FiChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
    </section>
  )
}