import { BiBarChart, BiGroup, BiUser } from "react-icons/bi";

// Main component
function SalesAnalytics() {
  return (
    <div className="mx-4 py-10 pt-auto md:py-10 md:pt-24 items-center justify-center">
      <div className="container mx-auto max-w-7xl grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <p className="text-[#00D254] font-poppins font-[500] text-[24px] mb-4 leading-[150%]">Discover More</p>

          <h1 className="max-w-3xl text-3xl sm:text-4xl text-start font-[600] text-[#1D2130] lg:text-[44px] leading-tight ">
            Smarter Sales Insights, Better Business Growth
          </h1>

          <p className="max-w-lg">
            Get a clear view of your sales and marketing performance in real time. Track progress, understand trends, 
            and make data-driven decisions to grow faster—without the guesswork.
          </p>
        </div>

        <div className="space-y-8">
          <FeatureItem
            icon={<BiBarChart className="w-6 h-6 text-emerald-500" />}
            title="Sales Tracking"
            description="Monitor your sales in real time, track trends, and find new opportunities to boost revenue."
          />

          <FeatureItem
            icon={<BiGroup className="w-6 h-6 text-emerald-500" />}
            title="Project Management"
            description="Keep your team aligned, track tasks effortlessly, and ensure smooth project execution."
          />

          <FeatureItem
            icon={<BiUser className="w-6 h-6 text-emerald-500" />}
            title="Activity Reports"
            description="Generate clear, insightful reports to measure performance and make better business decisions."
          />
        </div>
      </div>
    </div>
  );
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
  );
}

export default SalesAnalytics;
