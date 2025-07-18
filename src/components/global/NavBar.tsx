"use client";

import Link from "next/link";
import { useState, useEffect, useRef, Fragment } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticBtn from "@/components/effects/MagneticBtn";
import { springPresets} from "@/constants/Animation";
import menuLinks from "@/constants/Menu";
interface MenuProps {
  scrolled: boolean;
  isMobile: boolean;
  isOpen: boolean;
  onClose: () => void;
}

function Menu({ scrolled, isMobile, isOpen, onClose }: MenuProps) {
  return (
    <Fragment>
      {/* Hamburger Button */}
      <MagneticBtn
        className={`z-100 absolute  rounded-2xl transition-shadow duration-700 ease-in-out
        ${scrolled ? "my_shadow" : "shadow-none md:my_shadow"}
        `}
      >
        <motion.button
          onClick={onClose}
          className={`flex flex-col items-center justify-center w-(--space-xl) aspect-square gap-y-[2px] pixel-corners-s ${
            isOpen ? "bg-green" : "bg-black"
          }`}
          aria-label="Toggle menu"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          transition={springPresets.stiff}
        >
          <motion.svg
            className={`w-(--space-s-m) h-1 ${
              isOpen ? "text-black" : "text-white"
            }`}
            viewBox="0 0 24 4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            animate={{
              rotate: isOpen ? 45 : 0,
              y: isOpen ? 6 : 0,
            }}
            transition={springPresets.medium}
          >
            <line x1="2" y1="2" x2="22" y2="2" />
          </motion.svg>
          <motion.svg
            className={`w-(--space-s-m) h-1 ${
              isOpen ? "text-black" : "text-white"
            }`}
            viewBox="0 0 24 4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            animate={{
              opacity: isOpen ? 0 : 1,
              scale: isOpen ? 0.8 : 1,
            }}
            transition={springPresets.medium}
          >
            <line x1="2" y1="2" x2="22" y2="2" />
          </motion.svg>
          <motion.svg
            className={`w-(--space-s-m) h-1 ${
              isOpen ? "text-black" : "text-white"
            }`}
            viewBox="0 0 24 4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            animate={{
              rotate: isOpen ? -45 : 0,
              y: isOpen ? -6 : 0,
            }}
            transition={springPresets.medium}
          >
            <line x1="2" y1="2" x2="22" y2="2" />
          </motion.svg>
        </motion.button>
      </MagneticBtn>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`z-99 fixed top-0 right-0 flex my_shadow rounded-2xl h-auto
              ${isMobile ? "w-full" : "w-fit"}`}
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={springPresets.medium}
          >
            <div className="w-full h-full bg-black pixel-corners-s pb-(--space-3xs)">
              <div className="flex items-center h-(--space-xl) mx-(--space-m) my-(--space-s)">
                <div
                  className={` text-0 font-bold text-green glow glow-green-lg 
                    ${isMobile ? "" : "!hidden"}`}
                >
                  SOS14
                </div>
              </div>
              <div
                className={`flex flex-col gap-y-(--space-3xs) p-(--space-xs) pt-0
                ${isMobile ? "text-0" : "text-2"}`}
              >
                {menuLinks.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ ...springPresets.medium, delay: i * 0.1 }}
                    className="flex hover:bg-green/10 hover:text-white pixel-corners-s transition-colors pl-(--space-s) pr-(--space-2xl)"
                  >
                    <Link
                      href={link.path}
                      className="flex text-right px-(--space-s) pr-(--space-2xl) py-(--space-2xs) text-white/90"
                      onClick={onClose}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Fragment>
  );
}

export default function NavBar() {
  const navRef = useRef<HTMLDivElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [useMenu, setUseMenu] = useState(false);

  useEffect(() => {
    const updateMobileState = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    const nav = navRef.current;
    if (!nav) return;

    const callback = (entries: IntersectionObserverEntry[]) => {
      const navEntry = entries[0];
      setScrolled(!navEntry.isIntersecting);
    };

    const observer = new IntersectionObserver(callback, {
      root: null,
      threshold: 0,
    });
    observer.observe(nav);

    updateMobileState();
    const handleResize = () => {
      updateMobileState();
    };
    window.addEventListener("resize", handleResize);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setUseMenu(scrolled || isMobile);
  }, [scrolled, isMobile]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [scrolled]);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      {/* Background Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed w-screen h-screen top-0 left-0 bg-black z-30"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleMenuToggle}
          />
        )}
      </AnimatePresence>

      <nav
        className={`max-w-[1728px] mx-auto w-full justify-self-center flex flex-row items-center justify-between px-(--space-m) py-(--space-s) z-100`}
      >
        {/* logo part */}
        <div
          className={`
            ${isMobile ? "" : ""} flex flex-row items-center`}
        >
          <button>
            <Link href="/" className="text-1 font-bold">
              <div>SOS14</div>
            </Link>
          </button>
        </div>

        <div className="relative">
          {/* Desktop Menu */}
          <AnimatePresence>
            {!isMobile && (
              <motion.div
                className="flex flex-row items-center gap-x-(--space-xl)"
                key={`desktop-${scrolled}`}
                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{
                  ...springPresets.soft,
                  duration: 0.5,
                  delay: 0.3,
                }}
              >
                {menuLinks.map((link, i) => (
                  <Link
                    key={i}
                    href={link.path}
                    className="text-0 hover:text-green transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
      <div ref={navRef} className="h-0" />
      {/* Mobile Menu */}
      <AnimatePresence>
        {useMenu && (
          <motion.div
            className="fixed right-(--space-m) top-(--space-2xs) md:top-(--space-s) z-50"
            initial={{ opacity: 0, scale: 0.8, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -10 }}
            transition={{ ...springPresets.soft, duration: 0.2 }}
          >
            <Menu
              scrolled={scrolled}
              isMobile={isMobile}
              isOpen={isMenuOpen}
              onClose={handleMenuToggle}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
