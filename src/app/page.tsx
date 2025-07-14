import Hero from "@/components/landing/Hero";
import Agenda from "@/components/landing/Agenda";
import Benefits from "@/components/landing/Benefits";
// import Location from "@/components/landing/Location";
import Qoute from "@/components/landing/Qoute";

export default function Home() {
  return (
    <div className="!pb-(--space-4xl) px-(--space-m) py-(--space-s) gap-y-(--space-xl) max-w-[1728px] w-full flex justify-self-center flex-col justify-center items-center ">
      <Hero />

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
