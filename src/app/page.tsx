import ScrambleText from "@/components/effects/ScrambleText";
import Agenda from "@/components/landing/Agenda";
import Benefits from "@/components/landing/Benefits";
// import Location from "@/components/landing/Location";
import Qoute from "@/components/landing/Qoute";

export default function Home() {
  return (
    <div className="!pb-(--space-4xl) px-(--space-m) py-(--space-s) max-w-[1728px] w-full flex justify-self-center flex-col justify-center items-center gap-y-(--space-4xl)">
      <section className="flex-col-reverse">
        <div className="flex flex-col md:flex-row gap-(--space-l) justify-between mt-(--space-m)">
          <div className="inline-block md:justify-start mx-auto text-center">
            <ScrambleText className="xl:text-[300px] md:text-[20vw] text-[30vw] font-bold text-green no_line_height w-fit ">
              <span className="glow glow-green-lg">SOS14</span>
            </ScrambleText>
          </div>
          <div className="flex items-center">
            <p className="text-1 md:text-left text-center text-white/60">
              Welcome to the 14th SOS camp, a preparation camp for SKE23
              students. We will take you through Python programming fundamentals
            </p>
          </div>
        </div>
      </section>

      <section>
        <h3>What is SOS camp?</h3>
        <div></div>
      </section>

      <Benefits />
      <Agenda />
      {/* The location is not decided yet */}
      {/* <Location /> */}
      <Qoute />
    </div>
  );
}
