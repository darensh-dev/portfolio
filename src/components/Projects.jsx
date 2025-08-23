import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { projects } from '@/data';
import SectionWrapper, { SectionTitle } from '@/components/SectionWrapper';
import HoloCard from '@/components/HoloCard';

const ProjectCard = ({ project, handleContact, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.2 }}
      viewport={{ once: true }}
      className={`h-full ${
        project.featured ? 'md:col-span-2 lg:col-span-1' : ''
      }`}
    >
      <HoloCard className="h-full flex flex-col">
        <div className="overflow-hidden" style={{ clipPath: 'polygon(0 0, 100% 0, 100% 90%, 90% 100%, 0 100%)' }}>
          <img 
            alt={`Captura de pantalla del proyecto ${project.title}`}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
           src="https://images.unsplash.com/photo-1572177812156-58036aae439c" />
        </div>

        <div className="p-0 pt-6 flex flex-col flex-grow">
          <h3 className="text-xl font-display font-bold mb-3" style={{ color: 'var(--text-primary)' }}>
            {project.title}
          </h3>
          <p className="mb-4 leading-relaxed flex-grow" style={{ color: 'var(--text-secondary)' }}>
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-sm font-medium"
                style={{ background: 'var(--bg-accent)', color: 'var(--text-accent)', clipPath: 'polygon(0 0, 100% 0, 95% 100%, 5% 100%)' }}
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex space-x-3 mt-auto">
            <Button
              onClick={handleContact}
              variant="outline"
              size="sm"
              className="flex-1 hover-lift"
              style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
            >
              <ExternalLink size={16} className="mr-2" />
              Ver Demo
            </Button>
            <Button
              onClick={handleContact}
              variant="outline"
              size="sm"
              className="flex-1 hover-lift"
              style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
            >
              <Github size={16} className="mr-2" />
              Código Fuente
            </Button>
          </div>
        </div>
      </HoloCard>
    </motion.div>
  );
};

const Projects = ({ handleContact }) => {
  return (
    <SectionWrapper id="proyectos">
      <SectionTitle>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">Galería de Proyectos</h2>
        <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>
          Constelaciones de código que he explorado
        </p>
      </SectionTitle>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <ProjectCard key={project.id} project={project} handleContact={handleContact} index={index} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Projects;