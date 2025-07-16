"use client";

import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { springPresets } from "@/constants/Animation";
interface DropdownBtnProps {
  label: string;
  children?: ReactNode;
  className?: string;
}

export default function DropdownBtn({
  label,
  children,
  className = "",
}: DropdownBtnProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <AnimatePresence>
      <div className={`relative inline-block ${className}`}>
        <button
          type="button"
          onClick={() => setIsOpen((o) => !o)}
          className={`flex gap-x-(--space-xs) pixel-corners-s px-(--space-s) py-(--space-2xs) font-medium items-center transition-all duration-300
            ${isOpen ? " text-green" : "text-white "}`}
        >
          {label}{" "}
          <div
            className={`transition-all duration-300 h-fit w-fit text--1 font-bold ${
              isOpen ? "rotate-90 " : "-rotate-90"
            }`}
          >
            &gt;
          </div>
        </button>

        {isOpen && (
          <motion.div
            className="absolute z-50 rounded-2xl my_shadow "
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={springPresets.medium}
          >
            <div className="pixel-corners-s bg-black p-(--space-3xs) gap-y-(--space-3xs)">
              {children}
            </div>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
}
