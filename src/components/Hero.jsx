'use client';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-6 py-20 overflow-hidden bg-[#05050f]">
      {/* Ambient light blobs */}
      <div
        className="absolute top-0 -left-40 w-96 h-96 rounded-full pointer-events-none opacity-35"
        style={{
          background: 'radial-gradient(circle, #3b0dab 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute top-20 -right-32 w-80 h-80 rounded-full pointer-events-none opacity-25"
        style={{
          background: 'radial-gradient(circle, #1a3adb 0%, transparent 60%)',
        }}
      />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-64 h-64 rounded-full pointer-events-none opacity-20"
        style={{
          background: 'radial-gradient(circle, #6b21a8 0%, transparent 60%)',
        }}
      />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text */}
          <div>
            {/* Label */}
            <p className="text-sm font-mono text-gray-400 mb-6">
              // Développeur Web basé en Algérie
            </p>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-6xl leading-tight mb-8">
              <span className="gradient-text ">
                Transformer les idées en<br />
                Expériences Utilisateur.
              </span>
            </h1>

            {/* Subtext */}
            <p className="text-lg text-gray-300 mb-10 leading-relaxed max-w-md">
              Salut, je suis Anes Hannachi, étudiant ingénieur à l&apos;ESI et développeur web passionné par le front-end et l&apos;UI/UX.
            </p>

            {/* CTA Button */}
            <a href="#projects" className="btn-primary inline-block ">
              Voir mes projets →
            </a>
          </div>

          {/* Right: Photo Placeholder */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Glow ring */}
              <div
                className="absolute inset-0 rounded-full pointer-events-none"
                style={{
                  background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, transparent 70%)',
                  width: '160px',
                  height: '160px',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: -1,
                }}
              />
              {/* Photo card */}
              <div className="w-40 h-40 rounded-full border-2 border-blue-500 bg-gray-900 flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <div className="text-3xl mb-2">📷</div>
                  <p className="text-xs">[photo]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
