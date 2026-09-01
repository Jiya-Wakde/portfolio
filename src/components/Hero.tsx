import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowDownRight, Terminal, Cpu, Sparkles, Layers } from 'lucide-react';
import { sound } from '../utils/sound';
import { CursorState } from './CustomCursor';

interface HeroProps {
  setCursorState: (state: CursorState) => void;
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ setCursorState, onExploreClick }) => {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth - 0.5) * 30; // max 15px shift
      const y = (e.clientY / innerHeight - 0.5) * 30;
      setMouseOffset({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const letterVariants = {
    initial: { y: 100, opacity: 0 },
    animate: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.08,
        duration: 0.8,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  const firstNameLetters = ['J', 'I', 'Y', 'A'];
  const lastNameLetters = ['W', 'A', 'K', 'D', 'E'];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between pt-28 pb-12 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden select-none"
    >
      {/* Background Subtle Tech Markings */}
      <div className="absolute top-1/4 right-8 pointer-events-none opacity-20 font-mono text-[10px] text-[#777777] hidden md:block space-y-1">
        <p>SYS.ID // JIYA_WAKDE.EXE</p>
        <p>LOC // 20.5937° N, 78.9629° E</p>
        <p>BUILD.ENV // REACT_VITE_TS</p>
        <p>STATUS // IN_PROGRESS</p>
      </div>

      {/* Top Editorial Annotation Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 border-b border-[#1F1F1F] pb-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="space-y-1"
        >
          <span className="font-mono text-[10px] text-[#777777] uppercase tracking-widest">01 // IDENTITY</span>
          <p className="font-mono text-xs text-[#F2F2EE] font-medium flex items-center gap-1.5">
            <Cpu className="w-3.5 h-3.5 text-[#B7FF00]" />
            COMPUTER ENGINEERING STUDENT
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-1"
        >
          <span className="font-mono text-[10px] text-[#777777] uppercase tracking-widest">02 // DOMAINS</span>
          <p className="font-mono text-xs text-[#F2F2EE] font-medium flex items-center gap-1.5">
            <Layers className="w-3.5 h-3.5 text-[#B7FF00]" />
            WEB / SOFTWARE / HW / AI
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="space-y-1 hidden md:block"
        >
          <span className="font-mono text-[10px] text-[#777777] uppercase tracking-widest">03 // LOCATION & CLASS</span>
          <p className="font-mono text-xs text-[#F2F2EE] font-medium">INDIA / CCoEWN BATCH OF 2028</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="space-y-1 text-right md:text-left"
        >
          <span className="font-mono text-[10px] text-[#777777] uppercase tracking-widest">04 // STATUS</span>
          <p className="font-mono text-xs text-[#B7FF00] font-bold flex items-center justify-end md:justify-start gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B7FF00] animate-ping" />
            CURRENTLY BUILDING
          </p>
        </motion.div>
      </div>

      {/* Main Visual Display Typography Center */}
      <div className="my-auto py-12 md:py-20 relative">
        {/* Large Name Display */}
        <div className="relative overflow-hidden">
          <motion.div
            className="flex flex-col lg:flex-row items-start lg:items-center justify-between font-extrabold tracking-tighter text-white leading-none gap-4"
            style={{
              transform: `translate3d(${mouseOffset.x}px, ${mouseOffset.y}px, 0)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            <div className="flex flex-wrap items-baseline gap-x-4 sm:gap-x-6 text-[14vw] sm:text-[11vw] md:text-[9.5vw] lg:text-[7.8vw] xl:text-[7.2vw] font-black uppercase text-[#F2F2EE]">
              <div className="flex">
                {firstNameLetters.map((char, index) => (
                  <motion.span
                    key={`first-${index}`}
                    custom={index}
                    variants={letterVariants}
                    initial="initial"
                    animate="animate"
                    onMouseEnter={() => {
                      sound.playHover();
                      setCursorState({ variant: 'project', text: 'JIYA' });
                    }}
                    onMouseLeave={() => setCursorState({ variant: 'default' })}
                    className="hover:text-[#B7FF00] transition-colors duration-300 inline-block cursor-pointer"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
              <div className="flex text-[#F2F2EE]">
                {lastNameLetters.map((char, index) => (
                  <motion.span
                    key={`last-${index}`}
                    custom={index + 4}
                    variants={letterVariants}
                    initial="initial"
                    animate="animate"
                    onMouseEnter={() => {
                      sound.playHover();
                      setCursorState({ variant: 'project', text: 'WAKDE' });
                    }}
                    onMouseLeave={() => setCursorState({ variant: 'default' })}
                    className="hover:text-[#B7FF00] transition-colors duration-300 inline-block cursor-pointer"
                  >
                    {char}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Side Floating Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 }}
              className="hidden lg:flex flex-col items-end text-right border-l-2 border-[#B7FF00] pl-6 py-2"
            >
              <span className="font-mono text-xs text-[#B7FF00] font-bold tracking-widest">// VER 0.26</span>
              <p className="font-mono text-sm text-[#F2F2EE] font-semibold max-w-[200px] mt-1">
                Evolving Digital Engineering Notebook
              </p>
              <span className="font-mono text-xs text-[#777777] mt-2">14+ PROJECTS RECORDED</span>
            </motion.div>
          </motion.div>
        </div>

        {/* Central Tagline Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-6 md:-mt-4 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="inline-block bg-[#B7FF00] text-[#0A0A0A] font-extrabold text-2xl sm:text-4xl md:text-5xl lg:text-6xl px-4 py-2 uppercase tracking-tight shadow-xl">
            ENGINEER IN PROGRESS
          </div>

          <p className="font-mono text-xs sm:text-sm text-[#777777] max-w-md leading-relaxed">
            Not presenting a finished product — but documenting an ongoing journey of learning, building, breaking, and solving.
          </p>
        </motion.div>
      </div>

      {/* Hero Footer Action Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-t border-[#1F1F1F] pt-6"
      >
        <div className="flex items-center gap-4">
          <button
            onClick={() => {
              sound.playClick();
              onExploreClick();
            }}
            onMouseEnter={() => setCursorState({ variant: 'link', text: 'GO' })}
            onMouseLeave={() => setCursorState({ variant: 'default' })}
            className="group flex items-center gap-3 bg-[#F2F2EE] text-[#0A0A0A] hover:bg-[#B7FF00] px-6 py-3.5 rounded-full font-mono text-xs font-bold transition-all duration-300 shadow-lg"
          >
            <span>EXPLORE WORK</span>
            <ArrowDownRight className="w-4 h-4 group-hover:rotate-90 transition-transform duration-300" />
          </button>

          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              sound.playClick();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            onMouseEnter={() => setCursorState({ variant: 'link' })}
            onMouseLeave={() => setCursorState({ variant: 'default' })}
            className="flex items-center gap-2 border border-[#2B2B2B] hover:border-[#B7FF00] text-[#F2F2EE] hover:text-[#B7FF00] px-6 py-3.5 rounded-full font-mono text-xs font-medium transition-all"
          >
            <span>CONTACT</span>
            <span className="text-[#777777]">↗</span>
          </a>
        </div>
      </motion.div>
    </section>
  );
};
