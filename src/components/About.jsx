import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { User, Code } from 'lucide-react';
import { skills } from '@/data';
import SectionWrapper, { SectionTitle } from '@/components/SectionWrapper';
import HoloCard from '@/components/HoloCard';

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
              Como un explorador del cosmos digital, mi misión es construir soluciones innovadoras. Con más de 6 años de experiencia, navego por el universo de React, Node.js y Python para crear tecnología que trasciende fronteras.
            </p>
          </HoloCard>

          <HoloCard className="about-card">
            <Code className="mb-4" size={32} style={{ color: 'var(--text-accent)' }} />
            <h3 className="text-2xl font-display font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Mi Filosofía
            </h3>
            <p className="text-lg leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
              Creo en el código limpio como el mapa de una galaxia y en la colaboración como la fuerza de una tripulación. Mi objetivo es crear aplicaciones que no solo sean funcionales, sino que ofrezcan una experiencia de usuario estelar.
            </p>
          </HoloCard>
        </div>

        <div ref={skillsRef}>
          <HoloCard className="p-8">
            <h3 className="text-2xl font-display font-bold mb-6" style={{ color: 'var(--text-primary)' }}>
              Sistemas de Navegación
            </h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="font-medium" style={{ color: 'var(--text-primary)' }}>
                      {skill.name}
                    </span>
                    <span className="text-sm" style={{ color: 'var(--text-secondary)' }}>
                      Nivel {skill.level}
                    </span>
                  </div>
                  <div className="h-3 rounded-full bg-[var(--bg-accent)]">
                    <div
                      className="h-full rounded-full skill-bar-fill"
                      style={{ background: `linear-gradient(90deg, ${skill.color}, var(--text-accent))`, width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </HoloCard>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;