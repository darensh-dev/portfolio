import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const HoloCard = ({ children, className, ...props }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const glareX = (x / rect.width) * 100;
    const glareY = (y / rect.height) * 100;
    
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
    card.style.setProperty('--glare-x', `${glareX}%`);
    card.style.setProperty('--glare-y', `${glareY}%`);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className={`relative p-8 bg-[var(--card-bg)] backdrop-blur-sm border border-[var(--border)] overflow-hidden ${className}`}
      style={{
        clipPath: 'polygon(0 5%, 5% 0, 95% 0, 100% 5%, 100% 95%, 95% 100%, 5% 100%, 0 95%)'
      }}
      {...props}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[var(--shadow)] opacity-50"></div>
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `radial-gradient(circle at var(--mouse-x) var(--mouse-y), rgba(0, 247, 255, 0.2), transparent 30%)`,
        opacity: 0.5,
      }}></div>
      <div className="absolute inset-0 pointer-events-none" style={{
        background: `radial-gradient(ellipse 80% 80% at var(--glare-x) var(--glare-y), rgba(255, 255, 255, 0.2), transparent)`,
        transition: 'opacity 0.2s',
      }}></div>
      
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <span className="absolute top-2 left-2 w-4 h-px bg-[var(--text-accent)]"></span>
        <span className="absolute top-2 left-2 w-px h-4 bg-[var(--text-accent)]"></span>
        <span className="absolute top-2 right-2 w-4 h-px bg-[var(--text-accent)]"></span>
        <span className="absolute top-2 right-2 w-px h-4 bg-[var(--text-accent)]"></span>
        <span className="absolute bottom-2 left-2 w-4 h-px bg-[var(--text-accent)]"></span>
        <span className="absolute bottom-2 left-2 w-px h-4 bg-[var(--text-accent)]"></span>
        <span className="absolute bottom-2 right-2 w-4 h-px bg-[var(--text-accent)]"></span>
        <span className="absolute bottom-2 right-2 w-px h-4 bg-[var(--text-accent)]"></span>
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default HoloCard;