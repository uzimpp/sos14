import Image from "next/image";

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="flex flex-col w-full items-center px-(--space-l) gap-()"
    >
      <h3 className="text-center">What will SKE23 recieve?</h3>
      <div className="flex flex-col sm:flex-row max-w-[calc(5.5*var(--space-4xl))] w-full justify-between gap-y-(--space-m)">
        <div className="flex flex-col gap-(--space-4xs) items-center">
          <Image
            src={"landing/star.svg"}
            alt="fun"
            width={144}
            height={144}
            className="w-auto h-auto drop-shadow-[0_0_40px_var(--color-yellow)]"
          />
          <h4 className="text-center mt-(--space-m) text-3">Fun</h4>
          <p className="text-center">Test</p>
        </div>
        <div className="flex flex-col gap-(--space-4xs) items-center">
          <Image
            src={"landing/friend.svg"}
            alt="friends"
            width={144}
            height={144}
            className="w-auto h-auto drop-shadow-[0_0_40px_var(--color-pink)]"
          />
          <h4 className="text-center mt-(--space-m) text-3">Friends</h4>
          <p className="text-center"></p>
        </div>
        <div className="flex flex-col gap-(--space-4xs) items-center">
          <Image
            src={"landing/coding.svg"}
            alt="codings"
            width={144}
            height={144}
            className="w-auto h-auto drop-shadow-[0_0_40px_var(--color-blue)]"
          />
          <h4 className="text-center mt-(--space-m) text-3">Basics</h4>
          <p className="text-center"></p>
        </div>
      </div>
    </section>
  );
}
