"use client"

import { useState, useEffect } from "react"
import { NavLink } from "react-router"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Add scroll effect
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`w-full py-4 px-4 sm:px-6 bg-white sticky top-0 z-50 transition-all duration-300 ${isScrolled ? "shadow-md" : ""}`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <NavLink to="/" className="text-2xl font-bold text-emerald-500 flex items-center">
            <span className="bg-gradient-to-r from-[#0eec9e] to-[#40c5ed] w-8 h-8 rounded-lg mr-2 flex items-center justify-center text-white">
              B
            </span>
            Bizmate
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-[#1D2130] hover:text-gray-900 py-2 border-b-2 ${isActive ? "border-[#0eec9e]" : "border-transparent"}`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-[#1D2130] hover:text-gray-900 py-2 border-b-2 ${isActive ? "border-[#0eec9e]" : "border-transparent"}`
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/product"
            className={({ isActive }) =>
              `text-[#1D2130] hover:text-gray-900 py-2 border-b-2 ${isActive ? "border-[#0eec9e]" : "border-transparent"}`
            }
          >
            Product
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-[#1D2130] hover:text-gray-900 py-2 border-b-2 ${isActive ? "border-[#0eec9e]" : "border-transparent"}`
            }
          >
            Contact
          </NavLink>

          {/* Login Button (Desktop) */}
        <div className="hidden md:block">
          <NavLink to="/login">
            <button className="bg-gradient-to-r from-[#0eec9e] to-[#40c5ed] hover:bg-emerald-600 text-white font-medium rounded-[12px] transition-transform hover:scale-105 w-[124px] h-[56px]">
              Login
            </button>
          </NavLink>
        </div>
        </nav>

        

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-700 hover:text-gray-900 p-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0eec9e]"
            aria-label="Toggle menu"
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mt-4 pt-4 border-t border-gray-100 px-2">
          <div className="flex flex-col space-y-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-[#1D2130] hover:text-gray-900 py-2 px-3 rounded-lg ${isActive ? "bg-gradient-to-r from-[#0eec9e]/10 to-[#40c5ed]/10" : ""}`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `text-[#1D2130] hover:text-gray-900 py-2 px-3 rounded-lg ${isActive ? "bg-gradient-to-r from-[#0eec9e]/10 to-[#40c5ed]/10" : ""}`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About Us
            </NavLink>
            <NavLink
              to="/product"
              className={({ isActive }) =>
                `text-[#1D2130] hover:text-gray-900 py-2 px-3 rounded-lg ${isActive ? "bg-gradient-to-r from-[#0eec9e]/10 to-[#40c5ed]/10" : ""}`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Product
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-[#1D2130] hover:text-gray-900 py-2 px-3 rounded-lg ${isActive ? "bg-gradient-to-r from-[#0eec9e]/10 to-[#40c5ed]/10" : ""}`
              }
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </NavLink>

            {/* Login Button (Mobile) */}
            <NavLink to="/login" className="mt-2" onClick={() => setIsMobileMenuOpen(false)}>
              <button className="bg-gradient-to-r from-[#0eec9e] to-[#40c5ed] hover:bg-emerald-600 text-white font-medium w-full py-3 rounded-[12px]">
                Login
              </button>
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  )
}

