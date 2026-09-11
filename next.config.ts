import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      { source: "/essencial-barbearia", destination: "/essencial/barbearia", permanent: true },
      { source: "/essencial-barbearia.html", destination: "/essencial/barbearia", permanent: true },
      { source: "/essencial-odonto", destination: "/essencial/odonto", permanent: true },
      { source: "/essencial-odonto.html", destination: "/essencial/odonto", permanent: true },
      { source: "/essencial-imobiliaria", destination: "/essencial/imobiliaria", permanent: true },
      { source: "/essencial-imobiliaria.html", destination: "/essencial/imobiliaria", permanent: true },
      { source: "/premium-restaurante", destination: "/premium/restaurante", permanent: true },
      { source: "/premium-restaurante.html", destination: "/premium/restaurante", permanent: true },
      { source: "/premium-arquitetura", destination: "/premium/arquitetura", permanent: true },
      { source: "/premium-arquitetura.html", destination: "/premium/arquitetura", permanent: true },
      { source: "/premium-spa", destination: "/premium/spa", permanent: true },
      { source: "/premium-spa.html", destination: "/premium/spa", permanent: true },
    ];
  },
};

export default nextConfig;
