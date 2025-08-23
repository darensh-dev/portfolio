import React from 'react';
import { motion } from 'framer-motion';

const Planet5 = ({ active, size = 32 }) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      initial="initial"
      animate={active ? 'active' : 'initial'}
    >
      <defs>
        <radialGradient id="grad5">
          <stop offset="0%" stopColor="#D8BFD8" />
          <stop offset="100%" stopColor="#4B0082" />
        </radialGradient>
        <filter id="glow5">
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
        r="38"
        fill="url(#grad5)"
        variants={{
          initial: { filter: 'url(#none)' },
          active: { filter: 'url(#glow5)' }
        }}
      />
      <motion.path
        d="M 20 50 A 30 30 0 0 1 80 50"
        stroke="rgba(230, 230, 250, 0.8)"
        strokeWidth="3"
        fill="none"
        variants={{
          initial: { opacity: 0, pathLength: 0 },
          active: { opacity: 1, pathLength: 1 }
        }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
       <motion.path
        d="M 30 70 A 20 20 0 0 0 70 70"
        stroke="rgba(230, 230, 250, 0.6)"
        strokeWidth="2"
        fill="none"
        variants={{
          initial: { opacity: 0, pathLength: 0 },
          active: { opacity: 1, pathLength: 1 }
        }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
    </motion.svg>
  );
};

export default Planet5;