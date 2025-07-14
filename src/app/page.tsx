"use client";

import Hero from "@/components/landing/Hero";
import Agenda from "@/components/landing/Agenda";
import Benefits from "@/components/landing/Benefits";
// import Location from "@/components/landing/Location";
import Qoute from "@/components/landing/Qoute";
import { motion } from "framer-motion";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      className="!pb-(--space-4xl) px-(--space-m) py-(--space-s) gap-y-(--space-xl) max-w-[1728px] w-full flex justify-self-center flex-col justify-center items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={sectionVariants}>
        <Hero />
      </motion.div>

      <motion.section
        variants={sectionVariants}
        className="flex flex-col items-center"
      >
        <h3>What is SOS camp?</h3>
        <div></div>
      </motion.section>

      <motion.div variants={sectionVariants}>
        <Benefits />
      </motion.div>

      <motion.div variants={sectionVariants}>
        <Agenda />
      </motion.div>

      {/* The location is not decided yet */}
      {/* <Location /> */}

      <motion.div variants={sectionVariants}>
        <Qoute />
      </motion.div>
    </motion.div>
  );
}
