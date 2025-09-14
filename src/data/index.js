import { Sun, Moon, Palette, Rocket } from "lucide-react";
import Planet1 from "@/components/planets/Planet1";
import Planet2 from "@/components/planets/Planet2";
import Planet3 from "@/components/planets/Planet3";
import Planet4 from "@/components/planets/Planet4";
import Planet5 from "@/components/planets/Planet5";

export const themes = [
  { id: "space", name: "Espacio", icon: Rocket, color: "#00f7ff" },
  { id: "light", name: "Claro", icon: Sun, color: "#8b5cf6" },
];

export const navLinks = [
  { id: "inicio", name: "Base", PlanetComponent: Planet1 },
  { id: "sobre-mi", name: "Sobre Mí", PlanetComponent: Planet2 },
  { id: "experiencia", name: "Experiencia", PlanetComponent: Planet3 },
  { id: "proyectos", name: "Proyectos", PlanetComponent: Planet4 },
  { id: "contacto", name: "Contacto", PlanetComponent: Planet5 },
];

export const skills = [
  { name: "React / Next.js", level: 95, color: "var(--pastel-blue)" },
  { name: "Node.js / Express", level: 90, color: "var(--pastel-green)" },
  { name: "TypeScript", level: 88, color: "var(--pastel-purple)" },
  { name: "Python / FastAPI", level: 85, color: "var(--pastel-yellow)" },
  { name: "PostgreSQL / MongoDB", level: 82, color: "var(--pastel-pink)" },
  { name: "AWS / Docker", level: 80, color: "var(--pastel-orange)" },
];

