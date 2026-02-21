"use client";

import { useState, FormEvent } from "react";
import { motion } from "motion/react";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiPaperAirplane,
} from "react-icons/hi";
import { SiLinkedin } from "react-icons/si";

const contactInfo = [
  {
    icon: HiMail,
    label: "Email",
    value: "jesner.melgara@email.com",
    href: "mailto:jesner.melgara@email.com",
  },
  {
    icon: HiPhone,
    label: "Telefono",
    value: "+506 0000-0000",
    href: "tel:+50600000000",
  },
  {
    icon: HiLocationMarker,
    label: "Ubicacion",
    value: "San Jose, Costa Rica",
  },
  {
    icon: SiLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/jesnermelgara",
    href: "https://linkedin.com/in/jesnermelgara",
  },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contacto" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Contacto"
          subtitle="Hablemos sobre tu proyecto"
        />

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-xl font-semibold">
              Informacion de Contacto
            </h3>
            <div className="space-y-4">
              {contactInfo.map((item) => {
                const Icon = item.icon;
                const content = (
                  <div className="flex items-center gap-4 rounded-lg border border-border bg-surface p-4 transition-colors hover:border-primary/30">
                    <div className="rounded-lg bg-primary/10 p-3">
                      <Icon className="text-xl text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-text-secondary">
                        {item.label}
                      </p>
                      <p className="text-sm font-medium">{item.value}</p>
                    </div>
                  </div>
                );
                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={
                      item.href.startsWith("http") ? "_blank" : undefined
                    }
                    rel="noopener noreferrer"
                    className="block"
                  >
                    {content}
                  </a>
                ) : (
                  <div key={item.label}>{content}</div>
                );
              })}
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="mb-6 text-xl font-semibold">
              Enviar Mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1 block text-sm text-text-secondary"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition-colors focus:border-primary"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-1 block text-sm text-text-secondary"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition-colors focus:border-primary"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-1 block text-sm text-text-secondary"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full resize-none rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition-colors focus:border-primary"
                  placeholder="Cuentame sobre tu proyecto..."
                />
              </div>
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-background transition-all hover:bg-primary-dark hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
              >
                <HiPaperAirplane className="rotate-90" />
                {submitted ? "Mensaje Enviado!" : "Enviar Mensaje"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
