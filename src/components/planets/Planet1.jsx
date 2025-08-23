import React from 'react';
import { motion } from 'framer-motion';

const Planet1 = ({ active, size = 32 }) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      initial="initial"
      animate={active ? 'active' : 'initial'}
      transition={{ staggerChildren: 0.1 }}
    >
      <defs>
        <radialGradient id="grad1">
          <stop offset="0%" stopColor="#87CEEB" />
          <stop offset="100%" stopColor="#4682B4" />
        </radialGradient>
        <filter id="glow1">
          <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      <motion.circle
        cx="50"
        cy="50"
        r="40"
        fill="url(#grad1)"
        variants={{
          initial: { filter: 'url(#none)' },
          active: { filter: 'url(#glow1)' }
        }}
        transition={{ duration: 0.5 }}
      />
      <motion.path
        d="M20,65 Q50,50 80,65"
        stroke="rgba(255,255,255,0.7)"
        strokeWidth="3"
        fill="none"
        variants={{
          initial: { pathLength: 0, opacity: 0 },
          active: { pathLength: 1, opacity: 1 }
        }}
        transition={{ duration: 0.7, delay: 0.2 }}
      />
      <motion.path
        d="M25,35 Q50,45 75,35"
        stroke="rgba(255,255,255,0.5)"
        strokeWidth="2"
        fill="none"
        variants={{
          initial: { pathLength: 0, opacity: 0 },
          active: { pathLength: 1, opacity: 1 }
        }}
        transition={{ duration: 0.7, delay: 0.4 }}
      />
    </motion.svg>
  );
};

export default Planet1;