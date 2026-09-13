"use client";

import Image from "next/image";
import { motion } from "motion/react";
import SectionTitle from "@/components/ui/SectionTitle";
import { HiAcademicCap } from "react-icons/hi";

export default function EducationSection() {
  return (
    <section id="educacion" className="px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <SectionTitle
          title="Education"
          subtitle="My academic background"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-[30px] border border-white/10 bg-slate-950/40 shadow-[0_20px_60px_rgba(15,23,42,0.38)]"
        >
          <div className="flex flex-col gap-8 p-8">
            <div className="flex flex-col items-center gap-6 md:flex-row">
              <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                <HiAcademicCap className="text-4xl text-primary" />
              </div>

              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-white">
                  University of Costa Rica
                </h3>

                <p className="mt-1 text-lg text-primary">
                  Business Informatics Bachelor's Degree
                </p>

                <p className="mt-2 text-sm uppercase tracking-[0.18em] text-text-secondary">
                  2021 - 2025
                </p>

                <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                  Comprehensive training in software development, database design,
                  requirements engineering, IT project management, and business
                  administration, with a focus on technology solutions for the
                  enterprise sector.
                </p>
              </div>
            </div>

            <div className="overflow-hidden rounded-[22px] border border-white/10 bg-slate-900/70">
              <Image
                src="/titulo.jpeg"
                alt="Titulo universitario"
                width={1200}
                height={800}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}