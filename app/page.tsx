import { getProjects, getSkills, getExperience } from '@/lib/cms/queries';
import { Hero } from './components/layout/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { Contact } from './components/sections/Contact';

export const revalidate = 3600; // Revalidate every hour

export default async function Home() {
  const [projects, skills, experiences] = await Promise.all([
    getProjects().catch(() => []),
    getSkills().catch(() => []),
    getExperience().catch(() => []),
  ]);

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="scroll-mt-20">
        <Hero />
      </section>

      <div className="mx-auto max-w-7xl px-6 pb-16">
        {/* About Section */}
        <About />        

        {/* Projects Section */}
        <Projects />

        {/* Experience Section */}
        <Experience experiences={experiences} />

        {/* Skills Section */}
        <Skills />

        {/* Contact Section */}
        <Contact />
      </div>
    </>
  );
}
