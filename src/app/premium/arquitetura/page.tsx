import Image from "next/image";
import { Syne, Figtree } from "next/font/google";
import { DemoBar } from "@/components/demo-bar";
import { DemoForm } from "@/components/demo-form";
import { Faq } from "@/components/faq";
import { Magnetic } from "@/components/magnetic";
import { PremiumFx } from "@/components/premium-fx";
import { Reveal } from "@/components/reveal";
import { WA } from "@/lib/site";

const display = Syne({ subsets: ["latin"], weight: ["500", "600", "700"] });
const sans = Figtree({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata = { title: "Atelier Ângulo | Arquitetura em São Paulo" };

const obras = [
  ["01", "Casa Itaim", "280 m² · reforma total · luz norte.", "2025"],
  ["02", "Loja Vila Madalena", "90 m² · vitrine, ateliê e estoque.", "2024"],
  ["03", "Apt. Higienópolis", "140 m² · madeira e concreto aparente.", "2024"],
  ["04", "Casa Guarujá", "360 m² · brise, vento e sombra.", "2023"],
];

export default function AnguloPage() {
  return (
    <div className={`${sans.className} bg-[#05060f] text-[#e8eaf2]`}>
      <PremiumFx accent="#3b5bff" />
      <DemoBar plan="Premium · R$ 1.250" />
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-white/10 bg-[#05060f]/60 px-5 py-4 backdrop-blur-xl">
        <a href="#topo" className={`${display.className} text-2xl`}>
          Ângulo
        </a>
        <nav className="hidden gap-6 text-[11px] tracking-[0.16em] uppercase text-[#8b90a8] md:flex">
          <a href="#atelier">Atelier</a>
          <a href="#obras">Obras</a>
          <a href="#contato">Contato</a>
        </nav>
        <a href={WA} target="_blank" rel="noopener" className="rounded-full bg-[#25d366] px-3.5 py-2 text-xs font-extrabold text-[#062d14]">
          WhatsApp
        </a>
      </header>

      <section id="topo" className="relative min-h-svh overflow-hidden">
        <Image
          src="/thumbs/premium-arquitetura.jpg"
          alt="Casa Itaim"
          fill
          priority
          className="object-cover brightness-[0.45]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#05060f]/80 via-transparent to-transparent" />
        <div className="relative z-10 flex min-h-svh flex-col justify-end px-[7vw] pb-24">
          <p className="text-[11px] tracking-[0.24em] text-[#8b90a8] uppercase">Arquitetura · Interiores · SP</p>
          <h1 className={`${display.className} mt-4 max-w-[10ch] text-[clamp(3.2rem,9vw,7.4rem)] leading-[0.88] font-semibold`}>
            Espaço com intenção.
          </h1>
          <p className="mt-5 max-w-[40ch] text-[#8b90a8]">
            Projetos residenciais e comerciais. Luz, proporção e obra que termina no mês combinado.
          </p>
          <div className="mt-7">
            <Magnetic>
              <a href="#contato" className="inline-flex rounded-full bg-[#3b5bff] px-6 py-3.5 text-sm font-bold">
                Abrir briefing
              </a>
            </Magnetic>
          </div>
        </div>
      </section>

      <section id="atelier" className="mx-auto grid max-w-[1180px] gap-10 px-6 py-28 md:grid-cols-3">
        {[
          ["01 Escuta", "Briefing, medidas, condomínio, teto de orçamento."],
          ["02 Estudo", "Duas vias de planta. Você escolhe uma."],
          ["03 Obra", "Executivo, memorial e entrega no mês combinado."],
        ].map(([t, d]) => (
          <Reveal key={t}>
            <h2 className={`${display.className} text-3xl`}>{t}</h2>
            <p className="mt-3 text-[#8b90a8]">{d}</p>
          </Reveal>
        ))}
      </section>

      <section id="obras" className="mx-auto max-w-[1180px] px-6 pb-16">
        <h2 className={`${display.className} mb-8 text-[clamp(2.4rem,5vw,4rem)]`}>Obras selecionadas</h2>
        {obras.map(([n, t, d, y]) => (
          <Reveal key={n}>
            <article className="grid grid-cols-[56px_1fr_auto] items-center gap-4 border-t border-white/10 py-7 last:border-b">
              <span className={`${display.className} text-[#3b5bff]`}>{n}</span>
              <div>
                <h3 className={`${display.className} text-[clamp(1.6rem,3vw,2.2rem)]`}>{t}</h3>
                <p className="text-[#8b90a8]">{d}</p>
              </div>
              <span className="font-semibold">{y}</span>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="relative min-h-[64vh] overflow-hidden">
        <Image src="/thumbs/premium-arquitetura.jpg" alt="" fill className="object-cover brightness-[0.32]" sizes="100vw" />
        <q className={`${display.className} relative z-10 grid min-h-[64vh] place-items-center px-6 text-center text-[clamp(2rem,5vw,3.6rem)] italic`}>
          A planta é um argumento. O restante é disciplina.
        </q>
      </section>

      <section id="contato" className="mx-auto grid max-w-[1180px] gap-5 px-6 py-20 md:grid-cols-2">
        <div className="flex min-h-[420px] flex-col justify-between border border-white/10 bg-[#101218] p-10">
          <div>
            <h2 className={`${display.className} text-4xl`}>Vamos falar do seu espaço.</h2>
            <p className="mt-4 max-w-[36ch] text-[#8b90a8]">Rua Aspicuelta, 310 · Vila Madalena.</p>
          </div>
          <Magnetic>
            <a href={WA} target="_blank" rel="noopener" className="inline-flex rounded-full bg-[#3b5bff] px-5 py-3 text-sm font-bold">
              WhatsApp do atelier
            </a>
          </Magnetic>
        </div>
        <div className="border border-white/10 bg-[#101218] p-8">
          <DemoForm submitLabel="Enviar briefing" buttonClassName="rounded-full bg-[#3b5bff] px-5 py-3.5 font-bold">
            <input className="w-full rounded-lg border border-white/15 bg-[#12141c] px-3.5 py-3" placeholder="Nome" required />
            <input className="w-full rounded-lg border border-white/15 bg-[#12141c] px-3.5 py-3" placeholder="WhatsApp" required />
            <textarea className="min-h-24 w-full rounded-lg border border-white/15 bg-[#12141c] px-3.5 py-3" placeholder="Tipo, m² e bairro" />
          </DemoForm>
          <div className="mt-6">
            <Faq
              items={[
                { q: "Atendem fora de SP?", a: "Litoral e interior com visita mensal." },
                { q: "Só interiores?", a: "Arquitetura completa ou interiores — o método é o mesmo." },
              ]}
            />
          </div>
        </div>
      </section>
      <footer className="px-6 py-7 text-[11px] tracking-widest text-[#8b90a8] uppercase">Atelier Ângulo · Premium</footer>
    </div>
  );
}
