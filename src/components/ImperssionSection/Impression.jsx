import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router";

const ImpressionsSection = () => {
  // Logo carousel state and refs
  const [isAnimating, setIsAnimating] = useState(true);
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

  // Card data with updated content
  const cards = [
    {
      title: "Smart Accounting Management",
      description:
        "Maintaining accurate financial records is crucial—not just for statutory compliance, but for a clear, real-time view of your organization's financial health. With ERPNext, a fully open-source ERP, you can streamline compliance, reduce manual spreadsheet efforts, and minimize reliance on external auditors. ERPNext transforms accounting by seamlessly integrating with inventory, manufacturing, HR, and more—turning your ERP into a centralized financial hub.",
      image: "/impressive/image1.png",
    },
    {
      title: "Time & Attendance Tracking",
      description:
        "Boost employee productivity with our advanced Time & Attendance Management Module. This user-friendly system captures accurate, real-time attendance data that's accessible anywhere. Track attendance patterns, monitor punctuality, and generate comprehensive reports from any device—mobile, tablet, or desktop. Simplify your attendance management and focus on what matters most: your business growth.",
      image: "/impressive/image2.png",
    },
    {
      title: "Streamlined Payroll System",
      description:
        "Simplify even the most complex payroll processes with our FlowHCM Payroll Module. Designed to adapt to local tax structures, company policies, and statutory requirements, our system ensures accurate and timely salary disbursements with just one click. By integrating seamlessly with Attendance and Leave management modules, we eliminate calculation errors and reduce processing time by up to 80%.",
      image: "/impressive/image3.png",
    },
    {
      title: "Efficient Recruitment Platform",
      description:
        "Transform your hiring process with our Recruitment Management Software. Stop drowning in applications and start finding the right talent efficiently. Our platform streamlines every step—from posting job openings and screening candidates to scheduling interviews and tracking applicant progress. Reduce hiring time by 40% while building a stronger talent pipeline for your organization's future needs.",
      image: "/impressive/image4.png",
    },
    {
      title: "Employee Performance Evaluation",
      description:
        "Elevate your performance appraisal process with our Performance Management Software. This powerful module lets you create customized appraisal cycles based on your company's unique structure—whether department-wise or by business unit. Define review periods, set clear objectives, and establish measurable KPIs tailored to your specific requirements, all while ensuring transparent feedback channels for continuous improvement.",
      image: "/impressive/image1.png",
    },
    {
      title: "Manufacturing Visibility Solutions",
      description:
        "Gain complete visibility and traceability in your manufacturing processes with ERPNext. Track multi-level BOMs for both finished goods and sub-assemblies while seamlessly integrating with sales and inventory management. Stay ahead by anticipating production needs, pre-planning production queues, and ensuring timely raw material requisitions. Our system guarantees accurate valuation and comprehensive quality checks before completing the manufacturing cycle.",
      image: "/header.png",
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
        
        {/* Expanding Cards Grid */}
        <div className="container mx-auto p-4">
          <h1 className="text-3xl sm:text-4xl md:text-[44px] font-[600] font-poppins text-gray-900 leading-tight mb-6 text-start md:text-center">Business Management Solutions</h1>
          <p className="text-start md:text-center text-lg mb-10 max-w-3xl mx-auto">Discover our comprehensive suite of business management tools designed to optimize your operations and drive growth.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cards.map((card, index) => (
              <ExpandingCard
                key={index}
                title={card.title}
                description={card.description}
                image={card.image}
                index={index}
              />
            ))}
          </div>
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

// Expanding Card Component with Framer Motion
const ExpandingCard = ({ title, description, image, index }) => {
  // Set of icons for cards
  const cardIcons = [
    "💼", // Accounting
    "⏱️", // Time & Attendance
    "💰", // Payroll
    "🔍", // Recruitment
    "📈", // Performance
    "🏭", // Manufacturing
  ];

  return (
    <motion.div
      className="relative overflow-hidden h-[300px] rounded-lg shadow-md"
      whileHover={{ scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <div className="relative h-full">
        <img
          src={image || "/placeholder.svg"}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-3 right-3 bg-white bg-opacity-90 rounded-full p-2 shadow-sm">
          <span className="text-xl" role="img" aria-label="Icon">
            {cardIcons[index % cardIcons.length]}
          </span>
        </div>
      </div>
      <motion.div
        className="absolute bottom-0 left-0 right-0 bg-white bg-opacity-95 overflow-hidden"
        initial={{ height: "100px" }}
        whileHover={{ height: "70%" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        <div className="p-4">
          <h2 className="text-xl font-semibold mb-2">{title}</h2>
          <motion.div
            className="overflow-hidden"
            initial={{ maxHeight: "40px" }}
            whileHover={{ maxHeight: "calc(100% - 40px)" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p className="text-gray-700">{description}</p>
            <motion.button
              className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md text-sm font-medium"
              whileHover={{ backgroundColor: "#2563EB" }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ImpressionsSection;