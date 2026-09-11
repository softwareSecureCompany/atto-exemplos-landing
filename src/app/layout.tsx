import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ATTO — Exemplos de landing",
    template: "%s · ATTO",
  },
  description: "Dois planos de landing: Essencial e Premium. Escolha o nível.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
