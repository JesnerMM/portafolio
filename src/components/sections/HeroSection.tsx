"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { HiArrowDown, HiDownload } from "react-icons/hi";
import { useLanguage } from "@/components/providers/LanguageProvider";

const roles = [
  "Full Stack Software Engineer | Web3 & Distributed Systems",
  "Software Engineer • Event-Driven Architectures",
  "Web3 & Distributed Systems",
];

export default function HeroSection() {
  const { t } = useLanguage();
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
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute -right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(6,182,212,0.12),_transparent_50%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-3 rounded-full border border-primary/30 bg-primary/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.22em] text-primary"
            >
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.7)]" />
              {t.hero.badge}
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-4 font-mono text-sm text-primary"
            >
              {t.hero.hello}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-4 text-5xl font-black tracking-tight md:text-6xl xl:text-7xl"
            >
              Jesner Melgara
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-8 min-h-12 font-mono text-lg text-text-secondary md:text-xl"
            >
              <span>{text}</span>
              <span className="ml-0.5 animate-pulse text-primary">|</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
              className="mb-8 max-w-2xl text-base text-text-secondary md:text-lg"
            >
              {t.hero.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-col items-center justify-start gap-4 sm:flex-row"
            >
              <a
                href="#proyectos"
                className="rounded-lg bg-primary px-6 py-3 font-medium text-background transition-all hover:bg-primary-dark hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              >
                {t.hero.ctaPrimary}
              </a>
              <a
                href="/Jesner-Melgara-CV.pdf"
                download
                target="_blank"
                className="flex items-center gap-2 rounded-lg border border-primary/40 bg-primary/5 px-6 py-3 font-medium text-primary transition-all hover:bg-primary/10"
              >
                <HiDownload />
                {t.hero.ctaSecondary}
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="relative"
          >
            <div className="rounded-3xl border border-border/80 bg-surface/80 p-6 shadow-[0_30px_80px_rgba(15,23,42,0.45)] backdrop-blur-sm">
              <div className="mb-6 flex items-center justify-between">
                <p className="text-xs font-medium uppercase tracking-[0.2em] text-text-secondary">
                  {t.hero.coreFocus}
                </p>
                <span className="rounded-full border border-primary/30 bg-primary/10 px-2.5 py-1 text-[10px] font-medium text-primary">
                  {t.hero.seniorProfile}
                </span>
              </div>

              <div className="mb-6 grid gap-3 sm:grid-cols-2">
                {t.hero.focusItems.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-border bg-background/60 px-3 py-3 text-sm text-text-secondary"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3">
                {t.hero.statValues.map((value, index) => (
                  <div
                    key={t.hero.statLabels[index]}
                    className="rounded-2xl border border-border bg-background/50 p-3 text-center"
                  >
                    <div className="text-xl font-bold text-primary">{value}</div>
                    <div className="mt-1 text-[11px] uppercase tracking-[0.12em] text-text-secondary">
                      {t.hero.statLabels[index]}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-primary/20 bg-primary/5 p-4">
                <p className="text-xs uppercase tracking-[0.2em] text-primary">{t.hero.selectedStack}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {t.hero.stackItems.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-primary/20 bg-background/50 px-2.5 py-1 text-xs text-text-secondary"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

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
