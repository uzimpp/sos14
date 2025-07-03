import { useState, ReactNode } from "react";

interface DropdownBtnProps {
  label: string;
  children?: ReactNode; // dropdown content (menu items)
  className?: string;
}

export default function DropdownBtn({
  label,
  children,
  className = "",
}: DropdownBtnProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
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
        <div className="absolute left-0 mt-2 min-w-full z-10 pixel-corners-s bg-black">
          {children}
        </div>
      )}
    </div>
  );
}
