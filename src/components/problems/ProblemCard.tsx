import Image from "next/image";
import Link from "next/link";

interface Problem {
  number: string;
  name: string;
  description: string;
  image: string;
  url: string;
}

interface ProblemCardProps {
  problem: Problem;
  completed?: boolean;
  onChange: () => void;
}

export default function ProblemCard({
  problem,
  completed = false,
  onChange,
}: ProblemCardProps) {
  return (
    <div
      className={`relative h-full w-full flex flex-col p-(--space-m) bg-light-purple/44 pixel-corners-s ${
        completed ? "opacity-33 scale-99" : ""
      } transition-transform transform hover:-translate-y-1 hover:shadow-2xl`}
    >
      {completed && (
        <div className="right-(--space-s) top-(--space-s) absolute z-100 bg-green text--1 text-black px-(--space-2xs) py-(--space-4xs) pixel-corners-xs">
          Completed
        </div>
      )}
      {/* Image Section */}
      <div className="flex relative w-full items-center justify-center mb-(--space-m)">
        <div className="flex flex-shrink-0 relative w-[61.8%] aspect-square items-center justify-center pixel-corners-xs">
          <Image
            fill
            className="object-contain "
            src={problem.image}
            alt={problem.name}
          />
        </div>
      </div>
      {/* Texts */}
      <div className="flex flex-col mb-(--space-m) gap-(--space-2xs)">
        <h6>
          <Link
            target="_blank"
            href={problem.url}
            className="text-0 font-semibold text-white truncate"
          >
            {problem.number}. {problem.name}
          </Link>
        </h6>
        <p className="text--1 text-white/61">{problem.description}</p>
      </div>
      {/* Actions */}
      <div className="flex flex-row mt-auto items-center justify-end gap-(--space-xs)">
        <Link
          target="_blank"
          href={problem.url}
          className="text-center text--1 text-white px-(--space-s) py-(--space-2xs) w-full font-semibold pixel-corners-s bg-black"
        >
          Solve
        </Link>
        {/* aspect-square pixel-corners-s h-full bg-black */}
        <fieldset className="flex items-center justify-center ">
          <input
            id={problem.number}
            type="checkbox"
            checked={completed}
            onChange={onChange}
            className="w-(--space-s) h-(--space-s) bg-green accent-green cursor-pointer"
          />
          {/* <label
            className="text--1 text-white/80 select-none"
            htmlFor={problem.number}
            onChange={onChange}
          >
          </label> */}
        </fieldset>
      </div>
    </div>
    // <div
    //   className={`relative bg-light-purple/40 w-full md:aspect-[5/6]  flex flex-col justify-between p-(--space-m) pixel-corners-s transition-transform transform hover:-translate-y-1 hover:shadow-2xl
    //     ${completed ? "opacity-45" : ""}`}
    // >
    //   {completed && (
    //     <span className="absolute top-(--space-s) right-(--space-s) bg-green text--1 text-black px-(--space-xs) py-(--space-3xs) pixel-corners-xs font-bold shadow">
    //       Completed
    //     </span>
    //   )}
    //   {/* Image Section */}
    //   <div
    //     className="flex-shrink-0 relative w-full md:mb-(--space-s) md:h-[50%] h-[0%] pixel-corners-xs"
    //   >
    //     <Image
    //       fill
    //       className="object-contain"
    //       src={problem.image}
    //       alt={problem.name}
    //     />
    //   </div>
    //   <div className="flex flex-col mb-(--space-m) gap-(--space-2xs)">
    //     {/* Title */}
    //     <h5 className="font-semibold text-white truncate">
    //       {problem.number}. {problem.name}
    //     </h5>
    //     {/* Description */}
    //     <p className="text--1 text-white/61">{problem.description}</p>
    //   </div>
    //   {/* Actions */}
    //   <div className="flex flex-row items-center justify-end gap-(--space-m)">
    //     <Link
    //       target="_blank"
    //       href={problem.url}
    //       className="text-center  text-white px-(--space-m) py-(--space-3xs) font-semibold pixel-corners-s bg-black"
    //     >
    //       Solve
    //     </Link>
    //     <fieldset className="flex items-center gap-(--space-2xs)">
    //       <input
    //         id={problem.number}
    //         type="checkbox"
    //         checked={completed}
    //         onChange={onChange}
    //         className="w-(--space-s) h-(--space-s) accent-green cursor-pointer"
    //       />
    //       <label
    //         className="text--1 text-gray-300 select-none"
    //         htmlFor={problem.number}
    //       >
    //         Done
    //       </label>
    //     </fieldset>
    //   </div>
    // </div>
  );
}
