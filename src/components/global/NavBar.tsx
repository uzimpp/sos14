"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function NavBar() {
  const [useMenu, setUseMenu] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getMaxWidth = () => {
    return window.innerWidth <= 768 ? setUseMenu(true) : setUseMenu(false);
  };

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    getMaxWidth();
    window.addEventListener("resize", getMaxWidth);
    return () => window.removeEventListener("resize", getMaxWidth);
  }, []);

  return (
    <nav className="max-w-[1728px] w-full justify-self-center flex flex-row items-center justify-between px-(--space-m) py-(--space-s)">
      {/* logo part */}
      <div className="flex flex-row items-center gap-4">
        <button>
          <Link href="/" className="text-1 font-bold">
            <div>SOS14</div>
          </Link>
        </button>
      </div>

      {useMenu ? (
        /* Mobile Menu */
        <div className="relative">
          {/* Hamburger Button */}
          <button
            onClick={handleClick}
            className="flex flex-col justify-center items-center w-8 h-8 space-y-1"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-current transition-all duration-300 ${
                isMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </button>

          {/* Mobile Menu Dropdown */}
          {isMenuOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-[#18141c] border border-green/20 pixel-corners-s shadow-lg z-50">
              <div className="flex flex-col py-2">
                <Link
                  href="/"
                  className="px-4 py-2 text-0 hover:bg-green/10 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  href="/#agenda"
                  className="px-4 py-2 text-0 hover:bg-green/10 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Agenda
                </Link>
                <Link
                  href="/problems"
                  className="px-4 py-2 text-0 hover:bg-green/10 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Problems
                </Link>
                <Link
                  href="/faqs"
                  className="px-4 py-2 text-0 hover:bg-green/10 transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  FAQs
                </Link>
              </div>
            </div>
          )}
        </div>
      ) : (
        /* Desktop Nav links */
        <div className="flex flex-row items-center gap-x-(--space-xl)">
          <button>
            <Link href="/" className="text-0">
              Home
            </Link>
          </button>
          <button>
            <Link href="/#agenda" className="text-0">
              Agenda
            </Link>
          </button>
          <button>
            <Link href="/problems?day=0" className="text-0">
              Problems
            </Link>
          </button>
          <button>
            <Link href="/faqs" className="text-0">
              FAQs
            </Link>
          </button>
        </div>
      )}
    </nav>
  );
}
