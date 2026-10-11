import React, { useState } from 'react';
import { Bot, Sparkles, X, ArrowRight, CheckCircle2, Terminal } from 'lucide-react';
import { openWhatsApp, WhatsAppIcon } from '../config/whatsapp';

export default function AiProjectAssistantModal({ isOpen, onClose }) {
  const [userPrompt, setUserPrompt] = useState('');
  const [recommendation, setRecommendation] = useState(null);

  if (!isOpen) return null;

  const handleAnalyze = (e) => {
    e.preventDefault();
    if (!userPrompt.trim()) return;

    // Structured rule-based analysis (ready for future real API integration)
    const text = userPrompt.toLowerCase();
    
    let solution = 'Custom Web Platform & Digital Engine';
    let features = ['High-performance responsive UI', 'Custom Admin Dashboard', 'API Security Layer'];
    let tech = ['Next.js 15', 'TypeScript', 'Node.js', 'PostgreSQL'];

    if (text.includes('mobile') || text.includes('app') || text.includes('ios') || text.includes('android')) {
      solution = 'Cross-Platform Mobile Application & Backend';
      features = ['Native iOS & Android builds', 'Push Notifications', 'Offline Sync Engine', 'Secure User Authentication'];
      tech = ['React Native / Flutter', 'Firebase', 'Node.js', 'GraphQL'];
    } else if (text.includes('store') || text.includes('shop') || text.includes('sell') || text.includes('ecommerce')) {
      solution = 'Headless E-commerce Storefront & Checkout System';
      features = ['Global Multi-currency Checkout', 'Product Catalog Search', 'Inventory Sync', 'Stripe Payment Gateway'];
      tech = ['Shopify Plus / Medusa.js', 'Next.js Commerce', 'Stripe Global', 'Sanity CMS'];
    } else if (text.includes('ai') || text.includes('bot') || text.includes('automation') || text.includes('smart')) {
      solution = 'Intelligent AI Agent & Automated Workflow Solution';
      features = ['LLM & Multi-Agent Orchestration', 'Document Semantic Search', 'Automated Customer Workflows', 'Custom Model Integration'];
      tech = ['OpenAI / Claude API', 'LangChain', 'Python', 'Vector DB (Qdrant/Pinecone)'];
    }

    setRecommendation({
      userPrompt,
      solution,
      features,
      tech,
    });
  };

  const handleSendToWhatsApp = () => {
    if (!recommendation) return;
    const msg = `Hi Irsha, I used your AI Assistant on your website.\n\n` +
      `My Idea: "${recommendation.userPrompt}"\n\n` +
      `Recommended Solution: ${recommendation.solution}\n` +
      `Suggested Features: ${recommendation.features.join(', ')}\n` +
      `Suggested Tech Stack: ${recommendation.tech.join(', ')}\n\n` +
      `I would like to discuss turning this idea into a reality.`;

    openWhatsApp(msg);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[var(--bg-card)] border border-[var(--border-card)] p-6 sm:p-10 shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full bg-[var(--bg-elevated)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] border border-[var(--border-subtle)] transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="flex items-center gap-3 mb-3">
          <div className="w-8 h-8 rounded-lg bg-[#4F8CFF]/20 border border-[#4F8CFF]/40 flex items-center justify-center text-[#3D7FFF] dark:text-[#6EA8FF]">
            <Bot className="w-5 h-5" />
          </div>
          <span className="text-xs font-mono font-bold tracking-wider uppercase text-[#3D7FFF] dark:text-[#6EA8FF]">
            AI Project Assistant
          </span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-[var(--text-primary)] mb-3">
          Not sure what you need?
        </h3>

        <p className="text-sm sm:text-base text-[var(--text-secondary)] leading-relaxed mb-6 font-normal">
          Describe your business idea or goal below. Our assistant will structure a recommended technology direction and feature set for you.
        </p>

        {/* Input Form */}
        <form onSubmit={handleAnalyze} className="mb-8">
          <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2 font-semibold">
            Describe what you want to build:
          </label>
          <textarea
            rows={3}
            placeholder="e.g. I run a boutique hotel chain and want an app for guests to book rooms, check in digitally, and chat with an AI concierge..."
            value={userPrompt}
            onChange={(e) => setUserPrompt(e.target.value)}
            className="w-full px-4 py-3.5 rounded-xl bg-[#EDF1F7] dark:bg-[#0D1320] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#4F8CFF] focus:ring-2 focus:ring-[#4F8CFF]/20 transition-all text-sm resize-none mb-4"
          />

          <button
            type="submit"
            className="btn-3d-blue w-full py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-[#4F8CFF] to-[#6EA8FF] shadow-[0_4px_18px_rgba(79,140,255,0.35)] hover:shadow-[0_8px_28px_rgba(79,140,255,0.55)] transition-all flex items-center justify-center gap-2 cursor-pointer border border-[#4F8CFF]"
          >
            <Sparkles className="w-4 h-4 text-white" />
            <span>Analyze & Recommend Solution →</span>
          </button>
        </form>

        {/* Structured Result Presentation */}
        {recommendation && (
          <div className="p-6 rounded-2xl bg-[#EDF1F7] dark:bg-[#070B14] border border-[var(--border-subtle)] space-y-6 animate-in fade-in duration-300">
            <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#3D7FFF] dark:text-[#6EA8FF]">
              <Terminal className="w-4 h-4" />
              <span>STRUCTURED RECOMMENDATION</span>
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-1">
                Recommended Solution
              </div>
              <div className="text-xl font-bold text-[var(--text-primary)] font-['Manrope']">
                {recommendation.solution}
              </div>
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2">
                Suggested Core Features
              </div>
              <div className="space-y-2">
                {recommendation.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-[var(--text-primary)]">
                    <CheckCircle2 className="w-4 h-4 text-[#3D7FFF] dark:text-[#6EA8FF] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-2">
                Suggested Tech Direction
              </div>
              <div className="flex flex-wrap gap-2">
                {recommendation.tech.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-lg text-xs font-mono bg-[#EDF3FF] dark:bg-[#192235] text-[#285DB8] dark:text-[#BFD7FF] border border-[#4F8CFF]/20 font-semibold">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-[var(--border-subtle)]">
              <button
                onClick={handleSendToWhatsApp}
                className="btn-3d-blue w-full py-3.5 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-[#4F8CFF] to-[#6EA8FF] shadow-[0_4px_18px_rgba(79,140,255,0.35)] hover:shadow-[0_8px_28px_rgba(79,140,255,0.55)] transition-all flex items-center justify-center gap-2.5 cursor-pointer no-underline border border-[#4F8CFF]"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span>Discuss This Recommendation on WhatsApp →</span>
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
