'use client';

import { Github, Linkedin, Mail, MapPin, Phone, Send, FileDown, ArrowUpRight } from 'lucide-react';
import { useState } from 'react';

const EMAIL = 'abdullahzadeh.darya@gmail.com';
const LINKEDIN = 'https://www.linkedin.com/in/darya-abdullahzadeh/';
const GITHUB = 'https://github.com/darya-abdullahzadeh';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Message received! Thank you for reaching out. This is a demo form.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="rounded-[1.75rem] border border-[#ecd9f2] bg-[#fff7fb] px-6 py-16 shadow-[0_22px_50px_-42px_rgba(161,118,192,0.5)]"
    >
      <div className="container relative mx-auto max-w-6xl">
        <div className="pointer-events-none absolute -left-8 top-16 h-28 w-28 rounded-full bg-[#f0dfff] blur-2xl" />
        <div className="pointer-events-none absolute -right-10 bottom-32 h-32 w-32 rounded-full bg-[#ffe3ef] blur-2xl" />

        <header className="mx-auto mb-14 max-w-2xl text-center">
          <p className="mb-3 text-sm uppercase tracking-[0.2em] text-[#a689bf]">Contact</p>
          <h2 className="mb-4 text-4xl text-[#4c3e60] md:text-5xl">Connect</h2>
          <p className="text-[#78678f]">
            For engineering discussions, technical collaboration, or project inquiries—this is the place to start a conversation.
          </p>
        </header>

        <p className="mx-auto mb-12 max-w-2xl text-center text-lg leading-relaxed text-[#65547d]">
          I&apos;m glad to dig into architecture, system behavior, and implementation—from data modeling and API design through typed clients, integrations, and how software holds up in production.
        </p>

        {/* Primary: direct email */}
        <div className="relative mb-10">
          <div className="pointer-events-none absolute inset-0 rounded-[1.35rem] bg-linear-to-br from-[#f9f2ff]/90 to-[#fff5fa]/80 shadow-[inset_0_1px_0_rgba(255,255,255,0.85)]" />
          <a
            href={`mailto:${EMAIL}`}
            className="group relative flex flex-col gap-4 rounded-[1.35rem] border border-[#e5d4ef] bg-white/80 p-8 shadow-[0_20px_48px_-36px_rgba(148,112,182,0.65)] backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:border-[#d4bee6] hover:bg-white hover:shadow-[0_28px_56px_-32px_rgba(148,112,182,0.55)] md:flex-row md:items-center md:justify-between md:p-10"
          >
            <div className="flex items-start gap-5">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-[#e8d6f4] bg-linear-to-br from-[#f5ebfc] to-[#eee4f8] shadow-[0_8px_24px_-16px_rgba(142,108,176,0.45)] transition-transform duration-300 group-hover:scale-[1.03]">
                <Mail className="h-7 w-7 text-[#8768ab]" strokeWidth={1.75} />
              </span>
              <div>
                <p className="mb-1 text-[11px] uppercase tracking-[0.18em] text-[#a088bd]">Best way to reach me</p>
                <p className="mb-2 font-serif text-2xl text-[#4d3f62] md:text-[1.65rem]">Email directly</p>
                <p className="max-w-xl text-sm leading-relaxed text-[#75648d]">
                  Brief context on the problem or collaboration helps—I read everything and reply thoughtfully when I can.
                </p>
              </div>
            </div>
            <div className="flex shrink-0 flex-col items-start gap-2 md:items-end">
              <span className="break-all text-right text-sm font-medium text-[#6b5789] underline-offset-4 transition-colors group-hover:text-[#7f63a6] group-hover:underline md:text-base">
                {EMAIL}
              </span>
              <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.12em] text-[#9f86ba] transition-transform duration-300 group-hover:translate-x-0.5">
                Open mail
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-px group-hover:translate-x-px" />
              </span>
            </div>
          </a>
        </div>

        {/* Secondary: editorial mix — not a uniform grid */}
        <div className="mb-12 grid gap-6 lg:grid-cols-12 lg:items-stretch">
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-[#eadcf4] bg-white/85 p-7 shadow-[0_16px_40px_-28px_rgba(154,116,188,0.55)] transition-all hover:-translate-y-0.5 hover:bg-[#fefbff] hover:shadow-[0_22px_44px_-26px_rgba(154,116,188,0.5)] lg:col-span-5"
          >
            <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-[#f3e8fb] opacity-80 blur-2xl transition-opacity group-hover:opacity-100" />
            <div className="relative flex h-full flex-col">
              <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#ebddf3] bg-[#fcf9ff] px-3 py-1">
                <Linkedin className="h-4 w-4 text-[#7b68a8]" strokeWidth={1.75} />
                <span className="text-[10px] uppercase tracking-[0.14em] text-[#8f78ae]">Professional</span>
              </div>
              <p className="mb-2 font-serif text-xl text-[#4e4063]">Experience & endorsements</p>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-[#6e5d84]">
                Formal history: titles, timelines, and peer validation—additional context alongside this site.
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-widest text-[#946fba] transition-colors group-hover:text-[#7f5599]">
                LinkedIn profile
                <ArrowUpRight className="h-3.5 w-3.5 opacity-70 transition-transform group-hover:translate-x-px group-hover:opacity-100" />
              </span>
            </div>
          </a>

          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-2xl border border-[#e2eaf6] bg-linear-to-b from-[#fafbff] to-white p-7 shadow-[0_16px_40px_-28px_rgba(118,142,188,0.45)] transition-all hover:-translate-y-0.5 hover:shadow-[0_22px_44px_-26px_rgba(118,142,188,0.42)] lg:col-span-4"
          >
            <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #6b5789 1px, transparent 0)', backgroundSize: '14px 14px' }} />
            <div className="relative flex h-full flex-col">
              <div className="mb-4 inline-flex w-fit items-center gap-2 rounded-full border border-[#dce4f2] bg-white/90 px-3 py-1">
                <Github className="h-4 w-4 text-[#5c6b8c]" strokeWidth={1.75} />
                <span className="text-[10px] uppercase tracking-[0.14em] text-[#7583a3]">Technical</span>
              </div>
              <p className="mb-2 font-serif text-xl text-[#40475c]">Code & commits</p>
              <p className="mb-6 flex-1 text-sm leading-relaxed text-[#5f6885]">
                Explore how I structure repos, ship features, and iterate—best for engineers reviewing craft and consistency.
              </p>
              <span className="inline-flex items-center gap-1 text-xs font-medium uppercase tracking-widest text-[#637599] transition-colors group-hover:text-[#4f5f82]">
                GitHub
                <ArrowUpRight className="h-3.5 w-3.5 opacity-70 transition-transform group-hover:translate-x-px group-hover:opacity-100" />
              </span>
            </div>
          </a>

          <a
            href="/resume.pdf"
            className="group flex flex-col justify-between rounded-2xl border border-dashed border-[#d9c8e8] bg-[#fefcfe]/95 px-6 py-7 shadow-[0_12px_32px_-24px_rgba(164,130,190,0.5)] transition-all hover:-translate-y-0.5 hover:border-[#c9b5dc] hover:bg-white lg:col-span-3 lg:min-h-[220px]"
          >
            <div>
              <FileDown className="mb-4 h-8 w-8 text-[#9b7fb8]" strokeWidth={1.5} />
              <p className="mb-1 text-[10px] uppercase tracking-[0.16em] text-[#a992bd]">One-page snapshot</p>
              <p className="font-serif text-lg leading-snug text-[#4d3f62]">Résumé</p>
            </div>
            <span className="mt-6 inline-flex items-center gap-1 text-xs uppercase tracking-[0.12em] text-[#866faf] transition-colors group-hover:text-[#6f5494]">
              Download PDF
              <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-px group-hover:-translate-y-px" />
            </span>
          </a>
        </div>

        {/* Tertiary: phone & location — calm, scannable */}
        <div className="mx-auto mb-14 flex max-w-3xl flex-col gap-6 rounded-2xl border border-[#efe6f4] bg-white/50 px-6 py-8 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:gap-10 md:px-10">
          <div className="flex items-start gap-4">
            <Phone className="mt-0.5 h-5 w-5 shrink-0 text-[#b07fa3]" strokeWidth={1.5} />
            <div>
              <p className="mb-0.5 text-[11px] uppercase tracking-[0.14em] text-[#9f8bad]">Prefer a call?</p>
              <p className="text-[#5c4d72]">+1 (703) 895-1483</p>
            </div>
          </div>
          <div className="hidden h-10 w-px shrink-0 bg-linear-to-b from-transparent via-[#e5daf0] to-transparent sm:block" />
          <div className="flex items-start gap-4">
            <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-[#7b8cb8]" strokeWidth={1.5} />
            <div>
              <p className="mb-0.5 text-[11px] uppercase tracking-[0.14em] text-[#9f8bad]">Based in</p>
              <p className="text-[#5c4d72]">Manassas, VA</p>
            </div>
          </div>
        </div>

        {/* Form: closing note */}
        <div className="relative mx-auto max-w-xl">
          <p className="mb-4 text-center text-sm text-[#8f7ba8]">Or leave a short note—I&apos;ll get back to you.</p>
          <form
            onSubmit={handleSubmit}
            className="relative rounded-[1.25rem] border border-[#eadcf4] bg-white/95 p-8 shadow-[0_20px_44px_-30px_rgba(155,114,189,0.65)] transition-shadow hover:shadow-[0_24px_48px_-28px_rgba(155,114,189,0.45)]"
          >
            <div className="pointer-events-none absolute right-6 top-5 h-2 w-14 rounded-full bg-[#ecdef6]" />
            <div className="mb-6">
              <label htmlFor="name" className="mb-2 block text-sm uppercase tracking-wider text-[#7a6692]">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-[#e3d3f1] bg-[#fffaff] px-4 py-3 text-[#5c4d72] placeholder-[#b9a8cb] transition-all focus:border-[#c6abdb] focus:outline-none focus:ring-2 focus:ring-[#dbc7ea]"
                placeholder="Your name"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="email" className="mb-2 block text-sm uppercase tracking-wider text-[#7a6692]">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-[#e3d3f1] bg-[#fffaff] px-4 py-3 text-[#5c4d72] placeholder-[#b9a8cb] transition-all focus:border-[#c6abdb] focus:outline-none focus:ring-2 focus:ring-[#dbc7ea]"
                placeholder="your.email@example.com"
              />
            </div>

            <div className="mb-6">
              <label htmlFor="message" className="mb-2 block text-sm uppercase tracking-wider text-[#7a6692]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full resize-none rounded-xl border border-[#e3d3f1] bg-[#fffaff] px-4 py-3 text-[#5c4d72] placeholder-[#b9a8cb] transition-all focus:border-[#c6abdb] focus:outline-none focus:ring-2 focus:ring-[#dbc7ea]"
                placeholder="Topic, stack, constraints, or what you&apos;d like to explore..."
              />
            </div>

            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-2 rounded-full bg-[#b58ad5] px-8 py-4 text-white transition-all hover:-translate-y-0.5 hover:bg-[#a779cb]"
            >
              <Send className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
              <span>Send Message</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
