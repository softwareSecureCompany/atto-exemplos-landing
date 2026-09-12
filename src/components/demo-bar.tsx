import Link from "next/link";

export function DemoBar({ plan }: { plan: string }) {
  return (
    <div className="relative z-50 flex flex-wrap items-center justify-between gap-3 bg-[#05060a] px-[18px] py-2 text-[11px] tracking-[0.08em] text-[#8b8680]">
      <Link href="/" className="font-medium text-[#f3eee6]">
        ATTO exemplos
      </Link>
      <span>{plan}</span>
    </div>
  );
}
