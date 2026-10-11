import React from 'react';
import { Layout, Server, Database, Bot, Cpu, Cloud, ShieldCheck } from 'lucide-react';

const TECH_GROUPS = [
  {
    category: 'FRONTEND ARCHITECTURE',
    icon: Layout,
    accent: '#4F8CFF',
    items: [
      { name: 'React 19', desc: 'Component Architecture' },
      { name: 'Next.js 15', desc: 'App Router & SSR' },
      { name: 'TypeScript', desc: 'Type Safety' },
      { name: 'Tailwind CSS', desc: 'Design Tokens' },
      { name: 'Three.js', desc: '3D WebGL Rendering' },
      { name: 'HTML5 / Modern JS', desc: 'Core Web Standards' },
    ]
  },
  {
    category: 'BACKEND & SERVICES',
    icon: Server,
    accent: '#6EA8FF',
    items: [
      { name: 'Node.js', desc: 'Asynchronous Runtimes' },
      { name: 'Go (Golang)', desc: 'High-Velocity Services' },
      { name: 'Python', desc: 'Data & AI Workflows' },
      { name: 'Java', desc: 'Enterprise Systems' },
      { name: 'REST & GraphQL', desc: 'API Contracts' },
      { name: 'WebSockets', desc: 'Real-time Streaming' },
    ]
  },
  {
    category: 'DATABASE & STORAGE',
    icon: Database,
    accent: '#3D7FFF',
    items: [
      { name: 'PostgreSQL', desc: 'Relational Engine' },
      { name: 'MongoDB', desc: 'Document Store' },
      { name: 'Supabase', desc: 'Backend Infrastructure' },
      { name: 'Redis', desc: 'In-Memory Cache' },
      { name: 'Pinecone / Qdrant', desc: 'Vector Embeddings' },
      { name: 'AWS S3 / GCS', desc: 'Object Storage' },
    ]
  },
  {
    category: 'AI & AUTOMATION',
    icon: Bot,
    accent: '#BFD7FF',
    items: [
      { name: 'AI APIs', desc: 'OpenAI, Claude, Gemini' },
      { name: 'LangChain & LlamaIndex', desc: 'Agent Orchestration' },
      { name: 'Automation Workflows', desc: 'Event Pipelines' },
      { name: 'Machine Learning', desc: 'Predictive Analytics' },
      { name: 'Document RAG', desc: 'Semantic Intelligence' },
      { name: 'Model Fine-tuning', desc: 'Custom Endpoints' },
    ]
  }
];

export default function TechnologyStack() {
  return (
    <section id="stack" className="relative py-28 md:py-36 bg-[var(--bg-primary)] overflow-hidden transition-colors duration-300 border-t border-b border-[var(--border-subtle)]">
      {/* Background Atmosphere */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#4F8CFF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white dark:bg-[#192235] border border-[var(--border-subtle)] mb-4 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#3D7FFF] dark:bg-[#6EA8FF]" />
            <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-[var(--text-secondary)]">
              Engineering Stack
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--text-primary)] tracking-[-0.03em] leading-[1.08] mb-6">
            Organized <span className="text-blue-gradient">Technology Groups.</span>
          </h2>

          <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
            We build exclusively with battle-tested, high-performance modern frameworks and cloud engines.
          </p>
        </div>

        {/* 4 Organized Technology Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TECH_GROUPS.map((group) => {
            const Icon = group.icon;

            return (
              <div
                key={group.category}
                className="p-8 rounded-3xl card-3d-elevated flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-3.5 mb-6 pb-4 border-b border-[var(--border-subtle)]">
                    <div className="w-10 h-10 rounded-xl bg-[#EDF1F7] dark:bg-[#192235] border border-[var(--border-subtle)] flex items-center justify-center text-[#3D7FFF] dark:text-[#6EA8FF] shadow-xs">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-sm font-mono font-bold tracking-widest text-[var(--text-primary)] uppercase">
                      {group.category}
                    </span>
                  </div>

                  {/* 6 Tech Items in Group */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {group.items.map((item) => (
                      <div
                        key={item.name}
                        className="p-3.5 rounded-xl bg-[#EDF1F7]/70 dark:bg-[#192235] border border-[var(--border-subtle)] hover:border-[#4F8CFF]/50 transition-colors group"
                      >
                        <div className="text-sm font-bold text-[var(--text-primary)] group-hover:text-[#3D7FFF] dark:group-hover:text-[#6EA8FF] transition-colors">
                          {item.name}
                        </div>
                        <div className="text-[11px] text-[var(--text-muted)] font-mono mt-0.5">
                          {item.desc}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
