import { Fraunces, Figtree } from "next/font/google";
import { DemoBar } from "@/components/demo-bar";
import { PremiumFx } from "@/components/premium-fx";
import { PremiumScroll } from "@/components/premium-scroll";
import { HotelStory } from "./story";

const display = Fraunces({ subsets: ["latin"], weight: ["500", "600"], style: ["normal", "italic"] });
const sans = Figtree({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = { title: "Casa Alta | Onze suítes em Trancoso" };

export default function HotelPage() {
  return (
    <PremiumScroll>
      <PremiumFx accent="#ece6dc" />
      <DemoBar plan="Premium  R$ 1.250" />
      <HotelStory display={display.className} sans={sans.className} />
    </PremiumScroll>
  );
}
