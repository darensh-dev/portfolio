import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import SectionWrapper, { SectionTitle } from '@/components/SectionWrapper';
import HoloCard from '@/components/HoloCard';

const Contact = ({ handleContact }) => {
  return (
    <SectionWrapper id="contacto" className="bg-[var(--bg-secondary)]">
      <SectionTitle>
        <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 gradient-text">
          Iniciar Comunicación
        </h2>
        <p className="text-xl mb-8" style={{ color: 'var(--text-secondary)' }}>
          Estoy abierto a nuevas misiones y colaboraciones intergalácticas.
        </p>
      </SectionTitle>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <HoloCard className="max-w-2xl mx-auto text-center">
            <MessageCircle size={48} className="mx-auto mb-6" style={{ color: 'var(--text-accent)' }} />
            <h3 className="text-2xl font-display font-bold mb-4" style={{ color: 'var(--text-primary)' }}>
              Contactar a la base
            </h3>
            <p className="text-lg mb-8" style={{ color: 'var(--text-secondary)' }}>
              Si tienes un proyecto en mente o quieres explorar el universo tecnológico, envíame una señal.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                onClick={handleContact}
                className="px-8 py-8 text-lg hover-lift"
                style={{ background: 'var(--text-accent)', color: '#0a0a1a', border: 'none' }}
              >
                <Mail className="mr-2" size={20} />
                Enviar Transmisión
              </Button>
              <Button 
                onClick={handleContact}
                variant="outline"
                className="px-8 py-8 text-lg hover-lift"
                style={{ borderColor: 'var(--border)', color: 'var(--text-primary)' }}
              >
                <Linkedin className="mr-2" size={20} />
                Conectar en Red Social
              </Button>
            </div>
        </HoloCard>
      </motion.div>
    </SectionWrapper>
  );
};

export default Contact;