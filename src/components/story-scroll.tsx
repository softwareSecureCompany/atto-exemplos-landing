"use client";

import { useLayoutEffect, useRef, type ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function StoryRoot({
  children,
  className = "",
  setup,
}: {
  children: ReactNode;
  className?: string;
  setup: (api: typeof gsap, root: HTMLElement) => void;
}) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const el = root.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => setup(gsap, el), el);
    const refresh = () => ScrollTrigger.refresh();
    const frame = requestAnimationFrame(refresh);
    window.addEventListener("resize", refresh);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", refresh);
      ctx.revert();
    };
  }, [setup]);

  return (
    <div ref={root} className={className}>
      {children}
    </div>
  );
}

export function pinHorizontalReel(api: typeof gsap, root: HTMLElement) {
  const mm = api.matchMedia();
  mm.add("(min-width: 860px)", () => {
    const wrap = root.querySelector<HTMLElement>("[data-reel]");
    const track = root.querySelector<HTMLElement>("[data-reel-track]");
    if (!wrap || !track) return;
    const distance = () => Math.max(0, track.scrollWidth - innerWidth);
    api.to(track, {
      x: () => -distance(),
      ease: "none",
      scrollTrigger: {
        trigger: wrap,
        pin: true,
        scrub: 0.75,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        end: () => "+=" + Math.max(distance(), innerHeight * 0.8),
      },
    });
  });
}

export function layerParallax(api: typeof gsap, root: HTMLElement, trigger: string) {
  const section = root.querySelector(trigger);
  if (!section) return;
  api.utils.toArray<HTMLElement>(root.querySelectorAll("[data-depth]")).forEach((layer) => {
    const depth = Number(layer.dataset.depth);
    api.to(layer, {
      y: () => innerHeight * depth * 0.38,
      ease: "none",
      scrollTrigger: { trigger: section, start: "top top", end: "bottom top", scrub: true },
    });
  });
}

export function crossfadeStory(api: typeof gsap, root: HTMLElement) {
  const scopes = api.utils.toArray<HTMLElement>(root.querySelectorAll("[data-story]"));
  const groups = scopes.length ? scopes : [root];

  groups.forEach((scope) => {
    const frames = api.utils.toArray<HTMLElement>(scope.querySelectorAll("[data-story-img]"));
    const beats = api.utils.toArray<HTMLElement>(scope.querySelectorAll("[data-story-beat]"));
    if (!frames.length || !beats.length) return;

    const show = (index: number) => {
      frames.forEach((frame, i) => {
        api.to(frame, { opacity: i === index ? 1 : 0, duration: 0.7, ease: "power2.out", overwrite: "auto" });
      });
    };

    beats.forEach((beat, i) => {
      ScrollTrigger.create({
        trigger: beat,
        start: "top 62%",
        end: "bottom 38%",
        onEnter: () => show(i),
        onEnterBack: () => show(i),
      });
    });
  });
}

export function sceneMotion(api: typeof gsap, root: HTMLElement) {
  api.utils.toArray<HTMLElement>(root.querySelectorAll("[data-speed]")).forEach((el) => {
    const speed = Number(el.dataset.speed);
    const scene = el.closest<HTMLElement>("[data-scene]") ?? el.parentElement;
    if (!scene) return;
    api.to(el, {
      y: () => innerHeight * speed * 0.32,
      ease: "none",
      scrollTrigger: { trigger: scene, start: "top bottom", end: "bottom top", scrub: true },
    });
  });

  api.utils.toArray<HTMLElement>(root.querySelectorAll("[data-drift]")).forEach((el) => {
    const x = Number(el.dataset.drift);
    const scene = el.closest<HTMLElement>("[data-scene]") ?? el;
    api.fromTo(
      el,
      { x },
      {
        x: -x,
        ease: "none",
        scrollTrigger: { trigger: scene, start: "top bottom", end: "bottom top", scrub: true },
      }
    );
  });

  api.utils.toArray<HTMLElement>(root.querySelectorAll("[data-rise]")).forEach((el) => {
    api.fromTo(
      el,
      { y: 72, opacity: 0.12 },
      {
        y: 0,
        opacity: 1,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top 90%", end: "top 46%", scrub: true },
      }
    );
  });

  api.utils.toArray<HTMLElement>(root.querySelectorAll("[data-slide]")).forEach((el) => {
    const dir = el.dataset.slide === "right" ? 90 : -90;
    api.fromTo(
      el,
      { x: dir, opacity: 0.15 },
      {
        x: 0,
        opacity: 1,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top 88%", end: "top 50%", scrub: true },
      }
    );
  });

  api.utils.toArray<HTMLElement>(root.querySelectorAll("[data-clip]")).forEach((el) => {
    api.fromTo(
      el,
      { clipPath: "inset(16% 10% 16% 10%)" },
      {
        clipPath: "inset(0% 0% 0% 0%)",
        ease: "none",
        scrollTrigger: { trigger: el, start: "top 86%", end: "top 42%", scrub: true },
      }
    );
  });

  api.utils.toArray<HTMLElement>(root.querySelectorAll("[data-scale-in]")).forEach((el) => {
    api.fromTo(
      el,
      { scale: 1.2 },
      {
        scale: 1,
        ease: "none",
        scrollTrigger: { trigger: el, start: "top 92%", end: "top 28%", scrub: true },
      }
    );
  });

  api.utils.toArray<HTMLElement>(root.querySelectorAll("[data-grow]")).forEach((el) => {
    api.fromTo(
      el,
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: "top center",
        ease: "none",
        scrollTrigger: { trigger: el.closest("[data-scene]") ?? el, start: "top 70%", end: "bottom 40%", scrub: true },
      }
    );
  });
}

export function markChapters(api: typeof gsap, root: HTMLElement) {
  api.utils.toArray<HTMLElement>(root.querySelectorAll("[data-chapter]")).forEach((section) => {
    ScrollTrigger.create({
      trigger: section,
      start: "top 48%",
      end: "bottom 48%",
      onToggle: (self) => {
        if (!self.isActive) return;
        root.querySelectorAll("[data-nav-dot]").forEach((dot) => {
          dot.setAttribute("data-on", dot.getAttribute("data-nav-dot") === section.id ? "1" : "0");
        });
      },
    });
  });
}

export function ChapterRail({
  items,
  color,
  className = "",
}: {
  items: { id: string; label: string }[];
  color: string;
  className?: string;
}) {
  return (
    <nav aria-label="Capítulos" className={`pointer-events-none fixed top-1/2 right-6 z-30 hidden -translate-y-1/2 xl:block ${className}`}>
      <ol className="flex flex-col gap-3.5">
        {items.map((item, index) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              data-nav-dot={item.id}
              data-on={index === 0 ? "1" : "0"}
              className="pointer-events-auto flex items-center justify-end gap-3 text-[10px] tracking-[0.2em] uppercase opacity-30 transition-opacity duration-500 data-[on=1]:opacity-100"
              style={{ color }}
            >
              {item.label}
              <span className="block h-px w-7 bg-current" />
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
