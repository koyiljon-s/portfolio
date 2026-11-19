import Link from "next/link";
import BracketArrow from "@/components/ui/bracket-arrow";

// TODO: replace with your real profile URLs.
const GITHUB_URL = "https://github.com/your-username";
const LINKEDIN_URL = "https://www.linkedin.com/in/your-username";

const linkClass =
  "group inline-flex items-center gap-1 font-medium transition-opacity hover:opacity-60";

export default function Footer() {
  return (
    <footer className="w-full text-[#011421]">
      <div className="mx-auto flex max-w-384 flex-col gap-3 px-4 py-4 text-base md:flex-row md:items-center md:justify-between">
        <nav aria-label="Footer" className="contents">
          <Link href="#contact" className={linkClass}>
            <BracketArrow />
            Contact
          </Link>
          <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
            <BracketArrow />
            Github
          </a>
          <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className={linkClass}>
            <BracketArrow />
            Linkedin
          </a>
        </nav>

        <p className="font-medium text-sm">All Rights Reserved</p>

        <p className="font-medium text-sm">&copy; 2026</p>
      </div>

      {/* Edge-to-edge name. Font size is in container units (cqw), tuned so
          "Koyiljon" in Satoshi Bold spans the full width at any screen size. */}
      <div className="@container mx-auto max-w-384 px-4 pb-4">
        <p className="select-none whitespace-nowrap text-[28.5cqw] font-bold leading-none tracking-[-0.04em]">
          Koyiljon
        </p>
      </div>
    </footer>
  );
}
