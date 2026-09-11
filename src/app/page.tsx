import Image from "next/image";
import Link from "next/link";
import { Instrument_Serif, Inter } from "next/font/google";
import { IndexMotion } from "@/components/index-motion";
import { Reveal } from "@/components/reveal";
import { ATTO, IG, WA } from "@/lib/site";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});
const sans = Inter({ subsets: ["latin"] });

const essencial = [
  {
    href: "/essencial/barbearia",
    src: "/thumbs/essencial-barbearia.jpg",
    chip: "Barbearia",
    title: "Cavalera",
    text: "Corte, barba, hora marcada. Página de campanha completa.",
  },
  {
    href: "/essencial/odonto",
    src: "/thumbs/essencial-odonto.jpg",
    chip: "Odontologia",
    title: "Sorriso & Cia",
    text: "Clínica de família com prova, tratamentos e agenda.",
  },
  {
    href: "/essencial/imobiliaria",
    src: "/thumbs/essencial-imobiliaria.jpg",
    chip: "Imóveis",
    title: "Ninho Certo",
    text: "Compra e aluguel no ABC, lead filtrado no WhatsApp.",
  },
];

const premium = [
  {
    href: "/premium/restaurante",
    src: "/thumbs/premium-restaurante.jpg",
    chip: "Gastronomia",
    title: "Osteria Luce",
    text: "Sala, carta de temporada e reserva. Italiana em Pinheiros.",
  },
  {
    href: "/premium/arquitetura",
    src: "/thumbs/premium-arquitetura.jpg",
    chip: "Arquitetura",
    title: "Atelier Ângulo",
    text: "Obras, método e briefing. Luz e prazo que se cumpre.",
  },
  {
    href: "/premium/spa",
    src: "/thumbs/premium-spa.jpg",
    chip: "Wellness",
    title: "Casa Aura",
    text: "Rituais, salas particulares e agenda. Higienópolis.",
  },
];

