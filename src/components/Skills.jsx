'use client';

import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaDatabase,
} from 'react-icons/fa';
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiMysql,
  SiExpress,
  SiLangchain,
  SiFigma,
  SiJavascript,
  SiHtml5,
} from 'react-icons/si';

const allSkills = [
  { name: 'HTML/CSS',     icon: SiHtml5,       category: 'Frontend'         },
  { name: 'JavaScript',   icon: SiJavascript,  category: 'Frontend'         },
  { name: 'React.js',     icon: FaReact,       category: 'Frontend'         },
  { name: 'Next.js',      icon: SiNextdotjs,   category: 'Frontend'         },
  { name: 'Tailwind CSS', icon: SiTailwindcss, category: 'Frontend'         },
  { name: 'Node.js',      icon: FaNodeJs,      category: 'Backend'          },
  { name: 'Express',      icon: SiExpress,     category: 'Backend'          },
  { name: 'MongoDB',      icon: SiMongodb,     category: 'Bases de données' },
  { name: 'MySQL',        icon: SiMysql,       category: 'Bases de données' },
  { name: 'Git',          icon: FaGitAlt,      category: 'Outils'           },
  { name: 'GitHub',       icon: FaGithub,      category: 'Outils'           },
  { name: 'Figma',        icon: SiFigma,       category: 'Outils'           },
  { name: 'Python',       icon: FaPython,      category: 'IA & Autres'      },
  { name: 'LangChain',    icon: SiLangchain,   category: 'IA & Autres'      },
  { name: 'LangGraph',    icon: FaDatabase,    category: 'IA & Autres'      },
];

const row1 = allSkills.slice(0);
// const row2 = allSkills.slice(7);

function SkillItem({ skill }) {
  const Icon = skill.icon;
  return (
    <div className="flex-shrink-0 flex flex-col items-center gap-2 mx-10">
      <Icon style={{ width: '90px', height: '90px' }} className="text-gray-400" />
      <p className="text-xs font-medium text-gray-500 whitespace-nowrap">
        {skill.name}
      </p>
    </div>
  );
}

function ScrollRow({ skills, direction = 'left', duration = 30 }) {
  const doubled = [...skills, ...skills];
  const animClass = direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right';

  return (
    <div className="overflow-hidden relative w-full">
      <div
        className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #05050f, transparent)' }}
      />
      <div
        className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to left, #05050f, transparent)' }}
      />
      <div
        className={`flex ${animClass}`}
        style={{ '--duration': `${duration}s` }}
      >
        {doubled.map((skill, i) => (
          <SkillItem key={`${skill.name}-${i}`} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h2 className="text-4xl font-bold text-white">
          Mes compétences <span className="gradient-text">techniques</span>
        </h2>
      </div>

      <div className="flex flex-col gap-15 mt-20">
        <ScrollRow skills={row1} direction="left"  duration={25} />
        {/* <ScrollRow skills={row2} direction="right" duration={20} /> */}
      </div>
    </section>
  );
}