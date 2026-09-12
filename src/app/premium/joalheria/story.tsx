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
  { id: "topo", label: "Lume" },
  { id: "atelier", label: "Atelier" },
  { id: "pecas", label: "Peças" },
  { id: "processo", label: "Feito" },
  { id: "visita", label: "Visita" },
];

const processo = [
  ["01", "Conversa", "40 minutos na bancada. O que você quer, o que já tem, o peso."],
  ["02", "Desenho", "No papel, na hora. Você sai com o traço e o prazo."],
  ["03", "Prova", "Cera ou metal cru. Ajuste de aro antes de fechar o ouro."],
  ["04", "Entrega", "4 a 8 semanas. Você volta sozinho. A peça já tem nome."],
];

const oficiana = [
  ["Ouro 18k", "Amarelo, branco ou rosa. Gramatura no papel."],
  ["Pedra sua", "Brilhante, pérola, pedra de família. A gente crava."],
  ["Conserto", "Peça antiga entra. 15 dias se o ouro aguentar."],
  ["Aliança", "Par que não é cópia. Medida dos dois na mesma visita."],
];

const atelier = [
  {
    src: "/premium/joia-1.jpg",
    kicker: "Haddock Lobo",
    title: "Porta estreita. Luz baixa.",
    text: "Você entra sozinho. Sem vitrine lotada, sem corredor. A bancada de pedra fica no fundo.",
  },
  {
    src: "/premium/joia-2.jpg",
    kicker: "Encomenda",
    title: "Medida, peso e prazo no papel.",
    text: "Ouro 18k. A gente desenha com você sentado. Sem surpresa no final.",
  },
  {
    src: "/premium/joia-4.jpg",
    kicker: "Conserto",
    title: "A peça antiga entra.",
    text: "A gente respeita o ouro que já existe. O que sobra vira a próxima peça, se você quiser.",
  },
];

const pecas = [
  { src: "/premium/joia-1.jpg", name: "Anel Eclipse", text: "Ouro 18k, um brilhante. Feito sob medida." },
  { src: "/premium/joia-2.jpg", name: "Corrente Lume", text: "Elo grosso. Uma barra que vira pulso." },
  { src: "/premium/joia-4.jpg", name: "Fio de Pérola", text: "Fecho escondido. Sem etiqueta na frente." },
  { src: "/premium/joia-3.jpg", name: "Pulseira Infinito", text: "Pavê contínuo. Peso certo no pulso." },
];

