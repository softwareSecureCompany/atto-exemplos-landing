import { Newsreader, Outfit } from "next/font/google";
import { DemoBar } from "@/components/demo-bar";
import { PremiumFx } from "@/components/premium-fx";
import { PremiumScroll } from "@/components/premium-scroll";
import { VinicolaStory } from "./story";

const display = Newsreader({ subsets: ["latin"], weight: ["400", "500", "600"], style: ["normal", "italic"] });
const sans = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = { title: "Quinta do Vento | Vinícola no Vale dos Vinhedos" };

export default function VinicolaPage() {
  return (
    <PremiumScroll>
      <PremiumFx accent="#c5a46a" />
      <DemoBar plan="Premium  R$ 1.250" />
      <VinicolaStory display={display.className} sans={sans.className} />
    </PremiumScroll>
  );
}
