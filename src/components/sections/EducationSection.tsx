"use client";

import { motion } from "motion/react";
import SectionTitle from "@/components/ui/SectionTitle";
import { HiAcademicCap } from "react-icons/hi";

export default function EducationSection() {
  return (
    <section id="educacion" className="px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <SectionTitle
          title="Educacion"
          subtitle="Mi formacion academica"
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="overflow-hidden rounded-xl border border-border bg-surface"
        >
          <div className="flex flex-col items-center gap-6 p-8 md:flex-row">
            {/* University icon */}
            <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl border border-border bg-surface-light">
              <HiAcademicCap className="text-4xl text-primary" />
            </div>

            {/* Details */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold">
                Universidad de Costa Rica
              </h3>
              <p className="mt-1 text-lg text-primary">
                Bachillerato en Informatica Empresarial
              </p>
              <p className="mt-2 text-sm text-text-secondary">
                2021 - 2025
              </p>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                Formacion integral en desarrollo de software, bases de datos,
                ingenieria de requisitos, gestion de proyectos de TI y
                administracion de empresas, con enfoque en soluciones
                tecnologicas para el sector empresarial.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
