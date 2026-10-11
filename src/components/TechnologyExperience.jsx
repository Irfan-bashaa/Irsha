import React, { useState, useEffect, useRef } from 'react';
import { Lightbulb, PenTool, Code, Box, TrendingUp, Sparkles, ArrowRight, Play } from 'lucide-react';

const STAGES = [
  {
    id: 'idea',
    step: '01',
    name: 'IDEA',
    tagline: 'Raw Vision & Conceptualization',
    desc: 'Unstructured business requirements, market gaps, and ambition coalesce into a clear architectural thesis.',
    icon: Lightbulb,
    accent: '#4F8CFF',
    stateMetrics: { entropy: 'High', latency: 'N/A', fidelity: 'Conceptual', velocity: 'Phase 0' },
    details: 'We deconstruct your core value proposition, interview stakeholders, evaluate technical feasibility, and blueprint the initial hypothesis.'
  },
  {
    id: 'design',
    step: '02',
    name: 'DESIGN',
    tagline: 'Precision Systems & Ergonomics',
    desc: 'Wireframes crystallize into mathematical grid layouts, high-fidelity tokens, and tactile micro-interactions.',
    icon: PenTool,
    accent: '#6EA8FF',
    stateMetrics: { entropy: 'Organizing', latency: '< 16ms UI', fidelity: 'Vector', velocity: 'Design Sprint' },
    details: 'Every interface is engineered for clarity, cognitive ease, WCAG AAA accessibility, and emotional resonance.'
  },
  {
    id: 'technology',
    step: '03',
    name: 'TECHNOLOGY',
    tagline: 'Full-Stack Engine & Intelligence',
    desc: 'Dense neural networks, type-safe API contracts, edge distributed databases, and automated pipelines activate.',
    icon: Code,
    accent: '#3D7FFF',
    stateMetrics: { entropy: 'Deterministic', latency: '< 50ms API', fidelity: 'Compiled', velocity: 'CI/CD Active' },
    details: 'Built with Next.js, Go, Python, and cloud-native microservices. Clean code with 100% automated test coverage.'
  },
  {
    id: 'product',
    step: '04',
    name: 'PRODUCT',
    tagline: 'Hardened Production Artifact',
    desc: 'The finished digital product launches with military-grade security, flawless responsiveness, and instant utility.',
    icon: Box,
    accent: '#4F8CFF',
    stateMetrics: { entropy: 'Zero', latency: '99.99% SLA', fidelity: 'Production', velocity: 'Live' },
    details: 'End-to-end load testing, penetration audits, SEO pre-rendering, and global CDN caching ensure day-one enterprise resilience.'
  },
  {
    id: 'growth',
    step: '05',
    name: 'GROWTH',
    tagline: 'Autonomous Scaling & Expansion',
    desc: 'Self-optimizing AI loops, telemetry analytics, and modular feature expansion scale the product globally.',
    icon: TrendingUp,
    accent: '#6EA8FF',
    stateMetrics: { entropy: 'Expanding', latency: 'Global Edge', fidelity: 'Multi-Region', velocity: 'Compounding' },
    details: 'Continuous experimentation, automated funnel tracking, and architecture elasticity drive exponential commercial momentum.'
  },
];

