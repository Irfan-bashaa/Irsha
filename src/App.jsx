import React, { useState } from 'react';
import { ThemeProvider } from './context/ThemeContext';
import FireCursor from './components/FireCursor';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Introduction from './components/Introduction';
import Services from './components/Services';
import CapabilitiesWall from './components/CapabilitiesWall';
import TechnologyExperience from './components/TechnologyExperience';
import WorkSection from './components/WorkSection';
import ProcessSection from './components/ProcessSection';
import WhyIrsha from './components/WhyIrsha';
import TechnologyStack from './components/TechnologyStack';
import ProjectEstimator from './components/ProjectEstimator';
import AboutSection from './components/AboutSection';
import FaqSection from './components/FaqSection';
import LargeCTA from './components/LargeCTA';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import AiProjectAssistantModal from './components/AiProjectAssistantModal';

export default function App() {
  const [isAssistantOpen, setIsAssistantOpen] = useState(false);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] selection:bg-[#4F8CFF]/30 selection:text-[#4F8CFF] overflow-x-hidden transition-colors duration-300">
        {/* Signature Desktop Electric Energy Cursor */}
        <FireCursor />

        {/* Floating Glass Navigation with Theme Toggle, WhatsApp CTA, and AI Assistant Trigger */}
        <Navbar onOpenAssistant={() => setIsAssistantOpen(true)} />

        {/* Main Content Flow */}
        <main>
          {/* Hero Section with Interactive 3D WebGL Nucleus & Direct WhatsApp CTA */}
          <Hero onOpenAssistant={() => setIsAssistantOpen(true)} />

          {/* Introduction: "Ideas deserve better technology." */}
          <Introduction />

          {/* Services: 6 Interactive 3D Tilt Cards with Direct WhatsApp Inquiry */}
          <Services />

          {/* What We Build: Interactive Capabilities Wall */}
          <CapabilitiesWall />

          {/* Technology Experience: "Where Ideas Become Technology." (5-Stage Visual Story) */}
          <TechnologyExperience />

          {/* Work: "Built for the Real World." (6 Showcase Mockups with WhatsApp Inquiries) */}
          <WorkSection />

          {/* Process: "From Idea to Impact." (5-Step Clean Connected 3D Track) */}
          <ProcessSection />

          {/* Why Irsha: THINK, BUILD, LAUNCH, GROW 3D Pillars */}
          <WhyIrsha />

          {/* Technology Stack: Organized Technology Groups */}
          <TechnologyStack />

          {/* Interactive Project Estimator */}
          <ProjectEstimator />

          {/* About: "We Build Digital Futures." (Glowing Path Visual) */}
          <AboutSection />

          {/* FAQ Accordion */}
          <FaqSection />

          {/* Large Final CTA: "HAVE AN IDEA? Tell us what you want to build." */}
          <LargeCTA onOpenAssistant={() => setIsAssistantOpen(true)} />

          {/* Project Inquiry Hub with WhatsApp Message Builder */}
          <ContactSection />
        </main>

        {/* Minimal Luxury Footer */}
        <Footer />

        {/* Interactive AI Project Assistant Modal */}
        <AiProjectAssistantModal 
          isOpen={isAssistantOpen} 
          onClose={() => setIsAssistantOpen(false)} 
        />
      </div>
    </ThemeProvider>
  );
}
