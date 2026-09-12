import Image from "next/image";
import Link from "next/link";
import { Instrument_Serif, Inter } from "next/font/google";
import { HomeFx } from "@/components/home-fx";
import { HomeNav } from "@/components/home-nav";
import { basico, essencial, film, premium, type WorkItem } from "@/lib/catalog";
import { ATTO, IG, WA_HOME } from "@/lib/site";

const display = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});
const sans = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const compare = [
  ["Seções", "Campanha completa", "Até 8", "Narrativa inteira"],
  ["O que entra", "Serviços, prova, contato", "Cena, galeria, grain", "Pin, horizontal, parallax"],
  ["SEO", "Title, meta, estrutura", "SEO e ritmo de marca", "SEO e experiência"],
  ["Movimento", "Transições leves", "Cursor, tilt, cena", "Scroll que conta a história"],
  ["Para quem", "Campanha que converte", "Marca com peso visual", "Presença que impressiona"],
];

const steps = [
  ["Briefing", "Você manda o nicho e o plano. A gente marca o que combina nos exemplos."],
  ["Página", "Copy, cor e fotos da sua marca. O exemplo só mostra o nível de entrega."],
  ["No ar", "Você recebe a landing pronta para rodar anúncio e WhatsApp."],
];

const questions = [
  {
    q: "Qual plano eu escolho?",
    a: "Básico se você precisa existir bem e rápido. Essencial se a página precisa vender com clareza. Premium se a marca tem que impressionar na primeira rolagem.",
  },
  {
    q: "O exemplo vira o meu site?",
    a: "Não. O exemplo mostra o nível. A gente troca texto, paleta e fotos para o seu negócio. Barbearia pode virar clínica. Restaurante pode virar hotel.",
  },
  {
    q: "Quanto tempo leva?",
    a: "Básico sai em poucos dias. Essencial e Premium combinamos no briefing, conforme conteúdo e fotos que você já tem.",
  },
];

