"use client";
import ScrambleText from "../effects/ScrambleText";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex-col-reverse">
      <div className="flex flex-col md:flex-row gap-x-(--space-l) justify-between mb-(--space-s) items-center">
        <motion.div
          className="inline-block md:justify-start text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <ScrambleText className="xl:text-12 md:text-[20vw] text-[30vw] font-bold text-green landing-title w-fit">
            <span className="glow glow-green-lg">SOS14</span>
          </ScrambleText>
        </motion.div>
        <motion.div
          className="flex"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
        >
          <p className="hidden sm:flex text--1 md:text-0 xl:text-1 md:text-left text-center text-white/60 text-balance">
            Welcome to the 14th SOS camp, a preparation camp for SKE23 students.
            We will take you through Python programming fundamentals
          </p>
        </motion.div>
      </div>
      {/* Bento grid part */}
      <div>
        <div className="grid grid-cols-2 grid-rows-4 md:grid-cols-4 md:grid-rows-4 lg:grid-cols-[1fr_1fr_1fr_1fr_1fr_auto] lg:grid-rows-3 gap-(--space-2xs-xs)">
          {/* Problem */}
          <div className="col-span-2 row-span-2 pixel-corners-s relative bg-[#33638C30] flex flex-col items-center justify-center p-(--space-m)">
            <div className="absolute w-[25%] bottom-[-10%] right-[-2%] -rotate-10">
              <Image
                src="/assets/landing/python.svg"
                alt="python"
                width={192}
                height={192}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="absolute w-[25%] top-[-3%] left-[-3%] rotate-8">
              <Image
                src="/assets/landing/python.svg"
                alt="python"
                width={192}
                height={192}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="relative pb-4">
              <h5 className="text-center font-semibold pb-1">Problems</h5>
              <p className="text-balance text--1 flex justify-center text-center text-white/60">
                A Python exercise introducing core programming concepts and
                syntax.
              </p>
            </div>
            <div className="flex flex-row gap-(--space-xs)">
              <Link
                href="/problems?day=1"
                className="text--1 px-(--space-m) py-(--space-2xs) bg-black/80 pixel-corners-xs"
              >
                Day 1
              </Link>
              <Link
                href="/problems?day=2"
                className="text--1 px-(--space-m) py-(--space-2xs) bg-black/80 pixel-corners-xs"
              >
                Day 2
              </Link>
              <Link
                href="/problems?day=3"
                className="text--1 px-(--space-m) py-(--space-2xs) bg-black/80 pixel-corners-xs"
              >
                Day 3
              </Link>
            </div>
          </div>
          {/* diamond */}
          <div className="hidden lg:block col-span-2 col-start-1 row-start-3 pixel-corners-s bg-[#ACC1FF25] relative">
            <div className="absolute w-[20%] bottom-[-15%] left-[-2%] rotate-5 opacity-75">
              <Image
                src="/assets/slot/diamond.svg"
                alt="diamond"
                width={150}
                height={125}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="absolute w-[20%] bottom-[-20%] left-[30%] rotate-15 opacity-75">
              <Image
                src="/assets/slot/diamond.svg"
                alt="diamond"
                width={150}
                height={125}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="absolute w-[20%] bottom-[-10%] left-[75%] -rotate-10 opacity-75">
              <Image
                src="/assets/slot/diamond.svg"
                alt="diamond"
                width={150}
                height={125}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="absolute w-[20%] top-[-20%] left-[50%] rotate-200 opacity-75">
              <Image
                src="/assets/slot/diamond.svg"
                alt="diamond"
                width={150}
                height={125}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
          {/* Agenda */}
          <Link
            href="/#agenda"
            className="col-span-2 row-start-3 row-end-4 md:col-start-3 md:row-start-1 md:row-end-2 pixel-corners-s bg-[#432125] relative overflow-hidden flex justify-center items-center"
          >
            <div className="absolute w-[25%] top-[-10%] left-[2%] rotate-23">
              <Image
                src="/assets/slot/cherry.svg"
                alt="cherry"
                width={150}
                height={125}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="absolute w-[25%] top-[10%] right-[5%] -rotate-27">
              <Image
                src="/assets/slot/cherry.svg"
                alt="cherry"
                width={150}
                height={125}
                className="w-full h-auto"
                priority
              />
            </div>
            <h5 className="font-semibold">Agenda</h5>
          </Link>
          {/* coins */}
          <div className="hidden md:block col-span-2 col-start-1 row-start-4 lg:col-start-3 lg:row-start-2 pixel-corners-s bg-[#D18D3925] relative">
            <div className="absolute w-[22%] bottom-[-10%] left-[4%] -rotate-15 opacity-75">
              <Image
                src="/assets/slot/coin.svg"
                alt="coin"
                width={150}
                height={125}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="absolute w-[23%] bottom-[-10%] left-[27%] rotate-5 opacity-75">
              <Image
                src="/assets/slot/coin.svg"
                alt="coin"
                width={150}
                height={125}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="absolute w-[23%] bottom-[-10%] right-[25%] -rotate-10 opacity-75">
              <Image
                src="/assets/slot/coin.svg"
                alt="coin"
                width={150}
                height={125}
                className="w-full h-auto"
                priority
              />
            </div>
            <div className="absolute w-[22%] bottom-[-10%] right-[2%] rotate-20 opacity-75">
              <Image
                src="/assets/slot/coin.svg"
                alt="coin"
                width={150}
                height={125}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
          {/* contact */}
          <div className="row-start-4 md:col-start-1 lg:col-start-3 md:row-start-3 pixel-corners-s bg-light-purple/70 flex flex-col justify-center items-center p-(--space-m)">
            <h6 className="flex justify-center text-left font-semibold pb-1">
              Contact
            </h6>
            <div className="flex flex-row gap-(--space-xs)">
              <Link href="https://www.instagram.com/sos_camp14" target="_blank">
                <Image
                  src="/assets/landing/instagram.svg"
                  alt="ig"
                  width={100}
                  height={100}
                  className={`w-(--space-m)`}
                  priority
                />
              </Link>
              <Link href="https://discord.gg/nZAXbymw64" target="_blank">
                <Image
                  src="/assets/landing/discord.svg"
                  alt="discord"
                  width={100}
                  height={100}
                  className={`w-(--space-m)`}
                  priority
                />
              </Link>
            </div>
          </div>
          {/* faqs */}
          <Link
            href="/faqs"
            className="col-start-1 row-start-4 md:col-start-2 lg:col-start-4 md:row-start-3 pixel-corners-s bg-[#FD68CE30] flex justify-center items-center p-(--space-m)"
          >
            <div className="flex justify-center text-left no_line_height">
              Frequently
              <br />
              Asked
              <br />
              Questions
            </div>
          </Link>
          {/* arcade */}
          <div className="hidden md:block md:row-span-3 md:col-start-3 md:row-start-2 col-span-2 lg:col-start-5 lg:row-start-1 pixel-corners-s bg-[#353435] items-center justify-center p-(--space-s)">
            <Image
              src="/assets/landing/arcade.svg"
              alt="arcade"
              width={38 * 100} // 38
              height={69 * 100} // 69
              className={`w-auto aspect-auto`}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
}
