"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import SectionTitle from "@/components/ui/SectionTitle";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectModal from "@/components/ui/ProjectModal";
import { projects } from "@/data/projects";
import { Project } from "@/types";
import { cn } from "@/lib/utils";

const filters = [
  { label: "Todos", value: "todos" },
  { label: "Profesional", value: "profesional" },
  { label: "Academico", value: "academico" },
] as const;

type FilterValue = (typeof filters)[number]["value"];

export default function ProjectsSection() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("todos");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filtered =
    activeFilter === "todos"
      ? projects
      : projects.filter((p) => p.category === activeFilter);

  return (
    <section id="proyectos" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Proyectos"
          subtitle="Algunos de mis trabajos mas destacados"
        />

        {/* Filters */}
        <div className="mb-8 flex justify-center gap-2">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => setActiveFilter(filter.value)}
              className={cn(
                "rounded-lg px-4 py-2 text-sm font-medium transition-all",
                activeFilter === filter.value
                  ? "bg-primary text-background"
                  : "border border-border bg-surface text-text-secondary hover:text-text"
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid gap-6 md:grid-cols-2">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpen={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}
