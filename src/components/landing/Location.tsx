import dynamic from "next/dynamic";
import { Suspense } from "react";

// Dynamic import for ScrambleText
const ScrambleText = dynamic(
  () => import("@/components/effects/ScrambleText"),
  {
    ssr: false,
    loading: () => (
      <span className="text-4 font-medium no_line_height glow glow-pink">
        Location
      </span>
    ),
  }
);

export default function Location() {
  return (
    <section className="flex flex-col gap-(--space-l) items-center">
      <h3>
        <Suspense
          fallback={
            <span className="text-4 font-medium no_line_height glow glow-pink">
              Location
            </span>
          }
        >
          <ScrambleText className="text-4 font-medium no_line_height glow glow-pink">
            Location
          </ScrambleText>
        </Suspense>
      </h3>
      <div className="flex flex-col gap-(--space-s) p-(--space-m) bg-light-purple/44 pixel-corners-s max-w-[calc(5.5*var(--space-4xl))]">
        <h4 className="text-0 font-semibold">Kasetsart University</h4>
        <p className="text--1 text-white/61">
          The camp will be held at Kasetsart University, Bangkok, Thailand.
          Specific location details will be announced closer to the event date.
        </p>
      </div>
    </section>
  );
}
