import Image from "next/image";

export default function Game() {
  return (
    <div className="flex flex-row justify-between">
      {/* Left */}
      <div className="flex flex-row">
        {/* A B btn */}
        <div className="flex flex-col gap-y-(--space-m)">
          <button className="relative w-[var(--space-2xl)] h-[var(--space-2xl)]">
            <Image
              src="/footer/btn-A.svg"
              alt="A"
              fill
              className="object-cover"
            />
          </button>
          <button className="relative w-[var(--space-2xl)] h-[var(--space-2xl)]">
            <Image
              src="/footer/btn-b.svg"
              alt="b"
              fill
              className="object-contain"
            />
          </button>
        </div>
        {/* JoyStick */}
        <div className="flex h-full items-center">
          <button className="relative w-[var(--space-2xl)] h-[var(--space-2xl)]">
            <Image
              src="/footer/stick.svg"
              alt="joystick"
              fill
              className="object-contain"
            />
          </button>
        </div>
      </div>
      {/* Right */}
      <div className="flex flex-row">
        {/* Skills btn */}
        <div className="flex flex-row items-center">
          <button className="relative w-[var(--space-2xl)] h-[var(--space-2xl)]">
            <Image
              src="/footer/skill.svg"
              alt="skill"
              fill
              className="object-contain"
            />
          </button>
          <div className="flex flex-col gap-y-(--space-m)">
            <button className="relative w-[var(--space-2xl)] h-[var(--space-2xl)]">
              <Image
                src="/footer/skill.svg"
                alt="skill"
                fill
                className="object-contain"
              />
            </button>
            <button className="relative w-[var(--space-2xl)] h-[var(--space-2xl)]">
              <Image
                src="/footer/skill.svg"
                alt="skill"
                fill
                className="object-contain"
              />
            </button>
          </div>
          <button className="relative w-[var(--space-2xl)] h-[var(--space-2xl)]">
            <Image
              src="/footer/skill.svg"
              alt="skill"
              fill
              className="object-contain"
            />
          </button>
        </div>
        <div>
          <button></button>
        </div>
      </div>
    </div>
  );
}
