import agenda from "@/constants/Agenda";
import ScrambleText from "@/components/effects/ScrambleText";

interface AgendaItemProps {
  date: string;
  events: EventProps[];
}

interface EventProps {
  name: string;
  time: string;
}

export default function Agenda() {
  return (
    <section
      id="agenda"
      className="flex flex-col items-center w-full gap-y-(--space-2xl)"
    >
      <h3>
        <ScrambleText className="font-medium no_line_height glow glow-pink">
          Agenda
        </ScrambleText>
      </h3>

      <div>
        {agenda.map((item: AgendaItemProps, i) => (
          <div
            key={i}
            className="grid grid-cols-[var(--space-2xs)_1fr] grid-rows-[auto_auto] gap-x-(--space-l)
            md:grid-cols-[1fr_var(--space-2xs)_1fr] md:grid-rows-1 md:gap-x-(--space-l-2xl)"
          >
            {/* Dot/Line */}
            <div
              className={`mt-(--space-m) bg-green/20 flex flex-col items-center row-span-2 col-start-1 md:col-start-2 md:row-start-1 md:row-end-2 md:row-span-1 md:items-center
                ${i === agenda.length - 1 ? "h-fit" : "h-full"}`}
            >
              <div className="w-(--space-m) h-(--space-m) bg-green pixel-corners-s" />
            </div>
            {/* Day/Date */}
            <div className="mb-(--space-m) flex flex-col items-start col-start-2 row-start-1 md:col-start-1 md:items-end">
              <h1 className="mb-(--space-2xs) text-green font-bold no_line_height">
                Day {i + 1}
              </h1>
              <h6 className="text-green/40 font-medium">{item.date}</h6>
            </div>
            {/* Events */}
            <div className="mb-(--space-xl) w-fit bg-[#18141c] text-white/80 pixel-corners-s p-(--space-m) text-lg shadow-lg col-start-2 row-start-2 md:col-start-3 md:row-start-1 font-ta8bit">
              {item.events.map((event: EventProps, eventIndex) => (
                <div key={eventIndex}>
                  <span className="font-medium">{event.time}</span> {event.name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
