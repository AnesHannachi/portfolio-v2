const skillCategories = [
  {
    category: 'Frontend',
    skills: ['HTML/CSS', 'JavaScript', 'React.js', 'Next.js', 'Tailwind CSS'],
  },
  {
    category: 'Backend',
    skills: ['Node.js', 'Express'],
  },
  {
    category: 'Bases de données',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    category: 'Outils',
    skills: ['Git', 'GitHub', 'Figma'],
  },
  {
    category: 'IA & Autres',
    skills: ['Python', 'LangChain', 'LangGraph'],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl font-bold mb-16">Mes compétences techniques</h2>

        {/* Creative grid of skill cards */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {skillCategories.flatMap((group) =>
            group.skills.map((skill) => (
              <div
                key={skill}
                className="glass rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-blue-500 transition-colors group cursor-pointer"
              >
                {/* Icon Placeholder with gradient bg */}
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-lg group-hover:scale-110 transition-transform"
                  style={{
                    background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.3) 0%, rgba(139, 92, 246, 0.2) 100%)',
                  }}
                >
                  ◆
                </div>
                {/* Skill Name */}
                <p className="text-sm font-semibold text-center leading-tight">{skill}</p>
                {/* Category badge */}
                <p className="text-xs text-gray-500">
                  {skillCategories.find((g) => g.skills.includes(skill))?.category}
                </p>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}
