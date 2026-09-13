"use client";

import { motion } from "motion/react";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="mb-12 text-center"
    >
      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-primary">
        <span className="h-1.5 w-1.5 rounded-full bg-primary" />
        Portfolio
      </div>
      <h2 className="text-3xl font-black tracking-[-0.04em] text-white md:text-5xl">
        {title}
      </h2>
      <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-primary via-cyan-300 to-accent" />
      {subtitle && (
        <p className="mx-auto mt-5 max-w-2xl text-base text-text-secondary md:text-lg">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
