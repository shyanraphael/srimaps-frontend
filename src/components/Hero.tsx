import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { RocketIcon, ChevronDownIcon, MapIcon, BusIcon } from 'lucide-react';
import gsap from 'gsap';
export function Hero() {
  const { t } = useLanguage();
  const heroRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation - character reveal
      if (titleRef.current) {
        const chars = titleRef.current.textContent?.split('') || [];
        titleRef.current.innerHTML = chars.
        map(
          (char) =>
          `<span class="inline-block opacity-0">${char === ' ' ? '&nbsp;' : char}</span>`
        ).
        join('');
        gsap.to(titleRef.current.children, {
          opacity: 1,
          y: 0,
          stagger: 0.03,
          duration: 0.8,
          ease: 'power3.out',
          delay: 0.8
        });
      }
      // Subtitle fade in
      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          {
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            delay: 1.2
          }
        );
      }
      // Description fade in
      if (descriptionRef.current) {
        gsap.fromTo(
          descriptionRef.current,
          {
            opacity: 0,
            y: 30
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            delay: 1.5
          }
        );
      }
      // CTA buttons stagger
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current.children,
          {
            opacity: 0,
            y: 30,
            scale: 0.8
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.15,
            duration: 0.8,
            ease: 'elastic.out(1, 0.5)',
            delay: 1.8
          }
        );
      }
      // Floating elements animation
      if (floatingRef.current) {
        const floatingElements = floatingRef.current.children;
        Array.from(floatingElements).forEach((el, i) => {
          gsap.to(el, {
            y: -30,
            duration: 3 + i * 0.5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut',
            delay: i * 0.3
          });
          gsap.to(el, {
            rotation: 360,
            duration: 20 + i * 5,
            repeat: -1,
            ease: 'none'
          });
        });
      }
    }, heroRef);
    return () => ctx.revert();
  }, []);
  const scrollToWhy = () => {
    const whySection = document.getElementById('why');
    if (whySection) {
      whySection.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  const handleMagneticButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    const button = e.currentTarget;
    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    gsap.to(button, {
      x: x * 0.3,
      y: y * 0.3,
      duration: 0.3,
      ease: 'power2.out'
    });
  };
  const handleMagneticLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    gsap.to(e.currentTarget, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: 'elastic.out(1, 0.5)'
    });
  };
  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden pt-20 px-4">

      {/* Floating Background Elements */}
      <div ref={floatingRef} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-[var(--accent-primary)] opacity-20 rounded-full blur-xl" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-[var(--accent-secondary)] opacity-20 rounded-full blur-xl" />
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-purple-500 opacity-20 rounded-full blur-xl" />
        <BusIcon className="absolute top-1/4 right-1/4 w-16 h-16 text-[var(--accent-primary)] opacity-10" />
        <MapIcon className="absolute bottom-1/3 left-1/3 w-20 h-20 text-[var(--accent-secondary)] opacity-10" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        {/* Subtitle Badge */}
        <div className="inline-flex items-center space-x-2 px-4 py-2 glass rounded-full mb-6 border border-[var(--accent-primary)]">
          <span className="w-2 h-2 bg-[var(--accent-primary)] rounded-full animate-pulse-glow" />
          <span
            ref={subtitleRef}
            className="text-sm font-semibold gradient-text">

            {t.hero.subtitle}
          </span>
        </div>

        {/* Main Title */}
        <h1
          ref={titleRef}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-heading font-bold text-[var(--text-primary)] mb-6 leading-tight">

          {t.hero.title}
        </h1>

        {/* Description */}
        <p
          ref={descriptionRef}
          className="text-lg sm:text-xl md:text-2xl text-[var(--text-secondary)] max-w-3xl mx-auto mb-12 leading-relaxed">

          {t.hero.description}
        </p>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">

          <button
            onMouseMove={handleMagneticButton}
            onMouseLeave={handleMagneticLeave}
            className="group relative px-8 py-4 bg-gradient-primary text-white rounded-xl font-semibold text-lg shadow-glow-primary hover:shadow-glow-lg transition-all transform hover:scale-105 flex items-center space-x-2"
            aria-label={t.hero.ctaPrimary}>

            <RocketIcon className="w-5 h-5 group-hover:rotate-45 transition-transform" />
            <span>{t.hero.ctaPrimary}</span>
          </button>

          <button
            onMouseMove={handleMagneticButton}
            onMouseLeave={handleMagneticLeave}
            onClick={scrollToWhy}
            className="group px-8 py-4 glass border-2 border-[var(--accent-secondary)] text-[var(--text-primary)] rounded-xl font-semibold text-lg hover:bg-[var(--accent-secondary)] hover:text-black transition-all transform hover:scale-105 flex items-center space-x-2"
            aria-label={t.hero.ctaSecondary}>

            <span>{t.hero.ctaSecondary}</span>
            <ChevronDownIcon className="w-5 h-5 group-hover:translate-y-1 group-hover:text-black transition-transform" />
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDownIcon className="w-8 h-8 text-[var(--text-tertiary)]" />
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[var(--bg-primary)] pointer-events-none" />
    </section>);

}