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
    period: "2024 - Presente",
    description:
      "Desarrollo de sistemas empresariales completos para clientes corporativos, abarcando backend, frontend web y aplicaciones moviles con tecnologias modernas y metodologias agiles.",
    achievements: [
      "Desarrollo de Routify TMS - sistema de gestion de transporte con panel web (Vue 3), API REST (Express) y app movil (Flutter) con GPS en tiempo real, modo offline y liquidacion financiera. 32 modelos de BD, 20 endpoints, 23 servicios.",
      "Arquitectura e implementacion completa del sistema OCR para Aeromar - autenticacion JWT con RSA, modelo RBAC, flujo de aceptacion avanzada de documentos y CRUD de usuarios con validaciones robustas.",
      "Desarrollo full stack de +8 modulos en FACONTPOS - facturacion electronica con API del Ministerio de Hacienda, proformas con variantes, apartados con historial de pagos, codigos CABYS y precios diferenciados por sucursal.",
      "Implementacion de arquitecturas escalables con multiples stacks tecnologicos y servicios en la nube (AWS S3, Firebase).",
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
