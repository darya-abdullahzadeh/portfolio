import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About | Portfolio',
  description: 'Learn more about my background and journey as a software developer',
};

import { Code, Rocket, Users, Satellite, Orbit, Zap } from 'lucide-react';

export function AboutPage() {
  return (
    <section id="about" className="py-20 px-6 relative">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
      <div className="absolute top-20 right-1/3 w-3 h-3 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      <div className="absolute bottom-20 left-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-purple-400"></div>
            <Satellite className="w-5 h-5 text-purple-300 animate-pulse" />
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-purple-400"></div>
          </div>
          <h2 className="text-5xl md:text-6xl text-white mb-4 bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
            About the Mission
          </h2>
          <p className="text-purple-200/60 uppercase tracking-widest text-sm">Exploring the digital frontier</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <p className="text-lg text-white/80 leading-relaxed">
              I'm a passionate software developer with 5+ years of experience navigating the vast expanse of technology.
              Like an astronaut exploring new worlds, I venture into uncharted territories of code, discovering elegant
              solutions to complex challenges.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              My journey in tech started with a curiosity about how digital universes are built. That spark has evolved 
              into a mission where every project is an expedition, every bug a puzzle to solve, and every deployment a 
              successful launch.
            </p>
            <p className="text-lg text-white/80 leading-relaxed">
              When I'm not coding, you can find me contributing to open-source projects, writing technical articles about 
              my discoveries, or experimenting with emerging technologies that push the boundaries of innovation.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="text-center">
                <div className="text-3xl text-purple-300 mb-1">5+</div>
                <div className="text-sm text-white/60">Years</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-purple-300 mb-1">50+</div>
                <div className="text-sm text-white/60">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-3xl text-purple-300 mb-1">100K+</div>
                <div className="text-sm text-white/60">Lines of Code</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-purple-400/30 hover:border-purple-400/60 transition-all group hover:shadow-xl hover:shadow-purple-500/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-purple-500/40 to-purple-600/40 rounded-xl group-hover:scale-110 transition-transform">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-white mb-2 flex items-center gap-2">
                    Clean Code Architecture
                    <Zap className="w-4 h-4 text-purple-300" />
                  </h3>
                  <p className="text-white/70">Writing maintainable, scalable code that stands the test of time and evolution.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-pink-400/30 hover:border-pink-400/60 transition-all group hover:shadow-xl hover:shadow-pink-500/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-pink-500/40 to-pink-600/40 rounded-xl group-hover:scale-110 transition-transform">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-white mb-2 flex items-center gap-2">
                    Innovation First
                    <Orbit className="w-4 h-4 text-pink-300 animate-spin" style={{ animationDuration: '10s' }} />
                  </h3>
                  <p className="text-white/70">Always exploring cutting-edge technologies to deliver solutions that transcend expectations.</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-blue-400/30 hover:border-blue-400/60 transition-all group hover:shadow-xl hover:shadow-blue-500/20">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-blue-500/40 to-blue-600/40 rounded-xl group-hover:scale-110 transition-transform">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl text-white mb-2">Team Collaboration</h3>
                  <p className="text-white/70">Strong communicator who thrives in diverse teams, fostering a culture of knowledge sharing.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

