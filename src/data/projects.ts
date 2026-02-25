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
      "Sistema de Gestión de Transporte desarrollado para AVON, con panel web en Vue 3, API REST en Node.js/Express y app móvil Flutter con GPS en tiempo real y arquitectura offline-first.",
    fullDescription:
      "Sistema de Gestión de Transporte (TMS) desarrollado en CyberPro CR para el cliente AVON, diseñado para digitalizar y optimizar operaciones logísticas de entrega. La solución comprende un panel administrativo web (Vue 3), una API REST robusta (Express + TypeScript + Prisma + MySQL) y una aplicación móvil para conductores (Flutter) con arquitectura offline-first.\n\nMi rol abarcó el desarrollo de extremo a extremo de la app Flutter, conectándola con el backend real tras migrar desde una implementación con datos mockeados. Implementé los flujos completos de autenticación móvil, descarga y sincronización de rutas, ejecución del ciclo de entrega (check-in, entrega total/parcial, rechazos con motivo), captura de evidencia fotográfica y firma digital almacenadas en AWS S3, y cobros con múltiples métodos de pago. En el panel web optimicé y corregí el módulo de liquidación, el módulo de monitoreo GPS en tiempo real y el módulo de reportes que anteriormente operaba con datos mock. También aseguré que las evidencias y firmas capturadas en la app móvil se visualicen correctamente en el panel administrativo.",
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
      "Integracion completa de app Flutter con backend real: autenticacion, descarga de rutas y sincronizacion de datos",
      "Ciclo de entrega completo: check-in, entrega total/parcial y rechazos con motivo documentado",
      "Captura de evidencia fotografica y firma digital en app movil, almacenadas en AWS S3",
      "Cobros multiples en app: efectivo, tarjeta, cheque, transferencia y SINPE movil",
      "Monitoreo GPS en tiempo real en panel web con velocidad, direccion y estado del conductor",
      "Modulo de liquidacion en 3 niveles: por articulo, por orden y por ruta",
      "Arquitectura offline-first con Drift (SQLite): operacion sin internet y sincronizacion inteligente al reconectar",
      "Modulo de reportes del panel web corregido y conectado a datos reales del backend",
    ],
    imageGroups: [],
    imagesRestricted: true,
  },
  {
    id: "ocr-aeromar",
    title: "OCR Aeromar",
    shortDescription:
      "Plataforma de digitalización documental desarrollada desde cero para Aeromar, con interfaz web completa, autenticación RSA-JWT y control de acceso por roles.",
    fullDescription:
      "Plataforma empresarial de digitalización de documentos desarrollada desde cero para Aeromar. Mi responsabilidad abarcó el diseño e implementación completa de la arquitectura del sistema: modelado de base de datos con Prisma ORM, API REST con Express/TypeScript, y frontend con Next.js.\n\nEl sistema implementa autenticación segura con JWT firmado mediante RSA y cookies HttpOnly, y un modelo RBAC para control de acceso granular por roles. La interfaz permite la carga, visualización y gestión de documentos con un flujo de aceptación avanzado, administración de usuarios con validaciones robustas, y protección de rutas tanto en frontend como en backend.\n\nCabe destacar que el servicio de extracción e interpretación de datos OCR es una funcionalidad propietaria que la empresa continúa desarrollando; mi participación se enfocó en la infraestructura completa de la plataforma y la interfaz de usuario. Desarrollado con metodología SCRUM usando Notion y Slack.",
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
      "Interfaz completa para carga, visualización y gestión de documentos digitalizados",
      "Autenticación segura con JWT firmado con RSA-2048 y cookies HttpOnly",
      "Modelo RBAC con protección de rutas en frontend (Next.js) y backend (Express)",
      "Flujo de aceptación de documentos con estados y validaciones robustas",
      "Arquitectura full stack diseñada e implementada desde cero: BD, API y frontend",
      "CRUD de usuarios con roles, validaciones y gestión de sesiones",
    ],
    imageGroups: [],
    imagesRestricted: true,
  },
  {
    id: "facontpos",
    title: "FACONTPOS",
    shortDescription:
      "Sistema integral de facturación electrónica y punto de venta con integración a la API del Ministerio de Hacienda de Costa Rica, desarrollado full stack con más de 8 módulos.",
    fullDescription:
      "FACONTPOS es un sistema de facturación electrónica y punto de venta que cumple con la normativa del Ministerio de Hacienda de Costa Rica. Participé como desarrollador full stack implementando más de 8 módulos completos: desde el modelado de base de datos y los endpoints del backend (Express + Prisma + MySQL) hasta las interfaces de usuario en Next.js.\n\nEntre los módulos desarrollados destacan: proformas con soporte de variantes de productos y códigos CABYS, facturación sin caja abierta con generación de PDF y múltiples métodos de pago, apartados con historial de pagos parciales y emisión de comprobantes, integración de códigos CABYS en el catálogo de productos, precios diferenciados por sucursal en todo el flujo de facturación, módulo de compras con redondeo configurable, y exportación de inventario a Excel con paginación en los módulos financieros. Desarrollado con metodología SCRUM.",
    category: "profesional",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
    features: [
      "Facturación electrónica con integración directa a la API del Ministerio de Hacienda de Costa Rica",
      "Módulo de proformas con variantes de productos, códigos CABYS y generación de documentos",
      "Facturación sin caja abierta con generación de PDF y múltiples métodos de pago",
      "Apartados con historial de pagos parciales, comprobantes y recibos descargables",
      "Precios diferenciados por sucursal integrados en todo el flujo de facturación",
      "Módulo de compras con redondeo configurable por cantidad o monto",
      "Exportación de inventario a Excel y paginación en módulos financieros",
      "Más de 8 módulos desarrollados full stack: frontend Next.js, backend Express y base de datos MySQL",
    ],
    imageGroups: [
      {
        label: "Sistema",
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
      "Prototipo académico para el OIJ de Costa Rica que gestiona solicitudes de información telefónica en casos judiciales, construido con Clean Architecture, principios SOLID y metodología RUP.",
    fullDescription:
      "Prototipo desarrollado en colaboración directa con el Organismo de Investigación Judicial (OIJ) de Costa Rica, con requerimientos levantados mediante entrevistas con las partes interesadas reales del organismo. El sistema gestiona el ciclo completo de solicitudes de análisis de información telefónica en casos judiciales.\n\nEl backend fue construido en .NET 8 sobre Clean Architecture con cinco capas bien delimitadas: BC (núcleo del dominio: entidades, reglas de negocio y constantes), BW (casos de uso e interfaces de contratos), DA (acceso a datos con Entity Framework Core y patrón Repository), SG (servicios generales externos) y la capa de API (controladores, DTOs y punto de composición de dependencias). Las dependencias fluyen estrictamente hacia adentro, garantizando que el núcleo del negocio sea independiente de cualquier framework o infraestructura.\n\nMi rol fue full stack: diseñé la arquitectura del backend, desarrollé el módulo completo de solicitudes de análisis con CRUD de requerimientos y endpoint de aprobación, implementé el sistema de roles y permisos en el frontend Angular, actualicé el módulo de inicio de sesión, y creé los CRUDs de proveedor y oficina. El proyecto siguió la metodología RUP con sus cuatro fases: inicio, elaboración, construcción y transición.",
    category: "academico",
    technologies: [
      { name: "Angular", icon: SiAngular, color: "#DD0031" },
      { name: ".NET 8 / C#", icon: SiDotnet, color: "#512BD4" },
      { name: "Entity Framework", icon: HiDatabase, color: "#68217A" },
      { name: "SQL Server", icon: HiServer, color: "#CC2927" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
    features: [
      "Arquitectura Clean Architecture en .NET 8 con 5 capas: BC, BW, DA, SG y API",
      "Modelo RBAC con 6 roles: investigador, jefatura, fiscal, analista, proveedor y administrador",
      "Módulo completo de solicitudes de análisis: CRUD de requerimientos y endpoint de aprobación",
      "Flujos de aprobación multi-nivel entre los diferentes roles del sistema",
      "Bandeja de solicitudes con paginación, filtrado por estados y búsqueda",
      "Requerimientos levantados con partes interesadas reales del OIJ bajo metodología RUP",
    ],
    imageGroups: [
      {
        label: "Sistema",
        images: [
          solitel1, solitel2, solitel3, solitel4, solitel5,
          solitel6, solitel7, solitel8, solitel9,
        ],
      },
    ],
  },
  {
    id: "cupones-online",
    title: "Cupones Online",
    shortDescription:
      "Plataforma de cupones de descuento con panel web en React, dos APIs en .NET 8 y PHP, y app móvil híbrida en Ionic/Angular para el canje de cupones.",
    fullDescription:
      "Plataforma completa para la gestión y canje de cupones de descuento para comercios locales, desarrollada como proyecto académico con una arquitectura multi-capa y múltiples stacks tecnológicos.\n\nEl sistema cuenta con tres componentes principales: un panel administrativo web en React con Bootstrap para la gestión de empresas, categorías, cupones y promociones; dos backends complementarios: uno en .NET 8 con Clean Architecture de cinco capas (BC, BW, DA, SG y API) usando Entity Framework Core y SQL Server, y otro en PHP con arquitectura en capas (Business, Data, Presentation); y una aplicación móvil híbrida en Ionic + Angular con Capacitor para el canje de cupones por parte de los usuarios finales.\n\nLas funcionalidades principales incluyen CRUD completo de cupones con categorías y empresas, gestión de promociones con condiciones de uso, carrito de canje, historial de compras del usuario y geolocalización de cupones cercanos.",
    category: "academico",
    technologies: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: ".NET 8 / C#", icon: SiDotnet, color: "#512BD4" },
      { name: "Entity Framework", icon: HiDatabase, color: "#68217A" },
      { name: "Ionic", icon: SiIonic, color: "#3880FF" },
      { name: "Capacitor", icon: SiCapacitor, color: "#119EFF" },
      { name: "SQL Server", icon: HiServer, color: "#CC2927" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
    features: [
      "Panel web en React con CRUD completo de empresas, categorías, cupones y promociones",
      "Backend .NET 8 con Clean Architecture de 5 capas: BC, BW, DA, SG y API",
      "Backend PHP con arquitectura en capas: Business, Data y Presentation",
      "App móvil híbrida en Ionic + Angular con carrito de canje y geolocalización",
      "Entity Framework Core con patrón Repository para acceso a datos en el backend .NET",
      "Gestión de compras con detalle de canje e historial de transacciones del usuario",
    ],
    imageGroups: [
      {
        label: "Panel Administrador",
        images: [
          cuponesAdmin1, cuponesAdmin2, cuponesAdmin3, cuponesAdmin4,
          cuponesAdmin5, cuponesAdmin6, cuponesAdmin7,
        ],
      },
      {
        label: "App Cliente",
        images: [
          cuponesClient1, cuponesClient2, cuponesClient3, cuponesClient4,
          cuponesClient5, cuponesClient6, cuponesClient7, cuponesClient8,
          cuponesClient9, cuponesClient10, cuponesClient11,
        ],
      },
      {
        label: "Portal Empresa",
        images: [
          cuponesEmpresa1, cuponesEmpresa2, cuponesEmpresa3,
          cuponesEmpresa4, cuponesEmpresa5, cuponesEmpresa6,
        ],
      },
    ],
  },
  {
    id: "gestion-hotelera",
    title: "Gestion Hotelera",
    shortDescription:
      "Sistema hotelero completo con sitio web para clientes y panel administrativo en Angular 18, API REST en .NET 8 con arquitectura DDD y cuatro capas de dominio.",
    fullDescription:
      "Sistema integral de gestión hotelera compuesto por tres partes: un sitio web para clientes (Angular 18 + Google Maps), un panel administrativo (Angular 18 + Angular Material) y una API REST (.NET 8 + Entity Framework Core + SQL Server).\n\nEl sitio del cliente incluye un wizard de reservaciones multi-paso con verificación de disponibilidad en tiempo real y sugerencia de alternativas, galería de habitaciones, tarifas por tipo y temporada, mapa interactivo con Google Maps API y geolocalización, carruseles de ofertas y publicidad, y formulario de contacto. El panel administrativo permite gestionar y exportar reservaciones a PDF (jsPDF), controlar la disponibilidad de habitaciones por fecha, crear ofertas y promociones con rangos y descuentos, configurar precios por temporada alta, y editar el contenido de todas las páginas del sitio mediante un CMS integrado.\n\nEl backend se construyó con arquitectura orientada al dominio (DDD) con cuatro capas: API (controladores para Habitación, Reserva, Oferta, Publicidad, Temporada, Tarifas, Facilidad, Contacto y Autenticación), Aplicación (DTOs y servicios de aplicación), Dominio (entidades, interfaces y servicios de dominio) e Infraestructura (repositorios, persistencia con Entity Framework Core y seguridad). Desarrollado con metodología SCRUM.",
    category: "academico",
    technologies: [
      { name: "Angular 18", icon: SiAngular, color: "#DD0031" },
      { name: ".NET 8 / C#", icon: SiDotnet, color: "#512BD4" },
      { name: "Entity Framework", icon: HiDatabase, color: "#68217A" },
      { name: "SQL Server", icon: HiServer, color: "#CC2927" },
      { name: "Google Maps", icon: HiMap, color: "#4285F4" },
    ],
    features: [
      "Wizard de reservaciones multi-paso con verificación de disponibilidad y sugerencia de alternativas",
      "Panel admin con gestión de reservaciones y exportación a PDF con jsPDF y jspdf-autotable",
      "CMS integrado para editar contenido de inicio, sobre nosotros, facilidades y direcciones",
      "Ofertas y promociones con rangos de fecha, descuentos y configuración de temporada alta",
      "Mapa interactivo con Google Maps API, geolocalización y rutas hacia el hotel",
      "Backend DDD en .NET 8 con 4 capas: API, Aplicación, Dominio e Infraestructura con Entity Framework Core",
    ],
    imageGroups: [
      {
        label: "Sitio Web Cliente",
        images: [
          hotelClient1, hotelClient2, hotelClient3, hotelClient4,
          hotelClient5, hotelClient6, hotelClient7,
        ],
      },
      {
        label: "Panel Administrador",
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
