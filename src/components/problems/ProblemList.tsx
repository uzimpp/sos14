"use client";

import problemsData from "@/constant/problems";
import Link from "next/link";
import DropdownBtn from "@/components/ui/DropdownBtn";
import slides from "@/constant/slides";
import { useRouter } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

interface Problem {
  number: string;
  name: string;
  description: string;
  image: string;
  url: string;
}

function ProblemCard({
  problem,
  completed,
}: {
  problem: Problem;
  completed?: boolean;
}) {
  return (
    <div className="pixel-corners-s bg-[#3a2e3f] w-64 h-96 flex flex-col justify-between p-4 relative">
      <div className="bg-gray-300 rounded-md w-full h-32 mb-4" />
      <h6 className="font-semibold text-1 mb-1">
        {problem.number}. {problem.name}
      </h6>
      <p className="text-0 mb-4">{problem.description}</p>
      <div className="flex flex-row items-center justify-between mt-auto">
        <button className="bg-black text-white w-32 py-1 rounded pixel-corners-s">
          View
        </button>
        <input
          type="checkbox"
          checked={completed}
          readOnly
          className="w-5 h-5 accent-green-400 ml-2"
        />
      </div>
    </div>
  );
}

function mapProblems(CurrentDay: number) {
  let problemsToShow = [];
  if (CurrentDay === 0) {
    problemsToShow = problemsData.flatMap((day) => day.problems);
  } else {
    const dayData = problemsData.find((day) => day.days === CurrentDay);
    problemsToShow = dayData?.problems || [];
  }
  return (
    <div className="grid grid-cols-4 gap-x-8 gap-y-12 justify-items-center">
      {problemsToShow.map((problem, i) => (
        <ProblemCard key={i} problem={problem} completed={false} />
      ))}
    </div>
  );
}

export default function ProblemList() {
  // push to url (use query params)
  // localStorage (Per browser, Per user) => track progress
  // map matched days
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

  function handleClick(day: number) {
    if (!validDays.includes(day)) day = 0;
    router.push(`/problems?day=${day}`);
  }

  return (
    <section className="flex flex-col justify-center justify-self-center">
      <div className="flex justify-between w-full container">
        <div className="gap-(--space-s) flex flex-row">
          <button
            className={`font-medium px-(--space-m) py-(--space-2xs) pixel-corners-s ${
              CurrentDay === 0 ? "bg-green text-black" : "bg-light-purple"
            }`}
            onClick={() => handleClick(0)}
          >
            All
          </button>
          <button
            className={`font-medium px-(--space-m) py-(--space-2xs) pixel-corners-s ${
              CurrentDay === 1 ? "bg-green text-black" : "bg-light-purple"
            }`}
            onClick={() => handleClick(1)}
          >
            Day 1
          </button>
          <button
            className={`font-medium px-(--space-m) py-(--space-2xs) pixel-corners-s ${
              CurrentDay === 2 ? "bg-green text-black" : "bg-light-purple"
            }`}
            onClick={() => handleClick(2)}
          >
            Day 2
          </button>
          <button
            className={`font-medium px-(--space-m) py-(--space-2xs) pixel-corners-s ${
              CurrentDay === 3 ? "bg-green text-black" : "bg-light-purple"
            }`}
            onClick={() => handleClick(3)}
          >
            Day 3
          </button>
          <DropdownBtn label="Resources">
            <Link
              href={slides.Day1}
              target="_blank"
              className="block px-(--space-m) py-(--space-2xs) m-(--space-3xs) text-nowrap hover:bg-light-purple pixel-corners-s"
            >
              Slide day 1
            </Link>
            <Link
              href={slides.Day2}
              target="_blank"
              className="block px-(--space-m) py-(--space-2xs) m-(--space-3xs) text-nowrap hover:bg-light-purple pixel-corners-s"
            >
              Slide day 2
            </Link>
            <Link
              href={slides.Day3}
              target="_blank"
              className="block px-(--space-m) py-(--space-2xs) m-(--space-3xs) text-nowrap hover:bg-light-purple pixel-corners-s"
            >
              Slide day 3
            </Link>
          </DropdownBtn>
        </div>
      </div>
      <div className="problems-grid">{mapProblems(CurrentDay)}</div>
    </section>
  );
}