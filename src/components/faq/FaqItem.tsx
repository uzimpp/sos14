"use client";

import { useState } from "react";
interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="border-b border-white/20 px-(--space-xs)"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex justify-between items-center cursor-pointer py-4">
        <h6
          className={`text-0 font-semibold transition-all duration-100 elastic ${
            isOpen ? "text-green" : "text-white"
          }`}
        >
          {question}
        </h6>
        <button className="text-0">
          <div
            className={`font-semibold transition-all duration-100 elastic ${
              isOpen ? "rotate-90 text-green" : "text-white"
            }`}
          >
            &gt;
          </div>
        </button>
      </div>
      {isOpen && (
        <p className="mb-(--space-m) mx-(--space-xs) text-white/80 text-base leading-relaxed">
          {answer}
        </p>
      )}
    </div>
  );
}