export default function TechnologyExperience() {
  const [activeStageIndex, setActiveStageIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const canvasRef = useRef(null);

  const currentStage = STAGES[activeStageIndex];

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveStageIndex((prev) => (prev + 1) % STAGES.length);
    }, 3800);
    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = canvas.parentElement.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement.clientHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    const count = 120;
    const particles = Array.from({ length: count }, (_, i) => ({
      x: (Math.random() - 0.5) * width * 0.8,
      y: (Math.random() - 0.5) * height * 0.8,
      angle: Math.random() * Math.PI * 2,
      dist: Math.random() * 160 + 20,
      speed: Math.random() * 0.02 + 0.008,
      size: Math.random() * 3 + 1,
      color: STAGES[activeStageIndex].accent,
    }));

    let animationId;
    let time = 0;

    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;
      const isLight = document.documentElement.classList.contains('light');

      if (activeStageIndex === 0) {
        for (let i = 0; i < count; i++) {
          const p = particles[i];
          p.angle += p.speed * 1.5;
          const r = p.dist + Math.sin(time + i) * 20;
          const px = cx + Math.cos(p.angle) * r;
          const py = cy + Math.sin(p.angle) * r;

          ctx.beginPath();
          ctx.arc(px, py, p.size, 0, Math.PI * 2);
          ctx.fillStyle = '#4F8CFF';
          ctx.shadowColor = '#6EA8FF';
          ctx.shadowBlur = 8;
          ctx.fill();
        }

        ctx.beginPath();
        const coreR = 14 + Math.sin(time * 6) * 4;
        ctx.arc(cx, cy, coreR, 0, Math.PI * 2);
        ctx.fillStyle = isLight ? '#3D7FFF' : '#4F8CFF';
        ctx.shadowColor = '#4F8CFF';
        ctx.shadowBlur = 25;
        ctx.fill();

      } else if (activeStageIndex === 1) {
        ctx.strokeStyle = isLight ? 'rgba(61, 127, 255, 0.28)' : 'rgba(79, 140, 255, 0.2)';
        ctx.lineWidth = 1;
        for (let x = -150; x <= 150; x += 30) {
          ctx.beginPath();
          ctx.moveTo(cx + x, cy - 150);
          ctx.lineTo(cx + x, cy + 150);
          ctx.stroke();
        }
        for (let y = -150; y <= 150; y += 30) {
          ctx.beginPath();
          ctx.moveTo(cx - 150, cy + y);
          ctx.lineTo(cx + 150, cy + y);
          ctx.stroke();
        }

        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(time * 0.4);
        ctx.strokeStyle = '#6EA8FF';
        ctx.lineWidth = 2;
        ctx.strokeRect(-60, -60, 120, 120);

        ctx.rotate(Math.PI / 4);
        ctx.strokeStyle = '#4F8CFF';
        ctx.strokeRect(-45, -45, 90, 90);
        ctx.restore();

      } else if (activeStageIndex === 2) {
        for (let i = 0; i < 8; i++) {
          const a = (i * Math.PI * 2) / 8 + time * 0.2;
          const x2 = cx + Math.cos(a) * 140;
          const y2 = cy + Math.sin(a) * 140;

          ctx.beginPath();
          ctx.moveTo(cx, cy);
          ctx.lineTo(x2, y2);
          ctx.strokeStyle = 'rgba(79, 140, 255, 0.4)';
          ctx.lineWidth = 2;
          ctx.stroke();

          const packetProgress = (Math.sin(time * 3 + i) + 1) / 2;
          const px = cx + (x2 - cx) * packetProgress;
          const py = cy + (y2 - cy) * packetProgress;

          ctx.beginPath();
          ctx.arc(px, py, 4, 0, Math.PI * 2);
          ctx.fillStyle = isLight ? '#3D7FFF' : '#4F8CFF';
          ctx.shadowColor = '#4F8CFF';
          ctx.shadowBlur = 12;
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(cx, cy, 32, 0, Math.PI * 2);
        ctx.fillStyle = isLight ? '#EDF1F7' : '#0D1320';
        ctx.strokeStyle = '#4F8CFF';
        ctx.lineWidth = 3;
        ctx.fill();
        ctx.stroke();

      } else if (activeStageIndex === 3) {
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(time * 0.5);

        ctx.beginPath();
        ctx.arc(0, 0, 50, 0, Math.PI * 2);
        ctx.fillStyle = '#4F8CFF';
        ctx.shadowColor = '#6EA8FF';
        ctx.shadowBlur = 35;
        ctx.fill();

        ctx.strokeStyle = isLight ? '#3D7FFF' : '#0D1320';
        ctx.lineWidth = 3;
        ctx.strokeRect(-40, -40, 80, 80);
        ctx.restore();

        ctx.beginPath();
        ctx.arc(cx, cy, 80 + Math.sin(time * 2) * 5, 0, Math.PI * 2);
        ctx.strokeStyle = 'rgba(79, 140, 255, 0.6)';
        ctx.lineWidth = 2;
        ctx.stroke();

      } else if (activeStageIndex === 4) {
        for (let ring = 1; ring <= 4; ring++) {
          const r = ((time * 40 + ring * 50) % 200) + 20;
          const alpha = 1 - r / 220;
          ctx.beginPath();
          ctx.arc(cx, cy, r, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(79, 140, 255, ${alpha * 0.8})`;
          ctx.lineWidth = 2;
          ctx.stroke();
        }

        for (let i = 0; i < 16; i++) {
          const a = (i * Math.PI * 2) / 16 + time * 0.1;
          const r = 110 + Math.sin(time + i) * 20;
          const nx = cx + Math.cos(a) * r;
          const ny = cy + Math.sin(a) * r;

          ctx.beginPath();
          ctx.arc(nx, ny, 3.5, 0, Math.PI * 2);
          ctx.fillStyle = '#4F8CFF';
          ctx.shadowBlur = 10;
          ctx.shadowColor = '#6EA8FF';
          ctx.fill();
        }

        ctx.beginPath();
        ctx.arc(cx, cy, 28, 0, Math.PI * 2);
        ctx.fillStyle = isLight ? '#3D7FFF' : '#4F8CFF';
        ctx.shadowColor = '#4F8CFF';
        ctx.shadowBlur = 30;
        ctx.fill();
      }

      animationId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, [activeStageIndex]);

  return (
    <section id="experience" className="relative py-28 md:py-36 bg-[var(--bg-secondary)] overflow-hidden border-t border-b border-[var(--border-subtle)] transition-colors duration-300">
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(79, 140, 255, 0.08) 0%, transparent 70%)',
          filter: 'blur(100px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white dark:bg-[#192235] border border-[var(--border-subtle)] mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3D7FFF] dark:bg-[#6EA8FF]" />
            <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-[var(--text-secondary)]">
              Interactive Story
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--text-primary)] tracking-[-0.03em] mb-6">
            Where Ideas Become <span className="text-blue-gradient">Technology.</span>
          </h2>

          <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
            Follow the digital metamorphosis from raw spark to high-performance enterprise ecosystem.
          </p>
        </div>

        {/* 5-Step Stage Progression Bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 p-2 rounded-2xl bg-white dark:bg-[#192235] border border-[var(--border-subtle)] mb-12 max-w-5xl mx-auto shadow-xs">
          {STAGES.map((stg, idx) => {
            const Icon = stg.icon;
            const isActive = idx === activeStageIndex;
            return (
              <button
                key={stg.id}
                onClick={() => {
                  setActiveStageIndex(idx);
                  setIsPlaying(false);
                }}
                className={`flex-1 min-w-[140px] flex items-center justify-center gap-2.5 py-3 px-4 rounded-xl text-sm font-bold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-[#4F8CFF] via-[#6EA8FF] to-[#3D7FFF] text-white shadow-[0_4px_18px_rgba(79,140,255,0.35)] scale-[1.02]'
                    : 'text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[#EDF1F7] dark:hover:bg-[var(--bg-elevated)]'
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[var(--text-muted)]'}`} />
                <span>{stg.name}</span>
                <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded ${
                  isActive ? 'bg-black/20 text-white' : 'bg-black/5 dark:bg-white/5 text-[var(--text-muted)]'
                }`}>
                  {stg.step}
                </span>
              </button>
            );
          })}
        </div>

        {/* Story Visualizer Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center max-w-6xl mx-auto">
          <div className="lg:col-span-6 relative aspect-square w-full max-w-[500px] mx-auto rounded-3xl bg-white dark:bg-[#192235] border border-[var(--border-card)] p-4 overflow-hidden flex items-center justify-center shadow-xl card-3d-elevated">
            <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />
            <canvas ref={canvasRef} className="w-full h-full relative z-10" />

            <div className="absolute bottom-5 left-5 z-20 flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/95 dark:bg-[#192235]/90 backdrop-blur border border-[var(--border-subtle)] shadow-xs">
              <span className="w-2 h-2 rounded-full" style={{ backgroundColor: currentStage.accent }} />
              <span className="text-xs font-mono text-[var(--text-primary)] uppercase tracking-wider font-semibold">
                State: {currentStage.name}
              </span>
            </div>

            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute top-5 right-5 z-20 p-2.5 rounded-xl bg-white/95 dark:bg-[#192235]/90 backdrop-blur border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:border-[#4F8CFF]/50 shadow-xs transition-colors cursor-pointer"
              title={isPlaying ? 'Pause Auto-Play' : 'Auto-Play Story'}
            >
              {isPlaying ? <Sparkles className="w-4 h-4 text-[#3D7FFF] dark:text-[#6EA8FF] animate-spin" /> : <Play className="w-4 h-4" />}
            </button>
          </div>

          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="inline-block text-sm font-mono font-bold text-[#3D7FFF] dark:text-[#6EA8FF] mb-2">
              Phase {currentStage.step} of 05
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mb-2">
              {currentStage.tagline}
            </h3>

            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
              {currentStage.desc}
            </p>

            <div className="p-5 rounded-2xl bg-white dark:bg-[#192235] border border-[var(--border-card)] mb-8 shadow-xs card-3d-elevated">
              <div className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                Execution Methodology
              </div>
              <p className="text-sm text-[var(--text-primary)] leading-relaxed">
                {currentStage.details}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
              {Object.entries(currentStage.stateMetrics).map(([key, value]) => (
                <div key={key} className="p-3 rounded-xl bg-white dark:bg-[#192235] border border-[var(--border-subtle)] shadow-xs">
                  <div className="text-[11px] font-mono text-[var(--text-muted)] uppercase">{key}</div>
                  <div className="text-sm font-bold text-[var(--text-primary)] mt-0.5">{value}</div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setActiveStageIndex((prev) => (prev + 1) % STAGES.length)}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-[var(--text-primary)] bg-white dark:bg-[#192235] border border-[var(--border-card)] hover:border-[#4F8CFF]/50 hover:bg-[var(--bg-card-hover)] transition-all shadow-xs cursor-pointer hover:-translate-y-0.5"
              >
                <span>Advance to Next Stage</span>
                <ArrowRight className="w-4 h-4 text-[#3D7FFF] dark:text-[#6EA8FF]" />
              </button>

              <span className="text-xs text-[var(--text-muted)] font-mono">
                {activeStageIndex + 1} / {STAGES.length}
              </span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
