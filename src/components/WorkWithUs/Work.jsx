import { FaCheck } from "react-icons/fa"
import { BsBuildings } from "react-icons/bs"
import { MdPayments, MdNotifications, MdLocationOn } from "react-icons/md"
import { IoCloudDone } from "react-icons/io5"
import { AiOutlineMobile } from "react-icons/ai"
import { RiFlowChart, RiUserSettingsLine } from "react-icons/ri"
import { BiCustomize } from "react-icons/bi"
import { VscGraph } from "react-icons/vsc"
import { HiOutlineSpeakerphone } from "react-icons/hi"

export default function BusinessWork() {
  return (
    <div className="relative bg-white py-16 px-2 sm:px-6 lg:px-4 overflow-hidden font-poppins">
      {/* Background pattern */}
     

      <div className="relative p-2 md:p-4 z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left column - Content */}
          <div className="space-y-8">
            <div>
              <div className="h-1 w-24 bg-emerald-500 mb-6"></div>
              <h2 className="max-w-3xl text-3xl sm:text-4xl text-start font-[600] text-[#1D2130] lg:text-[44px] leading-tight mb-6">
                <span className="text-emerald-500">Why Choose </span>
                <span>Airax</span>
              </h2>
              <p className="text-[16px] font-poppins font-[400] text-[#1D2130] lg:text-[16px] leading-[150%] mb-8">
              Airax reimagines enterprise planning around actual human workflows, not rigid systems blending employee management, finances, and performance tracking into an interface that feels surprisingly natural.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Left features */}
              <div className="space-y-4">
                <FeatureItem text="Industry-Leading Growth Rate" />
                <FeatureItem text="One-Touch Payroll Processing" />
                <FeatureItem text="Tailored User Permissions" />
                <FeatureItem text="Smart Alert System" />
                <FeatureItem text="Flexible Deployment Options" />
                <FeatureItem text="Full-Featured Mobile Experience" />
              </div>

              {/* Right features */}
              <div className="space-y-4 ">
                <FeatureItem text="Intelligent Workflow Automation" />
                <FeatureItem text="Comprehensive Self-Service Portal" />
                <FeatureItem text="Customizable Business Intelligence" />
                <FeatureItem text="Real-Time Performance Dashboards" />
                <FeatureItem text="Voice-Activated Command System" />
                <FeatureItem text="Advanced Location Tracking" />
              </div>
            </div>
          </div>

          {/* Right column - Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 text-emerald-500 rounded-full transform scale-90 translate-x-4 translate-y-4"></div>
              <div className="relative z-10">
                <img
                  src="/whyChoose/image.png"
                  alt="Professional using Airax on laptop"
                  className="object-contain w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FeatureItem({ text }) {
  // Function to get the appropriate icon based on the feature text
  const getIcon = () => {
    switch (text) {
      case "Industry-Leading Growth Rate":
        return <BsBuildings className="h-4 w-4 text-white" />
      case "One-Touch Payroll Processing":
        return <MdPayments className="h-4 w-4 text-white" />
      case "Tailored User Permissions":
        return <RiUserSettingsLine className="h-4 w-4 text-white" />
      case "Smart Alert System":
        return <MdNotifications className="h-4 w-4 text-white" />
      case "Flexible Deployment Options":
        return <IoCloudDone className="h-4 w-4 text-white" />
      case "Full-Featured Mobile Experience":
        return <AiOutlineMobile className="h-4 w-4 text-white" />
      case "Intelligent Workflow Automation":
        return <RiFlowChart className="h-4 w-4 text-white" />
      case "Comprehensive Self-Service Portal":
        return <RiUserSettingsLine className="h-4 w-4 text-white" />
      case "Customizable Business Intelligence":
        return <BiCustomize className="h-4 w-4 text-white" />
      case "Real-Time Performance Dashboards":
        return <VscGraph className="h-4 w-4 text-white" />
      case "Voice-Activated Command System":
        return <HiOutlineSpeakerphone className="h-4 w-4 text-white" />
      case "Advanced Location Tracking":
        return <MdLocationOn className="h-4 w-4 text-white" />
      default:
        return <FaCheck className="h-4 w-4 text-white" />
    }
  }

  return (
    <div className="flex items-start">
      <div className="flex-shrink-0 mt-1">
        <div className="bg-emerald-500 rounded-full p-1">{getIcon()}</div>
      </div>
      <p className="ml-3 text-[16px] font-poppins font-[400] text-[#1D2130] leading-[150%]">{text}</p>
    </div>
  )
}