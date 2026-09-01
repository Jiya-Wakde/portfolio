import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Github, ExternalLink, ArrowUpRight, FileCode2 } from 'lucide-react';
import { Project, ProjectCategory } from '../types';
import { sound } from '../utils/sound';
import { CursorState } from './CustomCursor';

interface ProjectArchiveProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  setCursorState: (state: CursorState) => void;
}

export const ProjectArchive: React.FC<ProjectArchiveProps> = ({
  projects,
  onSelectProject,
  setCursorState,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredProject, setHoveredProject] = useState<Project | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const categories: ProjectCategory[] = [
    'ALL',
    'WEB',
    'PYTHON',
    'C / C++',
    'ML / AI',
    'EMBEDDED',
    'ROBOTICS',
    'EXPERIMENTS',
  ];

  const filteredProjects = useMemo(() => {
    return projects.filter((p) => {
      const matchesCat = selectedCategory === 'ALL' || p.category === selectedCategory;
      const matchesSearch =
        p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.technologies.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCat && matchesSearch;
    });
  }, [projects, selectedCategory, searchQuery]);

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section id="archive" className="py-24 px-4 md:px-8 max-w-7xl mx-auto space-y-12">
      {/* Section Title Header */}
      <div className="space-y-4 border-b border-[#1F1F1F] pb-8">
        <div className="flex items-center gap-2 font-mono text-xs text-[#B7FF00]">
          <FileCode2 className="w-3.5 h-3.5" />
          <span>03 // PROJECT ARCHIVE</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl sm:text-6xl font-extrabold uppercase text-[#F2F2EE] tracking-tight">
              EVERYTHING I'VE <span className="text-[#B7FF00]">BUILT</span>
            </h2>
            <p className="font-mono text-xs text-[#777777] mt-2">
              COMPLETE PROJECT ARCHIVE — {projects.length} TOTAL ENTRIES LOGGED
            </p>
          </div>

          {/* Search Filter Bar */}
          <div className="relative min-w-[280px]">
            <Search className="w-4 h-4 text-[#777777] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search title, tech, tag..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#121212] border border-[#222222] focus:border-[#B7FF00] rounded-full pl-10 pr-4 py-2 font-mono text-xs text-[#F2F2EE] placeholder-[#555555] outline-none transition-colors"
            />
          </div>
        </div>
      </div>

      {/* Category Tabs Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 no-scrollbar scroll-smooth">
        <Filter className="w-4 h-4 text-[#777777] flex-shrink-0 mr-1 hidden sm:block" />
        {categories.map((cat) => {
          const isActive = selectedCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => {
                sound.playClick();
                setSelectedCategory(cat);
              }}
              onMouseEnter={() => setCursorState({ variant: 'link' })}
              onMouseLeave={() => setCursorState({ variant: 'default' })}
              className={`px-4 py-2 rounded-full font-mono text-xs font-medium whitespace-nowrap transition-all ${
                isActive
                  ? 'bg-[#B7FF00] text-[#0A0A0A] font-bold shadow-md shadow-[#B7FF00]/10'
                  : 'bg-[#121212] text-[#777777] hover:text-[#F2F2EE] hover:bg-[#181818] border border-[#1F1F1F]'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Editorial List View Table */}
      <div className="relative border border-[#1F1F1F] bg-[#0E0E0E] rounded-2xl overflow-hidden shadow-2xl">
        {/* Table Column Headers */}
        <div className="grid grid-cols-12 gap-4 px-6 py-4 border-b border-[#1F1F1F] font-mono text-[11px] text-[#777777] uppercase tracking-wider">
          <div className="col-span-2 md:col-span-1">NO.</div>
          <div className="col-span-6 md:col-span-5">PROJECT NAME</div>
          <div className="hidden md:block md:col-span-4">CATEGORY / TECH</div>
          <div className="col-span-4 md:col-span-2 text-right">DETAILS</div>
        </div>

        {/* List Entries */}
        <div className="divide-y divide-[#181818]">
          {filteredProjects.length === 0 ? (
            <div className="p-12 text-center font-mono text-xs text-[#777777]">
              NO MATCHING PROJECTS FOUND IN ARCHIVE.
            </div>
          ) : (
            filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                onMouseMove={handleMouseMove}
                onMouseEnter={() => {
                  sound.playHover();
                  setHoveredProject(project);
                  setCursorState({ variant: 'project', text: 'VIEW' });
                }}
                onMouseLeave={() => {
                  setHoveredProject(null);
                  setCursorState({ variant: 'default' });
                }}
                onClick={() => {
                  sound.playOpen();
                  onSelectProject(project);
                }}
                className="grid grid-cols-12 gap-4 px-6 py-5 items-center hover:bg-[#151515] transition-colors cursor-pointer group"
              >
                {/* Number */}
                <div className="col-span-2 md:col-span-1 font-mono text-xs text-[#B7FF00] font-bold">
                  {project.number}
                </div>

                {/* Title & Mobile Tags */}
                <div className="col-span-6 md:col-span-5 space-y-1">
                  <h4 className="font-mono text-sm md:text-base font-bold text-[#F2F2EE] group-hover:text-[#B7FF00] transition-colors flex items-center gap-2">
                    {project.title}
                    {project.featured && (
                      <span className="font-mono text-[9px] bg-[#B7FF00]/10 text-[#B7FF00] border border-[#B7FF00]/30 px-1.5 py-0.5 rounded">
                        FEATURED
                      </span>
                    )}
                  </h4>
                  <p className="text-xs text-[#777777] line-clamp-1 font-sans">
                    {project.tagline}
                  </p>
                </div>

                {/* Category & Tech (Desktop) */}
                <div className="hidden md:block md:col-span-4 space-y-1">
                  <span className="font-mono text-xs text-[#F2F2EE] font-medium block">
                    {project.category}
                  </span>
                  <span className="font-mono text-[10px] text-[#777777] block line-clamp-1">
                    {project.technologies.join(' • ')}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="col-span-4 md:col-span-2 flex items-center justify-end gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-1.5 text-[#777777] hover:text-[#F2F2EE] transition-colors"
                      title="GitHub Repository"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  )}

                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="p-1.5 text-[#777777] hover:text-[#B7FF00] transition-colors"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}

                  <span className="font-mono text-xs text-[#777777] group-hover:text-[#B7FF00] transition-colors flex items-center gap-0.5">
                    SPECS <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </motion.div>
            ))
          )}
        </div>
      </div>

      {/* Floating Image Preview on Hover (Desktop) */}
      <AnimatePresence>
        {hoveredProject && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.15 }}
            style={{
              position: 'fixed',
              left: mousePos.x + 20,
              top: mousePos.y - 120,
              pointerEvents: 'none',
              zIndex: 60,
            }}
            className="hidden lg:block w-72 h-44 rounded-xl overflow-hidden bg-[#0A0A0A] border border-[#B7FF00]/40 shadow-2xl p-1"
          >
            <img
              src={hoveredProject.image}
              alt={hoveredProject.title}
              className="w-full h-full object-cover rounded-lg"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
