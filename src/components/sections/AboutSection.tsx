"use client";

import { motion } from "motion/react";
import SectionTitle from "@/components/ui/SectionTitle";
import { HiUser } from "react-icons/hi";

const stats = [
  { label: "Proyectos", value: "6+" },
  { label: "Sistemas Empresariales", value: "3" },
  { label: "UCR", value: "2025" },
];

export default function AboutSection() {
  return (
    <section id="sobre-mi" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Sobre Mi"
          subtitle="Conociendome un poco mas"
        />

        <div className="grid items-center gap-12 md:grid-cols-2">
          {/* Photo placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="h-72 w-72 overflow-hidden rounded-2xl border-2 border-border bg-surface-light">
                <div className="flex h-full items-center justify-center text-text-secondary">
                  <div className="text-center">
                    <HiUser className="mx-auto mb-2 text-6xl text-primary/30" />
                    <p className="text-sm">Foto de perfil</p>
                  </div>
                </div>
              </div>
              {/* Decorative border */}
              <div className="absolute -bottom-3 -right-3 -z-10 h-72 w-72 rounded-2xl border-2 border-primary/30" />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <p className="mb-4 leading-relaxed text-text-secondary">
              Soy un <span className="text-primary">Desarrollador Full Stack</span> graduado
              de la Universidad de Costa Rica, con experiencia en el desarrollo de
              sistemas empresariales usando tecnologias modernas como React, Next.js,
              Angular, Node.js y .NET.
            </p>
            <p className="mb-6 leading-relaxed text-text-secondary">
              Mi enfoque se centra en crear soluciones eficientes, escalables y con
              excelente experiencia de usuario. He trabajado en proyectos que van desde
              sistemas de facturacion electronica hasta plataformas de gestion documental
              con OCR, siempre buscando la excelencia tecnica y la innovacion.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="rounded-lg border border-border bg-surface p-4 text-center"
                >
                  <div className="text-2xl font-bold text-primary">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-text-secondary">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
