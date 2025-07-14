"use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { motion } from "framer-motion";

// Dynamic import for ScrambleText
const ScrambleText = dynamic(
  () => import("@/components/effects/ScrambleText"),
  {
    ssr: false,
    loading: () => (
      <span className="text-4 font-medium no_line_height glow glow-pink">
        Location
      </span>
    ),
  }
);

export default function Location() {
  return (
    <section className="flex flex-col gap-(--space-l) items-center">
      <motion.h3
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <Suspense
          fallback={
            <span className="text-4 font-medium no_line_height glow glow-pink">
              Location
            </span>
          }
        >
          <ScrambleText className="text-4 font-medium no_line_height glow glow-pink">
            Location
          </ScrambleText>
        </Suspense>
      </motion.h3>
      <motion.div
        className="flex flex-col gap-(--space-s) p-(--space-m) bg-light-purple/44 pixel-corners-s max-w-[calc(5.5*var(--space-4xl))]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        whileHover={{
          scale: 1.02,
          transition: { duration: 0.2 },
        }}
      >
        <h4 className="text-0 font-semibold">Kasetsart University</h4>
        <p className="text--1 text-white/61">
          The camp will be held at Kasetsart University, Bangkok, Thailand.
          Specific location details will be announced closer to the event date.
        </p>
      </motion.div>
    </section>
  );
}
