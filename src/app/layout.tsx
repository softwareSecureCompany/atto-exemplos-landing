import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "ATTO | Exemplos de landing",
    template: "%s | ATTO",
  },
  description: "Três planos de landing: Básico, Essencial e Premium. Abre os exemplos e escolhe o nível.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="antialiased">{children}</body>
    </html>
  );
}
