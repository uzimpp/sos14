"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DropdownBtn from "@/components/ui/DropdownBtn";
import MapProblems from "@/components/problems/MapProblems";
import { springPresets } from "@/constants/Animation";
import slides from "@/constants/Slides";
import days from "@/constants/ProblemsDays";

export default function ProblemList() {
  // get day from router
  const validDays = [0, 1, 2, 3];
  const router = useRouter();
  const searchParams = useSearchParams();
  const dayParam = searchParams.get("day");
  const parsedDay = parseInt(dayParam ?? "", 10);

  useEffect(() => {
    if (Number.isNaN(parsedDay) || !validDays.includes(parsedDay)) {
      router.push("/404");
    }
  }, [parsedDay, router]);

  const CurrentDay = parsedDay;

  // localStorage (Per browser, Per user) => track progress [Done?]
  //   try to getitem => pass => display
  //                     failed =>  create one
  // Should re load when user refresh the page or open this page the first time
  // Keep track of the progress of the user even if they close the browser or navigate to other page
  //
  const [completedStatus, setCompletedStatus] = useState<{
    [key: string]: boolean;
  }>({});
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("problemCompletion");
      setCompletedStatus(stored ? JSON.parse(stored) : {});
      setIsLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem(
        "problemCompletion",
        JSON.stringify(completedStatus)
      );
    }
  }, [completedStatus, isLoaded]);

  const handleCheckboxChange = (problemNumber: string) => {
    setCompletedStatus((prev) => {
      const newStatus = { ...prev };
      if (newStatus[problemNumber]) {
        delete newStatus[problemNumber];
      } else {
        newStatus[problemNumber] = true;
      }
      return newStatus;
    });
  };

  // push to url (use query params) [done]
  function handleClick(day: number) {
    if (!validDays.includes(day)) day = 0;
    router.push(`/problems?day=${day}`);
  }

  return (
    <section className="flex flex-col justify-center justify-self-center md:px-(--space-s-l) px-0">
      <div className="gap-(--space-xs-s) flex flex-row flex-wrap md:justify-start justify-center mb-(--space-m-l)">
        {days.map((day) => (
          <button
            key={day.id}
            className={`font-medium px-(--space-m) py-(--space-2xs) pixel-corners-s ${
              CurrentDay === day.id
                ? "bg-green text-black"
                : "bg-light-purple/77"
            }`}
            onClick={() => handleClick(day.id)}
          >
            {day.label}
          </button>
        ))}
        <DropdownBtn label="Resources">
          {slides.map((slide, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ ...springPresets.medium, delay: i * 0.1 }}
            >
              <Link
                href={slide.link}
                target="_blank"
                className="block px-(--space-m) py-(--space-2xs) text-nowrap hover:bg-light-purple/50 pixel-corners-s"
              >
                {slide.label}
              </Link>
            </motion.div>
          ))}
        </DropdownBtn>
      </div>
      {MapProblems(CurrentDay, completedStatus, handleCheckboxChange)}
    </section>
  );
}
