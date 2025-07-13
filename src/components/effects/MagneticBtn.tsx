"use client";
import { ReactNode, useRef, useState, MouseEvent } from "react";
import { motion } from "framer-motion";

interface MagneticBtnProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}
export default function MagneticBtn({
  children,
  className = "",
  onClick,
}: MagneticBtnProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { width, height, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX, y: middleY });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.div
      ref={ref}
      className={className}
      onClick={onClick}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={position}
      transition={{
        type: "spring",
        bounce: 0.2,
        damping: 40,
        mass: 0.5,
      }}
      style={{ position: "relative" }}
    >
      {children}
    </motion.div>
  );
}
