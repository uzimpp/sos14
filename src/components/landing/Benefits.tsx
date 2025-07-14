"use client";
import Image from "next/image";
import benefits from "@/constants/Benefits";
import { motion } from "framer-motion";

export default function Benefits() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="benefits"
      className="flex flex-col w-full items-center px-(--space-l) gap-(--space-l)"
    >
      <motion.h3
        className="text-center mb-(--space-m)"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        What will SKE23 receive?
      </motion.h3>
      <motion.div
        className="flex flex-col md:flex-row w-full justify-between gap-y-(--space-2xl) gap-x-(--space-m)"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            className="flex flex-col gap-(--space-4xs) items-center flex-1"
            variants={itemVariants}
            transition={{ duration: 0.6 }}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.2 },
            }}
          >
            <Image
              src={benefit.src}
              alt={benefit.alt}
              width={144}
              height={144}
              className={`w-auto h-(--space-3xl-4xl) ${benefit.shadow}`}
              priority
            />
            <h4 className="text-center mt-(--space-m) text-3 font-semibold">
              {benefit.title}
            </h4>
            {benefit.desc && (
              <p className="text-center text-white/50">{benefit.desc}</p>
            )}
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
