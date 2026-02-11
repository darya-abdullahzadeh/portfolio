import { ExternalLink, Github, Telescope, Star } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: "Ziman - Kurdish Language Assistant",
      description: "A comprehensive language learning platform for Kurdish dialects, featuring real-time translation, multi-dialect support (Sorani & Kurmanji), and interactive learning tools to preserve and teach the Kurdish language.",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL, Google Gemini"],
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080", // Language/translation themed image
      github: "https://github.com/darya-abdullahzadeh/kurdish-language-assistant",
      demo: "https://ziman.netlify.app", // Add your deployed URL here if you have one
      featured: true
    },
    {
      title: "Nebula Task Manager",
      description: "Collaborative workspace with real-time updates via WebSockets, team analytics dashboard, and intelligent task prioritization for distributed teams.",
      tech: ["Next.js", "TypeScript", "MongoDB", "Socket.io"],
      image: "https://images.unsplash.com/photo-1753998943619-b9cd910887e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBzY3JlZW4lMjBkYXJrfGVufDF8fHx8MTc3MDY2NzE5MXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      github: "https://github.com",
      demo: "https://example.com",
      featured: true
    },
    {
      title: "Cosmic Weather",
      description: "Interactive weather visualization with location-based forecasts, historical climate data analysis, and beautiful animated charts powered by real-time APIs.",
      tech: ["React", "Recharts", "Weather API", "Tailwind"],
      image: "https://images.unsplash.com/photo-1710267224216-8eced3320dac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3Ryb25hdXQlMjBzcGFjZXxlbnwxfHx8fDE3NzA1ODM0MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      github: "https://github.com",
      demo: "https://example.com",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-purple-400"></div>
            <Telescope className="w-5 h-5 text-purple-300" />
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-purple-400"></div>
          </div>
          <h2 className="text-5xl md:text-6xl text-white mb-4 bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
            Featured Expeditions
          </h2>
          <p className="text-purple-200/60 uppercase tracking-widest text-sm">Showcasing my cosmic creations</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-purple-400/30 hover:border-purple-400/60 transition-all group hover:shadow-2xl hover:shadow-purple-500/30 hover:-translate-y-2 relative"
            >
              {project.featured && (
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-yellow-400/80 to-yellow-500/80 rounded-full flex items-center gap-2 backdrop-blur-sm">
                  <Star className="w-3 h-3 text-white fill-white" />
                  <span className="text-xs text-white uppercase tracking-wider">Featured</span>
                </div>
              )}
              
              <div className="aspect-video overflow-hidden bg-black/50 relative">
                <ImageWithFallback 
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl text-white mb-3 group-hover:text-purple-200 transition-colors">{project.title}</h3>
                <p className="text-white/70 mb-4 leading-relaxed text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tech.map((tech) => (
                    <span key={tech} className="px-3 py-1 bg-purple-500/20 border border-purple-400/30 text-purple-100 rounded-full text-xs backdrop-blur-sm">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/80 hover:text-purple-300 transition-colors text-sm group/link"
                  >
                    <Github className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                    <span>Code</span>
                  </a>
                  <a 
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/80 hover:text-purple-300 transition-colors text-sm group/link"
                  >
                    <ExternalLink className="w-5 h-5 group-hover/link:scale-110 transition-transform" />
                    <span>Live Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all projects CTA */}
        <div className="mt-16 text-center">
          <a 
            href="https://github.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 hover:from-purple-500/40 hover:to-pink-500/40 border border-purple-400/40 hover:border-purple-400/70 rounded-full text-white transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 backdrop-blur-sm"
          >
            <Github className="w-5 h-5" />
            <span>View All Projects on GitHub</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}