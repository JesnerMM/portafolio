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
  SiAngular,
  SiIonic,
  SiDotnet,
  SiPostgresql,
  SiDocker,
} from "react-icons/si";
import { HiShieldCheck, HiDatabase, HiServer } from "react-icons/hi";

export const experiences: ExperienceItem[] = [
  {
    company:
      "JAPDEVA (Junta de Administración Portuaria y de Desarrollo Económico de la Vertiente Atlántica)",
    role: "Full Stack Software Engineer",
    period: "Julio 2026 — Presente",
    description:
      "Actualmente lidero el análisis, diseño y desarrollo del Sistema de Gestión de Patios Portuarios (YMS) para la administración de patios de vehículos, contenedores y carga general en terminales atlánticas.",
    achievements: [
      "Análisis, diseño y desarrollo de una plataforma crítica para la gestión de patios portuarios, cubriendo vehículos, contenedores y carga general.",
      "Implementación de arquitectura basada en eventos con Clean Architecture, Domain-Driven Design (DDD) y CQRS utilizando RabbitMQ para procesar eventos en tiempo real y automatizar la facturación y liquidación portuaria.",
      "Modelado de datos en PostgreSQL y Oracle DB con Entity Framework Core, garantizando trazabilidad completa de movimientos, reestibas y despacho.",
      "Desarrollo de interfaces web y móviles con Angular e Ionic Framework, con despliegue y contenedores en Docker.",
    ],
    technologies: [
      { name: "Angular", icon: SiAngular, color: "#DD0031" },
      { name: "Ionic", icon: SiIonic, color: "#3880FF" },
      { name: ".NET / C#", icon: SiDotnet, color: "#512BD4" },
      { name: "RabbitMQ", icon: HiServer, color: "#FF6600" },
      { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
      { name: "Oracle DB", icon: HiDatabase, color: "#D91F26" },
      { name: "Docker", icon: SiDocker, color: "#2496ED" },
      { name: "Entity Framework", icon: HiDatabase, color: "#68217A" },
    ],
  },
  {
    company: "CyberPro CR",
    role: "Desarrollador Full Stack",
    period: "Enero 2025 — Junio 2026",
    description:
      "Desarrollé y evolucioné soluciones empresariales con foco en aplicaciones full stack, plataformas de gestión, OCR inteligente, facturación electrónica y experiencias móviles/offline-first.",
    achievements: [
      "Routify TMS (cliente AVON): conecté la app Flutter con el backend real (migración desde datos mockeados), implementé los flujos completos de entrega, captura de evidencia fotográfica y firma digital en AWS S3, cobros múltiples y sincronización offline-first. Optimicé los módulos web de liquidación, monitoreo GPS y reportes.",
      "Sistema de Lectura de Datos mediante OCR Inteligente (cliente Aeromar): diseñé e implementé la arquitectura completa del sistema desde cero — modelado de BD con Prisma, API REST en Express/TypeScript, frontend en Next.js, autenticación JWT con RSA-2048 y modelo RBAC con protección de rutas en frontend y backend.",
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
