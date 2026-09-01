import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, FileText, Copy, Check, Send } from 'lucide-react';
import { ABOUT_DATA } from '../data/about';
import { sound } from '../utils/sound';
import { CursorState } from './CustomCursor';

interface ContactProps {
  setCursorState: (state: CursorState) => void;
}

export const Contact: React.FC<ContactProps> = ({ setCursorState }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    sound.playClick();
    navigator.clipboard.writeText(ABOUT_DATA.socials.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-8 max-w-7xl mx-auto space-y-16">
      {/* Header */}
      <div className="space-y-4 border-b border-[#1F1F1F] pb-8">
        <div className="flex items-center gap-2 font-mono text-xs text-[#B7FF00]">
          <Send className="w-3.5 h-3.5" />
          <span>07 // CONTACT</span>
        </div>

        <h2 className="text-4xl sm:text-7xl font-extrabold uppercase text-[#F2F2EE] tracking-tight leading-none">
          LET'S BUILD <br />
          <span className="text-[#B7FF00]">SOMETHING.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column Description & Copy Email Pill */}
        <div className="lg:col-span-7 space-y-8">
          <p className="text-lg sm:text-xl text-[#777777] leading-relaxed font-sans max-w-2xl">
            Whether you have a technical question, an open-source collaboration proposal, an internship role, or simply want to chat about hardware & software — my inbox is always open.
          </p>

          {/* Email Copy Card */}
          <div className="p-6 bg-[#0E0E0E] border border-[#222222] rounded-3xl space-y-4 shadow-2xl">
            <span className="font-mono text-xs text-[#777777] block uppercase">// DIRECT EMAIL</span>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 p-4 bg-[#141414] border border-[#1F1F1F] rounded-2xl">
              <span className="font-mono text-sm sm:text-base font-bold text-[#F2F2EE] truncate">
                {ABOUT_DATA.socials.email}
              </span>

              <button
                onClick={handleCopyEmail}
                onMouseEnter={() => setCursorState({ variant: 'link', text: copied ? 'COPIED' : 'COPY' })}
                onMouseLeave={() => setCursorState({ variant: 'default' })}
                className={`flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-mono text-xs font-bold transition-all ${copied
                  ? 'bg-[#B7FF00] text-[#0A0A0A]'
                  : 'bg-[#222222] hover:bg-[#B7FF00] text-[#F2F2EE] hover:text-[#0A0A0A]'
                  }`}
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4" /> COPIED TO CLIPBOARD
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" /> COPY EMAIL address
                  </>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Right Column Social Action Cards */}
        <div className="lg:col-span-5 space-y-4">
          {/* GitHub Card */}
          <a
            href={ABOUT_DATA.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setCursorState({ variant: 'link', text: 'GITHUB' })}
            onMouseLeave={() => setCursorState({ variant: 'default' })}
            className="flex items-center justify-between p-6 bg-[#0E0E0E] hover:bg-[#151515] border border-[#1F1F1F] hover:border-[#B7FF00]/40 rounded-2xl group transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#161616] rounded-xl text-[#F2F2EE] group-hover:text-[#B7FF00]">
                <Github className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-mono text-sm font-bold text-[#F2F2EE]">GITHUB REPOSITORIES</h4>
                <p className="font-mono text-xs text-[#777777]">@jiya-wakde // Open Source Codebase</p>
              </div>
            </div>
            <span className="font-mono text-xs text-[#777777] group-hover:text-[#B7FF00] group-hover:translate-x-1 transition-all">
              ↗
            </span>
          </a>

          {/* LinkedIn Card */}
          <a
            href={ABOUT_DATA.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setCursorState({ variant: 'link', text: 'LINKEDIN' })}
            onMouseLeave={() => setCursorState({ variant: 'default' })}
            className="flex items-center justify-between p-6 bg-[#0E0E0E] hover:bg-[#151515] border border-[#1F1F1F] hover:border-[#B7FF00]/40 rounded-2xl group transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#161616] rounded-xl text-[#F2F2EE] group-hover:text-[#B7FF00]">
                <Linkedin className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-mono text-sm font-bold text-[#F2F2EE]">LINKEDIN PROFILE</h4>
                <p className="font-mono text-xs text-[#777777]">Professional Network & Journey</p>
              </div>
            </div>
            <span className="font-mono text-xs text-[#777777] group-hover:text-[#B7FF00] group-hover:translate-x-1 transition-all">
              ↗
            </span>
          </a>

          {/* Resume View Card */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => {
              sound.playClick();
            }}
            onMouseEnter={() => setCursorState({ variant: 'link', text: 'RESUME' })}
            onMouseLeave={() => setCursorState({ variant: 'default' })}
            className="flex items-center justify-between p-6 bg-[#0E0E0E] hover:bg-[#151515] border border-[#1F1F1F] hover:border-[#B7FF00]/40 rounded-2xl group transition-all"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 bg-[#161616] rounded-xl text-[#F2F2EE] group-hover:text-[#B7FF00]">
                <FileText className="w-6 h-6" />
              </div>

              <div>
                <h4 className="font-mono text-sm font-bold text-[#F2F2EE]">
                  JIYA WAKDE RESUME
                </h4>
                <p className="font-mono text-xs text-[#777777]">
                  VIEW RESUME PDF
                </p>
              </div>
            </div>

            <span className="font-mono text-xs text-[#777777] group-hover:text-[#B7FF00] group-hover:translate-x-1 transition-all">
              ↗
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
