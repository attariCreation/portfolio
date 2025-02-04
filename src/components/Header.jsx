import React from "react";
import { motion, useScroll } from "framer-motion"; // Make sure you're importing from 'framer-motion'
const Header = () => {
  const { scrollYProgress } = useScroll();
  return (
    <header className="w-full h-[20px] origin-left">
      <motion.hr
        style={{
          scaleX: scrollYProgress,
        }}
        className="border-none w-full h-2 bg-gradient-to-r from-[#F5F5F5] to-zinc-300 fixed top-0 left-0 origin-left"
      />
      <nav className="flex justify-between items-center px-10 py-5">
        <div id="left">
          <span id="logo" className="font-bold text-white font-[poppins] text-2xl">
            Abdul Hannan
          </span>
        </div>
        <div id="right" className="flex justify-between items-center gap-10 text-white font-[poppins]">
          <a href="#" className="hover:underline underline-offset-3 transition-all duration-300 decoration-[#00FFFF] hover:text-[#00FFFF]">Home</a>
          <a href="#" className="hover:underline underline-offset-3 transition-all duration-300 decoration-[#00FFFF] hover:text-[#00FFFF]">About</a>
          <a href="#" className="hover:underline underline-offset-3 transition-all duration-300 decoration-[#00FFFF] hover:text-[#00FFFF]">Services</a>
          <a href="#" className="hover:underline underline-offset-3 transition-all duration-300 decoration-[#00FFFF] hover:text-[#00FFFF]">Projects</a>
          <a href="#" className="hover:underline underline-offset-3 transition-all duration-300 decoration-[#00FFFF] hover:text-[#00FFFF]">Contact</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
