import { ArrowUpRight } from 'lucide-react';

export default function BentoAbout() {
  return (
    <section className="py-24 px-6 bg-[#05050f]">
      <div className="max-w-7xl mx-auto">
        {/* Grid of asymmetric cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-max">
          {/* Card 1: Large bio card (spans 2 cols) */}
          <div className="md:col-span-2 glass rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Je priorise la collaboration et la créativité</h3>
            <p className="text-gray-400 text-base leading-relaxed">
              Étudiant en 1ère année cycle ingénieur à l&apos;ESI d&apos;Alger (2023–2028), passionné par le développement web et le design UI/UX. J&apos;ai une expérience pratique en front-end à travers des projets concrets, avec un intérêt marqué pour l&apos;écosystème JavaScript, l&apos;architecture système et les agents IA.
            </p>
          </div>

          {/* Card 2: Small timezone/availability card */}
          <div className="glass rounded-2xl p-6 flex flex-col justify-center">
            <p className="text-sm text-gray-400 mb-2">Disponibilité</p>
            <p className="text-lg font-bold">Disponible pour des projets à distance</p>
          </div>

          {/* Card 3: Tech stack card */}
          <div className="glass rounded-2xl p-6">
            <p className="text-sm text-gray-400 mb-4 font-semibold">Ma stack technique</p>
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
            <p className="text-sm text-gray-400 mb-4">Tech enthusiast avec une passion pour le développement</p>
            <code className="text-xs text-blue-400 whitespace-pre-wrap">
              const anes = {'{'}<br/>
              {'  '}role: "dev",<br/>
              {'  '}passion: "UI/UX"<br/>
              {'}'}
            </code>
          </div>

          {/* Card 5: Education & role card */}
          <div className="md:col-span-2 glass rounded-2xl p-8">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-gray-400 mb-1">Actuellement</p>
                <p className="text-xl font-bold">Étudiant 1CS à l&apos;ESI Alger</p>
              </div>
              <div>
                <p className="text-sm text-gray-400 mb-1">Aussi</p>
                <p className="text-lg font-semibold text-blue-400">Vice-Président du Club Scientifique de l&apos;ESI</p>
                <p className="text-sm text-gray-400 mt-2">Former HR Manager. Organisation d&apos;événements: HackIn, DataHack, InnovDigitale, CCC</p>
              </div>
            </div>
          </div>

          {/* Card 6: CTA card */}
          <div className="glass rounded-2xl p-6 flex flex-col justify-center items-center text-center">
            <p className="text-sm text-gray-400 mb-4">Vous voulez démarrer<br/>un projet ensemble ?</p>
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
