import { ExperienceItem } from "@/types";
import {
  SiNextdotjs,
  SiExpress,
  SiTypescript,
  SiPrisma,
  SiMysql,
  SiVuedotjs,
  SiFlutter,
  SiAmazons3,
} from "react-icons/si";
import { HiShieldCheck } from "react-icons/hi";

export const experiences: ExperienceItem[] = [
  {
    company: "CyberPro CR",
    role: "Desarrollador Full Stack",
    period: "Ago 2025 — Feb 2026",
    description:
      "Pasantía profesional en CyberPro CR, empresa costarricense de desarrollo de software. Trabajé en tres proyectos empresariales activos, asumiendo responsabilidades full stack en backend, frontend web y desarrollo de aplicaciones móviles con Flutter.",
    achievements: [
      "Routify TMS (cliente AVON): conecté la app Flutter con el backend real (migración desde datos mockeados), implementé los flujos completos de entrega, captura de evidencia fotográfica y firma digital en AWS S3, cobros múltiples y sincronización offline-first. Optimicé los módulos web de liquidación, monitoreo GPS y reportes.",
      "OCR Aeromar: diseñé e implementé la arquitectura completa del sistema desde cero — modelado de BD con Prisma, API REST en Express/TypeScript, frontend en Next.js, autenticación JWT con RSA-2048 y modelo RBAC con protección de rutas en frontend y backend.",
      "FACONTPOS: desarrollé full stack más de 8 módulos del sistema de facturación electrónica, incluyendo integración con la API del Ministerio de Hacienda, proformas con códigos CABYS, apartados con historial de pagos, precios diferenciados por sucursal y exportación de inventario a Excel.",
      "Trabajo bajo metodología SCRUM con entregas iterativas, uso de herramientas colaborativas (Trello, Slack) y desarrollo con múltiples stacks tecnológicos en paralelo.",
    ],
    technologies: [
      { name: "Vue 3", icon: SiVuedotjs, color: "#4FC08D" },
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "AWS S3", icon: SiAmazons3, color: "#569A31" },
      { name: "JWT", icon: HiShieldCheck, color: "#06B6D4" },
    ],
  },
];
