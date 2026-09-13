import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Jesner Melgara | Full Stack Software Engineer | Web3 & Distributed Systems",
  description:
    "Portafolio profesional de Jesner Melgara - Full Stack Software Engineer especializado en Web3, distributed systems, .NET, Angular, Next.js, arquitectura basada en eventos y soluciones fintech.",
  keywords: [
    "Full Stack Software Engineer",
    "Web3",
    "Stellar",
    "Distributed Systems",
    "Next.js",
    "React",
    "Angular",
    ".NET",
    "TypeScript",
    "Costa Rica",
    "CPIC",
  ],
  authors: [{ name: "Jesner Melgara" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
