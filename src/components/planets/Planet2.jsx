import React from 'react';
import { motion } from 'framer-motion';

const Planet2 = ({ active, size = 32 }) => {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      initial="initial"
      animate={active ? 'active' : 'initial'}
    >
      <defs>
        {/* Gradiente principal mejorado */}
        <radialGradient id="grad2" cx="30%" cy="30%">
          <stop offset="0%" stopColor="#FFB347" />
          <stop offset="40%" stopColor="#FF6347" />
          <stop offset="100%" stopColor="#8B0000" />
        </radialGradient>
        
        {/* Gradiente para el núcleo brillante */}
        <radialGradient id="coreGrad">
          <stop offset="0%" stopColor="#FFFF99" stopOpacity="0.8" />
          <stop offset="70%" stopColor="#FF6347" stopOpacity="0.3" />
          <stop offset="100%" stopColor="transparent" />
        </radialGradient>
        
        {/* Resplandor mejorado */}
        <filter id="glow2">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        
        {/* Efecto de pulsación */}
        <filter id="pulse">
          <feGaussianBlur stdDeviation="6" result="bigBlur" />
          <feGaussianBlur stdDeviation="2" result="smallBlur" />
          <feMerge>
            <feMergeNode in="bigBlur" />
            <feMergeNode in="smallBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* Aura externa pulsante */}
      <motion.circle
        cx="50"
        cy="50"
        r="45"
        fill="none"
        stroke="rgba(255, 99, 71, 0.3)"
        strokeWidth="2"
        variants={{
          initial: { 
            scale: 0.8, 
            opacity: 0,
            strokeWidth: 1 
          },
          active: { 
            scale: [0.8, 1.2, 0.8], 
            opacity: [0, 0.6, 0],
            strokeWidth: [1, 3, 1]
          }
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      {/* Planeta principal */}
      <motion.circle
        cx="50"
        cy="50"
        r="35"
        fill="url(#grad2)"
        variants={{
          initial: { 
            filter: 'url(#none)',
            scale: 1 
          },
          active: { 
            filter: 'url(#pulse)',
            scale: [1, 1.05, 1]
          }
        }}
        transition={{ 
          filter: { duration: 0.5 },
          scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
        }}
      />
      
      {/* Núcleo brillante */}
      <motion.circle
        cx="45"
        cy="45"
        r="15"
        fill="url(#coreGrad)"
        variants={{
          initial: { opacity: 0.3 },
          active: { opacity: [0.3, 0.8, 0.3] }
        }}
        transition={{ 
          duration: 2.5, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      
      {/* Anillo orbital exterior */}
      <motion.circle
        cx="50"
        cy="50"
        r="25"
        fill="none"
        stroke="rgba(255, 215, 0, 0.6)"
        strokeWidth="2"
        strokeDasharray="8 12"
        variants={{
          initial: { 
            rotate: 0,
            opacity: 0.3 
          },
          active: { 
            rotate: 360,
            opacity: 0.8 
          }
        }}
        transition={{ 
          rotate: { duration: 8, repeat: Infinity, ease: "linear" },
          opacity: { duration: 0.5 }
        }}
      />
      
      {/* Anillo orbital interior (rotación opuesta) */}
      <motion.circle
        cx="50"
        cy="50"
        r="18"
        fill="none"
        stroke="rgba(255, 165, 0, 0.4)"
        strokeWidth="1.5"
        strokeDasharray="4 6"
        variants={{
          initial: { 
            rotate: 0,
            opacity: 0 
          },
          active: { 
            rotate: -360,
            opacity: 0.6 
          }
        }}
        transition={{ 
          rotate: { duration: 12, repeat: Infinity, ease: "linear" },
          opacity: { duration: 0.5 }
        }}
      />
      
      {/* Partículas orbitales */}
      {[0, 120, 240].map((angle, index) => (
        <motion.circle
          key={index}
          cx="50"
          cy="50"
          r="1.5"
          fill="#FFD700"
          variants={{
            initial: { 
              opacity: 0,
              x: 0,
              y: 0 
            },
            active: { 
              opacity: [0, 1, 0],
              x: [
                Math.cos((angle * Math.PI) / 180) * 30,
                Math.cos(((angle + 360) * Math.PI) / 180) * 30
              ],
              y: [
                Math.sin((angle * Math.PI) / 180) * 30,
                Math.sin(((angle + 360) * Math.PI) / 180) * 30
              ]
            }
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
            delay: index * 0.5
          }}
        />
      ))}
    </motion.svg>
  );
};

export default Planet2;