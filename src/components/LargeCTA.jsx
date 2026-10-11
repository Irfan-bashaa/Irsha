import React from 'react';
import { Sparkles, MessageSquare } from 'lucide-react';
import { getWhatsAppUrl, WhatsAppIcon } from '../config/whatsapp';

export default function LargeCTA({ onOpenAssistant }) {
  return (
    <section className="relative py-32 md:py-44 dark:bg-[#070B14] bg-[#EDF1F7] overflow-hidden transition-colors duration-300 border-t border-b dark:border-transparent border-[var(--border-subtle)]">
      {/* Volumetric Blue Core Glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] md:w-[950px] h-[550px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(79, 140, 255, 0.20) 0%, rgba(110, 168, 255, 0.08) 35%, rgba(13, 19, 32, 0.02) 60%, transparent 80%)',
          filter: 'blur(100px)',
        }}
      />

      {/* Tech Grid Background Accent */}
      <div className="absolute inset-0 bg-tech-grid opacity-20 pointer-events-none" />

      {/* Floating Decorative Geometry in Background */}
      <div className="absolute -left-10 top-1/4 w-36 h-36 rounded-3xl border border-[#4F8CFF]/20 rotate-12 pointer-events-none animate-float-slow hidden md:block shadow-[0_0_30px_rgba(79,140,255,0.12)]" />
      <div className="absolute -right-10 bottom-1/4 w-44 h-44 rounded-3xl border border-[#6EA8FF]/25 -rotate-12 pointer-events-none animate-float-slow hidden md:block shadow-[0_0_30px_rgba(110,168,255,0.12)]" style={{ animationDelay: '3s' }} />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10 text-center">
        
        {/* Subtle Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-[#192235] border border-[var(--border-card)] mb-8 backdrop-blur shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#4F8CFF] animate-pulse" />
          <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-[var(--text-secondary)]">
            Initiate Collaboration
          </span>
        </div>

        {/* Huge Heading */}
        <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold text-[var(--text-primary)] tracking-[-0.04em] leading-[0.98] mb-8">
          HAVE AN IDEA?<br />
          <span className="text-blue-gradient">We'll Figure Out The Technology.</span>
        </h2>

        {/* Supporting text */}
        <p className="text-lg sm:text-xl md:text-2xl text-[var(--text-secondary)] max-w-2xl mx-auto mb-12 font-normal leading-relaxed">
          You don't need to know the technology. Tell us what you want to build. We'll engineer the platform.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
          {/* Primary CTA -> WhatsApp */}
          <a
            href={getWhatsAppUrl("Hi Irsha, I have an idea I'd like to build. I'd like to discuss the technology direction with your engineering team.")}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-3d-blue group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-xl text-base font-bold text-white bg-gradient-to-r from-[#4F8CFF] to-[#6EA8FF] shadow-[0_4px_25px_rgba(79,140,255,0.35)] hover:shadow-[0_8px_40px_rgba(79,140,255,0.65)] transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer no-underline border border-[#4F8CFF]"
          >
            <WhatsAppIcon className="w-5 h-5 text-white transition-transform duration-200 group-hover:scale-115" />
            <span>Tell Us Your Idea →</span>
          </a>

          {/* Secondary CTA -> AI Assistant Trigger */}
          {onOpenAssistant && (
            <button
              onClick={onOpenAssistant}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl text-base font-semibold text-[var(--text-primary)] bg-white dark:bg-[#192235] border border-[var(--border-card)] hover:border-[#4F8CFF]/50 hover:bg-[var(--bg-card-hover)] transition-all duration-300 cursor-pointer no-underline shadow-xs hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4 text-[#3D7FFF] dark:text-[#6EA8FF]" />
              <span>Not Sure What You Need?</span>
            </button>
          )}
        </div>

        {/* Reassurance Badges */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-[var(--text-muted)]">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#25D366]" />
            <span>Direct WhatsApp response within 24 hours</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F8CFF]" />
            <span>Strict Mutual NDA Included</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#BFD7FF]" />
            <span>Direct Access to Principal Engineers</span>
          </div>
        </div>

      </div>
    </section>
  );
}
