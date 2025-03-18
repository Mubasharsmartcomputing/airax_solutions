import { BiBarChart, BiGroup, BiUser } from "react-icons/bi"

// Main component
function SalesAnalytics() {
  return (
    <div className="mx-4 py-10 pt-auto md:py-10 md:pt-24 items-center justify-center">
      <div className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-[#00D254] font-poppins font-[500] text-[24px] mb-4">Discover More</p>

          <h1 className="text-[48px] font-[500] font-poppins text-[#1E1E1E] lg:text-5xl leading-tight ">
            Analyze your sales and marketing leads
          </h1>

          <p className="max-w-lg">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.
          </p>
        </div>

        <div className="space-y-8">
          <FeatureItem
            icon={<BiBarChart className="w-6 h-6 text-emerald-500" />}
            title="Sales Tracking"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ksdh hdejin ejuei ."
          />

          <FeatureItem
            icon={<BiGroup className="w-6 h-6 text-emerald-500" />}
            title="Project Management"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ksd."
          />

          <FeatureItem
            icon={<BiUser className="w-6 h-6 text-emerald-500" />}
            title="Activity Report"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ksd."
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
        <h3 className="text-xl font-semibold text-[#1E1E1E] mb-1">{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default SalesAnalytics

