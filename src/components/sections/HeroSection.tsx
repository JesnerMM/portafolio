"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { HiArrowDown, HiDownload } from "react-icons/hi";

const roles = [
  "Desarrollador Full Stack",
  "Ingeniero de Software",
  "Desarrollador Web",
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && text === currentRole) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setText(
        isDeleting
          ? currentRole.slice(0, text.length - 1)
          : currentRole.slice(0, text.length + 1)
      );
    }, speed);

    return () => clearTimeout(timeout);
  }, [text, isDeleting, roleIndex]);

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center px-4"
    >
      {/* Background gradient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="relative z-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-4 font-mono text-sm text-primary"
        >
          Hola, mi nombre es
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-4 text-5xl font-bold md:text-7xl"
        >
          Jesner Melgara
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-8 h-10 font-mono text-xl text-text-secondary md:text-2xl"
        >
          <span>{text}</span>
          <span className="ml-0.5 animate-pulse text-primary">|</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#proyectos"
            className="rounded-lg bg-primary px-6 py-3 font-medium text-background transition-all hover:bg-primary-dark hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
          >
            Ver Proyectos
          </a>
          <a
            href="/Jesner-Melgara-CV.pdf"
            download
            target="_blank"
            className="flex items-center gap-2 rounded-lg border border-primary px-6 py-3 font-medium text-primary transition-all hover:bg-primary/10"
          >
            <HiDownload />
            Descargar CV
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <HiArrowDown className="text-2xl text-text-secondary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
