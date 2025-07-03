import ScrambleText from "@/components/effects/ScrambleText";
import ProblemList from "@/components/problems/ProblemList";
import Link from "next/link";
import { Suspense } from "react";

export default function Problems() {
  return (
    <div className="!pb-(--space-4xl) px-(--space-m) py-(--space-s) max-w-[1728px] w-full flex flex-col justify-self-center justify-center">
      <div className="flex flex-col my-(--space-l) gap-(--space-s) items-center">
        <h3>
          <ScrambleText className="text-white no_line_height font-bold text-center flex mx-auto glow glow-pink">
            PROBLEMS
          </ScrambleText>
        </h3>
        <div className="max-w-[calc(5.5*var(--space-4xl))] flex justify-center">
          <p className="text-0 text-center opacity-60">
            A fundamental Python exercise often focuses on introducing and
            reinforcing core programming concepts and syntax in the Python
            programming language.{" "}
            <Link href="/ske888">
              If you are tired of coding, check out SKE888!
            </Link>
          </p>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <ProblemList />
      </Suspense>
    </div>
  );
}
