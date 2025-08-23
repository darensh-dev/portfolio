import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { gsap } from 'gsap';
import { navLinks } from '@/data';

const SpaceshipIndicator = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform -rotate-90">
        <path d="M12 2L2 20H22L12 2Z" fill="var(--text-accent)" />
    </svg>
);

const Header = ({ activeSection, scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const indicatorRef = useRef(null);
  const navItemsRef = useRef({});

  useEffect(() => {
    const activeItem = navItemsRef.current[activeSection];
    if (activeItem && indicatorRef.current) {
        gsap.to(indicatorRef.current, {
            x: activeItem.offsetLeft + activeItem.offsetWidth / 2 - indicatorRef.current.offsetWidth / 2,
            duration: 0.6,
            ease: 'elastic.out(1, 0.75)',
        });
    }
  }, [activeSection]);

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div 
            className="font-display font-bold text-xl gradient-text"
            whileHover={{ scale: 1.05 }}
          >
            @Darensh
          </motion.div>

          <div className="hidden md:block">
            <nav className="glass rounded-full px-6 py-3 relative">
                <div className="flex items-center space-x-6">
                    {navLinks.map((link) => (
                      <button
                        key={link.id}
                        ref={el => navItemsRef.current[link.id] = el}
                        onClick={() => scrollToSection(link.id)}
                        className={`relative z-10 flex items-center space-x-2 px-3 py-2 rounded-full transition-all duration-300 group ${
                          activeSection === link.id 
                            ? 'bg-[var(--bg-accent)] text-[var(--text-accent)] shadow-lg scale-105' 
                            : 'hover:bg-[var(--bg-secondary)] hover:scale-105'
                        }`}
                      >
                        <link.PlanetComponent 
                          active={activeSection === link.id} 
                          className={`transition-transform duration-300 ${
                            activeSection === link.id ? 'scale-110' : 'group-hover:scale-110'
                          }`}
                        />
                        <span className={`text-sm font-medium capitalize transition-colors duration-300 ${
                          activeSection === link.id 
                            ? 'text-[var(--text-accent)]' 
                            : 'text-[var(--text-primary)] group-hover:text-[var(--text-accent)]'
                        }`}>
                          {link.name}
                        </span>
                      </button>
                    ))}
                </div>
                <div ref={indicatorRef} className="absolute top-[calc(100%_+_8px)] left-0 z-0">
                    <SpaceshipIndicator />
                </div>
            </nav>
          </div>

          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg glass hover:bg-[var(--bg-secondary)] transition-colors duration-200"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-t mt-2"
            style={{ borderColor: 'var(--border)' }}
          >
            <div className="px-4 py-4 space-y-2">
              {navLinks.map((link) => (
                <motion.button
                  key={link.id}
                  onClick={() => {
                    scrollToSection(link.id);
                    setIsMenuOpen(false);
                  }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center w-full text-left capitalize py-3 px-4 rounded-lg transition-all duration-300 ${
                    activeSection === link.id 
                      ? 'bg-[var(--bg-accent)] text-[var(--text-accent)] shadow-lg' 
                      : 'hover:bg-[var(--bg-secondary)] hover:translate-x-1'
                  }`}
                >
                  <link.PlanetComponent 
                    active={activeSection === link.id} 
                    size={24} 
                    className={`transition-transform duration-300 ${
                      activeSection === link.id ? 'scale-110' : ''
                    }`}
                  />
                  <span className={`ml-4 font-medium transition-colors duration-300 ${
                    activeSection === link.id 
                      ? 'text-[var(--text-accent)]' 
                      : 'text-[var(--text-primary)]'
                  }`}>
                    {link.name}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Header;