export default function HomePage() {
  return (
    <div className={`${sans.className} bg-[#f8f5f1] text-[#0d0b09]`}>
      <IndexMotion />
      <nav className="fixed inset-x-[22px] top-[18px] z-40 flex items-center justify-between border border-[#0d0b09]/12 bg-[#f8f5f1]/72 px-5 py-3.5 backdrop-blur-lg">
        <Image src="/atto-logo.png" alt="ATTO" width={120} height={28} className="h-7 w-auto" />
        <a href={WA} target="_blank" rel="noopener" className="text-[12px] tracking-[0.16em] uppercase">
          WhatsApp
        </a>
      </nav>

      <header className="relative grid min-h-svh place-items-end justify-items-start overflow-hidden px-[7vw] pt-24 pb-[12vh]">
        <div
          data-speed="0.18"
          className="absolute -inset-[18%] bg-[radial-gradient(ellipse_at_18%_20%,rgba(255,255,255,.55),transparent_42%),radial-gradient(ellipse_at_88%_70%,rgba(13,11,9,.08),transparent_46%),#ede7df]"
        />
        <div
          data-speed="0.08"
          className="pointer-events-none absolute top-[6%] left-[-8%] h-[46vw] w-[46vw] rounded-full bg-[radial-gradient(circle,rgba(13,11,9,.08),transparent_68%)]"
        />
        <div
          data-speed="-0.06"
          className="pointer-events-none absolute right-[-6%] bottom-[4%] h-[32vw] w-[32vw] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,.7),transparent_68%)]"
        />
        <div className="relative z-2 max-w-[38ch]">
          <p className="mb-[18px] text-[11px] tracking-[0.28em] text-[#5c5752] uppercase">
            ATTO · Portfólio de landing
          </p>
          <h1 className={`${serif.className} max-w-[12ch] text-[clamp(3.2rem,10vw,8.4rem)] leading-[0.88] font-normal tracking-[-0.04em]`}>
            Dois planos.
            <br />
            <em className="text-[#5c5752]">Você escolhe o nível.</em>
          </h1>
          <p className="mt-[22px] text-[1.08rem] leading-[1.65] text-[#5c5752]">
            Essencial é campanha editorial. Premium é presença de outro nível. Cada exemplo é um negócio — não a ATTO com outra cor.
          </p>
        </div>
      </header>

      <section>
        <article className="flex flex-col border-t border-[#d4d0cb] bg-white px-[7vw] py-[12vh]">
          <Reveal className="mb-12 max-w-[520px]">
            <p className="text-[11px] tracking-[0.22em] text-[#5c5752] uppercase">01 · Essencial</p>
            <p className={`${serif.className} my-2.5 text-[clamp(3rem,6vw,5rem)] tracking-[-0.03em]`}>R$ 597,00</p>
            <h2 className={`${serif.className} text-[clamp(2rem,4vw,3.2rem)] font-normal`}>Campanha que converte.</h2>
            <p className="mt-3 leading-relaxed text-[#5c5752]">
              Hero em camadas, foto sticky, cardápio e prova. Peso visual — cada nicho com a própria cara.
            </p>
          </Reveal>
          <div className="grid gap-[18px] md:grid-cols-3">
            {essencial.map((item) => (
              <Card key={item.href} {...item} serif={serif.className} dark={false} />
            ))}
          </div>
        </article>

        <article className="flex flex-col bg-[#07080d] px-[7vw] py-[12vh] text-[#ece8e2]">
          <Reveal className="mb-12 max-w-[520px]">
            <p className="text-[11px] tracking-[0.22em] text-[#9a958e] uppercase">02 · Premium</p>
            <p className={`${serif.className} my-2.5 text-[clamp(3rem,6vw,5rem)] tracking-[-0.03em]`}>R$ 1.250,00</p>
            <h2 className={`${serif.className} text-[clamp(2rem,4vw,3.2rem)] font-normal`}>Presença de outro nível.</h2>
            <p className="mt-3 leading-relaxed text-[#b7b1a8]">
              Cinema, grain, cursor e a página feita para o negócio — restaurante, atelier ou spa.
            </p>
          </Reveal>
          <div className="grid gap-[18px] md:grid-cols-3">
            {premium.map((item) => (
              <Card key={item.href} {...item} serif={serif.className} dark />
            ))}
          </div>
        </article>
      </section>

      <footer className="flex flex-wrap justify-between gap-3 bg-[#0d0b09] px-[7vw] py-7 text-[11px] tracking-[0.16em] text-[#a8a49f] uppercase">
        <span>© 2026 ATTO Studio</span>
        <a href={IG} target="_blank" rel="noopener" className="text-[#f8f5f1]">
          @agencia.atto
        </a>
        <a href={ATTO} target="_blank" rel="noopener" className="text-[#f8f5f1]">
          attoagencia.com.br
        </a>
      </footer>
    </div>
  );
}

function Card({
  href,
  src,
  chip,
  title,
  text,
  serif,
  dark,
}: {
  href: string;
  src: string;
  chip: string;
  title: string;
  text: string;
  serif: string;
  dark: boolean;
}) {
  return (
    <Reveal>
      <Link
        href={href}
        className={`flex flex-col overflow-hidden border transition duration-300 hover:-translate-y-2 ${
          dark
            ? "border-white/8 bg-[#101218] hover:border-[#ece8e2]"
            : "border-[#d4d0cb] bg-[#f8f5f1] hover:border-[#0d0b09]"
        }`}
      >
        <Image src={src} alt={title} width={800} height={500} className="h-[220px] w-full object-cover" />
        <div className="p-[22px]">
          <span className={`text-[11px] tracking-[0.22em] uppercase ${dark ? "text-[#9a958e]" : "text-[#5c5752]"}`}>
            {chip}
          </span>
          <h3 className={`${serif} my-2 text-[1.7rem] font-normal`}>{title}</h3>
          <p className={`text-sm leading-relaxed ${dark ? "text-[#9a958e]" : "text-[#5c5752]"}`}>{text}</p>
        </div>
      </Link>
    </Reveal>
  );
}
