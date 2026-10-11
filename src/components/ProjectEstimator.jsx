import React, { useState } from 'react';
import { Calculator, Check, ArrowRight } from 'lucide-react';
import { openWhatsApp, WhatsAppIcon } from '../config/whatsapp';

const PROJECT_TYPES = [
  { id: 'Website', label: 'Website', min: 8000, max: 20000 },
  { id: 'Mobile App', label: 'Mobile App', min: 15000, max: 35000 },
  { id: 'E-commerce', label: 'E-commerce', min: 12000, max: 28000 },
  { id: 'AI Solution', label: 'AI Solution', min: 20000, max: 50000 },
  { id: 'Custom Software', label: 'Custom Software', min: 25000, max: 65000 },
];

const BUSINESS_TYPES = [
  { id: 'Startup', label: 'Startup', multiplierMin: 1.0, multiplierMax: 1.0 },
  { id: 'Small Business', label: 'Small Business', multiplierMin: 1.15, multiplierMax: 1.25 },
  { id: 'Enterprise', label: 'Enterprise', multiplierMin: 1.4, multiplierMax: 1.6 },
];

const ADDITIONAL_REQS = [
  { id: 'Authentication', label: 'Authentication', addMin: 2000, addMax: 4000 },
  { id: 'Payments', label: 'Payments', addMin: 3000, addMax: 5000 },
  { id: 'Admin Dashboard', label: 'Admin Dashboard', addMin: 5000, addMax: 9000 },
  { id: 'AI Features', label: 'AI Features', addMin: 7000, addMax: 12000 },
  { id: 'API Integration', label: 'API Integration', addMin: 4000, addMax: 7000 },
];

export default function ProjectEstimator() {
  const [selectedType, setSelectedType] = useState('Website');
  const [selectedBusiness, setSelectedBusiness] = useState('Startup');
  const [selectedReqs, setSelectedReqs] = useState(['Authentication', 'Admin Dashboard']);

  const toggleReq = (id) => {
    setSelectedReqs((prev) =>
      prev.includes(id) ? prev.filter((r) => r !== id) : [...prev, id]
    );
  };

  // Calculate dynamic range
  const typeObj = PROJECT_TYPES.find((t) => t.id === selectedType) || PROJECT_TYPES[0];
  const bizObj = BUSINESS_TYPES.find((b) => b.id === selectedBusiness) || BUSINESS_TYPES[0];

  let minCost = typeObj.min * bizObj.multiplierMin;
  let maxCost = typeObj.max * bizObj.multiplierMax;

  selectedReqs.forEach((reqId) => {
    const reqObj = ADDITIONAL_REQS.find((r) => r.id === reqId);
    if (reqObj) {
      minCost += reqObj.addMin;
      maxCost += reqObj.addMax;
    }
  });

  const formattedMin = `$${Math.round(minCost / 1000)}k`;
  const formattedMax = `$${Math.round(maxCost / 1000)}k`;

  const handleDiscussWhatsApp = () => {
    const message = `Hi Irsha, I calculated a project estimate on your website:\n\n` +
      `• Need: ${selectedType}\n` +
      `• Business Type: ${selectedBusiness}\n` +
      `• Additional Requirements: ${selectedReqs.length ? selectedReqs.join(', ') : 'None'}\n` +
      `• Estimated Range: ${formattedMin} – ${formattedMax}\n\n` +
      `I would like to discuss my project requirements with your team.`;

    openWhatsApp(message);
  };

  return (
    <section id="estimator" className="relative py-28 md:py-36 bg-[var(--bg-secondary)] overflow-hidden border-t border-b border-[var(--border-subtle)] transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#4F8CFF]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#192235] border border-[var(--border-subtle)] mb-4 shadow-xs">
            <Calculator className="w-4 h-4 text-[#3D7FFF] dark:text-[#6EA8FF]" />
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-[var(--text-secondary)]">
              Interactive Estimator
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--text-primary)] tracking-[-0.03em] leading-[1.08] mb-6">
            Project <span className="text-blue-gradient">Estimator.</span>
          </h2>

          <p className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed">
            Select your project parameters below to get an instant estimated investment scope.
          </p>
        </div>

        {/* Estimator Main Card */}
        <div className="p-8 sm:p-12 rounded-3xl card-3d-elevated bg-white dark:bg-[#141C2B] border border-[var(--border-card)] shadow-2xl">
          
          <div className="space-y-10">
            
            {/* Step 1: What do you need? */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-4 font-bold">
                1. What do you need?
              </label>
              <div className="flex flex-wrap gap-3">
                {PROJECT_TYPES.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setSelectedType(type.id)}
                    className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                      selectedType === type.id
                        ? 'bg-[#4F8CFF] text-white shadow-[0_4px_18px_rgba(79,140,255,0.35)] scale-[1.02]'
                        : 'bg-[#EDF1F7] dark:bg-[#192235] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-[#4F8CFF]/40'
                    }`}
                  >
                    {type.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Business Type */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-4 font-bold">
                2. Business Type
              </label>
              <div className="flex flex-wrap gap-3">
                {BUSINESS_TYPES.map((biz) => (
                  <button
                    key={biz.id}
                    onClick={() => setSelectedBusiness(biz.id)}
                    className={`px-5 py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer ${
                      selectedBusiness === biz.id
                        ? 'bg-[#4F8CFF] text-white shadow-[0_4px_18px_rgba(79,140,255,0.35)] scale-[1.02]'
                        : 'bg-[#EDF1F7] dark:bg-[#192235] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-[#4F8CFF]/40'
                    }`}
                  >
                    {biz.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Additional Requirements */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-4 font-bold">
                3. Additional Requirements
              </label>
              <div className="flex flex-wrap gap-3">
                {ADDITIONAL_REQS.map((req) => {
                  const isChecked = selectedReqs.includes(req.id);
                  return (
                    <button
                      key={req.id}
                      onClick={() => toggleReq(req.id)}
                      className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                        isChecked
                          ? 'bg-[#0D1320] text-[#BFD7FF] border border-[#4F8CFF]/60 dark:bg-[#192235] dark:text-[#BFD7FF]'
                          : 'bg-[#EDF1F7] dark:bg-[#192235] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-[#4F8CFF]/40'
                      }`}
                    >
                      <span className={`w-4 h-4 rounded flex items-center justify-center border text-[10px] ${
                        isChecked ? 'bg-[#4F8CFF] border-[#4F8CFF] text-white' : 'border-[var(--border-subtle)]'
                      }`}>
                        {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                      </span>
                      <span>{req.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Results Box */}
          <div className="mt-12 pt-8 border-t border-[var(--border-subtle)] flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xs font-mono uppercase tracking-wider text-[var(--text-muted)] mb-1 font-bold">
                ESTIMATED PROJECT RANGE
              </div>
              <div className="text-4xl sm:text-5xl font-extrabold font-['Manrope'] text-[#3D7FFF] dark:text-[#6EA8FF]">
                {formattedMin} – {formattedMax}
              </div>
              <div className="text-xs text-[var(--text-muted)] mt-1 font-mono">
                * Preliminary estimate based on selected parameters. Not a binding quotation.
              </div>
            </div>

            <button
              onClick={handleDiscussWhatsApp}
              className="btn-3d-blue w-full md:w-auto py-4 px-8 rounded-xl font-bold text-white shadow-[0_4px_25px_rgba(79,140,255,0.4)] hover:shadow-[0_8px_35px_rgba(79,140,255,0.65)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 cursor-pointer no-underline border-t border-white/30"
            >
              <WhatsAppIcon className="w-5 h-5 text-white" />
              <span>Discuss Your Project →</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
