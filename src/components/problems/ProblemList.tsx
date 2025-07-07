"use client";

import Link from "next/link";
import DropdownBtn from "@/components/ui/DropdownBtn";
import slides from "@/constant/slides";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import MapProblems from "@/components/problems/MapProblems";

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
        <button
          className={`font-medium px-(--space-m) py-(--space-2xs) pixel-corners-s ${
            CurrentDay === 0 ? "bg-green text-black" : "bg-light-purple/77"
          }`}
          onClick={() => handleClick(0)}
        >
          All
        </button>
        <button
          className={`font-medium px-(--space-m) py-(--space-2xs) pixel-corners-s ${
            CurrentDay === 1 ? "bg-green text-black" : "bg-light-purple/77"
          }`}
          onClick={() => handleClick(1)}
        >
          Day 1
        </button>
        <button
          className={`font-medium px-(--space-m) py-(--space-2xs) pixel-corners-s ${
            CurrentDay === 2 ? "bg-green text-black" : "bg-light-purple/77"
          }`}
          onClick={() => handleClick(2)}
        >
          Day 2
        </button>
        <button
          className={`font-medium px-(--space-m) py-(--space-2xs) pixel-corners-s ${
            CurrentDay === 3 ? "bg-green text-black" : "bg-light-purple/77"
          }`}
          onClick={() => handleClick(3)}
        >
          Day 3
        </button>
        <DropdownBtn label="Resources">
          <Link
            href={slides.Day1}
            target="_blank"
            className="block px-(--space-m) py-(--space-2xs) m-(--space-3xs) text-nowrap hover:bg-light-purple/50 pixel-corners-s"
          >
            Slide day 1
          </Link>
          <Link
            href={slides.Day2}
            target="_blank"
            className="block px-(--space-m) py-(--space-2xs) m-(--space-3xs) text-nowrap hover:bg-light-purple/50 pixel-corners-s"
          >
            Slide day 2
          </Link>
          <Link
            href={slides.Day3}
            target="_blank"
            className="block px-(--space-m) py-(--space-2xs) m-(--space-3xs) text-nowrap hover:bg-light-purple/50 pixel-corners-s"
          >
            Slide day 3
          </Link>
        </DropdownBtn>
      </div>
        {MapProblems(CurrentDay, completedStatus, handleCheckboxChange)}
    </section>
  );
}
