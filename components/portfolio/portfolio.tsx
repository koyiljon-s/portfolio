"use client";

import { IconBriefcase2, IconMail, IconUser } from "@tabler/icons-react";
import { useEffect, useRef, useState, type KeyboardEvent } from "react";
import BracketArrow from "@/components/ui/bracket-arrow";
import { CONTACT, EDUCATION, EXPERIENCE, NUMBERS, PROJECTS, SKILLS } from "@/lib/resume";
import Pile from "./pile";
import { BUBBLE, NAME, Pixels, ProjectArt } from "./pixels";
import s from "./portfolio.module.css";

const PILE = ["TypeScript", "Python", "Go", "Next.js", "FastAPI", "Node.js", "PostgreSQL", "MongoDB", "Redis", "Docker", "AWS", "Cloudflare", "Linux"];

// Things worked on, from the resume. `true` marks the larger pieces.
const PIECES: [string, boolean][] = [
  ["Legal assistant", true], ["Voice agent", true], ["Telegram bot", false], ["Admin analytics", true],
  ["Live call UI", false], ["Payments", false], ["Candidate onboarding", true], ["Code execution", false],
  ["Database backups", false], ["Terraform deploys", true], ["Model fine-tuning", true], ["ZK prover network", false],
];

const TABS = ["Experience", "Education", "Skills"];
const LATEST = PROJECTS.map((p, i) => ({ ...p, art: i })).reverse();

export default function Portfolio() {
  const rows = useRef<HTMLDivElement>(null);
  const menu = useRef<HTMLElement>(null);
  const tabs = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [tab, setTab] = useState(0);

  useEffect(() => {
    const items = rows.current?.children;
    if (!items) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) setCurrent([...items].indexOf(e.target));
      }),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    [...items].forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // On phones the project menu is a sideways strip: keep the current chip in view.
  useEffect(() => {
    const strip = menu.current;
    const chip = strip?.children[current] as HTMLElement | undefined;
    if (strip && chip) strip.scrollLeft = chip.offsetLeft - (strip.clientWidth - chip.offsetWidth) / 2;
  }, [current]);

  const onTabKey = (e: KeyboardEvent) => {
    const move = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
    if (!move) return;
    e.preventDefault();
    const next = (tab + move + TABS.length) % TABS.length;
    setTab(next);
    (tabs.current?.children[next] as HTMLElement | undefined)?.focus();
  };

  return (
    <div className={s.root} id="top">
      <header className={s.header}>
        <a href="#top" className={s.logo}>[KS]</a>
        <nav aria-label="Main">
          <a href="#work">Work</a>
          <a href="#background">Background</a>
          <a href="#contact" className="group"><BracketArrow /> Contact</a>
        </nav>
      </header>

      <main>
        <section className={s.hero}>
          <div className={s.heroText}>
            <h1>I build AI <Pixels rows={BUBBLE} className={s.inline} /> products, from screen to server.</h1>
            <p>Koyiljon Sultonaliev, software engineer in {CONTACT.location}.</p>
          </div>
          <Pile items={PILE} />
        </section>

        <dl className={s.numbers}>
          {NUMBERS.map(({ value, label }) => (
            <div key={label}><dt>{label}</dt><dd>{value}</dd></div>
          ))}
        </dl>

        <section className={s.pieces}>
          <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
            {[20, 34, 46, 58, 70, 82].map((y, i) => (
              <path key={y} vectorEffect="non-scaling-stroke" d={`M0 ${i * 18 + 4}L26 ${y}H74L100 ${i * 18 + 4}`} />
            ))}
          </svg>
          <h2>Pieces I&apos;ve put together</h2>
          <ul>
            {PIECES.map(([name, big]) => <li key={name} data-big={big}>{name}</li>)}
          </ul>
        </section>

        <section id="work" className={s.work}>
          <nav ref={menu} className={s.menu} aria-label="Projects">
            {LATEST.map((p, i) => (
              <a key={p.name} href={`#project-${i}`} aria-current={current === i ? "true" : undefined}>{p.name}</a>
            ))}
          </nav>
          <div ref={rows} className={s.rows}>
            {LATEST.map((p, i) => (
              <article key={p.name} id={`project-${i}`}>
                <div className={s.rowText}>
                  <p className={s.meta}>{p.org ? `${p.org}, ` : ""}{p.dates}</p>
                  <h2>{p.name}</h2>
                  {p.points.map((x) => <p key={x}>{x}</p>)}
                  <p className={s.meta}>{p.tech.join(", ")}</p>
                  {p.url && (
                    <a className={`group ${s.visit}`} href={p.url} target="_blank" rel="noopener noreferrer"><BracketArrow /> Visit site</a>
                  )}
                </div>
                <ProjectArt index={p.art} className={s.art} />
              </article>
            ))}
          </div>
        </section>

        <section id="background" className={s.background}>
          <h2>Background</h2>
          <div className={s.tabbed}>
            <div ref={tabs} className={s.tabs} role="tablist" aria-label="Background" onKeyDown={onTabKey}>
              {TABS.map((name, i) => (
                <button
                  key={name}
                  type="button"
                  role="tab"
                  id={`tab-${i}`}
                  aria-selected={tab === i}
                  aria-controls="tab-panel"
                  tabIndex={tab === i ? 0 : -1}
                  onClick={() => setTab(i)}
                >
                  {name}
                </button>
              ))}
            </div>
            <div className={s.panel} role="tabpanel" id="tab-panel" aria-labelledby={`tab-${tab}`}>
              {tab === 0 && (
                <>
                  <div className={s.lead}><h3>{EXPERIENCE.role}</h3><p>{EXPERIENCE.org}<br />{EXPERIENCE.dates}</p></div>
                  <ul>{EXPERIENCE.points.map((x) => <li key={x}>{x}</li>)}</ul>
                </>
              )}
              {tab === 1 && (
                <>
                  <div className={s.lead}><h3>{EDUCATION.degree}</h3><p>{EDUCATION.dates}</p></div>
                  <ul><li>{EDUCATION.school}</li></ul>
                </>
              )}
              {tab === 2 && (
                <dl className={s.skills}>
                  {SKILLS.map(({ group, items }) => (
                    <div key={group}><dt>{group}</dt>{items.map((x) => <dd key={x}>{x}</dd>)}</div>
                  ))}
                </dl>
              )}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className={s.footer}>
        <div className={s.links}>
          <a className="group" href={`mailto:${CONTACT.email}`}><BracketArrow /> {CONTACT.email}</a>
          <a className="group" href={CONTACT.github} target="_blank" rel="noopener noreferrer"><BracketArrow /> Github</a>
          <a className="group" href={CONTACT.linkedin} target="_blank" rel="noopener noreferrer"><BracketArrow /> Linkedin</a>
          <p>All Rights Reserved</p>
          <p>&copy; 2026</p>
        </div>
        <Pixels rows={NAME} className={s.name} label="Koyiljon" />
      </footer>

      <nav className={s.bottomBar} aria-label="Quick links">
        <a href="#work"><IconBriefcase2 size={22} stroke={1.5} aria-hidden="true" /> Work</a>
        <a href="#background"><IconUser size={22} stroke={1.5} aria-hidden="true" /> Background</a>
        <a href="#contact"><IconMail size={22} stroke={1.5} aria-hidden="true" /> Contact</a>
      </nav>
    </div>
  );
}
