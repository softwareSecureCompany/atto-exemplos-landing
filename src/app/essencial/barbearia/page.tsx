import Image from "next/image";
import { Oswald, Barlow } from "next/font/google";
import { DemoBar } from "@/components/demo-bar";
import { DemoForm } from "@/components/demo-form";
import { Faq } from "@/components/faq";
import { Reveal } from "@/components/reveal";
import { ScrollProgress } from "@/components/scroll-progress";
import { WA } from "@/lib/site";

const display = Oswald({ subsets: ["latin"], weight: ["500", "600", "700"] });
const sans = Barlow({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata = { title: "Cavalera | Corte e barba em Moema" };

export default function CavaleraPage() {
  return (
    <div className={`${sans.className} bg-[#100e0c] text-[#f3ece4]`}>
      <ScrollProgress className="bg-[#c1121f]" />
      <DemoBar plan="Essencial · R$ 597" />
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-[#2e2924] bg-[#100e0c]/80 px-5 py-4 backdrop-blur-lg">
        <a href="#inicio" className={`${display.className} text-2xl tracking-[0.14em]`}>
          CAVALERA
        </a>
        <nav className="hidden gap-6 text-[11px] tracking-[0.16em] uppercase md:flex">
          <a href="#casa">A casa</a>
          <a href="#servicos">Serviços</a>
          <a href="#contato">Agendar</a>
        </nav>
        <a href={WA} target="_blank" rel="noopener" className="rounded-sm bg-[#25d366] px-3.5 py-2 text-xs font-extrabold text-[#062d14]">
          WhatsApp
        </a>
      </header>

      <section id="inicio" className="relative min-h-[88svh] overflow-hidden">
        <Image
          src="/thumbs/essencial-barbearia.jpg"
          alt="Corte Cavalera"
          fill
          priority
          className="object-cover object-[70%_20%] brightness-[0.42]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#100e0c] via-[#100e0c]/40 to-transparent" />
        <div className="relative z-10 flex min-h-[88svh] flex-col justify-end px-[6vw] pb-16">
          <p className="mb-4 text-[11px] tracking-[0.28em] text-[#b3a89c] uppercase">Moema · São Paulo</p>
          <h1 className={`${display.className} max-w-[12ch] text-[clamp(4rem,12vw,9rem)] leading-[0.82] font-bold`}>
            CORTE CERTO.
            <br />
            ZERO FILA.
          </h1>
          <p className="mt-5 max-w-[36ch] text-[#b3a89c]">
            Cadeira boa, navalha afiada, horário que se cumpre. Você escolhe conversa ou silêncio.
          </p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            <a href="#contato" className="rounded-sm bg-[#c1121f] px-6 py-3.5 text-sm font-extrabold text-white">
              Agendar horário
            </a>
            <a href={WA} target="_blank" rel="noopener" className="rounded-sm border border-[#2e2924] px-6 py-3.5 text-sm font-extrabold">
              Chamar no Zap
            </a>
          </div>
        </div>
      </section>

      <div className="grid grid-cols-3 border-y border-[#2e2924]">
        {[
          ["6.000+", "cortes feitos"],
          ["4,9", "Google"],
          ["0 min", "espera na porta"],
        ].map(([n, l]) => (
          <div key={l} className="border-r border-[#2e2924] px-4 py-8 last:border-0">
            <strong className={`${display.className} block text-[clamp(2rem,4vw,3.4rem)]`}>{n}</strong>
            <span className="mt-1 block text-[11px] tracking-[0.14em] text-[#b3a89c] uppercase">{l}</span>
          </div>
        ))}
      </div>

      <section id="casa" className="mx-auto grid max-w-[1180px] gap-12 px-5 py-24 md:grid-cols-2">
        <Reveal>
          <Image
            src="/thumbs/essencial-barbearia.jpg"
            alt="Cadeira"
            width={900}
            height={1100}
            className="h-[min(72vh,640px)] w-full object-cover"
          />
        </Reveal>
        <div className="space-y-14">
          <Reveal>
            <h2 className={`${display.className} text-[clamp(2.4rem,5vw,4rem)]`}>Uma casa para quem odeia fila.</h2>
            <p className="mt-4 max-w-[46ch] text-[#b3a89c]">
              Abrimos em 2019 porque o corte em São Paulo virou loteria. Aqui o horário é o horário. Dois barbeiros, uma recepção.
            </p>
          </Reveal>
          <Reveal>
            <h2 className={`${display.className} text-[clamp(2.4rem,5vw,4rem)]`}>Tesoura que não puxa.</h2>
            <p className="mt-4 max-w-[46ch] text-[#b3a89c]">
              Produto premium, navalha afiada, tônica no final. Combo no balcão se vier corte e barba.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="servicos" className="mx-auto max-w-[1180px] px-5 pb-20">
        <h2 className={`${display.className} mb-8 text-[clamp(2.4rem,5vw,4rem)]`}>O que a cadeira entrega</h2>
        {[
          ["01", "Corte", "Máquina, tesoura e tônica. 35 minutos.", "R$ 65"],
          ["02", "Barba", "Toalha quente, navalha, contorno limpo.", "R$ 50"],
          ["03", "Corte + barba", "O pacote da casa. Sai pronto para reunião ou sexta.", "R$ 100"],
        ].map(([n, t, d, p]) => (
          <Reveal key={n}>
            <article className="grid grid-cols-[56px_1fr_auto] items-center gap-4 border-t border-[#2e2924] py-7 last:border-b">
              <span className={`${display.className} text-2xl text-[#c1121f]`}>{n}</span>
              <div>
                <h3 className={`${display.className} text-[clamp(1.8rem,3vw,2.6rem)]`}>{t}</h3>
                <p className="text-[#b3a89c]">{d}</p>
              </div>
              <span className="font-extrabold">{p}</span>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="relative min-h-[70vh] overflow-hidden">
        <Image src="/thumbs/essencial-barbearia.jpg" alt="" fill className="object-cover brightness-[0.35]" sizes="100vw" />
        <q className={`${display.className} relative z-10 grid min-h-[70vh] place-items-center px-6 text-center text-[clamp(2.2rem,6vw,4.4rem)] leading-none not-italic`}>
          “Marquei pelo Zap. Cheguei e sentei.”
        </q>
      </section>

      <section id="contato" className="mx-auto grid max-w-[1180px] gap-5 px-5 py-20 md:grid-cols-2">
        <div className="flex min-h-[420px] flex-col justify-between bg-[#050403] p-10">
          <div>
            <h2 className={`${display.className} text-[clamp(2.4rem,4vw,3.6rem)]`}>Pedir horário.</h2>
            <p className="mt-4 max-w-[36ch] text-[#b3a89c]">
              Rua Gaivota, 1200 · Moema. Ter–Sáb 10h–20h. Diz o serviço e a janela.
            </p>
          </div>
          <a href={WA} target="_blank" rel="noopener" className="w-fit rounded-sm bg-[#25d366] px-5 py-3 text-sm font-extrabold text-[#062d14]">
            Abrir WhatsApp
          </a>
        </div>
        <div className="border border-[#2e2924] bg-[#1c1713] p-8">
          <DemoForm submitLabel="Enviar pedido" buttonClassName="rounded-sm bg-[#c1121f] px-5 py-3.5 font-extrabold text-white">
            <input className="w-full border border-[#3a342e] bg-[#100e0c] px-3.5 py-3" placeholder="Nome" required />
            <input className="w-full border border-[#3a342e] bg-[#100e0c] px-3.5 py-3" placeholder="WhatsApp" required />
            <textarea className="min-h-24 w-full border border-[#3a342e] bg-[#100e0c] px-3.5 py-3" placeholder="Serviço e horário" />
          </DemoForm>
          <div className="mt-8">
            <Faq
              items={[
                { q: "Precisa marcar?", a: "Sim. WhatsApp ou o formulário. Sem fila na porta." },
                { q: "Aceita cartão?", a: "Cartão, PIX e dinheiro. Combo não muda no débito." },
                { q: "Estacionamento?", a: "Prédio ao lado, 1 hora cortesia com o ticket da recepção." },
              ]}
            />
          </div>
        </div>
      </section>
      <footer className="flex justify-between px-5 py-6 text-[11px] tracking-[0.14em] text-[#b3a89c] uppercase">
        <span>Cavalera · Essencial</span>
        <a href="#inicio">Topo</a>
      </footer>
    </div>
  );
}
