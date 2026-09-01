import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, ChevronLeft, ChevronRight, Lightbulb, AlertTriangle, Layers } from 'lucide-react';
import { Project } from '../types';
import { sound } from '../utils/sound';
import { CursorState } from './CustomCursor';

interface ProjectDetailModalProps {
  project: Project | null;
  allProjects: Project[];
  onClose: () => void;
  onSelectProject: (project: Project) => void;
  setCursorState: (state: CursorState) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  allProjects,
  onClose,
  onSelectProject,
  setCursorState,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const currentIndex = allProjects.findIndex((p) => p.id === project.id);
  const prevProject = allProjects[(currentIndex - 1 + allProjects.length) % allProjects.length];
  const nextProject = allProjects[(currentIndex + 1) % allProjects.length];

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 overflow-y-auto bg-[#0A0A0A]/90 backdrop-blur-xl flex justify-center p-4 sm:p-6 md:p-10">
        {/* Backdrop overlay click */}
        <div
          className="fixed inset-0 -z-10"
          onClick={() => {
            sound.playClick();
            onClose();
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.98 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          className="relative w-full max-w-4xl bg-[#0E0E0E] border border-[#222222] rounded-3xl p-6 sm:p-10 shadow-2xl space-y-10 my-auto"
        >
          {/* Header Action Bar */}
          <div className="flex items-center justify-between border-b border-[#1F1F1F] pb-6">
            <div className="flex items-center gap-3">
              <span className="font-mono text-sm font-bold text-[#B7FF00]">{project.number}</span>
              <span className="text-[#333333]">//</span>
              <span className="font-mono text-xs text-[#777777] uppercase tracking-wider">
                {project.category} CASE STUDY
              </span>
            </div>

            <button
              onClick={() => {
                sound.playClick();
                onClose();
              }}
              onMouseEnter={() => setCursorState({ variant: 'link', text: 'CLOSE' })}
              onMouseLeave={() => setCursorState({ variant: 'default' })}
              className="p-2 bg-[#181818] hover:bg-[#B7FF00] text-[#F2F2EE] hover:text-[#0A0A0A] rounded-full border border-[#2B2B2B] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Title & Banner */}
          <div className="space-y-4">
            <h2 className="text-3xl sm:text-5xl font-extrabold uppercase text-[#F2F2EE] tracking-tight">
              {project.title}
            </h2>
            <p className="font-mono text-sm text-[#B7FF00] font-medium">{project.tagline}</p>
          </div>

          {/* Hero Cover Image */}
          <div className="relative rounded-2xl overflow-hidden bg-[#0A0A0A] border border-[#222222] aspect-[16/9]">
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          </div>

          {/* Metadata Specs Bar */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-5 bg-[#141414] border border-[#1F1F1F] rounded-2xl font-mono text-xs">
            <div>
              <span className="text-[#777777] block text-[10px] uppercase">// DOMAIN</span>
              <span className="text-[#F2F2EE] font-bold">{project.category}</span>
            </div>
            <div>
              <span className="text-[#777777] block text-[10px] uppercase">// DISCIPLINE</span>
              <span className="text-[#F2F2EE] font-bold">COMPUTER ENG</span>
            </div>
            <div>
              <span className="text-[#777777] block text-[10px] uppercase">// STATUS</span>
              <span className="text-[#B7FF00] font-bold">{project.status}</span>
            </div>
            <div>
              <span className="text-[#777777] block text-[10px] uppercase">// ARCHIVE ID</span>
              <span className="text-[#F2F2EE] font-bold">{project.id}</span>
            </div>
          </div>

          {/* Overview & Problem / Solution Grid */}
          <div className="space-y-8">
            {/* Long Description */}
            <div className="space-y-3">
              <h4 className="font-mono text-xs text-[#777777] uppercase tracking-widest flex items-center gap-2">
                <Layers className="w-3.5 h-3.5 text-[#B7FF00]" /> OVERVIEW
              </h4>
              <p className="text-base text-[#F2F2EE]/90 leading-relaxed font-sans">
                {project.longDescription || project.description}
              </p>
            </div>

            {/* Problem Statement */}
            {project.problem && (
              <div className="p-6 bg-[#121212] border border-[#222222] rounded-2xl space-y-3">
                <h4 className="font-mono text-xs text-[#FF5555] uppercase tracking-widest flex items-center gap-2 font-bold">
                  <AlertTriangle className="w-4 h-4 text-[#FF5555]" /> THE CHALLENGE / PROBLEM
                </h4>
                <p className="text-sm text-[#777777] leading-relaxed font-sans">{project.problem}</p>
              </div>
            )}

            {/* Engineering Solution */}
            {project.solution && (
              <div className="p-6 bg-[#121212] border border-[#B7FF00]/20 rounded-2xl space-y-3">
                <h4 className="font-mono text-xs text-[#B7FF00] uppercase tracking-widest flex items-center gap-2 font-bold">
                  <span className="text-[#B7FF00] font-mono text-xs font-bold">[+]</span> THE ENGINEERING SOLUTION
                </h4>
                <p className="text-sm text-[#F2F2EE]/90 leading-relaxed font-sans">{project.solution}</p>
              </div>
            )}

            {/* Process Steps */}
            {project.process && project.process.length > 0 && (
              <div className="space-y-4">
                <h4 className="font-mono text-xs text-[#777777] uppercase tracking-widest">
                  DEVELOPMENT PROCESS
                </h4>
                <div className="space-y-2">
                  {project.process.map((step, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-3 p-4 bg-[#141414] border border-[#1F1F1F] rounded-xl font-mono text-xs text-[#F2F2EE]"
                    >
                      <span className="text-[#B7FF00] font-bold">0{idx + 1}.</span>
                      <span>{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Learnings */}
            {project.keyLearnings && project.keyLearnings.length > 0 && (
              <div className="space-y-4">
                <h4 className="font-mono text-xs text-[#777777] uppercase tracking-widest flex items-center gap-2">
                  <Lightbulb className="w-3.5 h-3.5 text-[#B7FF00]" /> KEY LEARNING OUTCOMES
                </h4>
                <ul className="space-y-2">
                  {project.keyLearnings.map((learning, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-2.5 text-sm text-[#777777] font-sans"
                    >
                      <span className="text-[#B7FF00] font-bold">•</span>
                      <span>{learning}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Tech Stack List */}
          <div className="space-y-3 border-t border-[#1F1F1F] pt-6">
            <span className="font-mono text-xs text-[#777777] uppercase tracking-widest block">
              TECHNOLOGY STACK
            </span>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="font-mono text-xs bg-[#181818] text-[#B7FF00] px-3.5 py-1.5 rounded-lg border border-[#2B2B2B]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* External Links */}
          <div className="flex flex-wrap items-center gap-4 border-t border-[#1F1F1F] pt-6">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#181818] hover:bg-[#F2F2EE] text-[#F2F2EE] hover:text-[#0A0A0A] px-6 py-3 rounded-full font-mono text-xs font-bold border border-[#2B2B2B] transition-colors"
              >
                <Github className="w-4 h-4" /> VIEW GITHUB REPOSITORY
              </a>
            )}

            {project.liveDemo && (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-[#B7FF00] text-[#0A0A0A] hover:bg-[#9DE000] px-6 py-3 rounded-full font-mono text-xs font-bold transition-colors"
              >
                <ExternalLink className="w-4 h-4" /> LAUNCH LIVE DEMO
              </a>
            )}
          </div>

          {/* Next / Prev Project Bar */}
          <div className="flex items-center justify-between border-t border-[#1F1F1F] pt-6 font-mono text-xs">
            <button
              onClick={() => {
                sound.playClick();
                onSelectProject(prevProject);
              }}
              className="flex items-center gap-2 text-[#777777] hover:text-[#B7FF00] transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>PREV: {prevProject.title}</span>
            </button>

            <button
              onClick={() => {
                sound.playClick();
                onSelectProject(nextProject);
              }}
              className="flex items-center gap-2 text-[#777777] hover:text-[#B7FF00] transition-colors"
            >
              <span>NEXT: {nextProject.title}</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
