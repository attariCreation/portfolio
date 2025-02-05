import React, { useState } from "react";
import { motion, useScroll } from "framer-motion";
import Button from "./Button";
import { TiThMenu } from "react-icons/ti";
const Header = () => {
  const { scrollYProgress } = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="h-auto dark:bg-[var(--dark-bg-secondary)] bg-[var(--bg-secondary)] shadow-[var(--hover-border)] z-10 w-full">
      {/* Scroll Progress Bar */}
      <motion.hr
        style={{ scaleX: scrollYProgress }}
        className="border-none w-full h-[3px] bg-gradient-to-r dark:from-[#4FD1C5] dark:to-[#66E6E6] fixed top-0 left-0 origin-left from-[var(--border-custom)] to-[var(--bg-main)]"
      />

      <nav className="dark:shadow-[#233752] shadow-md flex justify-between items-center px-10 py-5">
        {/* Logo */}
        <div id="left">
          <span
            id="logo"
            className="font-bold dark:text-[var(--dark-text-heading)] text-[var(--text-heading)] font-[poppins] text-2xl md:text-md  "
          >
            Abdul Hannan
          </span>
        </div>

        {/* Mobile Menu Button */}
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="text-[var(--text-heading)] dark:text[var(--dark-text-heading)]">
            <span className="material-icons dark:text-[var(--dark-text-heading)]" ><TiThMenu />Menu</span>
          </button>
        </div>

        {/* Navigation Links */}
        <div
          id="right"
          className={`flex justify-between items-center gap-10 font-[poppins]
             ${isMenuOpen ? "flex-col absolute top-16 left-0 w-full dark:bg-[var(--dark-bg-secondary)] bg-[var(--bg-secondary)] p-5" : "hidden lg:flex"
          }`}
        >
          <a
            href="#"
            className="hover:overline overline-offset-3 transition-all duration-300 dark:text-[var(--dark-link-active)] dark:hover:text-[var(--dark-link-visited)] text-[var(--link-active)] hover:text-[var(--hover-text)] hover:bg-[var(--hover-bg)] px-3 py-1 rounded-md"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:overline overline-offset-3 transition-all duration-300 dark:text-[var(--dark-link-active)] dark:hover:text-[var(--dark-link-visited)] text-[var(--link-active)] hover:text-[var(--hover-text)] hover:bg-[var(--hover-bg)] px-3 py-1 rounded-md"
          >
            About
          </a>
          <a
            href="#"
            className="hover:overline overline-offset-3 transition-all duration-300 dark:text-[var(--dark-link-active)] dark:hover:text-[var(--dark-link-visited)] text-[var(--link-active)] hover:text-[var(--hover-text)] hover:bg-[var(--hover-bg)] px-3 py-1 rounded-md"
          >
            Services
          </a>
          <a
            href="#"
            className="hover:overline overline-offset-3 transition-all duration-300 dark:text-[var(--dark-link-active)] dark:hover:text-[var(--dark-link-visited)] text-[var(--link-active)] hover:text-[var(--hover-text)] hover:bg-[var(--hover-bg)] px-3 py-1 rounded-md"
          >
            Projects
          </a>
          <a
            href="#"
            className="hover:overline overline-offset-3 transition-all duration-300 dark:text-[var(--dark-link-active)] dark:hover:text-[var(--dark-link-visited)] text-[var(--link-active)] hover:text-[var(--hover-text)] hover:bg-[var(--hover-bg)] px-3 py-1 rounded-md"
          >
            Contact
          </a>
          <Button />
        </div>
      </nav>
    </header>
  );
};

export default Header;
