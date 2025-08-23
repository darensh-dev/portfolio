import React from 'react';
import { motion } from 'framer-motion';

const Planet4 = ({ active, size = 32 }) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      initial="initial"
      animate={active ? 'active' : 'initial'}
      transition={{ staggerChildren: 0.2 }}
    >
      <defs>
        <radialGradient id="grad4">
          <stop offset="0%" stopColor="#98FB98" />
          <stop offset="100%" stopColor="#006400" />
        </radialGradient>
        <filter id="glow4">
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
        fill="url(#grad4)"
        variants={{
          initial: { filter: 'url(#none)' },
          active: { filter: 'url(#glow4)' }
        }}
        transition={{ duration: 0.5 }}
      />
      <motion.g
        variants={{
            initial: { opacity: 0 },
            active: { opacity: 1 }
        }}
      >
        <circle cx="30" cy="30" r="5" fill="rgba(255,255,255,0.7)" />
        <circle cx="70" cy="60" r="8" fill="rgba(255,255,255,0.7)" />
        <circle cx="50" cy="75" r="3" fill="rgba(255,255,255,0.7)" />
      </motion.g>
      <motion.circle
        cx="20"
        cy="70"
        r="8"
        fill="#A9A9A9"
        variants={{
            initial: { scale: 0 },
            active: { scale: 1 }
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      >
        <animate
          attributeName="cy"
          values="70;65;70"
          dur="3s"
          repeatCount="indefinite"
        />
      </motion.circle>
    </motion.svg>
  );
};

export default Planet4;