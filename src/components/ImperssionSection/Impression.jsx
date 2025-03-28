import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router";
import { 
  FaCalculator, 
  FaClock, 
  FaMoneyBillWave, 
  FaUserTie, 
  FaChartLine, 
  FaIndustry 
} from "react-icons/fa";

const ImpressionsSection = () => {
  // Logo carousel state and refs
  const [isAnimating, setIsAnimating] = useState(true);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const carouselRef = useRef(null);
  
  // Array of your logo data
  const logos = [
    { src: "/CompanyLogo/image1.png", alt: "Logo 1" },
    { src: "/CompanyLogo/image2.png", alt: "Logo 2" },
    { src: "/CompanyLogo/image3.png", alt: "Logo 3" },
    { src: "/CompanyLogo/image4.png", alt: "Logo 4" },
    { src: "/CompanyLogo/image5.png", alt: "Logo 5" },
    { src: "/CompanyLogo/image6.png", alt: "Logo 6" },
  ];

  // Card data with updated content and icons
  const businessSolutions = [
    {
      title: "Smart Accounting Management",
      description:
        "Maintaining accurate financial records is crucial—not just for statutory compliance, but for a clear, real-time view of your organization's financial health. With ERPNext, a fully open-source ERP, you can streamline compliance, reduce manual spreadsheet efforts, and minimize reliance on external auditors.",
      icon: <FaCalculator className="text-4xl text-green-500" />,
    },
    {
      title: "Time & Attendance Tracking",
      description:
        "Boost employee productivity with our advanced Time & Attendance Management Module. This user-friendly system captures accurate, real-time attendance data that's accessible anywhere. Track attendance patterns, monitor punctuality, and generate comprehensive reports from any device.",
      icon: <FaClock className="text-4xl text-green-500" />,
    },
    {
      title: "Streamlined Payroll System",
      description:
        "Simplify even the most complex payroll processes with our FlowHCM Payroll Module. Designed to adapt to local tax structures, company policies, and statutory requirements, our system ensures accurate and timely salary disbursements with just one click.",
      icon: <FaMoneyBillWave className="text-4xl text-green-500" />,
    },
    {
      title: "Efficient Recruitment Platform",
      description:
        "Transform your hiring process with our Recruitment Management Software. Stop drowning in applications and start finding the right talent efficiently. Our platform streamlines every step—from posting job openings and screening candidates to scheduling interviews and tracking applicant progress.",
      icon: <FaUserTie className="text-4xl text-green-500" />,
    },
    {
      title: "Employee Performance Evaluation",
      description:
        "Elevate your performance appraisal process with our Performance Management Software. This powerful module lets you create customized appraisal cycles based on your company's unique structure—whether department-wise or by business unit.",
      icon: <FaChartLine className="text-4xl text-green-500" />,
    },
    {
      title: "Manufacturing Visibility Solutions",
      description:
        "Gain complete visibility and traceability in your manufacturing processes with ERPNext. Track multi-level BOMs for both finished goods and sub-assemblies while seamlessly integrating with sales and inventory management.",
      icon: <FaIndustry className="text-4xl text-green-500" />,
    },
  ];

  // Duplicate logos to create seamless loop effect
  const extendedLogos = [...logos, ...logos];

  useEffect(() => {
    const carousel = carouselRef.current;
    let animationId;
    let position = 0;

    const animate = () => {
      if (!isAnimating || !carousel) return;
      
      position -= 0.5; // Adjust speed here
      
      // Reset position when we've scrolled the width of our original logos
      if (position <= -carousel.children[0].offsetWidth * logos.length) {
        position = 0;
      }
      
      carousel.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    
    // Pause animation when not in viewport or tab is inactive
    const handleVisibilityChange = () => {
      setIsAnimating(!document.hidden);
    };
    
    document.addEventListener("visibilitychange", handleVisibilityChange);
    
    return () => {
      cancelAnimationFrame(animationId);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [isAnimating, logos.length]);

  // Pause on hover
  const handleMouseEnter = () => setIsAnimating(false);
  const handleMouseLeave = () => setIsAnimating(true);

  return (
    <section className="font-poppins w-full flex flex-col items-center justify-center">
      <div className="relative overflow-hidden max-w-7xl w-full px-4 sm:px-6 py-12 sm:py-16 my-8 sm:my-12 md:px-8 lg:px-12">
        {/* Blur Gradient Background */}
        <div
          className="absolute top-0 left-0 w-full h-full -z-10"
          style={{
            background: "linear-gradient(70deg, #9BFFA5, #AED3FF, #C9D4EF, #CACFFA)",
            filter: "blur(100px)",
            opacity: 0.8,
          }}
        ></div>
        
        {/* Cards with new animation style */}
        <div className="container mx-auto p-2 md:p-4">
          <h1 className="text-3xl sm:text-4xl md:text-[44px] font-[600] font-poppins text-gray-900 leading-tight mb-6 text-start md:text-center">Business Management Solutions</h1>
          <p className="text-start md:text-center text-lg mb-10 max-w-3xl mx-auto">Discover our comprehensive suite of business management tools designed to optimize your operations and drive growth.</p>
          
          <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 cursor-pointer gap-6 py-10 max-w-6xl mx-auto">
            {businessSolutions.map((solution, idx) => (
              <li
                key={idx}
                className="relative block p-2 h-full w-full list-none"
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <AnimatePresence>
                  {hoveredIndex === idx && (
                    <motion.span
                      className="absolute inset-0 h-full w-full bg-[#C9D4EF] block rounded-3xl z-10 shadow-lg"
                      layoutId="hoverBackground"
                      initial={{ opacity: 0 }}
                      animate={{
                        opacity: 1,
                        transition: { duration: 0.15 },
                      }}
                      exit={{
                        opacity: 0,
                        transition: { duration: 0.15, delay: 0.2 },
                      }}
                    />
                  )}
                </AnimatePresence>
                <div className="rounded-2xl h-full w-full p-auto md:p-4 overflow-hidden bg-white border border-gray-200 hover:border-green-300 relative z-20 shadow-sm">
                  <div className="relative z-50 p-4">
                    <div className="flex justify-center mb-5">{solution.icon}</div>
                    <h4 className="text-gray-800 font-bold text-xl tracking-wide mt-4 text-center">{solution.title}</h4>
                    <p className="mt-6 text-gray-600 tracking-wide leading-relaxed text-sm">{solution.description}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Logo Carousel (integrated directly in the component) */}
      <div className="max-w-7xl w-full overflow-hidden h-20 my-8">
        <div
          className="flex items-center"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div
            ref={carouselRef}
            className="flex space-x-10 transition-transform"
            style={{ willChange: "transform" }}
          >
            {extendedLogos.map((logo, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="w-[158px] h-[32px] object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpressionsSection;