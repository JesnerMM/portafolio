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
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group cursor-pointer overflow-hidden rounded-[28px] border border-white/10 bg-slate-950/40 p-0 shadow-[0_20px_60px_rgba(15,23,42,0.38)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-[0_30px_80px_rgba(6,182,212,0.12)]"
      onClick={() => onOpen(project)}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
        {project.imagesRestricted || project.imageGroups.length === 0 ? (
          <div className="flex h-full items-center justify-center text-text-secondary">
            <div className="text-center">
              <HiLockClosed className="mx-auto mb-2 text-3xl text-primary/30" />
              <span className="text-xs uppercase tracking-[0.18em] text-text-secondary">
                Images restricted
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

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/10 to-transparent opacity-70" />

        <div className="absolute inset-x-4 top-4 flex items-center justify-between">
          <span className="rounded-full border border-white/10 bg-slate-950/60 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-slate-200 backdrop-blur-sm">
            Project
          </span>
          <span className="rounded-full bg-primary/15 px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] text-primary backdrop-blur-sm">
            Professional
          </span>
        </div>

        <div className="absolute inset-x-4 bottom-4 flex items-center justify-between">
          <span className="text-xs uppercase tracking-[0.18em] text-slate-300">
            {project.technologies.length} techs
          </span>
          <span className="rounded-full bg-white/10 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm transition-colors group-hover:bg-primary group-hover:text-background">
            View Details
          </span>
        </div>
      </div>

      <div className="p-5">
        <h3 className="mb-2 text-xl font-semibold text-white transition-colors group-hover:text-primary">
          {project.title}
        </h3>
        <p className="mb-4 text-sm leading-relaxed text-text-secondary">
          {project.shortDescription}
        </p>

        <div className="flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 4).map((tech) => (
            <TechBadge key={tech.name} tech={tech} />
          ))}
          {project.technologies.length > 4 && (
            <span className="inline-flex items-center rounded-full border border-white/10 bg-slate-900/70 px-2 py-1 text-[10px] uppercase tracking-[0.14em] text-text-secondary">
              +{project.technologies.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
