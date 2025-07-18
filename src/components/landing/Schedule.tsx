"use client";

import schedule from "@/constants/Schedule";
import ScrambleText from "@/components/effects/ScrambleText";
import { Fragment } from "react";
import { motion } from "framer-motion";
import { itemVariants, springPresets } from "@/constants/Animation";
interface ScheduleItemProps {
  date: string;
  events: EventProps[];
}

interface EventProps {
  name: string;
  time: string;
}

export default function Schedule() {
  return (
    <section
      id="schedule"
      className="flex flex-col items-center w-full gap-y-(--space-2xl)"
    >
      <h3>
        <ScrambleText className="font-medium no_line_height glow glow-pink">
          Schedule
        </ScrambleText>
      </h3>

      <motion.div>
        {schedule.map((item: ScheduleItemProps, i) => (
          <motion.div
            key={i}
            initial="hidden"
            whileInView="visible"
            variants={itemVariants}
            viewport={{ once: true }}
            className="grid grid-cols-[var(--space-2xs)_1fr] grid-rows-[auto_auto] gap-x-(--space-m-l)
            lg:grid-cols-[1fr_var(--space-2xs)_1fr] lg:grid-rows-1 lg:gap-x-(--space-l-2xl)"
          >
            {/* Dot/Line */}
            <div
              className={`mt-(--space-m) bg-green/20 flex flex-col items-center row-span-2 col-start-1 lg:col-start-2 lg:row-start-1 lg:row-end-2 lg:row-span-1 lg:items-center
                ${i === schedule.length - 1 ? "h-fit" : "h-full"}`}
            >
              <div className="w-(--space-m) h-(--space-m) bg-green pixel-corners-s" />
            </div>
            {/* Day/Date */}
            <div className="mb-(--space-m) flex flex-col items-start col-start-2 row-start-1 lg:col-start-1 lg:items-end">
              <h1 className="mb-(--space-2xs) text-green font-bold no_line_height">
                Day {i + 1}
              </h1>
              <p className="font-ian text-3 no_line_height font-medium text-white/90">
                {item.date}
              </p>
            </div>
            {/* Events */}
            <motion.div
              key={i}
              initial={{ scale: 1 }}
              transition={springPresets}
              whileHover={{ scale: 1.01 }}
              className=" grid grid-cols-[auto_auto] gap-x-(--space-2xs) gap-y-(--space-2xs) mb-(--space-xl) w-fit bg-light-purple/60 text-white/90 pixel-corners-s p-(--space-m) text-lg shadow-lg col-start-2 row-start-2 lg:col-start-3 lg:row-start-1"
            >
              {item.events.map((event: EventProps) => (
                <Fragment key={event.time}>
                  <p className="font-ian text-3 no_line_height ">
                    {event.time}
                  </p>
                  <p className="font-ian text-3 no_line_height">{event.name}</p>
                </Fragment>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
