"use client";

import agenda from "@/constants/Agenda";
import ScrambleText from "@/components/effects/ScrambleText";
import { motion } from "framer-motion";
import { Fragment } from "react";
interface AgendaItemProps {
  date: string;
  events: EventProps[];
}

interface EventProps {
  name: string;
  time: string;
}

export default function Agenda() {
  return (
    <section
      id="agenda"
      className="flex flex-col items-center w-full gap-y-(--space-2xl)"
    >
      <h3>
        <ScrambleText className="font-medium no_line_height glow glow-pink">
          Agenda
        </ScrambleText>
      </h3>

      <div>
        {agenda.map((item: AgendaItemProps, i) => (
          <div
            key={i}
            className="grid grid-cols-[var(--space-2xs)_1fr] grid-rows-[auto_auto] gap-x-(--space-m-l)
            lg:grid-cols-[1fr_var(--space-2xs)_1fr] lg:grid-rows-1 lg:gap-x-(--space-l-2xl)"
          >
            {/* Dot/Line */}
            <div
              className={`mt-(--space-m) bg-green/20 flex flex-col items-center row-span-2 col-start-1 lg:col-start-2 lg:row-start-1 lg:row-end-2 lg:row-span-1 lg:items-center
                ${i === agenda.length - 1 ? "h-fit" : "h-full"}`}
            >
              <div className="w-(--space-m) h-(--space-m) bg-green pixel-corners-s" />
            </div>
            {/* Day/Date */}
            <div className="mb-(--space-m) flex flex-col items-start col-start-2 row-start-1 lg:col-start-1 lg:items-end">
              <h1 className="mb-(--space-2xs) text-green font-bold no_line_height">
                Day {i + 1}
              </h1>
              <p className="text-green/75 font-medium">{item.date}</p>
            </div>
            {/* Events */}
            <div className=" grid grid-cols-[auto_auto] gap-x-(--space-2xs) gap-y-(--space-2xs) mb-(--space-xl) w-fit bg-[#18141c] text-white/90 pixel-corners-s p-(--space-m) text-lg shadow-lg col-start-2 row-start-2 lg:col-start-3 lg:row-start-1">
              {item.events.map((event: EventProps) => (
                <Fragment key={event.time}>
                  <p className="font-ian text-3 no_line_height ">{event.time}</p>
                  <p className="font-ian text-3 no_line_height">{event.name}</p>
                </Fragment>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
