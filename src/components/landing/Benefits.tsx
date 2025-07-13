import Image from "next/image";

const benefits = [
  {
    src: "/landing/star.svg",
    alt: "Fun activities and engaging events",
    title: "Fun",
    desc: "Enjoy a variety of fun activities and engaging events.",
    shadow: "drop-shadow-[0_0_40px_var(--color-yellow)]",
  },
  {
    src: "/landing/friend.svg",
    alt: "Make new friends",
    title: "Friends",
    desc: "Meet new people and make lasting friendships.",
    shadow: "drop-shadow-[0_0_40px_var(--color-pink)]",
  },
  {
    src: "/landing/coding.svg",
    alt: "Learn coding basics",
    title: "Basics",
    desc: "Get hands-on experience with coding fundamentals.",
    shadow: "drop-shadow-[0_0_40px_var(--color-blue)]",
  },
];

export default function Benefits() {
  return (
    <section
      id="benefits"
      className="flex flex-col w-full items-center px-(--space-l) gap-(--space-l)"
    >
      <h3 className="text-center mb-(--space-m)">
        What will SKE23 receive?
      </h3>
      <div className="flex flex-col md:flex-row w-full justify-between gap-y-(--space-2xl) gap-x-(--space-m)">
        {benefits.map((benefit) => (
          <div
            key={benefit.title}
            className="flex flex-col gap-(--space-4xs) items-center flex-1"
          >
            <Image
              src={benefit.src}
              alt={benefit.alt}
              width={144}
              height={144}
              className={`w-auto h-(--space-3xl-4xl) ${benefit.shadow}`}
              priority
            />
            <h4 className="text-center mt-(--space-m) text-3 font-semibold">
              {benefit.title}
            </h4>
            {benefit.desc && (
              <p className="text-center text-white/50">
                {benefit.desc}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
