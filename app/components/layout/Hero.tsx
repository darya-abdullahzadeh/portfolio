'use client';

import { Github, Linkedin, Mail, ArrowDown, Sparkles, Terminal } from 'lucide-react';
import { motion } from 'motion/react';

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
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-6 h-6 text-purple-300 animate-pulse" />
              <span className="text-purple-200 uppercase tracking-widest text-sm">Welcome to my universe</span>
              <Sparkles className="w-6 h-6 text-purple-300 animate-pulse" />
            </div>
            
            <h1 className="text-6xl md:text-8xl text-white mb-6 tracking-tight">
              Hi, I'm <span className="bg-gradient-to-r from-purple-200 via-purple-300 to-pink-200 bg-clip-text text-transparent">Darya Abdullahzadeh</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center justify-center gap-3 mb-8">
              <Terminal className="w-6 h-6 text-purple-300" />
              <p className="text-2xl md:text-3xl text-white/90 font-light">
                Full-Stack Space Explorer & Code Architect
              </p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg text-white/70 mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Navigating the cosmos of code, I build stellar applications that push the boundaries of what's possible.
            From nebulous ideas to concrete solutions, I transform visions into digital reality.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex items-center justify-center gap-6 mb-12"
          >
            <a 
              href="https://github.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-white/10 hover:bg-purple-500/30 rounded-full transition-all backdrop-blur-sm border border-purple-400/30 hover:border-purple-400/60 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 group relative"
            >
              <Github className="w-6 h-6 text-white" />
              <div className="absolute -inset-1 bg-purple-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-4 bg-white/10 hover:bg-purple-500/30 rounded-full transition-all backdrop-blur-sm border border-purple-400/30 hover:border-purple-400/60 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 group relative"
            >
              <Linkedin className="w-6 h-6 text-white" />
              <div className="absolute -inset-1 bg-purple-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
            <a 
              href="mailto:alex@example.com"
              className="p-4 bg-white/10 hover:bg-purple-500/30 rounded-full transition-all backdrop-blur-sm border border-purple-400/30 hover:border-purple-400/60 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/50 group relative"
            >
              <Mail className="w-6 h-6 text-white" />
              <div className="absolute -inset-1 bg-purple-400/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>
          </motion.div>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            onClick={() => scrollToSection('about')}
            className="px-10 py-5 bg-gradient-to-r from-purple-500/30 to-pink-500/30 hover:from-purple-500/50 hover:to-pink-500/50 text-white rounded-full transition-all backdrop-blur-sm border border-purple-400/50 inline-flex items-center gap-3 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/50 group"
          >
            Learn More
            <ArrowDown className="w-4 h-4 group-hover:animate-bounce" />
          </motion.button>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-purple-300/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-purple-300 rounded-full"
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
}