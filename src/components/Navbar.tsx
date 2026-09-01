import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Volume2, VolumeX, Menu, X, Terminal } from 'lucide-react';
import { sound } from '../utils/sound';
import { CursorState } from './CustomCursor';

interface NavbarProps {
  setCursorState: (state: CursorState) => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ setCursorState, activeSection }) => {
  const [time, setTime] = useState<string>('');
  const [isMuted, setIsMuted] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      };
      setTime(`${now.toLocaleTimeString('en-US', options)} IST`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const navItems = [
    { id: 'hero', label: 'HOME' },
    { id: 'work', label: 'WORK' },
    { id: 'archive', label: 'ARCHIVE' },
    { id: 'about', label: 'ABOUT' },
    { id: 'building', label: 'BUILDING' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  const handleNavClick = (id: string) => {
    sound.playClick();
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleSound = () => {
    const newState = !isMuted;
    setIsMuted(newState);
    sound.enabled = !newState;
    if (!newState) {
      sound.playOpen();
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-4 py-4 md:px-8 md:py-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left Branding Pill */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="pointer-events-auto flex items-center gap-3 bg-[#0A0A0A]/80 backdrop-blur-md border border-[#222222] px-4 py-2 rounded-full shadow-lg"
          onMouseEnter={() => setCursorState({ variant: 'link', text: 'JIYA WAKDE' })}
          onMouseLeave={() => setCursorState({ variant: 'default' })}
        >
          <div className="w-2 h-2 rounded-full bg-[#B7FF00] animate-pulse" />
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick('hero');
            }}
            className="font-mono text-xs font-bold tracking-wider text-[#F2F2EE] hover:text-[#B7FF00] transition-colors"
          >
            JIYA WAKDE <span className="text-[#777777] font-normal">// ENGINEER IN PROGRESS</span>
          </a>
        </motion.div>

        {/* Center Nav Links (Desktop) */}
        <motion.nav
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="hidden md:flex pointer-events-auto items-center gap-1 bg-[#0A0A0A]/80 backdrop-blur-md border border-[#222222] px-3 py-1.5 rounded-full shadow-lg"
        >
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                onMouseEnter={() => {
                  sound.playHover();
                  setCursorState({ variant: 'link' });
                }}
                onMouseLeave={() => setCursorState({ variant: 'default' })}
                className={`relative px-4 py-1.5 font-mono text-xs font-medium rounded-full transition-colors ${
                  isActive ? 'text-[#0A0A0A] font-bold' : 'text-[#777777] hover:text-[#F2F2EE]'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeNavBg"
                    className="absolute inset-0 bg-[#B7FF00] rounded-full -z-10"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                {item.label}
              </button>
            );
          })}
        </motion.nav>

        {/* Right Info & Sound Controls */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="pointer-events-auto flex items-center gap-3"
        >
          {/* Time annotation pill */}
          <div className="hidden lg:flex items-center gap-2 bg-[#0A0A0A]/80 backdrop-blur-md border border-[#222222] px-3.5 py-2 rounded-full font-mono text-xs text-[#777777]">
            <Terminal className="w-3.5 h-3.5 text-[#B7FF00]" />
            <span>{time || 'INDIA // IST'}</span>
          </div>

          {/* Sound Synthesizer Toggle */}
          <button
            onClick={toggleSound}
            onMouseEnter={() => setCursorState({ variant: 'link', text: isMuted ? 'UNMUTE' : 'MUTE' })}
            onMouseLeave={() => setCursorState({ variant: 'default' })}
            className="flex items-center justify-center w-10 h-10 bg-[#0A0A0A]/80 backdrop-blur-md border border-[#222222] rounded-full text-[#777777] hover:text-[#B7FF00] hover:border-[#B7FF00]/40 transition-colors"
            title={isMuted ? 'Enable UI Audio Feedback' : 'Disable Audio Feedback'}
          >
            {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 text-[#B7FF00]" />}
          </button>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => {
              sound.playClick();
              setMobileMenuOpen(!mobileMenuOpen);
            }}
            className="md:hidden flex items-center justify-center w-10 h-10 bg-[#0A0A0A]/80 backdrop-blur-md border border-[#222222] rounded-full text-[#F2F2EE]"
          >
            {mobileMenuOpen ? <X className="w-5 h-5 text-[#B7FF00]" /> : <Menu className="w-5 h-5" />}
          </button>
        </motion.div>
      </div>

      {/* Mobile Drawer Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="pointer-events-auto md:hidden mt-3 bg-[#0E0E0E] border border-[#222222] rounded-2xl p-6 shadow-2xl space-y-4"
          >
            <div className="flex items-center justify-between border-b border-[#222222] pb-3 font-mono text-xs text-[#777777]">
              <span>NAVIGATION MENU</span>
              <span className="text-[#B7FF00]">{time}</span>
            </div>
            <div className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left py-3 px-4 font-mono text-sm rounded-lg transition-colors flex items-center justify-between ${
                    activeSection === item.id
                      ? 'bg-[#B7FF00] text-[#0A0A0A] font-bold'
                      : 'text-[#F2F2EE] hover:bg-[#181818]'
                  }`}
                >
                  <span>{item.label}</span>
                  <span className="text-xs opacity-60">↗</span>
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
