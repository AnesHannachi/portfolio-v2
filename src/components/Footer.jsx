export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-900 py-8 px-6 bg-[#05050f]">
      <div className="max-w-7xl mx-auto text-center text-gray-400">
        <p>© {currentYear} Anes Hannachi</p>
        <a href="https://github.com/AnesHannachi" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 transition-colors">
          GitHub ↗
        </a>
      </div>
    </footer>
  );
}
