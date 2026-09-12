export type WorkItem = {
  href: string;
  src: string;
  chip: string;
  title: string;
  text: string;
};

export const basico: WorkItem[] = [
  {
    href: "/basico/psicologia",
    src: "/thumbs/essencial-psicologia.jpg",
    chip: "Psicologia",
    title: "Dra. Ana Beatriz",
    text: "TCC, CRP e agenda. Consultório nos Jardins e online.",
  },
  {
    href: "/basico/barbearia",
    src: "/thumbs/essencial-barbearia.jpg",
    chip: "Barbearia",
    title: "Cavalera",
    text: "Corte, barba, hora marcada. Campanha completa.",
  },
  {
    href: "/basico/odonto",
    src: "/thumbs/essencial-odonto.jpg",
    chip: "Odontologia",
    title: "Sorriso & Cia",
    text: "Clínica de família com prova, tratamentos e agenda.",
  },
  {
    href: "/basico/imobiliaria",
    src: "/thumbs/essencial-imobiliaria.jpg",
    chip: "Imóveis",
    title: "Ninho Certo",
    text: "Compra e aluguel no ABC. Lead filtrado no WhatsApp.",
  },
];

export const essencial: WorkItem[] = [
  {
    href: "/essencial/restaurante",
    src: "/thumbs/premium-restaurante.jpg",
    chip: "Gastronomia",
    title: "Osteria Luce",
    text: "Sala, carta de temporada e reserva em Pinheiros.",
  },
  {
    href: "/essencial/arquitetura",
    src: "/thumbs/premium-arquitetura.jpg",
    chip: "Arquitetura",
    title: "Atelier Ângulo",
    text: "Obras, método e briefing. Luz e prazo que se cumpre.",
  },
  {
    href: "/essencial/spa",
    src: "/thumbs/premium-spa.jpg",
    chip: "Wellness",
    title: "Casa Aura",
    text: "Rituais, salas particulares e agenda. Higienópolis.",
  },
];

export const premium: WorkItem[] = [
  {
    href: "/premium/vinicola",
    src: "/thumbs/premium-vinicola.jpg",
    chip: "Vinícola",
    title: "Quinta do Vento",
    text: "Serra Gaúcha. A safra se conta no scroll.",
  },
  {
    href: "/premium/hotel",
    src: "/thumbs/premium-hotel.jpg",
    chip: "Hotel",
    title: "Casa Alta",
    text: "Onze suítes em Trancoso. A casa abre no gesto.",
  },
  {
    href: "/premium/joalheria",
    src: "/thumbs/premium-joia.jpg",
    chip: "Joalheria",
    title: "Ourivesaria Lume",
    text: "Ouro 18k, peça única. O lookbook anda de lado.",
  },
];

export const film = [...basico, ...essencial, ...premium];
