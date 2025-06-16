"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrambleTextProps {
  children: React.ReactNode;
  className?: string;
}

interface ScrambledSpan {
  element: HTMLSpanElement;
  originalChar: string;
}

const specialChars = '!@£$%&}{":;?><][+=-_qwertyuiopasdfghjklzxcvbnm'.split("");

export default function ScrambleText({
  children,
  className = "",
}: ScrambleTextProps) {
  const elementRef = useRef<HTMLHeadingElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const idxRef = useRef(0);
  const frameRef = useRef(0);
  const animationRef = useRef<number>(0);
  const spansRef = useRef<ScrambledSpan[]>([]);

  useEffect(() => {
    if (!elementRef.current) return;

    const tempSpans: ScrambledSpan[] = [];
    elementRef.current.innerHTML = "";

    const processChild = (child: React.ReactNode) => {
      if (!elementRef.current) return;

      if (typeof child === "string") {
        const lines = child.split("\n");
        lines.forEach((line, lineIndex) => {
          if (lineIndex > 0) {
            elementRef.current?.appendChild(document.createElement("br"));
          }
          for (let i = 0; i < line.length; i++) {
            const char = line[i];
            const span = document.createElement("span");
            span.textContent = char;
            span.style.opacity = "0";
            span.style.transform = "translateX(-10px)";
            span.style.display = "inline-block";
            elementRef.current?.appendChild(span);
            tempSpans.push({ element: span, originalChar: char });
          }
        });
      } else if (React.isValidElement(child)) {
        if (child.type === "br") {
          elementRef.current?.appendChild(document.createElement("br"));
        } else if (
          typeof child.props === "object" &&
          child.props !== null &&
          "children" in child.props
        ) {
          processChild((child.props as { children: React.ReactNode }).children);
        }
      } else if (Array.isArray(child)) {
        child.forEach(processChild);
      }
    };

    processChild(children);

    spansRef.current = tempSpans;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsIntersecting(entry.isIntersecting);
        });
      },
      { threshold: 0 }
    );

    observer.observe(elementRef.current);

    return () => {
      observer.disconnect();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [children]);

  useEffect(() => {
    if (!elementRef.current) return;

    const animate = () => {
      if (idxRef.current < spansRef.current.length && isIntersecting) {
        const scrambledSpan = spansRef.current[idxRef.current];
        const span = scrambledSpan.element;
        if (span) {
          span.style.opacity = "1";
          span.style.transform = "translateX(0)";

          if (frameRef.current % 3 === 0 && span.textContent !== " ") {
            span.textContent =
              specialChars[Math.floor(Math.random() * specialChars.length)];
          }

          if (frameRef.current % 20 === 0 && frameRef.current !== 0) {
            span.textContent = scrambledSpan.originalChar;
            idxRef.current++;
          }

          frameRef.current++;
          animationRef.current = requestAnimationFrame(animate);
        }
      }
    };

    if (isIntersecting) {
      idxRef.current = 0;
      frameRef.current = 0;
      animate();
    } else {
      // Reset animation
      idxRef.current = 0;
      frameRef.current = 0;
      spansRef.current.forEach((scrambledSpan) => {
        const span = scrambledSpan.element;
        span.style.opacity = "0";
        span.style.transform = "translateX(-10px)";
        span.textContent = scrambledSpan.originalChar;
      });
    }

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isIntersecting]);

  return (
    <div ref={elementRef} className={className} style={{ display: "flex" }}>
      {children}
    </div>
  );
}
