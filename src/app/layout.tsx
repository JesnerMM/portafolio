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
    "Professional portfolio of Jesner Melgara - Full Stack Software Engineer focused on Web3, distributed systems, event-driven architectures, fintech integrations, and enterprise software engineering.",
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
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
