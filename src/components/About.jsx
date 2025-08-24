import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { User, Code } from 'lucide-react';
import { skills } from '@/data';
import SectionWrapper, { SectionTitle } from '@/components/SectionWrapper';
import HoloCard from '@/components/HoloCard';
import TechSolarSystem from '@/components/TechSolarSystem';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef(null);
  const skillsRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-card", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        stagger: 0.2,
        duration: 1,
        ease: "power4.out",
      });

      gsap.from(".skill-bar-fill", {
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        width: 0,
        stagger: 0.1,
        duration: 1.5,
        ease: "power4.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionWrapper id="sobre-mi" ref={sectionRef}>
      <SectionTitle>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">Bitácora de Vuelo</h2>
        <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>
          Mi trayectoria y arsenal tecnológico
        </p>
      </SectionTitle>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-8">
          <HoloCard className="about-card">
            <User className="mb-4" size={32} style={{ color: 'var(--text-accent)' }} />
            <h3 className="text-2xl font-display font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Mi Misión
            </h3>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Transformo ideas en soluciones tecnológicas inteligentes que redefinen cómo las personas interactúan con los sistemas. Con más de 6 años liderando desarrollos FullStack potenciados por IA, mi objetivo es construir productos escalables que no solo funcionen perfectamente, sino que generen un impacto real en los negocios y usuarios.
            </p>
          </HoloCard>

          <HoloCard className="about-card">
            <Code className="mb-4" size={32} style={{ color: 'var(--text-accent)' }} />
            <h3 className="text-2xl font-display font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Mi Filosofía
            </h3>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Creo en la tecnología como catalizador de transformación. Cada línea de código debe servir un propósito: resolver problemas reales con elegancia, escalabilidad y inteligencia artificial integrada. Combino buenas prácticas de desarrollo, arquitecturas modernas y liderazgo técnico para entregar soluciones que evolucionen junto con las necesidades del negocio.
            </p>
          </HoloCard>
        </div>

        <div ref={skillsRef}>
          <TechSolarSystem />
          {/* <HoloCard className="p-8">
            <h3 className="text-2xl font-display font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Sistemas de Navegación
            </h3> */}
            
            {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-8"> */}
              {/* Backend Galaxy */}
              {/* <div className="space-y-4">
                <h4 className="text-xl font-bold text-cyan-400 flex items-center gap-2">
                  <span className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></span>
                  Sistema Backend
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {['Python', 'Flask', 'FastAPI', 'Django', 'Microservicios', 'API Rest', 'GraphQL', 'RAG', 'OpenAI API', 'Claude API', 'PyTest'].map((skill) => (
                    <div key={skill} className="flex items-center gap-2 p-2 rounded-lg bg-cyan-400/10 border border-cyan-400/20 hover:border-cyan-400/40 transition-all">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-sm text-cyan-100">{skill}</span>
                    </div>
                  ))}
                </div>
              </div> */}

              {/* Frontend Galaxy */}
              {/* <div className="space-y-4">
                <h4 className="text-xl font-bold text-purple-400 flex items-center gap-2">
                  <span className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></span>
                  Sistema Frontend
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {['React', 'Vue.js', 'Angular', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind', 'GraphQL', 'PWA'].map((skill) => (
                    <div key={skill} className="flex items-center gap-2 p-2 rounded-lg bg-purple-400/10 border border-purple-400/20 hover:border-purple-400/40 transition-all">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <span className="text-sm text-purple-100">{skill}</span>
                    </div>
                  ))}
                </div>
              </div> */}

              {/* Cloud Galaxy */}
              {/* <div className="space-y-4">
                <h4 className="text-xl font-bold text-emerald-400 flex items-center gap-2">
                  <span className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse"></span>
                  Nebula DevOps
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {['Docker', 'Terraform', 'AWS', 'GCP', 'Azure', 'CI/CD', 'Kubernetes'].map((skill) => (
                    <div key={skill} className="flex items-center gap-2 p-2 rounded-lg bg-emerald-400/10 border border-emerald-400/20 hover:border-emerald-400/40 transition-all">
                      <div className="w-2 h-2 bg-emerald-400 rounded-full"></div>
                      <span className="text-sm text-emerald-100">{skill}</span>
                    </div>
                  ))}
                </div>
              </div> */}

              {/* Database Galaxy */}
              {/* <div className="space-y-4">
                <h4 className="text-xl font-bold text-amber-400 flex items-center gap-2">
                  <span className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></span>
                  Centro de Datos
                </h4>
                <div className="grid grid-cols-2 gap-3">
                  {['PostgreSQL', 'MySQL', 'MongoDB', 'DynamoDB', 'Redis', 'OpenSearch'].map((skill) => (
                    <div key={skill} className="flex items-center gap-2 p-2 rounded-lg bg-amber-400/10 border border-amber-400/20 hover:border-amber-400/40 transition-all">
                      <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                      <span className="text-sm text-amber-100">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div> */}

            {/* Soft Skills como Satélites */}
            {/* <div className="mt-8 pt-8 border-t border-gray-700">
              <h4 className="text-xl font-bold text-center mb-6" style={{ color: 'var(--text-accent)' }}>
                Protocolos de Comando
              </h4>
              <div className="flex flex-wrap justify-center gap-4">
                {['Liderazgo Técnico', 'Resolución de Problemas', 'Trabajo en Equipo', 'Comunicación', 'Gestión Ágil', 'Adaptabilidad'].map((skill) => (
                  <div key={skill} className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-400/30 hover:border-blue-400/60 transition-all">
                    <span className="text-sm font-medium text-blue-100">{skill}</span>
                  </div>
                ))}
              </div>
            </div> */}

            {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { category: 'Backend', skills: ['Python', 'Django', 'FastAPI', 'Microservicios', 'GraphQL'], color: 'from-cyan-500 to-blue-600' },
                { category: 'Frontend', skills: ['React', 'TypeScript', 'Vue.js', 'Tailwind', 'PWA'], color: 'from-purple-500 to-pink-600' },
                { category: 'DevOps', skills: ['Docker', 'AWS', 'Terraform', 'CI/CD', 'Kubernetes'], color: 'from-emerald-500 to-green-600' },
                { category: 'Database', skills: ['PostgreSQL', 'MongoDB', 'Redis', 'DynamoDB'], color: 'from-amber-500 to-orange-600' }
              ].map((section) => (
                <div key={section.category} className="relative">
                  <div className={`p-6 rounded-lg bg-gradient-to-br ${section.color} bg-opacity-20 border border-gray-600 hover:border-gray-400 transition-all`}>
                    <h4 className="text-lg font-bold mb-4 text-center text-white">{section.category}</h4>
                    <div className="space-y-2">
                      {section.skills.map((skill) => (
                        <div key={skill} className="text-center p-2 rounded bg-black/30 text-sm text-gray-200 hover:bg-black/50 transition-all cursor-pointer">
                          {skill}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div> */}

            {/* Arquitecturas y Paradigmas */}
            {/* <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-lg bg-gradient-to-br from-indigo-500/20 to-violet-600/20 border border-indigo-400/30">
                <h4 className="text-lg font-bold mb-4 text-indigo-300">Arquitecturas Estelares</h4>
                <div className="flex flex-wrap gap-2">
                  {['Hexagonal', 'Microservicios', 'Serverless', 'Clean Architecture', 'Monorepo'].map((arch) => (
                    <span key={arch} className="px-3 py-1 bg-indigo-400/20 rounded-full text-xs text-indigo-200 border border-indigo-400/30">
                      {arch}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-lg bg-gradient-to-br from-rose-500/20 to-red-600/20 border border-rose-400/30">
                <h4 className="text-lg font-bold mb-4 text-rose-300">Paradigmas Cósmicos</h4>
                <div className="flex flex-wrap gap-2">
                  {['SOLID', 'Clean Code', 'Design Patterns', 'OOP', 'Functional Programming'].map((paradigm) => (
                    <span key={paradigm} className="px-3 py-1 bg-rose-400/20 rounded-full text-xs text-rose-200 border border-rose-400/30">
                      {paradigm}
                    </span>
                  ))}
                </div>
              </div>
            </div> */}

            {/* <div className="relative min-h-[400px] flex items-center justify-center"> */}
            {/* Sol Central - Tu expertise principal */}
            {/* <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center shadow-2xl animate-pulse">
                  <span className="text-lg font-bold text-black">Full Stack</span>
                </div>
              </div> */}

            {/* Órbitas de tecnologías */}
            {/* {[
                { name: 'React/Vue', distance: '200px', angle: '0deg', color: 'bg-blue-400' },
                { name: 'Python', distance: '200px', angle: '60deg', color: 'bg-green-400' },
                { name: 'AWS/GCP', distance: '200px', angle: '120deg', color: 'bg-purple-400' },
                { name: 'PostgreSQL', distance: '200px', angle: '180deg', color: 'bg-cyan-400' },
                { name: 'Docker', distance: '200px', angle: '240deg', color: 'bg-indigo-400' },
                { name: 'GraphQL', distance: '200px', angle: '300deg', color: 'bg-pink-400' }
              ].map((planet, index) => (
                <div
                  key={planet.name}
                  className="absolute w-16 h-16 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-lg hover:scale-110 transition-transform cursor-pointer"
                  style={{
                    backgroundColor: planet.color.replace('bg-', ''),
                    transform: `rotate(${planet.angle}) translate(${planet.distance}) rotate(-${planet.angle})`,
                    animation: `orbit${index} 20s linear infinite`
                  }}
                >
                  <span className="text-center leading-tight">{planet.name}</span>
                </div>
              ))} */}
            {/* </div> */}
          {/* </HoloCard> */}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;