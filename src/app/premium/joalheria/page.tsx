import { Cinzel, Figtree } from "next/font/google";
import { DemoBar } from "@/components/demo-bar";
import { PremiumFx } from "@/components/premium-fx";
import { PremiumScroll } from "@/components/premium-scroll";
import { JoalheriaStory } from "./story";

const display = Cinzel({ subsets: ["latin"], weight: ["400", "600"] });
const sans = Figtree({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = { title: "Ourivesaria Lume | Joalheria nos Jardins" };

export default function JoalheriaPage() {
  return (
    <PremiumScroll>
      <PremiumFx accent="#d4b483" />
      <DemoBar plan="Premium  R$ 1.250" />
      <JoalheriaStory display={display.className} sans={sans.className} />
    </PremiumScroll>
  );
}
