import React from 'react';
import { motion } from 'framer-motion';

const Nebula = ({ className = "" }) => {
  return (
    <motion.div
      className={`w-full h-full ${className}`}
      style={{
        background: `
          radial-gradient(ellipse 200% 100% at 50% 90%, rgba(255, 107, 157, 0.3) 0%, transparent 50%),
          radial-gradient(ellipse 150% 80% at 80% 40%, rgba(78, 205, 196, 0.25) 0%, transparent 50%),
          radial-gradient(ellipse 180% 120% at 20% 60%, rgba(69, 183, 209, 0.3) 0%, transparent 50%)
        `,
        filter: 'blur(25px)',
      }}
      animate={{
        rotate: [0, 360],
        scale: [1, 1.1, 1]
      }}
      transition={{
        rotate: { duration: 120, repeat: Infinity, ease: 'linear' },
        scale: { duration: 8, repeat: Infinity, ease: 'easeInOut' }
      }}
    />
  );
};

export default Nebula;