export default function HomePage() {
  return (
    <div className={`${sans.className} bg-[#efece6] text-[#0c0c0c]`}>
      <HomeFx />
      <HomeNav />

      <section id="topo" className="relative min-h-svh overflow-hidden bg-[#0c0c0c] text-[#efece6]">
        <div className="absolute inset-0 max-md:opacity-50">
          <div data-py="0.16" data-mouse="0.55" className="absolute top-[-8%] right-[-6%] h-[68%] w-[54%] will-change-transform">
            <Image
              src="/thumbs/premium-vinicola.jpg"
              alt=""
              fill
              priority
              sizes="54vw"
              className="object-cover"
            />
          </div>
          <div data-py="0.28" data-mouse="0.9" className="absolute top-[34%] right-[26%] h-[48%] w-[30%] will-change-transform max-md:right-[8%] max-md:w-[46%]">
            <Image src="/thumbs/premium-hotel.jpg" alt="" fill sizes="32vw" className="object-cover" />
          </div>
          <div data-py="0.1" data-mouse="0.4" className="absolute right-[-2%] bottom-[-12%] h-[46%] w-[36%] will-change-transform">
            <Image src="/thumbs/essencial-barbearia.jpg" alt="" fill sizes="36vw" className="object-cover" />
          </div>
          <div data-py="0.22" data-mouse="0.7" className="absolute top-[12%] right-[38%] hidden h-[28%] w-[18%] will-change-transform lg:block">
            <Image src="/thumbs/premium-joia.jpg" alt="" fill sizes="18vw" className="object-cover" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0c0c0c] via-[#0c0c0c]/88 to-[#0c0c0c]/20 max-md:via-[#0c0c0c]/70" />
        </div>

        <div className="relative z-10 mx-auto flex min-h-svh max-w-[1400px] flex-col justify-end px-5 pt-28 pb-16 md:justify-center md:px-10 md:pb-20">
          <p className="mb-5 text-[13px] font-semibold text-[#efece6]/55">Estúdio digital em São Paulo</p>
          <h1 className={`${display.className} max-w-[16ch] text-[clamp(3.4rem,11vw,8.6rem)] leading-[0.86] font-normal tracking-[-0.03em]`}>
            Escolha o nível da sua landing page.
          </h1>
          <p className="mt-6 max-w-[38ch] text-[1.08rem] leading-[1.65] text-[#efece6]/68">
            Básico, Essencial e Premium. Dez negócios de verdade. Abre os exemplos e marca o que combina com a sua marca.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#planos" className="bg-[#efece6] px-6 py-3.5 text-sm font-bold text-[#0c0c0c]">
              Ver os três planos
            </a>
            <a href={WA_HOME} target="_blank" rel="noopener" className="bg-[#25d366] px-6 py-3.5 text-sm font-bold text-[#062d14]">
              Falar no WhatsApp
            </a>
          </div>
          <dl className="mt-14 grid max-w-[560px] grid-cols-3 gap-6">
            {[
              ["R$ 297", "Básico"],
              ["R$ 597", "Essencial"],
              ["R$ 1.250", "Premium"],
            ].map(([price, name]) => (
              <div key={name}>
                <dt className={`${display.className} text-[clamp(1.4rem,3vw,2.1rem)] leading-none`}>{price}</dt>
                <dd className="mt-1 text-[13px] text-[#efece6]/50">{name}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      <div className="overflow-hidden border-y border-[#0c0c0c]/10 bg-[#0c0c0c] py-5">
        <div data-px="0.18" className="flex w-max gap-3 will-change-transform pr-[30vw]">
          {film.map((item) => (
            <div key={item.href} className="relative h-[148px] w-[220px] shrink-0 overflow-hidden md:h-[190px] md:w-[280px]">
              <Image src={item.src} alt={item.title} fill sizes="280px" className="object-cover" />
            </div>
          ))}
        </div>
      </div>

      <section id="planos" className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <p className="text-[13px] font-semibold text-[#5a5752]">Os planos</p>
        <h2 className={`${display.className} mt-3 max-w-[16ch] text-[clamp(2.4rem,6vw,5rem)] leading-[0.92] tracking-[-0.03em]`}>
          Mesma marca, profundidade diferente.
        </h2>
        <p className="mt-5 max-w-[46ch] text-[1.05rem] leading-relaxed text-[#5a5752]">
          Escolha pelo que a página precisa fazer, não pelo nicho. Qualquer exemplo vira a cara do seu negócio.
        </p>

        <div className="mt-16 grid gap-4 lg:grid-cols-3">
          <Plan
            display={display.className}
            name="Básico"
            price="R$ 297"
            lead="Para quem quer existir bem, rápido."
            items={["Campanha completa", "Serviços e prova", "SEO de verdade", "Um WhatsApp que converte"]}
            href="#basico"
          />
          <Plan
            display={display.className}
            name="Essencial"
            price="R$ 597"
            lead="Para quem precisa de ritmo e peso visual."
            items={["Até 8 seções", "Cena, galeria, cursor", "Transição e grain", "Página com cara de marca"]}
            href="#essencial"
            featured
          />
          <Plan
            display={display.className}
            name="Premium"
            price="R$ 1.250"
            lead="Para quem quer uma experiência, não um site."
            items={["Narrativa no scroll", "Pin, parallax, horizontal", "Cena feita para o negócio", "O nível mais alto da casa"]}
            href="#premium"
          />
        </div>
      </section>

      <section id="exemplos">
        <Band
          id="basico"
          display={display.className}
          title="Básico"
          price="R$ 297"
          items={basico}
          dark={false}
        />
        <Band
          id="essencial"
          display={display.className}
          title="Essencial"
          price="R$ 597"
          items={essencial}
          dark={false}
          tint
        />
        <Band
          id="premium"
          display={display.className}
          title="Premium"
          price="R$ 1.250"
          items={premium}
          dark
        />
      </section>

      <section className="overflow-hidden bg-[#efece6] py-16 md:py-24">
        <div className="mx-auto max-w-[1400px] px-5 md:px-10">
          <h2 className={`${display.className} max-w-[14ch] text-[clamp(2.2rem,5vw,4rem)] leading-[0.94]`}>
            Da clínica à vinícola.
          </h2>
        </div>
        <div data-px="-0.14" className="mt-10 flex w-max gap-3 will-change-transform pl-[8vw]">
          {[...film].reverse().map((item) => (
            <Link key={`strip-${item.href}`} href={item.href} className="relative block h-[200px] w-[160px] shrink-0 overflow-hidden md:h-[280px] md:w-[220px]">
              <Image src={item.src} alt={item.title} fill sizes="220px" className="object-cover" />
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <h2 className={`${display.className} text-[clamp(2.2rem,5vw,4rem)] leading-[0.94]`}>O que entra em cada plano</h2>
        <div className="mt-10 overflow-x-auto">
          <table className="w-full min-w-[640px] border-collapse text-left">
            <thead>
              <tr className="text-[13px] text-[#5a5752]">
                <th className="w-[22%] py-4 pr-4 font-medium">
                  <span className="sr-only">Item</span>
                </th>
                <th className="py-4 pr-4 font-semibold text-[#0c0c0c]">Básico</th>
                <th className="py-4 pr-4 font-semibold text-[#0c0c0c]">Essencial</th>
                <th className="py-4 font-semibold text-[#0c0c0c]">Premium</th>
              </tr>
            </thead>
            <tbody>
              {compare.map((row) => (
                <tr key={row[0]} className="border-t border-[#0c0c0c]/10">
                  {row.map((cell, index) => (
                    <td key={cell} className={`py-5 pr-4 align-top ${index === 0 ? "font-semibold" : "text-[#5a5752]"}`}>
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
              <tr className="border-t border-[#0c0c0c]/10">
                <td className="py-5 pr-4 font-semibold">Investimento</td>
                <td className={`${display.className} py-5 pr-4 text-2xl`}>R$ 297</td>
                <td className={`${display.className} py-5 pr-4 text-2xl`}>R$ 597</td>
                <td className={`${display.className} py-5 text-2xl`}>R$ 1.250</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      <section className="bg-white px-5 py-20 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-[1400px] gap-12 md:grid-cols-3">
          {steps.map(([title, text]) => (
            <article key={title}>
              <h3 className={`${display.className} text-[2rem] leading-none`}>{title}</h3>
              <p className="mt-4 max-w-[32ch] leading-relaxed text-[#5a5752]">{text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="duvidas" className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-28">
        <h2 className={`${display.className} text-[clamp(2.2rem,5vw,4rem)]`}>Antes de chamar</h2>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {questions.map((item) => (
            <article key={item.q}>
              <h3 className="text-lg font-bold">{item.q}</h3>
              <p className="mt-3 leading-relaxed text-[#5a5752]">{item.a}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0c0c0c] px-5 py-24 text-[#efece6] md:px-10 md:py-32">
        <div data-py="0.12" data-mouse="0.5" className="pointer-events-none absolute top-[-20%] right-[-8%] h-[80%] w-[46%] opacity-30 will-change-transform">
          <Image src="/thumbs/premium-hotel.jpg" alt="" fill sizes="46vw" className="object-cover" />
        </div>
        <div className="relative z-10 mx-auto max-w-[1400px]">
          <h2 className={`${display.className} max-w-[12ch] text-[clamp(2.8rem,8vw,6.4rem)] leading-[0.88] tracking-[-0.03em]`}>
            Abre os exemplos. Marca o que combina.
          </h2>
          <p className="mt-6 max-w-[40ch] text-[1.08rem] leading-relaxed text-[#efece6]/62">
            Diz o plano e o nicho de referência. A gente adapta. Resposta no mesmo dia útil.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href={WA_HOME} target="_blank" rel="noopener" className="bg-[#25d366] px-7 py-4 text-sm font-bold text-[#062d14]">
              Chamar no WhatsApp
            </a>
            <a href="#exemplos" className="border border-white/20 px-7 py-4 text-sm font-bold">
              Ver os exemplos
            </a>
          </div>
          <p className="mt-8 text-[15px] text-[#efece6]/45">(11) 99607-7349</p>
        </div>
      </section>

      <footer className="flex flex-wrap items-center justify-between gap-3 bg-[#0c0c0c] px-5 py-6 text-[13px] text-[#efece6]/45 md:px-10">
        <span>© 2026 ATTO</span>
        <a href={IG} target="_blank" rel="noopener" className="text-[#efece6]">
          @agencia.atto
        </a>
        <a href={ATTO} target="_blank" rel="noopener" className="text-[#efece6]">
          attoagencia.com.br
        </a>
      </footer>
    </div>
  );
}

function Plan({
  display,
  name,
  price,
  lead,
  items,
  href,
  featured = false,
}: {
  display: string;
  name: string;
  price: string;
  lead: string;
  items: string[];
  href: string;
  featured?: boolean;
}) {
  return (
    <article
      className={`flex h-full flex-col p-7 md:p-8 ${
        featured ? "bg-[#0c0c0c] text-[#efece6]" : "border border-[#0c0c0c]/10 bg-white"
      }`}
    >
      <p className={`text-[13px] font-semibold ${featured ? "text-[#efece6]/50" : "text-[#5a5752]"}`}>{name}</p>
      <p className={`${display} mt-3 text-[clamp(2.6rem,4vw,3.6rem)] leading-none`}>{price}</p>
      <p className={`mt-4 ${featured ? "text-[#efece6]/62" : "text-[#5a5752]"}`}>{lead}</p>
      <ul className="mt-8 grid gap-2.5 text-[15px]">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      <div className="mt-auto pt-10">
        <a
          href={href}
          className={`inline-flex px-5 py-3 text-sm font-bold ${
            featured ? "bg-[#efece6] text-[#0c0c0c]" : "bg-[#0c0c0c] text-[#efece6]"
          }`}
        >
          Ver exemplos
        </a>
      </div>
    </article>
  );
}

function Band({
  id,
  display,
  price,
  title,
  items,
  dark,
  tint = false,
}: {
  id: string;
  display: string;
  price: string;
  title: string;
  items: WorkItem[];
  dark: boolean;
  tint?: boolean;
}) {
  return (
    <article
      id={id}
      className={`px-5 py-20 md:px-10 md:py-24 ${
        dark ? "bg-[#0c0c0c] text-[#efece6]" : tint ? "bg-white text-[#0c0c0c]" : "bg-[#efece6] text-[#0c0c0c]"
      }`}
    >
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12">
          <h2 className={`${display} text-[clamp(3.4rem,10vw,7.2rem)] leading-[0.86] tracking-[-0.03em]`}>{title}</h2>
          <p className={`mt-3 text-[15px] font-semibold ${dark ? "text-[#efece6]/50" : "text-[#5a5752]"}`}>{price}</p>
        </div>
        <div className={`grid gap-4 ${items.length > 3 ? "md:grid-cols-2 xl:grid-cols-4" : "md:grid-cols-3"}`}>
          {items.map((item) => (
            <WorkCard key={item.href} item={item} dark={dark} display={display} />
          ))}
        </div>
      </div>
    </article>
  );
}

function WorkCard({ item, dark, display }: { item: WorkItem; dark: boolean; display: string }) {
  return (
    <Link href={item.href} className="group block">
      <div className="relative h-[220px] overflow-hidden md:h-[260px]">
        <Image
          src={item.src}
          alt={item.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <div className="pt-4">
        <p className={`text-[12px] font-semibold ${dark ? "text-[#efece6]/45" : "text-[#5a5752]"}`}>{item.chip}</p>
        <h3 className={`${display} mt-1 text-[1.7rem] leading-none`}>{item.title}</h3>
        <p className={`mt-2 text-sm leading-relaxed ${dark ? "text-[#efece6]/50" : "text-[#5a5752]"}`}>{item.text}</p>
      </div>
    </Link>
  );
}
