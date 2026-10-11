import React, { useEffect, useRef } from 'react';

export default function AboutSection() {
  const canvasRef = useRef(null);

  // Canvas visual: Glowing Electric Blue path moving through space toward a bright horizon
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement.clientHeight || 400);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    let animationId;
    let offset = 0;

    const render = () => {
      offset += 0.8;
      ctx.clearRect(0, 0, width, height);

      const isLight = document.documentElement.classList.contains('light');
      const horizonY = height * 0.35;
      const vanishingX = width * 0.5;

      const bgGrad = ctx.createLinearGradient(0, 0, 0, height);
      if (isLight) {
        bgGrad.addColorStop(0, '#EDF1F7');
        bgGrad.addColorStop(0.35, '#E8F0FF');
        bgGrad.addColorStop(1, '#EDF1F7');
      } else {
        bgGrad.addColorStop(0, '#070B14');
        bgGrad.addColorStop(0.35, '#0D1320');
        bgGrad.addColorStop(1, '#070B14');
      }
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, width, height);

      // Bright horizon blue glow
      const horizonGlow = ctx.createRadialGradient(
        vanishingX,
        horizonY,
        0,
        vanishingX,
        horizonY,
        width * 0.4
      );
      if (isLight) {
        horizonGlow.addColorStop(0, 'rgba(61, 127, 255, 0.45)');
        horizonGlow.addColorStop(0.3, 'rgba(79, 140, 255, 0.22)');
        horizonGlow.addColorStop(0.8, 'rgba(61, 127, 255, 0.05)');
        horizonGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      } else {
        horizonGlow.addColorStop(0, 'rgba(79, 140, 255, 0.45)');
        horizonGlow.addColorStop(0.3, 'rgba(110, 168, 255, 0.2)');
        horizonGlow.addColorStop(0.8, 'rgba(61, 127, 255, 0.05)');
        horizonGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');
      }
      ctx.fillStyle = horizonGlow;
      ctx.fillRect(0, 0, width, height);

      // Perspective Grid Lines along the glowing path
      const lines = 14;
      ctx.lineWidth = 1.2;

      for (let i = 0; i <= lines; i++) {
        const bottomX = (width / lines) * i;
        ctx.beginPath();
        ctx.moveTo(vanishingX, horizonY);
        ctx.lineTo(bottomX, height);

        const distFromCenter = Math.abs(bottomX - vanishingX) / (width * 0.5);
        if (distFromCenter < 0.3) {
          ctx.strokeStyle = isLight ? 'rgba(61, 127, 255, 0.6)' : 'rgba(79, 140, 255, 0.55)';
        } else if (distFromCenter < 0.6) {
          ctx.strokeStyle = isLight ? 'rgba(110, 168, 255, 0.3)' : 'rgba(110, 168, 255, 0.25)';
        } else {
          ctx.strokeStyle = isLight ? 'rgba(13, 19, 32, 0.07)' : 'rgba(245, 247, 250, 0.04)';
        }
        ctx.stroke();
      }

      // Horizontal moving light pulses
      for (let z = 0; z < 12; z++) {
        const p = ((z * 40 + offset) % 240) / 240;
        const py = horizonY + Math.pow(p, 2.2) * (height - horizonY);
        const pwidth = p * width;
        const leftX = vanishingX - pwidth / 2;
        const rightX = vanishingX + pwidth / 2;

        ctx.beginPath();
        ctx.moveTo(leftX, py);
        ctx.lineTo(rightX, py);
        ctx.strokeStyle = isLight ? `rgba(61, 127, 255, ${p * 0.55})` : `rgba(79, 140, 255, ${p * 0.65})`;
        ctx.lineWidth = p * 2.5;
        ctx.stroke();
      }

      // Center High-Intensity Radiant Pathway
      const pathGrad = ctx.createLinearGradient(vanishingX, horizonY, vanishingX, height);
      if (isLight) {
        pathGrad.addColorStop(0, 'rgba(61, 127, 255, 0.95)');
        pathGrad.addColorStop(0.2, 'rgba(79, 140, 255, 0.65)');
        pathGrad.addColorStop(0.7, 'rgba(191, 215, 255, 0.35)');
        pathGrad.addColorStop(1, 'rgba(61, 127, 255, 0)');
      } else {
        pathGrad.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
        pathGrad.addColorStop(0.2, 'rgba(79, 140, 255, 0.7)');
        pathGrad.addColorStop(0.7, 'rgba(110, 168, 255, 0.3)');
        pathGrad.addColorStop(1, 'rgba(61, 127, 255, 0)');
      }

      ctx.beginPath();
      ctx.moveTo(vanishingX - 2, horizonY);
      ctx.lineTo(vanishingX + 2, horizonY);
      ctx.lineTo(vanishingX + 90, height);
      ctx.lineTo(vanishingX - 90, height);
      ctx.closePath();
      ctx.fillStyle = pathGrad;
      ctx.fill();

      // Horizon Sun / Portal
      ctx.beginPath();
      ctx.arc(vanishingX, horizonY, 18, 0, Math.PI * 2);
      ctx.fillStyle = isLight ? '#3D7FFF' : '#4F8CFF';
      ctx.shadowColor = isLight ? '#3D7FFF' : '#4F8CFF';
      ctx.shadowBlur = 40;
      ctx.fill();

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section id="about" className="relative py-28 md:py-36 bg-[var(--bg-secondary)] overflow-hidden border-t border-b border-[var(--border-subtle)] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* About Narrative Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white dark:bg-[#192235] border border-[var(--border-subtle)] mb-6 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3D7FFF] dark:bg-[#6EA8FF]" />
              <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-[var(--text-secondary)]">
                Our Purpose
              </span>
            </div>

            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--text-primary)] tracking-[-0.03em] leading-[1.08] mb-8">
              We Don't Just Build Websites. <br />
              We Build <span className="text-blue-gradient">Digital Futures.</span>
            </h2>

            <p className="text-lg sm:text-xl text-[var(--text-secondary)] leading-relaxed max-w-2xl font-light">
              Every business starts with an idea. Our role is to give that idea direction, design and technology — and turn it into something people can experience.
            </p>
          </div>

          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="p-6 rounded-2xl card-3d-elevated">
              <div className="text-xs font-mono font-bold uppercase text-[#3D7FFF] dark:text-[#6EA8FF] mb-1">
                Direction → Progress → Future
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                We eliminate technical ambiguity with crystal-clear roadmaps, relentless execution speed, and long-term architectural stability.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl card-3d-elevated">
                <div className="text-2xl font-extrabold text-[var(--text-primary)] font-['Manrope']">100%</div>
                <div className="text-xs text-[var(--text-secondary)] mt-1">Bespoke Codebases</div>
              </div>
              <div className="p-5 rounded-2xl card-3d-elevated">
                <div className="text-2xl font-extrabold text-[#3D7FFF] dark:text-[#6EA8FF] font-['Manrope']">0%</div>
                <div className="text-xs text-[var(--text-secondary)] mt-1">Generic Templates</div>
              </div>
            </div>
          </div>
        </div>

        {/* Horizon Path Visual Representation */}
        <div className="relative w-full h-[360px] md:h-[440px] rounded-3xl overflow-hidden border border-[var(--border-card)] shadow-2xl dark:bg-[#070B14] bg-[#EDF1F7]">
          <canvas ref={canvasRef} className="w-full h-full" />

          {/* Visual Legend Overlay */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4 pointer-events-none">
            <div className="flex items-center gap-3 px-4 py-2 rounded-xl bg-white/90 dark:bg-[#070B14]/80 backdrop-blur-md border border-[var(--border-subtle)] shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#4F8CFF] animate-ping" />
              <span className="text-xs font-mono text-[var(--text-primary)] uppercase tracking-widest font-semibold">
                Vector: Direction → Progress → Future
              </span>
            </div>

            <div className="hidden sm:flex items-center gap-6 px-4 py-2 rounded-xl bg-white/90 dark:bg-[#070B14]/80 backdrop-blur-md border border-[var(--border-subtle)] text-xs text-[var(--text-secondary)] shadow-xs">
              <span>Precision Engineering</span>
              <span>•</span>
              <span>Futuristic Aesthetics</span>
              <span>•</span>
              <span>Continuous Velocity</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
