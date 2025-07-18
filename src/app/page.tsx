import Hero from "@/components/landing/Hero";
import Agenda from "@/components/landing/Schedule";
import Benefits from "@/components/landing/Benefits";
// import Location from "@/components/landing/Location";
import Qoute from "@/components/landing/Qoute";
import Sponsors from "@/components/landing/Sponsors";

export default function Home() {
  return (
    <div className="!pb-(--space-4xl) px-(--space-m) py-(--space-s) gap-y-(--space-2xl-4xl) max-w-[1728px] mx-auto w-full flex justify-self-center flex-col justify-center items-center">
      <Hero />
      {/* <motion.section
        variants={sectionVariants}
        className="flex flex-col items-center"
      >
        <h3>What is SOS camp?</h3>
        <div></div>
      </motion.section> */}
      <Benefits />
      <Agenda />
      {/* The location is not decided yet */}
      <Sponsors />
      {/* <Location /> */}
      <Qoute />
    </div>
  );
}
