export const WA = "https://wa.me/5511996077349";
export const IG = "https://www.instagram.com/agencia.atto/";
export const ATTO = "https://www.attoagencia.com.br/";

export function waText(text: string) {
  return `${WA}?text=${encodeURIComponent(text)}`;
}

export const WA_HOME = waText("Oi ATTO, vi os exemplos de landing e quero falar dos planos.");
