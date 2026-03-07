import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useTheme } from '../hooks/useTheme';

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorOutlineRef = useRef<HTMLDivElement>(null);
  const cursorPosRef = useRef({ x: 0, y: 0 });
  const { theme } = useTheme();

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorOutline = cursorOutlineRef.current;

    if (!cursor || !cursorOutline) return;

    // Hide default cursor
    document.body.style.cursor = 'none';

    const onMouseMove = (e: MouseEvent) => {
      cursorPosRef.current = { x: e.clientX, y: e.clientY };

      // Animate main cursor with GSAP
      gsap.to(cursor, {
        x: e.clientX - 8,
        y: e.clientY - 8,
        duration: 0.1,
        ease: 'circ.out',
      });

      // Animate outline with delay for trail effect
      gsap.to(cursorOutline, {
        x: e.clientX - 20,
        y: e.clientY - 20,
        duration: 0.4,
        ease: 'circ.out',
      });
    };

    const onMouseDown = () => {
      // Animation on click
      gsap.timeline()
        .to(cursor, {
          scale: 0.5,
          duration: 0.2,
        }, 0)
        .to(cursorOutline, {
          scale: 1.5,
          duration: 0.2,
        }, 0);
    };

    const onMouseUp = () => {
      gsap.timeline()
        .to(cursor, {
          scale: 1,
          duration: 0.2,
        }, 0)
        .to(cursorOutline, {
          scale: 1,
          duration: 0.2,
        }, 0);
    };

    const onMouseEnterButton = () => {
      gsap.to(cursorOutline, {
        scale: 1.8,
        duration: 0.3,
        ease: 'back.out',
      });
      gsap.to(cursor, {
        scale: 0.6,
        duration: 0.3,
      });
    };

    const onMouseLeaveButton = () => {
      gsap.to(cursorOutline, {
        scale: 1,
        duration: 0.3,
        ease: 'back.out',
      });
      gsap.to(cursor, {
        scale: 1,
        duration: 0.3,
      });
    };

    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);

    // Add hover effects to buttons and interactive elements
    const interactiveElements = document.querySelectorAll(
      'button, a, [role="button"], input, textarea, select'
    );
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', onMouseEnterButton);
      el.addEventListener('mouseleave', onMouseLeaveButton);
    });

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.body.style.cursor = 'auto';

      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', onMouseEnterButton);
        el.removeEventListener('mouseleave', onMouseLeaveButton);
      });
    };
  }, []);

  const cursorColor = theme === 'dark' ? '#8FABD4' : '#4A70A9';
  const outlineColor = theme === 'dark' ? 'rgba(143, 171, 212, 0.25)' : 'rgba(74, 112, 169, 0.2)';

  return (
    <>
      {/* Main cursor dot */}
      <div
        ref={cursorRef}
        className="pointer-events-none fixed top-0 left-0 z-[9999] w-4 h-4 rounded-full"
        style={{
          backgroundColor: cursorColor,
          boxShadow: `0 0 8px ${cursorColor}`,
          transform: 'translate(0, 0)',
        }}
      />

      {/* Cursor outline trail */}
      <div
        ref={cursorOutlineRef}
        className="pointer-events-none fixed top-0 left-0 z-[9998] w-10 h-10 rounded-full border-2"
        style={{
          borderColor: cursorColor,
          backgroundColor: outlineColor,
          transform: 'translate(0, 0)',
          transition: 'border-color 0.3s ease',
        }}
      />
    </>
  );
}
