"use client"

import dynamic from "next/dynamic";
import Link from "next/link";
import { Suspense } from "react";

const ScrambleText = dynamic(
  () => import("@/components/effects/ScrambleText"),
  {
    ssr: false,
    loading: () => (
      <span className="text-white no_line_height font-medium text-center flex mx-auto glow glow-pink">
        PROBLEMS
      </span>
    ),
  }
);

const ProblemList = dynamic(() => import("@/components/problems/ProblemList"), {
  ssr: false,
  loading: () => (
    <div className="flex flex-col gap-4 p-4">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="h-32 bg-light-purple/20 rounded-lg animate-pulse"
        />
      ))}
    </div>
  ),
});

export default function Problems() {
  return (
    <div className="!pb-(--space-4xl) px-(--space-m) py-(--space-s) max-w-[1728px] mx-auto w-full flex flex-col justify-self-center justify-center">
      <div className="flex flex-col mt-(--space-l-xl) gap-(--space-s) items-center">
        <h3>
          <Suspense
            fallback={
              <span className="text-white no_line_height font-medium text-center flex mx-auto glow glow-pink">
                PROBLEMS
              </span>
            }
          >
            <ScrambleText className="text-white no_line_height font-medium text-center flex mx-auto glow glow-pink">
              PROBLEMS
            </ScrambleText>
          </Suspense>
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
      <Suspense
        fallback={
          <div className="flex flex-col gap-4 p-4">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="h-32 bg-light-purple/20 rounded-lg animate-pulse"
              />
            ))}
          </div>
        }
      >
        <ProblemList />
      </Suspense>
    </div>
  );
}
