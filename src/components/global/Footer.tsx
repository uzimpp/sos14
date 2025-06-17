import Link from "next/link";
import ScrambleText from "@/components/effects/ScrambleText";

export default function Footer() {
  return (
    <footer className="max-w-[1728px] w-full justify-self-center flex flex-col gap-(--space-m) px-(--space-m) py-(--space-s)">
      {/* section 2 */}
      <div className="flex flex-col items-center justify-center md:justify-between md:flex-row gap-y-(--space-m) gap-x-(--space-m)">
        {/* title part */}
        <Link href="/" className="large-title font-bold text-green">
          <ScrambleText>SOS14</ScrambleText>
        </Link>
        {/* link part */}
        <div className="flex flex-row w-full justify-center gap-x-(--space-m) gap-y-(--space-m) md:justify-end">
          <div className="flex flex-col gap-(--space-3xs)">
            <Link href="/" className="text--1 font-bold">
              Home
            </Link>
            <div className="flex flex-col gap-(--space-4xs)">
              <Link href="/#agenda" className="text--1">
                Agenda
              </Link>
              <Link href="/#location" className="text--1">
                Location
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-(--space-3xs)">
            <Link href="/problems" className="text--1 font-bold">
              Problems
            </Link>
            <div className="flex flex-col gap-(--space-4xs)">
              <Link href="/problems/day1" className="text--1">
                Day 1
              </Link>
              <Link href="/problems/day2" className="text--1">
                Day 2
              </Link>
              <Link href="/problems/day3" className="text--1">
                Day 3
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-(--space-3xs)">
            <Link href="/faqs" className="text--1 font-bold">
              FAQ's
            </Link>
            <div className="flex flex-col gap-(--space-4xs)">
              <Link href="/faqs#AboutSKE" className="text--1">
                About SKE
              </Link>
              <Link href="/faqs#AboutSOScamp" className="text--1">
                SOS Camp
              </Link>
              <Link href="/faqs#Programming" className="text--1">
                Programming
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-(--space-3xs)">
            <p className="text--1 font-bold">Contact</p>
            <div className="flex flex-col gap-(--space-4xs)">
              <Link
                href="https://www.instagram.com/sos14.camp/"
                className="text--1"
              >
                Instagram
              </Link>
              <Link href="https://discord.gg/sos14" className="text--1">
                Discord
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* section 3 */}
      <div className="flex flex-col items-center justify-center md:justify-between md:flex-row">
        {/* Credit part */}
        <p className="text--1 text-center md:text-left">
          Made with <span className="text-pink">Heart</span> by the SOS14 Camp
          team
          <br />© 2025 All rights reserved.
        </p>
        {/* morse code part */}
        <div className="flex flex-row items-center gap-4 opacity-14">
          <div className="flex flex-row items-center gap-4">
            <div className="flex flex-row items-center gap-(--space-xs)">
              <div className="w-5 h-5 bg-white rounded-full"></div>
              <div className="w-5 h-5 bg-white rounded-full"></div>
              <div className="w-5 h-5 bg-white rounded-full"></div>
            </div>
            <div className="flex flex-row items-center gap-(--space-xs)">
              <div className="w-8 h-5 bg-white rounded-full"></div>
              <div className="w-8 h-5 bg-white rounded-full"></div>
              <div className="w-8 h-5 bg-white rounded-full"></div>
            </div>
            <div className="flex flex-row items-center gap-(--space-xs)">
              <div className="w-5 h-5 bg-white rounded-full"></div>
              <div className="w-5 h-5 bg-white rounded-full"></div>
              <div className="w-5 h-5 bg-white rounded-full"></div>
            </div>
          </div>
          <p className="text-3 font-bold">14</p>
        </div>
      </div>
    </footer>
  );
}
