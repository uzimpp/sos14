"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import MagneticBtn from "@/components/effects/MagneticBtn";
import { springPresets } from "@/constants/Animation";
interface MenuProps {
  isMobile: boolean;
  isOpen: boolean;
  onClose: () => void;
}

const menuLinks = [
  { path: "/", label: "Home" },
  { path: "/#agenda", label: "Agenda" },
  { path: "/problems?day=0", label: "Problems" },
  { path: "/faqs", label: "FAQs" },
];

function Menu({ isMobile, isOpen, onClose }: MenuProps) {
  return (
    <div className="">
      {/* Hamburger Button */}
      <MagneticBtn className="z-100 absolute">
        <motion.button
          onClick={onClose}
          className={` flex flex-col items-center justify-center w-(--space-xl) aspect-square gap-y-[2px] pixel-corners-s ${
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
            className={`z-99 absolute top-full right-0 mt-(--space-s)  w-fit bg-black pixel-corners-s shadow-lg
              ${
                isMobile
                  ? "!top-0 pt-(--space-xl) translate-x-(--space-m) -translate-y-(--space-s) !mt-0"
                  : ""
              }`}
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={springPresets.medium}
          >
            <div
              className={`flex flex-col m-(--space-3xs) gap-y-(--space-3xs)
                ${
                  isMobile
                    ? "w-[calc(100vw-var(--space-m))] pt-(--space-l)"
                    : ""
                }`}
            >
              {menuLinks.map((link, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ ...springPresets.medium, delay: i * 0.1 }}
                >
                  <Link
                    href={link.path}
                    className="flex px-(--space-s) pr-(--space-2xl) py-(--space-2xs) text-0 pixel-corners-s hover:bg-green/40 transition-colors text-white/90 hover:text-white"
                    onClick={onClose}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
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
            animate={{ opacity: 0.3 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleMenuToggle}
          />
        )}
      </AnimatePresence>

      <nav
        className={`max-w-[1728px] w-full justify-self-center flex flex-row items-center justify-between px-(--space-m) py-(--space-s) z-100
          ${
            isMobile
              ? "fixed h-(--space-xl) p-0 mx-(--space-m) my-(--space-s)"
              : ""
          } `}
      >
        {/* logo part */}
        <div
          className={`
            ${
              isMobile ? "absolute h-(--space-xl) z-100" : ""
            } flex flex-row items-center`}
        >
          <button>
            <Link href="/" className="text-1 font-bold">
              <div>SOS14</div>
            </Link>
          </button>
        </div>

        <div className="relative flex justify-end">
          {/* Desktop Menu */}
          <AnimatePresence mode="wait">
            {!isMobile && (
              <motion.div
                className="flex flex-row items-center gap-x-(--space-xl)"
                key={`desktop-${scrolled}`}
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ ...springPresets.soft, duration: 0.3 }}
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

          {/* Mobile Menu */}
          <AnimatePresence mode="wait">
            {useMenu && (
              <motion.div
                className="fixed right-(--space-m) top-(--space-s) z-50"
                initial={{ opacity: 0, scale: 0.8, y: -10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: -10 }}
                transition={{ ...springPresets.soft, duration: 0.2 }}
              >
                <Menu
                  isMobile={isMobile}
                  isOpen={isMenuOpen}
                  onClose={handleMenuToggle}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
      <div ref={navRef} className="h-0" />
    </header>
  );
}
