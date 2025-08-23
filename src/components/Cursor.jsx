import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const SpaceshipSVG = () => (
  <svg width="100%" height="100%" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Estela/propulsores */}
    <g className="thruster">
      <ellipse cx="20" cy="32" rx="3" ry="6" fill="url(#thrusterGradient)" opacity="0.8"/>
      <ellipse cx="14" cy="30" rx="2" ry="4" fill="url(#thrusterGradient)" opacity="0.6"/>
      <ellipse cx="26" cy="30" rx="2" ry="4" fill="url(#thrusterGradient)" opacity="0.6"/>
    </g>
    
    {/* Alas */}
    <path d="M20 15 L5 35 L15 28 L20 15Z" fill="url(#wingGradient)" stroke="var(--text-primary)" strokeWidth="0.5"/>
    <path d="M20 15 L35 35 L25 28 L20 15Z" fill="url(#wingGradient)" stroke="var(--text-primary)" strokeWidth="0.5"/>
    
    {/* Cuerpo principal */}
    <ellipse cx="20" cy="20" rx="6" ry="12" fill="url(#bodyGradient)" stroke="var(--text-primary)" strokeWidth="1"/>
    
    {/* Cabina */}
    <ellipse cx="20" cy="15" rx="3" ry="5" fill="url(#cabinGradient)" opacity="0.9"/>
    
    {/* Detalles */}
    <circle cx="20" cy="13" r="1.5" fill="var(--pastel-pink)" opacity="0.8"/>
    <path d="M20 5 L20 8" stroke="var(--text-accent)" strokeWidth="2" strokeLinecap="round"/>
    
    {/* Gradientes */}
    <defs>
      <linearGradient id="bodyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="var(--text-accent)" />
        <stop offset="100%" stopColor="var(--text-primary)" />
      </linearGradient>
      
      <linearGradient id="wingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="var(--text-primary)" opacity="0.8"/>
        <stop offset="100%" stopColor="var(--text-accent)" opacity="0.4"/>
      </linearGradient>
      
      <linearGradient id="cabinGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="var(--pastel-pink)" opacity="0.6"/>
        <stop offset="100%" stopColor="var(--text-accent)" opacity="0.8"/>
      </linearGradient>
      
      <radialGradient id="thrusterGradient">
        <stop offset="0%" stopColor="var(--pastel-pink)" opacity="1"/>
        <stop offset="50%" stopColor="var(--text-accent)" opacity="0.6"/>
        <stop offset="100%" stopColor="transparent" opacity="0"/>
      </radialGradient>
    </defs>
  </svg>
);

const Cursor = () => {
  const cursorRef = useRef(null);
  const [lasers, setLasers] = useState([]);
  const nextLaserId = useRef(0);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;
    
    const mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const pos = { x: mouse.x, y: mouse.y };
    const speed = 0.1;
    let angle = -90;

    const updatePosition = () => {
      const dx = mouse.x - pos.x;
      const dy = mouse.y - pos.y;
      
      if (Math.abs(dx) > 0.1 || Math.abs(dy) > 0.1) {
        const targetAngle = Math.atan2(dy, dx) * (180 / Math.PI) + 90;
        angle += (targetAngle - angle) * 0.2;
      }

      pos.x += dx * speed;
      pos.y += dy * speed;

      gsap.set(cursor, { 
        x: pos.x, 
        y: pos.y, 
        rotation: angle,
        transformOrigin: 'center center'
      });
    };

    gsap.ticker.add(updatePosition);

    const handleMouseMove = (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleMouseClick = (e) => {
      const id = nextLaserId.current++;
      const rad = (angle - 90) * (Math.PI / 180);
      
      // Posición inicial del láser
      const laserStartX = pos.x;
      const laserStartY = pos.y - 20; // Ajustado para la punta de la nave
      
      // Calcular distancia máxima (diagonal de la pantalla para asegurar que llegue al borde)
      const maxDistance = Math.sqrt(window.innerWidth ** 2 + window.innerHeight ** 2) * 2;
      
      const newLaser = { 
        id, 
        x: laserStartX, 
        y: laserStartY, 
        angle
      };
      
      setLasers(prev => [...prev, newLaser]);
      
      // Animar el láser
      setTimeout(() => {
        const laserElement = document.querySelector(`.laser-${id}`);
        if (laserElement) {
          gsap.to(laserElement, {
            x: `+=${Math.cos(rad) * maxDistance}`,
            y: `+=${Math.sin(rad) * maxDistance}`,
            duration: 1,
            ease: 'none',
            onComplete: () => {
              setLasers(prev => prev.filter(l => l.id !== id));
            }
          });
          
          // Efecto de desvanecimiento
          gsap.to(laserElement, {
            opacity: 0,
            duration: 1,
            ease: 'power2.in'
          });
        }
      }, 0);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleMouseClick);

    return () => {
      gsap.ticker.remove(updatePosition);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleMouseClick);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="spaceship-cursor">
        <SpaceshipSVG />
      </div>
      {lasers.map(laser => (
        <div 
          key={laser.id} 
          className={`laser-beam laser-${laser.id}`}
          style={{
            position: 'fixed',
            left: laser.x,
            top: laser.y,
            width: '4px',
            height: '30px',
            background: `linear-gradient(to bottom, 
              var(--text-accent), 
              var(--pastel-pink),
              transparent)`,
            boxShadow: `
              0 0 20px var(--text-accent),
              0 0 40px var(--pastel-pink),
              inset 0 0 10px rgba(255,255,255,0.8)
            `,
            borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
            transform: `translate(-50%, -50%) rotate(${laser.angle}deg)`,
            transformOrigin: 'center center',
            pointerEvents: 'none',
            zIndex: 9999,
            filter: 'blur(0.5px)'
          }}
        />
      ))}
    </>
  );
};

export default Cursor;