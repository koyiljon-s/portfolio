"use client";

import { useState } from "react";
import { ArrowUpRight, SquareTerminal } from "lucide-react";

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PROJECTS", href: "#projects" },
  { label: "BLOGS", href: "#blog" },
];

const rightItems = [{ label: "CONTACT", href: "#contact" }];

export default function Navbar() {
  const [blogOpen, setBlogOpen] = useState(false);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 bg-[#0a0a0a] backdrop-blur border-b border-[#262625]">
      <nav className="mx-auto flex max-w-8xl items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-1 text-[32px] font-bold tracking-tight text-[#f2f4f8] border-r border-[#262625] px-10 py-4"
        >
          <SquareTerminal className="h-10 w-10" strokeWidth={1.2} />
          Koyiljon
        </a>

        <ul className="mx-auto flex  items-center gap-12 justify-between">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={
                  item.label === "BLOGS"
                    ? (e) => {
                        e.preventDefault();
                        setBlogOpen(true);
                      }
                    : undefined
                }
                className="rounded-full px-4 py-2 text-sm font-normal text-[#e8e7da] transition-colors hover:text-[#f2f4f8]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center md:flex pr-10">
          <a
            href="https://scaleworks.tech"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-7 border-l border-[#262625] text-sm font-normal text-[#e8e7da] transition-colors hover:text-[#f2f4f8]"
          >
            <span className="flex items-center gap-1.5">
              SCALEWORKS
              <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
            </span>
          </a>
          {rightItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-7 px-8 border-t border-b border-l border-r border-l-[#ff0000] border-t-[#0000fa] border-r-[#00ff00] border-b-[#fbff00] text-sm text-[#0a0a0a] bg-[#e8e7da] font-medium
              transition-colors hover:text-black"
            >
              {item.label}
            </a>
          ))}

        </div>
      </nav>
      </header>

      {blogOpen && (
        <div
          className="fixed inset-0 z-60 flex items-center justify-center px-4 backdrop-blur-sm"
          onClick={() => setBlogOpen(false)}
        >
          <div
            role="dialog"
            aria-modal="true"
            className="w-full max-w-sm border border-[#262625] bg-transparent p-10 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-xl font-semibold text-[#f2f4f8] text-center">
              Launching Soon
            </h2>
            <p className="mt-2 text-sm text-[#e8e7da]/70">
              The blog is currently under construction. Stay tuned!
            </p>
            <button
              type="button"
              onClick={() => setBlogOpen(false)}
              className="mt-6 w-full bg-[#6236f5] px-6 py-2.5 text-sm font-medium text-white transition-colors hover:bg-[#4b27c2] focus:outline-none focus:ring-2 focus:ring-[#6236f5] focus:ring-offset-2"
            >
              GOT IT
            </button>
          </div>
        </div>
      )}
    </>
  );
}