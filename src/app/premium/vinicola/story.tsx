"use client";

import { useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { DemoForm } from "@/components/demo-form";
import { DemoMenu } from "@/components/demo-menu";
import { Faq } from "@/components/faq";
import {
  ChapterRail,
  StoryRoot,
  crossfadeStory,
  layerParallax,
  markChapters,
  pinHorizontalReel,
  sceneMotion,
} from "@/components/story-scroll";
import { WA } from "@/lib/site";

const chapters = [
  { id: "topo", label: "Vale" },
  { id: "vinhas", label: "Terra" },
  { id: "cortes", label: "Cortes" },
  { id: "mesa", label: "Mesa" },
  { id: "visita", label: "Visita" },
];

const roteiro = [
  ["11h", "Portão", "Chegada no alto. Café curto, sem discurso."],
  ["11h20", "Vinhas", "Caminhada no talhão do Tannat. 25 minutos."],
  ["12h", "Taças", "Os quatro cortes na varanda. Água e pão."],
  ["13h30", "Almoço", "Se ficar. Um prato, a mesma vista."],
];

const carta = [
  ["Degustação", "Quatro taças, sexta ou sábado.", "R$ 180"],
  ["Degustação e almoço", "O roteiro inteiro. 12 lugares.", "R$ 320"],
  ["Caixa da casa", "Seis garrafas, cortes mistos.", "R$ 420"],
  ["Nature", "Três garrafas. Poucas caixas por ano.", "Sob consulta"],
];

const terra = [
  {
    src: "/premium/vinho-4.jpg",
    kicker: "Encosta",
    title: "A serra decide o tanino.",
    text: "18 hectares virados ao vento. Merlot e Tannat no alto. Chardonnay no fundo, onde o frio chega primeiro.",
  },
  {
    src: "/premium/vinho-6.jpg",
    kicker: "Colheita",
    title: "A gente só entra no talhão na hora.",
    text: "Sem irrigação de vaidade. O brix fecha, a equipe sobe. A safra que não presta vira composto.",
  },
  {
    src: "/premium/vinho-1.jpg",
    kicker: "Varanda",
    title: "O vale entra na taça.",
    text: "Duas gerações. Quatro cortes. Sexta e sábado o almoço olha o mesmo caminho que a uva fez.",
  },
];

const cortes = [
  { src: "/premium/vinho-2.jpg", name: "Merlot 2022", note: "Ameixa, cedro, 14 meses em carvalho." },
  { src: "/premium/vinho-6.jpg", name: "Tannat Reserva", note: "Tanino firme. O vinho da casa." },
  { src: "/premium/vinho-1.jpg", name: "Chardonnay", note: "Barrica neutra, acidez de serra." },
  { src: "/premium/vinho-5.jpg", name: "Espumante Nature", note: "24 meses no fermento. Poucas caixas." },
];

export function VinicolaStory({ display, sans }: { display: string; sans: string }) {
  const setup = useCallback((api: typeof gsap, root: HTMLElement) => {
    layerParallax(api, root, "#topo");

    const heroImg = root.querySelector("[data-hero-scale]");
    if (heroImg) {
      api.fromTo(
        heroImg,
        { scale: 1.22 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: { trigger: root.querySelector("#topo"), start: "top top", end: "bottom top", scrub: true },
        }
      );
    }

    api.fromTo(
      root.querySelector("[data-title]"),
      { y: 28 },
      {
        y: -36,
        ease: "none",
        scrollTrigger: { trigger: root.querySelector("#topo"), start: "top top", end: "bottom top", scrub: true },
      }
    );

    crossfadeStory(api, root);
    pinHorizontalReel(api, root);
    sceneMotion(api, root);
    markChapters(api, root);
  }, []);

  return (
    <StoryRoot setup={setup} className={`${sans} bg-[#140e0c] text-[#f3e6d4]`}>
      <header className="fixed top-10 right-0 left-0 z-30 mx-auto flex max-w-[1400px] items-center justify-between px-5 pt-2 md:px-10">
        <a href="#topo" className={`${display} text-2xl text-[#f3e6d4]`}>
          Quinta do Vento
        </a>
        <DemoMenu buttonClassName="text-[#f3e6d4]">
          <a href="#vinhas" className="text-sm text-[#f3e6d4]/70">
            As vinhas
          </a>
          <a href="#cortes" className="text-sm text-[#f3e6d4]/70">
            Os cortes
          </a>
          <a href="#mesa" className="text-sm text-[#f3e6d4]/70">
            A mesa
          </a>
          <a href="#visita" className="text-sm text-[#f3e6d4]/70">
            Visita
          </a>
          <a href={WA} target="_blank" rel="noopener" className="bg-[#c5a46a] px-3 py-2 text-xs font-bold text-[#140e0c]">
            WhatsApp
          </a>
        </DemoMenu>
      </header>
      <ChapterRail items={chapters} color="#c5a46a" />

      <section id="topo" data-chapter className="relative h-[210vh]">
        <div className="sticky top-0 h-svh overflow-hidden">
          <div data-depth="0.1" data-hero-scale className="absolute inset-[-14%]">
            <Image src="/premium/vinho-4.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
          </div>
          <div data-depth="0.26" className="absolute inset-[-10%] mix-blend-multiply opacity-45">
            <Image src="/premium/vinho-1.jpg" alt="" fill sizes="100vw" className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#140e0c] via-[#140e0c]/40 to-transparent" />
          <div data-title className="absolute inset-x-0 bottom-0 px-5 pb-16 md:px-10 md:pb-24">
            <p className="text-[12px] tracking-[0.22em] text-[#c5a46a] uppercase">Bento Gonçalves  Vale dos Vinhedos</p>
            <h1 className={`${display} mt-3 max-w-[13ch] text-[clamp(3.4rem,10vw,8.4rem)] leading-[0.86]`}>
              O <em className="italic">vento</em> entra na uva.
            </h1>
            <p className="mt-5 max-w-[36ch] text-[#f3e6d4]/70">
              Duas gerações. Quatro cortes. Visita sexta e sábado, almoço na varanda que olha o vale.
            </p>
          </div>
        </div>
      </section>

      <section id="vinhas" data-chapter data-story className="relative md:grid md:grid-cols-2">
        <div className="relative h-[62vh] overflow-hidden md:sticky md:top-0 md:h-svh">
          {terra.map((item, index) => (
            <div
              key={item.kicker}
              data-story-img
              className="absolute inset-0"
              style={{ opacity: index === 0 ? 1 : 0 }}
            >
              <Image src={item.src} alt="" fill sizes="50vw" className="object-cover" />
              <div className="absolute inset-0 bg-[#140e0c]/25" />
            </div>
          ))}
        </div>
        <div>
          {terra.map((item) => (
            <article key={item.kicker} data-story-beat className="flex min-h-[80vh] flex-col justify-center px-5 py-20 md:min-h-svh md:px-16">
              <p className="text-[11px] tracking-[0.22em] text-[#c5a46a] uppercase">{item.kicker}</p>
              <h2 className={`${display} mt-4 max-w-[12ch] text-[clamp(2.4rem,5vw,4.6rem)] leading-[0.92]`}>{item.title}</h2>
              <p className="mt-6 max-w-[36ch] text-[#f3e6d4]/62">{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="border-y border-[#c5a46a]/15 px-5 py-16 md:px-10">
        <div className="mx-auto grid max-w-[1400px] grid-cols-3 gap-6">
          {[
            ["18", "hectares"],
            ["4", "cortes"],
            ["2", "gerações"],
          ].map(([n, l]) => (
            <div key={l}>
              <p className={`${display} text-[clamp(2.4rem,6vw,4.8rem)] leading-none text-[#c5a46a]`}>{n}</p>
              <p className="mt-2 text-[12px] tracking-[0.18em] text-[#f3e6d4]/50 uppercase">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="cortes" data-chapter data-reel className="relative">
        <div data-reel-track className="flex w-max max-md:w-full max-md:flex-col">
          {cortes.map((corte) => (
            <article key={corte.name} className="relative h-svh w-screen shrink-0 max-md:w-full">
              <Image src={corte.src} alt={corte.name} fill sizes="100vw" className="object-cover" />
              <div className="absolute inset-0 bg-[#140e0c]/42" />
              <div className="absolute right-5 bottom-16 left-5 md:right-auto md:bottom-24 md:left-16">
                <p className="text-[12px] tracking-[0.2em] text-[#c5a46a] uppercase">Corte</p>
                <h3 className={`${display} mt-2 text-[clamp(2.4rem,6vw,5.4rem)]`}>{corte.name}</h3>
                <p className="mt-3 max-w-[32ch] text-[#f3e6d4]/75">{corte.note}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="mesa" data-chapter data-scene className="relative overflow-hidden px-5 py-32 md:px-10">
        <p
          data-speed="-0.28"
          className={`${display} pointer-events-none absolute top-[8%] left-[-6%] text-[clamp(6rem,22vw,18rem)] leading-none text-[#c5a46a]/[0.09]`}
        >
          Sábado
        </p>
        <div className="relative mx-auto max-w-[1400px]">
          <p data-rise className="text-[11px] tracking-[0.22em] text-[#c5a46a] uppercase">O sábado</p>
          <h2 data-rise className={`${display} mt-3 max-w-[14ch] text-[clamp(2.4rem,5vw,4.6rem)] leading-[0.92]`}>
            Quatro horas. Sem guia de ônibus.
          </h2>
          <div className="mt-20 grid gap-10 md:grid-cols-4">
            {roteiro.map(([hora, nome, texto], index) => (
              <article
                key={hora}
                data-speed={0.05 + index * 0.07}
                className={index % 2 ? "md:mt-20" : "md:mt-0"}
              >
                <p className={`${display} text-[2.2rem] leading-none text-[#c5a46a]`}>{hora}</p>
                <h3 className={`${display} mt-4 text-[1.8rem] leading-none`}>{nome}</h3>
                <p className="mt-3 max-w-[24ch] text-[#f3e6d4]/58">{texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-scene className="overflow-hidden border-y border-[#c5a46a]/15 px-5 py-24 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <h2 data-rise className={`${display} text-[clamp(2.2rem,4vw,3.6rem)] leading-[0.94]`}>Carta da visita</h2>
          <div className="mt-10">
            {carta.map(([nome, texto, preco], index) => (
              <article
                key={nome}
                data-slide={index % 2 ? "right" : "left"}
                className="grid items-baseline gap-2 border-t border-[#c5a46a]/15 py-6 last:border-b md:grid-cols-[1fr_auto]"
              >
                <div>
                  <h3 className={`${display} text-[1.8rem] leading-none`}>{nome}</h3>
                  <p className="mt-2 text-[#f3e6d4]/55">{texto}</p>
                </div>
                <p className="font-semibold text-[#c5a46a]">{preco}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-scene className="relative overflow-hidden md:grid md:grid-cols-2">
        <div className="relative h-[58vh] overflow-hidden md:h-[88vh]">
          <div data-scale-in data-speed="0.14" className="absolute inset-[-16%]">
            <Image src="/premium/vinho-6.jpg" alt="" fill sizes="50vw" className="object-cover" />
          </div>
        </div>
        <div className="flex flex-col justify-center px-5 py-20 md:px-16">
          <p data-rise className="text-[11px] tracking-[0.22em] text-[#c5a46a] uppercase">A casa</p>
          <h2 data-rise className={`${display} mt-3 max-w-[12ch] text-[clamp(2.2rem,5vw,4rem)] leading-[0.92]`}>
            O avô plantou. O filho corta.
          </h2>
          <p data-rise className="mt-6 max-w-[42ch] text-[#f3e6d4]/62">
            Donato abriu o primeiro talhão em 1987. Hoje o João decide a colheita. A mãe ainda fecha o almoço da varanda. Sem enólogo de revista.
          </p>
        </div>
      </section>

      <section data-scene className="overflow-hidden px-5 py-28 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <h2 data-rise className={`${display} text-[clamp(2.2rem,4vw,3.4rem)]`}>Quem subiu o vale</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["Quatro taças. Sem guia de ônibus. Levei a caixa da casa.", "Carla M.", "Porto Alegre"],
              ["O Tannat da casa. Tanino firme, como falaram.", "André V.", "Caxias do Sul"],
              ["Choveu. A adega segurou. O almoço não saiu da varanda.", "Sofia L.", "São Paulo"],
            ].map(([quote, name, place], index) => (
              <article
                key={name}
                data-clip
                data-speed={0.04 + index * 0.06}
                className={`border border-[#c5a46a]/20 bg-[#1c1512] p-6 ${index === 1 ? "md:mt-16" : ""}`}
              >
                <p className={`${display} text-[1.4rem] leading-snug italic`}>“{quote}”</p>
                <p className="mt-5 text-sm font-semibold">{name}</p>
                <p className="mt-1 text-xs text-[#f3e6d4]/45">{place}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div data-scene className="overflow-hidden border-y border-[#c5a46a]/10 py-8">
        <p data-drift="220" className={`${display} whitespace-nowrap text-[clamp(3.2rem,9vw,7.4rem)] leading-none text-[#c5a46a]/18`}>
          Vale dos Vinhedos  Bento Gonçalves  Merlot  Tannat  Chardonnay  Nature
        </p>
      </div>

      <section id="visita" data-chapter className="px-5 py-28 md:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-2">
          <div>
            <h2 className={`${display} text-[clamp(2.4rem,5vw,4.2rem)] leading-[0.94]`}>Marca a visita.</h2>
            <p className="mt-5 max-w-[36ch] text-[#f3e6d4]/62">
              Sexta e sábado, 11h. Grupo de até 12. Criança entra, taça não. Chuva troca a vinha pela adega.
            </p>
            <dl className="mt-10 grid max-w-[42ch] gap-5 text-[15px]">
              <div>
                <dt className="text-[#c5a46a]">Endereço</dt>
                <dd className="mt-1 text-[#f3e6d4]/70">RS 486, km 14. Vale dos Vinhedos, Bento Gonçalves. Estacionamento no alto.</dd>
              </div>
              <div>
                <dt className="text-[#c5a46a]">Levar o vinho</dt>
                <dd className="mt-1 text-[#f3e6d4]/70">Caixa no porta-malas ou envio para São Paulo na semana.</dd>
              </div>
            </dl>
            <a href={WA} target="_blank" rel="noopener" className="mt-8 inline-block bg-[#c5a46a] px-6 py-3.5 text-sm font-bold text-[#140e0c]">
              Pedir horário
            </a>
          </div>
          <div>
            <div className="border border-[#c5a46a]/25 bg-[#1c1512] p-6">
              <DemoForm submitLabel="Enviar" buttonClassName="bg-[#c5a46a] px-5 py-3.5 font-bold text-[#140e0c]">
                <input className="w-full border border-[#c5a46a]/20 bg-transparent px-3.5 py-3" placeholder="Nome" required />
                <input className="w-full border border-[#c5a46a]/20 bg-transparent px-3.5 py-3" placeholder="WhatsApp" required />
                <textarea className="min-h-24 w-full border border-[#c5a46a]/20 bg-transparent px-3.5 py-3" placeholder="Quantas pessoas e qual sábado" />
              </DemoForm>
            </div>
            <div className="mt-8">
              <Faq
                items={[
                  { q: "Abre no domingo?", a: "Não. Só sexta e sábado, 11h. Sem encaixe no meio da semana." },
                  { q: "Posso ir sem reserva?", a: "Não. A varanda tem 12 lugares. O almoço fecha na quinta." },
                  { q: "Vende para levar?", a: "Sim. Caixa da casa no dia. Envio para SP se avisar." },
                  { q: "Aceita ônibus de tour?", a: "Não. Grupo de até 12. Van pequena, se avisar." },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="flex flex-wrap items-center justify-between gap-3 px-5 py-7 text-[12px] text-[#f3e6d4]/40 md:px-10">
        <span>Quinta do Vento  Bento Gonçalves</span>
        <a href="#topo" className="text-[#f3e6d4]/70">
          Topo
        </a>
      </footer>
    </StoryRoot>
  );
}
