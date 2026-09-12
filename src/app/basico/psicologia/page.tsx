import Image from "next/image";
import { DM_Sans, Fraunces } from "next/font/google";
import { DemoBar } from "@/components/demo-bar";
import { DemoForm } from "@/components/demo-form";
import { DemoMenu } from "@/components/demo-menu";
import { WA } from "@/lib/site";

const sans = DM_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700", "800"] });
const display = Fraunces({ subsets: ["latin"], weight: ["500", "600"], style: ["normal", "italic"] });

export const metadata = { title: "Dra. Ana Beatriz | Psicóloga clínica em São Paulo" };

const hero =
  "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1400&h=1800&q=85";
const sobre =
  "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1100&q=85";
const consultorio =
  "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1100&q=85";

const especialidades = [
  ["Ansiedade", "Pânico, preocupação excessiva e sintomas no corpo."],
  ["Depressão", "Tristeza persistente, fadiga e perda de sentido."],
  ["Autoestima", "Autocrítica, comparar-se e medo de errar."],
  ["Relacionamentos", "Conflitos, comunicação e vínculos."],
  ["Burnout", "Esgotamento e culpa com o trabalho."],
  ["Luto", "Perdas e reorganização da vida."],
];

const passos = [
  ["1", "Primeiro contato", "Você envia mensagem ou agenda uma conversa breve para alinhar expectativas."],
  ["2", "Sessão experimental", "Um encontro para sentir o ritmo da terapia e tirar dúvidas."],
  ["3", "Acompanhamento", "Frequência combinada, presencial ou online, com revisão de metas."],
];

const depoimentos = [
  {
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=96&h=96&q=80",
    quote: "Saio das sessões mais leve. A Ana escuta de verdade.",
    name: "Marina L.",
    place: "São Paulo, SP",
  },
  {
    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=96&h=96&q=80",
    quote: "A TCC mudou minha relação com a ansiedade no trabalho.",
    name: "Ricardo T.",
    place: "São Paulo, SP",
  },
  {
    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=96&h=96&q=80",
    quote: "Me senti acolhida desde a primeira mensagem.",
    name: "Fernanda C.",
    place: "Online",
  },
];

