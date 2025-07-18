import { ReactNode } from "react";

interface TooltipProps {
  label: ReactNode;
  tooltip: string;
  className?: string
}

export default function Tooltip({ label, tooltip, className="" }: TooltipProps) {
  return (
    <div className={`relative group ${className}`}>
      {label}
      <div className="absolute z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text--1 bg-zinc-800 px-2 py-1 rounded left-1/2 -translate-x-1/2 top-full mt-1 whitespace-nowrap pointer-events-none">
        {tooltip}
      </div>
    </div>
  );
}
