"use client";

import SectionTitle from "@/components/ui/SectionTitle";
import TimelineItem from "@/components/ui/TimelineItem";
import { experiences } from "@/data/experience";

export default function ExperienceSection() {
  return (
    <section id="experiencia" className="px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <SectionTitle
          title="Experiencia"
          subtitle="Mi trayectoria profesional"
        />

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <TimelineItem key={exp.company} experience={exp} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