export default function AnaBeatrizPage() {
  return (
    <div className={`${sans.className} bg-[#fffaf8] text-[#2c2220]`}>
      <DemoBar plan="Básico  R$ 297" />

      <header className="sticky top-0 z-30 border-t-[3px] border-[#e05654] bg-[#fffaf8]/92 backdrop-blur-md">
        <div className="relative mx-auto flex max-w-[1140px] items-center justify-between gap-3 px-5 py-3">
          <a href="#inicio" className={`${display.className} text-[1.08rem] font-semibold text-[#e05654]`}>
            Dra. Ana Beatriz
          </a>
          <DemoMenu buttonClassName="text-[13px] font-extrabold text-[#e05654]">
            <a href="#inicio" className="text-[13px] font-bold text-[#6b5550]">
              Início
            </a>
            <a href="#sinais" className="text-[13px] font-bold text-[#6b5550]">
              Sinais
            </a>
            <a href="#sobre" className="text-[13px] font-bold text-[#6b5550]">
              Sobre
            </a>
            <a href="#abordagem" className="text-[13px] font-bold text-[#6b5550]">
              Abordagem
            </a>
            <a href="#especialidades" className="text-[13px] font-bold text-[#6b5550]">
              Especialidades
            </a>
            <a href="#contato" className="rounded-full bg-[#e05654] px-3.5 py-2 text-[12px] font-extrabold text-white">
              Agendar
            </a>
          </DemoMenu>
        </div>
      </header>

      <section id="inicio" className="bg-[#fff7f5]">
        <div className="mx-auto grid min-h-[calc(100svh-96px)] max-w-[1180px] md:grid-cols-[1.05fr_.95fr]">
          <div className="flex flex-col justify-center px-5 py-12 md:px-10 md:py-16">
            <p className={`${display.className} mb-3 text-[clamp(1.15rem,2.6vw,1.4rem)] text-[#b83c3a] italic`}>
              É hora de priorizar o seu bem-estar emocional.
            </p>
            <p className="mb-4 inline-flex w-fit rounded-full border border-[#e05654]/35 bg-[#e05654]/10 px-4 py-1.5 text-[11px] font-extrabold tracking-wider text-[#b83c3a] uppercase">
              CRP/SP 06.187432  Psicóloga clínica
            </p>
            <h1 className="text-[clamp(2rem,4.2vw,2.85rem)] leading-[1.12] font-extrabold tracking-[-0.03em]">
              Chegou a hora de cuidar de você.
            </h1>
            <p className="mt-4 max-w-[42ch] text-[1.05rem] text-[#6b5550]">
              Acolhimento com <strong className="font-extrabold text-[#2c2220]">TCC baseada em evidências</strong>. Método claro, sem julgamentos, no seu tempo.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#contato" className={`${display.className} rounded-[10px] bg-[#8fe3b0] px-6 py-3.5 text-[1.05rem] font-semibold text-[#7a2552]`}>
                Quero uma vida mais leve
              </a>
              <a href="#abordagem" className="rounded-[10px] border border-[#e05654]/45 bg-white/65 px-6 py-3.5 text-sm font-bold text-[#b83c3a]">
                Como funciona a terapia
              </a>
            </div>
            <dl className="mt-8 flex flex-wrap gap-3">
              {[
                ["8+", "Anos de experiência"],
                ["500+", "Pessoas atendidas"],
                ["Online", "e presencial em SP"],
              ].map(([n, l]) => (
                <div key={l} className="rounded-[14px] border border-[#e05654]/15 bg-white px-4 py-3 shadow-[0_8px_24px_rgba(44,34,32,.06)]">
                  <dt className={`${display.className} text-[1.7rem] leading-none text-[#e05654]`}>{n}</dt>
                  <dd className="mt-1 text-[12px] tracking-wide text-[#6b5550] uppercase">{l}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="relative min-h-[320px] md:min-h-full">
            <Image
              src={hero}
              alt="Dra. Ana Beatriz, psicóloga clínica"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 48vw"
              className="object-cover object-[center_15%]"
            />
          </div>
        </div>
      </section>

      <section id="sinais" className="bg-gradient-to-br from-[#f4897a] via-[#e05654] to-[#c94a52] px-5 py-14 text-white md:py-16">
        <div className="mx-auto grid max-w-[1100px] items-center gap-10 md:grid-cols-2">
          <div className="flex flex-col items-start gap-2.5">
            <span className="rotate-[-2deg] bg-white px-4 py-3 text-[clamp(1.05rem,2.5vw,1.35rem)] font-extrabold text-[#c73e42] shadow-lg">
              Entra ano, sai ano
            </span>
            <span className="ml-3 rotate-[1.5deg] bg-[#c73e42] px-4 py-3 text-[clamp(1.05rem,2.5vw,1.35rem)] font-extrabold shadow-lg">
              e você ainda se sente
            </span>
            <span className="rotate-[-1deg] bg-white px-4 py-3 text-[clamp(1.05rem,2.5vw,1.35rem)] font-extrabold text-[#c73e42] shadow-lg">
              no piloto automático?
            </span>
          </div>
          <ul className="grid gap-3.5 text-[1.02rem] font-semibold">
            {[
              "Cuida de todo mundo e esquece de si mesma",
              "Culpa quando tenta descansar ou dizer não",
              "Ansiedade que ocupa o peito no trabalho",
              "Sensação de estar atrasada na vida",
              "Medo de decepcionar quem ama",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <span className="mt-0.5 grid h-[26px] w-[26px] shrink-0 place-items-center rounded-full bg-white text-sm font-black text-[#e05654]">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="sobre" className="mx-auto max-w-[1140px] px-5 py-20">
        <h2 className={`${display.className} text-center text-[clamp(1.85rem,3vw,2.45rem)] text-[#e05654]`}>Sobre</h2>
        <p className="mx-auto mt-3 mb-10 max-w-[58ch] text-center text-[1.05rem] text-[#6b5550]">
          Sou Ana Beatriz, psicóloga clínica com TCC e formação contínua em trauma e regulação emocional. Ciência, ética e escuta em cada passo.
        </p>
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="mb-6 text-[#6b5550]">
              Terapia é um encontro onde você pode falar sem julgamentos, organizar o pensamento e levar ferramentas reais para o dia a dia.
            </p>
            <div className="grid gap-3 sm:grid-cols-3">
              {[
                ["Escuta", "Seu ritmo é respeitado em cada sessão."],
                ["Acolhimento", "Ambiente seguro para vulnerabilidade."],
                ["Transformação", "Tarefas entre sessões que sustentam a mudança."],
              ].map(([t, d]) => (
                <article key={t} className="rounded-[14px] border border-[#e05654]/18 bg-white p-5">
                  <h3 className="font-extrabold text-[#e05654]">{t}</h3>
                  <p className="mt-1 text-sm text-[#6b5550]">{d}</p>
                </article>
              ))}
            </div>
          </div>
          <div className="overflow-hidden rounded-[20px] shadow-[0_22px_50px_rgba(201,132,122,.2)]">
            <Image src={sobre} alt="Psicóloga em atendimento" width={1100} height={900} className="h-[320px] w-full object-cover md:h-[380px]" />
          </div>
        </div>
      </section>

      <section id="abordagem" className="bg-gradient-to-b from-[#fde8e4] to-[#fffaf8]">
        <div className="mx-auto max-w-[1140px] px-5 py-20">
          <h2 className={`${display.className} text-center text-[clamp(1.85rem,3vw,2.45rem)] text-[#e05654]`}>Abordagem</h2>
          <p className="mx-auto mt-3 mb-10 max-w-[58ch] text-center text-[1.05rem] text-[#6b5550]">
            Identificamos pensamentos e comportamentos que mantêm o sofrimento e testamos alternativas com gentileza, clareza e método.
          </p>
          <div className="grid items-center gap-8 md:grid-cols-[1.05fr_.95fr]">
            <div className="text-[#6b5550]">
              <p className="mb-4">
                A terapia cognitivo-comportamental é baseada em evidências e costuma apresentar resultados em prazos combinados entre nós, com metas claras.
              </p>
              <p>Linguagem simples, sem jargão à toa. Você entende o porquê de cada exercício.</p>
            </div>
            <div className="overflow-hidden rounded-[20px] shadow-[0_22px_50px_rgba(201,132,122,.2)]">
              <Image src={consultorio} alt="Consultório acolhedor" width={1100} height={800} className="h-[280px] w-full object-cover md:h-[320px]" />
            </div>
          </div>
        </div>
      </section>

      <section id="especialidades" className="mx-auto max-w-[1140px] px-5 py-20">
        <h2 className={`${display.className} text-center text-[clamp(1.85rem,3vw,2.45rem)] text-[#e05654]`}>Especialidades</h2>
        <p className="mx-auto mt-3 mb-10 max-w-[58ch] text-center text-[1.05rem] text-[#6b5550]">
          Linhas de cuidado que mais acompanho, com técnica validada e espaço para o que você sente.
        </p>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {especialidades.map(([t, d]) => (
            <article key={t} className="rounded-2xl border border-[#e05654]/15 bg-white p-6">
              <h3 className="font-extrabold text-[#e05654]">{t}</h3>
              <p className="mt-2 text-sm text-[#6b5550]">{d}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="agendar" className="mx-auto max-w-[1140px] px-5 pb-16">
        <h2 className={`${display.className} text-center text-[clamp(1.85rem,3vw,2.45rem)] text-[#e05654]`}>Como funciona</h2>
        <p className="mx-auto mt-3 mb-10 max-w-[40ch] text-center text-[#6b5550]">Três passos simples para começar com calma.</p>
        <div className="grid gap-4 md:grid-cols-3">
          {passos.map(([n, t, d]) => (
            <article key={n} className="rounded-2xl border border-[#e05654]/12 bg-white px-5 py-7 text-center">
              <span className="mx-auto mb-3 grid h-11 w-11 place-items-center rounded-full bg-[#e05654] font-black text-white">
                {n}
              </span>
              <h3 className="font-extrabold text-[#e05654]">{t}</h3>
              <p className="mt-2 text-sm text-[#6b5550]">{d}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="depoimentos" className="border-t border-[#e05654]/15 bg-[#fde8e4]">
        <div className="mx-auto max-w-[1140px] px-5 py-20">
          <h2 className={`${display.className} text-center text-[clamp(1.85rem,3vw,2.45rem)] text-[#e05654]`}>Depoimentos</h2>
          <p className="mx-auto mt-3 mb-10 max-w-[40ch] text-center text-[#6b5550]">Palavras de quem confiou neste processo.</p>
          <div className="grid gap-4 md:grid-cols-3">
            {depoimentos.map((item) => (
              <article key={item.name} className="rounded-2xl border border-[#e05654]/12 bg-white p-6">
                <Image src={item.src} alt="" width={46} height={46} className="mb-3 h-[46px] w-[46px] rounded-full object-cover" />
                <p className="mb-3 text-[#5c4a47] italic">“{item.quote}”</p>
                <p className="font-extrabold text-[#e05654]">{item.name}</p>
                <p className="mt-1 text-xs text-[#6b5550]">{item.place}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="mx-auto max-w-[1140px] px-5 py-20">
        <h2 className={`${display.className} text-center text-[clamp(1.85rem,3vw,2.45rem)] text-[#e05654]`}>Contato</h2>
        <p className="mx-auto mt-3 mb-10 max-w-[54ch] text-center text-[#6b5550]">
          Mensagem ou WhatsApp. Presencial nos Jardins ou online em todo o Brasil.
        </p>
        <div className="grid gap-8 md:grid-cols-2">
          <DemoForm submitLabel="Enviar" buttonClassName="w-full rounded-full bg-[#e05654] px-5 py-3.5 font-extrabold text-white" className="[&_label]:mb-1 [&_label]:block [&_label]:text-[13px] [&_label]:font-extrabold [&_label]:text-[#e05654]">
            <label htmlFor="ana-nome">Nome</label>
            <input id="ana-nome" className="w-full rounded-xl border border-[#e05654]/25 px-3.5 py-3" required />
            <label htmlFor="ana-mail">Email</label>
            <input id="ana-mail" type="email" className="w-full rounded-xl border border-[#e05654]/25 px-3.5 py-3" required />
            <label htmlFor="ana-msg">Mensagem</label>
            <textarea id="ana-msg" className="min-h-28 w-full rounded-xl border border-[#e05654]/25 px-3.5 py-3" required />
          </DemoForm>
          <div className="rounded-2xl border border-[#e05654]/15 bg-white p-6">
            <div className="mb-4 grid h-36 place-items-center rounded-xl bg-gradient-to-br from-[#e05654]/15 to-white text-sm text-[#6b5550]">
              Jardins, São Paulo
            </div>
            <p>
              <strong>Consultório</strong>
              <br />
              Alameda Santos, 700, Jardins
              <br />
              São Paulo, SP
            </p>
            <p className="mt-4">
              <strong>WhatsApp</strong>
              <br />
              <a href={WA} target="_blank" rel="noopener" className="font-extrabold text-[#e05654]">
                (11) 99607-7349
              </a>
            </p>
            <a href={WA} target="_blank" rel="noopener" className="mt-5 inline-flex rounded-xl bg-[#25d366] px-5 py-3 font-black text-[#062d14]">
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-[#4a322e] px-5 pt-10 pb-7 text-[#fde8e3]">
        <div className="mx-auto grid max-w-[1140px] gap-6 md:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <p className={`${display.className} text-[1.35rem] text-white`}>Dra. Ana Beatriz</p>
            <p className="mt-2 max-w-[34ch] text-sm opacity-80">Psicóloga clínica. TCC com acolhimento.</p>
          </div>
          <div>
            <p className="mb-2 text-[11px] font-extrabold tracking-wider text-[#fecaca] uppercase">Links</p>
            <ul className="grid gap-1 text-sm">
              <li>
                <a href="#inicio">Início</a>
              </li>
              <li>
                <a href="#sobre">Sobre</a>
              </li>
              <li>
                <a href="#especialidades">Especialidades</a>
              </li>
            </ul>
          </div>
          <div>
            <p className="mb-2 text-[11px] font-extrabold tracking-wider text-[#fecaca] uppercase">CRP</p>
            <p className="text-sm">CRP/SP 06.187432</p>
            <p className="text-sm">Exemplo ATTO</p>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-[1140px] border-t border-white/12 pt-4 text-center text-[13px] opacity-70">
          © 2026 Dra. Ana Beatriz. Site fictício para portfólio.
        </p>
      </footer>
    </div>
  );
}
