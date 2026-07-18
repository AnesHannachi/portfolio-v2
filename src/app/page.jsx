'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Parcours from '@/components/Parcours';
import ContactModal from '@/components/ContactModal';
import Footer from '@/components/Footer';

export default function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#05050f] text-white">
      <Navbar onContactClick={() => setIsContactOpen(true)} />
      <Hero />
      <About onContactClick={() => setIsContactOpen(true)} />
      <Projects />
      <Skills />
      <Parcours />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
      <Footer />
    </main>
  );
}