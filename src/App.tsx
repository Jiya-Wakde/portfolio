import React, { useState, useEffect } from 'react';
import { CustomCursor, CursorState } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Intro } from './components/Intro';
import { FeaturedProjects } from './components/FeaturedProjects';
import { ProjectArchive } from './components/ProjectArchive';
import { About } from './components/About';
import { CurrentlyBuilding } from './components/CurrentlyBuilding';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { PROJECTS } from './data/projects';
import { Project } from './types';

export const App: React.FC = () => {
  const [cursorState, setCursorState] = useState<CursorState>({ variant: 'default' });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState<string>('hero');

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'work', 'archive', 'about', 'building', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleExploreClick = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen bg-[#0A0A0A] text-[#F2F2EE] selection:bg-[#B7FF00] selection:text-[#0A0A0A] bg-tech-grid bg-noise">
      {/* Dynamic Magnetic Cursor */}
      <CustomCursor cursorState={cursorState} />

      {/* Floating Header */}
      <Navbar setCursorState={setCursorState} activeSection={activeSection} />

      {/* Main Content Sections */}
      <main className="relative z-10 space-y-12">
        <Hero setCursorState={setCursorState} onExploreClick={handleExploreClick} />
        <Intro setCursorState={setCursorState} />
        <FeaturedProjects
          projects={PROJECTS}
          onSelectProject={setSelectedProject}
          setCursorState={setCursorState}
        />
        <ProjectArchive
          projects={PROJECTS}
          onSelectProject={setSelectedProject}
          setCursorState={setCursorState}
        />
        <About setCursorState={setCursorState} />
        <CurrentlyBuilding setCursorState={setCursorState} />
        <Skills onSelectProject={setSelectedProject} setCursorState={setCursorState} />
        <Contact setCursorState={setCursorState} />
      </main>

      {/* Footer */}
      <Footer setCursorState={setCursorState} />

      {/* Static Case Study Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        allProjects={PROJECTS}
        onClose={() => setSelectedProject(null)}
        onSelectProject={setSelectedProject}
        setCursorState={setCursorState}
      />
    </div>
  );
};

export default App;
