"use client"

import { useState, useEffect } from "react"

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(1)

  const testimonials = [
    {
      id: 1,
      text: "Implementing this ERP solution transformed our operations virtually overnight. We've seen a 37% increase in productivity and cut administrative overhead by nearly half. The analytics dashboards provide the real-time insights I need to make confident business decisions. Worth every penny!",
      name: "Ron Wood",
      title: "CEO",
      image: "/testimonial/image1.png",
    },
    {
      id: 2,
      text: "As a marketing professional, I need data that tells a story about our customers. This ERP platform delivers exactly that. We've optimized our campaigns based on integrated customer insights and increased our conversion rates by 42% in just three months. The ROI speaks for itself.",
      name: "Mark Mason",
      title: "Marketing Manager",
      image: "/testimonial/image2.png",
    },
    {
      id: 3,
      text: "From a technical perspective, this is the most seamless ERP integration I've overseen in my 15-year career. The system architecture is robust yet flexible, and the API connectivity with our legacy systems was surprisingly straightforward. Our development team has become significantly more efficient.",
      name: "Sam Preston",
      title: "CTO",
      image: "/testimonial/image3.png",
    },
    {
      id: 4,
      text: "The inventory management module has revolutionized our product development cycle. We now have complete visibility from concept to delivery, reducing our time-to-market by 28%. The customizable workflows adapt perfectly to our unique production processes.",
      name: "Emily Johnson",
      title: "Product Manager",
      image: "/testimonial/image4.png",
    },
    {
      id: 5,
      text: "The user experience of this ERP platform stands miles above competitors. My team appreciates the intuitive interface and visual reporting features. We've eliminated countless spreadsheets and now collaborate in real-time, making our design process much more responsive to business needs.",
      name: "Lisa Chen",
      title: "Design Lead",
      image: "/testimonial/image5.png",
    },
    {
      id: 6,
      text: "The extensibility of this system is remarkable. We've been able to build custom modules that perfectly align with our unique business processes. The development environment is well-documented, and the support team has been responsive whenever we've needed guidance. It's a developer's dream.",
      name: "Michael Davis",
      title: "Senior Developer",
      image: "/testimonial/image6.png",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3)
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2)
      } else {
        setVisibleCount(1)
      }
    }

    updateVisibleCount()
    window.addEventListener("resize", updateVisibleCount)
    return () => window.removeEventListener("resize", updateVisibleCount)
  }, [])

  const handleDotClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <div className="w-full py-16 px-4 font-Poppins">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-start md:text-center font-semibold text-3xl md:text-4xl lg:text-5xl text-[#1D2130] max-w-3xl font-poppins mx-auto leading-tight mb-12">
          The stunning results our customers have experienced
        </h2>

        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${(activeIndex % testimonials.length) * (100 / visibleCount)}%)` }}
          >
            {testimonials.concat(testimonials[0]).map((testimonial, index) => (
              <div key={index} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
                <div className="border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col items-center h-full">
                  <p className="text-center text-[16px] text-[#5F5F5F] font-poppins mb-6">{testimonial.text}</p>
                  <div className="w-16 h-16 rounded-full overflow-hidden mb-3">
                    <img src={testimonial.image} alt={testimonial.name} className="w-full h-full object-cover" />
                  </div>
                  <h3 className="font-bold text-lg">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex % testimonials.length === index ? "bg-teal-500 scale-125" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}