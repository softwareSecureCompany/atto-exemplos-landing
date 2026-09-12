"use client";

import { useEffect } from "react";

type Layer = {
  el: HTMLElement;
  py: number;
  px: number;
  mouse: number;
};

export function HomeFx() {
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    let layers: Layer[] = [];
    let mx = 0;
    let my = 0;
    let sx = 0;
    let sy = 0;
    let frame = 0;
    let running = true;

    const collect = () => {
      layers = [...document.querySelectorAll<HTMLElement>("[data-py], [data-px]")].map((el) => ({
        el,
        py: Number(el.dataset.py || 0),
        px: Number(el.dataset.px || 0),
        mouse: Number(el.dataset.mouse || 0),
      }));
    };

    const tick = () => {
      if (!running) return;
      sx += (mx - sx) * 0.08;
      sy += (my - sy) * 0.08;
      const vh = window.innerHeight || 1;
      const max = document.documentElement.scrollHeight - vh;
      const bar = document.querySelector<HTMLElement>("[data-progress]");
      if (bar) bar.style.transform = `scaleX(${max > 0 ? window.scrollY / max : 0})`;

      for (const layer of layers) {
        const rect = layer.el.getBoundingClientRect();
        const center = rect.top + rect.height * 0.5 - vh * 0.5;
        const x = center * layer.px + sx * layer.mouse;
        const y = center * layer.py + sy * layer.mouse * 0.4;
        layer.el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }

      frame = requestAnimationFrame(tick);
    };

    const onMove = (event: MouseEvent) => {
      mx = (event.clientX / window.innerWidth - 0.5) * 32;
      my = (event.clientY / window.innerHeight - 0.5) * 20;
    };

    collect();
    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("resize", collect, { passive: true });
    frame = requestAnimationFrame(tick);

    return () => {
      running = false;
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("resize", collect);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed top-0 right-0 left-0 z-50 h-[2px] origin-left bg-white mix-blend-difference max-md:hidden"
      data-progress
    />
  );
}
