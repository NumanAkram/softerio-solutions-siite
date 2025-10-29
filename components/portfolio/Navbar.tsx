import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import PortfolioLogo from "@/public/icons/logo.png";
import { motion } from "framer-motion";

export const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <div className="absolute top-0 z-50 py-12 lg:pl-[12.3rem] md:pl-10 pl-6 lg:pr-[8.6rem] md:pr-10 pr-6 flex justify-between items-center w-full">
      <Image
        className="w-[4rem] h-[4rem]"
        src={PortfolioLogo}
        width={100}
        height={100}
        alt="logo"
      />

      {/* Desktop nav */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="hidden lg:flex pb-1 items-center gap-[4rem]"
      >
        <Link
          href="/"
          className="text-white text-sm font-semibold hover:text-gray-300 transition-colors duration-300 hover:scale-105"
        >
          Home
        </Link>
        <Link
          href="#about"
          className="text-white text-sm font-semibold hover:text-gray-300 transition-colors duration-300 hover:scale-105"
        >
          About me
        </Link>
        <Link
          href="#skills"
          className="text-white text-sm font-semibold hover:text-gray-300 transition-colors duration-300 hover:scale-105"
        >
          Skills
        </Link>
        <Link
          href="#portfolio"
          className="text-white text-sm font-semibold hover:text-gray-300 transition-colors duration-300 hover:scale-105"
        >
          Portfolio
        </Link>
        <Link
          className="bg-white text-black px-5 py-[0.65rem] rounded-full text-xs font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg"
          href="#contact_me"
        >
          CONTACT ME
        </Link>
      </motion.nav>

      {/* Hamburger for md and below */}
      <button
        aria-label="Open menu"
        onClick={() => setIsMobileOpen(true)}
        className="lg:hidden text-white focus:outline-none"
      >
        <span className="block w-7 h-0.5 bg-white mb-1.5" />
        <span className="block w-7 h-0.5 bg-white mb-1.5" />
        <span className="block w-7 h-0.5 bg-white" />
      </button>

      {/* Mobile menu overlay */}
      {isMobileOpen && (
        <div className="fixed inset-0 z-[60] flex flex-col h-fit">
          {/* Top bar */}
          <div className="flex items-center justify-between bg-black/95 px-6 py-4">
            <Image src={PortfolioLogo} alt="logo" className="w-10 h-10" />
            <button
              aria-label="Close menu"
              onClick={() => setIsMobileOpen(false)}
              className="text-white text-3xl leading-none px-2 py-1"
            >
              ×
            </button>
          </div>

          {/* Links area */}
          <div className="flex-1 bg-[#00000095] backdrop-blur-[1px] text-white">
            <div className="flex flex-col items-center text-sm font-semibold space-y-8 pt-8">
              <Link
                href="#about"
                onClick={() => setIsMobileOpen(false)}
                className="hover:text-gray-300"
              >
                About me
              </Link>
              <Link
                href="#skills"
                onClick={() => setIsMobileOpen(false)}
                className="hover:text-gray-300"
              >
                Skills
              </Link>
              <Link
                href="#portfolio"
                onClick={() => setIsMobileOpen(false)}
                className="hover:text-gray-300"
              >
                Portfolio
              </Link>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="bg-white text-black text-center py-4">
            <Link
              href="#contact_me"
              onClick={() => setIsMobileOpen(false)}
              className="text-xs font-bold"
            >
              CONTACT ME
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
