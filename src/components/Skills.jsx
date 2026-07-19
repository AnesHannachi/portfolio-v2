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
  { name: 'HTML/CSS',     icon: SiHtml5       },
  { name: 'JavaScript',   icon: SiJavascript  },
  { name: 'React.js',     icon: FaReact       },
  { name: 'Next.js',      icon: SiNextdotjs   },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Node.js',      icon: FaNodeJs      },
  { name: 'Express',      icon: SiExpress     },
  { name: 'MongoDB',      icon: SiMongodb     },
  { name: 'MySQL',        icon: SiMysql       },
  { name: 'Git',          icon: FaGitAlt      },
  { name: 'GitHub',       icon: FaGithub      },
  { name: 'Figma',        icon: SiFigma       },
  { name: 'Python',       icon: FaPython      },
  { name: 'LangChain',    icon: SiLangchain   },
  { name: 'LangGraph',    icon: FaDatabase    },
];

// Repeat 4 times for seamless infinite loop
const loopedSkills = [...allSkills, ...allSkills, ...allSkills, ...allSkills];

function SkillItem({ skill, index }) {
  const Icon = skill.icon;
  return (
    <div
      className="flex-shrink-0 flex flex-col items-center gap-3 mx-10"
      key={index}
    >
      <Icon style={{ width: '90px', height: '90px' }} className="text-gray-400" />
      <p className="text-xs font-medium text-gray-500 whitespace-nowrap">
        {skill.name}
      </p>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="py-4  overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16">
        <h2 className="text-4xl font-bold text-white">
          Mes compétences <span className="gradient-text">techniques</span>
        </h2>
      </div>

      {/* Single infinite scrolling row */}
      <div className="relative w-full overflow-hidden">
        {/* Fade left */}
        <div
          className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to right, #05050f 0%, transparent 100%)' }}
        />
        {/* Fade right */}
        <div
          className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none"
          style={{ background: 'linear-gradient(to left, #05050f 0%, transparent 100%)' }}
        />

        {/* Scrolling track */}
        <div className="flex animate-scroll-left" style={{ '--duration': '40s', width: 'max-content' }}>
          {loopedSkills.map((skill, i) => (
            <SkillItem key={i} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}