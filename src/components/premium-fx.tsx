"use client";

import { useEffect, useRef } from "react";
import { ScrollProgress } from "./scroll-progress";

export function PremiumFx({ accent }: { accent: string }) {
  const cur = useRef<HTMLDivElement>(null);
  const ring = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = matchMedia("(pointer: fine)").matches;
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce || !cur.current || !ring.current) return;

    let x = innerWidth / 2;
    let y = innerHeight / 2;
    let tx = x;
    let ty = y;
    let frame = 0;

    const onMove = (e: MouseEvent) => {
      tx = e.clientX;
      ty = e.clientY;
      if (cur.current) cur.current.style.transform = `translate(${tx}px, ${ty}px)`;
    };

    const spin = () => {
      x += (tx - x) * 0.16;
      y += (ty - y) * 0.16;
      if (ring.current) ring.current.style.transform = `translate(${x}px, ${y}px)`;
      frame = requestAnimationFrame(spin);
    };

    document.body.classList.add("has-cursor");
    addEventListener("mousemove", onMove);
    spin();
    return () => {
      document.body.classList.remove("has-cursor");
      removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <>
      <ScrollProgress className="bg-current" />
      <div className="grain" />
      <div
        ref={cur}
        className="pointer-events-none fixed top-0 left-0 z-[100] hidden h-1.5 w-1.5 -translate-x-[100px] -translate-y-[100px] rounded-full md:block"
        style={{ background: accent, margin: "-3px 0 0 -3px" }}
      />
      <div
        ref={ring}
        className="pointer-events-none fixed top-0 left-0 z-[100] hidden h-9 w-9 -translate-x-[100px] -translate-y-[100px] rounded-full md:block"
        style={{ border: `1px solid ${accent}`, margin: "-18px 0 0 -18px" }}
      />
    </>
  );
}
