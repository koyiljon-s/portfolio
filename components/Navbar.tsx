import Link from "next/link";
import BracketArrow from "@/components/ui/bracket-arrow";

export default function Navbar() {
  return (
    <header className="w-full">
      <nav className="mx-auto grid max-w-384 grid-cols-2 items-start gap-y-4 px-4 py-4 sm:px-4 md:grid-cols-[1fr_auto_1fr]">
        <Link
          href="/"
          className="order-1 inline-flex items-center gap-1.5 justify-self-start text-2xl font-medium tracking-tight"
        >
          [KS]
        </Link>

        <p className="order-3 col-span-2 text-lg font-semibold leading-snug text-foreground/80 md:order-2 md:col-span-1 md:whitespace-nowrap lg:text-2xl">
          <span className="block">I&apos;m a software engineer.</span>
          <span className="block">These days, working on a distributed</span>
          <span className="block">prover network for ZK proofs.</span>
        </p>

        <Link
          href="#contact"
          className="group order-2 inline-flex items-center gap-1 justify-self-end text-base font-medium transition-opacity hover:opacity-60 md:order-3"
        >
          <BracketArrow />
          Contact
        </Link>
      </nav>
    </header>
  );
}
