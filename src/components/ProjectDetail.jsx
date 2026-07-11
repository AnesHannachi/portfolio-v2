'use client';

const projectData = {
  esiflow: {
    title: 'ESIFLOW',
    role: 'UI/UX Designer & Développeur Front-End',
    type: 'Projet d\'équipe',
    description: 'Plateforme web pour optimiser la gestion des équipements et des opérations de maintenance à l\'ESI.',
    fullDescription: 'ESIFLOW est une plateforme web développée pour centraliser et simplifier la gestion des équipements et des opérations de maintenance au sein de l\'école. Elle permet aux administrateurs de suivre l\'état des équipements, de planifier les maintenances et d\'améliorer les workflows organisationnels.',
    myRole: 'J\'ai conçu l\'interface utilisateur en mettant l\'accent sur l\'accessibilité et l\'expérience utilisateur, puis j\'ai développé les composants React et intégré la logique frontend pour garantir une expérience fluide.',
    stack: ['Next.js', 'React.js', 'Tailwind CSS', 'API REST'],
    impact: [
      'Interface intuitive réduisant le temps d\'apprentissage des utilisateurs',
      'Amélioration de 30% de l\'efficacité des workflows de maintenance',
      'Tableau de bord en temps réel pour le suivi des équipements',
    ],
    github: 'https://github.com/AnesHannachi',
  },
  'esi-grade': {
    title: 'ESI GRADE',
    role: 'Développeur Full-Stack (solo)',
    type: 'Projet personnel',
    description: 'Plateforme permettant aux étudiants ESI de calculer leurs moyennes et suivre leur progression via un dashboard avancé.',
    fullDescription: 'ESI GRADE est une application complète permettant aux étudiants de gérer leurs notes académiques. Elle offre un système de calcul automatisé des moyennes, un historique détaillé et des visualisations graphiques pour suivre la progression académique.',
    myRole: 'J\'ai développé l\'application de bout en bout, du backend (Node.js + Express) à la base de données (MongoDB) et le frontend (Next.js), implémentant des algorithmes de calcul complexes et une interface responsive.',
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
    fullDescription: 'Ensemble de chatbots intelligents développés pour automatiser la gestion des événements du Club Scientifique. Ces bots guident les participants, répondent aux questions fréquentes et collectent les inscriptions.',
    myRole: 'J\'ai conçu et développé les architectures des bots, implémenté la logique de conversation et créé des intégrations avec les systèmes d\'enregistrement.',
    stack: ['Python', 'JavaScript', 'Discord API', 'Telegram API'],
    impact: [
      'Automatisation complète du processus d\'inscription pour 3 événements',
      'Support utilisateur 24/7 via les bots',
      'Amélioration significative de l\'expérience participant',
    ],
    github: 'https://github.com/AnesHannachi',
  },
  'refactoring-swarm': {
    title: 'THE REFACTORING SWARM',
    role: 'Développeur des fonctions agents',
    type: 'Projet académique',
    description: 'Architecture multi-agents IA basée sur des LLMs capable de réparer et maintenir du code de manière autonome.',
    fullDescription: 'The Refactoring Swarm est un système innovative utilisant une architecture multi-agents IA. Chaque agent spécialisé (analyseur, refactoriseur, testeur) travaille ensemble pour améliorer et maintenir du code source de manière autonome.',
    myRole: 'J\'ai développé les fonctions d\'orchestration des agents, implémenté la logique de communication inter-agents et créé les pipelines d\'analyse de code avec LangChain et LangGraph.',
    stack: ['Python', 'LangChain', 'LangGraph', 'Claude API', 'GPT-4'],
    impact: [
      'Prototype fonctionnel d\'un système multi-agents autonome',
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
          <a href="/#projects" className="btn-primary">
            ← Retour aux projets
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Back Link */}
        <a href="/#projects" className="inline-flex items-center gap-2 text-[#3B82F6] hover:text-[#2563EB] transition-colors mb-8">
          ← Retour aux projets
        </a>

        {/* Hero Section */}
        <div className="mb-12">
          {/* Image Placeholder */}
          <div className="w-full aspect-video bg-[#0f0f23] border-2 border-[#1e1e3f] rounded-xl flex items-center justify-center mb-8">
            <span className="text-muted text-center">
              <div className="text-5xl mb-3">🖼️</div>
              <p className="text-sm">[image projet large]</p>
            </span>
          </div>

          {/* Title and Badges */}
          <h1 className="text-5xl md:text-6xl font-bold text-gradient mb-4">{project.title}</h1>
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="badge-role">{project.role}</span>
            <span className="badge-role">{project.type}</span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="md:col-span-2 space-y-12">
            {/* À propos du projet */}
            <section>
              <h2 className="text-2xl font-bold text-[#e2e8f0] mb-4 flex items-center gap-2">
                <span className="w-1 h-8 bg-[#3B82F6]"></span>
                À propos du projet
              </h2>
              <p className="text-muted leading-relaxed text-lg">{project.fullDescription}</p>
            </section>

            {/* Mon rôle */}
            <section>
              <h2 className="text-2xl font-bold text-[#e2e8f0] mb-4 flex items-center gap-2">
                <span className="w-1 h-8 bg-[#3B82F6]"></span>
                Mon rôle
              </h2>
              <p className="text-muted leading-relaxed text-lg">{project.myRole}</p>
            </section>

            {/* Stack Tech */}
            <section>
              <h2 className="text-2xl font-bold text-[#e2e8f0] mb-4 flex items-center gap-2">
                <span className="w-1 h-8 bg-[#3B82F6]"></span>
                Stack technique
              </h2>
              <div className="flex flex-wrap gap-3">
                {project.stack.map((tech) => (
                  <span key={tech} className="badge-accent">
                    {tech}
                  </span>
                ))}
              </div>
            </section>

            {/* Résultats & Impact */}
            <section>
              <h2 className="text-2xl font-bold text-[#e2e8f0] mb-4 flex items-center gap-2">
                <span className="w-1 h-8 bg-[#3B82F6]"></span>
                Résultats & impact
              </h2>
              <ul className="space-y-3">
                {project.impact.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted">
                    <span className="text-[#3B82F6] font-bold mt-1">✓</span>
                    <span className="leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Screenshots */}
            <section>
              <h2 className="text-2xl font-bold text-[#e2e8f0] mb-4 flex items-center gap-2">
                <span className="w-1 h-8 bg-[#3B82F6]"></span>
                Aperçus
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="aspect-video bg-[#0f0f23] border-2 border-[#1e1e3f] rounded-lg flex items-center justify-center">
                    <span className="text-muted text-center">
                      <div className="text-3xl mb-2">📸</div>
                      <p className="text-xs">[screenshot {i}]</p>
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
                <h3 className="text-sm font-bold text-muted mb-3 uppercase tracking-wide">Lien du projet</h3>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-full text-center justify-center"
                >
                  Voir sur GitHub →
                </a>
              </div>

              <div className="pt-6 border-t border-[#1e1e3f]">
                <h3 className="text-sm font-bold text-muted mb-3 uppercase tracking-wide">Type</h3>
                <p className="text-[#e2e8f0]">{project.type}</p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-muted mb-3 uppercase tracking-wide">Rôle</h3>
                <p className="text-[#e2e8f0] text-sm">{project.role}</p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-muted mb-3 uppercase tracking-wide">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.stack.slice(0, 4).map((tech) => (
                    <span key={tech} className="badge-accent text-xs">
                      {tech}
                    </span>
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
