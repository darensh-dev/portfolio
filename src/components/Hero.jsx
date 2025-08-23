import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { Github, Linkedin, Mail, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Planet1 from './planets/Planet1';

const Hero = ({ scrollToSection, handleDownloadCV, handleContact }) => {
  const heroRef = useRef(null);
  const socialIconsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-title-char", {
        y: 100,
        opacity: 0,
        stagger: 0.05,
        duration: 1,
        ease: "power4.out",
      });
      gsap.from(".hero-subtitle", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.5,
        ease: "power4.out",
      });
      gsap.from(".hero-buttons", {
        y: 50,
        opacity: 0,
        duration: 1,
        delay: 0.7,
        ease: "power4.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const handleMouseMove = (e, icon) => {
    const { clientX, clientY } = e;
    const { left, top, width, height } = icon.getBoundingClientRect();
    const x = clientX - (left + width / 2);
    const y = clientY - (top + height / 2);
    gsap.to(icon, {
      x: x * 0.4,
      y: y * 0.4,
      duration: 0.7,
      ease: "power4.out",
    });
  };

  const handleMouseLeave = (icon) => {
    gsap.to(icon, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: "elastic.out(1, 0.3)",
    });
  };

  const splitText = (text) => {
    return text.split("").map((char, index) => (
      <span key={index} className="hero-title-char inline-block">
        {char === " " ? "\u00A0" : char}
      </span>
    ));
  };

  return (
    <section id="inicio" ref={heroRef} className="min-h-screen flex items-center justify-center px-4 pt-24 md:pt-16 relative overflow-hidden">
      {/* <motion.div
        className="absolute -left-16 -top-16 md:left-16 md:top-16 w-64 h-64 opacity-50"
        animate={{ rotate: 360 }}
        transition={{ duration: 100, repeat: Infinity, ease: 'linear' }}
      >
        <Planet1 active={true} size="100%" />
      </motion.div>
       <motion.div
        className="absolute -right-24 bottom-0 md:right-24 md:-bottom-24 w-96 h-96 opacity-30"
        animate={{ rotate: -360 }}
        transition={{ duration: 150, repeat: Infinity, ease: 'linear' }}
      >
        <img  alt="Nebulosa espacial distante" src="https://images.unsplash.com/photo-1662719012928-4017f17d5b3c" />
      </motion.div> */}

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="space-y-8">
          <motion.div 
            className="w-40 h-40 mx-auto rounded-full glass float overflow-hidden border-2 border-[var(--text-accent)] shadow-[0_0_30px_var(--text-accent)]"
            whileHover={{ scale: 1.1 }}
          >
            <img 
              alt="Astronauta desarrollador profesional"
              className="w-full h-full object-cover"
             src="https://images.unsplash.com/photo-1454789548928-9efd52dc4031" />
          </motion.div>

          <div>
            <h1 className="text-5xl md:text-7xl font-display font-bold mb-4 overflow-hidden">
              <span className="gradient-text">{splitText("Daren")}</span>
              <span style={{ color: 'var(--text-primary)' }}>{splitText("sh")}</span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 hero-subtitle" style={{ color: 'var(--text-secondary)' }}>
              Explorando el universo del código con más de 6 años de experiencia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center hero-buttons">
              <Button 
                onClick={() => scrollToSection('proyectos')}
                className="px-8 py-3 text-lg hover-lift"
                style={{ background: 'var(--text-accent)', color: '#0a0a1a', border: 'none' }}
              >
                Ver Proyectos
              </Button>
              <Button 
                onClick={handleDownloadCV}
                variant="outline"
                className="px-8 py-3 text-lg hover-lift"
                style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
              >
                <Download className="mr-2" size={20} />
                Descargar Manifiesto
              </Button>
            </div>
          </div>

          <motion.div 
            className="flex justify-center space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {[
              { icon: Github, href: 'https://github.com/darensh-dev', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/daren-salazar', label: 'LinkedIn' },
              { icon: Mail, href: 'mailto:contacto@darensh.dev', label: 'Email' }
            ].map((social, index) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass"
                title={social.label}
                ref={el => socialIconsRef.current[index] = el}
                onMouseMove={(e) => handleMouseMove(e, socialIconsRef.current[index])}
                onMouseLeave={() => handleMouseLeave(socialIconsRef.current[index])}
              >
                <social.icon size={24} style={{ color: 'var(--text-accent)' }} />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;