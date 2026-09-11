"use client";

import { useState } from "react";

export function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q} className={isOpen ? "open" : undefined}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between border-t border-current/15 py-4 text-left font-bold"
            >
              {item.q}
              <span>{isOpen ? "–" : "+"}</span>
            </button>
            {isOpen ? <p className="pb-3.5 opacity-70">{item.a}</p> : null}
          </div>
        );
      })}
    </div>
  );
}
