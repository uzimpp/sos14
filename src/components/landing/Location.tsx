import ScrambleText from "@/components/effects/ScrambleText";

export default function Location() {
  return (
    <section id="location" className="flex flex-col items-center w-full">
      <h3>
        <ScrambleText className="text-4 font-medium no_line_height glow glow-pink">
          Location
        </ScrambleText>
      </h3>
      <div className="grid grid-cols-2 gap-(--space-m) w-full max-w-[calc(7*var(--space-4xl))]  pixel-corners-s overflow-hidden">
        <div className="flex w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1721.7052242891857!2d100.56830705333505!3d13.845574934968713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29dcc98d06359%3A0xe3d8afdccdaa889b!2z4Lig4Liy4LiE4Lin4Li04LiK4Liy4Lin4Li04Lio4Lin4LiB4Lij4Lij4Lih4LiE4Lit4Lih4Lie4Li04Lin4LmA4LiV4Lit4Lij4LmMIERlcGFydG1lbnQgb2YgQ29tcHV0ZXIgRW5naW5lZXJpbmc!5e0!3m2!1sen!2sth!4v1750162053291!5m2!1sen!2sth"
            className="border-0 flex w-full"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
        <div className="flex w-full bg-light-purple">
          <h6>Department of Computer Engineering</h6>
          <ul></ul>
        </div>
      </div>
    </section>
  );
}
