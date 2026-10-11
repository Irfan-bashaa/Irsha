import React from 'react';
import { ChevronRight } from 'lucide-react';
import Hero3DCore from './Hero3DCore';
import { getWhatsAppUrl, WhatsAppIcon } from '../config/whatsapp';

export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-24 flex items-center overflow-hidden bg-[var(--bg-primary)] transition-colors duration-300"
    >
      {/* Background Atmosphere Layers */}
      <div className="absolute inset-0 bg-tech-grid opacity-40 pointer-events-none" />
      
      {/* Subtle Blue Glow behind right side */}
      <div 
        className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(79, 140, 255, 0.18) 0%, rgba(110, 168, 255, 0.05) 45%, transparent 70%)',
          filter: 'blur(80px)',
        }}
      />
      
      {/* Soft Top Left Atmospheric Glow */}
      <div 
        className="absolute -top-24 -left-24 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(191, 215, 255, 0.08) 0%, transparent 70%)',
          filter: 'blur(70px)',
        }}
      />

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT COLUMN: Core Value & Cinematic Typography */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Small Label Pill */}
            <div className="animate-hero-reveal inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/90 dark:bg-[#192235]/90 border border-[var(--border-subtle)] mb-8 backdrop-blur shadow-xs hover:border-[#4F8CFF]/50 transition-colors">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#4F8CFF] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#6EA8FF]" />
              </span>
              <span className="text-[12px] font-bold tracking-[0.18em] uppercase text-[var(--text-secondary)] font-mono">
                Digital Technology Partner
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="animate-hero-reveal-delay-1 text-4xl sm:text-6xl md:text-7xl lg:text-[84px] font-extrabold text-[var(--text-primary)] leading-[0.98] tracking-[-0.04em] mb-7">
              Your Vision.<br />
              Our <span className="text-blue-gradient">Technology.</span>
            </h1>

            {/* Supporting Text */}
            <p className="animate-hero-reveal-delay-2 text-lg md:text-xl lg:text-[21px] text-[var(--text-secondary)] leading-[1.6] max-w-xl mb-10 font-normal">
              We design and build powerful digital experiences that help ambitious businesses move forward.
            </p>

            {/* CTAs */}
            <div className="animate-hero-reveal-delay-3 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-4">
              {/* Primary Real WhatsApp CTA Link */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d-blue group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl text-base font-bold transition-all duration-300 transform hover:-translate-y-1 active:translate-y-0 cursor-pointer no-underline border border-[#4F8CFF]/40"
              >
                <WhatsAppIcon className="w-5 h-5 text-white transition-transform duration-200 group-hover:scale-115" />
                <span>Start a Project on WhatsApp →</span>
              </a>

              {/* Secondary CTA */}
              <a
                href="#work"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-base font-semibold text-[var(--text-primary)] bg-white dark:bg-[#141C2B] border border-[var(--border-card)] hover:border-[#4F8CFF]/50 hover:bg-[var(--bg-card-hover)] transition-all duration-300 no-underline shadow-xs hover:-translate-y-0.5"
              >
                <span>Explore Our Work</span>
                <ChevronRight className="w-4 h-4 text-[var(--text-secondary)]" />
              </a>
            </div>

            {/* Supporting WhatsApp micro-label */}
            <div className="animate-hero-reveal-delay-3 flex items-center gap-2 text-xs font-mono text-[var(--text-muted)] mb-14">
              <span className="w-1.5 h-1.5 rounded-full bg-[#4F8CFF] animate-pulse" />
              <span>Chat with us directly on WhatsApp • Instant project consultation</span>
            </div>

            {/* Trust & Performance Metrics Banner */}
            <div className="animate-hero-reveal-delay-3 grid grid-cols-3 gap-6 pt-8 border-t border-[var(--border-subtle)] w-full max-w-lg">
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-[var(--text-primary)] font-['Manrope']">99.98%</div>
                <div className="text-xs md:text-sm text-[var(--text-secondary)] mt-1">System Reliability</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-[var(--text-primary)] font-['Manrope']">60+</div>
                <div className="text-xs md:text-sm text-[var(--text-secondary)] mt-1">Digital Products Shipped</div>
              </div>
              <div>
                <div className="text-2xl md:text-3xl font-extrabold text-[var(--text-primary)] font-['Manrope']">&lt; 85ms</div>
                <div className="text-xs md:text-sm text-[var(--text-secondary)] mt-1">Average Response Time</div>
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Interactive 3D Digital Core */}
          <div className="lg:col-span-5 relative w-full flex items-center justify-center">
            <Hero3DCore />
          </div>

        </div>
      </div>
    </section>
  );
}
