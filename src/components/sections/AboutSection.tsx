"use client";

import { motion } from "motion/react";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";

const stats = [
  { label: "Años de experiencia", value: "7+" },
  { label: "Sistemas críticos", value: "6" },
  { label: "CPIC", value: "Activo" },
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
              <div className="h-72 w-72 overflow-hidden rounded-2xl border-2 border-border">
                <Image
                  src="/foto-perfil.jpeg"
                  alt="Jesner Melgara"
                  width={288}
                  height={288}
                  className="h-full w-full object-cover object-top"
                  priority
                />
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
            <div className="mb-6 flex flex-wrap gap-2">
              {[
                "Event-driven architectures",
                "Distributed systems",
                "Web3 / Stellar",
                "Fintech integrations",
              ].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            <p className="mb-4 leading-relaxed text-text-secondary">
              Soy <span className="text-primary">Jesner Melgara</span>, Full Stack
              Software Engineer con enfoque en <span className="text-primary">Web3, distributed systems</span>,
              arquitecturas basadas en eventos y soluciones backend de alta disponibilidad.
              Mi experiencia abarca React, Next.js, Angular, Ionic, Node.js, .NET / C#,
              PostgreSQL, Oracle DB y despliegues con Docker y Azure.
            </p>
            <p className="mb-4 leading-relaxed text-text-secondary">
              Miembro Colegiado Activo del <span className="text-primary">CPIC</span>
              (Colegio de Profesionales en Informática y Computación de Costa Rica),
              con especial interés en sistemas críticos, finanzas digitales, pagos,
              automatización de procesos y ecosistemas Web3 / Stellar.
            </p>
            <p className="mb-6 leading-relaxed text-text-secondary">
              He trabajado en proyectos que van desde plataformas empresariales complejas
              y OCR inteligente hasta soluciones de gestión portuaria, siempre con foco en
              calidad, trazabilidad, seguridad y escalabilidad.
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
