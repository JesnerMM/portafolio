"use client";

import { motion } from "motion/react";
import { useLanguage } from "@/components/providers/LanguageProvider";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-12 text-center"
    >
      <div className="mb-4 inline-flex items-center gap-2 border border-primary/30 bg-primary/5 px-3 py-1 font-mono text-[10px] uppercase text-primary">
        <span className="text-accent">//</span>
        {t.portfolioLabel}
      </div>
      <h2 className="text-3xl font-bold text-text md:text-5xl">
        {title}
      </h2>
      <div className="mx-auto mt-4 h-px w-20 bg-primary" />
      {subtitle && (
        <p className="mx-auto mt-5 max-w-2xl text-base text-text-secondary md:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
