"use client";

import { useState } from "react";
import Image from "next/image";

interface GameBtnProps {
  className?: string;
  nonclicked: string;
  clicked: string;
  alt: string;
  duration?: number;
}

export default function GameBtn({
  className = "",
  nonclicked = "",
  clicked = "",
  alt = "Button",
  duration = 200,
}: GameBtnProps) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(true);
    setTimeout(() => {
      setIsClicked(false);
    }, duration);
  }

  return (
    <button
      className={`relative elastic duration-75 ${className} ${
        isClicked ? "!opacity-80" : "!opacity-100"
      } hover:opacity-90`}
      onClick={handleClick}
    >
      <Image
        src={isClicked ? clicked : nonclicked}
        alt={alt}
        fill
        className="object-contain"
      />
    </button>
  );
}
