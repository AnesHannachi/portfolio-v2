'use client';

import { useState, useEffect } from 'react';
import { ArrowUpRight, Mail, X, Send, CheckCircle } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';

export default function ContactModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [focused, setFocused] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => setVisible(true), 10);
    } else {
      setVisible(false);
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    if (isOpen) window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.subject && formData.message) {
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => { setSubmitted(false); onClose(); }, 2500);
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40 transition-opacity duration-300"
        style={{ backgroundColor: visible ? 'rgba(0,0,0,0.85)' : 'rgba(0,0,0,0)' }}
        onClick={onClose}
      />

      {/* Modal wrapper */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        <div
          className="relative w-full transition-all duration-300"
          style={{
            maxWidth: '900px',
            opacity: visible ? 1 : 0,
            transform: visible ? 'translateY(0) scale(1)' : 'translateY(24px) scale(0.97)',
          }}
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute -top-4 -right-4 z-10 w-9 h-9 rounded-full bg-[#1a1a2e] border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#3B82F6] hover:border-[#3B82F6] transition-all duration-200 shadow-lg"
            aria-label="Fermer"
          >
            <X className="w-4 h-4" />
          </button>

          {/* ── DESKTOP: layout horizontal ── */}
          <div
            className="hidden md:flex rounded-2xl overflow-hidden shadow-2xl border border-white/8"
            style={{ background: '#0d0d1a' }}
          >
            {/* Left panel — info */}
            <div
              className="w-[42%] flex-shrink-0 p-10 flex flex-col justify-between relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #0f0f2e 0%, #1a1040 50%, #0d0d1a 100%)' }}
            >
              {/* Ambient glows */}
              <div className="absolute top-0 left-0 w-64 h-64 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)' }} />
              <div className="absolute bottom-0 right-0 w-48 h-48 rounded-full pointer-events-none"
                style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 70%)' }} />

              <div className="relative z-10">
                {/* Available badge */}
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-8">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                  Disponible
                </span>

                <h2 className="text-3xl font-bold text-white mb-3 leading-tight">
                  Travaillons<br />
                  <span className="gradient-text">ensemble</span>
                </h2>
                <p className="text-gray-400 text-sm leading-relaxed mb-10">
                  Disponible pour des collaborations, projets freelance ou opportunités de stage. N'hésitez pas à me contacter.
                </p>

                {/* Quick links */}
                <div className="space-y-3">
                  <p className="text-xs text-gray-600 uppercase tracking-widest font-semibold mb-4">Contact direct</p>
                  <a href="mailto:na_hannachi@esi.dz" className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all duration-200">
                      <Mail className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors">na_hannachi@esi.dz</span>
                  </a>
                  <a href="https://github.com/AnesHannachi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                    <div className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/20 group-hover:border-blue-500/30 transition-all duration-200">
                      <FaGithub className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors" />
                    </div>
                    <span className="text-sm text-gray-400 group-hover:text-white transition-colors">github.com/AnesHannachi</span>
                  </a>
                </div>
              </div>

              {/* Bottom tag */}
              <div className="relative z-10 mt-8">
                <div className="inline-flex items-center gap-2 text-xs text-gray-600">
                  <span className="w-8 h-px bg-gray-700" />
                  ESI Alger — 1CS
                </div>
              </div>
            </div>

            {/* Right panel — form */}
            <div className="flex-1 p-10" style={{ background: '#0d0d1a' }}>
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 text-blue-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Message envoyé !</h3>
                  <p className="text-gray-400 text-sm">Merci, je vous répondrai dans les plus brefs délais.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5 h-full flex flex-col justify-center">
                  <div className="grid grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">Nom complet</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocused('name')}
                        onBlur={() => setFocused(null)}
                        className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-gray-600 outline-none transition-all duration-200"
                        style={{
                          background: '#12122a',
                          border: focused === 'name' ? '1px solid #3B82F6' : '1px solid rgba(255,255,255,0.08)',
                          boxShadow: focused === 'name' ? '0 0 0 3px rgba(59,130,246,0.1)' : 'none',
                        }}
                        placeholder="Votre nom"
                        required
                      />
                    </div>
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocused('email')}
                        onBlur={() => setFocused(null)}
                        className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-gray-600 outline-none transition-all duration-200"
                        style={{
                          background: '#12122a',
                          border: focused === 'email' ? '1px solid #3B82F6' : '1px solid rgba(255,255,255,0.08)',
                          boxShadow: focused === 'email' ? '0 0 0 3px rgba(59,130,246,0.1)' : 'none',
                        }}
                        placeholder="votre@email.com"
                        required
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">Sujet</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      onFocus={() => setFocused('subject')}
                      onBlur={() => setFocused(null)}
                      className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-gray-600 outline-none transition-all duration-200"
                      style={{
                        background: '#12122a',
                        border: focused === 'subject' ? '1px solid #3B82F6' : '1px solid rgba(255,255,255,0.08)',
                        boxShadow: focused === 'subject' ? '0 0 0 3px rgba(59,130,246,0.1)' : 'none',
                      }}
                      placeholder="Sujet de votre message"
                      required
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      rows="5"
                      className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-gray-600 outline-none transition-all duration-200 resize-none"
                      style={{
                        background: '#12122a',
                        border: focused === 'message' ? '1px solid #3B82F6' : '1px solid rgba(255,255,255,0.08)',
                        boxShadow: focused === 'message' ? '0 0 0 3px rgba(59,130,246,0.1)' : 'none',
                      }}
                      placeholder="Votre message..."
                      required
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="group w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold text-sm text-white transition-all duration-200 hover:opacity-90 hover:shadow-lg active:scale-[0.98]"
                    style={{
                      background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
                      boxShadow: '0 4px 20px rgba(59,130,246,0.25)',
                    }}
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    Envoyer le message
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* ── MOBILE: layout vertical ── */}
          <div
            className="md:hidden rounded-2xl overflow-hidden shadow-2xl border border-white/8 max-h-[90vh] overflow-y-auto"
            style={{ background: '#0d0d1a' }}
          >
            {/* Header */}
            <div
              className="p-6 border-b border-white/8"
              style={{ background: 'linear-gradient(135deg, #0f0f2e 0%, #1a1040 100%)' }}
            >
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 border border-blue-500/20 text-blue-400 mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                Disponible
              </span>
              <h2 className="text-2xl font-bold text-white mb-1">
                Travaillons <span className="gradient-text">ensemble</span>
              </h2>
              <p className="text-gray-400 text-sm">Disponible pour collaborations, projets ou stages.</p>
            </div>

            {/* Form */}
            <div className="p-6">
              {submitted ? (
                <div className="flex flex-col items-center text-center gap-4 py-8">
                  <div className="w-14 h-14 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <CheckCircle className="w-7 h-7 text-blue-400" />
                  </div>
                  <h3 className="text-lg font-bold text-white">Message envoyé !</h3>
                  <p className="text-gray-400 text-sm">Merci, je vous répondrai rapidement.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  {[
                    { name: 'name',    label: 'Nom complet', type: 'text',  placeholder: 'Votre nom'        },
                    { name: 'email',   label: 'Email',       type: 'email', placeholder: 'votre@email.com'  },
                    { name: 'subject', label: 'Sujet',       type: 'text',  placeholder: 'Sujet du message' },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">{field.label}</label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name]}
                        onChange={handleChange}
                        onFocus={() => setFocused(field.name)}
                        onBlur={() => setFocused(null)}
                        className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-gray-600 outline-none transition-all duration-200"
                        style={{
                          background: '#12122a',
                          border: focused === field.name ? '1px solid #3B82F6' : '1px solid rgba(255,255,255,0.08)',
                          boxShadow: focused === field.name ? '0 0 0 3px rgba(59,130,246,0.1)' : 'none',
                        }}
                        placeholder={field.placeholder}
                        required
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocused('message')}
                      onBlur={() => setFocused(null)}
                      rows="4"
                      className="w-full px-4 py-3 rounded-lg text-sm text-white placeholder-gray-600 outline-none transition-all duration-200 resize-none"
                      style={{
                        background: '#12122a',
                        border: focused === 'message' ? '1px solid #3B82F6' : '1px solid rgba(255,255,255,0.08)',
                        boxShadow: focused === 'message' ? '0 0 0 3px rgba(59,130,246,0.1)' : 'none',
                      }}
                      placeholder="Votre message..."
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="group w-full flex items-center justify-center gap-2 py-3 px-6 rounded-lg font-semibold text-sm text-white transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                    style={{
                      background: 'linear-gradient(135deg, #3B82F6 0%, #8B5CF6 100%)',
                      boxShadow: '0 4px 20px rgba(59,130,246,0.25)',
                    }}
                  >
                    <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    Envoyer
                  </button>
                </form>
              )}

              {/* Quick links mobile */}
              <div className="mt-6 pt-6 border-t border-white/8 space-y-3">
                <p className="text-xs text-gray-600 uppercase tracking-widest font-semibold">Contact direct</p>
                <a href="mailto:na_hannachi@esi.dz" className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-all">
                    <Mail className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors">na_hannachi@esi.dz</span>
                </a>
                <a href="https://github.com/AnesHannachi" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 group">
                  <div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-all">
                    <FaGithub className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                  </div>
                  <span className="text-sm text-gray-400 group-hover:text-white transition-colors">github.com/AnesHannachi</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}