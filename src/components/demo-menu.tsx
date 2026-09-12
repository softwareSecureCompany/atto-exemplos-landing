"use client";

import { useState, type ReactNode } from "react";

export function DemoMenu({
  children,
  buttonClassName,
}: {
  children: ReactNode;
  buttonClassName: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        className={`md:hidden ${buttonClassName}`}
        aria-expanded={open}
        aria-controls="demo-menu"
        onClick={() => setOpen((value) => !value)}
      >
        {open ? "Fechar" : "Menu"}
      </button>
      <nav
        id="demo-menu"
        className={`${open ? "flex" : "hidden"} absolute top-full right-0 left-0 z-20 flex-col gap-3 bg-inherit px-5 py-4 md:static md:flex md:flex-row md:items-center md:gap-6 md:bg-transparent md:p-0`}
      >
        {children}
      </nav>
    </>
  );
}
