import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const FAQS = [
  {
    q: 'How much does a project cost?',
    a: 'Every project scope is unique. Simple modern business websites typically range between $8,000 and $20,000, while complex custom mobile applications, enterprise SaaS platforms, and AI engines range from $15,000 to $65,000+. Use our interactive Project Estimator above for a preliminary range.'
  },
  {
    q: 'How long does development take?',
    a: 'A high-impact marketing website or digital product MVP usually takes 3 to 6 weeks from kick-off to launch. Larger enterprise custom software platforms or cross-platform mobile apps generally take 8 to 14 weeks.'
  },
  {
    q: 'Do you work with startups?',
    a: 'Yes. We frequently partner with early-stage and seed-funded startups to engineer production-ready MVPs, scalable cloud architectures, and conversion-focused digital products designed to impress investors and early users.'
  },
  {
    q: 'Can you build custom software?',
    a: 'Absolutely. Custom software engineering is one of our core competencies. We build bespoke ERP engines, real-time data pipelines, custom CRM operations systems, and tailored API integrations from scratch.'
  },
  {
    q: 'Do you provide maintenance and ongoing support?',
    a: 'Yes. We offer dedicated post-launch support, continuous performance optimization, security updates, feature expansions, and SLA-backed infrastructure monitoring.'
  },
  {
    q: 'How do I start a project?',
    a: 'The fastest way to start is by clicking "Start a Project on WhatsApp". You can share your idea directly with our solutions engineering team. We will review your goals and schedule a kick-off discovery call.'
  }
];

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-28 md:py-36 bg-[var(--bg-primary)] overflow-hidden border-t border-b border-[var(--border-subtle)] transition-colors duration-300">
      {/* Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#4F8CFF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white dark:bg-[#192235] border border-[var(--border-subtle)] mb-4 shadow-xs">
            <HelpCircle className="w-4 h-4 text-[#3D7FFF] dark:text-[#6EA8FF]" />
            <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-[var(--text-secondary)]">
              Questions & Answers
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--text-primary)] tracking-[-0.03em] leading-[1.08] mb-6">
            Frequently Asked <span className="text-blue-gradient">Questions.</span>
          </h2>

          <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
            Everything you need to know about partnering with Irsha on your next digital product.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;

            return (
              <div
                key={faq.q}
                className="rounded-2xl bg-white dark:bg-[#141C2B] border border-[var(--border-card)] overflow-hidden transition-all duration-300 shadow-xs card-3d-elevated"
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer select-none"
                >
                  <span className="text-lg sm:text-xl font-bold text-[var(--text-primary)] font-['Manrope']">
                    {faq.q}
                  </span>
                  <div className={`w-8 h-8 rounded-full bg-[#EDF1F7] dark:bg-[#192235] flex items-center justify-center text-[var(--text-secondary)] transition-transform duration-300 ${
                    isOpen ? 'rotate-180 bg-[#4F8CFF] text-white' : ''
                  }`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-[var(--border-subtle)] animate-in fade-in duration-200">
                    <p className="text-base text-[var(--text-secondary)] leading-relaxed font-normal">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
