import Image from "next/image";
import React from "react";
import Link from "next/link";
import PortfolioLogo from "@/public/icons/portfolio-logo.svg";
import { motion } from "framer-motion";

export const Navbar = () => {
  return (
    // 2xl:pl-[13.2rem] xl:pl-[6rem] pl-[5rem] 2xl:pr-[14.5rem] xl:pr-[9rem] pr-[5rem]
    <div className="absolute top-0 left-0 right-0 z-50 py-12 lg:pl-[13.2rem] md:pl-28 pl-20 lg:pr-[12rem] md:pr-28 pr-20 flex justify-between w-full">
      <Image
        className="w-[3rem] h-[3rem]"
        src={PortfolioLogo}
        width={100}
        height={100}
        alt="logo"
      />

      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex pb-1 items-center gap-[4rem]"
      >
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
        <button className="bg-white text-black px-5 py-[0.65rem] rounded-full text-xs font-bold hover:bg-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-lg">
          CONTACT ME
        </button>
      </motion.nav>
    </div>
  );
};
