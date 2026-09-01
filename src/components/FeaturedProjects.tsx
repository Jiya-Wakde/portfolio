import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight, Code, Layers } from 'lucide-react';
import { Project } from '../types';
import { sound } from '../utils/sound';
import { CursorState } from './CustomCursor';

interface FeaturedProjectsProps {
  projects: Project[];
  onSelectProject: (project: Project) => void;
  setCursorState: (state: CursorState) => void;
}

export const FeaturedProjects: React.FC<FeaturedProjectsProps> = ({
  projects,
  onSelectProject,
  setCursorState,
}) => {
  const featuredList = projects.filter((p) => p.featured);

  return (
    <section id="work" className="py-24 px-4 md:px-8 max-w-7xl mx-auto space-y-20">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1F1F1F] pb-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#B7FF00]">
            <Layers className="w-3.5 h-3.5" />
            <span>02 // SELECTED WORK</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-extrabold uppercase text-[#F2F2EE] tracking-tight">
            FEATURED <span className="text-[#B7FF00]">PROJECTS</span>
          </h2>
        </div>

        <p className="font-mono text-xs text-[#777777] max-w-md">
          A curated selection of primary engineering endeavors spanning web architectures, robotics, computer vision, and IoT telemetry.
        </p>
      </div>

      {/* Asymmetric Showcase List */}
      <div className="space-y-32">
        {featuredList.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center group"
            >
              {/* Project Image Column */}
              <div
                className={`lg:col-span-7 ${isEven ? 'lg:order-1' : 'lg:order-2'} cursor-pointer`}
                onClick={() => {
                  sound.playOpen();
                  onSelectProject(project);
                }}
                onMouseEnter={() => setCursorState({ variant: 'project', text: 'VIEW' })}
                onMouseLeave={() => setCursorState({ variant: 'default' })}
              >
                <div className="relative rounded-2xl overflow-hidden bg-[#121212] border border-[#222222] group-hover:border-[#B7FF00]/60 transition-all duration-500 shadow-2xl">
                  {/* Subtle Tech Overlay Tag */}
                  <div className="absolute top-4 left-4 z-10 font-mono text-[10px] bg-[#0A0A0A]/90 backdrop-blur-md text-[#B7FF00] px-3 py-1.5 rounded-full border border-[#262626]">
                    {project.number} // {project.category}
                  </div>

                  {/* Image Container with Hover Scale */}
                  <div className="aspect-[16/10] overflow-hidden bg-[#0A0A0A]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                    />
                  </div>

                  {/* Bottom Hover Bar */}
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/80 to-transparent flex justify-between items-center opacity-90 group-hover:opacity-100 transition-opacity">
                    <span className="font-mono text-xs text-[#777777] group-hover:text-[#B7FF00] transition-colors flex items-center gap-1.5">
                      <Code className="w-3.5 h-3.5" /> CLICK FOR CASE STUDY
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#B7FF00] text-[#0A0A0A] flex items-center justify-center font-bold text-xs group-hover:scale-110 transition-transform">
                      ↗
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Information Column */}
              <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'} space-y-6`}>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-4xl font-extrabold text-[#B7FF00] opacity-80">
                    {project.number}
                  </span>
                  <div className="h-[1px] flex-grow bg-[#222222]" />
                  <span className="font-mono text-xs text-[#777777] uppercase tracking-wider">
                    {project.status}
                  </span>
                </div>

                <h3
                  className="text-3xl sm:text-4xl font-extrabold uppercase text-[#F2F2EE] group-hover:text-[#B7FF00] transition-colors cursor-pointer"
                  onClick={() => {
                    sound.playOpen();
                    onSelectProject(project);
                  }}
                >
                  {project.title}
                </h3>

                <p className="font-mono text-xs text-[#B7FF00] tracking-wide font-medium">
                  {project.tagline}
                </p>

                <p className="text-sm text-[#777777] leading-relaxed font-sans">
                  {project.description}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] bg-[#141414] text-[#A0A0A0] px-3 py-1 rounded-md border border-[#222222]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* External Action Links */}
                <div className="flex items-center gap-4 pt-4 border-t border-[#1F1F1F]">
                  <button
                    onClick={() => {
                      sound.playOpen();
                      onSelectProject(project);
                    }}
                    onMouseEnter={() => setCursorState({ variant: 'link', text: 'CASE STUDY' })}
                    onMouseLeave={() => setCursorState({ variant: 'default' })}
                    className="flex items-center gap-2 bg-[#181818] hover:bg-[#B7FF00] text-[#F2F2EE] hover:text-[#0A0A0A] px-5 py-2.5 rounded-full font-mono text-xs font-bold transition-all border border-[#2B2B2B]"
                  >
                    <span>CASE STUDY</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => setCursorState({ variant: 'link', text: 'GITHUB' })}
                      onMouseLeave={() => setCursorState({ variant: 'default' })}
                      className="p-2.5 rounded-full border border-[#262626] text-[#777777] hover:text-[#F2F2EE] hover:border-[#777777] transition-colors"
                      title="View GitHub Repository"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}

                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      onMouseEnter={() => setCursorState({ variant: 'link', text: 'DEMO' })}
                      onMouseLeave={() => setCursorState({ variant: 'default' })}
                      className="p-2.5 rounded-full border border-[#262626] text-[#777777] hover:text-[#B7FF00] hover:border-[#B7FF00]/40 transition-colors"
                      title="View Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
};
