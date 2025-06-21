"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import MagneticBtn from "@/components/effects/MagneticBtn";
import GameBtn from "@/components/ui/GameBtn";

export function AB() {
  return (
    <div className="flex flex-col gap-y-(--space-m)">
      <GameBtn
        className="relative w-[var(--space-2xl)] aspect-[96/107] justify-end"
        nonclicked="/game/AB/A.svg"
        clicked="/game/AB/clicked-A.svg"
        alt="A"
      />
      <GameBtn
        className="relative w-[var(--space-2xl)] aspect-[96/107] justify-end"
        nonclicked="/game/AB/B.svg"
        clicked="/game/AB/clicked-B.svg"
        alt="B"
      />
    </div>
  );
}

export function Skill() {
  return (
    <div className="flex flex-row items-center">
      <GameBtn
        className="relative w-[var(--space-2xl)] aspect-[96/107] justify-end"
        nonclicked="/game/skill/skill.svg"
        clicked="/game/skill/clicked-skill.svg"
        alt="skill"
      />
      <div className="flex flex-col gap-y-(--space-m)">
        <GameBtn
          className="relative w-[var(--space-2xl)] aspect-[96/107] justify-end"
          nonclicked="/game/skill/skill.svg"
          clicked="/game/skill/clicked-skill.svg"
          alt="skill"
        />
        <GameBtn
          className="relative w-[var(--space-2xl)] aspect-[96/107] justify-end"
          nonclicked="/game/skill/skill.svg"
          clicked="/game/skill/clicked-skill.svg"
          alt="skill"
        />
      </div>
      <GameBtn
        className="relative w-[var(--space-2xl)] aspect-[96/107] justify-end"
        nonclicked="/game/skill/skill.svg"
        clicked="/game/skill/clicked-skill.svg"
        alt="skill"
      />
    </div>
  );
}

export function Joystick() {
  return (
    <div className="flex flex-row h-full items-center gap-x-(--space-s)">
      <div className="relative h-(--space-xl) aspect-[1/2]">
        <Image
          src="/game/joystick/left.svg"
          alt="left"
          fill
          className="object-contain"
        />
      </div>
      <div className="flex flex-col items-center gap-y-(--space-s)">
        <div className="relative w-(--space-xl) aspect-[2/1]">
          <Image
            src="/game/joystick/up.svg"
            alt="up"
            fill
            className="object-contain"
          />
        </div>
        {/* stick */}
        <div className="relative w-[var(--space-2xl)] h-[var(--space-2xl)]">
          <div className="w-[var(--space-2xl)] h-[var(--space-2xl)] absolute z-0">
            <Image
              src="/game/joystick/base.svg"
              alt="base"
              fill
              className="object-contain"
            />
          </div>
          <MagneticBtn className="w-[var(--space-2xl)] h-[var(--space-2xl)] z-10">
            <Image
              src="/game/joystick/joystick.svg"
              alt="joystick"
              fill
              className="object-contain"
            />
          </MagneticBtn>
        </div>
        <div className="relative w-(--space-xl) aspect-[2/1]">
          <Image
            src="/game/joystick/down.svg"
            alt="down"
            fill
            className="object-contain"
          />
        </div>
      </div>
      <div className="relative h-(--space-xl) aspect-[1/2]">
        <Image
          src="/game/joystick/right.svg"
          alt="right"
          fill
          className="object-contain"
        />
      </div>
    </div>
  );
}

export function Inserter() {
  const [isInserting, setisInserting] = useState(false);

  function handleClick() {
    setisInserting(true);
  }

  return (
    <div className="flex h-full items-center">
      <div className="relative w-[calc(var(--space-2xl)*74/96)] h-[calc(var(--space-2xl)*192/96)]">
        <div className="absolute w-[calc(var(--space-2xl)*74/96)] h-[calc(var(--space-2xl)*192/96)] z-0">
          <Image
            src="/game/inserter/inserter-base.svg"
            alt="insert"
            fill
            className="object-contain"
          />
        </div>

        <button
          className="w-[calc(var(--space-2xl)*74/96)] h-[calc(var(--space-2xl)*192/96)] z-10"
          onClick={handleClick}
        >
          <Image
            src="/game/inserter/inserter-mask.svg"
            alt="insert"
            fill
            className="object-contain"
          />
        </button>
        {isInserting ? (
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <div className="relative w-[calc(var(--space-2xl)*30/96)] h-[calc(var(--space-2xl)*104/96)]">
              <Image
                src="/game/coin.svg"
                alt="coin"
                fill
                className="object-contain"
              />
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default function Game() {
  return (
    <div className="flex flex-row justify-between">
      {/* Left */}
      <div className="flex flex-row gap-x-(--space-m)">
        <AB />
        <Joystick />
      </div>
      {/* Right */}
      <div className="flex flex-row gap-x-(--space-m)">
        <Skill />
        <Inserter />
      </div>
    </div>
  );
}
