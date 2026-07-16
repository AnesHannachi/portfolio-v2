'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

const projects = [
  {
    slug: 'esiflow',
    title: 'ESIFLOW',
    role: 'UI/UX Designer & Développeur Front-End',
    type: 'Projet d\'équipe',
    description: 'Plateforme web pour optimiser la gestion des équipements et des opérations de maintenance à l\'ESI.',
    stack: ['Next.js', 'React.js', 'Tailwind CSS'],
    github: 'https://github.com/AnesHannachi',
  },
  {
    slug: 'esi-grade',
    title: 'ESI GRADE',
    role: 'Développeur Full-Stack (solo)',
    type: 'Projet personnel',
    description: 'Plateforme permettant aux étudiants ESI de calculer leurs moyennes et suivre leur progression via un dashboard avancé.',
    stack: ['Next.js', 'Node.js', 'Express', 'MongoDB'],
    github: 'https://github.com/AnesHannachi',
  },
  {
    slug: 'cse-bots',
    title: 'CSE EVENTS BOTS',
    role: 'Développeur (solo)',
    type: 'Projet personnel',
    description: 'Chatbots pour les événements du CSE (DataHack, InnovDigitale, CCC) pour guider les participants et automatiser les flux de travail.',
    stack: ['Python', 'JavaScript', 'APIs'],
    github: 'https://github.com/AnesHannachi',
  },
  {
    slug: 'refactoring-swarm',
    title: 'THE REFACTORING SWARM',
    role: 'Développeur des fonctions agents',
    type: 'Projet académique',
    description: 'Architecture multi-agents IA basée sur des LLMs capable de réparer et maintenir du code de manière autonome.',
    stack: ['Python', 'LangChain', 'LangGraph', 'LLM APIs'],
    github: 'https://github.com/AnesHannachi',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#05050f]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title with accent */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold">
            Une sélection de mes projets{' '}
            <span className="gradient-text">récents</span>
          </h2>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.slug}
              className="glass rounded-2xl overflow-hidden group card-scale"
            >
              {/* Image Placeholder - 16:9 aspect ratio */}
              <div className="relative w-full bg-gray-900 rounded-t-2xl overflow-hidden">
                <div className="aspect-video flex items-center justify-center bg-gray-950 relative">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📸</div>
                    <p className="text-xs text-gray-600">[ screenshot projet ]</p>
                  </div>
                  {/* Subtle gradient overlay */}
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-linear-to-t from-gray-950 to-transparent opacity-40" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-6">{project.description}</p>

                {/* Tech Stack */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((tech) => (
                      <span key={tech} className="tag">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group flex-1 btn-primary text-center text-sm inline-flex items-center justify-center"
                  >
                    <span className="inline-flex items-center justify-center w-0 opacity-0 -translate-x-2 group-hover:w-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 overflow-hidden">
                      <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                    </span>
                    <span>Voir le détail</span>
                    <span className="inline-flex items-center justify-center w-5 opacity-100 translate-x-0 group-hover:w-0 group-hover:opacity-0 group-hover:translate-x-2 transition-all duration-300 overflow-hidden">
                      <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                    </span>
                  </Link>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex-1 px-4 py-2 border border-gray-400 text-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300 text-sm inline-flex items-center justify-center"
                  >
                    <span className="inline-flex items-center justify-center w-0 opacity-0 -translate-x-2 group-hover:w-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 overflow-hidden">
                      <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                    </span>
                    <span>GitHub</span>
                    <span className="inline-flex items-center justify-center w-5 opacity-100 translate-x-0 group-hover:w-0 group-hover:opacity-0 group-hover:translate-x-2 transition-all duration-300 overflow-hidden">
                      <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
