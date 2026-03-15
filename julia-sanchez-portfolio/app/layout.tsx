import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Julia Sánchez | Directora de Marketing B2B SaaS",
  description: "Construyo motores de crecimiento desde cero en mercados fragmentados. 9+ años de experiencia en B2B SaaS. Teamtailor, TheFork, WeRoad, Tiller Systems.",
  keywords: ["CMO", "Marketing Director", "B2B SaaS", "Growth Marketing", "Teamtailor", "España", "Italia"],
  authors: [{ name: "Julia Sánchez" }],
  openGraph: {
    title: "Julia Sánchez | Directora de Marketing B2B SaaS",
    description: "Construyo motores de crecimiento desde cero en mercados fragmentados.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased bg-[#0A0A0B] text-[#F5F5F5]`}
      >
        {children}
      </body>
    </html>
  );
}
