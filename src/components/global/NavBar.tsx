import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex flex-row items-center justify-between p-(--space-s) mx-(--space-xs)">
      {/* logo part */}
      <div className="flex flex-row items-center gap-4">
        <button>
          <Link href="/" className="text-1 bold">
            <div>SOS14</div>
          </Link>
        </button>
      </div>
      {/* link part */}
      <div className="flex flex-row items-center gap-(--space-xl)">
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
