"use client";

import { motion } from "motion/react";
import { Project } from "@/types";
import TechBadge from "./TechBadge";
import { HiEye, HiLockClosed } from "react-icons/hi";
import Image from "next/image";

interface ProjectCardProps {
  project: Project;
  onOpen: (project: Project) => void;
}

export default function ProjectCard({ project, onOpen }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group cursor-pointer overflow-hidden rounded-xl border border-border bg-surface transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_30px_rgba(6,182,212,0.1)]"
      onClick={() => onOpen(project)}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden bg-surface-light">
        {project.imagesRestricted || project.imageGroups.length === 0 ? (
          <div className="flex h-full items-center justify-center text-text-secondary">
            <div className="text-center">
              <HiLockClosed className="mx-auto mb-2 text-3xl text-primary/30" />
              <span className="text-xs text-text-secondary">
                Imagenes restringidas
              </span>
            </div>
          </div>
        ) : (
          <Image
            src={project.imageGroups[0].images[0]}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, 400px"
          />
        )}
        <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          <span className="rounded-full bg-primary px-4 py-2 text-sm font-medium text-background">
            Ver Detalles
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-semibold transition-colors group-hover:text-primary">
            {project.title}
          </h3>
          <span
            className={`rounded-full px-2 py-0.5 text-xs ${
              project.category === "profesional"
                ? "bg-primary/10 text-primary"
                : "bg-accent/10 text-accent"
            }`}
          >
            {project.category === "profesional" ? "Profesional" : "Academico"}
          </span>
        </div>
        <p className="mb-4 text-sm leading-relaxed text-text-secondary">
          {project.shortDescription}
        </p>
        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <TechBadge key={tech.name} tech={tech} />
          ))}
          {project.technologies.length > 4 && (
            <span className="inline-flex items-center rounded-full border border-border bg-surface px-2 py-1 text-xs text-text-secondary">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
