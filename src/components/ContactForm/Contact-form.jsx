import React, { useState } from "react";
import { FaChevronDown, FaPhone, FaFax, FaEnvelope } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    source: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your form submission logic here
  };

  return (
    <div className="w-full py-auto md:py-12 min-h-screen font-sans relative">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-black/70 z-0"
        style={{
          backgroundImage: "url('/ContactImage/image1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
        }}
      ></div>

      <div className="container mx-auto h-full max-w-6xl px-4 sm:px-6 lg:px-8 py-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {/* Contact Form */}
          <div className="text-white w-full max-w-lg mx-auto lg:mx-0">
            <h2 className="text-4xl sm:text-5xl font-[600] font-poppins text-[#FFFFFF] mb-4">
              Get in <span className="text-emerald-400">Touch</span>
            </h2>
            <p className="text-[16px] font-poppins font-[400] text-[#FFFFFF] mb-8">
            Have a question or feedback? Reach out to us we’d love to hear from you!
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Name *"
                    required
                    className="w-full bg-transparent border border-gray-500 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              <div>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email *"
                    required
                    className="w-full bg-transparent border border-gray-500 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              <div>
                <div className="relative">
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone number *"
                    required
                    className="w-full bg-transparent border border-gray-500 px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-emerald-400"
                  />
                </div>
              </div>

              <div>
                <div className="relative">
                  <select
                    name="source"
                    value={formData.source}
                    onChange={handleChange}
                    className="w-full bg-transparent border border-gray-500 px-4 py-3 text-white appearance-none focus:outline-none focus:border-emerald-400"
                  >
                    <option value="" disabled className="bg-gray-800">
                      How did you find us?
                    </option>
                    <option value="google" className="bg-gray-800">
                      Google
                    </option>
                    <option value="social" className="bg-gray-800">
                      Social Media
                    </option>
                    <option value="friend" className="bg-gray-800">
                      Friend
                    </option>
                    <option value="other" className="bg-gray-800">
                      Other
                    </option>
                  </select>
                  <FaChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#0eec9e] to-[#40c5ed] hover:bg-emerald-600 text-white font-medium rounded-[12px] transition-transform hover:scale-105 py-3 px-4 uppercase"
              >
                SEND
              </button>
            </form>

            {/* Contact Information */}
            <div className="flex flex-col md:flex-row justify-between mt-8 space-y-4 md:space-y-0 md:space-x-4">
              <div className="flex items-center">
                <FaPhone className="text-white mr-3" />
                <div>
                  <p className="text-gray-400 text-sm uppercase">PHONE</p>
                  <p className="text-white">03 5432 1234</p>
                </div>
              </div>

              <div className="flex items-center">
                <FaFax className="text-white mr-3" />
                <div>
                  <p className="text-gray-400 text-sm uppercase">FAX</p>
                  <p className="text-white">03 5432 1234</p>
                </div>
              </div>

              <div className="flex items-center">
                <FaEnvelope className="text-white mr-3" />
                <div>
                  <p className="text-gray-400 text-sm uppercase">EMAIL</p>
                  <p className="text-white">info@marcc.com.au</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Container - Replaced Image with Google Maps iframe */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg h-[570px] w-full">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345083897!2d144.9617215!3d-37.8139151!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642cb954b1ce9%3A0xf187674ba9830e78!2sMelbourne%20VIC%20Australia!5e0!3m2!1sen!2sus!4v1647649644226!5m2!1sen!2sus" 
              className="w-full h-full border-0" 
              allowFullScreen="" 
              loading="lazy"
              title="Location Map"
              aria-hidden="false"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}