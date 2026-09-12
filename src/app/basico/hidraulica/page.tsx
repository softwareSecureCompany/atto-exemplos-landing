import Image from "next/image";
import { Barlow } from "next/font/google";
import { DemoBar } from "@/components/demo-bar";
import { DemoForm } from "@/components/demo-form";
import { DemoMenu } from "@/components/demo-menu";
import { WA } from "@/lib/site";

const display = Barlow({ subsets: ["latin"], weight: ["700", "800"] });

export const metadata = { title: "RapidFix | Encanador na Zona Leste" };

const bairros = ["Tatuapé", "Penha", "Carrão", "Vila Matilde", "São Miguel", "Itaquera"];

export default function RapidFixPage() {
  return (
    <div className={`${display.className} bg-[#111] text-[#111]`}>
      <DemoBar plan="Básico  R$ 297" />

      <header className="sticky top-0 z-30 border-b border-black/10 bg-[#ffe14a]">
        <div className="relative mx-auto flex max-w-[1100px] items-center justify-between px-5 py-3">
          <a href="#inicio" className="text-[22px] tracking-tight">
            RAPIDFIX
          </a>
          <DemoMenu buttonClassName="text-[15px]">
            <a href="#inicio" className="font-sans text-[15px] font-semibold">
              Início
            </a>
            <a href="#sobre" className="font-sans text-[15px] font-semibold">
              Sobre
            </a>
            <a href="#contato" className="font-sans text-[15px] font-semibold">
              Contato
            </a>
            <a href={WA} target="_blank" rel="noopener" className="bg-[#111] px-3 py-2 font-sans text-[13px] font-extrabold text-[#ffe14a]">
              WhatsApp
            </a>
          </DemoMenu>
        </div>
      </header>

      <section id="inicio" className="relative min-h-[88svh] overflow-hidden bg-[#111] text-white">
        <Image
          src="/thumbs/basico-hidraulica.jpg"
          alt="Torneira e encanamento"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[70%_40%] opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-[#111]/50 to-transparent" />
        <div className="relative z-10 mx-auto flex min-h-[88svh] max-w-[1100px] flex-col justify-end px-5 pt-24 pb-12">
          <p className="font-sans text-[13px] font-bold tracking-wide text-[#ffe14a] uppercase">Encanador  Zona Leste  SP</p>
          <h1 className="mt-3 max-w-[12ch] text-[clamp(3.4rem,12vw,7.4rem)] leading-[0.84] font-extrabold">
            VAZOU? A GENTE VAI HOJE.
          </h1>
          <p className="mt-5 max-w-[36ch] font-sans text-[1.05rem] leading-relaxed text-white/75">
            Orçamento no WhatsApp. Horário combinado. Piso seco quando a gente sai.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#contato" className="bg-[#ffe14a] px-6 py-3.5 font-sans text-sm font-extrabold text-[#111]">
              Pedir orçamento
            </a>
            <a href={WA} target="_blank" rel="noopener" className="bg-[#25d366] px-6 py-3.5 font-sans text-sm font-extrabold text-[#062d14]">
              Chamar no Zap
            </a>
          </div>
        </div>
      </section>

      <section id="sobre" className="bg-[#f3f1ea]">
        <div className="mx-auto grid max-w-[1100px] gap-12 px-5 py-16 md:grid-cols-[1fr_1.05fr] md:items-center md:py-20">
          <Image
            src="/thumbs/basico-hidraulica.jpg"
            alt="Serviço hidráulico"
            width={900}
            height={700}
            className="h-[340px] w-full object-cover md:h-[420px]"
          />
          <div>
            <h2 className="text-[clamp(2.2rem,5vw,3.6rem)] leading-[0.9]">QUEM CHEGA NA SUA CASA</h2>
            <p className="mt-5 max-w-[42ch] font-sans leading-relaxed text-[#333]">
              Carlos, encanador. Van com ferramenta, recibo na mão, 12 anos de rua. Vazamento, desentupimento, registro, caixa d’água.
            </p>
            <p className="mt-4 font-sans text-[#333]">90 dias de garantia no serviço. Atendo:</p>
            <ul className="mt-5 grid grid-cols-2 gap-2 font-sans text-sm font-bold">
              {bairros.map((bairro) => (
                <li key={bairro} className="bg-white px-3 py-2">
                  {bairro}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section id="contato" className="bg-[#ffe14a]">
        <div className="mx-auto grid max-w-[1100px] gap-10 px-5 py-16 md:grid-cols-2 md:py-20">
          <div>
            <h2 className="text-[clamp(2.2rem,5vw,3.6rem)] leading-[0.9]">FALA O QUE ACONTECEU</h2>
            <p className="mt-5 max-w-[34ch] font-sans text-[#111]/70">
              Zona Leste. Seg a sáb, 7h às 19h. Emergência? Manda foto no Zap que eu digo se dá para ir hoje.
            </p>
            <a href={WA} target="_blank" rel="noopener" className="mt-8 inline-block bg-[#111] px-6 py-3.5 font-sans text-sm font-extrabold text-[#ffe14a]">
              Abrir WhatsApp
            </a>
          </div>
          <div className="bg-[#111] p-6 text-white">
            <DemoForm
              submitLabel="Enviar pedido"
              buttonClassName="bg-[#ffe14a] px-5 py-3.5 font-sans font-extrabold text-[#111]"
            >
              <input className="w-full bg-[#1c1c1c] px-3.5 py-3 font-sans text-[#f3f1ea]" placeholder="Seu nome" required />
              <input className="w-full bg-[#1c1c1c] px-3.5 py-3 font-sans text-[#f3f1ea]" placeholder="WhatsApp" required />
              <textarea className="min-h-24 w-full bg-[#1c1c1c] px-3.5 py-3 font-sans text-[#f3f1ea]" placeholder="O que está acontecendo?" />
            </DemoForm>
          </div>
        </div>
      </section>

      <a
        href={WA}
        target="_blank"
        rel="noopener"
        className="fixed right-4 bottom-4 z-40 bg-[#25d366] px-4 py-3 font-sans text-sm font-extrabold text-[#062d14] md:hidden"
      >
        WhatsApp agora
      </a>

      <footer className="flex flex-wrap justify-between gap-3 bg-[#111] px-5 py-5 font-sans text-[12px] text-white/45">
        <span>RapidFix  Zona Leste  Exemplo ATTO</span>
        <a href="#inicio" className="text-white">
          Topo
        </a>
      </footer>
    </div>
  );
}
