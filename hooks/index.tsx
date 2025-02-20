'use client'
import { useEffect, useRef, useState } from 'react';

export function useVisibleSection() {
  const [activeSection, setActiveSection] = useState<string | null>('about');
  const sections = useRef([]);

  const handleScroll = () => {
    const pageYOffset = window.pageYOffset;
    let newActiveSection: string | null = null;

    sections.current.forEach((section: HTMLElement) => {
      const sectionOffsetTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (pageYOffset >= sectionOffsetTop && pageYOffset < sectionOffsetTop + sectionHeight) {
        newActiveSection = section.id;
      }
    });

    setActiveSection(newActiveSection);
  };

  useEffect(() => {
    sections.current = Array.from(document.querySelectorAll('[data-section]'));
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  console.log('active section', activeSection);

  return activeSection;
}