import Image from "next/image";
import { Literata, Nunito } from "next/font/google";
import { DemoBar } from "@/components/demo-bar";
import { DemoForm } from "@/components/demo-form";
import { Faq } from "@/components/faq";
import { Reveal } from "@/components/reveal";
import { ScrollProgress } from "@/components/scroll-progress";
import { WA } from "@/lib/site";

const display = Literata({ subsets: ["latin"], weight: ["500", "700"] });
const sans = Nunito({ subsets: ["latin"], weight: ["400", "600", "700", "800"] });

export const metadata = { title: "Sorriso & Cia | Dentista em Santo André" };

export default function OdontoPage() {
  return (
    <div className={`${sans.className} bg-[#e7f3f1] text-[#163a3c]`}>
      <ScrollProgress className="bg-[#0b8f7a]" />
      <DemoBar plan="Essencial · R$ 597" />
      <header className="sticky top-0 z-30 px-4 pt-3">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between rounded-[22px] border border-[#b7d6d3] bg-[#e7f3f1]/80 px-5 py-3 backdrop-blur-lg">
          <a href="#inicio" className="text-lg font-extrabold text-[#0b8f7a]">
            Sorriso &amp; Cia
          </a>
          <nav className="hidden gap-5 text-[12px] font-bold tracking-wider uppercase md:flex">
            <a href="#clinica">A clínica</a>
            <a href="#servicos">Tratamentos</a>
            <a href="#contato">Agenda</a>
          </nav>
          <a href={WA} target="_blank" rel="noopener" className="rounded-full bg-[#25d366] px-4 py-2 text-xs font-extrabold text-[#062d14]">
            WhatsApp
          </a>
        </div>
      </header>

      <section id="inicio" className="mx-auto grid max-w-[1280px] items-center gap-10 px-6 pt-10 pb-16 md:grid-cols-2">
        <div>
          <p className="mb-4 text-[11px] tracking-[0.22em] text-[#4e6a6c] uppercase">Santo André · ABC</p>
          <h1 className={`${display.className} text-[clamp(3rem,7vw,5.8rem)] leading-[0.92] font-medium tracking-[-0.03em]`}>
            Dentista de família. Sem susto na cadeira.
          </h1>
          <p className="mt-5 max-w-[36ch] text-[#4e6a6c]">
            Avaliação, clareamento, canal e urgência. Cada etapa explicada antes de começar — orçamento no papel.
          </p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            <a href="#contato" className="rounded-full bg-[#0b8f7a] px-6 py-3.5 text-sm font-extrabold text-white">
              Agendar avaliação
            </a>
            <a href={WA} target="_blank" rel="noopener" className="rounded-full border border-[#b7d6d3] px-6 py-3.5 text-sm font-extrabold">
              Falar no Zap
            </a>
          </div>
        </div>
        <div className="relative min-h-[420px]">
          <Image
            src="/thumbs/essencial-odonto.jpg"
            alt="Consultório"
            width={900}
            height={700}
            priority
            className="h-[420px] w-full rounded-3xl object-cover"
          />
        </div>
      </section>

      <div className="mx-auto grid max-w-[1280px] grid-cols-3 border-t border-[#b7d6d3] px-6">
        {[
          ["12", "anos de clínica"],
          ["2", "consultórios"],
          ["Criança", "e adulto"],
        ].map(([n, l]) => (
          <div key={l} className="py-8">
            <strong className={`${display.className} block text-[clamp(2rem,4vw,3.2rem)]`}>{n}</strong>
            <span className="text-[11px] tracking-widest text-[#4e6a6c] uppercase">{l}</span>
          </div>
        ))}
      </div>

      <section id="clinica" className="mx-auto max-w-[1280px] px-6 py-24">
        <Reveal>
          <h2 className={`${display.className} max-w-[16ch] text-[clamp(2.4rem,5vw,4rem)]`}>Cuidado sem teatro.</h2>
          <p className="mt-4 max-w-[48ch] text-[#4e6a6c]">
            A Dra. Helena e o Dr. Paulo atendem adultos e crianças. Plano de tratamento escrito. Sem surpresa no final. Medo? Avisa na recepção.
          </p>
        </Reveal>
      </section>

      <section id="servicos" className="mx-auto grid max-w-[1280px] gap-4 px-6 pb-16 md:grid-cols-3">
        {[
          ["01", "Clínica geral", "Limpeza, restauração, canal e prevenção."],
          ["02", "Estética", "Clareamento, lentes e alinhadores. Simulação antes."],
          ["03", "Implantes", "Planejamento digital até a prótese final."],
        ].map(([n, t, d]) => (
          <Reveal key={n}>
            <article className="rounded-3xl bg-white p-7">
              <span className="text-sm font-extrabold text-[#0b8f7a]">{n}</span>
              <h3 className={`${display.className} mt-3 text-3xl`}>{t}</h3>
              <p className="mt-2 text-[#4e6a6c]">{d}</p>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="relative min-h-[62vh] overflow-hidden">
        <Image src="/thumbs/essencial-odonto.jpg" alt="" fill className="object-cover brightness-[0.38]" sizes="100vw" />
        <q className={`${display.className} relative z-10 grid min-h-[62vh] place-items-center px-6 text-center text-[clamp(2rem,5vw,3.8rem)] text-white italic`}>
          “Levei meu filho e ele pediu para voltar.”
        </q>
      </section>

      <section id="contato" className="mx-auto grid max-w-[1280px] gap-5 px-6 py-20 md:grid-cols-2">
        <div className="flex min-h-[400px] flex-col justify-between rounded-3xl bg-[#163a3c] p-10 text-[#e7f3f1]">
          <div>
            <h2 className={`${display.className} text-4xl`}>Marque a avaliação.</h2>
            <p className="mt-4 max-w-[36ch] text-white/70">Rua das Figueiras, 540 · Santo André. Seg–Sex 8h–19h · Sáb 8h–13h.</p>
          </div>
          <a href={WA} target="_blank" rel="noopener" className="w-fit rounded-full bg-[#25d366] px-5 py-3 text-sm font-extrabold text-[#062d14]">
            WhatsApp da clínica
          </a>
        </div>
        <div className="rounded-3xl bg-white p-8">
          <DemoForm submitLabel="Enviar" buttonClassName="rounded-full bg-[#0b8f7a] px-5 py-3.5 font-extrabold text-white">
            <input className="w-full rounded-2xl border border-[#b7d6d3] px-3.5 py-3" placeholder="Nome" required />
            <input className="w-full rounded-2xl border border-[#b7d6d3] px-3.5 py-3" placeholder="WhatsApp" required />
            <textarea className="min-h-24 w-full rounded-2xl border border-[#b7d6d3] px-3.5 py-3" placeholder="Qual tratamento?" />
          </DemoForm>
          <div className="mt-6">
            <Faq
              items={[
                { q: "Dói?", a: "Anestesia moderna e ritmo calmo. Avisa o medo na recepção." },
                { q: "Convênio?", a: "Os principais. Particular com parcelamento na avaliação." },
                { q: "Urgência?", a: "Dor e trauma no mesmo dia. Foto no WhatsApp ajuda a priorizar." },
              ]}
            />
          </div>
        </div>
      </section>
      <footer className="px-6 py-6 text-[11px] tracking-widest text-[#4e6a6c] uppercase">Sorriso &amp; Cia · Essencial</footer>
    </div>
  );
}
