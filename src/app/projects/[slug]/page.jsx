'use client';

import { use, useState } from 'react';
import ProjectDetail from '@/components/ProjectDetail';
import Navbar from '@/components/Navbar';
import ContactModal from '@/components/ContactModal';

export default function ProjectDetailPage({ params }) {
  const { slug } = use(params);
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#05050f] text-white">
      <Navbar onContactClick={() => setIsContactOpen(true)} />
      <ProjectDetail slug={slug} />
      <ContactModal isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </main>
  );
}
