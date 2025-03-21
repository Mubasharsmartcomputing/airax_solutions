

import { useState, useEffect } from "react"

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [visibleCount, setVisibleCount] = useState(1)

  const testimonials = [
    {
      id: 1,
      text: "Real-time insights boosted productivity 37%, halved costs. Best decision for our growing company.",
      name: "Ron Wood",
      title: "CEO",
      image: "/testimonial/image1.png",
    },
    {
      id: 2,
      text: "Marketing transformed: data-driven campaigns improved conversions dramatically within just three short months.",
      name: "Mark Mason",
      title: "Marketing Manager",
      image: "/testimonial/image2.png",
    },
    {
      id: 3,
      text: "Airax streamlined everything. Productivity soared, costs plummeted, and decisions became crystal clear.",
      name: "Sam Preston",
      title: "CTO",
      image: "/testimonial/image3.png",
    },
    {
      id: 4,
      text: "Our efficiency jumped 28%. Administrative burden? Halved! Real-time analytics revolutionized our decision-making.",
      name: "Emily Johnson",
      title: "Product Manager",
      image: "/testimonial/image4.png",
    },
    {
      id: 5,
      text: "Intuitive interface replaced endless spreadsheets. Design team collaborates seamlessly now, improving adaptability.",
      name: "Lisa Chen",
      title: "Design Lead",
      image: "/testimonial/image5.png",
    },
    {
      id: 6,
      text: "Custom modules perfectly match our workflow. Support team responds quickly, making development painless.",
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