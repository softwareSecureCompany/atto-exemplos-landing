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
  markChapters,
  pinHorizontalReel,
  sceneMotion,
} from "@/components/story-scroll";
import { WA } from "@/lib/site";

const chapters = [
  { id: "topo", label: "Casa" },
  { id: "dia", label: "O dia" },
  { id: "suites", label: "Suítes" },
  { id: "entrar", label: "Entra" },
  { id: "reserva", label: "Reserva" },
];

const incluso = [
  ["Café", "Na mesa do pátio. Pão, fruta, café da fazenda. Sem cardápio."],
  ["Cama", "Roupa trocada a cada dois dias. Toalha no banco."],
  ["Sem TV", "Wifi no pátio. Quarto sem tela."],
  ["Bikes", "Duas. Quadrado em 12 minutos se quiser pedalar."],
];

const caminho = [
  ["Porto Seguro", "Voo até lá. Transfer da casa, 1h20, se avisar o voo."],
  ["Carro", "Estrada do Espelho. Portão sem placa grande. A gente manda o pin."],
  ["Quadrado", "12 minutos a pé. Praia dos Nativos, 8. Espelho, 25 de carro."],
];

const dia = [
  {
    src: "/premium/hotel-2.jpg",
    kicker: "Manhã",
    title: "A chave fica no envelope.",
    text: "Café na mesa do pátio. Ninguém pergunta seu nome. Você chega, deixa o carro na sombra e entra.",
  },
  {
    src: "/premium/hotel-5.jpg",
    kicker: "Tarde",
    title: "A piscina olha o verde, não a rua.",
    text: "Estadia mínima de três noites. A casa não é hotel de passagem. Quadrado de Trancoso, 12 minutos a pé.",
  },
  {
    src: "/premium/hotel-4.jpg",
    kicker: "Noite",
    title: "A casa dorme cedo.",
    text: "Sem festas. Sem som alto depois das 22h. Cachorro aceito se avisar. As onze suítes apagam juntas.",
  },
];

const suites = [
  { src: "/premium/hotel-2.jpg", name: "Suíte Norte", text: "Cama baixa, vento da mata, sem TV." },
  { src: "/premium/hotel-5.jpg", name: "Suíte Pátio", text: "Abre para o pátio interno. Uma rede." },
  { src: "/premium/hotel-1.jpg", name: "Suíte Mar", text: "A única que vê um pedaço de azul." },
  { src: "/premium/hotel-3.jpg", name: "Casa inteira", text: "As onze suítes. Família ou retiro." },
];

