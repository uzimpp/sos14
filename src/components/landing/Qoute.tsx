"use client";
import { motion } from "framer-motion";

export default function Qoute() {
  return (
    <section>
      <motion.div
        className="font-medium text-center text-4 glow glow-pink-md"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          duration: 0.8,
          ease: "easeOut",
        }}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.2 },
        }}
      >
        We are looking forward to
        <br /> seeing <span className="text-pink font-semibold">
          SKE23
        </span> at <span className="font-semibold text-green">SOS14</span>
      </motion.div>
    </section>
  );
}
