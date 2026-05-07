import { getExperience } from '@/lib/cms/queries';
import { Hero } from './components/layout/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Experience } from './components/sections/Experience';
import { SystemThinking } from './components/sections/SystemThinking';
import { Contact } from './components/sections/Contact';

export const revalidate = 3600; // Revalidate every hour

export default async function Home() {
  const experiences = await getExperience().catch(() => []);

  return (
    <>
      {/* Hero Section */}
      <section id="home" className="scroll-mt-20">
        <Hero />
      </section>

      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 pb-16">
        {/* About Section */}
        <About />

        {/* Projects Section */}
        <Projects />

        {/* Experience Section */}
        <Experience experiences={experiences} />

        {/* Skills Section */}
        <Skills />

        {/* System thinking */}
        <SystemThinking />

        {/* Contact Section */}
        <Contact />
      </div>
    </>
  );
}
