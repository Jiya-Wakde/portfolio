import React from 'react';
import { ArrowUp, Terminal, Code2 } from 'lucide-react';
import { sound } from '../utils/sound';
import { CursorState } from './CustomCursor';

interface FooterProps {
  setCursorState: (state: CursorState) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCursorState }) => {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#1F1F1F] bg-[#070707] py-12 px-4 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left Branding & Micro Status */}
        <div className="space-y-2 text-center md:text-left">
          <div className="font-mono text-sm font-bold text-[#F2F2EE] flex items-center justify-center md:justify-start gap-2">
            <span className="w-2 h-2 rounded-full bg-[#B7FF00]" />
            JIYA WAKDE <span className="text-[#777777] font-normal">// ENGINEER IN PROGRESS</span>
          </div>
          <p className="font-mono text-xs text-[#555555]">
            © {new Date().getFullYear()} JIYA WAKDE - EVOLVING DIGITAL LAB ARCHIVE.
          </p>
        </div>


        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          onMouseEnter={() => setCursorState({ variant: 'link', text: 'TOP' })}
          onMouseLeave={() => setCursorState({ variant: 'default' })}
          className="flex items-center gap-2 bg-[#121212] hover:bg-[#B7FF00] text-[#777777] hover:text-[#0A0A0A] px-4 py-2 rounded-full border border-[#222222] font-mono text-xs font-bold transition-all"
        >
          <span>BACK TO TOP</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
};
