import React, { useState } from 'react';
import { 
  ArrowUpRight, 
  Sparkles,
  X
} from 'lucide-react';
import { getWhatsAppUrl, WhatsAppIcon } from '../config/whatsapp';

const PROJECTS = [
  {
    id: 'kronos',
    title: 'Kronos AI Enterprise',
    category: 'AI Platform',
    client: 'Autonomous Intelligence Systems',
    shortDesc: 'Autonomous enterprise knowledge engine processing millions of unstructured documents with sub-second retrieval latency.',
    impact: '+340% analyst workflow efficiency',
    metrics: [
      { label: 'Latency', value: '62ms' },
      { label: 'Document Capacity', value: '12M+' },
      { label: 'Accuracy Score', value: '99.4%' },
    ],
    tech: ['Next.js 15', 'Python', 'Vector DB', 'Claude API', 'Tailwind', 'Docker'],
    accent: '#4F8CFF',
    gradient: 'from-[#4F8CFF]/20 via-[#6EA8FF]/10 to-transparent',
  },
  {
    id: 'veloce',
    title: 'Veloce Telematics',
    category: 'Mobile Application',
    client: 'Next-Gen Electric Fleet Logistics',
    shortDesc: 'Cross-platform real-time fleet intelligence application with predictive battery management and turn-by-turn route optimization.',
    impact: '24% fleet energy reduction',
    metrics: [
      { label: 'Active Vehicles', value: '85,000+' },
      { label: 'Telemetry Sync', value: '150ms' },
      { label: 'App Store Rating', value: '4.9 ★' },
    ],
    tech: ['React Native', 'TypeScript', 'WebSockets', 'Mapbox GL', 'Go Microservices'],
    accent: '#6EA8FF',
    gradient: 'from-[#6EA8FF]/20 via-[#3D7FFF]/10 to-transparent',
  },
  {
    id: 'aura',
    title: 'Aura Haute Horlogerie',
    category: 'E-commerce Experience',
    client: 'Swiss Luxury Timepiece Maison',
    shortDesc: 'Immersive 3D headless e-commerce flagship with custom real-time watch configurer and global multi-currency checkout.',
    impact: '185% increase in overseas orders',
    metrics: [
      { label: 'Conversion Lift', value: '+42%' },
      { label: 'Average Order Value', value: '$8,400' },
      { label: 'Core Web Vitals', value: '100/100' },
    ],
    tech: ['Three.js', 'Next.js', 'Shopify Plus', 'GraphQL', 'Stripe Global'],
    accent: '#BFD7FF',
    gradient: 'from-[#BFD7FF]/20 via-[#4F8CFF]/10 to-transparent',
  },
  {
    id: 'nexus',
    title: 'Nexus Capital Matrix',
    category: 'SaaS Dashboard',
    client: 'Quantitative Asset Management',
    shortDesc: 'Ultra-low latency algorithmic trading terminal streaming real-time order books, portfolio risk models, and liquidity analytics.',
    impact: '< 15ms live state updates',
    metrics: [
      { label: 'Data Points / Sec', value: '4.8M' },
      { label: 'Uptime SLA', value: '99.999%' },
      { label: 'Engine', value: 'WASM' },
    ],
    tech: ['React 19', 'WebAssembly', 'Rust', 'TimescaleDB', 'Tailwind'],
    accent: '#4F8CFF',
    gradient: 'from-[#4F8CFF]/20 via-[#6EA8FF]/10 to-transparent',
  },
  {
    id: 'synapse',
    title: 'Synapse Health Portal',
    category: 'Business Website & Platform',
    client: 'Global Health Network',
    shortDesc: 'SOC2 and HIPAA-compliant digital health platform connecting specialized surgeons with hospital networks for emergency triage.',
    impact: '3.2M patients routed in 2025',
    metrics: [
      { label: 'Triage Time', value: '-65%' },
      { label: 'Security Grade', value: 'HIPAA Tier-1' },
      { label: 'Network Hospitals', value: '420+' },
    ],
    tech: ['Next.js', 'PostgreSQL', 'WebRTC', 'AWS Cloud', 'Tailwind'],
    accent: '#6EA8FF',
    gradient: 'from-[#6EA8FF]/20 via-[#3D7FFF]/10 to-transparent',
  },
  {
    id: 'orbit',
    title: 'Orbit Spaces Reservation',
    category: 'Booking Platform',
    client: 'Prime Architecture & Hospitality',
    shortDesc: 'Spatial 3D booking engine enabling seamless reservation of architectural suites and creative studios across 14 global capitals.',
    impact: '98% automated check-ins',
    metrics: [
      { label: 'Global Cities', value: '14' },
      { label: 'Monthly Bookings', value: '38,000' },
      { label: 'Customer CSAT', value: '97%' },
    ],
    tech: ['React', 'Node.js', 'Three.js', 'Redis', 'Stripe Connect'],
    accent: '#BFD7FF',
    gradient: 'from-[#BFD7FF]/20 via-[#4F8CFF]/10 to-transparent',
  },
];