export function HotelStory({ display, sans }: { display: string; sans: string }) {
  const setup = useCallback((api: typeof gsap, root: HTMLElement) => {
    const mm = api.matchMedia();

    mm.add("(min-width: 860px)", () => {
      const pin = root.querySelector<HTMLElement>("[data-reveal-pin]");
      const mask = root.querySelector<HTMLElement>("[data-mask]");
      const scale = root.querySelector("[data-hero-scale]");
      if (pin && mask) {
        api.fromTo(
          mask,
          { clipPath: "inset(18% 28% 20% 28% round 50%)" },
          {
            clipPath: "inset(0% 0% 0% 0% round 0px)",
            ease: "none",
            scrollTrigger: { trigger: pin, start: "top top", end: "+=130%", scrub: 0.7, pin: true, anticipatePin: 1 },
          }
        );
      }
      if (pin && scale) {
        api.fromTo(
          scale,
          { scale: 1.18 },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: { trigger: pin, start: "top top", end: "+=130%", scrub: true },
          }
        );
      }
    });

    crossfadeStory(api, root);
    pinHorizontalReel(api, root);
    sceneMotion(api, root);
    markChapters(api, root);
  }, []);

  return (
    <StoryRoot setup={setup} className={`${sans} bg-[#ece6dc] text-[#1b1914]`}>
      <header className="fixed top-10 right-0 left-0 z-40 mx-auto flex max-w-[1400px] items-center justify-between px-5 pt-2 text-[#1b1914] max-md:bg-[#ece6dc] md:px-10 md:mix-blend-difference md:text-white">
        <a href="#topo" className={`${display} text-2xl`}>
          Casa Alta
        </a>
        <DemoMenu buttonClassName="text-inherit">
          <a href="#dia" className="text-sm">
            O dia
          </a>
          <a href="#suites" className="text-sm">
            Suítes
          </a>
          <a href="#entrar" className="text-sm">
            A casa
          </a>
          <a href="#reserva" className="text-sm">
            Reserva
          </a>
          <a href={WA} target="_blank" rel="noopener" className="bg-[#1b1914] px-3 py-2 text-xs font-bold text-[#ece6dc] md:bg-white md:text-[#1b1914]">
            WhatsApp
          </a>
        </DemoMenu>
      </header>
      <ChapterRail items={chapters} color="#ffffff" className="mix-blend-difference" />

      <section id="topo" data-chapter data-reveal-pin className="relative h-svh bg-[#ece6dc]">
        <div data-mask className="absolute inset-0 md:[clip-path:inset(18%_28%_20%_28%_round_50%)]">
          <div data-hero-scale className="absolute inset-0">
            <Image src="/premium/hotel-3.jpg" alt="Casa Alta" fill priority sizes="100vw" className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#1b1914]/55 to-transparent" />
        </div>
        <div className="relative z-10 flex h-svh items-end px-5 pb-16 text-[#ece6dc] md:px-10 md:pb-20 md:mix-blend-difference md:text-white">
          <div>
            <p className="text-[12px] tracking-[0.2em] uppercase">Trancoso  Bahia</p>
            <h1 className={`${display} mt-3 max-w-[12ch] text-[clamp(3.2rem,9vw,7.6rem)] leading-[0.88]`}>
              Onze suítes. Nenhuma recepção.
            </h1>
          </div>
        </div>
      </section>

      <section id="dia" data-chapter data-story className="relative md:grid md:grid-cols-2">
        <div className="relative h-[62vh] overflow-hidden md:sticky md:top-0 md:h-svh">
          {dia.map((item, index) => (
            <div
              key={item.kicker}
              data-story-img
              className="absolute inset-0"
              style={{ opacity: index === 0 ? 1 : 0 }}
            >
              <Image src={item.src} alt="" fill sizes="50vw" className="object-cover" />
              <div className="absolute inset-0 bg-[#1b1914]/20" />
            </div>
          ))}
        </div>
        <div className="bg-[#ece6dc]">
          {dia.map((item) => (
            <article key={item.kicker} data-story-beat className="flex min-h-[80vh] flex-col justify-center px-5 py-20 md:min-h-svh md:px-16">
              <p className="text-[11px] tracking-[0.22em] uppercase text-[#8a8173]">{item.kicker}</p>
              <h2 data-rise className={`${display} mt-4 max-w-[13ch] text-[clamp(2.2rem,5vw,4.4rem)] leading-[0.94]`}>
                {item.title}
              </h2>
              <p data-rise className="mt-6 max-w-[38ch] text-[#5a5448]">
                {item.text}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="suites" data-chapter data-reel>
        <div data-reel-track className="flex w-max max-md:w-full max-md:flex-col">
          {suites.map((suite) => (
            <article key={suite.name} className="relative h-svh w-screen shrink-0 max-md:w-full">
              <Image src={suite.src} alt={suite.name} fill sizes="100vw" className="object-cover" />
              <div className="absolute inset-0 bg-[#1b1914]/30" />
              <div className="absolute bottom-16 left-6 text-[#ece6dc] md:left-16">
                <h3 className={`${display} text-[clamp(2.2rem,5vw,4.6rem)]`}>{suite.name}</h3>
                <p className="mt-2 max-w-[30ch] text-[#ece6dc]/75">{suite.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="entrar" data-chapter data-scene className="relative overflow-hidden px-5 py-32 md:px-10">
        <p
          data-speed="-0.2"
          className={`${display} pointer-events-none absolute top-8 right-[-4%] text-[clamp(5rem,16vw,13rem)] leading-none text-[#1b1914]/[0.06]`}
        >
          Casa
        </p>
        <div className="relative mx-auto max-w-[1400px]">
          <p data-rise className="text-[11px] tracking-[0.22em] uppercase text-[#8a8173]">O que entra</p>
          <h2 data-rise className={`${display} mt-3 max-w-[14ch] text-[clamp(2.4rem,5vw,4.4rem)] leading-[0.92]`}>
            A casa resolve o básico. O resto é rua.
          </h2>
          <div className="mt-16 grid gap-8 md:grid-cols-4">
            {incluso.map(([nome, texto], index) => (
              <article key={nome} data-speed={0.04 + index * 0.08} className={index % 2 ? "md:mt-14" : ""}>
                <h3 className={`${display} text-[1.8rem] leading-none`}>{nome}</h3>
                <p className="mt-3 max-w-[24ch] text-[#5a5448]">{texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-scene className="bg-white md:grid md:grid-cols-2">
        <div className="relative h-[56vh] overflow-hidden md:sticky md:top-0 md:h-svh">
          <div data-speed="0.16" className="absolute inset-[-14%]">
            <Image src="/premium/hotel-1.jpg" alt="" fill sizes="50vw" className="object-cover" />
          </div>
        </div>
        <div className="flex flex-col justify-center px-5 py-24 md:px-16">
          <p data-rise className="text-[11px] tracking-[0.22em] uppercase text-[#8a8173]">Como chegar</p>
          <h2 data-rise className={`${display} mt-3 max-w-[12ch] text-[clamp(2.2rem,5vw,4rem)] leading-[0.94]`}>
            Porto Seguro. Depois a gente busca.
          </h2>
          <div className="mt-10 grid gap-8">
            {caminho.map(([nome, texto], index) => (
              <article key={nome} data-slide={index % 2 ? "right" : "left"} className="border-t border-[#1b1914]/10 pt-5">
                <h3 className={`${display} text-[1.7rem] leading-none`}>{nome}</h3>
                <p className="mt-2 max-w-[40ch] text-[#5a5448]">{texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-scene className="relative overflow-hidden px-5 py-28 md:px-10">
        <p
          data-speed="0.18"
          className={`${display} pointer-events-none absolute bottom-[-8%] left-[-4%] text-[clamp(5rem,18vw,14rem)] leading-none text-[#1b1914]/[0.05]`}
        >
          Sete
        </p>
        <div className="relative mx-auto max-w-[1400px]">
          <p data-rise className="text-[11px] tracking-[0.22em] uppercase text-[#8a8173]">Temporada</p>
          <h2 data-rise className={`${display} mt-3 max-w-[16ch] text-[clamp(2.2rem,5vw,4rem)] leading-[0.92]`}>
            Réveillon e carnaval pedem sete noites.
          </h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              ["Baixa", "Março a junho. Mínimo três noites. A casa respira."],
              ["Alta", "Julho, dezembro, feriado. Mínimo sete. Pin no WhatsApp."],
              ["Casa inteira", "Família ou retiro. As onze suítes. Consulta com antecedência."],
            ].map(([t, d], index) => (
              <article key={t} data-speed={0.05 + index * 0.07} className={index === 1 ? "md:mt-12" : ""}>
                <h3 className={`${display} text-[1.8rem] leading-none`}>{t}</h3>
                <p className="mt-3 max-w-[28ch] text-[#5a5448]">{d}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-scene className="overflow-hidden border-t border-[#1b1914]/10 px-5 py-28 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <h2 data-rise className={`${display} text-[clamp(2.2rem,4vw,3.4rem)]`}>Quem deixou o carro na sombra</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["Chave no envelope. Café na mesa. Ninguém perguntou meu nome.", "Inês K.", "São Paulo"],
              ["Três noites. A casa não é hotel de passagem. Volto.", "Thiago B.", "Rio"],
              ["Cachorro avisado. Sem festa do vizinho. A casa dorme cedo.", "Marina e João", "Belo Horizonte"],
            ].map(([quote, name, place], index) => (
              <article
                key={name}
                data-clip
                data-speed={0.03 + index * 0.07}
                className={`border border-[#1b1914]/10 bg-white p-6 ${index === 1 ? "md:-mt-10" : "md:mt-8"}`}
              >
                <p className={`${display} text-[1.35rem] leading-snug italic`}>“{quote}”</p>
                <p className="mt-5 text-sm font-semibold">{name}</p>
                <p className="mt-1 text-xs text-[#8a8173]">{place}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div data-scene className="overflow-hidden bg-[#1b1914] py-8">
        <p data-drift="-200" className={`${display} whitespace-nowrap text-[clamp(3.2rem,9vw,7.4rem)] leading-none text-[#ece6dc]/12`}>
          Trancoso  Quadrado  Onze suítes  Nenhuma recepção
        </p>
      </div>

      <section id="reserva" data-chapter className="bg-[#1b1914] px-5 py-28 text-[#ece6dc] md:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-2">
          <div>
            <h2 className={`${display} text-[clamp(2.4rem,5vw,4.4rem)] leading-[0.94]`}>Pede as datas.</h2>
            <p className="mt-5 max-w-[36ch] text-[#ece6dc]/60">
              Mínimo três noites. Alta temporada, sete. Sem festas. Sem som alto depois das 22h. Cachorro se avisar.
            </p>
            <dl className="mt-10 grid max-w-[40ch] gap-5 text-[15px]">
              <div>
                <dt className="text-[#ece6dc]/45">Suíte</dt>
                <dd className="mt-1 text-[#ece6dc]/75">A partir de R$ 1.180 a noite. Café incluso.</dd>
              </div>
              <div>
                <dt className="text-[#ece6dc]/45">Casa inteira</dt>
                <dd className="mt-1 text-[#ece6dc]/75">Onze suítes. Família ou retiro. Sob consulta.</dd>
              </div>
            </dl>
            <a href={WA} target="_blank" rel="noopener" className="mt-8 inline-block bg-[#ece6dc] px-6 py-3.5 text-sm font-bold text-[#1b1914]">
              Reservar no WhatsApp
            </a>
          </div>
          <div>
            <div className="border border-white/10 p-6">
              <DemoForm submitLabel="Enviar" buttonClassName="bg-[#ece6dc] px-5 py-3.5 font-bold text-[#1b1914]">
                <input className="w-full border border-white/15 bg-transparent px-3.5 py-3" placeholder="Nome" required />
                <input className="w-full border border-white/15 bg-transparent px-3.5 py-3" placeholder="WhatsApp" required />
                <textarea className="min-h-24 w-full border border-white/15 bg-transparent px-3.5 py-3" placeholder="Chegada, saída, quantos quartos" />
              </DemoForm>
            </div>
            <div className="mt-8">
              <Faq
                items={[
                  { q: "Tem recepção?", a: "Não. A chave fica no envelope. Dúvida, WhatsApp da casa." },
                  { q: "Aceita criança?", a: "Sim. Berço se avisar. Sem recreação, sem babá." },
                  { q: "Tem cozinha?", a: "Uma compartilhada no pátio. Fogão, geladeira, café." },
                  { q: "Tem festa?", a: "Não. Sem som alto depois das 22h. A casa não aluga para evento." },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="flex flex-wrap items-center justify-between gap-3 bg-[#1b1914] px-5 py-7 text-[12px] text-[#ece6dc]/40 md:px-10">
        <span>Casa Alta  Trancoso</span>
        <a href="#topo" className="text-[#ece6dc]/70">
          Topo
        </a>
      </footer>
    </StoryRoot>
  );
}
