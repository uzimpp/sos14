import Link from "next/link";

export default function Footer() {
  return (
    <div className="p-6 flex flex-col gap-4">
      {/* section 2 */}
      <div className="flex flex-row items-center justify-between">
        {/* title part */}
        <Link href="/" className="large-title bold text-green">
          SOS14
        </Link>
        {/* link part */}
        <div className="flex flex-row gap-6">
          <div className="flex flex-col gap-2">
            <Link href="/" className="text--1 bold">
              Home
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link href="/#agenda" className="text--1 bold">
              Agenda
            </Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link href="/problems" className="text--1 bold">
              Problems
            </Link>
            <div className="flex flex-col gap-1">
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
          <div className="flex flex-col gap-2">
            <Link href="/faqs" className="text--1 bold">
              FAQ's
            </Link>
            <div className="flex flex-col gap-1">
              <Link href="/faqs/about-ske" className="text--1">
                About SKE
              </Link>
              <Link href="/faqs/about-sos-camp" className="text--1">
                About SOS Camp
              </Link>
              <Link href="/faqs/programming" className="text--1">
                Programming
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text--1 bold">Contact</p>
            <div className="flex flex-col gap-1">
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
      <div className="flex flex-row items-center justify-between">
        {/* Credit part */}
        <p className="text--1">
          Made with <span className="text-pink">Heart</span> by the SOS14 Camp
          team
          <br />© 2025 All rights reserved.
        </p>
        {/* morse code part */}
        <div className="flex flex-row items-center gap-4 opacity-14">
          <div className="flex flex-row items-center gap-4">
            <div className="flex flex-row items-center gap-2">
              <div className="w-5 h-5 bg-white rounded-full"></div>
              <div className="w-5 h-5 bg-white rounded-full"></div>
              <div className="w-5 h-5 bg-white rounded-full"></div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-8 h-5 bg-white rounded-full"></div>
              <div className="w-8 h-5 bg-white rounded-full"></div>
              <div className="w-8 h-5 bg-white rounded-full"></div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-5 h-5 bg-white rounded-full"></div>
              <div className="w-5 h-5 bg-white rounded-full"></div>
              <div className="w-5 h-5 bg-white rounded-full"></div>
            </div>
          </div>
          <p className="text-3 bold">14</p>
        </div>
      </div>
    </div>
  );
}
