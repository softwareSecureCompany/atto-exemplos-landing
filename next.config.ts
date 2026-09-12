import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      { source: "/dra-ana-beatriz.html", destination: "/basico/psicologia", permanent: false },
      { source: "/dra-ana-beatriz", destination: "/basico/psicologia", permanent: false },
      { source: "/essencial/psicologia", destination: "/basico/psicologia", permanent: true },
      { source: "/essencial/barbearia", destination: "/basico/barbearia", permanent: true },
      { source: "/essencial/odonto", destination: "/basico/odonto", permanent: true },
      { source: "/essencial/imobiliaria", destination: "/basico/imobiliaria", permanent: true },
      { source: "/premium/restaurante", destination: "/essencial/restaurante", permanent: true },
      { source: "/premium/arquitetura", destination: "/essencial/arquitetura", permanent: true },
      { source: "/premium/spa", destination: "/essencial/spa", permanent: true },
      { source: "/essencial-psicologia", destination: "/basico/psicologia", permanent: true },
      { source: "/essencial-barbearia", destination: "/basico/barbearia", permanent: true },
      { source: "/essencial-barbearia.html", destination: "/basico/barbearia", permanent: true },
      { source: "/essencial-odonto", destination: "/basico/odonto", permanent: true },
      { source: "/essencial-odonto.html", destination: "/basico/odonto", permanent: true },
      { source: "/essencial-imobiliaria", destination: "/basico/imobiliaria", permanent: true },
      { source: "/essencial-imobiliaria.html", destination: "/basico/imobiliaria", permanent: true },
      { source: "/premium-restaurante", destination: "/essencial/restaurante", permanent: true },
      { source: "/premium-restaurante.html", destination: "/essencial/restaurante", permanent: true },
      { source: "/premium-arquitetura", destination: "/essencial/arquitetura", permanent: true },
      { source: "/premium-arquitetura.html", destination: "/essencial/arquitetura", permanent: true },
      { source: "/premium-spa", destination: "/essencial/spa", permanent: true },
      { source: "/premium-spa.html", destination: "/essencial/spa", permanent: true },
      { source: "/basico-hidraulica", destination: "/basico/hidraulica", permanent: true },
      { source: "/basico-manicure", destination: "/basico/manicure", permanent: true },
      { source: "/basico-personal", destination: "/basico/personal", permanent: true },
    ];
  },
};

export default nextConfig;
