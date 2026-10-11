import React, { useState } from 'react';
import { ArrowRight, AlertCircle } from 'lucide-react';
import { getWhatsAppUrl, openWhatsApp, WhatsAppIcon } from '../config/whatsapp';

const BUSINESS_TYPES = ['Startup', 'Scale-up', 'Enterprise', 'Design Agency'];

const SERVICES_LIST = [
  'Web Development',
  'Mobile Applications',
  'AI Solutions',
  'E-commerce',
  'UI/UX Design',
  'Custom Software'
];

const BUDGET_RANGES = [
  '$15k – $30k',
  '$30k – $60k',
  '$60k – $120k',
  '$120k+'
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    businessType: 'Scale-up',
    service: 'Web Development',
    budget: '$30k – $60k',
    description: '',
  });

  const [validationError, setValidationError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate Required Fields
    if (!formData.businessType || !formData.businessType.trim()) {
      setValidationError('Please select a Business Type.');
      return;
    }
    if (!formData.service || !formData.service.trim()) {
      setValidationError('Please select a Required Capability.');
      return;
    }

    setValidationError('');

    // Build clean WhatsApp message from entered values
    const lines = ['Hi Irsha, I would like to discuss a project.\n'];

    if (formData.name && formData.name.trim()) {
      lines.push(`Name: ${formData.name.trim()}`);
    }

    if (formData.businessName && formData.businessName.trim()) {
      lines.push(`Business Name: ${formData.businessName.trim()}`);
    }

    if (formData.businessType && formData.businessType.trim()) {
      lines.push(`Business Type: ${formData.businessType.trim()}`);
    }

    if (formData.service && formData.service.trim()) {
      lines.push(`Required Capability: ${formData.service.trim()}`);
    }

    if (formData.budget && formData.budget.trim()) {
      lines.push(`Estimated Investment Budget: ${formData.budget.trim()}`);
    }

    if (formData.description && formData.description.trim()) {
      lines.push(`Project Notes: ${formData.description.trim()}`);
    }

    lines.push('\nI would like to discuss the project with your team.');

    const formattedMessage = lines.join('\n');

    // Open WhatsApp using existing official connection and URL encoding
    openWhatsApp(formattedMessage);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-[var(--bg-primary)] overflow-hidden border-t border-[var(--border-subtle)] transition-colors duration-300">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#4F8CFF]/[0.08] dark:bg-[#4F8CFF]/[0.12] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-[#192235] border border-[var(--border-card)] mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#4F8CFF] animate-pulse" />
            <span className="text-[12px] font-bold tracking-[0.2em] uppercase text-[var(--text-secondary)] font-mono">
              Direct WhatsApp Communication
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[var(--text-primary)] tracking-[-0.03em] mb-4">
            Start the <span className="text-blue-gradient">Conversation.</span>
          </h2>

          <p className="text-base sm:text-lg text-[var(--text-secondary)] max-w-xl mx-auto mb-8">
            Connect directly with our solutions engineering team on WhatsApp. Instant discussion, zero red tape.
          </p>

          {/* Quick Direct WhatsApp Access Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d-blue inline-flex items-center gap-2.5 px-8 py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#4F8CFF] to-[#6EA8FF] shadow-[0_4px_25px_rgba(79,140,255,0.35)] hover:shadow-[0_8px_35px_rgba(79,140,255,0.55)] transition-all cursor-pointer no-underline border border-[#4F8CFF]"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Start a Project on WhatsApp →</span>
            </a>
          </div>
        </div>

        {/* Customized WhatsApp Message Builder Container */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#141C2B] border border-[var(--border-card)] shadow-2xl relative card-3d-elevated">
          
          <div className="flex items-center justify-between pb-6 mb-8 border-b border-[var(--border-subtle)]">
            <div className="flex items-center gap-2.5">
              <span className="w-2.5 h-2.5 rounded-full bg-[#4F8CFF] animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-[var(--text-primary)] font-semibold">
                Custom Pre-filled WhatsApp Inquiry
              </span>
            </div>
            <span className="text-xs text-[var(--text-muted)] font-mono hidden sm:inline">
              Opens WhatsApp directly
            </span>
          </div>

          {validationError && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-sm text-red-500 dark:text-red-400">
              <AlertCircle className="w-5 h-5 shrink-0" />
              <span>{validationError}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Row 1: Name & Business Name (Optional) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                  Your Name <span className="text-[var(--text-muted)] font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. Rahul"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#EDF1F7] dark:bg-[#0D1320] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#4F8CFF] focus:ring-2 focus:ring-[#4F8CFF]/20 transition-all text-sm font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                  Business Name <span className="text-[var(--text-muted)] font-normal">(Optional)</span>
                </label>
                <input
                  type="text"
                  placeholder="e.g. ABC Restaurant"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  className="w-full px-4 py-3.5 rounded-xl bg-[#EDF1F7] dark:bg-[#0D1320] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#4F8CFF] focus:ring-2 focus:ring-[#4F8CFF]/20 transition-all text-sm font-medium"
                />
              </div>
            </div>

            {/* Business Type Selector Chips (Required) */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)]">
                  Business Type <span className="text-[#4F8CFF] dark:text-[#6EA8FF]">*</span>
                </label>
                <span className="text-[11px] text-[var(--text-muted)] font-mono">Required</span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {BUSINESS_TYPES.map((type) => (
                  <button
                    type="button"
                    key={type}
                    onClick={() => {
                      setFormData({ ...formData, businessType: type });
                      setValidationError('');
                    }}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      formData.businessType === type
                        ? 'bg-[#4F8CFF] text-white shadow-[0_4px_15px_rgba(79,140,255,0.35)] font-bold'
                        : 'bg-[#EDF1F7] dark:bg-[#192235] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-[#4F8CFF]/50'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Services Selector Chips (Required) */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)]">
                  Required Capability <span className="text-[#4F8CFF] dark:text-[#6EA8FF]">*</span>
                </label>
                <span className="text-[11px] text-[var(--text-muted)] font-mono">Required</span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {SERVICES_LIST.map((srv) => (
                  <button
                    type="button"
                    key={srv}
                    onClick={() => {
                      setFormData({ ...formData, service: srv });
                      setValidationError('');
                    }}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      formData.service === srv
                        ? 'bg-[#4F8CFF] text-white shadow-[0_4px_15px_rgba(79,140,255,0.35)] font-bold'
                        : 'bg-[#EDF1F7] dark:bg-[#192235] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-[#4F8CFF]/50'
                    }`}
                  >
                    {srv}
                  </button>
                ))}
              </div>
            </div>

            {/* Budget Range (Optional) */}
            <div>
              <div className="flex items-center justify-between mb-3">
                <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)]">
                  Estimated Investment Budget <span className="text-[var(--text-muted)] font-normal">(Optional)</span>
                </label>
                {formData.budget && (
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, budget: '' })}
                    className="text-[11px] text-[var(--text-muted)] hover:text-[#6EA8FF] font-mono underline cursor-pointer"
                  >
                    Clear Budget
                  </button>
                )}
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {BUDGET_RANGES.map((b) => (
                  <button
                    type="button"
                    key={b}
                    onClick={() => setFormData({ ...formData, budget: formData.budget === b ? '' : b })}
                    className={`p-3 rounded-xl text-xs sm:text-sm font-semibold text-center transition-all cursor-pointer ${
                      formData.budget === b
                        ? 'bg-[#4F8CFF] text-white font-bold shadow-[0_4px_15px_rgba(79,140,255,0.35)]'
                        : 'bg-[#EDF1F7] dark:bg-[#192235] text-[var(--text-secondary)] border border-[var(--border-subtle)] hover:border-[#4F8CFF]/50'
                    }`}
                  >
                    {b}
                  </button>
                ))}
              </div>
            </div>

            {/* Project Notes / Vision (Optional) */}
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-[var(--text-secondary)] mb-2">
                Project Notes / Vision <span className="text-[var(--text-muted)] font-normal">(Optional)</span>
              </label>
              <textarea
                rows={3}
                placeholder="Briefly describe what you're imagining (this will be included in your WhatsApp message)..."
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-3.5 rounded-xl bg-[#EDF1F7] dark:bg-[#0D1320] border border-[var(--border-subtle)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-[#4F8CFF] focus:ring-2 focus:ring-[#4F8CFF]/20 transition-all text-sm font-medium resize-none"
              />
            </div>

            {/* Submit CTA directly opens WhatsApp */}
            <div className="pt-2">
              <button
                type="submit"
                className="btn-3d-blue w-full py-4.5 px-8 rounded-xl font-bold text-base text-white bg-gradient-to-r from-[#4F8CFF] to-[#6EA8FF] shadow-[0_4px_25px_rgba(79,140,255,0.35)] hover:shadow-[0_8px_40px_rgba(79,140,255,0.6)] transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0 flex items-center justify-center gap-3 cursor-pointer border border-[#4F8CFF]"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>Continue on WhatsApp →</span>
              </button>

              <p className="text-center text-xs text-[var(--text-muted)] mt-3 font-mono">
                Clicking opens WhatsApp directly with your pre-filled project message.
              </p>
            </div>

          </form>

        </div>

      </div>
    </section>
  );
}
