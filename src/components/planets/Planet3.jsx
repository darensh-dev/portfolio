import React from 'react';
import { motion } from 'framer-motion';

const Planet3 = ({ active, size = 32 }) => {
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
        <radialGradient id="grad3" cx="35%" cy="30%">
          <stop offset="0%" stopColor="#FFFACD" />
          <stop offset="30%" stopColor="#F0E68C" />
          <stop offset="70%" stopColor="#BDB76B" />
          <stop offset="100%" stopColor="#8B7D6B" />
        </radialGradient>
        
        {/* Gradiente para el anillo */}
        <linearGradient id="ringGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFD700" stopOpacity="0.8" />
          <stop offset="50%" stopColor="#DAA520" stopOpacity="1" />
          <stop offset="100%" stopColor="#B8860B" stopOpacity="0.6" />
        </linearGradient>
        
        {/* Resplandor mejorado */}
        <filter id="glow3">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        
        {/* Efecto de destello */}
        <filter id="shine">
          <feGaussianBlur stdDeviation="2" result="shine1" />
          <feGaussianBlur stdDeviation="5" result="shine2" />
          <feMerge>
            <feMergeNode in="shine2" />
            <feMergeNode in="shine1" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>
      
      {/* Campo de energía exterior */}
      <motion.circle
        cx="50"
        cy="50"
        r="50"
        fill="none"
        stroke="rgba(240, 230, 140, 0.2)"
        strokeWidth="1"
        variants={{
          initial: { 
            scale: 0.7, 
            opacity: 0,
            strokeDasharray: "0 314" 
          },
          active: { 
            scale: [0.7, 1.3, 0.7], 
            opacity: [0, 0.4, 0],
            strokeDasharray: ["0 314", "157 157", "314 0", "0 314"]
          }
        }}
        transition={{ 
          duration: active ? 4 : 0, 
          repeat: active ? Infinity : 0, 
          ease: "easeInOut" 
        }}
      />
      
      <motion.g
        variants={{
          initial: { scale: 1, rotate: 0 },
          active: { 
            scale: [1, 1.15, 1],
            rotate: [0, 5, 0, -5, 0]
          }
        }}
        transition={{
          scale: { duration: active ? 3 : 0, repeat: active ? Infinity : 0, ease: "easeInOut" },
          rotate: { duration: active ? 8 : 0, repeat: active ? Infinity : 0, ease: "easeInOut" }
        }}
      >
        {/* Anillos múltiples con diferentes rotaciones */}
        {[0, 60, 120].map((baseRotation, index) => (
          <motion.ellipse
            key={index}
            cx="50"
            cy="50"
            rx={45 - index * 5}
            ry={15 - index * 2}
            stroke="url(#ringGrad)"
            strokeWidth={4 - index * 0.5}
            fill="none"
            transform={`rotate(${-20 + baseRotation} 50 50)`}
            variants={{
              initial: { 
                opacity: 0.3,
                strokeDasharray: "0 300",
                rotate: baseRotation 
              },
              active: { 
                opacity: [0.3, 1, 0.3],
                strokeDasharray: ["0 300", "150 150", "300 0", "0 300"],
                rotate: [baseRotation, baseRotation + 360]
              }
            }}
            transition={{
              opacity: { duration: active ? 2 : 0, repeat: active ? Infinity : 0, ease: "easeInOut", delay: active ? index * 0.3 : 0 },
              strokeDasharray: { duration: active ? 6 : 0, repeat: active ? Infinity : 0, ease: "easeInOut", delay: active ? index * 0.2 : 0 },
              rotate: { duration: active ? 15 + index * 3 : 0, repeat: active ? Infinity : 0, ease: "linear" }
            }}
          />
        ))}
        
        {/* Partículas en los anillos */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, index) => (
          <motion.circle
            key={`particle-${index}`}
            cx="50"
            cy="50"
            r="1"
            fill="#FFD700"
            variants={{
              initial: { 
                opacity: 0,
                x: 0,
                y: 0,
                scale: 0.5 
              },
              active: { 
                opacity: [0, 1, 0],
                x: [
                  Math.cos((angle * Math.PI) / 180) * 35,
                  Math.cos(((angle + 360) * Math.PI) / 180) * 35
                ],
                y: [
                  Math.sin((angle * Math.PI) / 180) * 12,
                  Math.sin(((angle + 360) * Math.PI) / 180) * 12
                ],
                scale: [0.5, 1.5, 0.5]
              }
            }}
            transition={{
              duration: active ? 8 : 0,
              repeat: active ? Infinity : 0,
              ease: "linear",
              delay: active ? index * 0.2 : 0
            }}
            transform="rotate(-20 50 50)"
          />
        ))}
        
        {/* Planeta principal */}
        <motion.circle
          cx="50"
          cy="50"
          r="30"
          fill="url(#grad3)"
          variants={{
            initial: { 
              filter: "none" 
            },
            active: { 
              filter: "url(#shine)" 
            }
          }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Núcleo brillante */}
        <motion.circle
          cx="45"
          cy="42"
          r="8"
          fill="rgba(255, 250, 205, 0.6)"
          variants={{
            initial: { 
              opacity: 0.3,
              scale: 0.8 
            },
            active: { 
              opacity: [0.3, 0.9, 0.3],
              scale: [0.8, 1.2, 0.8]
            }
          }}
          transition={{ 
            duration: active ? 2.5 : 0, 
            repeat: active ? Infinity : 0, 
            ease: "easeInOut" 
          }}
        />
        
        {/* Destellos de superficie */}
        {[25, 65, 40].map((x, index) => (
          <motion.circle
            key={`flash-${index}`}
            cx={x}
            cy={50 + (index - 1) * 10}
            r="2"
            fill="#FFFACD"
            variants={{
              initial: { 
                opacity: 0,
                scale: 0 
              },
              active: { 
                opacity: [0, 1, 0],
                scale: [0, 1.5, 0]
              }
            }}
            transition={{
              duration: active ? 1.5 : 0,
              repeat: active ? Infinity : 0,
              ease: "easeOut",
              delay: active ? index * 0.8 : 0
            }}
          />
        ))}
      </motion.g>
      
      {/* Ondas de energía */}
      <motion.circle
        cx="50"
        cy="50"
        r="40"
        fill="none"
        stroke="rgba(255, 215, 0, 0.3)"
        strokeWidth="2"
        variants={{
          initial: { 
            scale: 0.5, 
            opacity: 0 
          },
          active: { 
            scale: [0.5, 1.5, 2],
            opacity: [0, 0.6, 0]
          }
        }}
        transition={{ 
          duration: active ? 3 : 0, 
          repeat: active ? Infinity : 0, 
          ease: "easeOut",
          repeatDelay: active ? 1 : 0
        }}
      />
    </motion.svg>
  );
};

export default Planet3;