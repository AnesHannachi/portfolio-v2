'use client';

import Navbar from '@/components/Navbar';
import Projects from '@/components/Projects';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import { useState } from 'react';

export default function ProjectsPage() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const handleContactClick = () => {
    setIsContactOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactOpen(false);
  };

  return (
    <main className="min-h-screen bg-[#05050f] text-white">
      <Navbar onContactClick={handleContactClick} />
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-5xl font-bold mb-8">Tous les projets</h1>
          <Projects />
        </div>
      </section>
      <ContactModal isOpen={isContactOpen} onClose={handleCloseContact} />
      <Footer />
    </main>
  );
}
