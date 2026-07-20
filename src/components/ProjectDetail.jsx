'use client';

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
  'Discord API':  { icon: TbApi,         color: '#5865F2' },
  'Telegram API': { icon: TbApi,         color: '#26A5E4' },
  'Claude API':   { icon: TbApi,         color: '#F97316' },
  'GPT-4':        { icon: TbApi,         color: '#10A37F' },
  'JWT Auth':     { icon: TbApi,         color: '#FB923C' },
  'API REST':     { icon: TbApi,         color: '#F97316' },
};

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

const projectData = {
  esiflow: {
    title: 'ESIFLOW',
    role: "UI/UX Designer & Développeur Front-End",
    type: "Projet d'équipe",
    description: "Plateforme web pour optimiser la gestion des équipements et des opérations de maintenance à l'ESI.",
    fullDescription: "ESIFLOW est une plateforme web développée pour centraliser et simplifier la gestion des équipements et des opérations de maintenance au sein de l'école. Elle permet aux administrateurs de suivre l'état des équipements, de planifier les maintenances et d'améliorer les workflows organisationnels.",
    myRole: "J'ai conçu l'interface utilisateur en mettant l'accent sur l'accessibilité et l'expérience utilisateur, puis j'ai développé les composants React et intégré la logique frontend pour garantir une expérience fluide.",
    stack: ['Next.js', 'React.js', 'Tailwind CSS', 'API REST'],
    impact: [
      "Interface intuitive réduisant le temps d'apprentissage des utilisateurs",
      "Amélioration de 30% de l'efficacité des workflows de maintenance",
      "Tableau de bord en temps réel pour le suivi des équipements",
    ],
    github: 'https://github.com/AnesHannachi',
  },
  'esi-grade': {
    title: 'ESI GRADE',
    role: 'Développeur Full-Stack (solo)',
    type: 'Projet personnel',
    description: 'Plateforme permettant aux étudiants ESI de calculer leurs moyennes et suivre leur progression via un dashboard avancé.',
    fullDescription: "ESI GRADE est une application complète permettant aux étudiants de gérer leurs notes académiques. Elle offre un système de calcul automatisé des moyennes, un historique détaillé et des visualisations graphiques pour suivre la progression académique.",
    myRole: "J'ai développé l'application de bout en bout, du backend (Node.js + Express) à la base de données (MongoDB) et le frontend (Next.js), implémentant des algorithmes de calcul complexes et une interface responsive.",
    stack: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'JWT Auth'],
    impact: [
      'Plus de 50 étudiants utilisant la plateforme',
      'Calcul automatisé des moyennes avec précision',
      'Dashboard personnalisé pour chaque étudiant',
    ],
    github: 'https://github.com/AnesHannachi',
  },
  'cse-bots': {
    title: 'CSE EVENTS BOTS',
    role: 'Développeur (solo)',
    type: 'Projet personnel',
    description: 'Chatbots pour les événements du CSE (DataHack, InnovDigitale, CCC) pour guider les participants et automatiser les flux de travail.',
    fullDescription: "Ensemble de chatbots intelligents développés pour automatiser la gestion des événements du Club Scientifique. Ces bots guident les participants, répondent aux questions fréquentes et collectent les inscriptions.",
    myRole: "J'ai conçu et développé les architectures des bots, implémenté la logique de conversation et créé des intégrations avec les systèmes d'enregistrement.",
    stack: ['Python', 'JavaScript', 'Discord API', 'Telegram API'],
    impact: [
      "Automatisation complète du processus d'inscription pour 3 événements",
      'Support utilisateur 24/7 via les bots',
      "Amélioration significative de l'expérience participant",
    ],
    github: 'https://github.com/AnesHannachi',
  },
  'refactoring-swarm': {
    title: 'THE REFACTORING SWARM',
    role: 'Développeur des fonctions agents',
    type: 'Projet académique',
    description: 'Architecture multi-agents IA basée sur des LLMs capable de réparer et maintenir du code de manière autonome.',
    fullDescription: "The Refactoring Swarm est un système innovant utilisant une architecture multi-agents IA. Chaque agent spécialisé (analyseur, refactoriseur, testeur) travaille ensemble pour améliorer et maintenir du code source de manière autonome.",
    myRole: "J'ai développé les fonctions d'orchestration des agents, implémenté la logique de communication inter-agents et créé les pipelines d'analyse de code avec LangChain et LangGraph.",
    stack: ['Python', 'LangChain', 'LangGraph', 'Claude API', 'GPT-4'],
    impact: [
      "Prototype fonctionnel d'un système multi-agents autonome",
      'Analyse et refactorisation automatisée de 1000+ lignes de code',
      'Démonstration réussie lors de présentations académiques',
    ],
    github: 'https://github.com/AnesHannachi',
  },
};

