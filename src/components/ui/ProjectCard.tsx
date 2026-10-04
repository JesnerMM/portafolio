"use client";

import { motion } from "motion/react";
import { Project } from "@/types";
import TechBadge from "./TechBadge";
import { HiLockClosed } from "react-icons/hi";
import Image from "next/image";
import { useLanguage } from "@/components/providers/LanguageProvider";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  const { t, language } = useLanguage();
  const title = language === "es" && project.titleEs ? project.titleEs : project.title;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group cursor-pointer overflow-hidden border border-border bg-surface p-0 transition-colors duration-300 hover:border-primary/50"
      onClick={() => onOpen(project)}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-surface-light">
        {project.imagesRestricted || project.imageGroups.length === 0 ? (
          <div className="flex h-full items-center justify-center text-text-secondary">
            <div className="text-center">
              <HiLockClosed className="mx-auto mb-2 text-3xl text-primary/30" />
              <span className="text-xs uppercase tracking-[0.18em] text-text-secondary">
                {t.projects.imagesRestricted}
              </span>
            </div>
          </div>
        ) : (
          <Image
            src={project.imageGroups[0].images[0]}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        )}

        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-70" />

        <div className="absolute inset-x-4 top-4 flex items-center justify-between">
          <span className="border border-border bg-background/80 px-2.5 py-1 font-mono text-[10px] uppercase text-text backdrop-blur-sm">
            {t.projects.projectLabel}
          </span>
          <span className="bg-primary/15 px-2.5 py-1 font-mono text-[10px] uppercase text-primary backdrop-blur-sm">
            {t.projects.professionalLabel}
          </span>
        </div>

        <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
          <span className="font-mono text-xs uppercase text-text">
            {project.technologies.length} {t.projects.technologyCountLabel}
          </span>
          <span className="border border-border bg-background/80 px-3 py-1.5 font-mono text-xs text-text backdrop-blur-sm transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-background">
            {t.projects.viewDetails}
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="mb-2 text-xl font-semibold text-text transition-colors group-hover:text-primary">
          {title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-text-secondary">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <TechBadge key={tech.name} tech={tech} />
          ))}
          {project.technologies.length > 4 && (
            <span className="inline-flex items-center border border-border bg-background px-2 py-1 font-mono text-[10px] uppercase text-text-secondary">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
