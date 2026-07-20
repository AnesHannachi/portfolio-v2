'use client';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiLangchain,
  SiJavascript,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { FaDatabase } from 'react-icons/fa';

// Map tech name → { icon, color }
const techIcons = {
  'Next.js':      { icon: SiNextdotjs,   color: '#ffffff' },
  'React.js':     { icon: FaReact,       color: '#61DAFB' },
  'Tailwind CSS': { icon: SiTailwindcss, color: '#38BDF8' },
  'Node.js':      { icon: FaNodeJs,      color: '#6BBF47' },
  'Express':      { icon: SiExpress,     color: '#ffffff' },
  'MongoDB':      { icon: SiMongodb,     color: '#47A248' },
  'Python':       { icon: FaPython,      color: '#3B82F6' },
  'JavaScript':   { icon: SiJavascript,  color: '#F7DF1E' },
  'LangChain':    { icon: SiLangchain,   color: '#1C3C3C' },
  'LangGraph':    { icon: FaDatabase,    color: '#7C3AED' },
  'LLM APIs':     { icon: TbApi,         color: '#F97316' },
  'APIs':         { icon: TbApi,         color: '#F97316' },
};

const projects = [
  {
    slug: 'esiflow',
    title: 'ESIFLOW',
    role: 'UI/UX Designer & Développeur Front-End',
    type: "Projet d'équipe",
    description: "Plateforme web pour optimiser la gestion des équipements et des opérations de maintenance à l'ESI.",
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

function TechBadge({ tech }) {
  const entry = techIcons[tech];
  const Icon = entry?.icon;
  const color = entry?.color ?? '#94a3b8';

  return (
    <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10">
      {Icon && <Icon style={{ color }} className="w-4 h-4 flex-shrink-0" />}
      <span className="text-xs font-medium text-gray-300 whitespace-nowrap">{tech}</span>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-[#05050f]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-5xl font-bold">
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
              {/* Image Placeholder */}
              <div className="relative w-full rounded-t-2xl overflow-hidden">
                <div className="aspect-video flex items-center justify-center bg-gray-950 relative">
                  <div className="text-center">
                    <div className="text-4xl mb-2">📸</div>
                    <p className="text-xs text-gray-600">[ screenshot projet ]</p>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-gray-950 to-transparent opacity-40" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{project.description}</p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.stack.map((tech) => (
                    <TechBadge key={tech} tech={tech} />
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-5">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="group/detail flex-1 btn-primary text-center text-sm inline-flex items-center justify-center"
                  >
                    <span className="inline-flex items-center justify-center w-0 opacity-0 -translate-x-2 group-hover/detail:w-5 group-hover/detail:opacity-100 group-hover/detail:translate-x-0 transition-all duration-300 overflow-hidden">
                      <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                    </span>
                    <span>Voir le détail</span>
                    <span className="inline-flex items-center justify-center w-5 opacity-100 translate-x-0 group-hover/detail:w-0 group-hover/detail:opacity-0 group-hover/detail:translate-x-2 transition-all duration-300 overflow-hidden">
                      <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                    </span>
                  </Link>

                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/github flex-1 px-4 py-2 border border-gray-400 text-gray-300 rounded-lg hover:border-blue-500 hover:text-blue-400 transition-all duration-300 text-sm inline-flex items-center justify-center"
                  >
                    <span className="inline-flex items-center justify-center w-0 opacity-0 -translate-x-2 group-hover/github:w-5 group-hover/github:opacity-100 group-hover/github:translate-x-0 transition-all duration-300 overflow-hidden">
                      <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                    </span>
                    <span>GitHub</span>
                    <span className="inline-flex items-center justify-center w-5 opacity-100 translate-x-0 group-hover/github:w-0 group-hover/github:opacity-0 group-hover/github:translate-x-2 transition-all duration-300 overflow-hidden">
                      <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}