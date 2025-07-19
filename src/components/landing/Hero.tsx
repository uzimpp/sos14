"use client";
import { springPresets } from "@/constants/Animation";
import ScrambleText from "../effects/ScrambleText";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import MagneticDiv from "../effects/MagneticDiv";

export default function Hero() {
  const MotionLink = motion.create(Link);
  return (
    <div className="flex flex-col w-full">
      <div className="flex flex-col md:flex-row gap-x-(--space-l) justify-between mb-(--space-s) items-center w-full">
        <AnimatePresence>
          <motion.div
            className="inline-block md:justify-start text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <ScrambleText className="xl:text-12 md:text-[20vw] text-[30vw] font-bold text-green landing-title w-fit">
              <span className="glow glow-green-lg">SOS14</span>
            </ScrambleText>
          </motion.div>
        </AnimatePresence>
        <div className="flex overflow-hidden">
          <motion.div
            className="flex"
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            <p className="hidden sm:flex text--1 md:text-0 xl:text-1 md:text-left text-center text-white/60 text-balance">
              Welcome to the 14th SOS camp, a preparation camp for SKE23
              students. We will take you through Python programming fundamentals
            </p>
          </motion.div>
        </div>
      </div>
      {/* Bento grid part */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeInOut" }}
        className="w-full grid grid-cols-2 grid-rows-4 md:grid-cols-4 md:grid-rows-4 lg:grid-cols-[1fr_1fr_1fr_1fr_1fr_auto] lg:grid-rows-3 gap-(--space-2xs-xs)"
      >
        {/* Problem */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 10 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { ...springPresets.medium, delay: 0.2 },
          }}
          whileHover={{
            scale: 1.01,
            transition: { delay: 0, duration: 0.18, ...springPresets.medium },
          }}
          whileTap={{ scale: 0.97 }}
          className="col-span-2 row-span-2 pixel-corners-s overflow-hidden relative bg-[#33638C30] flex flex-col items-center justify-center py-(--space-m) px-(--space-s) group"
        >
          <div
            className="absolute w-[25%] top-[-3%] left-[-3%] rotate-8
            group-hover:w-[26%] group-hover:top-[-5%] group-hover:left-[-7%] group-hover:rotate-6 transition-all duration-300 elastic"
          >
            <Image
              src="/assets/landing/python.svg"
              alt="python"
              width={192}
              height={192}
              className="w-full h-auto"
              priority
            />
          </div>
          <div
            className="absolute w-[25%] bottom-[-10%] right-[-2%] -rotate-10
            group-hover:w-[26%] group-hover:bottom-[-13%] group-hover:right-[-5%] group-hover:-rotate-8 transition-all duration-300 elastic"
          >
            <Image
              src="/assets/landing/python.svg"
              alt="python"
              width={192}
              height={192}
              className="w-full h-auto"
              priority
            />
          </div>
          <div className="group-hover:scale-105 transition-all duration-300 elastic flex flex-col items-center gap-4">
            <div className="">
              <h6 className="text-center font-medium pb-1">Problems</h6>
              <p className="text-balance text--1 flex justify-center text-center text-white/60">
                A Python exercise introducing core
                <br />
                programming concepts and syntax.
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
        </motion.div>
        {/* diamond */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 10 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { ...springPresets.medium, delay: 0.4 },
          }}
          whileHover={{
            scale: 1.01,
            transition: { delay: 0, duration: 0.18, ...springPresets.medium },
          }}
          whileTap={{ scale: 0.97 }}
          className="hidden lg:block col-span-2 col-start-1 row-start-3 pixel-corners-s overflow-hidden bg-[#ACC1FF25] relative group"
        >
          <div
            className="absolute w-[20%] bottom-[-15%] left-[2%] rotate-5 opacity-75
              group-hover:w-[22%] group-hover:bottom-[-9%] group-hover:left-[6%] group-hover:rotate-12 group-hover:opacity-90 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
          >
            <Image
              src="/assets/slot/diamond.svg"
              alt="diamond"
              width={150}
              height={125}
              className="w-full h-auto"
              priority
            />
          </div>
          <div
            className="absolute w-[20%] top-[-70%] left-[14%] rotate-172 opacity-75
              group-hover:w-[22%] group-hover:top-[-40%] group-hover:left-[22%] group-hover:rotate-167 group-hover:opacity-90 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
          >
            <Image
              src="/assets/slot/diamond.svg"
              alt="diamond"
              width={150}
              height={125}
              className="w-full h-auto"
              priority
            />
          </div>
          <div
            className="absolute w-[20%] bottom-[-20%] left-[30%] rotate-15 opacity-75
              group-hover:w-[22%] group-hover:bottom-[-23%] group-hover:left-[34%] group-hover:rotate-22 group-hover:opacity-95 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
          >
            <Image
              src="/assets/slot/diamond.svg"
              alt="diamond"
              width={150}
              height={125}
              className="w-full h-auto"
              priority
            />
          </div>
          <div
            className="absolute w-[20%] bottom-[-10%] right-[7%] -rotate-10 opacity-75
              group-hover:w-[22%] group-hover:bottom-[-13%] group-hover:right-[11%] group-hover:-rotate-18 group-hover:opacity-90 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
          >
            <Image
              src="/assets/slot/diamond.svg"
              alt="diamond"
              width={150}
              height={125}
              className="w-full h-auto"
              priority
            />
          </div>
          <div
            className="absolute w-[20%] top-[-20%] right-[24%] rotate-200 opacity-75
              group-hover:w-[22%] group-hover:top-[-23%] group-hover:right-[28%] group-hover:rotate-210 group-hover:opacity-95 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
          >
            <Image
              src="/assets/slot/diamond.svg"
              alt="diamond"
              width={150}
              height={125}
              className="w-full h-auto"
              priority
            />
          </div>
        </motion.div>
        {/* Schedule */}
        <MotionLink
          initial={{ opacity: 0, scale: 0.97, y: 10 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { ...springPresets.medium, delay: 0.3 },
          }}
          whileHover={{
            scale: 1.01,
            transition: { delay: 0, duration: 0.18, ...springPresets.medium },
          }}
          whileTap={{ scale: 0.97 }}
          href="/#schedule"
          className="col-span-2 row-start-3 row-end-4 md:col-start-3 md:row-start-1 md:row-end-2 pixel-corners-s overflow-hidden bg-[#432125] relative flex justify-center items-center group"
        >
          <div
            className="absolute w-[25%] top-[-10%] left-[2%] rotate-22
            group-hover:w-[26%] group-hover:top-[-11%] group-hover:left-[5%] group-hover:rotate-16 transition-all duration-300 elastic"
          >
            <Image
              src="/assets/slot/cherry.svg"
              alt="cherry"
              width={150}
              height={125}
              className="w-full h-auto"
              priority
            />
          </div>
          <div
            className="absolute w-[25%] bottom-[-15%] right-[5%] -rotate-23
             group-hover:w-[26%] group-hover:bottom-[-6%] group-hover:right-[7%] group-hover:-rotate-16 transition-all duration-300 elastic"
          >
            <Image
              src="/assets/slot/cherry.svg"
              alt="cherry"
              width={150}
              height={125}
              className="w-full h-auto"
              priority
            />
          </div>
          <h6 className="font-medium group-hover:scale-105 transition-all duration-300 elastic">
            Schedule
          </h6>
        </MotionLink>
        {/* coins */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 10 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { ...springPresets.medium, delay: 0.3 },
          }}
          whileHover={{
            scale: 1.01,
            transition: { delay: 0, duration: 0.18, ...springPresets.medium },
          }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:block col-span-2 col-start-1 row-start-4 lg:col-start-3 lg:row-start-2 pixel-corners-s overflow-hidden bg-[#D18D3925] relative group"
        >
          <div
            className="absolute w-[21%] bottom-[-10%] left-[5%] -rotate-15 opacity-75
            group-hover:w-[22%] group-hover:bottom-[2%] group-hover:left-[2%] group-hover:-rotate-18 group-hover:opacity-80 transition-all duration-300 elastic"
          >
            <Image
              src="/assets/slot/coin.svg"
              alt="coin"
              width={150}
              height={125}
              className="w-full h-auto"
              priority
            />
          </div>
          <div
            className="absolute w-[21%] bottom-[-10%] left-[28%] rotate-5 opacity-75
            group-hover:w-[24%] group-hover:bottom-[8%] group-hover:left-[25%] group-hover:-rotate-2 group-hover:opacity-100 transition-all duration-300 elastic"
          >
            <Image
              src="/assets/slot/coin.svg"
              alt="coin"
              width={150}
              height={125}
              className="w-full h-auto"
              priority
            />
          </div>
          <div
            className="absolute w-[20%] bottom-[-10%] right-[28%] -rotate-6 opacity-75
            group-hover:w-[21%] group-hover:bottom-[2%] group-hover:right-[25%] group-hover:-rotate-1 group-hover:opacity-80 transition-all duration-300 elastic"
          >
            <Image
              src="/assets/slot/coin.svg"
              alt="coin"
              width={150}
              height={125}
              className="w-full h-auto"
              priority
            />
          </div>
          <div
            className="absolute w-[22%] bottom-[-10%] right-[4%] rotate-18 opacity-75
            group-hover:w-[23%] group-hover:bottom-[5%] group-hover:right-[0%] group-hover:rotate-23 group-hover:opacity-85 transition-all duration-300 elastic"
          >
            <Image
              src="/assets/slot/coin.svg"
              alt="coin"
              width={150}
              height={125}
              className="w-full h-auto"
              priority
            />
          </div>
        </motion.div>
        {/* contact */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 10 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { ...springPresets.medium, delay: 0.5 },
          }}
          whileHover={{
            scale: 1.01,
            transition: { delay: 0, duration: 0.18, ...springPresets.medium },
          }}
          whileTap={{ scale: 0.97 }}
          className="row-start-4 md:col-start-1 lg:col-start-3 md:row-start-3 pixel-corners-s overflow-hidden bg-light-purple/70 flex flex-col justify-center items-center py-(--space-m) px-(--space-s)"
        >
          <h6 className="text--1 flex no_line_height justify-center text-left font-medium pb-2">
            Contact
          </h6>
          <div className="flex flex-row gap-(--space-xs-s)">
            <MagneticDiv>
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
            </MagneticDiv>
            <MagneticDiv>
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
            </MagneticDiv>
          </div>
        </motion.div>
        {/* faqs */}
        <MotionLink
          initial={{ opacity: 0, scale: 0.97, y: 10 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { ...springPresets.medium, delay: 0.6 },
          }}
          whileHover={{
            scale: 1.01,
            transition: { delay: 0, duration: 0.18, ...springPresets.medium },
          }}
          whileTap={{ scale: 0.97 }}
          href="/faqs"
          className="col-start-1 row-start-4 md:col-start-2 lg:col-start-4 md:row-start-3 pixel-corners-s overflow-hidden bg-[#FD68CE30] flex justify-center items-center py-(--space-m) px-(--space-s)"
        >
          <div className="text--1 flex justify-center text-left no_line_height font-medium">
            Frequently
            <br />
            Asked
            <br />
            Questions
          </div>
        </MotionLink>
        {/* arcade */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97, y: 15 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
            transition: { ...springPresets.medium, delay: 0.4 },
          }}
          whileHover={{
            scale: 1.01,
            transition: { delay: 0, duration: 0.18, ...springPresets.medium },
          }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:flex md:row-span-3 md:col-start-3 md:row-start-2 col-span-2 lg:col-start-5 lg:row-start-1 pixel-corners-s overflow-hidden bg-[#353435] items-center justify-center py-(--space-m) px-(--space-s)"
        >
          <Image
            src="/assets/landing/arcade.svg"
            alt="arcade"
            width={38 * 100} // 38
            height={69 * 100} // 69
            className={`w-auto aspect-auto`}
            priority
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
