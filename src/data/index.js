import { Sun, Moon, Palette, Rocket } from 'lucide-react';
import Planet1 from '@/components/planets/Planet1';
import Planet2 from '@/components/planets/Planet2';
import Planet3 from '@/components/planets/Planet3';
import Planet4 from '@/components/planets/Planet4';
import Planet5 from '@/components/planets/Planet5';


export const themes = [
  { id: 'space', name: 'Espacio', icon: Rocket, color: '#00f7ff' },
  { id: 'light', name: 'Claro', icon: Sun, color: '#8b5cf6' },
];

export const navLinks = [
  { id: 'inicio', name: 'Base', PlanetComponent: Planet1 },
  { id: 'sobre-mi', name: 'Sobre Mí', PlanetComponent: Planet2 },
  { id: 'experiencia', name: 'Experiencia', PlanetComponent: Planet3 },
  { id: 'proyectos', name: 'Proyectos', PlanetComponent: Planet4 },
  { id: 'contacto', name: 'Contacto', PlanetComponent: Planet5 },
];

export const skills = [
  { name: 'React / Next.js', level: 95, color: 'var(--pastel-blue)' },
  { name: 'Node.js / Express', level: 90, color: 'var(--pastel-green)' },
  { name: 'TypeScript', level: 88, color: 'var(--pastel-purple)' },
  { name: 'Python / FastAPI', level: 85, color: 'var(--pastel-yellow)' },
  { name: 'PostgreSQL / MongoDB', level: 82, color: 'var(--pastel-pink)' },
  { name: 'AWS / Docker', level: 80, color: 'var(--pastel-orange)' }
];

export const projects = [
  {
    id: 1,
    title: 'Plataforma E-commerce Cósmica',
    description: 'Plataforma de comercio electrónico completa con temática espacial, construida con React, Node.js y PostgreSQL.',
    tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe'],
    image: 'Plataforma de comercio electrónico moderna con una interfaz limpia y futurista',
    featured: true
  },
  {
    id: 2,
    title: 'Gestor de Tareas Interestelar',
    description: 'Aplicación de gestión de tareas con colaboración en tiempo real para equipos distribuidos por la galaxia.',
    tech: ['Vue.js', 'Express', 'Socket.io', 'MongoDB'],
    image: 'Aplicación de gestión de tareas con tableros kanban y fondo de nebulosa',
    featured: true
  },
  {
    id: 3,
    title: 'Dashboard de Análisis de Flotas',
    description: 'Dashboard de análisis con visualizaciones interactivas para monitorizar flotas de naves espaciales.',
    tech: ['React', 'D3.js', 'Python', 'FastAPI'],
    image: 'Dashboard de análisis con gráficos holográficos y métricas de naves',
    featured: false
  }
];

export const experiences = [
  {
    company: 'TechCorp Solutions',
    position: 'Ingeniero de Software Senior',
    period: '2022 - Presente',
    location: 'Remoto, Vía Láctea',
    description: 'Liderando el desarrollo de aplicaciones web escalables y mentorando a la nueva generación de cadetes espaciales.',
    achievements: ['Mejoré el rendimiento del motor de curvatura en un 40%', 'Implementé arquitectura de microservicios distribuidos', 'Lideré un escuadrón de 5 desarrolladores']
  },
  {
    company: 'StartupXYZ',
    position: 'Piloto de Desarrollo Full Stack',
    period: '2020 - 2022',
    location: 'Estación Espacial Kepler-186f',
    description: 'Desarrollo de MVP y escalado de la plataforma desde 0 hasta 10k usuarios activos en todo el cuadrante.',
    achievements: ['Diseñé la arquitectura de la nave nodriza', 'Implementé sistema de pagos intergaláctico', 'Optimicé la base de datos de navegación']
  },
  {
    company: 'Digital Agency',
    position: 'Diseñador de Interfaces de Navegación',
    period: '2018 - 2020',
    location: 'Marte, Cráter Gale',
    description: 'Creación de sitios web responsivos y aplicaciones interactivas para clientes de todo el sistema solar.',
    achievements: ['Entregué +20 proyectos con éxito', 'Mejoré el SEO para búsquedas interplanetarias en un 60%', 'Implementé mejores prácticas de Experiencia de Usuario (UX)']
  }
];