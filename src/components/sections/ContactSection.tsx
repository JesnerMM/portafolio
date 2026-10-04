"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";
import { SiLinkedin } from "react-icons/si";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function ContactSection() {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: HiMail,
      label: t.contact.labels.email,
      value: "eliecermelgara1680@gmail.com",
      href: "mailto:eliecermelgara1680@gmail.com",
    },
    {
      icon: HiPhone,
      label: t.contact.labels.phone,
      value: "+506 8752-1680",
      href: "tel:+50687521680",
    },
    {
      icon: HiLocationMarker,
      label: t.contact.labels.location,
      value: "Cartago, Costa Rica",
    },
    {
      icon: SiLinkedin,
      label: t.contact.labels.linkedin,
      value: "linkedin.com/in/jesner-eliecer",
      href: "https://www.linkedin.com/in/jesner-eliecer-melgara-murillo-0b4506255/",
    },
  ];

  return (
    <section id="contacto" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title={t.contact.title}
          subtitle={t.contact.subtitle}
        />

        <div
          className="mx-auto max-w-4xl overflow-hidden border border-border bg-surface"
        >
          <div className="flex items-center justify-between border-b border-border bg-surface-light px-4 py-3">
            <p className="flex items-center gap-2 font-mono text-xs text-text-secondary">
              <span className="text-primary">●</span>
              jesner@portfolio:~
            </p>
            <span className="font-mono text-[10px] uppercase text-accent">
              {t.contact.infoTitle}
            </span>
          </div>

          <div className="grid gap-px bg-border sm:grid-cols-2">
            {contactInfo.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex min-h-24 items-center gap-4 bg-background p-5 transition-colors hover:bg-surface-light">
                  <div className="border border-primary/20 bg-primary/5 p-3">
                    <Icon className="text-xl text-primary" />
                  </div>
                  <div className="min-w-0">
                    <p className="font-mono text-[10px] uppercase text-text-secondary">
                      {item.label}
                    </p>
                    <p className="break-all text-sm font-medium text-text">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
              return item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="block focus-visible:outline focus-visible:outline-2 focus-visible:outline-primary"
                >
                  {content}
                </a>
              ) : (
                <div key={item.label}>{content}</div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
