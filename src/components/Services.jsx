import React, { useState, useRef, useEffect } from 'react';
import { 
  Globe, 
  Smartphone, 
  Cpu, 
  ShoppingBag, 
  Layout, 
  Code2, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles,
  X,
  Layers,
  Zap,
  ShieldCheck,
  Check
} from 'lucide-react';
import { getWhatsAppUrl, WhatsAppIcon } from '../config/whatsapp';

// ==========================================
// 6 TAILORED 3D VISUAL COMPONENTS FOR SERVICES
// ==========================================

// 01. Web Development 3D Visual
function WebDev3DVisual({ isHovered, tilt }) {
  return (
    <div className="relative w-full h-52 flex items-center justify-center pointer-events-none overflow-hidden rounded-2xl bg-gradient-to-b from-[#0D1320]/60 to-[#141C2B]/90 border border-[var(--border-subtle)]">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#4F8CFF_1px,transparent_1px)] [background-size:12px_12px]" />
      
      {/* Ambient Radial Backlight */}
      <div 
        className={`absolute w-36 h-36 rounded-full bg-[#4F8CFF]/20 blur-2xl transition-opacity duration-500 ${
          isHovered ? 'opacity-100 scale-125' : 'opacity-40'
        }`}
      />

      {/* Floating 3D Browser Window */}
      <div 
        className="w-[90%] h-[155px] rounded-xl bg-white dark:bg-[#141C2B] border border-[var(--border-card)] shadow-2xl overflow-hidden transition-transform duration-300 relative flex flex-col"
        style={{
          transform: `perspective(800px) rotateX(${tilt.x * 0.7 + 6}deg) rotateY(${tilt.y * 0.7 - 5}deg) translateZ(${isHovered ? 24 : 0}px)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Browser Topbar */}
        <div className="px-3 py-2 bg-[#EDF1F7] dark:bg-[#192235] border-b border-[var(--border-subtle)] flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#4F8CFF]" />
          </div>
          <div className="px-3 py-0.5 rounded-md bg-white dark:bg-[#0D1320] border border-[var(--border-subtle)] text-[10px] font-mono text-[var(--text-muted)] flex items-center gap-1">
            <span className="text-[#3D7FFF] dark:text-[#6EA8FF] font-bold">https://</span>irsha.dev
          </div>
          <div className="w-2 h-2 rounded-full bg-[#4F8CFF] animate-ping" />
        </div>

        {/* Browser Canvas Content */}
        <div className="p-3 grid grid-cols-12 gap-2 text-[10px] font-mono flex-1 bg-white/50 dark:bg-[#141C2B]/50">
          <div className="col-span-7 space-y-1.5 text-[var(--text-secondary)]">
            <div className="flex items-center gap-1">
              <span className="text-[#3D7FFF] dark:text-[#6EA8FF] font-bold">import</span>
              <span className="text-[var(--text-primary)]">React</span>
              <span className="text-[#3D7FFF] dark:text-[#6EA8FF] font-bold">from</span>
              <span className="text-amber-500 dark:text-amber-300">'react'</span>
            </div>
            <div className="flex items-center gap-1 pl-1">
              <span className="text-purple-600 dark:text-purple-400 font-bold">const</span>
              <span className="text-blue-600 dark:text-blue-400 font-bold">App</span>
              <span className="text-[var(--text-primary)]">= () =&gt; (</span>
            </div>
            <div className="pl-2 py-1 px-2 rounded bg-[#4F8CFF]/15 border border-[#4F8CFF]/40 text-[#0D1320] dark:text-[#BFD7FF] font-bold flex items-center justify-between shadow-xs">
              <span>&lt;ScalablePlatform /&gt;</span>
              <span className="text-[9px] bg-[#4F8CFF] text-white px-1 rounded font-bold">200 OK</span>
            </div>
          </div>

          <div className="col-span-5 bg-[#EDF1F7] dark:bg-[#192235] rounded-lg p-2 border border-[var(--border-subtle)] flex flex-col justify-between shadow-xs">
            <div className="h-1.5 w-10 bg-[#4F8CFF] rounded-full" />
            <div className="space-y-1">
              <div className="h-1 w-full bg-[var(--border-subtle)] rounded" />
              <div className="h-1 w-3/4 bg-[var(--border-subtle)] rounded" />
            </div>
            <div className="h-4 rounded bg-[#4F8CFF]/20 border border-[#4F8CFF]/40 flex items-center justify-center text-[9px] text-[#3D7FFF] dark:text-[#6EA8FF] font-extrabold">
              Sub-second
            </div>
          </div>
        </div>
      </div>

      {/* Floating 3D Metric Badge */}
      <div 
        className="absolute bottom-3 right-4 px-3 py-1 rounded-lg bg-[#4F8CFF] text-white font-mono text-[10px] font-extrabold shadow-lg border border-[#6EA8FF] flex items-center gap-1.5 transition-transform duration-300"
        style={{
          transform: `perspective(800px) translateZ(${isHovered ? 40 : 12}px) rotateY(-5deg)`,
        }}
      >
        <Zap className="w-3 h-3 fill-white" />
        <span>99.9% Lighthouse</span>
      </div>
    </div>
  );
}

// 02. Mobile Applications 3D Visual
function Mobile3DVisual({ isHovered, tilt }) {
  return (
    <div className="relative w-full h-52 flex items-center justify-center pointer-events-none overflow-hidden rounded-2xl bg-gradient-to-b from-[#0D1320]/60 to-[#141C2B]/90 border border-[var(--border-subtle)]">
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#4F8CFF_1px,transparent_1px)] [background-size:12px_12px]" />

      <div 
        className={`absolute w-36 h-36 rounded-full bg-[#4F8CFF]/20 blur-2xl transition-opacity duration-500 ${
          isHovered ? 'opacity-100 scale-125' : 'opacity-40'
        }`}
      />

      {/* Floating 3D Smartphone Frame */}
      <div 
        className="w-[125px] h-[165px] rounded-[22px] bg-white dark:bg-[#141C2B] border-2 border-[var(--border-card)] shadow-2xl p-2 transition-transform duration-300 relative flex flex-col justify-between"
        style={{
          transform: `perspective(800px) rotateX(${tilt.x * 0.7 - 4}deg) rotateY(${tilt.y * 0.7 + 8}deg) translateZ(${isHovered ? 26 : 0}px)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Dynamic Island / Notch */}
        <div className="w-10 h-2 bg-[#0D1320] dark:bg-[#192235] rounded-full mx-auto mb-2 flex items-center justify-center">
          <div className="w-1 h-1 rounded-full bg-[#4F8CFF]" />
        </div>

        {/* Mobile UI Screen Content */}
        <div className="flex-1 rounded-xl bg-[#EDF1F7] dark:bg-[#192235] p-2 flex flex-col justify-between border border-[var(--border-subtle)]">
          <div className="flex items-center justify-between">
            <div className="w-5 h-5 rounded-full bg-[#4F8CFF] flex items-center justify-center font-mono font-bold text-[8px] text-white">
              iOS
            </div>
            <div className="h-1.5 w-8 bg-[var(--border-subtle)] rounded-full" />
          </div>

          <div className="p-1.5 rounded-lg bg-white dark:bg-[#141C2B] border border-[var(--border-subtle)] shadow-xs">
            <div className="text-[9px] font-bold text-[var(--text-primary)] font-mono">Mobile App</div>
            <div className="text-[7px] text-[#3D7FFF] dark:text-[#6EA8FF] font-semibold">Offline-First Engine</div>
          </div>

          <div className="grid grid-cols-2 gap-1">
            <div className="h-6 rounded bg-[#4F8CFF]/20 border border-[#4F8CFF]/30 flex items-center justify-center text-[8px] font-bold text-[#3D7FFF] dark:text-[#BFD7FF]">
              Native
            </div>
            <div className="h-6 rounded bg-[#192235] border border-[var(--border-subtle)] flex items-center justify-center text-[8px] font-bold text-[var(--text-secondary)]">
              Cross
            </div>
          </div>
        </div>

        {/* Home Indicator */}
        <div className="w-8 h-1 bg-[#0D1320] dark:bg-white/40 rounded-full mx-auto mt-1" />
      </div>

      {/* Floating Biometric Badge */}
      <div 
        className="absolute top-4 left-6 px-2.5 py-1 rounded-lg bg-white dark:bg-[#192235] border border-[#4F8CFF]/60 text-[9px] font-mono font-bold text-[var(--text-primary)] shadow-xl flex items-center gap-1.5"
        style={{
          transform: `perspective(800px) translateZ(${isHovered ? 38 : 10}px) rotateY(6deg)`,
        }}
      >
        <ShieldCheck className="w-3 h-3 text-[#4F8CFF]" />
        <span>Biometric Auth</span>
      </div>
    </div>
  );
}

// 03. AI Solutions 3D Visual
function Ai3DVisual({ isHovered, tilt }) {
  return (
    <div className="relative w-full h-52 flex items-center justify-center pointer-events-none overflow-hidden rounded-2xl bg-gradient-to-b from-[#0D1320]/60 to-[#141C2B]/90 border border-[var(--border-subtle)]">
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#4F8CFF_1px,transparent_1px)] [background-size:12px_12px]" />

      <div 
        className={`absolute w-36 h-36 rounded-full bg-[#4F8CFF]/25 blur-2xl transition-opacity duration-500 ${
          isHovered ? 'opacity-100 scale-125' : 'opacity-50'
        }`}
      />

      {/* Central Floating AI Sphere Nucleus & Orbiting Rings */}
      <div 
        className="relative w-28 h-28 flex items-center justify-center transition-transform duration-300"
        style={{
          transform: `perspective(800px) rotateX(${tilt.x * 0.8}deg) rotateY(${tilt.y * 0.8}deg) translateZ(${isHovered ? 28 : 0}px)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Outer Orbiting Ring */}
        <div className="absolute inset-0 rounded-full border border-[#4F8CFF]/50 animate-[spin_12s_linear_infinite]" />
        
        {/* Secondary Orbiting Ring */}
        <div className="absolute inset-2 rounded-full border border-dashed border-[#6EA8FF]/60 animate-[spin_8s_linear_infinite_reverse]" />

        {/* Central Core Sphere */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#3D7FFF] via-[#4F8CFF] to-[#6EA8FF] shadow-[0_0_30px_rgba(79,140,255,0.7)] flex items-center justify-center relative">
          <Cpu className="w-6 h-6 text-white" />
        </div>

        {/* Floating Neural Nodes */}
        <span className="absolute top-0 right-2 w-2.5 h-2.5 rounded-full bg-[#6EA8FF] shadow-[0_0_10px_#6EA8FF] animate-ping" />
        <span className="absolute bottom-2 left-1 w-2 h-2 rounded-full bg-[#4F8CFF] shadow-[0_0_8px_#4F8CFF]" />
      </div>

      {/* Floating Prompt/RAG Badge */}
      <div 
        className="absolute bottom-3 left-4 px-3 py-1 rounded-lg bg-white dark:bg-[#192235] border border-[#4F8CFF]/60 text-[9px] font-mono text-[var(--text-primary)] font-bold shadow-xl flex items-center gap-1.5"
        style={{
          transform: `perspective(800px) translateZ(${isHovered ? 42 : 12}px)`,
        }}
      >
        <Sparkles className="w-3 h-3 text-[#4F8CFF]" />
        <span>RAG + Multi-Agent</span>
      </div>
    </div>
  );
}

// 04. E-commerce 3D Visual
function Ecommerce3DVisual({ isHovered, tilt }) {
  return (
    <div className="relative w-full h-52 flex items-center justify-center pointer-events-none overflow-hidden rounded-2xl bg-gradient-to-b from-[#0D1320]/60 to-[#141C2B]/90 border border-[var(--border-subtle)]">
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#4F8CFF_1px,transparent_1px)] [background-size:12px_12px]" />

      <div 
        className={`absolute w-36 h-36 rounded-full bg-[#4F8CFF]/20 blur-2xl transition-opacity duration-500 ${
          isHovered ? 'opacity-100 scale-125' : 'opacity-40'
        }`}
      />

      {/* Floating 3D Product Showcase Card */}
      <div 
        className="w-[88%] h-[150px] rounded-xl bg-white dark:bg-[#141C2B] border border-[var(--border-card)] shadow-2xl p-3 flex items-center justify-between transition-transform duration-300 relative"
        style={{
          transform: `perspective(800px) rotateX(${tilt.x * 0.7 + 5}deg) rotateY(${tilt.y * 0.7 - 7}deg) translateZ(${isHovered ? 24 : 0}px)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Left Side: Product Details */}
        <div className="space-y-2 flex-1 pr-3">
          <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-[#4F8CFF]/20 border border-[#4F8CFF]/40 text-[9px] font-mono font-bold text-[#3D7FFF] dark:text-[#6EA8FF]">
            Headless Store
          </div>
          <div className="text-xs font-bold text-[var(--text-primary)] font-mono">Global Checkout</div>
          <div className="text-[10px] text-[var(--text-secondary)]">Multi-currency • Algolia Search</div>
          <div className="pt-1 flex items-center gap-2">
            <span className="text-sm font-extrabold text-[var(--text-primary)] font-mono">$249.00</span>
            <span className="text-[9px] text-[#3D7FFF] dark:text-[#BFD7FF] font-bold">In Stock</span>
          </div>
        </div>

        {/* Right Side: Product Card Graphic */}
        <div className="w-24 h-24 rounded-lg bg-[#EDF1F7] dark:bg-[#192235] border border-[var(--border-subtle)] flex flex-col items-center justify-center relative p-2 shadow-inner">
          <ShoppingBag className="w-8 h-8 text-[#3D7FFF] dark:text-[#6EA8FF] mb-1" />
          <div className="w-full py-1 rounded bg-[#4F8CFF] text-white text-[8px] font-bold text-center">
            Buy Now
          </div>
        </div>
      </div>

      {/* Floating Cart Badge */}
      <div 
        className="absolute top-4 right-4 px-2.5 py-1 rounded-lg bg-[#4F8CFF] text-white text-[9px] font-mono font-extrabold shadow-xl flex items-center gap-1"
        style={{
          transform: `perspective(800px) translateZ(${isHovered ? 38 : 10}px) rotateY(-8deg)`,
        }}
      >
        <span>🛒 High Conversion</span>
      </div>
    </div>
  );
}

// 05. UI/UX Design 3D Visual
function UiUx3DVisual({ isHovered, tilt }) {
  return (
    <div className="relative w-full h-52 flex items-center justify-center pointer-events-none overflow-hidden rounded-2xl bg-gradient-to-b from-[#0D1320]/60 to-[#141C2B]/90 border border-[var(--border-subtle)]">
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#4F8CFF_1px,transparent_1px)] [background-size:12px_12px]" />

      <div 
        className={`absolute w-36 h-36 rounded-full bg-[#4F8CFF]/20 blur-2xl transition-opacity duration-500 ${
          isHovered ? 'opacity-100 scale-125' : 'opacity-40'
        }`}
      />

      {/* Layered 3D Design Artboards */}
      <div 
        className="relative w-[85%] h-[145px] transition-transform duration-300"
        style={{
          transform: `perspective(800px) rotateX(${tilt.x * 0.7 + 7}deg) rotateY(${tilt.y * 0.7 + 5}deg) translateZ(${isHovered ? 25 : 0}px)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Bottom Layer Artboard */}
        <div className="absolute inset-0 rounded-xl bg-white/40 dark:bg-[#141C2B]/40 border border-[var(--border-subtle)] translate-x-3 translate-y-3 shadow-md" />

        {/* Top Active Artboard */}
        <div className="absolute inset-0 rounded-xl bg-white dark:bg-[#141C2B] border-2 border-[#4F8CFF] shadow-2xl p-3 flex flex-col justify-between">
          <div className="flex items-center justify-between border-b border-[var(--border-subtle)] pb-2">
            <div className="flex items-center gap-1 text-[9px] font-mono font-bold text-[var(--text-primary)]">
              <Layout className="w-3 h-3 text-[#3D7FFF] dark:text-[#6EA8FF]" />
              <span>Design Token System</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#0D1320]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#4F8CFF]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#EDF1F7]" />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-2">
            <div className="p-1.5 rounded bg-[#EDF1F7] dark:bg-[#192235] border border-[var(--border-subtle)] text-[8px] font-mono text-center font-semibold">
              Typography
            </div>
            <div className="p-1.5 rounded bg-[#4F8CFF]/20 border border-[#4F8CFF]/50 text-[8px] font-mono text-center font-bold text-[#3D7FFF] dark:text-[#BFD7FF]">
              Components
            </div>
            <div className="p-1.5 rounded bg-[#EDF1F7] dark:bg-[#192235] border border-[var(--border-subtle)] text-[8px] font-mono text-center font-semibold">
              WCAG AAA
            </div>
          </div>

          <div className="h-2 w-full bg-[#4F8CFF]/30 rounded-full overflow-hidden">
            <div className="h-full w-2/3 bg-[#4F8CFF] rounded-full" />
          </div>
        </div>

        {/* Floating Design Cursor Badge */}
        <div 
          className="absolute -bottom-2 -left-2 px-2.5 py-1 rounded-lg bg-[#0D1320] text-[#BFD7FF] border border-[#4F8CFF] text-[9px] font-mono font-bold shadow-xl flex items-center gap-1"
          style={{
            transform: `translateZ(${isHovered ? 35 : 10}px)`,
          }}
        >
          <span>✨ Figma Tokens</span>
        </div>
      </div>
    </div>
  );
}

// 06. Custom Software 3D Visual
function CustomSoftware3DVisual({ isHovered, tilt }) {
  return (
    <div className="relative w-full h-52 flex items-center justify-center pointer-events-none overflow-hidden rounded-2xl bg-gradient-to-b from-[#0D1320]/60 to-[#141C2B]/90 border border-[var(--border-subtle)]">
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#4F8CFF_1px,transparent_1px)] [background-size:12px_12px]" />

      <div 
        className={`absolute w-36 h-36 rounded-full bg-[#4F8CFF]/20 blur-2xl transition-opacity duration-500 ${
          isHovered ? 'opacity-100 scale-125' : 'opacity-40'
        }`}
      />

      {/* 3D Connected Microservices Architecture */}
      <div 
        className="w-[88%] h-[150px] rounded-xl bg-white dark:bg-[#141C2B] border border-[var(--border-card)] shadow-2xl p-3 flex flex-col justify-between transition-transform duration-300 relative"
        style={{
          transform: `perspective(800px) rotateX(${tilt.x * 0.7 - 6}deg) rotateY(${tilt.y * 0.7 + 6}deg) translateZ(${isHovered ? 24 : 0}px)`,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5 text-[9px] font-mono font-bold text-[var(--text-primary)]">
            <Code2 className="w-3.5 h-3.5 text-[#3D7FFF] dark:text-[#6EA8FF]" />
            <span>Microservice Cluster</span>
          </div>
          <span className="px-2 py-0.5 rounded bg-[#4F8CFF]/20 text-[8px] font-mono font-bold text-[#3D7FFF] dark:text-[#BFD7FF]">
            Kubernetes
          </span>
        </div>

        {/* Architecture Node Links */}
        <div className="grid grid-cols-3 gap-2 my-2">
          <div className="p-2 rounded bg-[#EDF1F7] dark:bg-[#192235] border border-[var(--border-subtle)] text-center">
            <div className="text-[8px] font-mono font-bold text-[var(--text-primary)]">API Gateway</div>
            <div className="text-[7px] text-[#3D7FFF] dark:text-[#6EA8FF]">Go Engine</div>
          </div>

          <div className="p-2 rounded bg-[#4F8CFF]/15 border border-[#4F8CFF]/40 text-center shadow-xs">
            <div className="text-[8px] font-mono font-bold text-[#0D1320] dark:text-[#BFD7FF]">Pub/Sub</div>
            <div className="text-[7px] text-[var(--text-secondary)]">Redis Queue</div>
          </div>

          <div className="p-2 rounded bg-[#EDF1F7] dark:bg-[#192235] border border-[var(--border-subtle)] text-center">
            <div className="text-[8px] font-mono font-bold text-[var(--text-primary)]">Postgres</div>
            <div className="text-[7px] text-emerald-500">Encrypted</div>
          </div>
        </div>

        {/* Live System Metrics Footer */}
        <div className="flex items-center justify-between text-[8px] font-mono border-t border-[var(--border-subtle)] pt-1.5">
          <span className="text-[var(--text-muted)]">Latency: &lt;2ms</span>
          <span className="text-[#3D7FFF] dark:text-[#6EA8FF] font-bold">Uptime: 100%</span>
        </div>
      </div>

      {/* Floating Security Badge */}
      <div 
        className="absolute top-4 left-4 px-2.5 py-1 rounded-lg bg-[#4F8CFF] text-white text-[9px] font-mono font-extrabold shadow-xl flex items-center gap-1"
        style={{
          transform: `perspective(800px) translateZ(${isHovered ? 38 : 10}px)`,
        }}
      >
        <span>🔒 Custom IP</span>
      </div>
    </div>
  );
}

// Map service numbers to their respective 3D visual component
const VISUAL_COMPONENTS = {
  '01': WebDev3DVisual,
  '02': Mobile3DVisual,
  '03': Ai3DVisual,
  '04': Ecommerce3DVisual,
  '05': UiUx3DVisual,
  '06': CustomSoftware3DVisual,
};

// ==========================================
// DATA DEFINITIONS (PRESERVED CONTENT)
// ==========================================
const SERVICES_DATA = [
  {
    number: '01',
    title: 'Web Development',
    shortDesc: 'Build scalable digital experiences for modern businesses.',
    icon: Globe,
    techStack: ['Next.js', 'React', 'TypeScript', 'Node.js', 'Edge APIs', 'Tailwind'],
    capabilities: [
      'High-performance marketing platforms',
      'Complex enterprise web applications',
      'Headless CMS integrations',
      'Core Web Vitals sub-second optimization',
      'API-first modular architectures'
    ],
    deliverables: 'Architecture blueprint, responsive codebase, automated CI/CD pipeline, performance benchmark report.',
  },
  {
    number: '02',
    title: 'Mobile Applications',
    shortDesc: 'Beautiful native and cross-platform mobile products.',
    icon: Smartphone,
    techStack: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase', 'GraphQL'],
    capabilities: [
      'Native iOS and Android development',
      'Cross-platform fluid applications',
      'Offline-first synchronization engines',
      'Biometric authentication & secure storage',
      'Real-time push notifications & telemetry'
    ],
    deliverables: 'Production app binaries, App Store & Google Play deployment, native SDK integrations.',
  },
  {
    number: '03',
    title: 'AI Solutions',
    shortDesc: 'Intelligent AI products, assistants, automation and workflows.',
    icon: Cpu,
    techStack: ['LLMs', 'OpenAI', 'Anthropic Claude', 'LangChain', 'Vector DBs', 'Python'],
    capabilities: [
      'Autonomous conversational assistants',
      'Document intelligence & semantic search',
      'Predictive analytics & ML forecasting',
      'Automated multi-agent workflows',
      'Enterprise retrieval augmented generation (RAG)'
    ],
    deliverables: 'Fine-tuned model endpoints, vector embedding pipelines, AI guardrails & evaluation benchmarks.',
  },
  {
    number: '04',
    title: 'E-commerce',
    shortDesc: 'Modern digital stores designed for conversion and scale.',
    icon: ShoppingBag,
    techStack: ['Shopify Plus', 'Medusa.js', 'Stripe', 'Algolia', 'Sanity', 'Next.js Commerce'],
    capabilities: [
      'Headless high-conversion storefronts',
      'Multi-currency global checkout architectures',
      'Real-time inventory & ERP synchronization',
      'Ultra-fast search & intelligent filtering',
      'Subscription & membership ecosystems'
    ],
    deliverables: 'Custom theme & components, payment gateway compliance, analytics & conversion funnel tracking.',
  },
  {
    number: '05',
    title: 'UI/UX Design',
    shortDesc: 'Interfaces that combine clarity, usability and visual excellence.',
    icon: Layout,
    techStack: ['Figma', 'Design Systems', 'Micro-interactions', 'Prototyping', 'Accessibility'],
    capabilities: [
      'Bespoke visual brand identity & typography',
      'Scalable design tokens & design systems',
      'Interactive high-fidelity clickable prototypes',
      'WCAG 2.1 AAA accessibility audits',
      'User journey mapping & friction elimination'
    ],
    deliverables: 'Production-ready Figma design system, token library, interactive prototypes, design specs.',
  },
  {
    number: '06',
    title: 'Custom Software',
    shortDesc: 'Purpose-built technology designed around unique business requirements.',
    icon: Code2,
    techStack: ['Go', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes', 'AWS/GCP'],
    capabilities: [
      'Custom ERP and CRM operations engines',
      'High-throughput data streaming pipelines',
      'Legacy system modernization & migration',
      'Microservices & event-driven architecture',
      'Military-grade encryption & security audits'
    ],
    deliverables: 'Complete IP ownership, scalable cloud infrastructure as code (IaC), documentation and SLA support.',
  },
];

// ==========================================
// INDIVIDUAL PHYSICAL 3D SERVICE CARD COMPONENT
// ==========================================
function ServiceCard({ service, onSelect }) {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsTouchDevice(true);
    }
  }, []);

  const handleMouseMove = (e) => {
    if (isTouchDevice || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const tiltX = ((y - centerY) / centerY) * -6;
    const tiltY = ((x - centerX) / centerX) * 6;
    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsHovered(false);
  };

  const VisualComponent = VISUAL_COMPONENTS[service.number] || WebDev3DVisual;

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      onClick={() => onSelect(service)}
      style={{
        transform: !isTouchDevice 
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) translateY(${isHovered ? '-8px' : '0px'})`
          : 'none',
        transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.4s ease-out',
      }}
      className={`group relative p-7 sm:p-8 rounded-3xl cursor-pointer select-none transition-all duration-300 flex flex-col justify-between overflow-hidden bg-white dark:bg-[#141C2B] border border-[var(--border-card)] shadow-xl ${
        isHovered 
          ? 'border-[#4F8CFF]/60 dark:border-[#4F8CFF]/60 shadow-[0_25px_50px_-12px_rgba(79,140,255,0.25)]' 
          : ''
      }`}
    >
      {/* Oversized Subtle Watermark Number Behind Visual */}
      <span className="text-[110px] font-extrabold font-mono text-[var(--text-primary)]/5 dark:text-white/5 select-none pointer-events-none absolute top-2 right-4 leading-none">
        {service.number}
      </span>

      {/* Internal Subtle Electric Blue Backlight on Hover */}
      <div 
        className={`absolute -top-20 -right-20 w-56 h-56 rounded-full pointer-events-none transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: `radial-gradient(circle, rgba(79, 140, 255, 0.20) 0%, transparent 75%)`,
          filter: 'blur(40px)',
        }}
      />

      <div>
        {/* TOP: Number Pill & Tech Status */}
        <div className="flex items-center justify-between mb-5 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#EDF3FF] dark:bg-[#192235] border border-[rgba(61,127,255,0.15)] dark:border-[rgba(110,168,255,0.20)] shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4F8CFF] animate-pulse" />
            <span className="text-xs font-mono font-bold tracking-widest text-[#285DB8] dark:text-[#BFD7FF]">
              {service.number} / CAPABILITY
            </span>
          </div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-[var(--text-muted)] font-semibold">
            Ready to Deploy
          </span>
        </div>

        {/* CENTER: Tailored 3D Visual Representation (Replaces Old Blank Cream Square) */}
        <div className="mb-6 relative z-10">
          <VisualComponent isHovered={isHovered} tilt={tilt} />
        </div>

        {/* BOTTOM: Title & Description */}
        <div className="relative z-10">
          <h3 className="text-2xl sm:text-[26px] font-extrabold text-[var(--text-primary)] mb-3 tracking-[-0.02em] group-hover:text-[#3D7FFF] dark:group-hover:text-[#6EA8FF] transition-colors">
            {service.title}
          </h3>

          <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
            {service.shortDesc}
          </p>

          {/* Premium Technology Chips */}
          <div className="flex flex-wrap gap-2 mb-6">
            {service.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 text-xs font-mono font-medium rounded-lg bg-[#EDF3FF] dark:bg-[#192235] text-[#285DB8] dark:text-[#BFD7FF] border border-[rgba(61,127,255,0.15)] dark:border-[rgba(110,168,255,0.20)] group-hover:border-[#4F8CFF] transition-all shadow-2xs"
              >
                {tech}
              </span>
            ))}
            {service.techStack.length > 4 && (
              <span className="px-2 py-1 text-xs font-mono text-[var(--text-muted)] font-semibold">
                +{service.techStack.length - 4} more
              </span>
            )}
          </div>
        </div>
      </div>

      {/* FOOTER: View Capabilities Tactile Control */}
      <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between relative z-10">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-secondary)] group-hover:text-[#3D7FFF] dark:group-hover:text-[#6EA8FF] transition-colors">
          View Capabilities
        </span>
        <div className="w-9 h-9 rounded-full bg-[#EDF1F7] dark:bg-[#192235] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-secondary)] group-hover:text-white group-hover:bg-[#4F8CFF] group-hover:border-[#4F8CFF] transition-all duration-300 shadow-xs">
          <ArrowRight className="w-4 h-4 transform group-hover:translate-x-0.5 transition-transform" />
        </div>
      </div>
    </div>
  );
}

// ==========================================
// MAIN SERVICES SECTION COMPONENT
// ==========================================
export default function Services() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <section id="services" className="relative py-28 md:py-36 bg-[var(--bg-primary)] overflow-hidden transition-colors duration-300 border-t border-b border-[var(--border-subtle)]">
      {/* Background Ambience */}
      <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-[#4F8CFF]/[0.06] rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-[#6EA8FF]/[0.05] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#192235] border border-[var(--border-subtle)] mb-4 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#4F8CFF] animate-pulse" />
              <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-[var(--text-secondary)] font-mono">
                Core Capabilities & Showroom
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--text-primary)] tracking-[-0.03em] leading-[1.08] mb-6">
              Technology Built Around <br />
              <span className="text-blue-gradient">Your Business.</span>
            </h2>
            <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed font-normal">
              Explore six distinct digital product categories engineered for performance, scale, and luxury user experience.
            </p>
          </div>

          <div className="mt-8 md:mt-0">
            <a
              href={getWhatsAppUrl("Hi Irsha, I would like to discuss custom technology architecture for my business.")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 text-sm font-bold text-[var(--text-primary)] px-6 py-3.5 rounded-xl bg-white dark:bg-[#192235] border border-[var(--border-card)] hover:border-[#4F8CFF]/60 transition-all duration-300 group cursor-pointer no-underline shadow-sm hover:-translate-y-0.5"
            >
              <WhatsAppIcon className="w-4 h-4 text-[#25D366]" />
              <span>Discuss Architecture on WhatsApp</span>
              <ArrowRight className="w-4 h-4 text-[#3D7FFF] dark:text-[#6EA8FF] group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

        {/* 6 Tailored Services Grid (3 per row desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-8">
          {SERVICES_DATA.map((service) => (
            <ServiceCard 
              key={service.number} 
              service={service} 
              onSelect={setSelectedService} 
            />
          ))}
        </div>

      </div>

      {/* Deep Capabilities Modal Drawer */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-white dark:bg-[#141C2B] border border-[var(--border-card)] p-6 sm:p-10 shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[#EDF1F7] dark:bg-[#192235] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-3 mb-4">
              <span className="text-sm font-mono font-bold text-[#3D7FFF] dark:text-[#6EA8FF]">
                {selectedService.number}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--border-subtle)]" />
              <span className="text-xs font-mono font-semibold tracking-wider uppercase text-[var(--text-secondary)]">
                Service Specification & Deliverables
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mb-4">
              {selectedService.title}
            </h3>

            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
              {selectedService.shortDesc}
            </p>

            {/* Capabilities List */}
            <div className="mb-8">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-4 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#4F8CFF]" /> Key Capabilities
              </h4>
              <div className="space-y-3">
                {selectedService.capabilities.map((cap, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm sm:text-base text-[var(--text-primary)]">
                    <CheckCircle2 className="w-5 h-5 text-[#3D7FFF] dark:text-[#6EA8FF] shrink-0 mt-0.5" />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Chips */}
            <div className="mb-8">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-3">
                Core Technologies
              </h4>
              <div className="flex flex-wrap gap-2">
                {selectedService.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-lg text-xs font-mono font-medium bg-[#EDF3FF] dark:bg-[#192235] text-[#285DB8] dark:text-[#BFD7FF] border border-[rgba(61,127,255,0.15)] dark:border-[rgba(110,168,255,0.20)]"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Deliverables */}
            <div className="p-4 rounded-xl bg-[#EDF1F7] dark:bg-[#192235] border border-[var(--border-subtle)] mb-8">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-1">
                Typical Deliverables
              </div>
              <p className="text-sm text-[var(--text-primary)] font-medium">
                {selectedService.deliverables}
              </p>
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <a
                href={getWhatsAppUrl(`Hi Irsha, I would like to discuss a ${selectedService.title} project with you. I would like to know more about your services.`)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSelectedService(null)}
                className="btn-3d-blue w-full sm:w-auto flex-1 py-3.5 px-6 rounded-xl font-bold text-white shadow-[0_4px_20px_rgba(79,140,255,0.4)] flex items-center justify-center gap-2.5 cursor-pointer no-underline hover:-translate-y-0.5 transition-transform border border-[#6EA8FF]"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Inquire About {selectedService.title} on WhatsApp →</span>
              </a>
              <button
                onClick={() => setSelectedService(null)}
                className="w-full sm:w-auto py-3.5 px-6 rounded-xl font-semibold text-[var(--text-secondary)] bg-[#EDF1F7] dark:bg-[#192235] hover:text-[var(--text-primary)] transition-colors border border-[var(--border-subtle)] cursor-pointer"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
