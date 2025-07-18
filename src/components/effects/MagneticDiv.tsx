"use client";
import { ReactNode, useRef, useState, MouseEvent } from "react";
import { motion, type Transition } from "framer-motion";

interface MagneticDivProps {
  transition?: Transition;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
}
export default function MagneticDiv({
  transition = {
    type: "spring",
    bounce: 0.1,
    damping: 40,
    mass: 5,
  },
  children,
  className = "",
  onClick,
}: MagneticDivProps) {
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
      transition={transition}
      style={{ position: "relative" }}
    >
      {children}
    </motion.div>
  );
}
