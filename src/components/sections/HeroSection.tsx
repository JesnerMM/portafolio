"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { HiArrowDown, HiDownload } from "react-icons/hi";
import { useLanguage } from "@/components/providers/LanguageProvider";

const roles = [
  "Full Stack Software Engineer",
  "Event-Driven Systems Engineer",
  "Distributed Systems Developer",
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
      className="relative flex min-h-screen items-center justify-center px-4 pb-16 pt-28"
    >
      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 inline-flex items-center gap-3 border border-primary/40 bg-primary/5 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-primary"
            >
              <span className="h-2 w-2 bg-primary" />
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
              className="mb-4 text-5xl font-bold md:text-6xl xl:text-7xl"
            >
              Jesner Melgara
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mb-8 min-h-12 font-mono text-sm text-text-secondary md:text-base"
            >
              <span>{text}</span>
              <span className="ml-1 animate-pulse text-primary">_</span>
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
                className="border border-primary bg-primary px-6 py-3 font-mono text-sm font-semibold text-background transition-colors hover:bg-primary-dark"
              >
                {t.hero.ctaPrimary}
              </a>
              <a
                href="/Jesner-Melgara-CV.pdf"
                download
                target="_blank"
                className="flex items-center gap-2 border border-border px-6 py-3 font-mono text-sm text-text transition-colors hover:border-primary hover:text-primary"
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
            <div className="overflow-hidden border border-border bg-[#171915] shadow-[8px_8px_0_rgba(184,239,116,0.08)]">
              <div className="flex items-center justify-between border-b border-border bg-surface px-4 py-3">
                <div className="flex items-center gap-2 font-mono text-xs text-text-secondary">
                  <span className="text-primary">●</span>
                  <span>jesner@portfolio</span>
                </div>
                <span className="font-mono text-[10px] text-text-secondary">bash</span>
              </div>

              <div className="space-y-3 p-5 font-mono text-xs sm:p-6 sm:text-sm">
                <p className="text-primary"><span className="text-accent">~</span> $ whoami</p>
                <p className="pl-4 text-text">{t.hero.seniorProfile}</p>
                <p className="pt-2 text-primary"><span className="text-accent">~</span> $ cat focus.txt</p>
              </div>

              <div className="grid gap-px border-y border-border bg-border sm:grid-cols-2">
                {t.hero.focusItems.map((item) => (
                  <div
                    key={item}
                    className="bg-[#171915] px-4 py-3 font-mono text-xs text-text-secondary"
                  >
                    <span className="mr-2 text-primary">[+]</span>{item}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-3 gap-3">
                {t.hero.statValues.map((value, index) => (
                  <div
                    key={t.hero.statLabels[index]}
                    className="border-r border-border p-3 text-center last:border-r-0"
                  >
                    <div className="font-mono text-lg font-bold text-primary">{value}</div>
                    <div className="mt-1 text-[9px] uppercase text-text-secondary">
                      {t.hero.statLabels[index]}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-5">
                <p className="font-mono text-[10px] uppercase text-accent">{t.hero.selectedStack}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {t.hero.stackItems.map((item) => (
                    <span
                      key={item}
                      className="border border-border px-2 py-1 font-mono text-[10px] text-text-secondary"
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
          <HiArrowDown className="text-2xl text-primary" />
        </motion.div>
      </motion.div>
    </section>
  );
}
