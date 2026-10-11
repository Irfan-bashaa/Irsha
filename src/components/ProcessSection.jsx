import React, { useState, useEffect } from 'react';
import { Compass, Palette, Code2, Rocket, LineChart } from 'lucide-react';

const PROCESS_STEPS = [
  {
    step: '01',
    name: 'Discover',
    tagline: 'Understand your business, audience and goals.',
    icon: Compass,
  },
  {
    step: '02',
    name: 'Design',
    tagline: 'Create the visual direction and experience.',
    icon: Palette,
  },
  {
    step: '03',
    name: 'Build',
    tagline: 'Transform the concept into a real product.',
    icon: Code2,
  },
  {
    step: '04',
    name: 'Launch',
    tagline: 'Test, optimize and release.',
    icon: Rocket,
  },
  {
    step: '05',
    name: 'Grow',
    tagline: 'Improve, scale and evolve.',
    icon: LineChart,
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById('process');
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progression through section
      if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
        const progress = Math.min(1, Math.max(0, (windowHeight * 0.5 - rect.top) / rect.height));
        const currentIdx = Math.min(4, Math.floor(progress * 5));
        setActiveStep(currentIdx);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section id="process" className="relative py-28 md:py-36 bg-[var(--bg-secondary)] overflow-hidden border-t border-b border-[var(--border-subtle)] transition-colors duration-300">
      {/* Background Glow */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(79, 140, 255, 0.08) 0%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white dark:bg-[#192235] border border-[var(--border-subtle)] mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3D7FFF] dark:bg-[#6EA8FF]" />
            <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-[var(--text-secondary)]">
              Methodology
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--text-primary)] tracking-[-0.03em] mb-6">
            From Idea to <span className="text-blue-gradient">Impact.</span>
          </h2>

          <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
            A disciplined, transparent delivery framework engineered to ship high-impact digital products without guesswork.
          </p>
        </div>

        {/* 3D Connected Progression Track (Desktop) */}
        <div className="hidden lg:block relative mb-14 max-w-5xl mx-auto">
          {/* Base connecting line with thin blue progression */}
          <div className="absolute top-1/2 left-8 right-8 -translate-y-1/2 h-[2px] bg-[var(--border-subtle)]">
            <div 
              className="h-full bg-gradient-to-r from-[#4F8CFF] via-[#6EA8FF] to-[#3D7FFF] shadow-[0_0_12px_rgba(79,140,255,0.4)] transition-all duration-500" 
              style={{ width: `${((activeStep + 1) / 5) * 100}%` }}
            />
          </div>

          {/* 5 Circular Nodes aligned with the 5 stages */}
          <div className="relative flex justify-between items-center z-10 px-4">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = idx <= activeStep;
              return (
                <button 
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`flex flex-col items-center group cursor-pointer transition-transform duration-300 ${
                    idx === activeStep ? 'scale-110' : 'hover:scale-105'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center font-mono font-bold text-xs transition-all duration-300 ${
                    isActive 
                      ? 'bg-white dark:bg-[#0D1320] border-[#4F8CFF] text-[#3D7FFF] dark:text-[#6EA8FF] shadow-[0_0_16px_rgba(79,140,255,0.45)]' 
                      : 'bg-white dark:bg-[#192235] border-[var(--border-subtle)] text-[var(--text-muted)]'
                  }`}>
                    {step.step}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* 5-Step Process Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {PROCESS_STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isActive = idx === activeStep;

            return (
              <div
                key={step.step}
                onClick={() => setActiveStep(idx)}
                className={`group relative p-7 rounded-2xl card-3d-elevated flex flex-col justify-between cursor-pointer transition-all duration-300 ${
                  isActive ? 'border-[#4F8CFF] dark:border-[#4F8CFF] shadow-[0_15px_35px_-10px_rgba(79,140,255,0.25)] -translate-y-2' : ''
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <div className={`lg:hidden w-7 h-7 rounded-full border flex items-center justify-center text-xs font-mono font-bold ${
                        isActive ? 'bg-[#4F8CFF]/20 border-[#4F8CFF] text-[#3D7FFF] dark:text-[#6EA8FF]' : 'border-[var(--border-subtle)] text-[var(--text-muted)]'
                      }`}>
                        {step.step}
                      </div>
                      <span className="hidden lg:inline text-xs font-mono font-bold tracking-widest text-[#3D7FFF] dark:text-[#6EA8FF]">
                        STAGE {step.step}
                      </span>
                    </div>

                    <div className={`w-10 h-10 rounded-xl border flex items-center justify-center transition-all duration-300 shadow-xs ${
                      isActive 
                        ? 'bg-[#4F8CFF] text-white border-[#4F8CFF] shadow-[0_4px_16px_rgba(79,140,255,0.35)]' 
                        : 'bg-[#EDF1F7] dark:bg-[var(--bg-elevated)] border-[var(--border-subtle)] text-[var(--text-secondary)] group-hover:bg-[#4F8CFF] group-hover:text-white'
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-[var(--text-primary)] mb-3 font-['Manrope']">
                    {step.name}
                  </h3>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                    {step.tagline}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
