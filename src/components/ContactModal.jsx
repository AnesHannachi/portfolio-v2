'use client';

import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.subject && formData.message) {
      console.log('Form submitted:', formData);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => {
        setSubmitted(false);
        onClose();
      }, 2000);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div className="glass rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-8">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 text-gray-400 hover:text-blue-400 transition-colors"
            aria-label="Fermer"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold mb-2">Travaillons ensemble 🤝</h2>
            <p className="text-gray-400">Disponible pour collaborations, projets ou stages.</p>
          </div>

          {/* Success Message */}
          {submitted && (
            <div className="mb-6 p-4 bg-[#3B82F6]/10 border border-[#3B82F6] rounded-lg text-[#3B82F6] animate-fade-in-up">
              ✓ Merci! Votre message a été envoyé.
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5 mb-6">
            <div>
              <label htmlFor="name" className="block text-sm font-semibold text-[#e2e8f0] mb-2">
                Nom complet
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#0f0f23] border border-[#1e1e3f] rounded-lg text-[#e2e8f0] placeholder-[#64748b] focus:border-[#3B82F6] focus:outline-none transition-colors"
                placeholder="Votre nom"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-[#e2e8f0] mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#0f0f23] border border-[#1e1e3f] rounded-lg text-[#e2e8f0] placeholder-[#64748b] focus:border-[#3B82F6] focus:outline-none transition-colors"
                placeholder="votre@email.com"
                required
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-semibold text-[#e2e8f0] mb-2">
                Sujet
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-[#0f0f23] border border-[#1e1e3f] rounded-lg text-[#e2e8f0] placeholder-[#64748b] focus:border-[#3B82F6] focus:outline-none transition-colors"
                placeholder="Sujet de votre message"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-[#e2e8f0] mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-3 bg-[#0f0f23] border border-[#1e1e3f] rounded-lg text-[#e2e8f0] placeholder-[#64748b] focus:border-[#3B82F6] focus:outline-none transition-colors resize-none"
                placeholder="Votre message..."
                required
              />
            </div>

            <button type="submit" className="group w-full btn-primary flex items-center justify-center">
              <span className="inline-flex items-center justify-center w-0 opacity-0 -translate-x-2 group-hover:w-6 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 overflow-hidden">
                <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
              </span>
              <span>Envoyer</span>
              <span className="inline-flex items-center justify-center w-6 opacity-100 translate-x-0 group-hover:w-0 group-hover:opacity-0 group-hover:translate-x-2 transition-all duration-300 overflow-hidden">
                <ArrowUpRight className="w-5 h-5" strokeWidth={2.5} />
              </span>
            </button>
          </form>

          {/* Quick Links */}
          <div className="space-y-3 pt-6 border-t border-[#1e1e3f]">
            <p className="text-xs text-muted uppercase tracking-wide font-semibold">Ou contactez-moi directement:</p>
            <a
              href="mailto:na_hannachi@esi.dz"
              className="flex items-center gap-3 text-[#e2e8f0] hover:text-[#3B82F6] transition-colors group"
            >
              <span className="w-6 h-6 rounded bg-[#1e2a4a] flex items-center justify-center text-sm group-hover:bg-[#3B82F6]/20">✉</span>
              <span className="text-sm">na_hannachi@esi.dz</span>
            </a>
            <a
              href="https://github.com/AnesHannachi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-[#e2e8f0] hover:text-[#3B82F6] transition-colors group"
            >
              <span className="w-6 h-6 rounded bg-[#1e2a4a] flex items-center justify-center text-sm group-hover:bg-[#3B82F6]/20">⊙</span>
              <span className="text-sm">github.com/AnesHannachi</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
