import React, { useEffect, useRef } from 'react';

export default function ElectricEnergyCursor() {
  const canvasRef = useRef(null);

  useEffect(() => {
    // Check if device supports fine hover/pointer (disable on mobile/touch)
    const isTouch = window.matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;
    if (isTouch) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    // Mouse coordinates and physics
    const mouse = {
      x: width / 2,
      y: height / 2,
      targetX: width / 2,
      targetY: height / 2,
      speed: 0,
      lastX: width / 2,
      lastY: height / 2,
      isHovering: false,
      isClicking: false,
    };

    // Trail history for energy streak
    const history = [];
    const MAX_HISTORY = 12;

    // Energy Spark Particle pool
    const particles = [];
    const MAX_PARTICLES = 50;

    class EnergyParticle {
      constructor(x, y, isHovering) {
        this.reset(x, y, isHovering);
      }

      reset(x, y, isHovering) {
        this.x = x + (Math.random() - 0.5) * (isHovering ? 16 : 8);
        this.y = y + (Math.random() - 0.5) * (isHovering ? 16 : 8);
        const speed = Math.random() * 2.2 + 0.6;
        const angle = Math.random() * Math.PI * 2;
        this.vx = Math.cos(angle) * speed;
        this.vy = Math.sin(angle) * speed;
        this.size = Math.random() * (isHovering ? 4.5 : 2.8) + 1.0;
        this.alpha = 1;
        this.life = 0;
        this.maxLife = Math.random() * 20 + 15;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.vx *= 0.94;
        this.vy *= 0.94;
        this.size = Math.max(0, this.size - 0.1);
        this.life++;
        this.alpha = 1 - this.life / this.maxLife;
        return this.life < this.maxLife && this.size > 0.2;
      }

      draw(c, isLight = false) {
        c.save();
        c.globalAlpha = Math.max(0, this.alpha * (isLight ? 0.9 : 0.85));
        c.beginPath();
        c.arc(this.x, this.y, this.size, 0, Math.PI * 2);

        // Electric Blue glowing particle gradient
        const grad = c.createRadialGradient(
          this.x,
          this.y,
          0,
          this.x,
          this.y,
          this.size * 1.8
        );
        if (isLight) {
          grad.addColorStop(0, '#FFFFFF');
          grad.addColorStop(0.4, '#4F8CFF');
          grad.addColorStop(0.8, '#3D7FFF');
          grad.addColorStop(1, 'rgba(61, 127, 255, 0)');
        } else {
          grad.addColorStop(0, '#FFFFFF');
          grad.addColorStop(0.35, '#6EA8FF');
          grad.addColorStop(0.75, '#4F8CFF');
          grad.addColorStop(1, 'rgba(79, 140, 255, 0)');
        }

        c.fillStyle = grad;
        c.shadowColor = isLight ? '#3D7FFF' : '#4F8CFF';
        c.shadowBlur = isLight ? 6 : 10;
        c.fill();
        c.restore();
      }
    }

    const onMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    const onMouseDown = () => {
      mouse.isClicking = true;
    };
    const onMouseUp = () => {
      mouse.isClicking = false;
    };

    const onMouseOver = (e) => {
      const target = e.target;
      if (
        target.closest('button') ||
        target.closest('a') ||
        target.closest('.interactive-target') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('select')
      ) {
        mouse.isHovering = true;
      } else {
        mouse.isHovering = false;
      }
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseover', onMouseOver);

    let animationFrameId;
    let orbitAngle = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth mouse interpolation
      const dx = mouse.targetX - mouse.x;
      const dy = mouse.targetY - mouse.y;
      mouse.x += dx * 0.38;
      mouse.y += dy * 0.38;

      const moveDist = Math.hypot(mouse.x - mouse.lastX, mouse.y - mouse.lastY);
      mouse.speed = moveDist;
      mouse.lastX = mouse.x;
      mouse.lastY = mouse.y;

      // Track trail history
      history.unshift({ x: mouse.x, y: mouse.y });
      if (history.length > MAX_HISTORY) history.pop();

      // Spawn electric spark particles on movement or hover
      const spawnCount = mouse.isHovering
        ? 2
        : mouse.speed > 1.8
        ? Math.min(3, Math.floor(mouse.speed / 4) + 1)
        : Math.random() < 0.2
        ? 1
        : 0;

      for (let i = 0; i < spawnCount; i++) {
        if (particles.length < MAX_PARTICLES) {
          particles.push(new EnergyParticle(mouse.x, mouse.y, mouse.isHovering));
        }
      }

      const isLight = document.documentElement.classList.contains('light');

      // Draw subtle energy trail line when moving
      if (history.length > 2 && mouse.speed > 0.5) {
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(history[0].x, history[0].y);
        for (let i = 1; i < history.length; i++) {
          ctx.lineTo(history[i].x, history[i].y);
        }
        ctx.strokeStyle = isLight
          ? 'rgba(61, 127, 255, 0.25)'
          : 'rgba(79, 140, 255, 0.35)';
        ctx.lineWidth = mouse.isHovering ? 2.5 : 1.5;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();
        ctx.restore();
      }

      // Update & draw energy particles
      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        if (!p.update()) {
          particles.splice(i, 1);
        } else {
          p.draw(ctx, isLight);
        }
      }

      // Draw Main Core Cursor Orb
      ctx.save();
      const coreRadius = mouse.isHovering ? 7.5 : mouse.isClicking ? 4.5 : 5.5;

      // Outer Blue Energy Halo
      const haloGrad = ctx.createRadialGradient(
        mouse.x,
        mouse.y,
        0,
        mouse.x,
        mouse.y,
        mouse.isHovering ? 26 : 16
      );
      if (isLight) {
        haloGrad.addColorStop(0, 'rgba(61, 127, 255, 0.35)');
        haloGrad.addColorStop(0.5, 'rgba(61, 127, 255, 0.18)');
        haloGrad.addColorStop(1, 'rgba(61, 127, 255, 0)');
      } else {
        haloGrad.addColorStop(0, 'rgba(79, 140, 255, 0.45)');
        haloGrad.addColorStop(0.5, 'rgba(110, 168, 255, 0.20)');
        haloGrad.addColorStop(1, 'rgba(79, 140, 255, 0)');
      }

      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, mouse.isHovering ? 26 : 16, 0, Math.PI * 2);
      ctx.fillStyle = haloGrad;
      ctx.fill();

      // Inner Glowing Blue Core
      ctx.beginPath();
      ctx.arc(mouse.x, mouse.y, coreRadius, 0, Math.PI * 2);
      if (isLight) {
        ctx.fillStyle = mouse.isHovering ? '#285DB8' : '#3D7FFF';
        ctx.shadowColor = 'rgba(61, 127, 255, 0.7)';
        ctx.shadowBlur = mouse.isHovering ? 14 : 9;
      } else {
        ctx.fillStyle = mouse.isHovering ? '#FFFFFF' : '#4F8CFF';
        ctx.shadowColor = '#4F8CFF';
        ctx.shadowBlur = mouse.isHovering ? 18 : 12;
      }
      ctx.fill();

      // If hovering over interactive element, render 3 small orbiting electric nodes
      if (mouse.isHovering) {
        orbitAngle += 0.09;
        for (let i = 0; i < 3; i++) {
          const a = orbitAngle + (i * Math.PI * 2) / 3;
          const ox = mouse.x + Math.cos(a) * 15;
          const oy = mouse.y + Math.sin(a) * 15;
          ctx.beginPath();
          ctx.arc(ox, oy, 1.8, 0, Math.PI * 2);
          ctx.fillStyle = isLight ? '#3D7FFF' : '#6EA8FF';
          ctx.shadowColor = isLight ? '#4F8CFF' : '#BFD7FF';
          ctx.shadowBlur = 6;
          ctx.fill();
        }
      }

      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseover', onMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9999]"
      aria-hidden="true"
    />
  );
}
