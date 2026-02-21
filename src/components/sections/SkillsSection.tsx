"use client";

import { motion } from "motion/react";
import SectionTitle from "@/components/ui/SectionTitle";
import { skillCategories } from "@/data/skills";

export default function SkillsSection() {
  return (
    <section id="habilidades" className="px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          title="Habilidades"
          subtitle="Tecnologias y herramientas que domino"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, catIndex) => {
            const CategoryIcon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                viewport={{ once: true }}
                className="rounded-xl border border-border bg-surface p-6"
              >
                <div className="mb-4 flex items-center gap-3">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <CategoryIcon className="text-xl text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold">{category.title}</h3>
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {category.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className="group flex items-center gap-2 rounded-lg border border-border/50 bg-background/50 px-3 py-2 transition-all duration-200 hover:scale-105 hover:border-primary/30 hover:shadow-[0_0_15px_rgba(6,182,212,0.05)]"
                      >
                        <SkillIcon
                          style={{ color: skill.color }}
                          className="shrink-0 text-lg"
                        />
                        <span className="text-xs text-text-secondary transition-colors group-hover:text-text">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
