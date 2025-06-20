import Image from "next/image";
import MagneticBtn from "@/components/effects/MagneticBtn";

export function Skill() {
  return (
    <div className="flex flex-row items-center">
      <button className="relative w-[var(--space-2xl)] h-[var(--space-2xl)]">
        <Image
          src="/game/skill/skill.svg"
          alt="skill"
          fill
          className="object-contain"
        />
      </button>
      <div className="flex flex-col gap-y-(--space-m)">
        <button className="relative w-[var(--space-2xl)] h-[var(--space-2xl)]">
          <Image
            src="/game/skill/skill.svg"
            alt="skill"
            fill
            className="object-contain"
          />
        </button>
        <button className="relative w-[var(--space-2xl)] h-[var(--space-2xl)]">
          <Image
            src="/game/skill/skill.svg"
            alt="skill"
            fill
            className="object-contain"
          />
        </button>
      </div>
      <button className="relative w-[var(--space-2xl)] h-[var(--space-2xl)]">
        <Image
          src="/game/skill/skill.svg"
          alt="skill"
          fill
          className="object-contain"
        />
      </button>
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
        <div className="relative w-[var(--space-2xl)] h-[var(--space-2xl)] ">
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
              className="object-cover"
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
  return (
    <div className="flex h-full items-center">
      <button className="relative w-[calc(var(--space-2xl)/(96/74))] aspect-[74/192]">
        <Image
          src="/game/inserter/inserter-base.svg"
          alt="insert"
          fill
          className="object-contain"
        />
      </button>
    </div>
  );
}
export default function Game() {
  return (
    <div className="flex flex-row justify-between">
      {/* Left */}
      <div className="flex flex-row gap-x-(--space-m)">
        {/* A B btn */}
        <div className="flex flex-col gap-y-(--space-m)">
          <button className="relative w-[var(--space-2xl)] h-[var(--space-2xl)]">
            <Image src="/game/AB/A.svg" alt="A" fill className="object-cover" />
          </button>
          <button className="relative w-[var(--space-2xl)] h-[var(--space-2xl)]">
            <Image
              src="/game/AB/B.svg"
              alt="B"
              fill
              className="object-contain"
            />
          </button>
        </div>
        {/* JoyStick */}
        <Joystick />
      </div>
      {/* Right */}
      <div className="flex flex-row gap-x-(--space-m)">
        {/* Skills btn */}
        <Skill />
        <Inserter />
      </div>
    </div>
  );
}
