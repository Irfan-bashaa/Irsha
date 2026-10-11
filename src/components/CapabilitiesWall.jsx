import React, { useState } from 'react';
import { Globe, Smartphone, Cpu, ShoppingBag, Zap, Code2, ArrowUpRight } from 'lucide-react';
import { getWhatsAppUrl } from '../config/whatsapp';

const TILES_DATA = [
  {
    id: 'web',
    tag: 'WEB',
    title: 'Modern Web Architectures',
    subtitle: 'High-speed marketing platforms, SaaS products, and custom portals.',
    icon: Globe,
    stats: 'sub-80ms render',
    features: ['Next.js 15 & React 19', 'Headless CMS Integration', 'Sub-second Core Web Vitals', 'Edge Distribution'],
    previewSnippet: 'const app = createWebSystem({ speed: "ultra", SEO: 100 });'
  },
  {
    id: 'mobile',
    tag: 'MOBILE',
    title: 'iOS & Android Products',
    subtitle: 'Native and cross-platform apps built for fluid touch interactions.',
    icon: Smartphone,
    stats: '60 FPS animations',
    features: ['Flutter & React Native', 'Offline-first Sync Engines', 'Biometric & Secure Auth', 'Push Telemetry'],
    previewSnippet: 'NativeApp.launch({ platform: "iOS/Android", fps: 60 });'
  },
  {
    id: 'ai',
    tag: 'AI',
    title: 'Intelligent AI Engines',
    subtitle: 'Autonomous agents, RAG search, document intelligence, and ML pipelines.',
    icon: Cpu,
    stats: '99.4% accuracy',
    features: ['LLM & Multi-Agent Systems', 'Vector Search & Embeddings', 'Automated Operations', 'Fine-tuned Endpoints'],
    previewSnippet: 'await aiAgent.execute({ intent: "AutomateWorkflow" });'
  },
  {
    id: 'ecommerce',
    tag: 'E-COMMERCE',
    title: 'High-Conversion Stores',
    subtitle: 'Headless storefronts and custom e-commerce checkout ecosystems.',
    icon: ShoppingBag,
    stats: '+34% checkout speed',
    features: ['Shopify Plus & Medusa.js', 'Global Multi-currency', 'ERP & Stock Syncing', 'Smart AI Search'],
    previewSnippet: 'Cart.checkout({ latency: "instant", gateway: "Stripe" });'
  },
  {
    id: 'automation',
    tag: 'AUTOMATION',
    title: 'Event-Driven Workflows',
    subtitle: 'Connecting isolated software tools into seamless automated pipelines.',
    icon: Zap,
    stats: '100% automated',
    features: ['Real-time Webhooks & Queues', 'Custom Integration APIs', 'Zero Manual Data Entry', 'Error Self-healing'],
    previewSnippet: 'Workflow.trigger("OrderCreated").pipe("FulfillOrder");'
  },
  {
    id: 'software',
    tag: 'CUSTOM SOFTWARE',
    title: 'Bespoke Enterprise Systems',
    subtitle: 'Purpose-built backend software tailored to your specific business logic.',
    icon: Code2,
    stats: 'Enterprise scale',
    features: ['Custom ERP & CRM Tools', 'High-throughput Databases', 'Microservice Architecture', 'Full IP Ownership'],
    previewSnippet: 'Engine.allocate({ architecture: "Distributed", scale: "10x" });'
  }
];

export default function CapabilitiesWall() {
  const [activeTile, setActiveTile] = useState(null);

  return (
    <section id="capabilities" className="relative py-28 md:py-36 bg-[var(--bg-secondary)] overflow-hidden border-t border-b border-[var(--border-subtle)] transition-colors duration-300">
      {/* Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#4F8CFF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#192235] border border-[var(--border-subtle)] mb-4 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#3D7FFF] dark:bg-[#6EA8FF] animate-pulse" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--text-secondary)]">
              Interactive Capabilities Wall
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--text-primary)] tracking-[-0.03em] leading-[1.08] mb-6">
            What We <span className="text-blue-gradient">Build.</span>
          </h2>

          <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
            Hover over any category tile to explore our technical specializations and digital product capabilities.
          </p>
        </div>

        {/* 6 Large Interactive Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TILES_DATA.map((tile) => {
            const Icon = tile.icon;
            const isHovered = activeTile === tile.id;

            return (
              <div
                key={tile.id}
                onMouseEnter={() => setActiveTile(tile.id)}
                onMouseLeave={() => setActiveTile(null)}
                className={`group relative p-8 rounded-3xl transition-all duration-300 cursor-pointer overflow-hidden card-3d-elevated flex flex-col justify-between ${
                  isHovered 
                    ? 'border-[#4F8CFF] dark:border-[#4F8CFF] shadow-[0_20px_50px_-10px_rgba(79,140,255,0.25)] -translate-y-2' 
                    : ''
                }`}
              >
                {/* Tile Subtle Glow */}
                <div 
                  className={`absolute -top-20 -right-20 w-48 h-48 rounded-full pointer-events-none transition-opacity duration-500 ${
                    isHovered ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{
                    background: 'radial-gradient(circle, rgba(79, 140, 255, 0.25) 0%, transparent 70%)',
                    filter: 'blur(30px)',
                  }}
                />

                <div>
                  {/* Category Tag Header */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="px-3 py-1 rounded-full text-xs font-mono font-bold tracking-widest uppercase bg-[#EDF3FF] dark:bg-[#192235] text-[#285DB8] dark:text-[#BFD7FF] border border-[rgba(61,127,255,0.15)] dark:border-[rgba(110,168,255,0.20)] group-hover:border-[#4F8CFF] transition-colors">
                      {tile.tag}
                    </span>
                    <span className="text-xs font-mono text-[var(--text-muted)] flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#4F8CFF]" />
                      {tile.stats}
                    </span>
                  </div>

                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#EDF1F7] dark:bg-[#192235] border border-[var(--border-subtle)] flex items-center justify-center text-[var(--text-primary)] group-hover:bg-[#4F8CFF] group-hover:text-white group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-2xl font-bold text-[var(--text-primary)] tracking-tight">
                      {tile.title}
                    </h3>
                  </div>

                  {/* Subtitle */}
                  <p className="text-sm text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
                    {tile.subtitle}
                  </p>

                  {/* Animated Code Snippet Preview (Expands on Hover) */}
                  <div className={`overflow-hidden transition-all duration-300 ${isHovered ? 'max-h-32 mb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="p-3 rounded-xl bg-[#0D1320] text-[#BFD7FF] font-mono text-xs border border-[#4F8CFF]/40 shadow-inner">
                      <code>{tile.previewSnippet}</code>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-2 mb-6">
                    {tile.features.map((feat, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-[var(--text-secondary)] font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#3D7FFF] dark:bg-[#6EA8FF]" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Action CTA */}
                <div className="pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between">
                  <a
                    href={getWhatsAppUrl(`Hi Irsha, I want to discuss a ${tile.tag} project.`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-bold uppercase tracking-wider text-[var(--text-primary)] group-hover:text-[#3D7FFF] dark:group-hover:text-[#6EA8FF] transition-colors flex items-center gap-1.5 no-underline"
                  >
                    Build {tile.tag} Solution
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
