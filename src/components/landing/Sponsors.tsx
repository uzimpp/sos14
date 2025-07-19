"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { springPresets } from "@/constants/Animation";

export default function Sponsors() {
  return (
    <section
      id="sponsors"
      className="flex flex-col items-center w-full gap-y-(--space-l) pt-0"
    >
      <motion.div
        className="font-medium text-4 text-center"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{
          ...springPresets.medium,
          duration: 0.8,
        }}
      >
        Sponsored by
      </motion.div>
      <motion.div
        animate={{ y: [0, -8] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
        >
          <Link href="https://www.lactasoy.com/" target="_blank">
            <Image
              src="/sponsors/lactasoy.svg"
              alt="lactasoy"
              width={144}
              height={144}
              className="w-auto h-(--space-xl-3xl)"
              priority
            />
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}
