import { Project } from "@/types";
import {
  SiNextdotjs,
  SiExpress,
  SiTypescript,
  SiPrisma,
  SiMysql,
  SiAngular,
  SiDotnet,
  SiReact,
  SiPhp,
  SiIonic,
  SiVuedotjs,
  SiFlutter,
  SiAmazons3,
  SiFirebase,
  SiGooglemaps,
  SiSqlite,
  SiCapacitor,
} from "react-icons/si";
import { HiShieldCheck, HiMap, HiDatabase, HiServer } from "react-icons/hi";

// FACONTPOS
import facontpos1 from "@/assets/facontpos/facontpos1.png";
import facontpos2 from "@/assets/facontpos/facontpos2.png";
import facontpos3 from "@/assets/facontpos/facontpos3.png";
import facontpos4 from "@/assets/facontpos/facontpos4.png";
import facontpos5 from "@/assets/facontpos/facontpos5.png";
import facontpos6 from "@/assets/facontpos/facontpos6.png";
import facontpos7 from "@/assets/facontpos/facontpos7.png";
import facontpos8 from "@/assets/facontpos/facontpos8.png";
import facontpos9 from "@/assets/facontpos/facontpos9.png";
import facontpos10 from "@/assets/facontpos/facontpos10.png";
import facontpos11 from "@/assets/facontpos/facontpos11.png";
import facontpos12 from "@/assets/facontpos/facontpos12.png";
import facontpos13 from "@/assets/facontpos/facontpos13.png";
import facontpos14 from "@/assets/facontpos/facontpos14.png";

// Solitel - OIJ
import solitel1 from "@/assets/solitel/solitel1.png";
import solitel2 from "@/assets/solitel/solitel2.png";
import solitel3 from "@/assets/solitel/solitel3.png";
import solitel4 from "@/assets/solitel/solitel4.png";
import solitel5 from "@/assets/solitel/solitel5.png";
import solitel6 from "@/assets/solitel/solitel6.png";
import solitel7 from "@/assets/solitel/solitel7.png";
import solitel8 from "@/assets/solitel/solitel8.png";
import solitel9 from "@/assets/solitel/solitel9.png";

// Sistema de Cupones — Admin
import cuponesAdmin1 from "@/assets/sistema-cupones/admin-page1.png";
import cuponesAdmin2 from "@/assets/sistema-cupones/admin-page2.png";
import cuponesAdmin3 from "@/assets/sistema-cupones/admin-page3.png";
import cuponesAdmin4 from "@/assets/sistema-cupones/admin-page4.png";
import cuponesAdmin5 from "@/assets/sistema-cupones/admin-page5.png";
import cuponesAdmin6 from "@/assets/sistema-cupones/admin-page6.png";
import cuponesAdmin7 from "@/assets/sistema-cupones/admin-page7.png";

// Sistema de Cupones — App Cliente
import cuponesClient1 from "@/assets/sistema-cupones/app-client1.png";
import cuponesClient2 from "@/assets/sistema-cupones/app-client2.png";
import cuponesClient3 from "@/assets/sistema-cupones/app-client3.png";
import cuponesClient4 from "@/assets/sistema-cupones/app-client4.png";
import cuponesClient5 from "@/assets/sistema-cupones/app-client5.png";
import cuponesClient6 from "@/assets/sistema-cupones/app-client6.png";
import cuponesClient7 from "@/assets/sistema-cupones/app-client7.png";
import cuponesClient8 from "@/assets/sistema-cupones/app-client8.png";
import cuponesClient9 from "@/assets/sistema-cupones/app-client9.png";
import cuponesClient10 from "@/assets/sistema-cupones/app-client10.png";
import cuponesClient11 from "@/assets/sistema-cupones/app-client11.png";

// Sistema de Cupones — Portal Empresa
import cuponesEmpresa1 from "@/assets/sistema-cupones/empresa-page1.png";
import cuponesEmpresa2 from "@/assets/sistema-cupones/empresa-page2.png";
import cuponesEmpresa3 from "@/assets/sistema-cupones/empresa-page3.png";
import cuponesEmpresa4 from "@/assets/sistema-cupones/empresa-page4.png";
import cuponesEmpresa5 from "@/assets/sistema-cupones/empresa-page5.png";
import cuponesEmpresa6 from "@/assets/sistema-cupones/empresa-page6.png";

// Hotel JAHE — Sitio Cliente
import hotelClient1 from "@/assets/hotel-jahe/client-page1.png";
import hotelClient2 from "@/assets/hotel-jahe/client-page2.png";
import hotelClient3 from "@/assets/hotel-jahe/client-page3.png";
import hotelClient4 from "@/assets/hotel-jahe/client-page4.png";
import hotelClient5 from "@/assets/hotel-jahe/client-page5.png";
import hotelClient6 from "@/assets/hotel-jahe/client-page6.png";
import hotelClient7 from "@/assets/hotel-jahe/client-page7.png";

