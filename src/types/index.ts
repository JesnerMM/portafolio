import { IconType } from "react-icons";
import { StaticImageData } from "next/image";

export interface NavLink {
  label: string;
  href: string;
}

export interface ImageGroup {
  label: string;
  images: StaticImageData[];
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: "profesional" | "academico";
  technologies: TechItem[];
  features: string[];
  imageGroups: ImageGroup[];
  imagesRestricted?: boolean;
  liveUrl?: string;
  repoUrl?: string;
}

export interface TechItem {
  name: string;
  icon: IconType;
  color: string;
}

export interface SkillCategory {
  title: string;
  icon: IconType;
  skills: TechItem[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: TechItem[];
}

export interface ContactInfo {
  icon: IconType;
  label: string;
  value: string;
  href?: string;
}
