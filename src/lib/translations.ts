export type Language = "en" | "es";

export const translations = {
  en: {
    nav: [
      { label: "Home", href: "#inicio" },
      { label: "About", href: "#sobre-mi" },
      { label: "Experience", href: "#experiencia" },
      { label: "Projects", href: "#proyectos" },
      { label: "Skills", href: "#habilidades" },
      { label: "Education", href: "#educacion" },
      { label: "Contact", href: "#contacto" },
    ],
    hero: {
      badge: "CPIC Member • Open to engineering opportunities",
      hello: "Hello, my name is",
      intro:
        "Full Stack Software Engineer focused on event-driven architectures, high-availability backend systems, fintech integrations, and enterprise software solutions.",
      ctaPrimary: "View Projects",
      ctaSecondary: "Download CV",
      coreFocus: "Core focus",
      seniorProfile: "Engineer profile",
      selectedStack: "Selected stack",
      statLabels: ["Years", "Critical systems", "Membership"],
      statValues: ["1+", "6+", "CPIC"],
      focusItems: [
        "Event-driven architecture",
        "Distributed systems",
        "Process automation",
        "Fintech integration",
      ],
      stackItems: [
        ".NET / C#",
        "Angular",
        "React",
        "Next.js",
        "PostgreSQL",
        "Oracle DB",
        "Docker",
        "Azure",
      ],
    },
    about: {
      title: "About",
      subtitle: "A bit more about me",
      tags: [
        "Event-driven architectures",
        "Distributed systems",
        "Process automation",
        "Fintech integrations",
      ],
      p1:
        "I am Jesner Melgara, a Full Stack Software Engineer focused on distributed systems, event-driven architectures, and high-availability backend solutions. My experience spans React, Next.js, Angular, Ionic, Node.js, .NET / C#, PostgreSQL, Oracle DB, and deployments with Docker and Azure.",
      p2:
        "Active Collegiate Member of the CPIC (Colegio de Profesionales en Informática y Computación de Costa Rica), with a strong interest in critical systems, digital finance, payment infrastructure, and process automation.",
      p3:
        "I have worked on complex enterprise platforms, intelligent OCR systems, and port logistics solutions, always with a focus on quality, traceability, security, and scalability.",
      stats: [
        { label: "Professional focus", value: "Fintech & automation" },
        { label: "Critical systems", value: "6+" },
        { label: "CPIC", value: "Member" },
      ],
    },
    experience: {
      title: "Experience",
      subtitle: "My professional journey",
    },
    projects: {
      title: "Key Engineering Projects",
      subtitle:
        "Selected work across distributed systems, fintech, and enterprise platforms",
    },
    skills: {
      title: "Skills",
      subtitle: "Technologies and tools I work with",
    },
    education: {
      title: "Education",
      subtitle: "My academic background",
      degreeTitle: "Business Informatics Bachelor's Degree",
      period: "2021 - 2025",
      description:
        "Comprehensive training in software development, database design, requirements engineering, IT project management, and business administration, with a focus on technology solutions for the enterprise sector.",
    },
    contact: {
      title: "Contact",
      subtitle: "Let’s talk about your project",
      infoTitle: "Contact Information",
      labels: {
        email: "Email",
        phone: "Phone",
        location: "Location",
        linkedin: "LinkedIn",
      },
    },
  },
  es: {
    nav: [
      { label: "Inicio", href: "#inicio" },
      { label: "Sobre mí", href: "#sobre-mi" },
      { label: "Experiencia", href: "#experiencia" },
      { label: "Proyectos", href: "#proyectos" },
      { label: "Habilidades", href: "#habilidades" },
      { label: "Educación", href: "#educacion" },
      { label: "Contacto", href: "#contacto" },
    ],
    hero: {
      badge: "Miembro de CPIC • Abierto a oportunidades de ingeniería",
      hello: "Hola, mi nombre es",
      intro:
        "Ingeniero de software Full Stack enfocado en arquitecturas orientadas a eventos, sistemas backend de alta disponibilidad, integraciones fintech y soluciones empresariales.",
      ctaPrimary: "Ver proyectos",
      ctaSecondary: "Descargar CV",
      coreFocus: "Enfoque principal",
      seniorProfile: "Perfil de ingeniero",
      selectedStack: "Stack seleccionado",
      statLabels: ["Años", "Sistemas críticos", "Membresía"],
      statValues: ["1+", "6+", "CPIC"],
      focusItems: [
        "Arquitectura orientada a eventos",
        "Sistemas distribuidos",
        "Automatización de procesos",
        "Integración fintech",
      ],
      stackItems: [
        ".NET / C#",
        "Angular",
        "React",
        "Next.js",
        "PostgreSQL",
        "Oracle DB",
        "Docker",
        "Azure",
      ],
    },
    about: {
      title: "Sobre mí",
      subtitle: "Un poco más sobre mí",
      tags: [
        "Arquitecturas orientadas a eventos",
        "Sistemas distribuidos",
        "Automatización de procesos",
        "Integraciones fintech",
      ],
      p1:
        "Soy Jesner Melgara, Ingeniero de Software Full Stack enfocado en sistemas distribuidos, arquitecturas orientadas a eventos y soluciones backend de alta disponibilidad. Mi experiencia abarca React, Next.js, Angular, Ionic, Node.js, .NET / C#, PostgreSQL, Oracle DB y despliegues con Docker y Azure.",
      p2:
        "Miembro colegiado activo del CPIC (Colegio de Profesionales en Informática y Computación de Costa Rica), con gran interés en sistemas críticos, finanzas digitales, infraestructura de pagos y automatización de procesos.",
      p3:
        "He trabajado en plataformas empresariales complejas, sistemas inteligentes de OCR y soluciones logísticas portuarias, siempre con enfoque en calidad, trazabilidad, seguridad y escalabilidad.",
      stats: [
        { label: "Enfoque profesional", value: "Fintech y automatización" },
        { label: "Sistemas críticos", value: "6+" },
        { label: "CPIC", value: "Miembro" },
      ],
    },
    experience: {
      title: "Experiencia",
      subtitle: "Mi trayectoria profesional",
    },
    projects: {
      title: "Proyectos clave de ingeniería",
      subtitle:
        "Trabajos seleccionados en sistemas distribuidos, fintech y plataformas empresariales",
    },
    skills: {
      title: "Habilidades",
      subtitle: "Tecnologías y herramientas con las que trabajo",
    },
    education: {
      title: "Educación",
      subtitle: "Mi formación académica",
      degreeTitle: "Licenciatura en Informática Empresarial",
      period: "2021 - 2025",
      description:
        "Formación integral en desarrollo de software, diseño de bases de datos, ingeniería de requisitos, gestión de proyectos de TI y administración empresarial, con enfoque en soluciones tecnológicas para el sector empresarial.",
    },
    contact: {
      title: "Contacto",
      subtitle: "Hablemos sobre tu proyecto",
      infoTitle: "Información de contacto",
      labels: {
        email: "Correo",
        phone: "Teléfono",
        location: "Ubicación",
        linkedin: "LinkedIn",
      },
    },
  },
} as const;
