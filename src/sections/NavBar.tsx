import { useEffect, useState } from "react";
import throttle from "lodash.throttle";
import clsx from "clsx";
import { NavLink } from "react-router-dom";
import { NavData } from "../data/NavData";
import DarkModeToggle from "../components/DarkModeToggle";
import { AnimatePresence, motion } from "framer-motion";
import type { Variants, Transition } from "framer-motion";
import { easeInOut } from "framer-motion";
import { scrollToTop } from "../utlis/scrollToTop";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);


  // Motion variants for the entire menu container
  const menuVariants: Variants = {
    hidden: { opacity: 0, y: "-100%", },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.4, ease: easeInOut, when: "beforeChildren", staggerChildren: 0.08, } as Transition,
    },

    exit: {
      opacity: 0, y: "-100%",
      transition: { duration: 0.3, ease: easeInOut, } as Transition,
    },
  };

  // Motion variants for each individual menu item
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: easeInOut } },
    exit: { opacity: 0, y: 20, transition: { duration: 0.2, ease: easeInOut } },
  };

  return (
<nav className={clsx(
  "px-[8.20512821%] md:px-[3.83693046%] lg:px-[7.777777777777778%]",
  "fixed left-1/2 -translate-x-1/2 pt-5 pb-5 z-50 border border-transparent",
  "bg-white dark:bg-darkNavy",
  "transition-all duration-200 ease-in-out",
  "w-full"
)}>

      <div className="flex justify-between items-center w-full">
        <p className="font-semibold text-lg  leading-6 lg:text-[20px]">Your Name</p> {/* main website name */}

        {/* Mobile menu with animation */}
        <AnimatePresence>
          {menuOpen && (
            <motion.ul variants={menuVariants} initial="hidden" animate="visible" exit="exit"
              className={clsx(
                "flex flex-col gap-5 justify-center items-center z-51 md:hidden",
                "text-lg leading-6",
                "fixed inset-0  h-screen w-screen",
                "bg-white dark:bg-darkNavy",
              )}
            >

              {/* Logo/Title*/}
              <motion.li variants={itemVariants} className="font-semibold text-lg  leading-6 md:hidden">
                Your Name
              </motion.li>

              {/* Navigation links */}
              {NavData.map((item, index) => (
                <motion.li key={index} variants={itemVariants} className="p-2">
                  <NavLink to={item.path} end={item.path === "/theblog"}
                    className={({ isActive }) => isActive ? "border-b-2 pb-1" : " "}
                    onClick={() => {
                      scrollToTop();
                      setMenuOpen(false);
                    }}
                  >
                    {item.name}
                  </NavLink>
                </motion.li>
              ))}

              {/* Dark mode toggle inside mobile menu */}
              <motion.li variants={itemVariants}>
                <DarkModeToggle />
              </motion.li>

              {/* Close button at the bottom */}
              <motion.li variants={itemVariants} className="absolute bottom-1 mb-5">
                <button onClick={() => setMenuOpen(false)} aria-label="close menu">
                  <img src="/theblog/images/navbar/close.svg" alt="Close"
                    className="dark:filter dark:invert"
                  />
                </button>
              </motion.li>

            </motion.ul>
          )}
        </AnimatePresence>

        {/* Hamburger menu button for mobile */}
        <button className="md:hidden z-50" onClick={() => setMenuOpen(true)} aria-label="Open menu">
          <img src="/theblog/images/navbar/bars.svg"
            alt="Menu"
            className="dark:filter dark:invert"
          />
        </button>

        {/* Desktop navigation links */}
        <ul className="hidden md:flex md:flex-row md:gap-3.5 font-normal text-lg lg:text-[20px] leading-6">
          {NavData.map((item, index) => (
            <li key={index} className="p-2">
              <NavLink to={item.path} end={item.path === "/theblog"}
                className={({ isActive }) => isActive ? "border-b-2 pb-1" : " "}
                 onClick={() => {
                  scrollToTop();
                }}
              >
                {item.name}
              </NavLink>
            </li>
          ))}

          {/* Dark mode toggle in desktop */}
          <li>
            <DarkModeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;