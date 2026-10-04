import { TechItem } from "@/types";

interface TechBadgeProps {
  tech: TechItem;
  size?: "sm" | "md";
}

export default function TechBadge({ tech, size = "sm" }: TechBadgeProps) {
  const Icon = tech.icon;
  return (
    <span
      className={`inline-flex items-center gap-1.5 border border-border bg-surface px-3 py-1 font-mono text-xs transition-colors duration-200 hover:border-primary/50 ${
        size === "md" ? "px-4 py-1.5 text-sm" : ""
      }`}
    >
      <Icon style={{ color: tech.color }} className="shrink-0" />
      {tech.name}
    </span>
  );
}
