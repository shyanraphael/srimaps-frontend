import React, { useEffect, useRef } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import {
  RadioIcon,
  LanguagesIcon,
  SearchIcon,
  ShieldCheckIcon,
  DollarSignIcon,
  UsersIcon } from
'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export function Why() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const features = [
  {
    icon: RadioIcon,
    title: t.why.features.realtime.title,
    description: t.why.features.realtime.description,
    color: 'text-[var(--accent-primary)]'
  },
  {
    icon: LanguagesIcon,
    title: t.why.features.multilingual.title,
    description: t.why.features.multilingual.description,
    color: 'text-[var(--accent-secondary)]'
  },
  {
    icon: SearchIcon,
    title: t.why.features.easySearch.title,
    description: t.why.features.easySearch.description,
    color: 'text-purple-500'
  },
  {
    icon: ShieldCheckIcon,
    title: t.why.features.reliable.title,
    description: t.why.features.reliable.description,
    color: 'text-green-500'
  },
  {
    icon: DollarSignIcon,
    title: t.why.features.free.title,
    description: t.why.features.free.description,
    color: 'text-yellow-500'
  },
  {
    icon: UsersIcon,
    title: t.why.features.community.title,
    description: t.why.features.community.description,
    color: 'text-blue-500'
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
      // Cards stagger animation
      if (cardsRef.current) {
        const cards = cardsRef.current.children;
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 80,
            scale: 0.8
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            stagger: 0.15,
            duration: 0.8,
            ease: 'elastic.out(1, 0.5)',
            scrollTrigger: {
              trigger: cardsRef.current,
              start: 'top 75%'
            }
          }
        );
        // Icon animations on scroll
        Array.from(cards).forEach((card) => {
          const icon = card.querySelector('[data-icon]');
          if (icon) {
            gsap.fromTo(
              icon,
              {
                rotation: -180,
                scale: 0
              },
              {
                rotation: 0,
                scale: 1,
                duration: 1,
                ease: 'elastic.out(1, 0.5)',
                scrollTrigger: {
                  trigger: card,
                  start: 'top 80%'
                }
              }
            );
          }
        });
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  return (
    <section
      id="why"
      ref={sectionRef}
      className="relative w-full py-20 md:py-32 px-4 bg-[var(--bg-secondary)]">

      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-[var(--text-primary)] mb-4">
            {t.why.title}
          </h2>
          <p className="text-xl text-[var(--text-secondary)] max-w-2xl mx-auto">
            {t.why.subtitle}
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">

          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group glass rounded-2xl p-8 hover:shadow-glow-lg transition-all duration-300 transform hover:-translate-y-2 border border-[var(--border-color)]">

                {/* Icon */}
                <div
                  data-icon
                  className={`w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 shadow-glow-primary group-hover:shadow-glow-lg transition-all`}>

                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-heading font-bold text-[var(--text-primary)] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[var(--text-secondary)] leading-relaxed">
                  {feature.description}
                </p>
              </div>);

          })}
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none opacity-30">
        <div className="absolute top-20 right-10 w-64 h-64 bg-[var(--accent-primary)] rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-64 h-64 bg-[var(--accent-secondary)] rounded-full blur-3xl" />
      </div>
    </section>);

}