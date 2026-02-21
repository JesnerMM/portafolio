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
} from "react-icons/si";
import { HiShieldCheck, HiMap, HiDatabase, HiTruck } from "react-icons/hi";

export const projects: Project[] = [
  {
    id: "routify-tms",
    title: "Routify TMS",
    shortDescription:
      "Sistema de Gestion de Transporte con panel web, API REST y app movil para conductores con GPS en tiempo real y modo offline.",
    fullDescription:
      "Sistema de Gestion de Transporte (TMS) desarrollado para CyberPro CR, diseñado para administrar operaciones logisticas de entrega. Incluye un panel administrativo web (Vue 3), una API REST robusta (Express/Node) y una app movil para conductores (Flutter) con arquitectura offline-first. El sistema abarca planificacion de rutas, gestion de pedidos, seguimiento GPS en tiempo real, captura de evidencia de entrega (fotos y firma digital), cobros con multiples metodos de pago, y liquidacion financiera en 3 niveles. Mi rol se enfoco en completar funcionalidades del panel web y backend, y en desarrollar la app movil conectando todo el flujo de entrega.",
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
      "Sistema RBAC con 4 roles: Admin, Operador, Cliente y Conductor",
      "Monitoreo GPS en tiempo real con velocidad y direccion en mapa",
      "Flujo de entrega completo: check-in, entrega total/parcial, motivos de rechazo",
      "Evidencia de entrega con fotos y firma digital almacenadas en AWS S3",
      "Cobros multiples: efectivo, tarjeta, cheque, transferencia, SINPE",
      "Liquidacion en 3 niveles: por articulo, por orden y por ruta",
      "Arquitectura offline-first en app movil con sincronizacion inteligente",
      "32 modelos de BD, 20 endpoints, 23 servicios backend",
    ],
    images: [
      "/images/projects/routify-1.png",
      "/images/projects/routify-2.png",
      "/images/projects/routify-3.png",
    ],
  },
  {
    id: "ocr-aeromar",
    title: "OCR Aeromar",
    shortDescription:
      "Plataforma de digitalizacion de documentos con OCR inteligente, desarrollada desde cero para Aeromar.",
    fullDescription:
      "Plataforma empresarial de digitalizacion de documentos mediante OCR inteligente, desarrollada desde cero para Aeromar. Fui responsable de diseñar e implementar la arquitectura completa del sistema: modelado de base de datos con Prisma, API REST con Express, frontend con Next.js, autenticacion segura con JWT firmado con RSA y cookies HttpOnly, y un modelo RBAC para control de acceso por roles. Desarrollado con metodologia SCRUM usando Notion y Slack.",
    category: "profesional",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
      { name: "JWT", icon: HiShieldCheck, color: "#06B6D4" },
    ],
    features: [
      "Arquitectura completa diseñada e implementada desde cero (BD, API, frontend)",
      "OCR inteligente para extraccion y estructuracion automatica de texto",
      "Autenticacion con JWT firmado con RSA y cookies HttpOnly",
      "Modelo RBAC con proteccion de rutas en frontend y backend",
      "Carga de documentos con flujo de aceptacion avanzada",
      "CRUD de usuarios con validaciones robustas",
    ],
    images: [
      "/images/projects/ocr-aeromar-1.png",
      "/images/projects/ocr-aeromar-2.png",
      "/images/projects/ocr-aeromar-3.png",
    ],
  },
  {
    id: "facontpos",
    title: "FACONTPOS",
    shortDescription:
      "Sistema de facturacion electronica y punto de venta con integracion al Ministerio de Hacienda de Costa Rica.",
    fullDescription:
      "Sistema integral de facturacion electronica y punto de venta desarrollado para cumplir con la normativa del Ministerio de Hacienda de Costa Rica. Desarrolle full stack mas de 8 modulos del sistema: proformas con variantes de productos, facturacion sin caja abierta, apartados con historial de pagos, integracion de codigos CABYS, logica de precios diferenciados por sucursal, modulo de compras con redondeo configurable, y exportacion de inventario a Excel. Desarrollado con metodologia SCRUM.",
    category: "profesional",
    technologies: [
      { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
      { name: "Express", icon: SiExpress, color: "#ffffff" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Prisma", icon: SiPrisma, color: "#2D3748" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
    features: [
      "Mas de 8 modulos desarrollados full stack (frontend, backend y base de datos)",
      "Facturacion electronica con integracion directa a la API del Ministerio de Hacienda",
      "Modulo de proformas con variantes de productos y codigos CABYS",
      "Facturacion sin caja abierta con generacion de PDF y multiples metodos de pago",
      "Apartados con historial de pagos parciales, comprobantes y recibos",
      "Precios diferenciados por sucursal integrados en todo el flujo de facturacion",
      "Exportacion de inventario a Excel y paginacion en modulos financieros",
    ],
    images: [
      "/images/projects/facontpos-1.png",
      "/images/projects/facontpos-2.png",
      "/images/projects/facontpos-3.png",
    ],
  },
  {
    id: "solitel-oij",
    title: "Solitel - OIJ",
    shortDescription:
      "Prototipo academico de gestion de solicitudes de telefonia desarrollado para el Organismo de Investigacion Judicial.",
    fullDescription:
      "Prototipo academico desarrollado en colaboracion con el Organismo de Investigacion Judicial (OIJ) de Costa Rica para la gestion de solicitudes de informacion telefonica en casos judiciales, con requerimientos levantados directamente con las partes interesadas del OIJ. El backend se construyo con Clean Architecture y principios SOLID, separando el sistema en capas: API (controladores y DTOs), logica de negocio (modelos y reglas), casos de uso (interfaces y CU), acceso a datos (Entity Framework y contexto) y seguridad. Mi rol fue full stack: inicie la arquitectura del backend, desarrolle el modulo completo de solicitudes de analisis (CRUD de requerimientos, endpoint de aprobacion, interfaces y controladores), implemente la funcionalidad de roles y permisos en el frontend, actualice el modulo de inicio de sesion, y cree los CRUDs de proveedor y oficina.",
    category: "academico",
    technologies: [
      { name: "Angular", icon: SiAngular, color: "#DD0031" },
      { name: ".NET / C#", icon: SiDotnet, color: "#512BD4" },
      { name: "SQL Server", icon: HiDatabase, color: "#CC2927" },
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    ],
    features: [
      "Modelo RBAC con roles y permisos: investigador, jefatura, fiscal, analista, proveedor y administrador",
      "Modulo completo de solicitudes de analisis: CRUD de requerimientos, endpoint de aprobacion e interfaces",
      "Flujos de aprobacion multi-nivel entre los diferentes roles del sistema",
      "Bandeja de solicitudes con paginacion, filtrado por estados y busqueda por caracter",
      "Backend con Clean Architecture y principios SOLID: capas de API, negocio, casos de uso, acceso a datos y seguridad",
      "Requerimientos levantados con partes interesadas reales del OIJ",
    ],
    images: [
      "/images/projects/solitel-1.png",
      "/images/projects/solitel-2.png",
      "/images/projects/solitel-3.png",
    ],
  },
  {
    id: "cupones-online",
    title: "Cupones Online",
    shortDescription:
      "Plataforma de cupones de descuento con aplicacion web y movil para comercios locales.",
    fullDescription:
      "Plataforma completa para la gestion y canje de cupones de descuento para comercios locales. Incluye una aplicacion web para administradores y comercios, y una aplicacion movil para los usuarios finales. Los comercios pueden crear campanas de cupones, establecer condiciones de uso y monitorear el rendimiento de sus promociones.",
    category: "academico",
    technologies: [
      { name: "React", icon: SiReact, color: "#61DAFB" },
      { name: "PHP", icon: SiPhp, color: "#777BB4" },
      { name: ".NET / C#", icon: SiDotnet, color: "#512BD4" },
      { name: "Ionic", icon: SiIonic, color: "#3880FF" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
    features: [
      "Aplicacion web para gestion de campanas de cupones",
      "Aplicacion movil hibrida para canje de cupones",
      "Sistema de geolocalizacion para cupones cercanos",
      "Panel de estadisticas para comercios",
      "Notificaciones push para nuevos cupones",
      "Sistema de puntos y fidelizacion",
    ],
    images: [
      "/images/projects/cupones-1.png",
      "/images/projects/cupones-2.png",
      "/images/projects/cupones-3.png",
    ],
  },
  {
    id: "gestion-hotelera",
    title: "Gestion Hotelera",
    shortDescription:
      "Sistema de gestion hotelera con sitio web para clientes, panel administrativo y API REST con arquitectura DDD.",
    fullDescription:
      "Sistema integral de gestion hotelera compuesto por un sitio web para clientes (Angular 18), un panel administrativo (Angular 18) y una API REST (.NET/C#). El sitio del cliente incluye un wizard de reservaciones multi-paso con verificacion de disponibilidad y sugerencia de alternativas, galeria de imagenes, mapa interactivo con Google Maps y geolocalizacion, carruseles de ofertas y publicidad, tarifas por tipo de habitacion y formulario de contacto. El panel admin permite gestionar reservaciones con exportacion a PDF, administrar disponibilidad de habitaciones, crear ofertas y promociones con rangos de fecha y descuentos, configurar precios por temporada alta, y un CMS para editar todas las paginas del sitio web. El backend se construyo con arquitectura orientada al dominio (DDD), separando el sistema en capas: API (controladores), Dominio (entidades, interfaces y servicios de dominio), Aplicacion (DTOs y servicios) e Infraestructura (repositorios, persistencia, seguridad y servicios externos). Desarrollado con metodologia SCRUM.",
    category: "academico",
    technologies: [
      { name: "Angular", icon: SiAngular, color: "#DD0031" },
      { name: ".NET / C#", icon: SiDotnet, color: "#512BD4" },
      { name: "Google Maps", icon: HiMap, color: "#4285F4" },
      { name: "SQL Server", icon: HiDatabase, color: "#CC2927" },
    ],
    features: [
      "Wizard de reservaciones multi-paso con verificacion de disponibilidad y sugerencia de alternativas",
      "Panel admin con gestion de reservaciones, exportacion a PDF y control de disponibilidad de habitaciones",
      "CMS para editar contenido de todas las paginas del sitio web (inicio, sobre nosotros, facilidades, direcciones)",
      "Ofertas y promociones con rangos de fecha, descuentos y precios por temporada alta",
      "Mapa interactivo con Google Maps API, geolocalizacion y direcciones hacia el hotel",
      "Backend con arquitectura orientada al dominio (DDD): capas de API, Dominio, Aplicacion e Infraestructura",
    ],
    images: [
      "/images/projects/hotel-1.png",
      "/images/projects/hotel-2.png",
      "/images/projects/hotel-3.png",
    ],
  },
];
