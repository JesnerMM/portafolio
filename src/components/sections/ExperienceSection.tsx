"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import TimelineItem from "@/components/ui/TimelineItem";
import { experiences } from "@/data/experience";
import { useLanguage } from "@/components/providers/LanguageProvider";

export default function ExperienceSection() {
  const { t, language } = useLanguage();

  return (
    <section id="experiencia" className="px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <SectionTitle
          title={t.experience.title}
          subtitle={t.experience.subtitle}
        />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={exp.company}
              experience={exp}
              index={index}
              language={language}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
