import React, { useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import Cursor from '@/components/Cursor';
import CosmicBackground from '@/components/CosmicBackground';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function AppClient() {
  const [activeSection, setActiveSection] = useState('inicio');
  const { toast } = useToast();

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top center',
        end: 'bottom center',
        onToggle: self => {
          if (self.isActive) {
            setActiveSection(section.id);
          }
        }
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: element, autoKill: false },
        ease: 'power3.inOut'
      });
    }
  };

  const handleContact = () => {
    toast({
      title: "🚧 Esta funcionalidad no está implementada aún",
      description: ""
    });
  };


  return (
    <TooltipProvider>
      <CosmicBackground />
      <Cursor />
      <div className="min-h-screen bg-primary/0 relative z-10">
        <Header
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />
        <main>
          <Hero
            scrollToSection={scrollToSection}
            handleContact={handleContact}
          />
          <About />
          <Experience />
          <Projects handleContact={handleContact} />
          <Contact handleContact={handleContact} />
        </main>
        <Footer />
        <Toaster />
      </div>
    </TooltipProvider>
  );
}

export default AppClient;