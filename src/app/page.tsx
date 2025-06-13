import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">SOS14</h1>
      <p className="text-lg">
        Welcome to the 14th SOS camp, a preparation camp for SKE23 students. We
        prepare you for the upcoming camp.
      </p>
      <section id="agenda"></section>
    </div>
  );
}