export function JoalheriaStory({ display, sans }: { display: string; sans: string }) {
  const setup = useCallback((api: typeof gsap, root: HTMLElement) => {
    const mm = api.matchMedia();

    api.utils.toArray<HTMLElement>(root.querySelectorAll("[data-sheen]")).forEach((el) => {
      const trigger = el.closest<HTMLElement>("[data-scene]") ?? root.querySelector("#topo");
      api.fromTo(
        el,
        { x: "-40%" },
        {
          x: "140%",
          ease: "none",
          scrollTrigger: { trigger, start: "top top", end: "bottom top", scrub: true },
        }
      );
    });

    mm.add("(min-width: 860px)", () => {
      const pin = root.querySelector<HTMLElement>("[data-reveal-pin]");
      const mask = root.querySelector<HTMLElement>("[data-mask]");
      if (pin && mask) {
        api.fromTo(
          mask,
          { clipPath: "circle(18% at 64% 46%)" },
          {
            clipPath: "circle(120% at 50% 50%)",
            ease: "none",
            scrollTrigger: { trigger: pin, start: "top top", end: "+=120%", scrub: 0.65, pin: true, anticipatePin: 1 },
          }
        );
      }
    });

    api.fromTo(
      root.querySelector("[data-line]"),
      { scaleX: 0 },
      {
        scaleX: 1,
        transformOrigin: "left center",
        ease: "none",
        scrollTrigger: { trigger: root.querySelector("#atelier"), start: "top 75%", end: "top 32%", scrub: true },
      }
    );

    const loupe = root.querySelector("[data-loupe]");
    if (loupe) {
      api.fromTo(
        loupe,
        { scale: 1.35 },
        {
          scale: 1,
          ease: "none",
          scrollTrigger: { trigger: loupe, start: "top 80%", end: "top 20%", scrub: true },
        }
      );
    }

    crossfadeStory(api, root);
    pinHorizontalReel(api, root);
    sceneMotion(api, root);
    markChapters(api, root);
  }, []);

  return (
    <StoryRoot setup={setup} className={`${sans} bg-[#0a0908] text-[#efe6d6]`}>
      <header className="fixed top-10 right-0 left-0 z-30 mx-auto flex max-w-[1400px] items-center justify-between px-5 pt-2 md:px-10">
        <a href="#topo" className={`${display} text-xl tracking-[0.18em] uppercase`}>
          Lume
        </a>
        <DemoMenu buttonClassName="text-[#efe6d6]">
          <a href="#atelier" className="text-sm text-[#efe6d6]/65">
            Atelier
          </a>
          <a href="#pecas" className="text-sm text-[#efe6d6]/65">
            Peças
          </a>
          <a href="#processo" className="text-sm text-[#efe6d6]/65">
            Feito
          </a>
          <a href="#visita" className="text-sm text-[#efe6d6]/65">
            Visita
          </a>
          <a href={WA} target="_blank" rel="noopener" className="border border-[#d4b483] px-3 py-2 text-xs font-bold text-[#d4b483]">
            WhatsApp
          </a>
        </DemoMenu>
      </header>
      <ChapterRail items={chapters} color="#d4b483" />

      <section id="topo" data-chapter data-reveal-pin className="relative h-svh overflow-hidden">
        <div data-mask className="absolute inset-0 md:[clip-path:circle(18%_at_64%_46%)]">
          <Image src="/premium/joia-1.jpg" alt="" fill priority sizes="100vw" className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0908] via-[#0a0908]/50 to-transparent" />
        </div>
        <div
          data-sheen
          className="pointer-events-none absolute inset-y-0 left-[-45%] z-10 w-[42%] bg-gradient-to-r from-transparent via-[#ffe7b0]/28 to-transparent"
        />
        <div className="relative z-10 flex h-svh flex-col justify-end px-5 pb-20 md:px-10">
          <p className="text-[11px] tracking-[0.28em] text-[#d4b483] uppercase">Jardins  São Paulo</p>
          <h1 className={`${display} mt-4 max-w-[10ch] text-[clamp(3.2rem,10vw,8rem)] leading-[0.86]`}>
            Peça única. Sem vitrine lotada.
          </h1>
          <p className="mt-5 max-w-[34ch] text-[#efe6d6]/60">
            Ouro 18k, hora marcada, atelier no fundo da loja. Você senta. A gente desenha.
          </p>
        </div>
      </section>

      <section id="atelier" data-chapter data-story className="px-5 pt-20 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <div data-line className="mb-6 h-px bg-[#d4b483]" />
        </div>
        <div className="mx-auto grid max-w-[1400px] md:grid-cols-2">
          <div className="relative h-[62vh] overflow-hidden md:sticky md:top-0 md:h-svh">
            {atelier.map((item, index) => (
              <div
                key={item.kicker}
                data-story-img
                className="absolute inset-0"
                style={{ opacity: index === 0 ? 1 : 0 }}
              >
                <Image src={item.src} alt="" fill sizes="50vw" className="object-cover" />
                <div className="absolute inset-0 bg-[#0a0908]/30" />
              </div>
            ))}
          </div>
          <div>
            {atelier.map((item) => (
              <article key={item.kicker} data-story-beat className="flex min-h-[75vh] flex-col justify-center py-16 md:min-h-svh md:pl-16">
                <p className="text-[11px] tracking-[0.22em] text-[#d4b483] uppercase">{item.kicker}</p>
                <h2 className={`${display} mt-4 max-w-[12ch] text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.92] text-[#d4b483]`}>
                  {item.title}
                </h2>
                <p className="mt-6 max-w-[34ch] text-[#efe6d6]/55">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="overflow-hidden px-5 py-24 md:px-10">
        <div className="mx-auto grid max-w-[1400px] items-center gap-12 md:grid-cols-2">
          <div>
            <p className="text-[11px] tracking-[0.22em] text-[#d4b483] uppercase">Em detalhe</p>
            <h2 className={`${display} mt-4 max-w-[11ch] text-[clamp(2.2rem,5vw,4.2rem)] leading-[0.92]`}>
              A pedra some se a luz for ruim.
            </h2>
            <p className="mt-5 max-w-[34ch] text-[#efe6d6]/55">
              Por isso a bancada é baixa e a lâmpada é fria. Você vê o que leva. Sem filtro de vitrine.
            </p>
          </div>
          <div className="relative aspect-square overflow-hidden bg-[#050403]">
            <div data-loupe className="absolute inset-[-18%]">
              <Image src="/premium/joia-1.jpg" alt="Anel Eclipse" fill sizes="50vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section id="pecas" data-chapter data-reel className="bg-[#050403]">
        <div data-reel-track className="flex w-max max-md:w-full max-md:flex-col">
          {pecas.map((peca) => (
            <article key={peca.name} className="relative h-svh w-screen shrink-0 border-r border-white/5 max-md:w-full md:w-[70vw]">
              <Image src={peca.src} alt={peca.name} fill sizes="80vw" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050403] via-transparent" />
              <div className="absolute right-8 bottom-16 left-8 md:left-14">
                <h3 className={`${display} text-[clamp(2rem,5vw,4.2rem)]`}>{peca.name}</h3>
                <p className="mt-2 max-w-[28ch] text-[#efe6d6]/65">{peca.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="processo" data-chapter data-scene className="relative overflow-hidden px-5 py-32 md:px-10">
        <span data-grow className="pointer-events-none absolute top-24 bottom-24 left-5 hidden w-px origin-top bg-[#d4b483] md:left-10 md:block" />
        <p
          data-speed="-0.22"
          className={`${display} pointer-events-none absolute top-[10%] right-[-3%] text-[clamp(5rem,16vw,12rem)] leading-none text-[#d4b483]/[0.08]`}
        >
          01
        </p>
        <div className="relative mx-auto max-w-[1400px]">
          <p data-rise className="text-[11px] tracking-[0.22em] text-[#d4b483] uppercase">O feito</p>
          <h2 data-rise className={`${display} mt-3 max-w-[14ch] text-[clamp(2.4rem,5vw,4.4rem)] leading-[0.92]`}>
            Quatro passos. Nenhum some no WhatsApp.
          </h2>
          <div className="mt-16 grid gap-10 md:grid-cols-4">
            {processo.map(([n, nome, texto], index) => (
              <article key={n} data-speed={0.04 + index * 0.07} className={index % 2 ? "md:mt-16" : ""}>
                <p className="text-[11px] tracking-[0.2em] text-[#d4b483]">{n}</p>
                <h3 className={`${display} mt-3 text-[1.8rem] leading-none text-[#d4b483]`}>{nome}</h3>
                <p className="mt-3 max-w-[24ch] text-[#efe6d6]/55">{texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-scene className="relative overflow-hidden border-y border-[#d4b483]/15 px-5 py-24 md:px-10">
        <div
          data-sheen
          className="pointer-events-none absolute inset-y-0 left-[-40%] w-[40%] bg-gradient-to-r from-transparent via-[#ffe7b0]/18 to-transparent"
        />
        <div className="relative mx-auto max-w-[1400px]">
          <h2 data-rise className={`${display} text-[clamp(2.2rem,4vw,3.6rem)] leading-[0.94]`}>O que a bancada aceita</h2>
          <div className="mt-12 grid gap-10 md:grid-cols-4">
            {oficiana.map(([nome, texto], index) => (
              <article key={nome} data-slide={index % 2 ? "right" : "left"}>
                <h3 className={`${display} text-[1.7rem] leading-none`}>{nome}</h3>
                <p className="mt-3 max-w-[24ch] text-[#efe6d6]/55">{texto}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section data-scene className="overflow-hidden md:grid md:grid-cols-2">
        <div className="flex flex-col justify-center px-5 py-20 md:px-16">
          <p data-rise className="text-[11px] tracking-[0.22em] text-[#d4b483] uppercase">Depois da entrega</p>
          <h2 data-rise className={`${display} mt-3 max-w-[14ch] text-[clamp(2.2rem,5vw,4rem)] leading-[0.92]`}>
            A peça pede menos produto do que você pensa.
          </h2>
          <div className="mt-12 grid gap-8">
            {[
              ["Limpa", "Pano seco. Sem pasta de dente, sem banheira com sal."],
              ["Guarda", "Caixa da casa. Longe de outra peça que risca."],
              ["Volta", "Polimento sem custo no primeiro ano. Avisa no Zap."],
            ].map(([t, d]) => (
              <article key={t} data-rise>
                <h3 className={`${display} text-[1.8rem] leading-none text-[#d4b483]`}>{t}</h3>
                <p className="mt-2 max-w-[32ch] text-[#efe6d6]/55">{d}</p>
              </article>
            ))}
          </div>
        </div>
        <div className="relative h-[56vh] overflow-hidden md:h-auto">
          <div data-scale-in data-speed="0.12" className="absolute inset-[-16%]">
            <Image src="/premium/joia-3.jpg" alt="" fill sizes="50vw" className="object-cover" />
          </div>
        </div>
      </section>

      <section data-scene className="overflow-hidden px-5 py-28 md:px-10">
        <div className="mx-auto max-w-[1400px]">
          <h2 data-rise className={`${display} text-[clamp(2.2rem,4vw,3.4rem)]`}>Quem sentou na bancada</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["Aliança dos dois. Não é cópia. O peso ficou certo.", "Clara e Renato", "Pinheiros"],
              ["Consertei o anel da avó. O ouro dela ficou.", "Helena M.", "Jardins"],
              ["40 minutos. Saí com o traço e o prazo no papel.", "Diego A.", "Vila Nova Conceição"],
            ].map(([quote, name, place], index) => (
              <article
                key={name}
                data-clip
                data-speed={0.04 + index * 0.06}
                className={`border border-[#d4b483]/20 p-6 ${index === 1 ? "md:mt-14" : ""}`}
              >
                <p className={`${display} text-[1.35rem] leading-snug italic`}>“{quote}”</p>
                <p className="mt-5 text-sm font-semibold">{name}</p>
                <p className="mt-1 text-xs text-[#efe6d6]/40">{place}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <div data-scene className="overflow-hidden border-y border-[#d4b483]/10 py-8">
        <p data-drift="210" className={`${display} whitespace-nowrap text-[clamp(3.2rem,9vw,7.4rem)] leading-none text-[#d4b483]/16`}>
          Ouro 18k  Haddock Lobo  Peça única  Sem vitrine
        </p>
      </div>

      <section id="visita" data-chapter className="px-5 py-28 md:px-10">
        <div className="mx-auto grid max-w-[1400px] gap-16 md:grid-cols-2">
          <div>
            <h2 className={`${display} text-[clamp(2.4rem,5vw,4.4rem)] leading-[0.94]`}>Marca a hora.</h2>
            <p className="mt-5 max-w-[36ch] text-[#efe6d6]/55">
              Rua Haddock Lobo, 1240. Terça a sábado, 11h às 19h. Uma pessoa por horário. Sem encaixe de corredor.
            </p>
            <dl className="mt-10 grid max-w-[40ch] gap-5 text-[15px]">
              <div>
                <dt className="text-[#d4b483]">Encomenda</dt>
                <dd className="mt-1 text-[#efe6d6]/65">Sinal de 40% no desenho. O resto na entrega.</dd>
              </div>
              <div>
                <dt className="text-[#d4b483]">Visita</dt>
                <dd className="mt-1 text-[#efe6d6]/65">40 minutos. Leva a peça antiga se for conserto.</dd>
              </div>
            </dl>
            <a href={WA} target="_blank" rel="noopener" className="mt-8 inline-block border border-[#d4b483] px-6 py-3.5 text-sm font-bold text-[#d4b483]">
              Pedir visita
            </a>
          </div>
          <div>
            <div className="border border-[#d4b483]/20 p-6">
              <DemoForm submitLabel="Enviar" buttonClassName="bg-[#d4b483] px-5 py-3.5 font-bold text-[#0a0908]">
                <input className="w-full border border-[#d4b483]/20 bg-transparent px-3.5 py-3" placeholder="Nome" required />
                <input className="w-full border border-[#d4b483]/20 bg-transparent px-3.5 py-3" placeholder="WhatsApp" required />
                <textarea className="min-h-24 w-full border border-[#d4b483]/20 bg-transparent px-3.5 py-3" placeholder="Anel, aliança, encomenda..." />
              </DemoForm>
            </div>
            <div className="mt-8">
              <Faq
                items={[
                  { q: "Tem peça pronta?", a: "Poucas. Eclipse, corrente e o fio. O resto nasce na visita." },
                  { q: "Dá para ver sem marcar?", a: "Não. A porta não abre para corredor." },
                  { q: "Faz aliança de noivado?", a: "Sim. Os dois na mesma hora. O par não é cópia." },
                  { q: "Aceita pedra de família?", a: "Sim. A gente avalia a cravação na hora. Sem promessa se o ouro antigo não aguentar." },
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="flex flex-wrap items-center justify-between gap-3 px-5 py-7 text-[12px] text-[#efe6d6]/35 md:px-10">
        <span>Ourivesaria Lume  Jardins</span>
        <a href="#topo" className="text-[#efe6d6]/70">
          Topo
        </a>
      </footer>
    </StoryRoot>
  );
}
