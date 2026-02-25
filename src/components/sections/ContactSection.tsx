"use client";

import { useRef, useState, FormEvent } from "react";
import { motion } from "motion/react";
import emailjs from "@emailjs/browser";
import SectionTitle from "@/components/ui/SectionTitle";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiPaperAirplane,
  HiCheckCircle,
  HiXCircle,
} from "react-icons/hi";
import { SiLinkedin } from "react-icons/si";

const contactInfo = [
  {
    icon: HiMail,
    label: "Email",
    value: "eliecermelgara1680@gmail.com",
    href: "mailto:eliecermelgara1680@gmail.com",
  },
  {
    icon: HiPhone,
    label: "Telefono",
    value: "+506 8752-1680",
    href: "tel:+50687521680",
  },
  {
    icon: HiLocationMarker,
    label: "Ubicacion",
    value: "Juan Viñas, Cartago, Costa Rica",
  },
  {
    icon: SiLinkedin,
    label: "LinkedIn",
    value: "linkedin.com/in/jesner-eliecer",
    href: "https://www.linkedin.com/in/jesner-eliecer-melgara-murillo-0b4506255/",
  },
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactSection() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("loading");

    try {
      const form = formRef.current;
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        {
          from_name: (form.elements.namedItem("from_name") as HTMLInputElement).value,
          reply_to: (form.elements.namedItem("reply_to") as HTMLInputElement).value,
          message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
        },
        { publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY! }
      );
      setStatus("success");
      formRef.current.reset();
    } catch (err) {
      console.error("EmailJS error:", JSON.stringify(err), err);
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 4000);
    }
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
            <h3 className="mb-6 text-xl font-semibold">Enviar Mensaje</h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="from_name"
                  className="mb-1 block text-sm text-text-secondary"
                >
                  Nombre
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  required
                  disabled={status === "loading"}
                  className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition-colors focus:border-primary disabled:opacity-50"
                  placeholder="Tu nombre"
                />
              </div>
              <div>
                <label
                  htmlFor="reply_to"
                  className="mb-1 block text-sm text-text-secondary"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="reply_to"
                  name="reply_to"
                  required
                  disabled={status === "loading"}
                  className="w-full rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition-colors focus:border-primary disabled:opacity-50"
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
                  name="message"
                  required
                  rows={5}
                  disabled={status === "loading"}
                  className="w-full resize-none rounded-lg border border-border bg-surface px-4 py-3 text-sm text-text outline-none transition-colors focus:border-primary disabled:opacity-50"
                  placeholder="Cuentame sobre tu proyecto..."
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-background transition-all hover:bg-primary-dark hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === "loading" ? (
                  <>
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Enviando...
                  </>
                ) : (
                  <>
                    <HiPaperAirplane className="rotate-90" />
                    Enviar Mensaje
                  </>
                )}
              </button>

              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-lg border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-400"
                >
                  <HiCheckCircle className="text-lg" />
                  Mensaje enviado correctamente. Te responderé pronto.
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-400"
                >
                  <HiXCircle className="text-lg" />
                  Ocurrió un error al enviar. Intenta de nuevo o escríbeme directamente.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
