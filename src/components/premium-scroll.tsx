"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { ReactLenis } from "lenis/react";
import type { LenisRef } from "lenis/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function PremiumScroll({ children }: { children: ReactNode }) {
  const lenisRef = useRef<LenisRef>(null);

  useEffect(() => {
    const html = document.documentElement;
    const previous = html.style.scrollBehavior;
    html.style.scrollBehavior = "auto";

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => {
        html.style.scrollBehavior = previous;
      };
    }

    const update = (time: number) => {
      lenisRef.current?.lenis?.raf(time * 1000);
    };

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    const lenis = lenisRef.current?.lenis;
    const onScroll = () => ScrollTrigger.update();
    lenis?.on("scroll", onScroll);

    return () => {
      html.style.scrollBehavior = previous;
      gsap.ticker.remove(update);
      lenis?.off("scroll", onScroll);
    };
  }, []);

  return (
    <ReactLenis
      root
      ref={lenisRef}
      options={{
        lerp: 0.075,
        duration: 1.2,
        smoothWheel: true,
        syncTouch: false,
        autoRaf: false,
      }}
    >
      <div>{children}</div>
    </ReactLenis>
  );
}
