import React, { useEffect } from 'react';
import { LanguageProvider } from './hooks/useLanguage';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Why } from './components/Why';
import { HowItWorks } from './components/HowItWorks';
import { Team } from './components/Team';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { CustomCursor } from './components/CustomCursor';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export function App() {
  useEffect(() => {
    // Smooth scroll configuration
    gsap.config({
      force3D: true
    });
    // Refresh ScrollTrigger on load
    ScrollTrigger.refresh();
    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);
  return (
    <LanguageProvider>
      <CustomCursor />
      <div className="relative w-full min-h-screen bg-[var(--bg-primary)]">
        <Header />
        <main>
          <Hero />
          <Why />
          <HowItWorks />
          <Team />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>);

}