"use client";

import { useEffect, useState } from "react";

export function ScrollProgress({ className = "bg-current" }: { className?: string }) {
  const [p, setP] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
      setP(scrollY / max);
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    return () => removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={`pointer-events-none fixed top-0 right-0 left-0 z-50 h-0.5 origin-left ${className}`}
      style={{ transform: `scaleX(${p})` }}
    />
  );
}
