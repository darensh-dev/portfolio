import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Star } from 'lucide-react';
import { experiences } from '@/data';
import SectionWrapper, { SectionTitle } from '@/components/SectionWrapper';
import HoloCard from '@/components/HoloCard';

const Experience = () => {
  return (
    <SectionWrapper id="experiencia" className="bg-[var(--bg-secondary)]">
      <SectionTitle>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">Historial de Misiones</h2>
        <p className="text-xl" style={{ color: 'var(--text-secondary)' }}>
          Mi viaje a través del cosmos profesional
        </p>
      </SectionTitle>

      <div className="relative border-l-2 border-[var(--border)] pl-8 space-y-12">
        <div className="absolute top-0 left-[-2px] w-1 h-full bg-[var(--text-accent)] shadow-[0_0_10px_var(--text-accent)] animate-pulse"></div>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -left-[11px] top-1 w-5 h-5 rounded-full bg-[var(--text-accent)] border-4 border-[var(--bg-secondary)] shadow-[0_0_10px_var(--text-accent)]"></div>
            <HoloCard>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-display font-bold mb-2" style={{ color: 'var(--text-primary)' }}>
                    {exp.position}
                  </h3>
                  <p className="text-xl font-medium mb-2" style={{ color: 'var(--text-accent)' }}>
                    {exp.company}
                  </p>
                  <div className="flex items-center space-x-4 text-sm" style={{ color: 'var(--text-secondary)' }}>
                    <div className="flex items-center">
                      <Calendar size={16} className="mr-1" />
                      {exp.period}
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="mr-1" />
                      {exp.location}
                    </div>
                  </div>
                </div>
                <Briefcase size={48} style={{ color: 'var(--text-accent)' }} className="hidden md:block" />
              </div>

              <p className="text-lg mb-6 leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {exp.description}
              </p>

              <div className="space-y-2">
                <h4 className="font-semibold mb-3" style={{ color: 'var(--text-primary)' }}>
                  Logros Clave:
                </h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start">
                      <Star size={16} className="mr-2 mt-1 flex-shrink-0" style={{ color: 'var(--text-accent)' }} />
                      <span style={{ color: 'var(--text-secondary)' }}>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </HoloCard>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Experience;