// Hotel JAHE — Panel Administrador
import hotelAdmin1 from "@/assets/hotel-jahe/admin-page1.png";
import hotelAdmin2 from "@/assets/hotel-jahe/admin-page2.png";
import hotelAdmin3 from "@/assets/hotel-jahe/admin-page3.png";
import hotelAdmin4 from "@/assets/hotel-jahe/admin-page4.png";
import hotelAdmin5 from "@/assets/hotel-jahe/admin-page5.png";
import hotelAdmin6 from "@/assets/hotel-jahe/admin-page6.png";
import hotelAdmin7 from "@/assets/hotel-jahe/admin-page7.png";
import hotelAdmin8 from "@/assets/hotel-jahe/admin-page8.png";
import hotelAdmin9 from "@/assets/hotel-jahe/admin-page9.png";
import hotelAdmin10 from "@/assets/hotel-jahe/admin-page10.png";
import hotelAdmin11 from "@/assets/hotel-jahe/admin-page11.png";
import hotelAdmin12 from "@/assets/hotel-jahe/admin-page12.png";
import hotelAdmin13 from "@/assets/hotel-jahe/admin-page13.png";
import hotelAdmin14 from "@/assets/hotel-jahe/admin-page14.png";

export const projects: Project[] = [
  {
    id: "routify-tms",
    title: "Routify TMS",
    shortDescription:
      "Transportation management system developed for AVON, with a Vue 3 web panel, a Node.js/Express REST API, and a Flutter mobile app with real-time GPS and offline-first architecture.",
    fullDescription:
      "Transportation Management System (TMS) developed at CyberPro CR for the AVON client, designed to digitize and optimize delivery operations. The solution includes a web admin panel (Vue 3), a robust REST API (Express + TypeScript + Prisma + MySQL), and a mobile app for drivers (Flutter) with offline-first architecture.\n\nMy role covered end-to-end development of the Flutter app, connecting it to the real backend after migrating from a mocked-data implementation. I implemented complete mobile authentication flows, route download and synchronization, the full delivery cycle (check-in, partial/complete delivery, rejections with documented reasons), photo evidence capture, and digital signatures stored in AWS S3, along with multiple payment methods. In the web panel, I optimized and corrected the settlement module, the real-time GPS monitoring module, and the reporting module that previously relied on mock data. I also ensured that evidence and signatures captured in the mobile app were correctly displayed in the admin panel.",
    category: "profesional",
    technologies: [
      { name: "Vue 3", icon: SiVuedotjs, color: "#4FC08D" },
      { name: "Flutter", icon: SiFlutter, color: "#02569B" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "AWS S3", icon: SiAmazons3, color: "#569A31" },
      { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      { name: "Google Maps", icon: SiGooglemaps, color: "#4285F4" },
      { name: "SQLite", icon: SiSqlite, color: "#003B57" },
    ],
    features: [
      "Complete Flutter app integration with the real backend: authentication, route download, and data synchronization",
      "Full delivery workflow: check-in, total or partial delivery, and rejections with documented reasons",
      "Photo evidence capture and digital signature in the mobile app, stored in AWS S3",
      "Multiple payment methods in the app: cash, card, check, transfer, and SINPE Móvil",
      "Real-time GPS monitoring in the web panel with speed, direction, and driver status",
      "Settlement module in 3 levels: by item, by order, and by route",
      "Offline-first architecture with Drift (SQLite): operate without internet and sync intelligently when reconnecting",
      "Reporting module corrected and connected to real data from the backend",
    ],
    imageGroups: [],
    imagesRestricted: true,
  },
  {
    id: "ocr-aeromar",
    title: "Intelligent OCR Data Reading System",
    shortDescription:
      "Document digitization platform built from scratch for Aeromar, including a full web interface, RSA-JWT authentication, and role-based access control.",
    fullDescription:
      "Enterprise document digitization platform built from scratch for Aeromar. My responsibility covered the complete design and implementation of the system architecture: database modeling with Prisma ORM, a REST API with Express/TypeScript, and a frontend with Next.js.\n\nThe system implements secure authentication using JWT signed with RSA and HttpOnly cookies, plus an RBAC model for granular role-based access control. The interface allows document upload, visualization, and management through an advanced acceptance flow, user administration with robust validations, and route protection on both frontend and backend.\n\nIt is worth noting that the OCR data extraction and interpretation service is a proprietary functionality that the company continues to develop; my participation focused on the complete platform infrastructure and the user interface. Built using Scrum methodology with Notion and Slack.",
    category: "profesional",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "JWT / RSA", icon: HiShieldCheck, color: "#06B6D4" },
    ],
    features: [
      "Complete interface for uploading, viewing, and managing digitized documents",
      "Secure authentication with RSA-2048 signed JWT and HttpOnly cookies",
      "RBAC model with route protection in both frontend (Next.js) and backend (Express)",
      "Document acceptance workflow with statuses and robust validations",
      "Full stack architecture designed and implemented from scratch: database, API, and frontend",
      "User CRUD with roles, validations, and session management",
    ],
    imageGroups: [],
    imagesRestricted: true,
  },
  {
    id: "facontpos",
    title: "FACONTPOS",
    shortDescription:
      "Integrated electronic invoicing and point-of-sale system with direct integration to the Costa Rican Ministry of Finance API, built full stack with more than 8 modules.",
    fullDescription:
      "FACONTPOS is an electronic invoicing and point-of-sale system that complies with Costa Rica’s Ministry of Finance regulations. I participated as a full stack developer implementing more than 8 complete modules: from database modeling and backend endpoints (Express + Prisma + MySQL) to the user interfaces in Next.js.\n\nAmong the modules developed are proformas with support for product variants and CABYS codes, invoicing without opening the cash drawer with PDF generation and multiple payment methods, installment plans with partial payment history and receipt issuance, CABYS code integration in the product catalog, branch-specific pricing throughout the billing flow, a purchasing module with configurable rounding, and inventory export to Excel with pagination in financial modules. Built using Scrum methodology.",
    category: "profesional",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
    features: [
      "Electronic invoicing with direct integration to the Costa Rican Ministry of Finance API",
      "Proforma module with product variants, CABYS codes, and document generation",
      "Invoicing without opening the cash drawer with PDF generation and multiple payment methods",
      "Installment plans with partial payment history, vouchers, and downloadable receipts",
      "Branch-specific pricing integrated into the entire billing flow",
      "Purchasing module with configurable rounding by quantity or amount",
      "Inventory export to Excel and pagination in financial modules",
      "More than 8 full stack modules developed: Next.js frontend, Express backend, and MySQL database",
    ],
    imageGroups: [
      {
        label: "System",
        images: [
          facontpos1, facontpos2, facontpos3, facontpos4, facontpos5,
          facontpos6, facontpos7, facontpos8, facontpos9, facontpos10,
          facontpos11, facontpos12, facontpos13, facontpos14,
        ],
      },
    ],
  },
  {
    id: "solitel-oij",
    title: "Solitel - OIJ",
    shortDescription:
      "Management system for requests related to the analysis of telephone information in judicial cases, built with Clean Architecture, SOLID principles, and a multi-role approval flow.",
    fullDescription:
      "Engineering project developed in direct collaboration with the Organismo de Investigación Judicial (OIJ) of Costa Rica, with requirements gathered through interviews with real stakeholders from the organization. The system manages the full lifecycle of requests for analysis of telephone information in judicial cases.\n\nThe backend was built in .NET 8 using Clean Architecture with five clearly separated layers: BC (domain core: entities, business rules, and constants), BW (use cases and contract interfaces), DA (data access with Entity Framework Core and Repository pattern), SG (external general services), and the API layer (controllers, DTOs, and dependency composition). Dependencies flow strictly inward, ensuring that the business core remains independent from any framework or infrastructure.\n\nMy role was full stack: I designed the backend architecture, developed the complete analysis request module with CRUD for requirements and an approval endpoint, implemented the roles and permissions system in the Angular frontend, updated the login module, and created the provider and office CRUDs. The project followed the RUP methodology across its four phases: inception, elaboration, construction, and transition.",
    category: "profesional",
    technologies: [
      { name: "Angular", icon: SiAngular, color: "#DD0031" },
      { name: ".NET 8 / C#", icon: SiDotnet, color: "#512BD4" },
      { name: "Entity Framework", icon: HiDatabase, color: "#68217A" },
      { name: "SQL Server", icon: HiServer, color: "#CC2927" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
    features: [
      "Clean Architecture in .NET 8 with 5 layers: BC, BW, DA, SG, and API",
      "RBAC model with 6 roles: investigator, management, prosecutor, analyst, provider, and administrator",
      "Complete analysis request module: CRUD for requirements and approval endpoint",
      "Multi-level approval flows among the different roles in the system",
      "Request inbox with pagination, status filtering, and search",
      "Requirements gathered with real OIJ stakeholders under the RUP methodology",
    ],
    imageGroups: [
      {
        label: "System",
        images: [
          solitel1, solitel2, solitel3, solitel4, solitel5,
          solitel6, solitel7, solitel8, solitel9,
        ],
      },
    ],
  },
  {
    id: "microservicios-pagos-qr",
    title: "Microservices with QR Payments and ISO 8583 Protocol",
    shortDescription:
      "Distributed microservices architecture in .NET 8 for QR payments, Luhn validation, gateway integration, and Azure deployment.",
    fullDescription:
      "Engineering project focused on digital payments and electronic finance, designed as a distributed microservices solution with .NET 8. The architecture separates operational and business responsibilities to handle transactions, validations, payment gateway integrations, and event auditing in a secure and scalable way.\n\nKey elements include data validation using Luhn algorithms, message handling with the ISO 8583 protocol, payment gateway integration, and orchestration of critical processes through decoupled services. The project reflects my interest and capability in building highly reliable systems focused on payments, traceability, security, and performance in cloud environments.\n\nThis type of solution is especially relevant in fintech and Web3 ecosystems, where transaction integrity and workflow automation are essential.",
    category: "profesional",
    technologies: [
      { name: ".NET 8 / C#", icon: SiDotnet, color: "#512BD4" },
      { name: "Microservices", icon: HiServer, color: "#22C55E" },
      { name: "ISO 8583", icon: HiShieldCheck, color: "#F59E0B" },
      { name: "Azure", icon: HiServer, color: "#0078D4" },
      { name: "Entity Framework", icon: HiDatabase, color: "#68217A" },
      { name: "SQL Server", icon: HiServer, color: "#CC2927" },
      { name: "RabbitMQ", icon: HiServer, color: "#FF6600" },
    ],
    features: [
      "Distributed microservices architecture in .NET 8 with clear separation of domains and responsibilities",
      "Payment gateway integration and QR transaction handling with Luhn validation",
      "ISO 8583 flow implementation for interoperability with financial systems and payment terminals",
      "Design focused on traceability, security, and high availability for critical finance processes",
      "Deployment and operation on Azure with an emphasis on resilience, monitoring, and scalability",
    ],
    imageGroups: [],
    imagesRestricted: true,
  },
  {
    id: "gestion-hotelera",
    title: "Hotel Management System",
    shortDescription:
      "Complete hotel management system with a client website and admin panel in Angular 18, plus a REST API in .NET 8 with DDD architecture and four domain layers.",
    fullDescription:
      "Comprehensive hotel management system composed of three parts: a client website (Angular 18 + Google Maps), an admin panel (Angular 18 + Angular Material), and a REST API (.NET 8 + Entity Framework Core + SQL Server).\n\nThe client site includes a multi-step booking wizard with real-time availability checks and alternative suggestions, room gallery, rates by type and season, an interactive map using the Google Maps API and geolocation, offer and advertising carousels, and a contact form. The admin panel allows managing and exporting reservations to PDF (jsPDF), controlling room availability by date, creating offers and promotions with date ranges and discounts, configuring high-season pricing, and editing the content of all website pages through an integrated CMS.\n\nThe backend was built with Domain-Driven Design (DDD) architecture using four layers: API (controllers for Room, Reservation, Offer, Advertising, Season, Rates, Facilities, Contact, and Authentication), Application (DTOs and application services), Domain (entities, interfaces, and domain services), and Infrastructure (repositories, persistence with Entity Framework Core, and security). Built using Scrum methodology.",
    category: "profesional",
    technologies: [
      { name: "Angular 18", icon: SiAngular, color: "#DD0031" },
      { name: ".NET 8 / C#", icon: SiDotnet, color: "#512BD4" },
      { name: "Entity Framework", icon: HiDatabase, color: "#68217A" },
      { name: "SQL Server", icon: HiServer, color: "#CC2927" },
      { name: "Google Maps", icon: HiMap, color: "#4285F4" },
    ],
    features: [
      "Multi-step booking wizard with availability checks and alternative suggestions",
      "Admin panel for reservation management and PDF export with jsPDF and jspdf-autotable",
      "Integrated CMS for editing homepage, about us, facilities, and address content",
      "Offers and promotions with date ranges, discounts, and high-season configuration",
      "Interactive map with Google Maps API, geolocation, and routes to the hotel",
      "DDD backend in .NET 8 with 4 layers: API, Application, Domain, and Infrastructure using Entity Framework Core",
    ],
    imageGroups: [
      {
        label: "Client Website",
        images: [
          hotelClient1, hotelClient2, hotelClient3, hotelClient4,
          hotelClient5, hotelClient6, hotelClient7,
        ],
      },
      {
        label: "Admin Panel",
        images: [
          hotelAdmin1, hotelAdmin2, hotelAdmin3, hotelAdmin4,
          hotelAdmin5, hotelAdmin6, hotelAdmin7, hotelAdmin8,
          hotelAdmin9, hotelAdmin10, hotelAdmin11, hotelAdmin12,
          hotelAdmin13, hotelAdmin14,
        ],
      },
    ],
  },
];
