import React from 'react';
import { Target, Gem, Cpu, Bot, Maximize2, Compass } from 'lucide-react';

const PRINCIPLES = [
  {
    phase: '01',
    word: 'THINK',
    title: 'Business-First Architecture',
    desc: 'Technology built around your actual business goals, unit economics and customer acquisition targets.',
    icon: Target,
    tag: 'Strategic Alignment'
  },
  {
    phase: '02',
    word: 'BUILD',
    title: 'Engineering & Design Rigor',
    desc: 'Modern interfaces designed to create deep brand trust, reduce friction and command market authority.',
    icon: Gem,
    tag: 'Visual Excellence'
  },
  {
    phase: '03',
    word: 'LAUNCH',
    title: 'Sub-Second Speed & Quality',
    desc: 'Powered by high-velocity edge architectures, type safety and battle-tested modern web standards.',
    icon: Cpu,
    tag: 'Engineering Rigor'
  },
  {
    phase: '04',
    word: 'GROW',
    title: 'Elastic Scale & AI Intelligence',
    desc: 'Prepare businesses for the next generation of intelligent software, automated pipelines and generative agents.',
    icon: Bot,
    tag: 'Next-Gen Intelligence'
  },
];

export default function WhyIrsha() {
  return (
    <section className="relative py-28 md:py-36 bg-[var(--bg-primary)] overflow-hidden transition-colors duration-300">
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#4F8CFF]/[0.04] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white dark:bg-[#192235] border border-[var(--border-subtle)] mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3D7FFF] dark:bg-[#6EA8FF]" />
            <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-[var(--text-secondary)]">
              The Irsha Advantage
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--text-primary)] tracking-[-0.03em] mb-6">
            Why <span className="text-blue-gradient">Irsha?</span>
          </h2>

          <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
            We operate at the exact intersection of visionary aesthetics and unforgiving engineering discipline.
          </p>
        </div>

        {/* 4 Large Strategic Pillars (THINK, BUILD, LAUNCH, GROW) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {PRINCIPLES.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.word}
                className="group relative p-8 rounded-3xl card-3d-elevated flex flex-col justify-between overflow-hidden"
              >
                {/* Large Background Word Shadow */}
                <div className="absolute top-2 right-4 text-5xl font-black font-['Manrope'] text-[var(--text-primary)]/5 select-none transition-transform group-hover:scale-110">
                  {item.word}
                </div>

                <div>
                  <div className="flex items-center justify-between mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-[#EDF1F7] dark:bg-[#192235] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-primary)] group-hover:text-white group-hover:bg-[#4F8CFF] transition-all duration-300 shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono font-bold tracking-widest text-[#3D7FFF] dark:text-[#6EA8FF] uppercase">
                      PILLAR {item.phase}
                    </span>
                  </div>

                  <div className="text-3xl font-extrabold text-[#3D7FFF] dark:text-[#6EA8FF] tracking-tight mb-2 font-['Manrope']">
                    {item.word}
                  </div>

                  <h3 className="text-xl font-bold text-[var(--text-primary)] mb-3">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed font-normal">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono text-[var(--text-muted)]">
                  <span>{item.tag}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4F8CFF]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
