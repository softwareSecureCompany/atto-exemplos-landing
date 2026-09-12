import Image from "next/image";
import { Libre_Baskerville, Figtree } from "next/font/google";
import { DemoBar } from "@/components/demo-bar";
import { DemoForm } from "@/components/demo-form";
import { DemoMenu } from "@/components/demo-menu";
import { WA } from "@/lib/site";

const display = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"], style: ["normal", "italic"] });
const sans = Figtree({ subsets: ["latin"], weight: ["400", "600", "700"] });

export const metadata = { title: "Unhas da Ju | Manicure em Osasco" };

const tabela = [
  ["Mão", "R$ 45"],
  ["Pé", "R$ 50"],
  ["Mão e pé", "R$ 85"],
  ["Esmalte em gel", "R$ 80"],
];

export default function UnhasDaJuPage() {
  return (
    <div className={`${sans.className} bg-[#f6efe6] text-[#2a1d18]`}>
      <DemoBar plan="Básico  R$ 297" />

      <header className="sticky top-0 z-30 bg-[#f6efe6]">
        <div className="relative mx-auto flex max-w-[1040px] items-center justify-between px-5 py-4">
          <a href="#inicio" className={`${display.className} text-[22px] italic`}>
            Unhas da Ju
          </a>
          <DemoMenu buttonClassName="text-[14px] font-bold">
            <a href="#inicio">Início</a>
            <a href="#sobre">O estúdio</a>
            <a href="#contato">Agenda</a>
            <a href={WA} target="_blank" rel="noopener" className="bg-[#2a1d18] px-3 py-2 text-[13px] font-bold text-[#f6efe6]">
              WhatsApp
            </a>
          </DemoMenu>
        </div>
      </header>

      <section id="inicio" className="mx-auto grid max-w-[1040px] items-end gap-10 px-5 pt-6 pb-16 md:grid-cols-[1.05fr_.95fr]">
        <div>
          <p className="text-[13px] font-bold text-[#7a5348]">Jardim Piratininga, Osasco</p>
          <h1 className={`${display.className} mt-3 text-[clamp(3rem,8vw,5.6rem)] leading-[0.92] font-normal`}>
            Unha feita com hora marcada.
          </h1>
          <p className="mt-5 max-w-[34ch] text-[#7a5348]">
            Sem fila. Sem pressa. Material esterilizado. Café quando você senta.
          </p>
          <div className="mt-7 flex flex-wrap gap-3">
            <a href="#contato" className="bg-[#2a1d18] px-5 py-3 text-sm font-bold text-[#f6efe6]">
              Quero agendar
            </a>
            <a href={WA} target="_blank" rel="noopener" className="bg-[#25d366] px-5 py-3 text-sm font-bold text-[#062d14]">
              Chamar no Zap
            </a>
          </div>
        </div>
        <Image
          src="/thumbs/basico-manicure.jpg"
          alt="Esmaltação"
          width={800}
          height={960}
          priority
          className="h-[420px] w-full object-cover object-[50%_20%]"
        />
      </section>

      <section id="sobre" className="border-y border-[#2a1d18]/10 bg-[#fffaf4]">
        <div className="mx-auto grid max-w-[1040px] gap-12 px-5 py-16 md:grid-cols-2">
          <div>
            <h2 className={`${display.className} text-[clamp(2rem,4vw,3rem)]`}>O estúdio da Ju</h2>
            <p className="mt-4 max-w-[40ch] text-[#7a5348]">
              Atendo em casa, terça a sábado. Só com horário. Se atrasar, me avisa que eu encaixo no próximo furo.
            </p>
          </div>
          <ul className="grid gap-0">
            {tabela.map(([nome, preco]) => (
              <li key={nome} className="flex items-baseline justify-between gap-4 border-b border-[#2a1d18]/15 py-3">
                <span className={`${display.className} text-2xl`}>{nome}</span>
                <span className="font-bold">{preco}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="contato" className="mx-auto grid max-w-[1040px] gap-10 px-5 py-16 md:grid-cols-2">
        <div>
          <h2 className={`${display.className} text-[clamp(2rem,4vw,3rem)]`}>Diz o dia e o serviço</h2>
          <p className="mt-4 max-w-[34ch] text-[#7a5348]">
            Jardim Piratininga, Osasco. Terça a sábado, hora marcada.
          </p>
          <a href={WA} target="_blank" rel="noopener" className="mt-8 inline-block bg-[#25d366] px-5 py-3 text-sm font-bold text-[#062d14]">
            Abrir WhatsApp
          </a>
        </div>
        <div className="bg-white p-6">
          <DemoForm submitLabel="Enviar pedido" buttonClassName="bg-[#2a1d18] px-5 py-3.5 font-bold text-[#f6efe6]">
            <input className="w-full border border-[#2a1d18]/15 px-3.5 py-3" placeholder="Seu nome" required />
            <input className="w-full border border-[#2a1d18]/15 px-3.5 py-3" placeholder="WhatsApp" required />
            <textarea className="min-h-24 w-full border border-[#2a1d18]/15 px-3.5 py-3" placeholder="Mão, pé ou os dois? Qual dia?" />
          </DemoForm>
        </div>
      </section>

      <footer className="px-5 py-5 text-[12px] text-[#7a5348]">Unhas da Ju  Osasco  Exemplo ATTO</footer>
    </div>
  );
}
