import React from 'react';
import { motion } from 'framer-motion';
import { Activity } from 'lucide-react';
import { CURRENTLY_BUILDING } from '../data/currentlyBuilding';
import { CursorState } from './CustomCursor';

interface CurrentlyBuildingProps {
  setCursorState: (state: CursorState) => void;
}

export const CurrentlyBuilding: React.FC<CurrentlyBuildingProps> = ({ setCursorState }) => {
  return (
    <section id="building" className="py-24 px-4 md:px-8 max-w-7xl mx-auto space-y-12">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-[#1F1F1F] pb-8">
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2 font-mono text-xs text-[#B7FF00]">
            <Activity className="w-3.5 h-3.5 animate-pulse" />
            <span>05 // CURRENTLY BUILDING</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-extrabold uppercase text-[#F2F2EE] tracking-tight">
            CURRENTLY <span className="text-[#B7FF00]">BUILDING</span>
          </h2>
        </div>

        <div className="font-mono text-xs text-[#777777] max-w-sm space-y-1">
          <p>ENGINEER IN PROGRESS // ACTIVE FOCUS</p>
          <p className="text-[#B7FF00]">SOFTWARE × HARDWARE EXPLORATION</p>
        </div>
      </div>

      {/* Matrix Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {CURRENTLY_BUILDING.map((item, idx) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            onMouseEnter={() => setCursorState({ variant: 'link', text: item.type })}
            onMouseLeave={() => setCursorState({ variant: 'default' })}
            className="group p-6 bg-[#0E0E0E] border border-[#1F1F1F] hover:border-[#B7FF00]/40 rounded-2xl space-y-6 transition-all duration-300 shadow-xl flex flex-col justify-between"
          >
            <div className="space-y-4">
              {/* Type Badge */}
              <div className="flex items-center justify-between border-b border-[#1A1A1A] pb-3 font-mono text-xs">
                <span className="text-[#B7FF00] font-extrabold tracking-widest">{item.type}</span>
                <span className="text-[#777777] text-[10px]">{item.status}</span>
              </div>

              {/* Title */}
              <h3 className="font-mono text-base font-bold text-[#F2F2EE] group-hover:text-[#B7FF00] transition-colors">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-[#777777] leading-relaxed font-sans">
                {item.description}
              </p>
            </div>

            {/* Tech Badges */}
            <div className="space-y-3 pt-4 border-t border-[#1A1A1A]">
              <span className="font-mono text-[10px] text-[#777777] block uppercase">FOCUS TECH</span>
              <div className="flex flex-wrap gap-1.5">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] bg-[#161616] text-[#A0A0A0] px-2 py-0.5 rounded border border-[#222222]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