export const projects = [
  {
    id: 1,
    title: "Generador de Gráficas Dinámicas con Highcharts",
    description:
      "Endpoint backend que genera imágenes de gráficas personalizadas a partir de datos y configuraciones enviadas por el cliente. La solución permite automatizar reportes visuales y sigue siendo utilizada activamente en entornos productivos.",
    images: ["https://placehold.co/100x80", "https://placehold.co/100x80"],
    tags: ["backend", "automatización", "reporte visual"],
    stack: [
      { name: "python", color: "blue", icon: "logos:python" },
      { name: "flask", color: "orange", icon: "logos:flask" },
      { name: "docker", color: "blue", icon: "logos:docker-icon" },
      { name: "highcharts", color: "red", icon: "logos:highcharts" },
    ],
    urlRepo: "https://github.com/darensh-dev/highcharts-image-exporter",
    urlDeploy: "",
    date: "2022-10-01",
    author: "Darensh.dev",
    level: "advanced",
    featured: true,
  },
  {
    id: 2,
    title: "Detección de Placas Vehiculares con CropperJS",
    description:
      "Aplicación web que permite seleccionar regiones de imágenes con CropperJS para detectar y aislar placas de vehículos. El sistema procesa la imagen recortada para identificar y extraer la matrícula, siendo útil como paso previo a reconocimiento de texto (OCR) o análisis de tráfico.",
    images: ["https://placehold.co/100x80", "https://placehold.co/100x80"],
    tags: ["image processing", "UI interactivity", "detección visual"],
    stack: [
      { name: "vue", color: "blue", icon: "logos:vue" },
      { name: "cropperjs", color: "green", icon: "mdi:crop" },
      { name: "typescript", color: "blue", icon: "logos:typescript-icon" },
      { name: "tailwind", color: "blue", icon: "logos:tailwindcss-icon" },
    ],
    urlRepo: "https://github.com/darensh-dev/placa-cropper",
    urlDeploy: "https://placa-cropper.vercel.app",
    date: "2024-04-10",
    author: "Darensh.dev",
    level: "intermediate",
    featured: true,
  },
  {
    id: 3, // Ajusta según tu numeración
    title: "gclit - Git CLI Assistant",
    description:
      "Asistente de línea de comandos potenciado por LLMs que genera automáticamente mensajes de commit inteligentes y documentación de pull requests analizando los diffs de Git. Soporta múltiples proveedores de Git y LLM con arquitectura hexagonal.",
    images: ["https://placehold.co/100x80", "https://placehold.co/100x80"], // Reemplaza con screenshots reales de tu CLI
    tags: ["CLI", "AI-powered", "Git automation", "opensource", "license MIT"],
    stack: [
      { name: "Python", color: "blue", icon: "logos:python" },
      { name: "OpenAI", color: "green", icon: "simple-icons:openai" },
      { name: "GitHub API", color: "black", icon: "logos:github-icon" },
      { name: "Azure DevOps", color: "blue", icon: "logos:azure" },
      { name: "Typer", color: "purple", icon: "simple-icons:python" }, // CLI framework
      { name: "Pydantic", color: "red", icon: "simple-icons:pydantic" },
    ],
    urlRepo: "https://github.com/darensh-dev/gclit", // Reemplaza con tu URL real
    urlDeploy: null, // Es una herramienta CLI, no tiene deploy web
    date: "2024-12-01", // Ajusta con la fecha real de creación
    author: "Darensh.dev",
    level: "intermediate", // Considerando la complejidad del proyecto
    featured: true, // Es un proyecto bastante completo e innovador
  },
  {
    id: 4, // Ajusta según tu numeración
    title: "Control de Gastos Personales",
    description:
      "Sistema completo de control de gastos personales con Clean Architecture. Permite clasificar gastos, asignar presupuestos mensuales, registrar depósitos y generar reportes comparativos entre presupuestado vs ejecutado con autenticación JWT.",
    images: ["https://placehold.co/100x80", "https://placehold.co/100x80"], // Reemplaza con screenshots de la API/Swagger y reportes
    tags: [
      "Clean Architecture",
      "Personal Finance",
      "API REST",
      "Multi-tenant",
      "opensource",
    ],
    stack: [
      { name: "C#", color: "purple", icon: "logos:c-sharp" },
      { name: ".NET 8", color: "purple", icon: "logos:dotnet" },
      { name: "ASP.NET Core", color: "blue", icon: "simple-icons:dotnet" },
      { name: "Entity Framework", color: "blue", icon: "simple-icons:dotnet" },
      { name: "SQL Server", color: "red", icon: "logos:microsoft-sql-server" },
      { name: "JWT", color: "black", icon: "simple-icons:jsonwebtokens" },
      { name: "Amazon S3", color: "orange", icon: "logos:aws-s3" },
      { name: "Azure", color: "blue", icon: "logos:microsoft-azure" },
    ],
    urlRepo: "https://github.com/darensh-dev/ExpenseControlApi", // Reemplaza con tu URL real
    urlDeploy: "", // Reemplaza con tu URL de deploy real
    date: "2024-11-01", // Ajusta con la fecha real de creación
    author: "Tu Nombre",
    level: "advanced", // Considerando Clean Architecture y complejidad del dominio
    featured: true, // Es un proyecto complejo y bien arquitecturado
  },
  {
    id: 5, // Ajusta según tu numeración
    title: "Gestión de Gastos Web",
    description:
      "Aplicación web moderna desarrollada en Vue.js para la gestión completa de fondos monetarios, depósitos, presupuestos y gastos empresariales. Interfaz responsiva con componentes avanzados y validación de formularios en tiempo real.",
    images: ["https://placehold.co/100x80", "https://placehold.co/100x80"], // Reemplaza con screenshots de la interfaz
    tags: [
      "Vue.js",
      "Frontend",
      "Personal Finance",
      "SPA",
      "Responsive Design",
    ],
    stack: [
      { name: "Vue 3", color: "green", icon: "logos:vue" },
      { name: "Vite", color: "purple", icon: "logos:vitejs" },
      { name: "Pinia", color: "yellow", icon: "logos:pinia" },
      { name: "PrimeVue", color: "blue", icon: "simple-icons:primevue" },
      { name: "Tailwind CSS", color: "blue", icon: "logos:tailwindcss-icon" },
      { name: "TypeScript", color: "blue", icon: "logos:typescript-icon" },
      { name: "Zod", color: "blue", icon: "simple-icons:zod" },
      { name: "Docker", color: "blue", icon: "logos:docker-icon" },
    ],
    urlRepo: "https://github.com/darensh-dev/ExpenseControlFrontend", // Reemplaza con tu URL real
    urlDeploy: "", // Reemplaza con tu URL de deploy real
    date: "2024-11-01", // Ajusta con la fecha real de creación
    author: "Tu Nombre",
    level: "intermediate", // Buen dominio de Vue.js y arquitectura frontend
    featured: true, // Complementa perfectamente el backend y demuestra full-stack skills
  },
  // {
  //   id: 6, // Ajusta según tu numeración
  //   title: "ExpenseControl - Sistema Completo de Gestión de Gastos",
  //   description:
  //     "Solución full-stack completa para control de gastos personales y empresariales. Backend con Clean Architecture en .NET 8 y frontend moderno en Vue.js. Incluye gestión de fondos, presupuestos, reportes comparativos y autenticación JWT con interfaz responsiva.",
  //   images: ["https://placehold.co/100x80", "https://placehold.co/100x80"], // Screenshots del dashboard, API docs, arquitectura
  //   tags: [
  //     "Full-stack",
  //     "Clean Architecture",
  //     "Personal Finance",
  //     "SPA",
  //     "Multi-tenant",
  //     "Enterprise",
  //   ],
  //   stack: [
  //     // Backend
  //     { name: "C#", color: "purple", icon: "logos:c-sharp" },
  //     { name: ".NET 8", color: "purple", icon: "logos:dotnet" },
  //     { name: "Entity Framework", color: "blue", icon: "simple-icons:dotnet" },
  //     { name: "SQL Server", color: "red", icon: "logos:microsoft-sql-server" },
  //     { name: "JWT", color: "black", icon: "simple-icons:jsonwebtokens" },
  //     // Frontend
  //     { name: "Vue 3", color: "green", icon: "logos:vue" },
  //     { name: "Vite", color: "purple", icon: "logos:vitejs" },
  //     { name: "Pinia", color: "yellow", icon: "logos:pinia" },
  //     { name: "Tailwind CSS", color: "blue", icon: "logos:tailwindcss-icon" },
  //     { name: "PrimeVue", color: "blue", icon: "simple-icons:primevue" },
  //     // Infrastructure
  //     { name: "Docker", color: "blue", icon: "logos:docker-icon" },
  //     { name: "Azure", color: "blue", icon: "logos:microsoft-azure" },
  //     { name: "Amazon S3", color: "orange", icon: "logos:aws-s3" },
  //   ],
  //   urlRepo: "", // Repo principal o monorepo
  //   urlDeploy: "", // URL del frontend desplegado
  //   date: "2024-11-01", // Fecha del proyecto completo
  //   author: "Tu Nombre",
  //   level: "advanced", // Es una solución completa y compleja
  //   featured: true, // Definitivamente destacado por ser full-stack
  //   // Campos adicionales opcionales para proyectos full-stack
  //   repositories: [
  //     {
  //       name: "Backend API",
  //       url: "https://github.com/tu-usuario/ExpenseControlApi",
  //       description: "REST API con Clean Architecture",
  //     },
  //     {
  //       name: "Frontend Web",
  //       url: "https://github.com/tu-usuario/ExpenseControlFrontend",
  //       description: "Aplicación web Vue.js",
  //     },
  //   ],
  //   deployments: [
  //     {
  //       name: "API",
  //       url: "https://expense-api.azurewebsites.net",
  //       type: "backend",
  //     },
  //     {
  //       name: "Web App",
  //       url: "https://expense-control.vercel.app",
  //       type: "frontend",
  //     },
  //   ],
  // },
  {
    id: 7,
    title: "Legends Management System - Technical Challenge",
    description:
      "Sistema full-stack para gestión de leyendas con categorización geográfica. Backend FastAPI con SQLModel y almacenamiento S3, frontend Vue.js con TypeScript. Incluye testing completo y containerización Docker.",
    images: ["https://placehold.co/100x80", "https://placehold.co/100x80"],
    tags: [
      "Technical Challenge",
      "Full-stack",
      "FastAPI",
      "Vue.js",
      "Geolocation",
      "File Upload",
    ],
    stack: [
      // Backend
      { name: "Python", color: "blue", icon: "logos:python" },
      { name: "FastAPI", color: "green", icon: "simple-icons:fastapi" },
      { name: "SQLModel", color: "red", icon: "simple-icons:sqlite" },
      { name: "MinIO", color: "red", icon: "simple-icons:minio" },
      // Frontend
      { name: "Vue 3", color: "green", icon: "logos:vue" },
      { name: "TypeScript", color: "blue", icon: "logos:typescript-icon" },
      { name: "Tailwind CSS", color: "blue", icon: "logos:tailwindcss-icon" },
      { name: "Vite", color: "purple", icon: "logos:vitejs" },
      // Testing & Tools
      { name: "Playwright", color: "green", icon: "simple-icons:playwright" },
      { name: "Docker", color: "blue", icon: "logos:docker-icon" },
    ],
    repositories: [
      {
        name: "Backend API",
        url: "https://github.com/darensh-dev//4thewords_backend_daren_salazar",
        description: "FastAPI + SQLModel + MinIO",
      },
      {
        name: "Frontend App",
        url: "https://github.com/darensh-dev/4thewords_frontend_daren_salazar",
        description: "Vue.js + TypeScript + Testing",
      },
    ],
    urlRepo: "https://github.com/darensh-dev//4thewords_backend_daren_salazar",
    urlDeploy: "https://legends-app.vercel.app", // Si lo desplegaste
    date: "2024-10-01", // Fecha aproximada
    author: "Tu Nombre",
    level: "intermediate",
    featured: true, // Es un buen proyecto para destacar
  },
  {
    id: 8,
    title: "CitizenSpace - Sistema de Consulta de Infracciones",
    description:
      "Aplicación web empresarial en Angular 20 para consulta de infracciones de tránsito. Implementa patrones de diseño avanzados, arquitectura standalone components, CI/CD automatizado y optimizaciones de rendimiento. Incluye validación robusta, manejo multimedia y deployment a producción.",
    images: ["https://placehold.co/100x80", "https://placehold.co/100x80"],
    tags: [
      "Technical Challenge",
      "Angular",
      "Enterprise",
      "CI/CD",
      "Design Patterns",
      "Performance",
    ],
    stack: [
      { name: "Angular 20", color: "red", icon: "logos:angular-icon" },
      { name: "TypeScript", color: "blue", icon: "logos:typescript-icon" },
      { name: "RxJS", color: "purple", icon: "simple-icons:reactivex" },
      { name: "PrimeNG", color: "blue", icon: "simple-icons:primeng" },
      { name: "TailwindCSS", color: "blue", icon: "logos:tailwindcss-icon" },
      { name: "Zod", color: "blue", icon: "simple-icons:zod" },
      { name: "Karma", color: "green", icon: "simple-icons:karma" },
      { name: "GitHub Actions", color: "black", icon: "logos:github-actions" },
      { name: "Nginx", color: "green", icon: "logos:nginx" },
      { name: "Linux VPS", color: "yellow", icon: "logos:linux-tux" },
    ],
    urlRepo: "https://github.com/tu-usuario/citizen-space",
    urlDeploy: "https://ciudadano.tu-dominio.com", // Si está desplegado
    date: "2024-12-01",
    author: "Tu Nombre",
    level: "advanced", // Definitivamente avanzado
    featured: true, // DEBE estar destacado

    // Características especiales para destacar
    highlights: [
      "Standalone Components Architecture",
      "Design Patterns Implementation",
      "CI/CD Pipeline with GitHub Actions",
      "Performance Optimizations",
      "Enterprise-grade Security",
    ],
  },
];