export default function ProjectDetail({ slug }) {
  const project = projectData[slug];

  if (!project) {
    return (
      <div className="min-h-screen pt-32 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold text-[#e2e8f0] mb-4">Projet non trouvé</h1>
          <a href="/#projects" className="group btn-primary inline-flex items-center justify-center">
            <span className="inline-flex items-center justify-center w-0 opacity-0 -translate-x-2 group-hover:w-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 overflow-hidden">
              <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
            </span>
            <span>Retour aux projets</span>
            <span className="inline-flex items-center justify-center w-5 opacity-100 translate-x-0 group-hover:w-0 group-hover:opacity-0 group-hover:translate-x-2 transition-all duration-300 overflow-hidden">
              <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
            </span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Back Link */}
        <a href="/#projects" className="group inline-flex items-center text-[#3B82F6] hover:text-[#2563EB] transition-colors mb-8">
          <span className="inline-flex items-center justify-center w-0 opacity-0 -translate-x-2 group-hover:w-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 overflow-hidden">
            <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
          </span>
          <span>Retour aux projets</span>
          <span className="inline-flex items-center justify-center w-5 opacity-100 translate-x-0 group-hover:w-0 group-hover:opacity-0 group-hover:translate-x-2 transition-all duration-300 overflow-hidden">
            <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
          </span>
        </a>

        {/* Hero Section */}
        <div className="mb-12">
          <div className="w-full aspect-video bg-[#0f0f23] border-2 border-[#1e1e3f] rounded-xl flex items-center justify-center mb-8">
            <span className="text-center">
              <div className="text-5xl mb-3">🖼️</div>
              <p className="text-sm text-gray-500">[image projet large]</p>
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-[#e2e8f0] mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-3 py-1 rounded-full text-sm bg-white/5 border border-white/10 text-gray-300">{project.role}</span>
            <span className="px-3 py-1 rounded-full text-sm bg-blue-500/10 border border-blue-500/20 text-blue-400">{project.type}</span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-12">

            <section>
              <h2 className="text-2xl font-bold text-[#e2e8f0] mb-4 flex items-center gap-2">
                <span className="w-1 h-8 bg-[#3B82F6] rounded-full"></span>
                À propos du projet
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg">{project.fullDescription}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#e2e8f0] mb-4 flex items-center gap-2">
                <span className="w-1 h-8 bg-[#3B82F6] rounded-full"></span>
                Mon rôle
              </h2>
              <p className="text-gray-400 leading-relaxed text-lg">{project.myRole}</p>
            </section>

            {/* Stack with colored icons */}
            <section>
              <h2 className="text-2xl font-bold text-[#e2e8f0] mb-4 flex items-center gap-2">
                <span className="w-1 h-8 bg-[#3B82F6] rounded-full"></span>
                Stack technique
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.stack.map((tech) => (
                  <TechBadge key={tech} tech={tech} />
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#e2e8f0] mb-4 flex items-center gap-2">
                <span className="w-1 h-8 bg-[#3B82F6] rounded-full"></span>
                Résultats & impact
              </h2>
              <ul className="space-y-3">
                {project.impact.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-gray-400">
                    <span className="text-[#3B82F6] font-bold mt-1">✓</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-[#e2e8f0] mb-4 flex items-center gap-2">
                <span className="w-1 h-8 bg-[#3B82F6] rounded-full"></span>
                Aperçus
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-video bg-[#0f0f23] border border-[#1e1e3f] rounded-lg flex items-center justify-center">
                    <span className="text-center">
                      <div className="text-3xl mb-2">📸</div>
                      <p className="text-xs text-gray-600">[screenshot {i}]</p>
                    </span>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-1">
            <div className="glass rounded-lg p-6 sticky top-24 space-y-6">
              <div>
                <h3 className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wide">Lien du projet</h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group btn-primary w-full text-center justify-center inline-flex items-center"
                >
                  <span className="inline-flex items-center justify-center w-0 opacity-0 -translate-x-2 group-hover:w-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 overflow-hidden">
                    <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                  </span>
                  <span>Voir sur GitHub</span>
                  <span className="inline-flex items-center justify-center w-5 opacity-100 translate-x-0 group-hover:w-0 group-hover:opacity-0 group-hover:translate-x-2 transition-all duration-300 overflow-hidden">
                    <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
                  </span>
                </a>
              </div>

              <div className="pt-6 border-t border-[#1e1e3f]">
                <h3 className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wide">Type</h3>
                <p className="text-[#e2e8f0]">{project.type}</p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wide">Rôle</h3>
                <p className="text-[#e2e8f0] text-sm">{project.role}</p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-gray-500 mb-3 uppercase tracking-wide">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <TechBadge key={tech} tech={tech} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}