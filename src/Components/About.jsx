export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 px-6 md:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title">À Propos</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Left: Bio and Contact */}
          <div className="space-y-8">
            {/* Bio */}
            <div>
              <p className="text-lg leading-relaxed text-[#e2e8f0] mb-6">
                Étudiant en 1ère année cycle ingénieur à l&apos;ESI d&apos;Alger (2023–2028), passionné par le développement web et le design UI/UX. J&apos;ai une expérience pratique en front-end à travers des projets concrets, avec un intérêt marqué pour l&apos;écosystème JavaScript, l&apos;architecture système et les agents IA.
              </p>
            </div>

            {/* Languages */}
            <div>
              <h3 className="text-sm font-bold text-muted mb-4 uppercase tracking-wide">Langues</h3>
              <div className="flex flex-wrap gap-2">
                <span className="badge-accent">Arabe (natif)</span>
                <span className="badge-accent">Français (courant)</span>
                <span className="badge-accent">Anglais (intermédiaire)</span>
              </div>
            </div>

            {/* Quick Contact Links */}
            <div className="space-y-4">
              <a
                href="mailto:na_hannachi@esi.dz"
                className="flex items-center gap-3 text-[#e2e8f0] hover:text-[#3B82F6] transition-colors group"
              >
                <span className="w-6 h-6 rounded bg-[#1e2a4a] flex items-center justify-center text-sm group-hover:bg-[#3B82F6]/20">✉</span>
                <span>na_hannachi@esi.dz</span>
              </a>
              <a
                href="https://github.com/AnesHannachi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-[#e2e8f0] hover:text-[#3B82F6] transition-colors group"
              >
                <span className="w-6 h-6 rounded bg-[#1e2a4a] flex items-center justify-center text-sm group-hover:bg-[#3B82F6]/20">⊙</span>
                <span>github.com/AnesHannachi</span>
              </a>
              <a
                href="tel:+213675171141"
                className="flex items-center gap-3 text-[#e2e8f0] hover:text-[#3B82F6] transition-colors group"
              >
                <span className="w-6 h-6 rounded bg-[#1e2a4a] flex items-center justify-center text-sm group-hover:bg-[#3B82F6]/20">☎</span>
                <span>+213 67 517 1141</span>
              </a>
              <div className="flex items-center gap-3 text-[#e2e8f0]">
                <span className="w-6 h-6 rounded bg-[#1e2a4a] flex items-center justify-center text-sm">📍</span>
                <span>Bordj Bou Arréridj, Algérie</span>
              </div>
            </div>
          </div>

          {/* Right: Photo Placeholder */}
          <div className="flex items-center justify-center">
            <div className="w-full max-w-sm aspect-3/4 rounded-xl bg-[#0f0f23] border-2 border-[#1e1e3f] flex items-center justify-center">
              <span className="text-muted text-center">
                <div className="text-4xl mb-2">📷</div>
                <p className="text-sm">[image portfolio]</p>
                <p className="text-xs text-[#64748b] mt-1">300x400px</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
