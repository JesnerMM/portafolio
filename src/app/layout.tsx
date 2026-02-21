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
  title: "Jesner Melgara | Desarrollador Full Stack",
  description:
    "Portafolio profesional de Jesner Melgara - Desarrollador Full Stack especializado en React, Next.js, Angular, .NET y más.",
  keywords: [
    "Desarrollador Full Stack",
    "Next.js",
    "React",
    "Angular",
    ".NET",
    "TypeScript",
    "Costa Rica",
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
