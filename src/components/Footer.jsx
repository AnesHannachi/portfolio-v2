import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-900 py-8 px-6 bg-[#05050f]">
      <div className="max-w-7xl mx-auto text-center text-gray-400">
        <p>© {currentYear} Anes Hannachi</p>
        <a href="https://github.com/AnesHannachi" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300">
          <span className="inline-flex items-center justify-center w-0 opacity-0 -translate-x-2 group-hover:w-5 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 overflow-hidden">
            <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
          </span>
          <span>GitHub</span>
          <span className="inline-flex items-center justify-center w-5 opacity-100 translate-x-0 group-hover:w-0 group-hover:opacity-0 group-hover:translate-x-2 transition-all duration-300 overflow-hidden">
            <ArrowUpRight className="w-4 h-4" strokeWidth={2.5} />
          </span>
        </a>
      </div>
    </footer>
  );
}
