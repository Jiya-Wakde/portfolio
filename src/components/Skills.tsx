import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Code2, ArrowUpRight } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/skills';
import { PROJECTS } from '../data/projects';
import { Project } from '../types';
import { sound } from '../utils/sound';
import { CursorState } from './CustomCursor';

interface SkillsProps {
  onSelectProject: (project: Project) => void;
  setCursorState: (state: CursorState) => void;
}

export const Skills: React.FC<SkillsProps> = ({ onSelectProject, setCursorState }) => {
  const [activeSkillName, setActiveSkillName] = useState<string | null>(null);

  const getRelatedProjects = (projectIds?: string[]): Project[] => {
    if (!projectIds) return [];
    return PROJECTS.filter((p) => projectIds.includes(p.id));
  };

  return (
    <section id="skills" className="py-24 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1F1F1F] pb-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#B7FF00]">
            <Code2 className="w-3.5 h-3.5" />
            <span>06 // ENGINEERING SKILLS</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold uppercase text-[#F2F2EE] tracking-tight">
            ENGINEERING <span className="text-[#B7FF00]">SKILLS</span>
          </h2>
        </div>

        <p className="font-mono text-xs text-[#777777] max-w-md">
          A selective editorial index of programming languages, web stacks, data pipelines, and hardware tools applied across active projects.
        </p>
      </div>

      {/* Editorial Typographic Skills Index Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {SKILL_CATEGORIES.map((category, catIdx) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: catIdx * 0.05, duration: 0.5 }}
            className="p-6 bg-[#0E0E0E] border border-[#1F1F1F] hover:border-[#2C2C2C] rounded-2xl space-y-5 flex flex-col justify-between shadow-xl transition-colors"
          >
            <div className="space-y-4">
              {/* Category Header */}
              <div className="space-y-1 border-b border-[#1A1A1A] pb-3">
                <span className="font-mono text-[10px] text-[#B7FF00] font-bold tracking-widest uppercase">
                  DOMAIN // 0{catIdx + 1}
                </span>
                <h3 className="font-mono text-base font-bold text-[#F2F2EE]">{category.title}</h3>
              </div>

              <p className="text-xs text-[#777777] leading-relaxed font-sans min-h-[36px]">
                {category.description}
              </p>

              {/* Typographic Skills List */}
              <div className="space-y-2 pt-2">
                {category.skills.map((skill, skillIdx) => {
                  const isSelected = activeSkillName === skill.name;
                  const relatedProjects = getRelatedProjects(skill.relatedProjects);

                  return (
                    <div
                      key={skill.name}
                      onMouseEnter={() => {
                        sound.playHover();
                        setActiveSkillName(skill.name);
                        setCursorState({ variant: 'link', text: 'EVIDENCE' });
                      }}
                      onMouseLeave={() => {
                        setActiveSkillName(null);
                        setCursorState({ variant: 'default' });
                      }}
                      className={`p-3 rounded-xl border transition-all ${isSelected
                        ? 'bg-[#181818] border-[#B7FF00]/60 shadow-lg shadow-[#B7FF00]/5'
                        : 'bg-[#121212] border-[#1C1C1C] hover:border-[#333333]'
                        }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-mono text-xs font-medium text-[#F2F2EE] flex items-center gap-2">
                          <span className="text-[#B7FF00] text-[10px] font-bold">
                            {skillIdx + 1 < 10 ? `0${skillIdx + 1}` : skillIdx + 1}.
                          </span>
                          {skill.name}
                        </span>
                      </div>

                      {/* Connected Projects Evidence Tags */}
                      {relatedProjects.length > 0 && (
                        <div className="mt-2 pt-2 border-t border-[#1C1C1C] flex flex-wrap gap-1.5 items-center">
                          <span className="font-mono text-[9px] text-[#777777]">PROVED IN:</span>
                          {relatedProjects.map((p) => (
                            <button
                              key={p.id}
                              onClick={() => {
                                sound.playOpen();
                                onSelectProject(p);
                              }}
                              className="font-mono text-[9px] bg-[#1C1C1C] hover:bg-[#B7FF00] text-[#B7FF00] hover:text-[#0A0A0A] px-2 py-0.5 rounded border border-[#2B2B2B] transition-colors flex items-center gap-1"
                            >
                              <span>{p.title}</span>
                              <ArrowUpRight className="w-2.5 h-2.5" />
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
