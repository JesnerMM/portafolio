"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Project } from "@/types";
import TechBadge from "./TechBadge";
import ImageCarousel from "./ImageCarousel";
import { HiX, HiCheckCircle } from "react-icons/hi";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative max-h-[92vh] w-full max-w-5xl overflow-y-auto rounded-2xl border border-border bg-surface"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 z-10 rounded-full bg-background/80 p-2 text-text-secondary backdrop-blur-sm transition-colors hover:text-primary"
              aria-label="Cerrar"
            >
              <HiX className="text-xl" />
            </button>

            {/* Carousel */}
            <ImageCarousel
              groups={project.imageGroups}
              title={project.title}
              restricted={project.imagesRestricted}
            />

            {/* Content */}
            <div className="p-6">
              <div className="mb-4 flex items-center gap-3">
                <h2 className="text-2xl font-bold">{project.title}</h2>
                <span
                  className={`rounded-full px-3 py-1 text-xs font-medium ${
                    project.category === "profesional"
                      ? "bg-primary/10 text-primary"
                      : "bg-accent/10 text-accent"
                  }`}
                >
                  {project.category === "profesional"
                    ? "Profesional"
                    : "Academico"}
                </span>
              </div>

              <p className="mb-6 leading-relaxed text-text-secondary">
                {project.fullDescription}
              </p>

              {/* Features */}
              <div className="mb-6">
                <h3 className="mb-3 text-lg font-semibold text-primary">
                  Caracteristicas Principales
                </h3>
                <ul className="grid gap-2 sm:grid-cols-2">
                  {project.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2 text-sm text-text-secondary"
                    >
                      <HiCheckCircle className="mt-0.5 shrink-0 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div>
                <h3 className="mb-3 text-lg font-semibold text-primary">
                  Tecnologias Utilizadas
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <TechBadge key={tech.name} tech={tech} size="md" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
