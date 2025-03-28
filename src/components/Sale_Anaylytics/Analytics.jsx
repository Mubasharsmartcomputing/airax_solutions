"use client"

import { BiBarChart, BiGroup, BiUser } from "react-icons/bi"
import { useEffect, useState } from "react"

// Main component
function SalesAnalytics() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <div className="mx-auto py-10 pt-auto md:py-10 md:pt-24 items-center justify-center">
      <div className="container mx-auto p-4 md:p-10 bg-[#E2EBFC] max-w-7xl grid md:grid-cols-2 gap-12 items-center">
        {/* Left side content */}
        <div>
          <div className="space-y-6">
            <h1 className="max-w-3xl text-3xl sm:text-4xl font-[600] font-poppins text-start text-gray-900 leading-tight">
              Transform sales into authentic customer relationships.
            </h1>
          </div>

          <div className="space-y-8 mt-8">
            <FeatureItem
              icon={<BiBarChart className="w-6 h-6 text-emerald-500" />}
              title="Sales Tracking"
              description="Monitor your sales in real time, track trends, and find new opportunities to boost revenue."
            />

            <FeatureItem
              icon={<BiGroup className="w-6 h-6 text-emerald-500" />}
              title="Team Performance Tracking"
              description="Monitor individual and team metrics to identify top performers and provide targeted coaching opportunities."
            />

            <FeatureItem
              icon={<BiUser className="w-6 h-6 text-emerald-500" />}
              title="Customer Relationship Management"
              description="Build stronger client connections with comprehensive contact history, interaction tracking, and follow-up reminders."
            />
          </div>
        </div>

        {/* Right side image - now visible on all screen sizes */}
        <div className="mt-auto md:mt-0 mb-8 px-2 md:px-auto">
          <img
            src="/Sales/image.jpg"
            alt="Sales Features"
            className={`w-full h-auto rounded-lg shadow-lg object-cover mx-auto max-w-md md:max-w-full transition-all duration-500 ${
              isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            } hover:scale-[1.02] hover:shadow-xl hover:-translate-y-1`}
          />
        </div>
      </div>
    </div>
  )
}

// Feature item component
function FeatureItem({ icon, title, description }) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-14 h-14 bg-slate-100 rounded-full flex items-center justify-center">{icon}</div>
      <div>
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  )
}

export default SalesAnalytics

