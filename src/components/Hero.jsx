'use client';

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-[#05050f]">
      {/* Ambient light blobs */}
      <div
        className="absolute top-0 -left-40 w-96 h-96 rounded-full pointer-events-none opacity-35"
        style={{
          background: 'radial-gradient(circle, #3b0dab 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute top-20 -right-32 w-80 h-80 rounded-full pointer-events-none opacity-25"
        style={{
          background: 'radial-gradient(circle, #1a3adb 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, #6b21a8 0%, transparent 60%)',
        }}
      />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            {/* Label */}
            <p className="text-sm font-mono text-gray-400 mb-6">
              // Développeur Web basé en Algérie
            </p>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl leading-tight mb-8">
              <span className="gradient-text font-extrabold  ">
                Transformer les idées en<br />
                Expériences Utilisateur.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-md">
              Salut, je suis Anes Hannachi, étudiant ingénieur à l&apos;ESI et développeur web passionné par le front-end et l&apos;UI/UX.
            </p>

            {/* CTA Button */}
            <a href="#projects" className="group btn-primary inline-flex items-center justify-center">
              <span className="inline-flex items-center justify-center w-0 opacity-0 -translate-x-2 group-hover:w-6 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 overflow-hidden">
                <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
              </span>
              <span>Voir mes projets</span>
              <span className="inline-flex items-center justify-center w-6 opacity-100 translate-x-0 group-hover:w-0 group-hover:opacity-0 group-hover:translate-x-2 transition-all duration-300 overflow-hidden">
                <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
              </span>
            </a>
          </div>

          {/* Right: Photo Card */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute rounded-full pointer-events-none animate-pulse-glow"
                style={{
                  background: 'radial-gradient(circle, rgba(59, 130, 246, 0.35) 0%, transparent 70%)',
                  width: '140%',
                  height: '140%',
                  left: '-20%',
                  top: '-20%',
                  zIndex: -1,
                }}
              />
              {/* Photo card with Pop-out & Float Effect */}
              <div className="relative w-48 h-52 md:w-64 md:h-72 flex items-end justify-center animate-float">
                {/* The Circle Background & Border */}
                <div className="absolute bottom-0 w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-blue-500 bg-gray-900/80 backdrop-blur-sm shadow-[0_0_50px_rgba(59,130,246,0.15)] hover:border-purple-500 transition-colors duration-500" />

                {/* The Image (pops out at the top, clipped at the bottom) */}
                <div className="relative w-48 h-52 md:w-64 md:h-72 overflow-hidden rounded-b-full flex items-end justify-center">
                  <Image
                    src="/aneshannachi.png"
                    alt="Anes Hannachi"
                    width={256}
                    height={288}
                    className="object-cover object-top w-full h-full transform scale-110 transition-all duration-300 hover: origin-bottom filter drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
