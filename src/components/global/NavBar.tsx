import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="max-w-[1728px] w-full justify-self-center flex flex-row items-center justify-between px-(--space-m) py-(--space-s)">
      {/* logo part */}
      <div className="flex flex-row items-center gap-4">
        <button>
          <Link href="/" className="text-1 bold">
            <div>SOS14</div>
          </Link>
        </button>
      </div>
      {/* link part */}
      <div className="flex flex-col gap-x-(--space-xl) gap-y-(--space-s) md:items-center md:flex-row md:">
        <button>
          <Link href="/" className="text-0">
            Home
          </Link>
        </button>
        <button>
          <Link href="/#agenda" className="text-0">
            Agenda
          </Link>
        </button>
        <button>
          <Link href="/problems" className="text-0">
            Problems
          </Link>
        </button>
        <button>
          <Link href="/faq" className="text-0">
            FAQ's
          </Link>
        </button>
      </div>
    </nav>
  );
}
