import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import problemsData from "@/constants/Problems";

interface Problem {
  number: string;
  name: string;
  isExtra: boolean;
  description: string;
  image: string;
  url: string;
}

interface ProblemCardProps {
  problem: Problem;
  completed?: boolean;
  onChange: () => void;
  index?: number;
}

// Map matched days  [done]
export default function MapProblems(
  CurrentDay: number,
  completedStatus: { [key: string]: boolean },
  handleCheckboxChange: (problemNumber: string) => void
) {
  let problemsToShow: Problem[] = [];
  if (CurrentDay === 0) {
    problemsToShow = problemsData.flatMap((day) => day.problems);
  } else {
    const dayData = problemsData.find((day) => day.days === CurrentDay);
    problemsToShow = dayData?.problems || [];
  }
  return (
    <div className="xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 md:grid flex flex-col gap-(--space-l) justify-items-center">
      {problemsToShow.map((problem, index) => (
        <ProblemCard
          key={problem.number}
          problem={problem}
          completed={!!completedStatus[problem.number]}
          onChange={() => handleCheckboxChange(problem.number)}
          index={index}
        />
      ))}
    </div>
  );
}

const ProblemCard = memo(function ProblemCard({
  problem,
  completed = false,
  onChange,
  index = 0,
}: ProblemCardProps) {
  return (
    <div
      className={`relative h-full w-full flex flex-col p-(--space-s-m) bg-light-purple/44 pixel-corners-s overflow-x-hidden ${
        completed ? "opacity-33 scale-99" : ""
      } transition-transform duration-400 ease-elastic hover:-translate-y-(--space-3xs) hover:shadow-2xl gap-(--space-s-m)`}
    >
      {/* {completed && (
        <button
          className="right-(--space-s) top-(--space-s) absolute z-100 bg-green text--1 text-black px-(--space-2xs) py-(--space-4xs) pixel-corners-s"
          onClick={onChange}
        >
          Completed
        </button>
      )} */}
      {problem.isExtra && (
        <div className="absolute right-(--space-s) top-(--space-s) z-50">
          <div className="relative md:inline-block hidden group">
            <div className="text--1 bg-red/61 px-[var(--space-xs)] py-[var(--space-4xs)] pixel-corners-s cursor-pointer">
              extra
            </div>
            <div className="absolute z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text--1 bg-zinc-800 px-2 py-1 rounded right-0 top-full mt-1 whitespace-nowrap pointer-events-none">
              Optional problem
            </div>
          </div>
        </div>
      )}
      <div className="flex md:flex-col flex-row gap-(--space-s-m)">
        {/* Image Section */}
        <div className="flex relative items-center justify-center">
          <div className="flex flex-shrink-0 relative md:w-[39.8%] md:m-(--space-m) m-(--space-3xs) w-(--space-xl) aspect-square items-center justify-center pixel-corners-xs">
            <Image
              fill
              className="object-contain"
              src={problem.image}
              alt={problem.name}
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, (max-width: 1280px) 25vw, 200px"
              loading={index < 4 ? "eager" : "lazy"}
              priority={index < 2}
            />
          </div>
        </div>
        {/* Texts */}
        <div className="flex flex-col gap-(--space-2xs) w-full">
          <div className="flex flex-row w-full justify-between gap-(--space-2xs)">
            <div className="flex flex-wrap items-center gap-(--space-2xs)">
              <div className="text-0 font-semibold text-white flex-wrap">
                {problem.number}.{" "}
                <Link target="_blank" href={problem.url} className="">
                  {problem.name}
                </Link>
              </div>
              {/* IsExtra tag */}
              {problem.isExtra && (
                <div className="relative inline-block md:hidden group">
                  <div className="text--1 bg-red/61 px-[var(--space-xs)] py-[var(--space-4xs)] pixel-corners-s cursor-pointer">
                    extra
                  </div>
                  <div className="absolute z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 text-white text--1 bg-zinc-800 px-2 py-1 rounded left-1/2 -translate-x-1/2 top-full mt-1 whitespace-nowrap pointer-events-none">
                    Optional problem
                  </div>
                </div>
              )}
            </div>
            {/* Checkbox for Mobile */}
            <fieldset className="md:hidden flex items-center justify-center">
              <input
                id={`m-${problem.number}`}
                type="checkbox"
                checked={completed}
                onChange={onChange}
                className="w-(--space-s) h-(--space-s) bg-green accent-green cursor-pointer"
              />
            </fieldset>
          </div>
          <p className="text--1 text-white/61">{problem.description}</p>
        </div>
      </div>
      {/* Actions */}
      <div className="flex flex-row mt-auto items-center justify-end gap-(--space-xs)">
        <Link
          target="_blank"
          href={problem.url}
          className={`text-center text--1 px-(--space-s) py-(--space-2xs) w-full font-semibold pixel-corners-s transition-all duration-400 ease-smooth
            ${completed ? "bg-green text-black" : "bg-black text-white"}`}
        >
          {completed ? "Completed" : "Solve"}
        </Link>
        {/* Checkbox for non-mobile */}
        <fieldset className="hidden md:flex items-center justify-center transition-all duration-400 ease-smooth">
          <input
            id={`non-m-${problem.number}`}
            type="checkbox"
            checked={completed}
            onChange={onChange}
            className="w-(--space-s) h-(--space-s) bg-green accent-green cursor-pointer"
          />
        </fieldset>
      </div>
    </div>
  );
});
