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
      badge: "CPIC Member • Available for senior roles",
      hello: "Hello, my name is",
      intro:
        "Full Stack Software Engineer focused on event-driven architectures, high-availability backend systems, fintech integrations, and Web3 / Stellar solutions for critical enterprise environments.",
      ctaPrimary: "View Projects",
      ctaSecondary: "Download CV",
      coreFocus: "Core focus",
      seniorProfile: "Senior profile",
      selectedStack: "Selected stack",
      statLabels: ["Years", "Critical systems", "Membership"],
      statValues: ["1+", "6+", "CPIC"],
      focusItems: [
        "Event-driven architecture",
        "Distributed systems",
        "Web3 / Stellar",
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
        "Web3 / Stellar",
        "Fintech integrations",
      ],
      p1:
        "I am Jesner Melgara, a Full Stack Software Engineer focused on Web3, distributed systems, event-driven architectures, and high-availability backend solutions. My experience spans React, Next.js, Angular, Ionic, Node.js, .NET / C#, PostgreSQL, Oracle DB, and deployments with Docker and Azure.",
      p2:
        "Active Collegiate Member of the CPIC (Colegio de Profesionales en Informática y Computación de Costa Rica), with a strong interest in critical systems, digital finance, payment infrastructure, process automation, and Web3 / Stellar ecosystems.",
      p3:
        "I have worked on complex enterprise platforms, intelligent OCR systems, and port logistics solutions, always with a focus on quality, traceability, security, and scalability.",
      stats: [
        { label: "Professional focus", value: "Web3 / Fintech" },
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
      filters: [
        { label: "All", value: "todos" },
        { label: "Professional", value: "profesional" },
      ],
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
      formTitle: "Send a Message",
      labels: {
        email: "Email",
        phone: "Phone",
        location: "Location",
        linkedin: "LinkedIn",
        name: "Name",
        message: "Message",
      },
      placeholders: {
        name: "Your name",
        email: "your@email.com",
        message: "Tell me about your project...",
      },
      send: "Send Message",
      sending: "Sending...",
      success:
        "Message sent successfully. I’ll get back to you soon.",
      error:
        "Something went wrong while sending. Please try again or contact me directly.",
      sendMessage: "Send a Message",
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
      badge: "Miembro de CPIC • Disponible para roles senior",
      hello: "Hola, mi nombre es",
      intro:
        "Ingeniero de software Full Stack enfocado en arquitecturas orientadas a eventos, sistemas backend de alta disponibilidad, integraciones fintech y soluciones Web3 / Stellar para entornos empresariales críticos.",
      ctaPrimary: "Ver proyectos",
      ctaSecondary: "Descargar CV",
      coreFocus: "Enfoque principal",
      seniorProfile: "Perfil senior",
      selectedStack: "Stack seleccionado",
      statLabels: ["Años", "Sistemas críticos", "Membresía"],
      statValues: ["1+", "6+", "CPIC"],
      focusItems: [
        "Arquitectura orientada a eventos",
        "Sistemas distribuidos",
        "Web3 / Stellar",
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
        "Web3 / Stellar",
        "Integraciones fintech",
      ],
      p1:
        "Soy Jesner Melgara, Ingeniero de Software Full Stack enfocado en Web3, sistemas distribuidos, arquitecturas orientadas a eventos y soluciones backend de alta disponibilidad. Mi experiencia abarca React, Next.js, Angular, Ionic, Node.js, .NET / C#, PostgreSQL, Oracle DB y despliegues con Docker y Azure.",
      p2:
        "Miembro colegiado activo del CPIC (Colegio de Profesionales en Informática y Computación de Costa Rica), con gran interés en sistemas críticos, finanzas digitales, infraestructura de pagos, automatización de procesos y ecosistemas Web3 / Stellar.",
      p3:
        "He trabajado en plataformas empresariales complejas, sistemas inteligentes de OCR y soluciones logísticas portuarias, siempre con enfoque en calidad, trazabilidad, seguridad y escalabilidad.",
      stats: [
        { label: "Enfoque profesional", value: "Web3 / Fintech" },
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
      filters: [
        { label: "Todos", value: "todos" },
        { label: "Profesional", value: "profesional" },
      ],
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
      formTitle: "Enviar mensaje",
      labels: {
        email: "Correo",
        phone: "Teléfono",
        location: "Ubicación",
        linkedin: "LinkedIn",
        name: "Nombre",
        message: "Mensaje",
      },
      placeholders: {
        name: "Tu nombre",
        email: "tu@email.com",
        message: "Cuéntame sobre tu proyecto...",
      },
      send: "Enviar mensaje",
      sending: "Enviando...",
      success: "Mensaje enviado correctamente. Te responderé pronto.",
      error:
        "Hubo un problema al enviar el mensaje. Inténtalo de nuevo o contáctame directamente.",
      sendMessage: "Enviar mensaje",
    },
  },
} as const;
