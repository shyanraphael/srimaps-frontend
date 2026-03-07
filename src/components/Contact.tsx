import React, { useEffect, useState, useRef, createElement } from 'react';
import { useLanguage } from '../hooks/useLanguage';
import { SendIcon, CheckCircleIcon, AlertCircleIcon } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
type SubmitStatus = 'idle' | 'sending' | 'success' | 'error';
export function Contact() {
  const { t } = useLanguage();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>('idle');
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
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
      // Form animation
      if (formRef.current) {
        gsap.fromTo(
          formRef.current,
          {
            opacity: 0,
            y: 80
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: formRef.current,
              start: 'top 75%'
            }
          }
        );
      }
    }, sectionRef);
    return () => ctx.revert();
  }, []);
  const handleInputFocus = (
  e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
  {
    const label = e.target.previousElementSibling;
    if (label) {
      gsap.to(label, {
        y: -8,
        scale: 0.85,
        color: 'var(--accent-primary)',
        duration: 0.3,
        ease: 'power2.out'
      });
    }
  };
  const handleInputBlur = (
  e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) =>
  {
    if (!e.target.value) {
      const label = e.target.previousElementSibling;
      if (label) {
        gsap.to(label, {
          y: 0,
          scale: 1,
          color: 'var(--text-secondary)',
          duration: 0.3,
          ease: 'power2.out'
        });
      }
    }
  };
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitStatus('sending');
    // Animate button
    const button = document.querySelector('[data-submit-button]');
    if (button) {
      gsap.to(button, {
        scale: 0.95,
        duration: 0.1,
        yoyo: true,
        repeat: 1
      });
    }
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));
    // Success animation
    setSubmitStatus('success');
    if (button) {
      gsap.to(button, {
        scale: 1.1,
        duration: 0.3,
        ease: 'elastic.out(1, 0.5)'
      });
    }
    // Confetti effect (simple version)
    const confettiContainer = document.querySelector('[data-confetti]');
    if (confettiContainer) {
      for (let i = 0; i < 20; i++) {
        const confetti = document.createElement('div');
        confetti.className = 'absolute w-2 h-2 rounded-full';
        confetti.style.background =
        i % 2 === 0 ? 'var(--accent-primary)' : 'var(--accent-secondary)';
        confetti.style.left = '50%';
        confetti.style.top = '50%';
        confettiContainer.appendChild(confetti);
        gsap.to(confetti, {
          x: (Math.random() - 0.5) * 200,
          y: (Math.random() - 0.5) * 200,
          opacity: 0,
          duration: 1,
          ease: 'power2.out',
          onComplete: () => confetti.remove()
        });
      }
    }
    // Reset form
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setSubmitStatus('idle');
    }, 3000);
  };
  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full py-20 md:py-32 px-4 bg-[var(--bg-primary)]">

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-[var(--text-primary)] mb-4">
            {t.contact.title}
          </h2>
          <p className="text-xl text-[var(--text-secondary)]">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Form */}
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="relative glass rounded-2xl p-8 md:p-12 border border-[var(--border-color)]">

          <div data-confetti className="absolute inset-0 pointer-events-none" />

          {/* Name Input */}
          <div className="relative mb-8">
            <label
              htmlFor="name"
              className="absolute left-4 top-4 text-[var(--text-secondary)] transition-all pointer-events-none">

              {t.contact.form.name}
            </label>
            <input
              id="name"
              type="text"
              value={formData.name}
              onChange={(e) =>
              setFormData({
                ...formData,
                name: e.target.value
              })
              }
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              required
              className="w-full px-4 pt-8 pb-4 bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] rounded-xl text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors" />

          </div>

          {/* Email Input */}
          <div className="relative mb-8">
            <label
              htmlFor="email"
              className="absolute left-4 top-4 text-[var(--text-secondary)] transition-all pointer-events-none">

              {t.contact.form.email}
            </label>
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) =>
              setFormData({
                ...formData,
                email: e.target.value
              })
              }
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              required
              className="w-full px-4 pt-8 pb-4 bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] rounded-xl text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors" />

          </div>

          {/* Message Textarea */}
          <div className="relative mb-8">
            <label
              htmlFor="message"
              className="absolute left-4 top-4 text-[var(--text-secondary)] transition-all pointer-events-none">

              {t.contact.form.message}
            </label>
            <textarea
              id="message"
              value={formData.message}
              onChange={(e) =>
              setFormData({
                ...formData,
                message: e.target.value
              })
              }
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
              required
              rows={6}
              className="w-full px-4 pt-8 pb-4 bg-[var(--bg-secondary)] border-2 border-[var(--border-color)] rounded-xl text-[var(--text-primary)] focus:border-[var(--accent-primary)] focus:outline-none transition-colors resize-none" />

          </div>

          {/* Submit Button */}
          <button
            data-submit-button
            type="submit"
            disabled={submitStatus === 'sending' || submitStatus === 'success'}
            className={`w-full py-4 rounded-xl font-semibold text-lg transition-all flex items-center justify-center space-x-2 ${submitStatus === 'success' ? 'bg-green-500 text-white' : submitStatus === 'error' ? 'bg-red-500 text-white' : 'bg-gradient-primary text-white hover:shadow-glow-lg'}`}>

            {submitStatus === 'idle' &&
            <>
                <SendIcon className="w-5 h-5" />
                <span>{t.contact.form.send}</span>
              </>
            }
            {submitStatus === 'sending' &&
            <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                <span>{t.contact.form.sending}</span>
              </>
            }
            {submitStatus === 'success' &&
            <>
                <CheckCircleIcon className="w-5 h-5" />
                <span>{t.contact.form.success}</span>
              </>
            }
            {submitStatus === 'error' &&
            <>
                <AlertCircleIcon className="w-5 h-5" />
                <span>{t.contact.form.error}</span>
              </>
            }
          </button>
        </form>
      </div>

      {/* Background Decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-20 right-10 w-96 h-96 bg-[var(--accent-primary)] rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-[var(--accent-secondary)] rounded-full blur-3xl" />
      </div>
    </section>);

}