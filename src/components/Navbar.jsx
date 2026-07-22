'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { gsap } from 'gsap';
import { GoArrowUpRight } from 'react-icons/go';
import { ArrowUpRight } from 'lucide-react';

export default function Navbar({ onContactClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const mobileNavRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cardItems = [
    {
      label: 'À propos',
      subLabel: 'Découvrir mon profil',
      href: '#about',
    },
    {
      label: 'Projets',
      subLabel: 'Voir mes réalisations',
      href: '#projects',
    },
    {
      label: 'Compétences',
      subLabel: 'Stack technique & Outils',
      href: '#skills',
    },
    {
      label: 'Parcours',
      subLabel: 'Mon expérience & Formation',
      href: '#parcours',
    },
    {
      label: 'Contact',
      subLabel: 'Me contacter',
      href: '#contact',
      onClick: onContactClick,
    },
  ];

  const calculateHeight = () => {
    const navEl = mobileNavRef.current;
    if (!navEl) return 60;

    const contentEl = navEl.querySelector('.card-nav-content');
    if (contentEl) {
      const wasVisibility = contentEl.style.visibility;
      const wasPointerEvents = contentEl.style.pointerEvents;
      const wasPosition = contentEl.style.position;
      const wasHeight = contentEl.style.height;

      contentEl.style.visibility = 'visible';
      contentEl.style.pointerEvents = 'auto';
      contentEl.style.position = 'static';
      contentEl.style.height = 'auto';

      contentEl.offsetHeight;

      const topBar = 60;
      const padding = 16;
      const contentHeight = contentEl.scrollHeight;

      contentEl.style.visibility = wasVisibility;
      contentEl.style.pointerEvents = wasPointerEvents;
      contentEl.style.position = wasPosition;
      contentEl.style.height = wasHeight;

      return topBar + contentHeight + padding;
    }
    return 400;
  };

  useEffect(() => {
    const navEl = mobileNavRef.current;
    if (!navEl) return;

    if (isOpen) {
      const targetHeight = calculateHeight();
      gsap.to(navEl, {
        height: targetHeight,
        duration: 0.4,
        ease: 'power3.out',
      });
      gsap.to(cardsRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.35,
        ease: 'power3.out',
        stagger: 0.06,
        overwrite: 'auto',
      });
    } else {
      gsap.to(cardsRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.2,
        ease: 'power3.in',
      });
      gsap.to(navEl, {
        height: 60,
        duration: 0.3,
        ease: 'power3.inOut',
      });
    }
  }, [isOpen]);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  const setCardRef = (i) => (el) => {
    if (el) cardsRef.current[i] = el;
  };

  return (
    <div className="fixed top-4 left-1/2 -translate-x-1/2 w-[92%] max-w-6xl z-50 mb-10">
      {/* Floating Pill Nav Bar */}
      <nav
        ref={mobileNavRef}
        className={`card-nav ${isOpen ? 'open' : ''} block rounded-2xl shadow-2xl relative overflow-hidden transition-all duration-300 border border-white/10 ${isScrolled ? 'bg-[#0a0a1a]/95 backdrop-blur-xl' : 'bg-[#0a0a1a]/90 backdrop-blur-md'
          }`}
        style={{ height: '60px' }}
      >
        {/* Top Header Bar */}
        <div className="h-[60px] flex items-center justify-between px-5 z-[2] relative">

          {/* DESKTOP HEADER (md:flex) */}
          <div className="hidden md:flex items-center justify-between w-full ">
            {/* Left: Logo */}
            <Link href="#hero" className="font-mono text-lg font-bold gradient-text flex items-center gap-2">
              anes.dev
            </Link>

            {/* Right: Nav Links + Contact CTA */}
            <div className="flex items-center gap-8">
              <a
                href="#about"
                className="text-gray-300 transition-colors duration-300 text-sm font-medium relative group"
              >
                <span className="group-hover:gradient-text">À propos</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#projects"
                className="text-gray-300 transition-colors duration-300 text-sm font-medium relative group"
              >
                <span className="group-hover:gradient-text">Projets</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#skills"
                className="text-gray-300 transition-colors duration-300 text-sm font-medium relative group"
              >
                <span className="group-hover:gradient-text">Compétences</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#parcours"
                className="text-gray-300 transition-colors duration-300 text-sm font-medium relative group"
              >
                <span className="group-hover:gradient-text">Parcours</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6] group-hover:w-full transition-all duration-300"></span>
              </a>
              <a href="#contact"
              onClick={(e) => {
                if (onContactClick) {
                  e.preventDefault();
                  onContactClick();
                }
              }}
              className="group btn-primary inline-flex items-center justify-center">
              <span className="inline-flex items-center justify-center w-0 opacity-0 -translate-x-2 group-hover:w-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 overflow-hidden">
                <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
              </span>
              <span>Contact</span>
              <span className="inline-flex items-center justify-center w-4 opacity-100 translate-x-0 group-hover:w-0 group-hover:opacity-0 group-hover:translate-x-2 transition-all duration-300 overflow-hidden">
                <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
              </span>
            </a>
            </div>
          </div>

          {/* MOBILE HEADER (md:hidden): Left Hamburger | Center Logo | Right Contact */}
          <div className="flex md:hidden items-center justify-between w-full relative">
            {/* Left: Hamburger Menu Icon */}
            <div
              className={`hamburger-menu ${isOpen ? 'open' : ''} group h-full flex flex-col items-center justify-center cursor-pointer gap-[6px]`}
              onClick={toggleMenu}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  toggleMenu();
                }
              }}
              role="button"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              tabIndex={0}
              style={{ color: '#fff' }}
            >
              <div
                className={`hamburger-line w-[24px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${isOpen ? 'translate-y-[4px] rotate-45' : ''
                  } group-hover:opacity-75`}
              />
              <div
                className={`hamburger-line w-[24px] h-[2px] bg-current transition-[transform,opacity,margin] duration-300 ease-linear [transform-origin:50%_50%] ${isOpen ? '-translate-y-[4px] -rotate-45' : ''
                  } group-hover:opacity-75`}
              />
            </div>

            {/* Center: Logo (Centered) */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <Link href="#hero" className="font-mono text-base font-bold gradient-text">
                anes.dev
              </Link>
            </div>

            {/* Right: Contact CTA Button */}
            {/* <a
              href="#contact"
              onClick={(e) => {
                if (onContactClick) {
                  e.preventDefault();
                  onContactClick();
                }
              }}
              className="btn-primary text-xs font-semibold px-3.5 py-1.5 rounded-lg text-white"
            >
              Contact
            </a> */}
            
              <a href="#contact"
              onClick={(e) => {
                if (onContactClick) {
                  e.preventDefault();
                  onContactClick();
                }
              }}
              className="group btn-primary inline-flex items-center justify-center">
              <span className="inline-flex items-center justify-center w-0 opacity-0 -translate-x-2 group-hover:w-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 overflow-hidden">
                <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
              </span>
              <span>Contact</span>
              <span className="inline-flex items-center justify-center w-4 opacity-100 translate-x-0 group-hover:w-0 group-hover:opacity-0 group-hover:translate-x-2 transition-all duration-300 overflow-hidden">
                <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
              </span>
            </a>
          </div>

        </div>

        {/* Mobile Expandable Cards Container */}
        <div
          className={`card-nav-content md:hidden absolute left-0 right-0 top-[60px] p-2.5 flex flex-col gap-2 justify-start z-[1] transition-opacity duration-300 ${isOpen ? 'visible pointer-events-auto opacity-100' : 'invisible pointer-events-none opacity-0'
            }`}
          aria-hidden={!isOpen}
        >
          {cardItems.map((item, idx) => (
            <a
              key={item.label}
              ref={setCardRef(idx)}
              href={item.href}
              onClick={(e) => {
                if (item.onClick) {
                  e.preventDefault();
                  item.onClick();
                }
                toggleMenu();
              }}
              className="nav-card select-none flex items-center justify-between p-3.5 rounded-xl no-underline transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
              style={{
                background: 'linear-gradient(#13111C, #13111C) padding-box, linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%) border-box',
                border: '1px solid transparent',
                borderRadius: '12px',
              }}
            >
              <div className="flex flex-col gap-0.5">
                <span className="font-bold text-base text-white">{item.label}</span>
                <span className="text-xs gradient-text font-medium">{item.subLabel}</span>
              </div>
              <GoArrowUpRight className="w-5 h-5 text-[#3B82F6] shrink-0" aria-hidden="true" />
            </a>
          ))}
        </div>
      </nav>
    </div>
  );
}
