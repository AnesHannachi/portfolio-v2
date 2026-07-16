const timelineEvents = [
  {
    date: '2024–présent',
    title: 'Vice-Président du Club Scientifique de l\'ESI (CSE)',
    description: 'Anciennement HR Manager. Organisation et coordination d\'événements : HackIn, DataHack, InnovDigitale, CCC.',
  },
  {
    date: '2023–2028',
    title: 'Cycle Ingénieur Informatique',
    description: 'École Nationale Supérieure d\'Informatique (ESI), Alger. 1ère année cycle ingénieur en cours.',
  },
  {
    date: '2023',
    title: 'Baccalauréat',
    description: 'Lycée Smain Haroune, Koléa. Mention: Très Bien.',
  },
];

export default function Parcours() {
  return (
    <section id="parcours" className="py-24 px-6 bg-[#05050f]">
      <div className="max-w-4xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-16">Mon parcours</h2>

        {/* Vertical Timeline */}
        <div className="relative">
          {/* Glowing timeline line */}
          <div
            className="absolute left-3 md:left-1/2 top-0 bottom-0 w-1 md:transform md:-translate-x-1/2"
            style={{
              background: 'linear-gradient(to bottom, rgba(59, 130, 246, 0.8) 0%, rgba(59, 130, 246, 0.1) 100%)',
            }}
          />

          {/* Timeline Events */}
          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <div key={index} className="relative ml-16 md:ml-0">
                {/* Timeline Dot */}
                <div
                  className="absolute -left-11 md:left-1/2 md:transform md:-translate-x-1/2 top-2 w-6 h-6 rounded-full border-3 border-blue-500 bg-[#05050f]"
                  style={{
                    boxShadow: '0 0 20px rgba(59, 130, 246, 0.5)',
                  }}
                />

                {/* Content Card */}
                <div className={`glass rounded-xl p-8 md:w-[calc(50%-2rem)] ${index % 2 === 1 ? 'md:ml-auto' : ''}`}>
                  <p className="text-sm font-mono text-blue-400 mb-2 font-bold">{event.date}</p>
                  <h3 className="text-xl font-bold mb-3">{event.title}</h3>
                  <p className="text-gray-400 leading-relaxed">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
