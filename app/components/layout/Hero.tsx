'use client';

import { Github, Linkedin, Mail, ArrowRight, Download } from 'lucide-react';
import { motion } from 'motion/react';
import Image from 'next/image';

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="relative flex min-h-[84vh] items-end px-6 pb-8 pt-24 md:pb-12">
      <div className="absolute inset-0 overflow-hidden rounded-b-4xl">
        <Image
          src="/background.png"
          alt="Hero background"
          fill
          priority
          quality={80}
          sizes="100vw"
          className="object-cover"
        />
        <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-[#fff8ff]/34 via-[#f6ecff]/48 to-[#f2e5f7]/68" />
        <div className="pointer-events-none absolute -left-12 top-12 h-48 w-48 rounded-full bg-[#f0dbff]/45 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 right-8 h-56 w-56 rounded-full bg-[#ffdbe9]/45 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto max-w-6xl">
        <div className="mx-auto max-w-4xl rounded-3xl border border-[#eadcf2] bg-[#fffdf8ed] p-6 shadow-[0_18px_50px_-30px_rgba(167,126,194,0.7)] backdrop-blur-sm md:p-9">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-6 inline-flex items-center rounded-full border border-[#e5d3f0] bg-[#f9f2ff] px-3 py-1.5 text-xs font-medium uppercase tracking-[0.16em] text-[#8a6aa8]">
              Full-Stack Engineer
            </div>

            <h1 className="mb-4 max-w-3xl text-4xl font-semibold tracking-tight text-[#4d3f62] md:text-6xl">
              End-to-end systems.
              <br />
              From APIs to production.
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="mb-7 max-w-2xl text-base leading-relaxed text-[#66557d] md:text-lg">
              I&apos;m Darya Abdullahzadeh, a full-stack engineer. I ship complete features across the stack—typed APIs,
              relational and document data layers, auth and integrations—and care about performance, reliability, and clear
              tradeoffs when designs evolve.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-6 flex flex-wrap items-center gap-3"
          >
            <button
              onClick={() => scrollToSection('projects')}
              className="inline-flex items-center gap-2 rounded-full bg-[#b58ad5] px-6 py-3 text-sm font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[#a977cb]"
            >
              View Projects
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-[#dbc3ea] bg-white/90 px-6 py-3 text-sm font-medium text-[#6c5985] transition-all hover:-translate-y-0.5 hover:bg-[#f8f0ff]"
            >
              Download Resume
              <Download className="h-4 w-4" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55 }}
            className="mb-6 grid max-w-2xl grid-cols-3 gap-3 text-center"
          >
            <div className="rounded-2xl border border-[#eadcf4] bg-white/75 px-3 py-2.5">
              <p className="text-xl font-semibold text-[#6f5b89]">5+</p>
              <p className="text-xs uppercase tracking-wide text-[#8a77a3]">Years</p>
            </div>
            <div className="rounded-2xl border border-[#eadcf4] bg-white/75 px-3 py-2.5">
              <p className="text-xl font-semibold text-[#6f5b89]">50+</p>
              <p className="text-xs uppercase tracking-wide text-[#8a77a3]">Systems</p>
            </div>
            <div className="rounded-2xl border border-[#eadcf4] bg-white/75 px-3 py-2.5">
              <p className="text-xl font-semibold text-[#6f5b89]">100K+</p>
              <p className="text-xs uppercase tracking-wide text-[#8a77a3]">Lines</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-wrap items-center gap-3 border-t border-[#ecdff5] pt-5"
          >
            <a
              href="https://github.com/darya-abdullahzadeh"
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full border border-[#e3d2ef] bg-[#f8f0ff] p-2.5 text-[#8666a6] transition-all hover:-translate-y-0.5 hover:border-[#c8a9dc] hover:text-[#6f4f91]"
              aria-label="GitHub profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a 
              href="https://www.linkedin.com/in/darya-abdullahzadeh/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="rounded-full border border-[#e3d2ef] bg-[#f8f0ff] p-2.5 text-[#8666a6] transition-all hover:-translate-y-0.5 hover:border-[#c8a9dc] hover:text-[#6f4f91]"
              aria-label="LinkedIn profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a 
              href="mailto:abdullahzadeh.darya@gmail.com"
              className="rounded-full border border-[#e3d2ef] bg-[#f8f0ff] p-2.5 text-[#8666a6] transition-all hover:-translate-y-0.5 hover:border-[#c8a9dc] hover:text-[#6f4f91]"
              aria-label="Email Darya"
            >
              <Mail className="h-5 w-5" />
            </a>
            <span className="ml-2 text-sm text-[#7d6a95]">
              Full-stack engineering—APIs, data layers, and production web surfaces.
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}