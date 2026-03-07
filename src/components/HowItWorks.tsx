import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import {
  MonitorIcon,
  SearchIcon,
  MapPinIcon,
  ArrowRightIcon } from
'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export function HowItWorks() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const diagramRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const steps = [
  {
    icon: MonitorIcon,
    title: t.howItWorks.steps.open.title,
    description: t.howItWorks.steps.open.description,
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: SearchIcon,
    title: t.howItWorks.steps.search.title,
    description: t.howItWorks.steps.search.description,
    color: 'from-blue-500 to-cyan-500'
  },
  {
    icon: MapPinIcon,
    title: t.howItWorks.steps.track.title,
    description: t.howItWorks.steps.track.description,
    color: 'from-green-500 to-emerald-500'
  }];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
        gsap.fromTo(
          titleRef.current,
          {
            opacity: 0,
            y: 50
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: titleRef.current,
              start: 'top 80%'
            }
          }
        );
      }
      // Complex diagram animation
      if (diagramRef.current) {
        const cards = diagramRef.current.querySelectorAll('[data-step-card]');
        const arrows = diagramRef.current.querySelectorAll('[data-arrow]');
        // Timeline for sequential reveal
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: diagramRef.current,
            start: 'top 70%'
          }
        });
        cards.forEach((card, index) => {
          // Card reveal
          tl.fromTo(
            card,
            {
              opacity: 0,
              scale: 0.5,
              y: 100
            },
            {
              opacity: 1,
              scale: 1,
              y: 0,
              duration: 0.8,
              ease: 'elastic.out(1, 0.5)'
            },
            index * 0.4
          );
          // Icon animation
          const icon = card.querySelector('[data-step-icon]');
          if (icon) {
            tl.fromTo(
              icon,
              {
                rotation: -180,
                scale: 0
              },
              {
                rotation: 0,
                scale: 1,
                duration: 0.6,
                ease: 'back.out(2)'
              },
              index * 0.4 + 0.2
            );
          }
          // Arrow animation (if not last card)
          if (index < arrows.length) {
            tl.fromTo(
              arrows[index],
              {
                opacity: 0,
                x: -50
              },
              {
                opacity: 1,
                x: 0,
                duration: 0.5,
                ease: 'power2.out'
              },
              index * 0.4 + 0.4
            );
          }
        });
        // SVG path animation
        if (svgRef.current) {
          const paths = svgRef.current.querySelectorAll('path');
          paths.forEach((path, index) => {
            const length = path.getTotalLength();
            gsap.set(path, {
              strokeDasharray: length,
              strokeDashoffset: length
            });
            tl.to(
              path,
              {
                strokeDashoffset: 0,
                duration: 1.5,
                ease: 'power2.inOut'
              },
              index * 0.5
            );
          });
        }
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative w-full py-20 md:py-32 px-4 bg-[var(--bg-primary)] overflow-hidden">

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-[var(--text-primary)] mb-4">
            {t.howItWorks.title}
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* Diagram */}
        <div ref={diagramRef} className="relative">
          {/* Desktop Layout */}
          <div className="hidden lg:flex items-center justify-center space-x-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex items-center">
                  {/* Step Card */}
                  <div
                    data-step-card
                    className="relative glass rounded-2xl p-8 w-80 border border-[var(--border-color)] hover:shadow-glow-lg transition-all">

                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-glow-primary">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div
                      data-step-icon
                      className={`w-20 h-20 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}>

                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-heading font-bold text-[var(--text-primary)] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 &&
                  <div data-arrow className="mx-4">
                      <ArrowRightIcon className="w-12 h-12 text-[var(--accent-primary)]" />
                    </div>
                  }
                </div>);

            })}
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:hidden space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Step Card */}
                  <div
                    data-step-card
                    className="relative glass rounded-2xl p-8 border border-[var(--border-color)]">

                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-white font-bold text-xl shadow-glow-primary">
                      {index + 1}
                    </div>

                    {/* Icon */}
                    <div
                      data-step-icon
                      className={`w-20 h-20 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg`}>

                      <Icon className="w-10 h-10 text-white" />
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-heading font-bold text-[var(--text-primary)] mb-3">
                      {step.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Connecting Line */}
                  {index < steps.length - 1 &&
                  <div className="flex justify-center my-4">
                      <div className="w-1 h-12 bg-gradient-to-b from-[var(--accent-primary)] to-[var(--accent-secondary)] rounded-full" />
                    </div>
                  }
                </div>);

            })}
          </div>

          {/* Animated SVG Background (Desktop) */}
          <svg
            ref={svgRef}
            className="hidden lg:block absolute top-1/2 left-0 w-full h-2 -translate-y-1/2 pointer-events-none"
            style={{
              zIndex: -1
            }}>

            <path
              d="M 100 50 Q 400 20, 700 50 T 1300 50"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="3"
              opacity="0.3" />

            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="var(--accent-primary)" />
                <stop offset="50%" stopColor="var(--accent-secondary)" />
                <stop offset="100%" stopColor="var(--accent-primary)" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-[var(--accent-primary)] rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[var(--accent-secondary)] rounded-full blur-3xl" />
      </div>
    </section>);

}