import Link from "next/link";
import ScrambleText from "@/components/effects/ScrambleText";
import Game from "./Game";

export default function Footer() {
  return (
    <footer className="max-w-[1728px] w-full justify-self-center flex flex-col gap-(--space-m) px-(--space-m) py-(--space-s)">
      <div className="flex md:flex-col flex-col-reverse gap-(--space-m) mt-(--space-s) ">
        {/* section 1 */}
        <div className="">
          <Game />
        </div>
        {/* section 2 */}
        <div className="flex flex-col items-center justify-center md:justify-between md:flex-row gap-y-(--space-m) gap-x-(--space-m)">
          {/* title part */}
          <Link href="/" className="large-title font-bold text-green">
            <ScrambleText>
              <span className="glow glow-green">SOS14</span>
            </ScrambleText>
          </Link>
          {/* link part */}
          <div className="flex flex-row w-full justify-center gap-x-(--space-m-l) gap-y-(--space-m) md:justify-end">
            <div className="flex flex-col gap-(--space-2xs)">
              <Link href="/" className="text--1 font-bold">
                Home
              </Link>
              <div className="flex flex-col gap-(--space-4xs)">
                <Link href="/#agenda" className="text--1">
                  Agenda
                </Link>
                <Link href="/ske888" className="text--1">
                  SKE888
                </Link>
              </div>
              {/* <Link href="/#agenda" className="text--1 font-bold">
                Agenda
              </Link>
              <Link href="/problems" className="text--1 font-bold">
                Problems
              </Link> */}
            </div>
            <div className="flex flex-col gap-(--space-2xs)">
              <Link href="/problems?day=0" className="text--1 font-bold">
                Problems
              </Link>
              <div className="flex flex-col gap-(--space-4xs)">
                <Link href="/problems?day=1" className="text--1">
                  Day 1
                </Link>
                <Link href="/problems?day=2" className="text--1">
                  Day 2
                </Link>
                <Link href="/problems?day=3" className="text--1">
                  Day 3
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-(--space-2xs)">
              <Link href="/faqs" className="text--1 font-bold">
                FAQs
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
            <div className="flex flex-col gap-(--space-2xs)">
              <p className="text--1 font-bold">Connect</p>
              <div className="flex flex-col gap-(--space-4xs)">
                <Link
                  href="https://www.instagram.com/sos_camp14"
                  className="text--1"
                  target="_blank"
                >
                  Instagram
                </Link>
                {/* Should use the 7d link one */}
                <Link
                  href="https://discord.gg/nZAXbymw64"
                  className="text--1"
                  target="_blank"
                >
                  Discord
                </Link>
                <Link
                  href="https://github.com/uzimpp/sos14"
                  className="text--1"
                  target="_blank"
                >
                  Github
                </Link>
              </div>
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
          <br />
          <span className="font-sans">©</span>2025 SOS14. All rights reserved.
        </p>
        {/* morse code part */}
        <div className="flex flex-row items-center gap-(--space-s) opacity-14">
          <div className="flex flex-row items-center gap-(--space-xs-s)">
            <div className="flex flex-row items-center gap-(--space-2xs-xs)">
              <div className="w-(--space-s) h-(--space-s) bg-white rounded-full pixel-corners-xs"></div>
              <div className="w-(--space-s) h-(--space-s) bg-white rounded-full pixel-corners-xs"></div>
              <div className="w-(--space-s) h-(--space-s) bg-white rounded-full pixel-corners-xs"></div>
            </div>
            <div className="flex flex-row items-center gap-(--space-2xs-xs)">
              <div className="w-10 h-(--space-s) bg-white rounded-full pixel-corners-xs"></div>
              <div className="w-10 h-(--space-s) bg-white rounded-full pixel-corners-xs"></div>
              <div className="w-10 h-(--space-s) bg-white rounded-full pixel-corners-xs"></div>
            </div>
            <div className="flex flex-row items-center gap-(--space-2xs-xs)">
              <div className="w-(--space-s) h-(--space-s) bg-white rounded-full pixel-corners-xs"></div>
              <div className="w-(--space-s) h-(--space-s) bg-white rounded-full pixel-corners-xs"></div>
              <div className="w-(--space-s) h-(--space-s) bg-white rounded-full pixel-corners-xs"></div>
            </div>
          </div>
          <p className="text-3 font-bold">14</p>
        </div>
      </div>
    </footer>
  );
}
