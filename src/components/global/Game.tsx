"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import MagneticBtn from "@/components/effects/MagneticBtn";
import GameBtn from "@/components/ui/GameBtn";

export function AB() {
  return (
    <div className="flex flex-col gap-y-(--space-xs-m)">
      <GameBtn
        className="relative w-(--space-l-2xl) aspect-[96/107] justify-end"
        nonclicked="/assets/game/AB/A.svg"
        clicked="/assets/game/AB/clicked-A.svg"
        alt="A"
      />
      <GameBtn
        className="relative w-(--space-l-2xl) aspect-[96/107] justify-end"
        nonclicked="/assets/game/AB/B.svg"
        clicked="/assets/game/AB/clicked-B.svg"
        alt="B"
      />
    </div>
  );
}

export function Skill() {
  return (
    <div className="flex flex-row items-center">
      <GameBtn
        className="relative w-(--space-l-2xl) aspect-[96/107] justify-end"
        nonclicked="/assets/game/skill/skill.svg"
        clicked="/assets/game/skill/clicked-skill.svg"
        alt="skill"
      />
      <div className="flex flex-col gap-y-(--space-xs-m)">
        <GameBtn
          className="relative w-(--space-l-2xl) aspect-[96/107] justify-end"
          nonclicked="/assets/game/skill/skill.svg"
          clicked="/assets/game/skill/clicked-skill.svg"
          alt="skill"
        />
        <GameBtn
          className="relative w-(--space-l-2xl) aspect-[96/107] justify-end"
          nonclicked="/assets/game/skill/skill.svg"
          clicked="/assets/game/skill/clicked-skill.svg"
          alt="skill"
        />
      </div>
      <GameBtn
        className="relative w-(--space-l-2xl) aspect-[96/107] justify-end"
        nonclicked="/assets/game/skill/skill.svg"
        clicked="/assets/game/skill/clicked-skill.svg"
        alt="skill"
      />
    </div>
  );
}

export function Joystick() {
  return (
    <div className="flex flex-row h-full items-center gap-x-(--space-2xs-s)">
      <div className="relative h-(--space-m-xl) aspect-[1/2]">
        <Image
          src="/assets/game/joystick/left.svg"
          alt="left"
          fill
          className="object-contain"
        />
      </div>
      <div className="flex flex-col items-center gap-y-(--space-2xs-s)">
        <div className="relative w-(--space-m-xl) aspect-[2/1]">
          <Image
            src="/assets/game/joystick/up.svg"
            alt="up"
            fill
            className="object-contain"
          />
        </div>
        {/* stick */}
        <div className="relative w-(--space-l-2xl) h-(--space-l-2xl)">
          <div className="w-(--space-l-2xl) h-(--space-l-2xl) absolute z-0">
            <Image
              src="/assets/game/joystick/base.svg"
              alt="base"
              fill
              className="object-contain"
            />
          </div>
          <MagneticBtn className="w-(--space-l-2xl) h-(--space-l-2xl) z-10">
            <Image
              src="/assets/game/joystick/joystick.svg"
              alt="joystick"
              fill
              className="object-contain"
            />
          </MagneticBtn>
        </div>
        <div className="relative w-(--space-m-xl) aspect-[2/1]">
          <Image
            src="/assets/game/joystick/down.svg"
            alt="down"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="relative h-(--space-m-xl) aspect-[1/2]">
        <Image
          src="/assets/game/joystick/right.svg"
          alt="right"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}

export function Inserter() {
  const [isAnimating, setIsAnimating] = useState(false);
  const [coinZIndex, setCoinZIndex] = useState(50);

  function handleClick() {
    setIsAnimating(true);
    setCoinZIndex(50); // Start above everything
  }

  useEffect(() => {
    if (isAnimating) {
      // After 1.2s, move coin behind the mask
      const zIndexTimer = setTimeout(() => {
        setCoinZIndex(1);
      }, 1200);

      // After 2s, stop animation
      const animationTimer = setTimeout(() => {
        setIsAnimating(false);
      }, 2000);

      return () => {
        clearTimeout(zIndexTimer);
        clearTimeout(animationTimer);
      };
    }
  }, [isAnimating]);

  return (
    <div className="flex h-full items-center">
      <div className="relative w-[calc(var(--space-l-2xl)*74/96)] h-[calc(var(--space-l-2xl)*192/96)]">
        <div className="absolute w-[calc(var(--space-l-2xl)*74/96)] h-[calc(var(--space-l-2xl)*192/96)] z-0">
          <Image
            src="/assets/game/inserter/inserter-base.svg"
            alt="insert"
            fill
            className="object-contain"
          />
        </div>
        <button
          className="absolute w-[calc(var(--space-l-2xl)*74/96)] h-[calc(var(--space-l-2xl)*192/96)] z-10"
          onClick={handleClick}
        >
          <Image
            src="/assets/game/inserter/inserter-mask.svg"
            alt="insert"
            fill
            className="object-contain"
          />
        </button>
        {isAnimating && (
          <div
            className="absolute inset-0 flex items-center justify-center animate-coin-insert"
            style={{ zIndex: coinZIndex }}
          >
            <div className="relative w-[calc(var(--space-l-2xl)*30/96)] h-[calc(var(--space-l-2xl)*104/96)]">
              <Image
                src="/assets/game/coin.svg"
                alt="coin"
                fill
                className="object-contain"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Game() {
  return (
    <div className="flex flex-row md:justify-between justify-center gap-x-(--space-2xl)">
      {/* Left */}
      <div className="flex flex-row gap-x-(--space-s-l)">
        <AB />
        <Joystick />
      </div>
      {/* Right */}
      <div className="flex flex-row gap-x-(--space-s-m)">
        <Skill />
        <Inserter />
      </div>
    </div>
  );
}
