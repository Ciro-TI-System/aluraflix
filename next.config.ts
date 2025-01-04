import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      "blog.rocketseat.com.br",
      "via.placeholder.com",
      "img.youtube.com",
      "www.youtube.com",
      "www.figma.com",
      "www.alura.com.br",
    ], // Adicione aqui os domínios de onde você deseja permitir o carregamento de imagens
  },
};

export default nextConfig;
