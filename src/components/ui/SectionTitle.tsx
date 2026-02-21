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
      <h2 className="text-3xl font-bold md:text-4xl">
        <span className="text-primary">&lt;</span>
        {title}
        <span className="text-primary">/&gt;</span>
      </h2>
      <div className="mx-auto mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-primary to-accent" />
      {subtitle && (
        <p className="mt-4 text-text-secondary">{subtitle}</p>
      )}
    </motion.div>
  );
}
