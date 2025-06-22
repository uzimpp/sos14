import ScrambleText from "@/components/effects/ScrambleText";
import Image from "next/image";

function Benefits() {
  return (
    <section
      id="benefits"
      className="flex flex-col w-full items-center px-(--space-l)"
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

function Agenda() {
  return (
    <section id="agenda" className="flex flex-col gap-4">
      <ScrambleText className="text-4 font-medium no_line_height glow glow-pink">
        Agenda
      </ScrambleText>
      <div></div>
    </section>
  );
}

function Location() {
  return (
    <section
      id="location"
      className="flex flex-col items-center relative max-w-[calc(5.5*var(--space-4xl))] w-full mx-auto"
    >
      <h3>
        <ScrambleText className="text-4 font-medium no_line_height glow glow-pink">
          Location
        </ScrambleText>
      </h3>
      <div className="bg-light-purple rounded-(--round-m) overflow-hidden">
        <div className="relative w-full aspect-[16/9]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1721.7052242891857!2d100.56830705333505!3d13.845574934968713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29dcc98d06359%3A0xe3d8afdccdaa889b!2z4Lig4Liy4LiE4Lin4Li04LiK4Liy4Lin4Li04Lio4Lin4LiB4Lij4Lij4Lih4LiE4Lit4Lih4Lie4Li04Lin4LmA4LiV4Lit4Lij4LmMIERlcGFydG1lbnQgb2YgQ29tcHV0ZXIgRW5naW5lZXJpbmc!5e0!3m2!1sen!2sth!4v1750162053291!5m2!1sen!2sth"
            className="absolute top-0 left-0 w-[calc(5.5*var(--space-4xl))] h-[calc(5.5*var(--space-4xl))] border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="p-4">
          <p>Transportation</p>
        </div>
      </div>
    </section>
  );
}

function Qoute() {
  return (
    <section>
      <h3 className="font-medium text-center glow glow-pink-md">
        We are looking forward to
        <br /> seeing <span className="text-pink font-semibold">
          SKE23
        </span> at <span className="font-semibold text-green">SOS14</span>
      </h3>
    </section>
  );
}

export default function Home() {
  return (
    <div className="!pb-(--space-4xl) px-(--space-m) py-(--space-s) max-w-[1728px] w-full flex justify-self-center flex-col justify-center items-center">
      <div className="flex flex-col md:flex-row gap-(--space-l) justify-between mt-(--space-m)">
        <div className="inline-block md:justify-start mx-auto text-center">
          <ScrambleText className="xl:text-[300px] md:text-[20vw] text-[30vw] font-bold text-green no_line_height w-fit ">
            <span className="glow glow-green-lg">SOS14</span>
          </ScrambleText>
        </div>
        <div className="flex items-center">
          <p className="text-1 md:text-left text-center text-white/60">
            Welcome to the 14th SOS camp, a preparation camp for SKE23 students.
            We will take you through Python programming fundamentals
          </p>
        </div>
      </div>

      <section>
        <h3>What is SOS camp?</h3>
        <div></div>
      </section>

      <Benefits />
      <Agenda />
      <Location />
      <Qoute />
    </div>
  );
}
