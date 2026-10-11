import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { getWhatsAppUrl, WhatsAppIcon } from '../config/whatsapp';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Work', href: '#work' },
    { label: 'Process', href: '#process' },
    { label: 'Stack', href: '#stack' },
    { label: 'Estimator', href: '#estimator' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'py-3.5 bg-white/90 backdrop-blur-xl border-b border-[var(--nav-border)] shadow-md' 
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Brand Wordmark */}
        <a 
          href="#home" 
          className="group flex items-center gap-3 text-decoration-none select-none"
        >
          {/* Logo Symbol: 3D Architectural Diamond */}
          <div className="relative w-8.5 h-8.5 rounded-xl bg-white border border-[var(--border-subtle)] flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:border-[#4F8CFF]/60 group-hover:shadow-[0_0_20px_rgba(79,140,255,0.4)] shadow-xs">
            <div className="absolute inset-0 bg-gradient-to-br from-[#4F8CFF]/20 via-[#6EA8FF]/10 to-transparent" />
            <div className="w-3 h-3 bg-gradient-to-tr from-[#3D7FFF] via-[#4F8CFF] to-[#6EA8FF] rotate-45 rounded-[2px] transition-transform duration-500 group-hover:scale-125 group-hover:rotate-90 shadow-[0_0_10px_#4F8CFF]" />
          </div>

          <div className="flex flex-col">
            <span className="font-['Manrope'] text-2xl font-extrabold tracking-[-0.04em] text-[var(--text-primary)] flex items-center">
              IRSHA
              <span className="inline-block w-1.5 h-1.5 ml-1 rounded-full bg-[#4F8CFF] shadow-[0_0_8px_#4F8CFF]" />
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7 py-2 px-6 rounded-full bg-white/90 border border-[var(--border-subtle)] backdrop-blur-md shadow-xs">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13.5px] font-medium text-[var(--text-secondary)] hover:text-[#3D7FFF] transition-colors duration-200 tracking-wide"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center">
          {/* Right CTA -> Direct WhatsApp Link */}
          <a
            href={getWhatsAppUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-3d-blue inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-sm font-bold text-white bg-gradient-to-r from-[#3D7FFF] via-[#4F8CFF] to-[#6EA8FF] shadow-[0_4px_20px_rgba(79,140,255,0.35)] hover:shadow-[0_6px_28px_rgba(79,140,255,0.55)] transition-all duration-300 cursor-pointer no-underline border border-[#4F8CFF]/40"
            title="Chat with us directly on WhatsApp"
          >
            <WhatsAppIcon className="w-4 h-4 text-white" />
            <span className="tracking-wide text-xs sm:text-sm font-semibold">Start a Project →</span>
          </a>
        </div>

        {/* Mobile Button (Hamburger Only) */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl bg-white border border-[var(--border-subtle)] text-[var(--text-secondary)] hover:text-[#4F8CFF] hover:border-[#4F8CFF]/50 shadow-xs transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden mt-3 mx-4 p-6 rounded-2xl bg-white/95 backdrop-blur-2xl border border-[var(--border-subtle)] shadow-2xl flex flex-col gap-4 animate-in fade-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="py-2.5 px-3 rounded-lg text-base font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-black/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-[var(--border-subtle)] flex flex-col gap-3">
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-3d-blue w-full py-3.5 rounded-xl font-bold text-center text-white bg-gradient-to-r from-[#3D7FFF] via-[#4F8CFF] to-[#6EA8FF] shadow-[0_0_25px_rgba(79,140,255,0.4)] flex items-center justify-center gap-2.5 cursor-pointer no-underline"
            >
              <WhatsAppIcon className="w-4 h-4 text-white" />
              <span>Start a Project on WhatsApp →</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
