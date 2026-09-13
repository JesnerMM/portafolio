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
    period: "July 2026 — Present",
    description:
      "I currently lead the analysis, design, and development of the Port Yard Management System (YMS) for the administration of vehicle yards, containers, and general cargo at Atlantic terminals.",
    achievements: [
      "Analysis, design, and development of a critical platform for port yard management covering vehicles, containers, and general cargo.",
      "Implementation of an event-driven architecture using Clean Architecture, Domain-Driven Design (DDD), and CQRS with RabbitMQ to process real-time events and automate port billing and settlement workflows.",
      "Data modeling in PostgreSQL and Oracle DB with Entity Framework Core, ensuring complete traceability of movements, restows, and dispatch operations.",
      "Development of web and mobile interfaces with Angular and Ionic Framework, including Docker-based deployment and containerization.",
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
    role: "Full Stack Software Engineer",
    period: "January 2025 — June 2026",
    description:
      "I developed and evolved enterprise solutions focused on full stack applications, management platforms, intelligent OCR, electronic invoicing, and mobile/offline-first experiences.",
    achievements: [
      "Routify TMS (AVON client): connected the Flutter app to the real backend (migrating from mocked data), implemented end-to-end delivery workflows, photographic evidence capture, digital signatures stored in AWS S3, multiple payment methods, and offline-first synchronization. Optimized the web modules for settlement, GPS monitoring, and reporting.",
      "Intelligent Data Reading System via OCR (Aeromar client): designed and implemented the complete system architecture from scratch — Prisma database modeling, REST API in Express/TypeScript, frontend in Next.js, JWT authentication with RSA-2048, and RBAC with route protection on both frontend and backend.",
      "FACONTPOS: developed more than 8 full stack modules for the electronic invoicing system, including integration with the Costa Rican Ministry of Finance API, proformas with CABYS codes, installment plans with payment history, branch-specific pricing, and inventory export to Excel.",
      "Worked under Scrum methodology with iterative deliveries, collaborative tools (Trello, Slack), and parallel development across multiple technology stacks.",
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
