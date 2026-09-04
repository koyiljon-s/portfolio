"use client";

import React, { useEffect, useRef } from "react";

interface Point {
  x: number;
  y: number;
  vx: number;
  vy: number;
  pulse: number;
  pulseSpeed: number;
}

export interface LatticeBackgroundProps {
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
  children?: React.ReactNode;
}

export function LatticeBackground({
  title = "Geometric",
  subtitle = "",
  description = "Dynamic Delaunay triangulation lattice with real-time cursor field deformation and vertex energy pulses.",
  className = "",
  children,
}: LatticeBackgroundProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let animationFrameId = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    const mouse = { x: -1000, y: -1000, targetX: -1000, targetY: -1000 };
    let points: Point[] = [];

    let isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const updateTheme = (event: MediaQueryListEvent) => {
      isDarkMode = event.matches;
    };
    mediaQuery.addEventListener("change", updateTheme);

    const maxDistance = 140;
    const maxDistSq = maxDistance * maxDistance;

    const initPoints = (nextWidth: number, nextHeight: number) => {
      const density = Math.floor((nextWidth * nextHeight) / 9000);
      const count = Math.min(Math.max(density, 50), 120);

      points = Array.from({ length: count }, () => ({
        x: Math.random() * nextWidth,
        y: Math.random() * nextHeight,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        pulse: Math.random() * Math.PI * 2,
        pulseSpeed: 1 + Math.random() * 1.5,
      }));
    };

    const handleResize = () => {
      const rect = container.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initPoints(width, height);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouse.targetX = event.clientX - rect.left;
      mouse.targetY = event.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.targetX = -1000;
      mouse.targetY = -1000;
    };

    handleResize();
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);
    container.addEventListener("mousemove", handleMouseMove, { passive: true });
    container.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    let lastTime = performance.now();
    const render = (now: number) => {
      const dt = Math.min((now - lastTime) / 1000, 0.033);
      lastTime = now;

      mouse.x += (mouse.targetX - mouse.x) * 0.1;
      mouse.y += (mouse.targetY - mouse.y) * 0.1;
      ctx.fillStyle = isDarkMode ? "#04060a" : "#f1f5f9";
      ctx.fillRect(0, 0, width, height);

      const strokeRGB = isDarkMode ? "148, 163, 184" : "51, 65, 85";
      const accentRGB = isDarkMode ? "129, 140, 248" : "79, 70, 229";

      for (const point of points) {
        point.pulse += dt * point.pulseSpeed;
        point.x += point.vx * dt * 60;
        point.y += point.vy * dt * 60;

        if (point.x < 0 || point.x > width) {
          point.x = Math.max(0, Math.min(width, point.x));
          point.vx *= -1;
        }
        if (point.y < 0 || point.y > height) {
          point.y = Math.max(0, Math.min(height, point.y));
          point.vy *= -1;
        }

        const dx = mouse.x - point.x;
        const dy = mouse.y - point.y;
        const distanceSquared = dx * dx + dy * dy;
        if (distanceSquared < 40000 && distanceSquared > 0) {
          const distance = Math.sqrt(distanceSquared);
          const force = (1 - distance / 200) * 35;
          point.x -= (dx / distance) * force * dt * 6;
          point.y -= (dy / distance) * force * dt * 6;
        }
      }

      const cellSize = maxDistance;
      const cols = Math.max(1, Math.ceil(width / cellSize));
      const rows = Math.max(1, Math.ceil(height / cellSize));
      const grid: number[][][] = Array.from({ length: cols }, () =>
        Array.from({ length: rows }, () => [])
      );

      points.forEach((point, index) => {
        const col = Math.min(cols - 1, Math.max(0, Math.floor(point.x / cellSize)));
        const row = Math.min(rows - 1, Math.max(0, Math.floor(point.y / cellSize)));
        grid[col][row].push(index);
      });

      for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows; row++) {
          const cellPoints = grid[col][row];
          const neighbors: number[] = [];
          for (let nextCol = Math.max(0, col - 1); nextCol <= Math.min(cols - 1, col + 1); nextCol++) {
            for (let nextRow = Math.max(0, row - 1); nextRow <= Math.min(rows - 1, row + 1); nextRow++) {
              neighbors.push(...grid[nextCol][nextRow]);
            }
          }

          for (const index of cellPoints) {
            const pointA = points[index];
            for (let neighborIndex = 0; neighborIndex < neighbors.length; neighborIndex++) {
              const secondIndex = neighbors[neighborIndex];
              if (index >= secondIndex) continue;
              const pointB = points[secondIndex];
              const abx = pointA.x - pointB.x;
              const aby = pointA.y - pointB.y;
              if (abx * abx + aby * aby > maxDistSq) continue;

              for (let thirdIndex = neighborIndex + 1; thirdIndex < neighbors.length; thirdIndex++) {
                const thirdPointIndex = neighbors[thirdIndex];
                if (secondIndex >= thirdPointIndex) continue;
                const pointC = points[thirdPointIndex];
                const bcx = pointB.x - pointC.x;
                const bcy = pointB.y - pointC.y;
                const cax = pointC.x - pointA.x;
                const cay = pointC.y - pointA.y;
                if (bcx * bcx + bcy * bcy > maxDistSq || cax * cax + cay * cay > maxDistSq) continue;

                const centerX = (pointA.x + pointB.x + pointC.x) / 3;
                const centerY = (pointA.y + pointB.y + pointC.y) / 3;
                const mouseX = mouse.x - centerX;
                const mouseY = mouse.y - centerY;
                const mouseDistanceSquared = mouseX * mouseX + mouseY * mouseY;
                const isNearMouse = mouseDistanceSquared < 48400;
                const fillAlpha = isNearMouse
                  ? (1 - Math.sqrt(mouseDistanceSquared) / 220) * (isDarkMode ? 0.25 : 0.15)
                  : 0.03;

                ctx.fillStyle = `rgba(${isNearMouse ? accentRGB : strokeRGB}, ${fillAlpha.toFixed(2)})`;
                ctx.strokeStyle = `rgba(${isNearMouse ? accentRGB : strokeRGB}, ${(isNearMouse ? fillAlpha * 1.5 : 0.08).toFixed(2)})`;
                ctx.lineWidth = isNearMouse ? 0.8 : 0.4;
                ctx.beginPath();
                ctx.moveTo(pointA.x, pointA.y);
                ctx.lineTo(pointB.x, pointB.y);
                ctx.lineTo(pointC.x, pointC.y);
                ctx.closePath();
                ctx.fill();
                ctx.stroke();
              }
            }
          }
        }
      }

      for (const point of points) {
        const dx = mouse.x - point.x;
        const dy = mouse.y - point.y;
        const isNear = dx * dx + dy * dy < 48400;
        ctx.fillStyle = `rgba(${isNear ? accentRGB : strokeRGB}, ${isNear ? 0.9 : 0.4})`;
        ctx.beginPath();
        ctx.arc(point.x, point.y, isNear ? 3.5 : 1.8 + Math.sin(point.pulse), 0, Math.PI * 2);
        ctx.fill();
        if (isNear) {
          ctx.strokeStyle = `rgba(${accentRGB}, 0.35)`;
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.arc(point.x, point.y, 7 + Math.sin(point.pulse * 2) * 2.5, 0, Math.PI * 2);
          ctx.stroke();
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);
    return () => {
      cancelAnimationFrame(animationFrameId);
      resizeObserver.disconnect();
      mediaQuery.removeEventListener("change", updateTheme);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative h-full min-h-[340px] w-full overflow-hidden select-none bg-slate-950 ${className}`}
    >
      <canvas ref={canvasRef} className="absolute inset-0 block cursor-crosshair" />
      {children !== undefined ? (
        <div className="pointer-events-none relative z-10 flex h-full flex-col items-center justify-center px-4 text-center font-mono text-white mix-blend-difference">
          {children}
        </div>
      ) : (subtitle || title || description) ? (
        <div className="pointer-events-none relative z-10 flex h-full flex-col items-center justify-center px-4 text-center font-mono text-white mix-blend-difference">
          {subtitle && <span className="mb-3 text-xs uppercase tracking-widest opacity-80">{subtitle}</span>}
          {title && <h1 className="text-6xl font-black uppercase leading-none tracking-tighter md:text-9xl">{title}</h1>}
          {description && <p className="mt-4 max-w-lg text-xs opacity-70 md:text-sm">{description}</p>}
        </div>
      ) : null}
    </div>
  );
}

export default LatticeBackground;
