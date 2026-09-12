import Image from "next/image";
import { Oswald, Inter } from "next/font/google";
import { DemoBar } from "@/components/demo-bar";
import { DemoForm } from "@/components/demo-form";
import { DemoMenu } from "@/components/demo-menu";
import { WA } from "@/lib/site";

const display = Oswald({ subsets: ["latin"], weight: ["500", "600", "700"] });
const sans = Inter({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata = { title: "Treino com Marcelo | Personal na Zona Sul" };

export default function MarceloPage() {
  return (
    <div className={`${sans.className} bg-[#101010] text-white`}>
      <DemoBar plan="Básico  R$ 297" />

      <header className="sticky top-0 z-30 bg-[#101010]">
        <div className="relative mx-auto flex max-w-[1080px] items-center justify-between px-5 py-4">
          <a href="#inicio" className={`${display.className} text-[18px] tracking-[0.14em]`}>
            MARCELO FIT
          </a>
          <DemoMenu buttonClassName="text-[13px] font-bold text-[#c8ff00]">
            <a href="#inicio" className="text-[#bbb]">
              Início
            </a>
            <a href="#sobre" className="text-[#bbb]">
              Sobre
            </a>
            <a href="#contato" className="text-[#bbb]">
              Contato
            </a>
            <a href={WA} target="_blank" rel="noopener" className="bg-[#c8ff00] px-3 py-2 text-[13px] font-extrabold text-[#111]">
              WhatsApp
            </a>
          </DemoMenu>
        </div>
      </header>

      <section id="inicio" className="relative min-h-[86svh] overflow-hidden">
        <Image
          src="/thumbs/basico-personal.jpg"
          alt="Treino"
          fill
          priority
          sizes="100vw"
          className="object-cover brightness-[0.45]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-transparent to-[#101010]/30" />
        <div className="relative z-10 mx-auto flex min-h-[86svh] max-w-[1080px] flex-col justify-end px-5 pb-14">
          <p className="text-[12px] font-extrabold tracking-wider text-[#c8ff00] uppercase">Personal  Zona Sul  SP</p>
          <h1 className={`${display.className} mt-3 max-w-[10ch] text-[clamp(3.4rem,10vw,6.8rem)] leading-[0.88]`}>
            TREINO NO SEU PRÉDIO.
          </h1>
          <p className="mt-4 max-w-[36ch] text-[#cfcfcf]">
            Plano simples, carga que sobe, resultado em 8 semanas. Sem academia lotada.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#contato" className="bg-[#c8ff00] px-5 py-3 text-sm font-extrabold text-[#111]">
              Quero treinar
            </a>
            <a href={WA} target="_blank" rel="noopener" className="bg-[#25d366] px-5 py-3 text-sm font-extrabold text-[#062d14]">
              Chamar no Zap
            </a>
          </div>
        </div>
      </section>

      <section id="sobre" className="bg-[#f2f2f2] text-[#111]">
        <div className="mx-auto grid max-w-[1080px] gap-10 px-5 py-16 md:grid-cols-2 md:items-center">
          <div>
            <h2 className={`${display.className} text-[clamp(2.2rem,5vw,3.6rem)] leading-none`}>O MARCELO</h2>
            <p className="mt-5 max-w-[42ch] text-[#444]">
              CREF ativo. Iniciante, pós lesão ou quem quer emagrecer sem fila no rack. Levo o material ou uso a academia do condomínio.
            </p>
            <p className="mt-4 max-w-[42ch] text-[#444]">
              Manhã e fim de tarde: Moema, Campo Belo, Brooklin. Primeira avaliação sem compromisso. R$ 180 a sessão ou R$ 720 o mês.
            </p>
          </div>
          <Image
            src="/thumbs/basico-personal.jpg"
            alt="Personal"
            width={800}
            height={640}
            className="h-[340px] w-full object-cover"
          />
        </div>
      </section>

      <section id="contato" className="mx-auto grid max-w-[1080px] gap-10 px-5 py-16 md:grid-cols-2">
        <div>
          <h2 className={`${display.className} text-[clamp(2.2rem,5vw,3.4rem)] leading-none`}>COMEÇAR AGORA</h2>
          <p className="mt-4 max-w-[34ch] text-[#9a9a9a]">Conta o objetivo e o bairro. Eu volto com os horários.</p>
          <a href={WA} target="_blank" rel="noopener" className="mt-8 inline-block bg-[#c8ff00] px-5 py-3 text-sm font-extrabold text-[#111]">
            WhatsApp do Marcelo
          </a>
        </div>
        <div className="bg-[#1a1a1a] p-6">
          <DemoForm submitLabel="Enviar" buttonClassName="bg-[#c8ff00] px-5 py-3.5 font-extrabold text-[#111]">
            <input className="w-full bg-[#101010] px-3.5 py-3" placeholder="Nome" required />
            <input className="w-full bg-[#101010] px-3.5 py-3" placeholder="WhatsApp" required />
            <textarea className="min-h-24 w-full bg-[#101010] px-3.5 py-3" placeholder="Objetivo e bairro" />
          </DemoForm>
        </div>
      </section>

      <footer className="px-5 py-5 text-[12px] text-[#666]">Marcelo Fit  São Paulo  Exemplo ATTO</footer>
    </div>
  );
}
