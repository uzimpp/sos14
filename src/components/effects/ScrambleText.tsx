"use client";

import React, { useEffect, useRef, useState } from "react";

interface ScrambleTextProps {
  children: React.ReactNode;
  className?: string;
  defaultText?: string;
  totalFrames?: number;
}

interface ScrambledSpan {
  element: HTMLSpanElement;
  originalChar: string;
  className?: string;
}

interface ScrambleElementProps {
  className?: string;
  children?: React.ReactNode;
  [key: string]: any;
}

export default function ScrambleText({
  children,
  className = "",
  defaultText = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
  totalFrames = 10,
}: ScrambleTextProps) {
  const elementRef = useRef<HTMLHeadingElement>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const idxRef = useRef(0);
  const frameRef = useRef(0);
  const animationRef = useRef<number>(0);
  const spansRef = useRef<ScrambledSpan[]>([]);
  const splitted = defaultText.split("");

  useEffect(() => {
    if (!elementRef.current) return;

    const tempSpans: ScrambledSpan[] = [];
    elementRef.current.innerHTML = "";

    const processChild = (
      child: React.ReactNode,
      inheritedClassName?: string
    ) => {
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
            if (inheritedClassName) {
              span.className = inheritedClassName;
            }
            elementRef.current?.appendChild(span);
            tempSpans.push({
              element: span,
              originalChar: char,
              className: inheritedClassName,
            });
          }
        });
      } else if (
        typeof child === "object" &&
        child !== null &&
        "type" in child &&
        "props" in child
      ) {
        const element = child as React.ReactElement<ScrambleElementProps>;

        if (element.type === "br") {
          elementRef.current?.appendChild(document.createElement("br"));
        } else if (
          typeof element.props === "object" &&
          element.props !== null &&
          "children" in element.props
        ) {
          let newClassName = inheritedClassName;
          if (element.type === "span" && element.props.className) {
            newClassName = inheritedClassName
              ? `${inheritedClassName} ${element.props.className}`
              : element.props.className;
          }

          processChild(
            (element.props as { children: React.ReactNode }).children,
            newClassName
          );
        }
      } else if (Array.isArray(child)) {
        child.forEach((item) => processChild(item, inheritedClassName));
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
              splitted[Math.floor(Math.random() * splitted.length)];
          }

          if (frameRef.current % totalFrames === 0 && frameRef.current !== 0) {
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
  }, [isIntersecting, splitted, totalFrames]);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        display: "flex",
        minWidth: "fit-content",
        position: "relative",
      }}
    >
      {children}
    </div>
  );
}
