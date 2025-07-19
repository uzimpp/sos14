"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, springPresets } from "@/constants/Animation";

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="flex flex-col w-full items-center gap-(--space-s-m) "
    >
      <motion.h3
        className="text-center mb-(--space-m) no_line_height"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        What will SKE23 receive?
      </motion.h3>
      <motion.div
        className="w-full grid grid-cols-1 md:grid-cols-3 justify-between gap-(--space-2xs-xs) max-w-[1280px]"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Card 1: Fun */}
        <motion.div
          className="w-full flex flex-col gap-(--space-4xs) items-center bg-yellow/20 p-(--space-l) pixel-corners-s"
          variants={itemVariants}
        >
          <div className="transform-3d drop-shadow-[0_0_40px_var(--color-yellow)]">
            <motion.div
              initial={{ opacity: 0, rotateY: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, rotateY: 360, scale: 1 }}
              transition={{ duration: 1, ...springPresets.soft }}
              viewport={{ once: true }}
              whileHover={{ rotateY: 0, scale: 1.1 }}
              className="will-change-transform transform-3d"
            >
              <Image
                src="/assets/landing/star.svg"
                alt="Fun activities and engaging events"
                width={144}
                height={144}
                className="w-auto h-(--space-xl-3xl) "
                priority
              />
            </motion.div>
          </div>
          <h3 className="text-2 text-center mt-(--space-m) font-semibold">Fun</h3>
          <p className="flex text-center text-white/70  text-balance">
            Enjoy a variety of fun activities and engaging events.
          </p>
        </motion.div>
        {/* Card 2: Friends */}
        <motion.div
          className="w-full flex flex-col gap-(--space-4xs) items-center bg-pink/20 p-(--space-l) pixel-corners-s"
          variants={itemVariants}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ...springPresets.stiff }}
            viewport={{ once: true }}
            whileHover={{ opacity: 1, scale: 1.1 }}
            className="will-change-transform transform-3d"
          >
            <Image
              src="/assets/landing/friend.svg"
              alt="Make new friends"
              width={144}
              height={144}
              className="w-auto h-(--space-xl-3xl) drop-shadow-[0_0_40px_var(--color-pink)]"
              priority
            />
          </motion.div>
          <h3 className="text-2 text-center mt-(--space-m) font-semibold">Friends</h3>
          <p className="flex text-center text-white/70  text-balance">
            Meet new people and make lasting friendships.
          </p>
        </motion.div>
        {/* Card 3: Basics */}
        <motion.div
          className="w-full flex flex-col gap-(--space-4xs) items-center bg-blue/20 p-(--space-l) pixel-corners-s"
          variants={itemVariants}
        >
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ...springPresets.stiff }}
            viewport={{ once: true }}
            whileHover={{ opacity: 1, y: -10 }}
            className="will-change-transform transform-3d"
          >
            <Image
              src="/assets/landing/coding.svg"
              alt="Learn coding basics"
              width={144}
              height={144}
              className="w-auto h-(--space-xl-3xl) drop-shadow-[0_0_40px_var(--color-blue)]"
              priority
            />
          </motion.div>
          <h3 className="text-2 text-center mt-(--space-m) font-semibold">Basics</h3>
          <p className="flex text-center text-white/70  text-balance">
            Get hands-on experience with coding fundamentals.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