function ProjectVisualMockup({ project }) {
  return (
    <div className="relative w-full h-56 sm:h-64 rounded-xl bg-[#EDF1F7] dark:bg-[var(--bg-elevated)] border border-[var(--border-subtle)] overflow-hidden p-4 flex flex-col justify-between group-hover:border-[#4F8CFF]/50 transition-all duration-500">
      <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-35 group-hover:opacity-65 transition-opacity duration-500`} />
      <div className="absolute inset-0 bg-tech-grid opacity-25" />

      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--border-subtle)]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--border-subtle)]" />
          <div className="w-2.5 h-2.5 rounded-full bg-[var(--border-subtle)]" />
        </div>
        <span className="text-[11px] font-mono text-[var(--text-secondary)] px-2.5 py-0.5 rounded-md bg-white/90 dark:bg-[#192235]/80 border border-[var(--border-subtle)] shadow-xs">
          {project.category}
        </span>
      </div>

      <div className="relative z-10 py-2 transition-transform duration-500 ease-out group-hover:scale-[1.02]">
        <div className="flex items-center gap-3 mb-2">
          <div className="h-6 w-24 rounded bg-[var(--text-primary)]/10 animate-pulse" />
          <div className="h-6 flex-1 rounded bg-[var(--text-primary)]/5" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="h-16 rounded-lg bg-white/95 dark:bg-[#192235]/90 border border-[var(--border-subtle)] p-2.5 flex flex-col justify-between shadow-xs">
            <span className="text-[10px] text-[var(--text-muted)] font-mono">FLOW</span>
            <span className="text-xs font-bold text-[#3D7FFF] dark:text-[#6EA8FF]">+34%</span>
          </div>
          <div className="h-16 rounded-lg bg-white/95 dark:bg-[#192235]/90 border border-[var(--border-subtle)] p-2.5 flex flex-col justify-between shadow-xs">
            <span className="text-[10px] text-[var(--text-muted)] font-mono">LATENCY</span>
            <span className="text-xs font-bold text-[#3D7FFF] dark:text-[#6EA8FF]">&lt;40ms</span>
          </div>
          <div className="h-16 rounded-lg bg-white/95 dark:bg-[#192235]/90 border border-[var(--border-subtle)] p-2.5 flex flex-col justify-between shadow-xs">
            <span className="text-[10px] text-[var(--text-muted)] font-mono">STATE</span>
            <span className="text-xs font-bold text-[#3D7FFF] dark:text-[#6EA8FF]">SYNCED</span>
          </div>
        </div>
      </div>

      <div className="relative z-10 flex items-center justify-between pt-2 border-t border-[var(--border-subtle)]">
        <span className="text-xs font-semibold text-[var(--text-secondary)] flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-[#3D7FFF] dark:text-[#6EA8FF]" /> {project.impact}
        </span>
        <span className="text-[11px] font-mono text-[var(--text-muted)]">IRSHA BUILD</span>
      </div>

      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#4F8CFF]/15 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
    </div>
  );
}

export default function WorkSection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const categories = ['All', 'AI Platform', 'Mobile Application', 'E-commerce Experience', 'SaaS Dashboard', 'Business Website & Platform', 'Booking Platform'];

  const filteredProjects = activeCategory === 'All' 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <section id="work" className="relative py-28 md:py-36 bg-[var(--bg-primary)] overflow-hidden transition-colors duration-300">
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#4F8CFF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white dark:bg-[#192235] border border-[var(--border-subtle)] mb-4 shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#3D7FFF] dark:bg-[#6EA8FF]" />
              <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-[var(--text-secondary)]">
                Selected Work
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--text-primary)] tracking-[-0.03em]">
              Built for the <span className="text-blue-gradient">Real World.</span>
            </h2>
          </div>

          <p className="mt-4 md:mt-0 text-base md:text-lg text-[var(--text-secondary)] max-w-md">
            Production-grade systems powering high-growth scaleups and global market leaders.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 mb-14 overflow-x-auto pb-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-gradient-to-r from-[#4F8CFF] via-[#6EA8FF] to-[#3D7FFF] text-white shadow-[0_4px_15px_rgba(79,140,255,0.35)]'
                  : 'bg-white dark:bg-[#192235] text-[var(--text-secondary)] border border-[var(--border-card)] shadow-xs hover:text-[var(--text-primary)] hover:border-[#4F8CFF]/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedCaseStudy(project)}
              className="group relative p-6 sm:p-7 rounded-2xl cursor-pointer flex flex-col justify-between card-3d-elevated select-none"
            >
              <div>
                <ProjectVisualMockup project={project} />

                <div className="flex items-center justify-between mt-6 mb-2">
                  <span className="text-xs font-mono font-bold tracking-wider text-[#3D7FFF] dark:text-[#6EA8FF] uppercase">
                    {project.category}
                  </span>
                  <span className="text-xs text-[var(--text-muted)]">
                    {project.client}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-3 transition-colors">
                  {project.title}
                </h3>

                <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
                  {project.shortDesc}
                </p>
              </div>

              <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                <span className="text-sm font-semibold text-[var(--text-primary)] group-hover:text-[#3D7FFF] dark:group-hover:text-[#6EA8FF] transition-colors flex items-center gap-1">
                  View Case Study
                </span>
                <div className="w-8 h-8 rounded-full bg-[#EDF1F7] dark:bg-[var(--bg-elevated)] flex items-center justify-center text-[var(--text-secondary)] group-hover:text-white group-hover:bg-[#4F8CFF] transition-all duration-300 shadow-xs">
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Deep Case Study Modal */}
      {selectedCaseStudy && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
          <div 
            className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] p-6 sm:p-10 shadow-2xl animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCaseStudy(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2 mb-3">
              <span className="text-xs font-mono font-bold text-[#3D7FFF] dark:text-[#6EA8FF] uppercase tracking-wider">
                {selectedCaseStudy.category}
              </span>
              <span className="text-[var(--text-muted)]">•</span>
              <span className="text-xs text-[var(--text-secondary)]">{selectedCaseStudy.client}</span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-extrabold text-[var(--text-primary)] mb-4">
              {selectedCaseStudy.title}
            </h3>

            <p className="text-lg text-[var(--text-secondary)] leading-relaxed mb-8">
              {selectedCaseStudy.shortDesc}
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {selectedCaseStudy.metrics.map((m) => (
                <div key={m.label} className="p-4 rounded-xl bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">
                  <div className="text-xs font-mono text-[var(--text-muted)]">{m.label}</div>
                  <div className="text-xl sm:text-2xl font-extrabold font-['Manrope'] mt-1 text-[#3D7FFF] dark:text-[#6EA8FF]">
                    {m.value}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 rounded-xl bg-[#4F8CFF]/10 border border-[#4F8CFF]/30 mb-8 flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-[#3D7FFF] dark:text-[#6EA8FF] shrink-0" />
              <div className="text-sm font-semibold text-[var(--text-primary)]">
                Commercial Impact: <span className="text-[#3D7FFF] dark:text-[#6EA8FF]">{selectedCaseStudy.impact}</span>
              </div>
            </div>

            <div className="mb-8">
              <div className="text-xs font-bold uppercase tracking-wider text-[var(--text-secondary)] mb-3">
                Production Technology Stack
              </div>
              <div className="flex flex-wrap gap-2">
                {selectedCaseStudy.tech.map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-lg text-xs font-mono bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-subtle)]">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4 border-t border-[var(--border-subtle)]">
              <a
                href={getWhatsAppUrl(`Hi Irsha, I’m interested in starting a project similar to ${selectedCaseStudy.title}. I’d like to discuss my requirements with you.`)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setSelectedCaseStudy(null)}
                className="btn-3d-blue w-full sm:w-auto flex-1 py-3.5 px-6 rounded-xl font-bold text-white shadow-[0_4px_20px_rgba(79,140,255,0.4)] flex items-center justify-center gap-2.5 cursor-pointer no-underline hover:-translate-y-0.5 transition-transform"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Build a Similar Solution on WhatsApp →</span>
              </a>
              <button
                onClick={() => setSelectedCaseStudy(null)}
                className="w-full sm:w-auto py-3.5 px-6 rounded-xl font-semibold text-[var(--text-secondary)] bg-[var(--bg-elevated)] hover:text-[var(--text-primary)] transition-colors border border-[var(--border-subtle)] cursor-pointer"
              >
                Close Preview
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}
