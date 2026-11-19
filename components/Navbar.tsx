import Link from "next/link";
import BracketArrow from "@/components/ui/bracket-arrow";

export default function Navbar() {
  return (
    <header className="w-full">
      <nav className="mx-auto flex max-w-384 items-center justify-between px-4 py-4 sm:px-4">
        <Link href="/" className="text-2xl font-medium tracking-tight">
          [KS]
        </Link>

        <Link
          href="#contact"
          className="inline-flex font-medium items-center gap-1 text-base transition-opacity hover:opacity-60"
        >
          <BracketArrow />
          Contact
        </Link>
      </nav>
    </header>
  );
}
