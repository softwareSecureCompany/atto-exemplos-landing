import Image from "next/image";
import { Newsreader, Outfit } from "next/font/google";
import { DemoBar } from "@/components/demo-bar";
import { DemoForm } from "@/components/demo-form";
import { Faq } from "@/components/faq";
import { Reveal } from "@/components/reveal";
import { ScrollProgress } from "@/components/scroll-progress";
import { WA } from "@/lib/site";

const display = Newsreader({ subsets: ["latin"], weight: ["500", "600"] });
const sans = Outfit({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata = { title: "Ninho Certo | Compra e aluguel no ABC" };

const listings = [
  { title: "Apto · 2 dorms · São Caetano", meta: "68 m² · R$ 2.400", tag: "Aluguel" },
  { title: "Casa · 3 dorms · Santo André", meta: "142 m² · R$ 780 mil", tag: "Venda" },
  { title: "Studio · metrô · São Bernardo", meta: "34 m² · R$ 1.850", tag: "Aluguel" },
];

export default function NinhoPage() {
  return (
    <div className={`${sans.className} bg-[#eef2f6] text-[#1a2744]`}>
      <ScrollProgress className="bg-[#e07a3d]" />
      <DemoBar plan="Básico  R$ 297" />
      <header className="sticky top-0 z-30 flex items-center justify-between border-b border-[#c9d2de] bg-[#eef2f6]/85 px-6 py-4 backdrop-blur-lg">
        <a href="#inicio" className="text-lg font-extrabold">
          Ninho Certo
        </a>
        <nav className="hidden gap-6 text-[12px] font-semibold tracking-wider uppercase md:flex">
          <a href="#metodo">Método</a>
          <a href="#lista">Shortlist</a>
          <a href="#contato">Contato</a>
        </nav>
        <a href={WA} target="_blank" rel="noopener" className="rounded-[10px] bg-[#25d366] px-3.5 py-2 text-xs font-extrabold text-[#062d14]">
          WhatsApp
        </a>
      </header>

      <section id="inicio" className="mx-auto grid max-w-[1180px] items-end gap-10 px-6 pt-16 pb-12 md:grid-cols-[1.1fr_.9fr]">
        <div>
          <p className="mb-4 text-[11px] tracking-[0.22em] text-[#5a6576] uppercase">ABC Paulista</p>
          <h1 className={`${display.className} text-[clamp(3.2rem,8vw,6.4rem)] leading-[0.9] font-medium`}>
            Imóvel certo. Sem fim de semana perdido.
          </h1>
          <p className="mt-5 max-w-[38ch] text-[#5a6576]">
            Filtramos o que cabe no orçamento e no bairro. Você visita só o que faz sentido — sem 40 links no Zap.
          </p>
          <a href="#contato" className="mt-7 inline-block rounded-[10px] bg-[#e07a3d] px-6 py-3.5 text-sm font-extrabold text-white">
            Quero um imóvel
          </a>
        </div>
        <Image
          src="/thumbs/essencial-imobiliaria.jpg"
          alt="Chaves"
          width={800}
          height={640}
          priority
          className="h-[380px] w-full rounded-[12px] object-cover"
        />
      </section>

      <section id="metodo" className="mx-auto max-w-[1180px] px-6 py-16">
        <Reveal>
          <h2 className={`${display.className} text-[clamp(2.2rem,4vw,3.4rem)]`}>Três passos. Sem 40 links.</h2>
        </Reveal>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {[
            ["01", "Briefing", "Orçamento, bairro e o que é inegociável. Quinze minutos."],
            ["02", "Shortlist", "Até 5 opções reais, com o ponto negativo dito na lata."],
            ["03", "Visita", "Agendamos juntos. Se fechar, tocamos contrato e chaves."],
          ].map(([n, t, d]) => (
            <Reveal key={n}>
              <article className="border-t-2 border-[#e07a3d] pt-5">
                <span className="text-sm font-bold text-[#e07a3d]">{n}</span>
                <h3 className={`${display.className} mt-2 text-3xl`}>{t}</h3>
                <p className="mt-2 text-[#5a6576]">{d}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="lista" className="bg-white py-16">
        <div className="mx-auto max-w-[1180px] px-6">
          <h2 className={`${display.className} mb-8 text-[clamp(2.2rem,4vw,3.4rem)]`}>Exemplo de shortlist</h2>
          <div className="grid gap-4">
            {listings.map((item) => (
              <Reveal key={item.title}>
                <article className="grid items-center gap-4 rounded-[12px] border border-[#c9d2de] p-5 md:grid-cols-[1fr_auto_auto]">
                  <div>
                    <h3 className={`${display.className} text-2xl`}>{item.title}</h3>
                    <p className="text-[#5a6576]">{item.meta}</p>
                  </div>
                  <span className="text-[11px] tracking-widest uppercase">{item.tag}</span>
                  <span className="font-bold text-[#e07a3d]">Ver no Zap</span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[58vh] overflow-hidden">
        <Image src="/thumbs/essencial-imobiliaria.jpg" alt="" fill className="object-cover brightness-[0.35]" sizes="100vw" />
        <q className={`${display.className} relative z-10 grid min-h-[58vh] place-items-center px-6 text-center text-[clamp(2rem,5vw,3.6rem)] text-white italic`}>
          “Achei apto em 9 dias. Sem 40 links.”
        </q>
      </section>

      <section id="contato" className="mx-auto grid max-w-[1180px] gap-5 px-6 py-20 md:grid-cols-2">
        <div className="flex min-h-[400px] flex-col justify-between bg-[#1a2744] p-10 text-[#eef2f6]">
          <div>
            <h2 className={`${display.className} text-4xl`}>Conte o que procura.</h2>
            <p className="mt-4 max-w-[36ch] text-white/65">Av. Goiás, 890 · São Caetano. Seg–Sáb 9h–18h.</p>
          </div>
          <a href={WA} target="_blank" rel="noopener" className="w-fit rounded-[10px] bg-[#25d366] px-5 py-3 text-sm font-extrabold text-[#062d14]">
            WhatsApp da equipe
          </a>
        </div>
        <div className="border border-[#c9d2de] bg-white p-8">
          <DemoForm submitLabel="Enviar" buttonClassName="rounded-[10px] bg-[#e07a3d] px-5 py-3.5 font-extrabold text-white">
            <input className="w-full rounded-[10px] border border-[#c9d2de] px-3.5 py-3" placeholder="Nome" required />
            <input className="w-full rounded-[10px] border border-[#c9d2de] px-3.5 py-3" placeholder="WhatsApp" required />
            <select className="w-full rounded-[10px] border border-[#c9d2de] px-3.5 py-3">
              <option>Quero comprar</option>
              <option>Quero alugar</option>
              <option>Quero anunciar</option>
            </select>
            <textarea className="min-h-24 w-full rounded-[10px] border border-[#c9d2de] px-3.5 py-3" placeholder="Bairro, valor e o que não pode faltar" />
          </DemoForm>
          <div className="mt-6">
            <Faq
              items={[
                { q: "Cobram do comprador?", a: "Na compra, a comissão sai do anunciante." },
                { q: "Fora do ABC?", a: "Foco no ABC. Capital só se o briefing pedir." },
              ]}
            />
          </div>
        </div>
      </section>
      <footer className="px-6 py-6 text-[11px] tracking-widest text-[#5a6576] uppercase">Ninho Certo · Essencial</footer>
    </div>
  );
}
