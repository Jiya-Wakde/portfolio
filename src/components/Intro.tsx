import React from 'react';
import { motion } from 'framer-motion';
import { Terminal, Code2, Wrench } from 'lucide-react';
import { CursorState } from './CustomCursor';

interface IntroProps {
  setCursorState: (state: CursorState) => void;
}

export const Intro: React.FC<IntroProps> = ({ setCursorState }) => {
  return (
    <section className="relative py-24 px-4 md:px-8 border-t border-b border-[#1A1A1A] bg-[#0A0A0A]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Label & Metadata */}
        <div className="lg:col-span-4 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#181818] border border-[#2B2B2B] rounded-full font-mono text-xs text-[#B7FF00]">
            <Terminal className="w-3.5 h-3.5" />
            <span>01 // PHILOSOPHY</span>
          </div>

          <h3 className="font-mono text-xs text-[#777777] uppercase tracking-widest leading-relaxed">
            CORE APPROACH TO ENGINEERING
          </h3>

          <div className="p-5 bg-[#0E0E0E] border border-[#1F1F1F] rounded-xl space-y-3 font-mono text-xs text-[#777777]">
            <div className="flex items-center justify-between text-[#F2F2EE]">
              <span className="flex items-center gap-2">
                <Code2 className="w-4 h-4 text-[#B7FF00]" /> THEORY
              </span>
              <span>15%</span>
            </div>
            <div className="w-full bg-[#1F1F1F] h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#777777] h-full w-[15%]" />
            </div>

            <div className="flex items-center justify-between text-[#F2F2EE] pt-2">
              <span className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-[#B7FF00]" /> BUILDING & EXPERIMENTING
              </span>
              <span className="text-[#B7FF00] font-bold">85%</span>
            </div>
            <div className="w-full bg-[#1F1F1F] h-1.5 rounded-full overflow-hidden">
              <div className="bg-[#B7FF00] h-full w-[85%]" />
            </div>
          </div>
        </div>

        {/* Right Column Statement */}
        <div className="lg:col-span-8 space-y-8">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#F2F2EE] leading-[1.05]"
            onMouseEnter={() => setCursorState({ variant: 'link', text: 'MINDSET' })}
            onMouseLeave={() => setCursorState({ variant: 'default' })}
          >
            I BUILD THINGS <br />
            <span className="text-[#B7FF00] underline underline-offset-8 decoration-[#B7FF00]/30">
              TO UNDERSTAND
            </span>{' '}
            <br />
            HOW THEY WORK.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-base sm:text-lg text-[#777777] max-w-2xl leading-relaxed font-sans"
          >
            Software and hardware are best understood by building them from fundamental components. As a Computer Engineering student, my primary technical focus is software development, while actively experimenting with ESP32 microcontrollers and sensor interfacing to connect digital code with the physical world.
          </motion.p>
        </div>
      </div>
    </section>
  );
};
