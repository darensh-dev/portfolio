import React from 'react';
import { motion } from 'framer-motion';

const SectionWrapper = ({ id, children, className }) => {
  return (
    <section id={id} className={`py-20 px-4 relative ${className}`}>
      <div className="absolute top-0 left-0 w-16 h-16 border-t-2 border-l-2 border-[var(--border)] opacity-20"></div>
      <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-[var(--border)] opacity-20"></div>
      <div className="absolute bottom-0 left-0 w-16 h-16 border-b-2 border-l-2 border-[var(--border)] opacity-20"></div>
      <div className="absolute bottom-0 right-0 w-16 h-16 border-b-2 border-r-2 border-[var(--border)] opacity-20"></div>
      
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  );
};

export const SectionTitle = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    className="text-center mb-16"
  >
    {children}
  </motion.div>
);

export default SectionWrapper;