export const experiences = [
  {
    company: "Vanillabyte",
    position: "Fundador & CTO",
    period: "04/2024 - Presente",
    location: "Remoto, Colombia",
    description: `
      Desde 2024 lidero Vanillabyte, una iniciativa de desarrollo de software en la que gestiono proyectos
      tecnológicos end-to-end para clientes empresariales. Combino dirección técnica con ejecución práctica,
      desde diseño en Figma hasta desarrollo de soluciones funcionales.
    `,
    achievements: [
      "Desarrollé una landing page profesional para una empresa del sector Automobilistico, optimizada para velocidad, SEO y captación de clientes.",
      "Diseñé y construí un design system completo en Angular, desde su estructura visual en Figma hasta componentes reutilizables funcionales, adaptados a los requerimientos de futuras integraciones.",
      "Gestioné todas las etapas de desarrollo en ambos casos: levantamiento de requerimientos, arquitectura, implementación, QA y despliegue.",
    ],
    skills: [
      { name: "Angular", icon: "logos:angular-icon" },
      { name: "Vue.JS 3", icon: "logos:vue" },
      { name: "React", icon: "logos:react" },
      { name: "React Native", icon: "logos:react" },
      { name: "HTML", icon: "logos:html-5" },
      { name: "CSS", icon: "logos:css-3" },
      { name: "Tailwind", icon: "logos:tailwindcss-icon" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Pinia", icon: "logos:pinia" },
      { name: "Figma", icon: "logos:figma" },
      { name: "Zod", icon: "logos:zod" },
      { name: "AWS", icon: "logos:aws" },
      { name: "Python", icon: "logos:python" },
      { name: "FastApi", icon: "logos:fastapi-icon" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "OpenAI", icon: "logos:openai-icon" },
      { name: "LLM", icon: "mdi:chip-arrow-down" },
      { name: "Git", icon: "logos:git-icon" },
      { name: "GitHub", icon: "logos:github-icon" },
      { name: "Bash", icon: "logos:bash-icon" },
      { name: "Linux", icon: "logos:linux-tux" },
      { name: "Hexagonal Architecture", icon: "mdi:hexagon-slice-6" },
      { name: "Principles SOLID", icon: "logos:solid" },
      { name: "RAG (Retrieval-Augmented Generation)", icon: "mdi:storage" },
    ],
    companyUrl: "https://www.vanilla-byte.com",
  },
  {
    company: "Sainapsis Inc",
    position: "Desarrollador FullStack",
    period: "04/2024 - 02/2025",
    location: "Remoto, EE.UU.",
    description: `
      Diseñé y desarrollé soluciones de software end-to-end orientadas a la escalabilidad, mantenibilidad y automatización inteligente,
      contribuyendo directamente al fortalecimiento de la infraestructura técnica de la empresa.
      Implementé funcionalidades con inteligencia artificial para potenciar la innovación del producto final.
    `,
    achievements: [
      "Desarrollé un task manager inteligente que detectaba automáticamente tareas dentro de mensajes de clientes, integrando frontend, backend y diseño de base de datos, con una arquitectura hexagonal agnóstica a LLMs.",
      "Fui pionero en la adopción de esta arquitectura dentro de la empresa, creando proyectos base reutilizables para futuras funcionalidades de IA.",
      "Implementé hard-sync en la app móvil, usando Zod para validar datos y garantizar sincronización confiable incluso offline.",
      "Diseñé microservicios modulares y escalables aplicando principios SOLID que facilitaron el desarrollo de nuevas funcionalidades sin comprometer estabilidad.",
      "Establecí buenas prácticas técnicas adoptadas por otros equipos, mejorando la calidad y consistencia del código",
    ],
    skills: [
      { name: "React", icon: "logos:react" },
      { name: "React Native", icon: "logos:react" },
      { name: "Tailwind", icon: "logos:tailwindcss-icon" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Figma", icon: "logos:figma" },
      { name: "Zod", icon: "logos:zod" },
      { name: "AWS", icon: "logos:aws" },
      { name: "Python", icon: "logos:python" },
      { name: "FastApi", icon: "logos:fastapi-icon" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "OpenAI", icon: "logos:openai-icon" },
      { name: "LLM", icon: "mdi:chip-arrow-down" },
      { name: "SQLite", icon: "logos:sqlite" },
      { name: "Redis", icon: "logos:redis" },
      { name: "Open Search", icon: "logos:aws-open-search" },
      { name: "GraphQL", icon: "logos:graphql" },
      { name: "Go", icon: "logos:go" },
      { name: "Git", icon: "logos:git-icon" },
      { name: "GitHub", icon: "logos:github-icon" },
      { name: "Bash", icon: "logos:bash-icon" },
      { name: "Linux", icon: "logos:linux-tux" },
      { name: "ZenHub", icon: "logos:zenhub-icon" },
      { name: "Hexagonal Architecture", icon: "mdi:hexagon-slice-6" },
      { name: "Principles SOLID", icon: "logos:solid" },
      { name: "RAG (Retrieval-Augmented Generation)", icon: "mdi:storage" },
    ],
    companyUrl: "https://www.sainapsis.com",
  },
  {
    company: "Alfa Eye",
    position: "Desarrollador FullStack",
    period: "09/2022 - 01/2024",
    location: "Remoto, Dublin Irlanda",
    description: `
      Lideré el desarrollo de soluciones digitales estratégicas para ALFAEYE,
      gestionando el ciclo completo de proyectos: desde el levantamiento de requerimientos hasta el despliegue en producción.
      Coordiné la integración entre equipos, asegurando la entrega de productos robustos,
      escalables y alineados con los objetivos del negocio.
    `,
    achievements: [
      "Diseñé y desarrollé desde cero la plataforma principal de ALFAEYE, llevando el proyecto desde requerimientos hasta producción y convirtiéndolo en un producto clave para la operación interna y de clientes.",
      "Logré reducir los tiempos de entrega y errores en despliegues mediante la implementación de pipelines estables y entornos Docker seguros y versionados.",
      "Optimizé la comunicación entre backend y frontend mediante una arquitectura clara y desacoplada, mejorando el rendimiento y reduciendo errores de integración en un 40%.",
      "Estandaricé estructuras de bases de datos flexibles y escalables, facilitando futuras integraciones con nuevos módulos y funcionalidades.",
      "Consolidé procesos de desarrollo que aumentaron la estabilidad del producto en producción, reduciendo incidencias técnicas post-lanzamiento en un 70%.",
    ],
    skills: [
      { name: "Vue.JS 3", icon: "logos:vue" },
      { name: "HTML", icon: "logos:html-5" },
      { name: "CSS", icon: "logos:css-3" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "HighCharts", icon: "logos:highcharts" },
      { name: "PrimeVue", icon: "mdi:file-compare" },
      { name: "Pinia", icon: "logos:pinia" },
      { name: "Python", icon: "logos:python" },
      { name: "Flask", icon: "logos:flask" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "Sentry", icon: "vscode-icons:file-type-sentry" },
      { name: "JSON", icon: "mdi:code-json" },
      { name: "Azure", icon: "logos:microsoft-azure" },
      { name: "AWS", icon: "logos:aws" },
      { name: "SQL Server", icon: "logos:microsoft-icon" },
      { name: "SQL", icon: "vscode-icons:file-type-sql" },
      { name: "SP/SQL", icon: "vscode-icons:file-type-sql" },
      { name: "CI/CD", icon: "mdi:chemical-weapon" },
      { name: "Redis", icon: "logos:redis" },
      { name: "Nginx", icon: "logos:nginx" },
      { name: "Principles SOLID", icon: "logos:solid" },
      { name: "Microservicios", icon: "mdi:local-area-network" },
      { name: "Git", icon: "logos:git-icon" },
      { name: "GitHub", icon: "logos:github-icon" },
      { name: "GitLab", icon: "logos:gitlab" },
      { name: "Bash", icon: "logos:bash-icon" },
      { name: "Linux", icon: "logos:linux-tux" },
    ],
    companyUrl: "https://alfaeye.com/en/",
  },
  {
    company: "Energia Solar ESWindows",
    position: "Ingeniero de desarrollo de software",
    period: "01/2022 - 03/2023",
    location: "Barranquilla, Colombia",
    description: `
      Lideré el desarrollo de microservicios y el diseño de interfaces modernas,
      contribuyendo al crecimiento tecnológico de la empresa.
      Combiné backend robusto con frontend enfocado en experiencia de usuario,
      entregando soluciones escalables, funcionales y visualmente consistentes.
    `,
    achievements: [
      "Desarrollé un endpoint dinámico capaz de renderizar imágenes a partir de datos y configuraciones personalizadas (colores, etiquetas, tipo de gráfico), utilizando Flask, Highcharts y Docker. La solución sigue en uso como herramienta clave en la generación automática de reportes visuales, adaptándose a múltiples casos de uso sin requerir cambios de código.",
      "Desarrollé microservicios escalables en Python que mejoraron la capacidad de respuesta del sistema ante cargas crecientes y nuevas funcionalidades del negocio.",
      "Diseñé y desplegué interfaces con Vue.js que mejoraron la experiencia de usuario, combinando funcionalidad y estética en plataformas internas clave.",
      "Transformé la interfaz de usuario mediante la integración de Vuetify, logrando mayor coherencia visual y reduciendo los errores de navegación en entornos productivos.",
      "Introduje buenas prácticas de desarrollo frontend y patrones de diseño que facilitaron el mantenimiento y evolución de la interfaz.",
    ],
    skills: [
      { name: "Vue.JS 2", icon: "logos:vue" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "HTML", icon: "logos:html-5" },
      { name: "CSS", icon: "logos:css-3" },
      { name: "Vuex", icon: "logos:pinia" },
      { name: "HighCharts", icon: "logos:highcharts" },
      { name: "VuetifyJS", icon: "logos:vuetifyjs" },
      { name: "Vite Test", icon: "logos:vitest" },
      { name: "Python Test", icon: "vscode-icons:file-type-pytest" },
      { name: "Python", icon: "logos:python" },
      { name: "Flask", icon: "logos:flask" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "Sentry", icon: "vscode-icons:file-type-sentry" },
      { name: "JSON", icon: "mdi:code-json" },
      { name: "MySQL", icon: "vscode-icons:file-type-mysql" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "SQL Server", icon: "logos:microsoft-icon" },
      { name: "PL/SQL", icon: "vscode-icons:file-type-sql" },
      { name: "SQL", icon: "vscode-icons:file-type-sql" },
      { name: "Nginx", icon: "logos:nginx" },
      { name: "Git", icon: "logos:git-icon" },
      { name: "GitHub", icon: "logos:github-icon" },
      { name: "GitLab", icon: "logos:gitlab" },
      { name: "Bash", icon: "logos:bash-icon" },
      { name: "Linux", icon: "logos:linux-tux" },
      { name: "Principles SOLID", icon: "logos:solid" },
      { name: "Microservicios", icon: "mdi:local-area-network" },
    ],
    companyUrl: "https://eswindows.com/es/nuestra-compania",
  },
  {
    company: "Construseñales S.A",
    position: "Desarrollador junior",
    period: "01/2021 - 01/2022",
    location: "Barranquilla, Colombia",
    description: `
      Fui contratado tras finalizar mis prácticas, convirtiéndome en el primer aprendiz en ser incorporado por mérito propio,
      gracias a mi capacidad para resolver problemas y adaptarme rápidamente.
      Durante este periodo, contribuí activamente al desarrollo de soluciones internas,
      optimizando bases de datos y mejorando la experiencia de usuario en los sistemas existentes.
    `,
    achievements: [
      "Diseñé y optimicé estructuras de bases de datos en PostgreSQL, mejorando significativamente la velocidad de consulta y el uso eficiente del almacenamiento.",
      "Desarrollé interfaces con Vue.js 2 (CDN) que facilitaban el desacoplamiento de funcionalidades y mejoraban la mantenibilidad del frontend.",
      "Automatizé procesos de generación de reportes a través de vistas especializadas, reduciendo tiempos de respuesta y mejorando la presentación de datos clave.",
      "Participé en la creación y mejora de procedimientos de almacenamiento de datos, aumentando la integridad y seguridad de la información.",
      "Destacado por mi rápida adaptación y resolución de problemas, pasando de aprendiz a desarrollador contratado en menos de un año",
    ],
    skills: [
      { name: "Vue.JS 2", icon: "logos:vue" },
      { name: "JavaScript", icon: "logos:javascript" },
      { name: "HTML 5", icon: "logos:html-5" },
      { name: "CSS", icon: "logos:css-3" },
      { name: "VuetifyJS", icon: "logos:vuetifyjs" },
      { name: "Flask", icon: "logos:flask" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "PL/SQL", icon: "vscode-icons:file-type-sql" },
      { name: "SQL", icon: "vscode-icons:file-type-sql" },
      { name: "Bash", icon: "logos:bash-icon" },
      { name: "Linux", icon: "logos:linux-tux" },
      { name: "Documentación", icon: "mdi:file-document" },
      { name: "Subversion", icon: "logos:subversion" },
      { name: "Jira", icon: "logos:jira" },
    ],
    companyUrl:
      "https://www.infobel.com/es/colombia/construsenales/barranquilla/CO100083003-6053688118/businessdetails.aspx",
  },
];
