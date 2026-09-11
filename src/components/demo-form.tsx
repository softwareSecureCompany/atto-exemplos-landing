"use client";

import { useState, type FormEvent, type ReactNode } from "react";

export function DemoForm({
  children,
  submitLabel,
  className = "",
  buttonClassName = "bg-current px-5 py-3.5 font-extrabold text-white",
}: {
  children: ReactNode;
  submitLabel: string;
  className?: string;
  buttonClassName?: string;
}) {
  const [ok, setOk] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setOk(true);
  }

  return (
    <form onSubmit={onSubmit} className={`grid gap-2.5 ${className}`}>
      {children}
      <button type="submit" className={buttonClassName}>
        {submitLabel}
      </button>
      {ok ? (
        <p className="font-bold text-[#0a7a3a]">
          Recebido. Este é um exemplo — nenhum dado foi enviado.
        </p>
      ) : null}
    </form>
  );
}
