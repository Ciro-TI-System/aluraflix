import "./globals.css";

export const metadata = {
  title: "Aluraflix",
  description: "Plataforma de vídeos educacionais da Alura",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}
