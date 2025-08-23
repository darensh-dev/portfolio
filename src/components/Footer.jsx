import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t" style={{ borderColor: 'var(--border)' }}>
      <div className="max-w-6xl mx-auto text-center">
        <p style={{ color: 'var(--text-secondary)' }}>
          © 2024 Desarrollador Full Stack. Construido en el hiperespacio con React y GSAP.
        </p>
      </div>
    </footer>
  );
};

export default Footer;