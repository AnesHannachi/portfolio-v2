import { ArrowUpRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-[#05050f]">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-16">À Propos</h2>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
          {/* Card 1: Main Bio & Languages (spans 2 cols) */}
          <div className="md:col-span-2 glass rounded-2xl p-8 flex flex-col md:flex-row gap-8 items-center md:items-start">
            {/* Photo */}
            <div className="w-full max-w-[200px] aspect-3/4 rounded-xl bg-[#0f0f23] border-2 border-[#1e1e3f] flex items-center justify-center shrink-0">
              <span className="text-muted text-center">
                <div className="text-4xl mb-2">📷</div>
                <p className="text-sm">[image portfolio]</p>
                <p className="text-xs text-[#64748b] mt-1">300x400px</p>
              </span>
            </div>
            {/* Bio text and Languages */}
            <div className="flex-1 space-y-6">
              <p className="text-lg leading-relaxed text-[#e2e8f0]">
                Étudiant en 1ère année cycle ingénieur à l&apos;ESI d&apos;Alger (2023–2028), passionné par le développement web et le design UI/UX. J&apos;ai une expérience pratique en front-end à travers des projets concrets, avec un intérêt marqué pour l&apos;écosystème JavaScript, l&apos;architecture système et les agents IA.
              </p>
              <div>
                <h4 className="text-xs font-bold text-gray-400 mb-2 uppercase tracking-wide">Langues</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="badge-accent">Arabe (natif)</span>
                  <span className="badge-accent">Français (courant)</span>
                  <span className="badge-accent">Anglais (intermédiaire)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Contact Info & Availability (spans 1 col) */}
          <div className="glass rounded-2xl p-6 flex flex-col justify-between space-y-6">
            <div>
              <p className="text-sm text-gray-400 mb-4 font-semibold uppercase tracking-wide">Contact</p>
              <div className="space-y-3">
                <a
                  href="mailto:na_hannachi@esi.dz"
                  className="flex items-center gap-3 text-sm text-[#e2e8f0] hover:text-[#3B82F6] transition-colors group"
                >
                  <span className="w-6 h-6 rounded bg-[#1e2a4a] flex items-center justify-center text-xs group-hover:bg-[#3B82F6]/20">✉</span>
                  <span className="truncate">na_hannachi@esi.dz</span>
                </a>
                <a
                  href="https://github.com/AnesHannachi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-[#e2e8f0] hover:text-[#3B82F6] transition-colors group"
                >
                  <span className="w-6 h-6 rounded bg-[#1e2a4a] flex items-center justify-center text-xs group-hover:bg-[#3B82F6]/20">⊙</span>
                  <span className="truncate">github.com/AnesHannachi</span>
                </a>
                <a
                  href="tel:+213675171141"
                  className="flex items-center gap-3 text-sm text-[#e2e8f0] hover:text-[#3B82F6] transition-colors group"
                >
                  <span className="w-6 h-6 rounded bg-[#1e2a4a] flex items-center justify-center text-xs group-hover:bg-[#3B82F6]/20">☎</span>
                  <span>+213 67 517 1141</span>
                </a>
                <div className="flex items-center gap-3 text-sm text-[#e2e8f0]">
                  <span className="w-6 h-6 rounded bg-[#1e2a4a] flex items-center justify-center text-xs">📍</span>
                  <span>Bordj Bou Arréridj, Algérie</span>
                </div>
              </div>
            </div>
            <div className="border-t border-[#1e1e3f] pt-4">
              <p className="text-xs text-gray-400 mb-1">Disponibilité</p>
              <p className="text-sm font-semibold">Disponible pour des projets à distance</p>
            </div>
          </div>

          {/* Card 3: Tech stack card */}
          <div className="glass rounded-2xl p-6">
            <p className="text-sm text-gray-400 mb-4 font-semibold uppercase tracking-wide">Ma stack technique</p>
            <div className="flex flex-wrap gap-2">
              {['Next.js', 'React', 'Tailwind', 'Node.js', 'Python', 'Figma'].map((tech) => (
                <span key={tech} className="tag">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Card 4: Code snippet card */}
          <div className="glass rounded-2xl p-6">
            <p className="text-sm text-gray-400 mb-4 font-semibold uppercase tracking-wide">Tech enthusiast</p>
            <code className="text-xs text-blue-400 whitespace-pre-wrap">
              const anes = {'{'}<br />
              {'  '}role: "dev",<br />
              {'  '}passion: "UI/UX"<br />
              {'}'}
            </code>
          </div>

          {/* Card 5: Education & role card */}
          <div className="md:col-span-2 glass rounded-2xl p-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <p className="text-sm text-gray-400 mb-1">Actuellement</p>
                <p className="text-lg font-bold">Étudiant 1CS à l&apos;ESI Alger</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Aussi</p>
                <p className="text-base font-semibold text-blue-400">Vice-Président du Club Scientifique de l&apos;ESI</p>
                <p className="text-xs text-gray-400 mt-2">Former HR Manager. Organisation d&apos;événements: HackIn, DataHack, InnovDigitale, CCC</p>
              </div>
            </div>
          </div>

          {/* Card 6: CTA card */}
          <div className="glass rounded-2xl p-6 flex flex-col justify-center items-center text-center">
            <p className="text-sm text-gray-400 mb-4">Vous voulez démarrer<br />un projet ensemble ?</p>
            <a href="#contact" className="group btn-primary text-sm inline-flex items-center justify-center">
              <span className="inline-flex items-center justify-center w-0 opacity-0 -translate-x-2 group-hover:w-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 overflow-hidden">
                <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
              </span>
              <span>Contactez-moi</span>
              <span className="inline-flex items-center justify-center w-5 opacity-100 translate-x-0 group-hover:w-0 group-hover:opacity-0 group-hover:translate-x-2 transition-all duration-300 overflow-hidden">
                <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
