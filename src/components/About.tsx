import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Cpu, Compass, Scan } from 'lucide-react';
import { ABOUT_DATA } from '../data/about';
import { CursorState } from './CustomCursor';
import { sound } from '../utils/sound';

interface AboutProps {
  setCursorState: (state: CursorState) => void;
}

export const About: React.FC<AboutProps> = ({ setCursorState }) => {
  const [imageError, setImageError] = useState(false);

  return (
    <section id="about" className="py-24 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="space-y-4 border-b border-[#1F1F1F] pb-8"
      >
        <div className="flex items-center gap-2 font-mono text-xs text-[#B7FF00]">
          <User className="w-3.5 h-3.5" />
          <span>04 // ABOUT</span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
          <h2 className="text-4xl sm:text-6xl font-extrabold uppercase text-[#F2F2EE] tracking-tight">
            ABOUT <span className="text-[#B7FF00]">ME!</span>
          </h2>
          <div className="font-mono text-xs text-[#777777] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B7FF00] animate-pulse" />
            <span>OPERATOR // {ABOUT_DATA.role}</span>
          </div>
        </div>
      </motion.div>

      {/* Main Storytelling Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Asymmetric Editorial Photo & Identity */}
        <div className="lg:col-span-5 space-y-8">
          {/* Asymmetric Editorial Portrait Container */}
          <div className="relative group">
            {/* Background Offset Accent Layer */}
            <div className="absolute -inset-2 bg-gradient-to-tr from-[#B7FF00]/10 via-transparent to-[#1F1F1F]/40 rounded-3xl blur-sm -z-10 group-hover:from-[#B7FF00]/20 transition-all duration-500" />

            {/* Architectural Photo Card */}
            <div
              className="relative bg-[#0E0E0E] border border-[#262626] group-hover:border-[#B7FF00]/40 rounded-2xl p-3 sm:p-4 overflow-hidden transition-all duration-500 shadow-2xl"
              onMouseEnter={() => {
                sound.playHover();
                setCursorState({ variant: 'link', text: 'JIYA' });
              }}
              onMouseLeave={() => {
                setCursorState({ variant: 'default' });
              }}
            >
              {/* Technical Viewfinder / Corner Crosshairs */}
              <div className="absolute top-2 left-2 text-[#777777] font-mono text-[10px] select-none z-20 pointer-events-none">
                +
              </div>
              <div className="absolute top-2 right-2 text-[#777777] font-mono text-[10px] select-none z-20 pointer-events-none">
                +
              </div>
              <div className="absolute bottom-2 left-2 text-[#777777] font-mono text-[10px] select-none z-20 pointer-events-none">
                +
              </div>
              <div className="absolute bottom-2 right-2 text-[#777777] font-mono text-[10px] select-none z-20 pointer-events-none">
                +
              </div>

              {/* Top Viewfinder Annotation Strip */}
              <div className="flex items-center justify-between font-mono text-[10px] text-[#777777] px-2 py-1 border-b border-[#1F1F1F] mb-3">
                <span className="text-[#B7FF00] font-bold flex items-center gap-1">
                  <Scan className="w-3 h-3" /> FIG 01 // OPERATOR SPEC
                </span>
                <span>LOC // 20.5937° N</span>
              </div>

              {/* Photo Frame with Editorial Crop */}
              <div className="relative aspect-[4/5] w-full rounded-xl overflow-hidden bg-[#121212] border border-[#1C1C1C]">
                {!imageError ? (
                  <img
                    src={ABOUT_DATA.photo}
                    alt={ABOUT_DATA.photoAlt}
                    onError={() => setImageError(true)}
                    className="w-full h-full object-cover object-center filter grayscale-[20%] contrast-[105%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                    loading="lazy"
                  />
                ) : (
                  /* Technical Editorial Blueprint Fallback */
                  <div className="w-full h-full flex flex-col justify-between p-6 bg-[#0E0E0E] bg-tech-grid relative select-none">
                    <div className="space-y-1">
                      <span className="font-mono text-[10px] text-[#B7FF00] tracking-widest">// ASSET SPECIFICATION</span>
                      <p className="font-mono text-xs text-[#F2F2EE] font-bold">JIYA WAKDE // PORTRAIT</p>
                      <p className="font-mono text-[10px] text-[#777777]">STORAGE: public/images/Jiya Wakde_tp.png</p>
                    </div>

                    <div className="my-auto flex flex-col items-center justify-center space-y-3 py-8">
                      <div className="w-20 h-20 rounded-full border border-dashed border-[#B7FF00]/40 flex items-center justify-center text-[#B7FF00] bg-[#141414]">
                        <User className="w-8 h-8 opacity-80" />
                      </div>
                      <div className="text-center space-y-1">
                        <span className="font-mono text-[11px] text-[#F2F2EE] font-semibold">AWAITING LOCAL ASSET</span>
                        <p className="font-mono text-[9px] text-[#777777] max-w-[200px]">
                          Place <span className="text-[#B7FF00]">Jiya Wakde_tp.png</span> in <span className="text-[#F2F2EE]">public/images/</span>
                        </p>
                      </div>
                    </div>

                    <div className="flex justify-between items-center font-mono text-[9px] text-[#777777] border-t border-[#1C1C1C] pt-3">
                      <span>ASSET ID: {ABOUT_DATA.photoId}</span>
                      <span className="text-[#B7FF00]">STATUS: READY FOR DROP</span>
                    </div>
                  </div>
                )}

                {/* Subtle Scanline / Film Grain Texture Overlay */}
                <div className="absolute inset-0 bg-noise opacity-15 pointer-events-none" />

                {/* Overlapping Vertical Typography Badge */}
                <div className="absolute top-4 left-3 pointer-events-none select-none z-10 hidden sm:block">
                  <div className="bg-[#0A0A0A]/85 backdrop-blur-md border border-[#2B2B2B] px-2 py-1 rounded text-[10px] font-mono text-[#F2F2EE] font-medium tracking-wider shadow-lg">
                    {ABOUT_DATA.photoCaption}
                  </div>
                </div>

                {/* Bottom Floating Status Chip */}
                <div className="absolute bottom-3 right-3 left-3 flex items-center justify-between bg-[#0A0A0A]/90 backdrop-blur-md border border-[#2B2B2B] px-3 py-2 rounded-xl text-xs font-mono shadow-xl z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#B7FF00] animate-ping" />
                    <span className="text-[#F2F2EE] font-semibold text-[11px]">{ABOUT_DATA.role}</span>
                  </div>
                  <span className="text-[#B7FF00] text-[10px] font-bold">SOFTWARE × HW</span>
                </div>
              </div>

              {/* Bottom Card Annotation */}
              <div className="mt-3 flex items-center justify-between font-mono text-[10px] text-[#777777] px-1">
                <span>IDENTITY // JIYA WAKDE</span>
                <span className="text-[#F2F2EE]">COMPUTER ENGINEERING</span>
              </div>
            </div>
          </div>

          {/* Editorial Specs Card */}
          <div className="p-6 bg-[#0E0E0E] border border-[#1F1F1F] rounded-2xl space-y-4 shadow-xl">
            <div className="flex items-center justify-between border-b border-[#1A1A1A] pb-3">
              <span className="font-mono text-xs text-[#B7FF00] font-bold tracking-wider">04 // IDENTITY SPECS</span>
              <span className="font-mono text-xs text-[#777777]">INDIA</span>
            </div>

            <div className="space-y-2.5 font-mono text-xs">
              <div className="flex justify-between py-1 border-b border-[#141414]">
                <span className="text-[#777777]">PRIMARY TAGLINE:</span>
                <span className="text-[#B7FF00] font-bold">{ABOUT_DATA.tagline}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#141414]">
                <span className="text-[#777777]">BATCH:</span>
                <span className="text-[#F2F2EE] font-bold">{ABOUT_DATA.batch}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#141414]">
                <span className="text-[#777777]">DISCIPLINE:</span>
                <span className="text-[#F2F2EE]">COMPUTER ENGINEERING</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#141414]">
                <span className="text-[#777777]">FOCUS:</span>
                <span className="text-[#B7FF00]">SOFTWARE × HARDWARE (ESP32)</span>
              </div>
            </div>

            <div className="p-3.5 bg-[#141414] border border-[#1F1F1F] rounded-xl font-mono text-xs text-[#777777] leading-relaxed italic">
              "Building things is the fastest way to turn abstract computer science theory into spatial intuition."
            </div>
          </div>
        </div>

        {/* Right Column: Biography & Engineering Domains */}
        <div className="lg:col-span-7 space-y-10">
          <div className="space-y-5">
            <h3 className="text-2xl sm:text-4xl font-extrabold uppercase text-[#F2F2EE] leading-tight tracking-tight">
              {ABOUT_DATA.bioHeadline}
            </h3>
            <p className="text-base text-[#777777] leading-relaxed font-sans">
              {ABOUT_DATA.bioParagraph1}
            </p>
            <p className="text-base text-[#777777] leading-relaxed font-sans">
              {ABOUT_DATA.bioParagraph2}
            </p>
          </div>

          {/* I LIKE BUILDING */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs text-[#B7FF00] uppercase tracking-widest flex items-center gap-2 font-bold">
              <Cpu className="w-4 h-4 text-[#B7FF00]" /> I LIKE BUILDING
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ABOUT_DATA.likeBuilding.map((item, idx) => (
                <div
                  key={item.title}
                  onMouseEnter={() => {
                    sound.playHover();
                    setCursorState({ variant: 'link' });
                  }}
                  onMouseLeave={() => setCursorState({ variant: 'default' })}
                  className="p-5 bg-[#0E0E0E] border border-[#1F1F1F] hover:border-[#B7FF00]/40 hover:bg-[#121212] rounded-2xl space-y-2 transition-all duration-300 shadow-md group"
                >
                  <h5 className="font-mono text-xs font-bold text-[#F2F2EE] group-hover:text-[#B7FF00] flex items-center gap-2 transition-colors">
                    <span className="text-[#B7FF00] font-bold">0{idx + 1}.</span> {item.title}
                  </h5>
                  <p className="text-xs text-[#777777] font-sans leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* I LIKE UNDERSTANDING */}
          <div className="space-y-4">
            <h4 className="font-mono text-xs text-[#B7FF00] uppercase tracking-widest flex items-center gap-2 font-bold">
              <Compass className="w-4 h-4 text-[#B7FF00]" /> I LIKE UNDERSTANDING
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ABOUT_DATA.likeUnderstanding.map((item, idx) => (
                <div
                  key={item.title}
                  onMouseEnter={() => {
                    sound.playHover();
                    setCursorState({ variant: 'link' });
                  }}
                  onMouseLeave={() => setCursorState({ variant: 'default' })}
                  className="p-5 bg-[#0E0E0E] border border-[#1F1F1F] hover:border-[#B7FF00]/40 hover:bg-[#121212] rounded-2xl space-y-2 transition-all duration-300 shadow-md group"
                >
                  <h5 className="font-mono text-xs font-bold text-[#F2F2EE] group-hover:text-[#B7FF00] flex items-center gap-2 transition-colors">
                    <span className="text-[#B7FF00] font-bold">0{idx + 1}.</span> {item.title}
                  </h5>
                  <p className="text-xs text-[#777777] font-sans leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
