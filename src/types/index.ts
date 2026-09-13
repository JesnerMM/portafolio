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
  category: "profesional";
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
  companyDetail?: {
    en: string;
    es: string;
  };
  role: string;
  roleEs?: string;
  period: string;
  periodEs?: string;
  description: string;
  descriptionEs?: string;
  achievements: string[];
  achievementsEs?: string[];
  technologies: TechItem[];
}

export interface ContactInfo {
  icon: IconType;
  label: string;
  value: string;
  href?: string;
}
