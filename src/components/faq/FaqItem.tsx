"use client";

import { useState, useRef } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);
  const answerDivRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border-b border-white/20">
      <div
        className="flex justify-between items-center cursor-pointer py-4 px-(--space-xs)"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`text-0 font-semibold transition-all duration-300 ${
            isOpen ? "text-green" : "text-white"
          }`}
        >
          {question}
        </div>
        <button className="text-0">
          <div
            className={`font-semibold transition-all duration-300 ${
              isOpen ? "rotate-90 text-green" : "text-white"
            }`}
          >
            &gt;
          </div>
        </button>
      </div>
      <div
        ref={answerDivRef}
        style={{
          maxHeight: isOpen ? `${answerDivRef.current?.scrollHeight}px` : "0px",
        }}
        className="overflow-hidden transition-all duration-500 elastic"
      >
        <div className="px-(--space-xs) pb-(--space-m)">
          <p
            className={`text-white/90 text-base leading-relaxed transition-all elastic duration-300 ${
              isOpen
                ? "opacity-100 translate-y-0 delay-150"
                : "opacity-0 translate-y-(--space-m)"
            }`}
          >
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}
