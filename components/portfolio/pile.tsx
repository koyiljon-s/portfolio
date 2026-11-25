"use client";

import { useEffect, useRef } from "react";
import s from "./portfolio.module.css";

type Body = { el: HTMLElement; x: number; y: number; w: number; h: number; vx: number; vy: number; held: boolean };

const GRAVITY = 0.55;

/** One step of a small box simulation: no rotation, boxes only stack. */
function step(bodies: Body[], W: number, H: number) {
  for (const b of bodies) {
    if (b.held) continue;
    b.vy += GRAVITY;
    b.vx *= 0.985;
    b.x += b.vx;
    b.y += b.vy;
  }
  for (let pass = 0; pass < 6; pass++) {
    for (let i = 0; i < bodies.length; i++) {
      for (let j = i + 1; j < bodies.length; j++) {
        const a = bodies[i];
        const b = bodies[j];
        const ox = Math.min(a.x + a.w, b.x + b.w) - Math.max(a.x, b.x);
        const oy = Math.min(a.y + a.h, b.y + b.h) - Math.max(a.y, b.y);
        if (ox <= 0 || oy <= 0) continue;
        const share = a.held ? 0 : b.held ? 1 : 0.5;
        if (ox < oy) {
          const dir = a.x + a.w / 2 < b.x + b.w / 2 ? -1 : 1;
          a.x += dir * ox * share;
          b.x -= dir * ox * (1 - share);
          const v = (a.vx + b.vx) / 2;
          a.vx = b.vx = v;
        } else {
          const aAbove = a.y + a.h / 2 < b.y + b.h / 2;
          const top = aAbove ? a : b;
          const low = aAbove ? b : a;
          // Push the upper box out, so stacks rest on the floor.
          if (!top.held) top.y -= oy;
          else if (!low.held) low.y += oy;
          if (top.vy > low.vy) top.vy = low.vy > 0 ? 0 : low.vy;
          top.vx *= 0.9;
        }
      }
    }
    for (const b of bodies) {
      if (b.x < 0) { b.x = 0; b.vx = Math.abs(b.vx) * 0.4; }
      if (b.x + b.w > W) { b.x = W - b.w; b.vx = -Math.abs(b.vx) * 0.4; }
      if (b.y + b.h > H) { b.y = H - b.h; b.vy = b.vy > 4 ? -b.vy * 0.25 : 0; b.vx *= 0.9; }
    }
  }
}

/** Skill blocks that fall into a pile and can be picked up and thrown. */
export default function Pile({ items }: { items: string[] }) {
  const list = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const root = list.current;
    if (!root) return;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = [...root.children] as HTMLElement[];
    let W = root.clientWidth;
    let H = root.clientHeight;
    const bodies: Body[] = els.map((el, i) => {
      const w = el.offsetWidth;
      const h = el.offsetHeight;
      // Fall near the sides first, leaving the headline clear.
      const t = ((i * 5) % els.length) / Math.max(1, els.length - 1);
      return { el, w, h, x: t * Math.max(0, W - w), y: -h * 1.6 * (i + 1), vx: 0, vy: 0, held: false };
    });
    root.dataset.live = "true";

    const paint = () => bodies.forEach((b) => { b.el.style.transform = `translate(${b.x}px, ${b.y}px)`; });
    let frame = 0;
    let calm = 0;
    const tick = () => {
      frame = 0;
      step(bodies, W, H);
      paint();
      const moving = bodies.some((b) => b.held || Math.abs(b.vx) > 0.05 || Math.abs(b.vy) > GRAVITY * 2 || b.y < -b.h);
      calm = moving ? 0 : calm + 1;
      if (calm < 60) wake();
    };
    const wake = () => {
      if (!frame) frame = requestAnimationFrame(tick);
    };
    const settle = () => {
      for (let i = 0; i < 700; i++) step(bodies, W, H);
      paint();
    };
    const go = () => {
      calm = 0;
      if (reduce) settle();
      else wake();
    };
    go();

    let grab: { b: Body; dx: number; dy: number; id: number; moved: number } | null = null;
    const local = (e: PointerEvent) => {
      const r = root.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const down = (e: PointerEvent) => {
      const b = bodies.find((v) => v.el === e.target);
      if (!b) return;
      const p = local(e);
      grab = { b, dx: p.x - b.x, dy: p.y - b.y, id: e.pointerId, moved: 0 };
      b.held = true;
      b.el.setPointerCapture(e.pointerId);
      calm = 0;
      if (!reduce) wake();
    };
    const move = (e: PointerEvent) => {
      if (!grab || e.pointerId !== grab.id) return;
      const { b, dx, dy } = grab;
      const p = local(e);
      const x = Math.min(W - b.w, Math.max(0, p.x - dx));
      const y = Math.min(H - b.h, Math.max(0, p.y - dy));
      grab.moved += Math.abs(x - b.x) + Math.abs(y - b.y);
      b.vx = Math.max(-22, Math.min(22, x - b.x));
      b.vy = Math.max(-22, Math.min(22, y - b.y));
      b.x = x;
      b.y = y;
      if (reduce) paint();
    };
    const up = (e: PointerEvent) => {
      if (!grab || e.pointerId !== grab.id) return;
      grab.b.held = false;
      // A tap makes the block jump, which also works where dragging is awkward.
      if (e.type === "pointerup" && grab.moved < 6 && !reduce) {
        grab.b.vy = -15;
        grab.b.vx = Math.random() * 8 - 4;
      }
      grab = null;
      go();
    };
    const resize = () => {
      W = root.clientWidth;
      H = root.clientHeight;
      bodies.forEach((b) => {
        b.w = b.el.offsetWidth;
        b.h = b.el.offsetHeight;
        b.x = Math.min(Math.max(0, W - b.w), b.x);
      });
      go();
    };
    root.addEventListener("pointerdown", down);
    root.addEventListener("pointermove", move);
    root.addEventListener("pointerup", up);
    root.addEventListener("pointercancel", up);
    const observer = new ResizeObserver(resize);
    observer.observe(root);
    return () => {
      cancelAnimationFrame(frame);
      observer.disconnect();
      root.removeEventListener("pointerdown", down);
      root.removeEventListener("pointermove", move);
      root.removeEventListener("pointerup", up);
      root.removeEventListener("pointercancel", up);
    };
  }, []);

  return (
    <ul ref={list} className={s.pile} aria-label="Skills">
      {items.map((name) => <li key={name}>{name}</li>)}
    </ul>
  );
}
