"use client"

import { useState, useEffect } from "react"

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(1)

  const testimonials = [
    {
      id: 1,
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      name: "Ron Wood",
      title: "CEO",
      image: "/testimonial/image1.png",
    },
    {
      id: 2,
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      name: "Mark Mason",
      title: "Marketing Manager",
      image: "/testimonial/image2.png",
    },
    {
      id: 3,
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      name: "Sam Preston",
      title: "CTO",
      image: "/testimonial/image3.png",
    },
    {
      id: 4,
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      name: "Emily Johnson",
      title: "Product Manager",
      image: "/testimonial/image4.png",
    },
    {
      id: 5,
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      name: "Lisa Chen",
      title: "Design Lead",
      image: "/testimonial/image5.png",
    },
    {
      id: 6,
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.",
      name: "Michael Davis",
      title: "Senior Developer",
      image: "/testimonial/image6.png",
    },
  ]

  // Auto-rotate carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  // Adjust visible testimonials based on screen width
  useEffect(() => {
    const updateVisibleCount = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCount(3) // Show 3 testimonials on large screens
      } else if (window.innerWidth >= 768) {
        setVisibleCount(2) // Show 2 on tablets
      } else {
        setVisibleCount(1) // Show 1 on mobile
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
    <div className="w-full py-16 px-4 font-['Poppins']">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center font-semibold text-3xl md:text-4xl lg:text-5xl text-[#1D2130] max-w-3xl font-poppins mx-auto leading-tight mb-12">
          The stunning results our customers have experienced
        </h2>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${activeIndex * (100 / visibleCount)}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
                <div className="border border-gray-200 rounded-2xl p-6 md:p-8 flex flex-col items-center h-full">
                  <p className="text-center text-gray-600 mb-6">{testimonial.text}</p>
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

        {/* Pagination Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeIndex === index ? "bg-teal-500 scale-125" : "bg-gray-300"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
