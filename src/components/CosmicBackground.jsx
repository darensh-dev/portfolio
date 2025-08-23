import React, { useRef, useEffect } from 'react';
import { createNoise2D } from 'simplex-noise';

const CosmicBackground = () => {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;
        let animationFrameId;

        let stars = [];
        const numStars = window.innerWidth < 768 ? 100 : 300;
        const noise2D = createNoise2D();

        class Star {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.z = Math.random() * width;
                this.ox = this.x;
                this.oy = this.y;
                this.vx = 0;
                this.vy = 0;
                this.alpha = 0;
            }

            project() {
                const perspective = width * 0.8;
                const scale = perspective / (perspective + this.z);
                const projX = (this.x - width / 2) * scale + width / 2;
                const projY = (this.y - height / 2) * scale + height / 2;
                const r = Math.max(0, 2.5 * scale);
                return { x: projX, y: projY, r, scale };
            }
        }

        const createStars = () => {
            stars = [];
            for (let i = 0; i < numStars; i++) {
                stars.push(new Star());
            }
        }
        createStars();

        const resize = () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
            createStars();
        };

        window.addEventListener('resize', resize);
        
        let time = 0;

        const animate = () => {
            ctx.fillStyle = getComputedStyle(document.documentElement).getPropertyValue('--bg-primary');
            ctx.fillRect(0,0,width,height);
            
            const starColor = getComputedStyle(document.documentElement).getPropertyValue('--text-primary');

            stars.forEach(star => {
                const angle = noise2D(star.ox * 0.0005, star.oy * 0.0005 + time * 0.00005) * Math.PI * 4;
                
                star.vx = Math.cos(angle) * 0.05;
                star.vy = Math.sin(angle) * 0.05;

                star.x += star.vx;
                star.y += star.vy;
                star.z -= 0.1;

                if (star.alpha < 1) star.alpha += 0.01;

                if (star.z < 1) {
                    star.z = width;
                    star.x = Math.random() * width;
                    star.y = Math.random() * height;
                    star.ox = star.x;
                    star.oy = star.y;
                    star.alpha = 0;
                }
                
                if (star.x < 0 || star.x > width || star.y < 0 || star.y > height) {
                     star.z = width;
                     star.x = Math.random() * width;
                     star.y = Math.random() * height;
                     star.ox = star.x;
                     star.oy = star.y;
                     star.alpha = 0;
                }

                const { x, y, r, scale } = star.project();
                if (r > 0) {
                    ctx.beginPath();
                    ctx.globalAlpha = star.alpha * scale;
                    ctx.fillStyle = starColor;
                    ctx.arc(x, y, r, 0, Math.PI * 2);
                    ctx.fill();
                }
            });
            
            ctx.globalAlpha = 1;
            time++;
            animationFrameId = requestAnimationFrame(animate);
        };
        
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrameId);
        }
    }, []);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 w-full h-full z-0" />;
};

export default CosmicBackground;