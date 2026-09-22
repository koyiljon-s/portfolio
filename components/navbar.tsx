"use client";

import { useState } from "react";

const navItems = [
  { label: "ABOUT", href: "#about" },
  { label: "EXPERIENCE", href: "#experience" },
  { label: "PROJECTS", href: "#projects" },
  { label: "BLOGS", href: "#blog" },
  { label: "SCALEWORKS", href: "#scaleworks" },
];

const rightItems = [{ label: "CONTACT", href: "#contact" }];

export default function Navbar() {

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[#0a0a0a] backdrop-blur border-b border-[#262625]">
      <nav className="mx-auto flex max-w-8xl items-center justify-between">
        <a
          href="#"
          className="text-[32px] font-bold tracking-tight text-[#f2f4f8] border-r border-[#262625] px-10 py-4"
        >
          Koyiljon
        </a>

        <ul className="mx-auto flex items-center justify-between">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="rounded-full px-4 py-2 text-[16px] text-[#e8e7da] transition-colors hover:text-[#f2f4f8]"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center md:flex px-10">
          {rightItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="py-7 px-8 border-t border-b border-l border-r border-l-[#ff0000] border-t-[#0000fa] border-r-[#00ff00] border-b-[#fbff00] text-[16px] text-[#0a0a0a] bg-[#e8e7da] font-medium
              transition-colors hover:text-black"
            >
              {item.label}
            </a>
          ))}
        </div>

        
      </nav>

      
    </header>
  );
}