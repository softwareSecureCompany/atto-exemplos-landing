import Image from "next/image";
import { Playfair_Display, Karla } from "next/font/google";
import { DemoBar } from "@/components/demo-bar";
import { DemoForm } from "@/components/demo-form";
import { Faq } from "@/components/faq";
import { Magnetic } from "@/components/magnetic";
import { PremiumFx } from "@/components/premium-fx";
import { Reveal } from "@/components/reveal";
import { WA } from "@/lib/site";

const display = Playfair_Display({ subsets: ["latin"], weight: ["500", "600"], style: ["normal", "italic"] });
const sans = Karla({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata = { title: "Osteria Luce | Italiana em Pinheiros" };

const menu = [
  ["01", "Burrata ao fogo", "Tomate assado, azeite da Ligúria.", "R$ 64"],
  ["02", "Tagliatelle al ragù", "Ossobuco sete horas, parmesão 24 meses.", "R$ 89"],
  ["03", "Risotto do dia", "Hoje: ossobuco e limão siciliano.", "R$ 96"],
  ["04", "Branzino na brasa", "Funcho, noisette, raspas de limão.", "R$ 128"],
  ["05", "Tiramisù da casa", "Mascarpone, café da máquina.", "R$ 38"],
];

export default function OsteriaPage() {
  return (
    <div className={`${sans.className} bg-[#0b0a09] text-[#f3ead8]`}>
      <PremiumFx accent="#d4b483" />
      <DemoBar plan="Premium · R$ 1.250" />
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-white/10 bg-[#0b0a09]/55 px-5 py-4 backdrop-blur-xl">
        <a href="#topo" className={`${display.className} text-2xl`}>
          Osteria Luce
        </a>
        <nav className="hidden gap-6 text-[11px] tracking-[0.16em] uppercase text-[#b7aa98] md:flex">
          <a href="#casa">A casa</a>
          <a href="#carta">Carta</a>
          <a href="#reserva">Reserva</a>
        </nav>
        <a href={WA} target="_blank" rel="noopener" className="rounded-full bg-[#25d366] px-3.5 py-2 text-xs font-extrabold text-[#062d14]">
          WhatsApp
        </a>
      </header>

      <section id="topo" className="relative min-h-svh overflow-hidden">
        <Image
          src="/thumbs/premium-restaurante.jpg"
          alt="Sala da Osteria"
          fill
          priority
          className="object-cover brightness-[0.42]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0a09] via-transparent to-black/30" />
        <div className="relative z-10 flex min-h-svh flex-col justify-end px-[7vw] pb-24">
          <p className="text-[11px] tracking-[0.24em] text-[#b7aa98] uppercase">Pinheiros · São Paulo</p>
          <h1 className={`${display.className} mt-4 max-w-[10ch] text-[clamp(3.4rem,10vw,8rem)] leading-[0.88] font-medium`}>
            A sala acende às 19h.
          </h1>
          <p className="mt-5 max-w-[38ch] text-[#b7aa98]">Massa fresca, fogo baixo, carta curta. Uma sala, um ritmo, nenhuma pressa.</p>
          <div className="mt-7">
            <Magnetic>
              <a href="#reserva" className="inline-flex rounded-full bg-[#d4b483] px-6 py-3.5 text-sm font-bold text-[#0b0a09]">
                Reservar mesa
              </a>
            </Magnetic>
          </div>
        </div>
        <aside className="absolute right-[6vw] bottom-[22vh] hidden w-[240px] border border-white/15 bg-[#0b0a09]/70 p-4 backdrop-blur-lg md:block">
          <p className="text-[10px] tracking-[0.2em] text-[#d4b483] uppercase">Hoje na casa</p>
          <p className={`${display.className} mt-2 text-xl`}>Risotto de ossobuco</p>
          <p className="mt-1 text-xs text-[#b7aa98]">Só na reserva · 12 porções</p>
        </aside>
      </section>

      <div className="grid grid-cols-3 border-y border-white/10">
        {[
          ["42", "lugares"],
          ["19h", "primeira mesa"],
          ["2h", "mínimo na mesa"],
        ].map(([n, l]) => (
          <div key={l} className="border-r border-white/10 px-5 py-6 last:border-0">
            <strong className={`${display.className} block text-3xl`}>{n}</strong>
            <span className="text-[11px] tracking-widest text-[#b7aa98] uppercase">{l}</span>
          </div>
        ))}
      </div>

      <section id="casa" className="mx-auto max-w-[1180px] px-6 py-28">
        <Reveal>
          <p className="text-[11px] tracking-[0.24em] text-[#b7aa98] uppercase">A casa</p>
          <h2 className={`${display.className} mt-3 max-w-[16ch] text-[clamp(2.4rem,5vw,4.2rem)]`}>Comer bem é um ato de memória.</h2>
          <p className="mt-5 max-w-[48ch] text-[#b7aa98]">
            Cozinha aberta, chef à vista, produtores de Campos e importados pontuais. O cardápio muda a cada lua.
          </p>
        </Reveal>
      </section>

      <section id="carta" className="mx-auto max-w-[1180px] px-6 pb-20">
        <h2 className={`${display.className} mb-8 text-[clamp(2.4rem,5vw,4rem)]`}>Carta de temporada</h2>
        {menu.map(([n, t, d, p]) => (
          <Reveal key={n}>
            <article className="grid grid-cols-[56px_1fr_auto] items-center gap-4 border-t border-white/10 py-7 last:border-b">
              <span className={`${display.className} text-xl text-[#d4b483]`}>{n}</span>
              <div>
                <h3 className={`${display.className} text-[clamp(1.6rem,3vw,2.2rem)]`}>{t}</h3>
                <p className="text-[#b7aa98]">{d}</p>
              </div>
              <span className="font-bold">{p}</span>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="relative min-h-[70vh] overflow-hidden">
        <Image src="/thumbs/premium-restaurante.jpg" alt="" fill className="object-cover brightness-[0.32]" sizes="100vw" />
        <q className={`${display.className} relative z-10 grid min-h-[70vh] place-items-center px-6 text-center text-[clamp(2rem,5vw,3.8rem)] italic`}>
          “Nenhuma mesa vira em menos de duas horas.”
        </q>
      </section>

      <section id="reserva" className="mx-auto grid max-w-[1180px] gap-5 px-6 py-20 md:grid-cols-2">
        <div className="flex min-h-[420px] flex-col justify-between border border-white/10 bg-[#161210] p-10">
          <div>
            <h2 className={`${display.className} text-4xl`}>A mesa é o produto.</h2>
            <p className="mt-4 max-w-[36ch] text-[#b7aa98]">Rua dos Pinheiros, 1480. Ter–Sáb a partir das 19h.</p>
          </div>
          <Magnetic>
            <a href={WA} target="_blank" rel="noopener" className="inline-flex rounded-full bg-[#d4b483] px-5 py-3 text-sm font-bold text-[#0b0a09]">
              Reservar no WhatsApp
            </a>
          </Magnetic>
        </div>
        <div className="border border-white/10 bg-[#161210] p-8">
          <DemoForm submitLabel="Pedir reserva" buttonClassName="rounded-full bg-[#d4b483] px-5 py-3.5 font-bold text-[#0b0a09]">
            <input className="w-full rounded-lg border border-white/15 bg-[#12141c] px-3.5 py-3" placeholder="Nome" required />
            <input className="w-full rounded-lg border border-white/15 bg-[#12141c] px-3.5 py-3" placeholder="WhatsApp" required />
            <select className="w-full rounded-lg border border-white/15 bg-[#12141c] px-3.5 py-3">
              <option>2 pessoas</option>
              <option>4 pessoas</option>
              <option>Mesa longa</option>
            </select>
            <textarea className="min-h-24 w-full rounded-lg border border-white/15 bg-[#12141c] px-3.5 py-3" placeholder="Data, hora e restrição" />
          </DemoForm>
          <div className="mt-6 text-[#f3ead8]">
            <Faq
              items={[
                { q: "Precisa reservar?", a: "Sim. Walk-in só se abrir furo depois das 21h30." },
                { q: "Estacionamento?", a: "Valet na porta, terça a sábado." },
              ]}
            />
          </div>
        </div>
      </section>
      <footer className="flex justify-between px-6 py-7 text-[11px] tracking-widest text-[#b7aa98] uppercase">
        <span>Osteria Luce · Premium</span>
        <a href="#topo">Topo</a>
      </footer>
    </div>
  );
}
