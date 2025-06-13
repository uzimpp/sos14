import Link from "next/link";

export default function NavBar() {
  return (
    <div className="flex flex-row items-center justify-between p-6">
      {/* logo part */}
      <div className="flex flex-row items-center gap-4">
        <button className="cursor-pointer">
          <Link href="/" className="text-1 bold cursor-pointer">
            <div>SOS14</div>
          </Link>
        </button>
      </div>
      {/* link part */}
      <div className="flex flex-row items-center gap-4">
        <button className="cursor-pointer">
          <Link href="/" className="text-0 cursor-pointer">
            Home
          </Link>
        </button>
        <button className="cursor-pointer">
          <Link href="/#agenda" className="text-0 cursor-pointer">
            Agenda
          </Link>
        </button>
        <button className="cursor-pointer">
          <Link href="/problems" className="text-0 cursor-pointer">
            Problems
          </Link>
        </button>
        <button className="cursor-pointer">
          <Link href="/faq" className="text-0 cursor-pointer">
            FAQ's
          </Link>
        </button>
      </div>
    </div>
  );
}
