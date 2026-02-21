"use client";

import { motion } from "motion/react";
import { ExperienceItem } from "@/types";
import TechBadge from "./TechBadge";
import { HiBriefcase, HiCheckCircle } from "react-icons/hi";

interface TimelineItemProps {
  experience: ExperienceItem;
  index: number;
}

export default function TimelineItem({
  experience,
  index,
}: TimelineItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
      viewport={{ once: true }}
      className="relative pl-8 md:pl-12"
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-0 flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background md:left-2">
        <HiBriefcase className="text-sm text-primary" />
      </div>

      {/* Timeline line */}
      <div className="absolute bottom-0 left-[15px] top-8 w-px bg-border md:left-[23px]" />

      {/* Card */}
      <div className="rounded-xl border border-border bg-surface p-6 transition-colors hover:border-primary/30">
        <div className="mb-2 flex flex-wrap items-center gap-3">
          <h3 className="text-xl font-bold">{experience.company}</h3>
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            {experience.period}
          </span>
        </div>
        <p className="mb-3 font-medium text-primary">{experience.role}</p>
        <p className="mb-4 text-sm leading-relaxed text-text-secondary">
          {experience.description}
        </p>

        {/* Achievements */}
        <ul className="mb-4 space-y-2">
          {experience.achievements.map((achievement, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-text-secondary"
            >
              <HiCheckCircle className="mt-0.5 shrink-0 text-primary" />
              {achievement}
            </li>
          ))}
        </ul>

        {/* Tech */}
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <TechBadge key={tech.name} tech={tech} />
          ))}
        </div>
      </div>
    </motion.div>
  );
}
