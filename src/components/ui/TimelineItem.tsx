"use client";

import { motion } from "motion/react";
import { ExperienceItem } from "@/types";
import TechBadge from "./TechBadge";
import { HiBriefcase, HiCheckCircle } from "react-icons/hi";

interface TimelineItemProps {
  experience: ExperienceItem;
  index: number;
  language: "en" | "es";
}

export default function TimelineItem({
  experience,
  index,
  language,
}: TimelineItemProps) {
  const role = language === "es" && experience.roleEs ? experience.roleEs : experience.role;
  const period =
    language === "es" && experience.periodEs ? experience.periodEs : experience.period;
  const description =
    language === "es" && experience.descriptionEs
      ? experience.descriptionEs
      : experience.description;
  const achievements =
    language === "es" && experience.achievementsEs
      ? experience.achievementsEs
      : experience.achievements;

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className="relative pl-8 md:pl-12"
    >
      <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center border border-primary bg-background md:left-2">
        <HiBriefcase className="text-sm text-primary" />
      </div>

      <div className="absolute bottom-0 left-[15px] top-8 w-px bg-gradient-to-b from-primary/60 to-border md:left-[23px]" />

      <div className="border border-border bg-surface p-6 transition-colors duration-300 hover:border-primary/40">
        <div className="mb-2 flex flex-wrap items-center gap-3">
          <h3 className="text-xl font-bold text-text">
            {experience.company}
            {experience.companyDetail && ` (${experience.companyDetail[language]})`}
          </h3>
          <span className="border border-primary/30 bg-primary/5 px-3 py-1 font-mono text-[10px] uppercase text-primary">
            {period}
          </span>
        </div>
        <p className="mb-3 text-base font-semibold text-primary">{role}</p>
        <p className="mb-4 text-sm leading-relaxed text-text-secondary">
          {description}
        </p>

        <ul className="mb-4 space-y-2">
          {achievements.map((achievement, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-text-secondary"
            >
              <HiCheckCircle className="mt-0.5 shrink-0 text-primary" />
              {achievement}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <TechBadge key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
