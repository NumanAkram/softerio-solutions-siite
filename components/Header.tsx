"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuDropdownOpen, setIsMenuDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 w-full backdrop-blur-sm z-40 border-b transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 dark:bg-transparent border-gray-200 dark:border-transparent"
          : "bg-transparent border-transparent"
      }`}
    >
      <div className="container mx-auto md:px-6 px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src="/images/logo-removebg-preview.png"
              alt="Company Logo"
              width={100}
              height={100}
              className={`md:w-20 w-16 md:h-20 h-16 transition-all duration-300 md:mt-5 mt-0 ${
                isScrolled ? "brightness-100" : "brightness-0 invert"
              }`}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link
              href="/"
              className={`transition-colors duration-300 ${
                isScrolled
                  ? "text-white hover:text-teal-600"
                  : "text-white hover:text-teal-400"
              }`}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={`transition-colors duration-300 ${
                isScrolled
                  ? "text-white hover:text-teal-600"
                  : "text-white hover:text-teal-400"
              }`}
            >
              Services
            </Link>
            <Link
              href="/ai"
              className={`transition-colors duration-300 ${
                isScrolled
                  ? "text-white hover:text-teal-600"
                  : "text-white hover:text-teal-400"
              }`}
            >
              AI
            </Link>
            <Link
              href="/portfolio"
              className={`transition-colors duration-300 ${
                isScrolled
                  ? "text-white hover:text-teal-600"
                  : "text-white hover:text-teal-400"
              }`}
            >
              Portfolio
            </Link>
            <Link
              href="/testimonials"
              className={`transition-colors duration-300 ${
                isScrolled
                  ? "text-white hover:text-teal-600"
                  : "text-white hover:text-teal-400"
              }`}
            >
              Testimonials
            </Link>
            {/* <Link href="/team" className={`transition-colors duration-300 ${
              isScrolled ? 'text-gray-800 hover:text-teal-600' : 'text-white hover:text-teal-400'
            }`}>
              Team
            </Link> */}
            <div className="flex items-center gap-4">
              <div className="relative">
                <button
                  onClick={() => setIsMenuDropdownOpen(!isMenuDropdownOpen)}
                  className={`flex items-center transition-colors duration-300 ${
                    isScrolled
                      ? "text-white hover:text-teal-600"
                      : "text-white hover:text-teal-400"
                  }`}
                >
                  Menu
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isMenuDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-lg py-2">
                    <Link
                      href="/about"
                      onClick={() => setIsMenuDropdownOpen(false)}
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      About Us
                    </Link>
                    <Link
                      href="/contact"
                      onClick={() => setIsMenuDropdownOpen(false)}
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Contact
                    </Link>
                    <Link
                      href="/blog"
                      onClick={() => setIsMenuDropdownOpen(false)}
                      className="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    >
                      Blog
                    </Link>
                  </div>
                )}
              </div>

              {/* Company Video Button */}
              <Link
                href="/video"
                className={`flex items-center gap-2 transition-colors duration-300 ${
                  isScrolled
                    ? "text-white hover:text-teal-600"
                    : "text-white hover:text-teal-400"
                }`}
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
                  />
                </svg>
                <span className="hidden sm:inline">More Info</span>
              </Link>
            </div>
            {/* <Link href="/news" className={`transition-colors duration-300 ${
              isScrolled ? 'text-gray-800 hover:text-teal-600' : 'text-white hover:text-teal-400'
            }`}>
              News
            </Link> */}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Link
              href="/quotes"
              className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105"
            >
              GET QUOTES
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`lg:hidden transition-colors duration-300 ${
              isScrolled ? "text-white" : "text-white"
            }`}
          >
            {isMenuOpen ? (
              <X className="md:h-10 h-9 md:w-10 w-9" />
            ) : (
              <Menu className="md:h-10 h-9 md:w-10 w-9" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div
            className={`lg:hidden mt-2 rounded-lg p-4 transition-colors duration-300 ${
              isScrolled ? "bg-white/90" : "bg-transparent"
            }`}
          >
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className={`transition-colors duration-300 ${
                  isScrolled
                    ? "text-gray-800 hover:text-teal-600"
                    : "text-white hover:text-teal-400"
                }`}
              >
                Home
              </Link>
              <Link
                href="/services"
                className={`transition-colors duration-300 ${
                  isScrolled
                    ? "text-gray-800 hover:text-teal-600"
                    : "text-white hover:text-teal-400"
                }`}
              >
                Services
              </Link>
              <Link
                href="/ai"
                className={`transition-colors duration-300 ${
                  isScrolled
                    ? "text-gray-800 hover:text-teal-600"
                    : "text-white hover:text-teal-400"
                }`}
              >
                AI
              </Link>
              <Link
                href="/portfolio"
                className={`transition-colors duration-300 ${
                  isScrolled
                    ? "text-gray-800 hover:text-teal-600"
                    : "text-white hover:text-teal-400"
                }`}
              >
                Portfolio
              </Link>
              <Link
                href="/testimonials"
                className={`transition-colors duration-300 ${
                  isScrolled
                    ? "text-gray-800 hover:text-teal-600"
                    : "text-white hover:text-teal-400"
                }`}
              >
                Testimonials
              </Link>
              <Link
                href="/team"
                className={`transition-colors duration-300 ${
                  isScrolled
                    ? "text-gray-800 hover:text-teal-600"
                    : "text-white hover:text-teal-400"
                }`}
              >
                Team
              </Link>
              <Link
                href="/news"
                className={`transition-colors duration-300 ${
                  isScrolled
                    ? "text-gray-800 hover:text-teal-600"
                    : "text-white hover:text-teal-400"
                }`}
              >
                News
              </Link>
              <Link
                href="/quotes"
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-full font-medium transition-colors text-center"
              >
                GET QUOTES
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
