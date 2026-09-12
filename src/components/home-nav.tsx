"use client";

import { useState } from "react";
import Image from "next/image";
import { WA_HOME } from "@/lib/site";

const links = [
  { href: "#planos", label: "Planos" },
  { href: "#exemplos", label: "Exemplos" },
  { href: "#duvidas", label: "Dúvidas" },
];

export function HomeNav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-[#efece6] text-[#0c0c0c]">
      <div className="mx-auto flex h-[84px] max-w-[1400px] items-center justify-between px-5 md:px-10">
        <a href="#topo" className="relative h-14 w-14 shrink-0" onClick={() => setOpen(false)}>
          <Image src="/atto-logo.png" alt="ATTO" fill sizes="56px" className="object-contain" priority />
        </a>

        <nav className="hidden items-center gap-8 text-[15px] font-medium md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:opacity-60">
              {link.label}
            </a>
          ))}
          <a href={WA_HOME} target="_blank" rel="noopener" className="bg-[#0c0c0c] px-4 py-2 text-[13px] font-bold text-[#efece6]">
            WhatsApp
          </a>
        </nav>

        <button
          type="button"
          className="text-[13px] font-bold md:hidden"
          aria-expanded={open}
          aria-controls="menu-home"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </div>

      {open ? (
        <nav id="menu-home" className="grid gap-1 border-t border-black/10 px-5 py-4 md:hidden">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="py-2 text-lg" onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href={WA_HOME} target="_blank" rel="noopener" className="bg-[#0c0c0c] px-4 py-3 text-center font-bold text-[#efece6]">
            WhatsApp
          </a>
        </nav>
      ) : null}
    </header>
  );
}
