import { Cpu, Server, Settings, Sparkles } from 'lucide-react';

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Cpu,
      color: "purple",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Redux", "Vue.js"]
    },
    {
      title: "Backend",
      icon: Server,
      color: "pink",
      skills: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "REST APIs"]
    },
    {
      title: "DevOps & Tools",
      icon: Settings,
      color: "blue",
      skills: ["Git", "Docker", "AWS", "CI/CD", "Linux", "Webpack"]
    },
    {
      title: "Other",
      icon: Sparkles,
      color: "indigo",
      skills: ["GraphQL", "Testing (Jest, Cypress)", "Agile", "System Design"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="h-px w-8 bg-gradient-to-r from-transparent to-purple-400"></div>
            <Cpu className="w-5 h-5 text-purple-300" />
            <div className="h-px w-8 bg-gradient-to-l from-transparent to-purple-400"></div>
          </div>
          <h2 className="text-5xl md:text-6xl text-white mb-4 bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
            Tech Arsenal
          </h2>
          <p className="text-purple-200/60 uppercase tracking-widest text-sm">Tools for the journey</p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.title} 
                className={`bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-${category.color}-400/30 hover:border-${category.color}-400/60 transition-all group hover:shadow-xl hover:shadow-${category.color}-500/20 hover:-translate-y-2`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-2 bg-gradient-to-br from-${category.color}-500/40 to-${category.color}-600/40 rounded-lg group-hover:scale-110 transition-transform`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-2xl text-white">{category.title}</h3>
                </div>
                <ul className="space-y-3">
                  {category.skills.map((skill) => (
                    <li key={skill} className="text-white/80 flex items-center gap-2 group/item">
                      <div className={`w-1.5 h-1.5 bg-${category.color}-300 rounded-full group-hover/item:scale-150 transition-transform`}></div>
                      <span className="group-hover/item:text-white group-hover/item:translate-x-1 transition-all">{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* Additional tech badges */}
        <div className="mt-16 text-center">
          <p className="text-white/60 mb-6 text-sm uppercase tracking-widest">Also experienced with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {['Firebase', 'Supabase', 'Vercel', 'Figma', 'Stripe', 'WebSockets', 'Redis', 'Nginx'].map((tech) => (
              <span 
                key={tech} 
                className="px-4 py-2 bg-white/10 hover:bg-purple-500/30 border border-purple-400/30 hover:border-purple-400/60 rounded-full text-sm text-white/80 hover:text-white backdrop-blur-sm transition-all hover:scale-105 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}