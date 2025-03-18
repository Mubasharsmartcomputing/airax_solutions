import { AiOutlineArrowRight } from "react-icons/ai";

export default function BusinessWork() {
  return (
    <section className="max-w-7xl font-poppins text-[#1D2130] mx-auto px-2 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-2">
        {/* Left Column */}
        <div className="space-y-4">
          <h2 className="text-emerald-500 font-[400] text-[28px]">Why should you work with us?</h2>
          <h3 className="text-4xl font-[500] text-[#1D2130] lg:text-5xl leading-tight">
            To upscale your business to the next level
          </h3>
          <p className="text-[16px] font-poppins font-[400] text-[#1D2130] lg:text-[16px] leading-tight">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
            dolore magna aliquyam erat, sed diam voluptua invidunt ut labore.
          </p>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {[1, 2, 3,4].map((item) => (
            <div key={item} className="flex items-start gap-4">
              <div className="bg-emerald-500 rounded-full p-2 shrink-0">
                <AiOutlineArrowRight className="w-5 h-5 text-white" />
              </div>
              <p className="text-[#1D2130] mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod ksdh hdejin ejuei .
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
