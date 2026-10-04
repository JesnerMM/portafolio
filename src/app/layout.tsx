import type { Metadata } from "next";
import { IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Jesner Melgara | Ingeniero de Software Full Stack",
  description:
    "Portafolio profesional de Jesner Melgara, ingeniero de software Full Stack especializado en sistemas distribuidos, arquitecturas orientadas a eventos y soluciones empresariales.",
  keywords: [
    "Full Stack Software Engineer",
    "Distributed Systems",
    "Next.js",
    "React",
    "Angular",
    ".NET",
    "TypeScript",
    "Selenium",
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
    <html lang="en" className="dark">
      <body className={`${spaceGrotesk.variable} ${ibmPlexMono.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
