import Image from "next/image";
import { Cormorant_Infant, Manrope } from "next/font/google";
import { DemoBar } from "@/components/demo-bar";
import { DemoForm } from "@/components/demo-form";
import { Faq } from "@/components/faq";
import { Magnetic } from "@/components/magnetic";
import { PremiumFx } from "@/components/premium-fx";
import { Reveal } from "@/components/reveal";
import { WA } from "@/lib/site";

const display = Cormorant_Infant({ subsets: ["latin"], weight: ["500", "600"], style: ["normal", "italic"] });
const sans = Manrope({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata = { title: "Casa Aura | Rituais em Higienópolis" };

const rituais = [
  ["01", "Pedra quente", "Costas, ombros e pés. 75 min.", "R$ 280"],
  ["02", "Facial Aura", "Limpeza, drenagem, máscara. 60 min.", "R$ 240"],
  ["03", "Gestante", "Lateral, sem pressão abdominal. 70 min.", "R$ 290"],
  ["04", "Burnout", "Cervical e respiração guiada. 90 min.", "R$ 340"],
  ["05", "Day spa", "Dois rituais + almoço + jardim. 4h.", "R$ 620"],
];

export default function AuraPage() {
  return (
    <div className={`${sans.className} bg-[#121a16] text-[#f4efe6]`}>
      <PremiumFx accent="#e7c8c0" />
      <DemoBar plan="Premium · R$ 1.250" />
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-white/10 bg-[#121a16]/60 px-5 py-4 backdrop-blur-xl">
        <a href="#topo" className={`${display.className} text-2xl`}>
          Casa Aura
        </a>
        <nav className="hidden gap-6 text-[11px] tracking-[0.16em] uppercase text-[#9aa89f] md:flex">
          <a href="#casa">A casa</a>
          <a href="#rituais">Rituais</a>
          <a href="#agenda">Agenda</a>
        </nav>
        <a href={WA} target="_blank" rel="noopener" className="rounded-full bg-[#25d366] px-3.5 py-2 text-xs font-extrabold text-[#062d14]">
          WhatsApp
        </a>
      </header>

      <section id="topo" className="relative min-h-svh overflow-hidden">
        <Image
          src="/thumbs/premium-spa.jpg"
          alt="Ritual Casa Aura"
          fill
          priority
          className="object-cover brightness-[0.4]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121a16] via-transparent to-black/25" />
        <div className="relative z-10 flex min-h-svh flex-col justify-end px-[7vw] pb-24">
          <p className="text-[11px] tracking-[0.24em] text-[#9aa89f] uppercase">Higienópolis · São Paulo</p>
          <h1 className={`${display.className} mt-4 max-w-[10ch] text-[clamp(3.4rem,10vw,8rem)] leading-[0.88]`}>
            Voltar ao corpo.
          </h1>
          <p className="mt-5 max-w-[40ch] text-[#9aa89f]">
            Rituais de 60 a 120 minutos. Luz baixa, óleo quente, silêncio combinado. Você não cruza com outra pessoa no corredor.
          </p>
          <div className="mt-7">
            <Magnetic>
              <a href="#agenda" className="inline-flex rounded-full bg-[#e7c8c0] px-6 py-3.5 text-sm font-bold text-[#121a16]">
                Agendar ritual
              </a>
            </Magnetic>
          </div>
        </div>
      </section>

      <section id="casa" className="mx-auto max-w-[1180px] px-6 py-28">
        <Reveal>
          <h2 className={`${display.className} max-w-[14ch] text-[clamp(2.6rem,5vw,4.4rem)]`}>Uma casa, não uma clínica.</h2>
          <p className="mt-5 max-w-[46ch] text-[#9aa89f]">
            Três salas, chá na chegada, sem playlist alta. Protocolos para gestante, burnout e pele sensível.
          </p>
        </Reveal>
      </section>

      <section id="rituais" className="mx-auto max-w-[1180px] px-6 pb-16">
        <h2 className={`${display.className} mb-8 text-[clamp(2.4rem,5vw,4rem)]`}>Rituais</h2>
        {rituais.map(([n, t, d, p]) => (
          <Reveal key={n}>
            <article className="grid grid-cols-[56px_1fr_auto] items-center gap-4 border-t border-white/10 py-7 last:border-b">
              <span className={`${display.className} text-[#e7c8c0]`}>{n}</span>
              <div>
                <h3 className={`${display.className} text-[clamp(1.6rem,3vw,2.3rem)]`}>{t}</h3>
                <p className="text-[#9aa89f]">{d}</p>
              </div>
              <span className="font-bold">{p}</span>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="relative min-h-[64vh] overflow-hidden">
        <Image src="/thumbs/premium-spa.jpg" alt="" fill className="object-cover brightness-[0.32]" sizes="100vw" />
        <q className={`${display.className} relative z-10 grid min-h-[64vh] place-items-center px-6 text-center text-[clamp(2rem,5vw,3.8rem)] italic`}>
          O tempo aqui anda mais devagar de propósito.
        </q>
      </section>

      <section id="agenda" className="mx-auto grid max-w-[1180px] gap-5 px-6 py-20 md:grid-cols-2">
        <div className="flex min-h-[420px] flex-col justify-between border border-white/10 bg-[#1b2620] p-10">
          <div>
            <h2 className={`${display.className} text-4xl`}>Abrir a agenda</h2>
            <p className="mt-4 max-w-[36ch] text-[#9aa89f]">Rua Maranhão, 520 · Higienópolis. Ter–Sáb 10h–20h.</p>
          </div>
          <Magnetic>
            <a href={WA} target="_blank" rel="noopener" className="inline-flex rounded-full bg-[#e7c8c0] px-5 py-3 text-sm font-bold text-[#121a16]">
              WhatsApp da casa
            </a>
          </Magnetic>
        </div>
        <div className="border border-white/10 bg-[#1b2620] p-8">
          <DemoForm submitLabel="Pedir horário" buttonClassName="rounded-full bg-[#e7c8c0] px-5 py-3.5 font-bold text-[#121a16]">
            <input className="w-full rounded-lg border border-white/15 bg-[#12141c] px-3.5 py-3" placeholder="Nome" required />
            <input className="w-full rounded-lg border border-white/15 bg-[#12141c] px-3.5 py-3" placeholder="WhatsApp" required />
            <select className="w-full rounded-lg border border-white/15 bg-[#12141c] px-3.5 py-3">
              <option>Pedra quente</option>
              <option>Facial Aura</option>
              <option>Day spa</option>
            </select>
            <textarea className="min-h-24 w-full rounded-lg border border-white/15 bg-[#12141c] px-3.5 py-3" placeholder="Dia preferido" />
          </DemoForm>
          <div className="mt-6">
            <Faq
              items={[
                { q: "Cancelamento?", a: "Até 12 horas antes, sem custo." },
                { q: "Vale presente?", a: "Cartão físico ou PDF. Vale 6 meses." },
              ]}
            />
          </div>
        </div>
      </section>
      <footer className="px-6 py-7 text-[11px] tracking-widest text-[#9aa89f] uppercase">Casa Aura · Premium</footer>
    </div>
  );
}
