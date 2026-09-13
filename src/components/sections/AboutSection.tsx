"use client";

import { motion } from "motion/react";
import SectionTitle from "@/components/ui/SectionTitle";
import Image from "next/image";

const stats = [
  { label: "Years of experience", value: "7+" },
  { label: "Critical systems", value: "6" },
  { label: "CPIC", value: "Active" },
];

export default function AboutSection() {
  return (
    <section id="sobre-mi" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="About"
          subtitle="A bit more about me"
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
              I am <span className="text-primary">Jesner Melgara</span>, a Full Stack
              Software Engineer focused on <span className="text-primary">Web3, distributed systems</span>,
              event-driven architectures, and high-availability backend solutions.
              My experience spans React, Next.js, Angular, Ionic, Node.js, .NET / C#,
              PostgreSQL, Oracle DB, and deployments with Docker and Azure.
            </p>
            <p className="mb-4 leading-relaxed text-text-secondary">
              Active Collegiate Member of the <span className="text-primary">CPIC</span>
              (Colegio de Profesionales en Informática y Computación de Costa Rica),
              with a strong interest in critical systems, digital finance, payment
              infrastructure, process automation, and Web3 / Stellar ecosystems.
            </p>
            <p className="mb-6 leading-relaxed text-text-secondary">
              I have worked on complex enterprise platforms, intelligent OCR systems,
              and port logistics solutions, always with a focus on quality,
              traceability, security, and scalability.
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
