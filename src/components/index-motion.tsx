"use client";

import { useEffect } from "react";
import { ScrollProgress } from "./scroll-progress";

export function IndexMotion() {
  useEffect(() => {
    const layers = [...document.querySelectorAll<HTMLElement>("[data-speed]")];
    let mx = 0;
    let my = 0;
    let tx = 0;
    let ty = 0;
    let frame = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX / innerWidth - 0.5;
      my = e.clientY / innerHeight - 0.5;
    };

    const loop = () => {
      tx += (mx - tx) * 0.06;
      ty += (my - ty) * 0.06;
      layers.forEach((el) => {
        const s = Number(el.dataset.speed);
        el.style.transform = `translate3d(${tx * s * 80}px, ${scrollY * s}px, 0)`;
      });
      frame = requestAnimationFrame(loop);
    };

    addEventListener("mousemove", onMove);
    loop();
    return () => {
      removeEventListener("mousemove", onMove);
      cancelAnimationFrame(frame);
    };
  }, []);

  return <ScrollProgress className="bg-[#0d0b09]" />;
}
