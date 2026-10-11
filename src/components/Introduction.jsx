import React from 'react';
import { Sparkles, Terminal, Layers } from 'lucide-react';

export default function Introduction() {
  return (
    <section className="relative py-28 md:py-36 bg-[var(--bg-secondary)] overflow-hidden border-t border-b border-[var(--border-subtle)] transition-colors duration-300">
      {/* Subtle animated blue-energy line moving across the section */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#4F8CFF] to-transparent opacity-60 animate-pulse" />
      
      {/* Background Soft Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse, rgba(79, 140, 255, 0.12) 0%, transparent 70%)',
          filter: 'blur(90px)',
        }}
      />

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col items-start">
          
          {/* Small Label */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white dark:bg-[#192235] border border-[var(--border-subtle)] mb-8 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3D7FFF] dark:bg-[#6EA8FF]" />
            <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-[var(--text-secondary)]">
              What We Do
            </span>
          </div>

          {/* Large Headline */}
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-[var(--text-primary)] leading-[1.05] tracking-[-0.03em] max-w-4xl mb-8">
            Ideas deserve <br className="hidden sm:inline" />
            <span className="text-blue-gradient">better technology.</span>
          </h2>

          {/* Paragraph */}
          <p className="text-xl sm:text-2xl md:text-3xl text-[var(--text-secondary)] font-light leading-[1.5] max-w-4xl mb-12">
            From business websites to intelligent digital platforms, Irsha transforms ideas into modern products designed to perform, scale and grow.
          </p>

          {/* Subtle Dynamic Energy Divider */}
          <div className="w-full relative h-[2px] bg-[var(--border-subtle)] rounded-full overflow-hidden my-6">
            <div className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-[#4F8CFF] to-transparent animate-energy-line" />
          </div>

          {/* Value Props Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-8">
            <div className="p-6 rounded-2xl card-3d-elevated backdrop-blur-sm">
              <div className="text-sm font-bold text-[#3D7FFF] dark:text-[#6EA8FF] uppercase tracking-wider mb-2 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-[#3D7FFF] dark:text-[#6EA8FF]" /> Uncompromising Speed
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Zero bloated architectures. Every application is optimized for sub-second responses and flawless core vitals.
              </p>
            </div>

            <div className="p-6 rounded-2xl card-3d-elevated backdrop-blur-sm">
              <div className="text-sm font-bold text-[#3D7FFF] dark:text-[#6EA8FF] uppercase tracking-wider mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#3D7FFF] dark:text-[#6EA8FF]" /> Intelligent Workflows
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Embedded artificial intelligence that automates redundant operations and elevates customer personalization.
              </p>
            </div>

            <div className="p-6 rounded-2xl card-3d-elevated backdrop-blur-sm">
              <div className="text-sm font-bold text-[#3D7FFF] dark:text-[#6EA8FF] uppercase tracking-wider mb-2 flex items-center gap-2">
                <Layers className="w-4 h-4 text-[#3D7FFF] dark:text-[#6EA8FF]" /> Resilient Architecture
              </div>
              <p className="text-sm text-[var(--text-secondary)] leading-relaxed">
                Modular software designed to effortlessly withstand 10x traffic spikes and scale with your enterprise.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
