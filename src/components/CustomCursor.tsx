import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export interface CursorState {
  text?: string;
  variant?: 'default' | 'project' | 'link' | 'hidden';
}

interface CustomCursorProps {
  cursorState: CursorState;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ cursorState }) => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if device supports fine pointer (mouse)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    document.body.classList.add('custom-cursor-active');

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', updatePosition);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.classList.remove('custom-cursor-active');
      window.removeEventListener('mousemove', updatePosition);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  const isProject = cursorState.variant === 'project';
  const isLink = cursorState.variant === 'link';

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Outer Ring / Dynamic Label */}
      <motion.div
        className={`fixed top-0 left-0 flex items-center justify-center rounded-full transition-colors duration-200 ${isProject
            ? 'bg-[#B7FF00] text-[#0A0A0A] font-mono text-xs font-bold shadow-lg shadow-[#B7FF00]/30'
            : isLink
              ? 'bg-[#F2F2EE] text-[#0A0A0A] font-mono text-[10px] font-bold'
              : 'border border-[#B7FF00]/40 bg-[#0A0A0A]/40 backdrop-blur-sm'
          }`}
        animate={{
          x: position.x - (isProject ? 36 : isLink ? 20 : 16),
          y: position.y - (isProject ? 36 : isLink ? 20 : 16),
          width: isProject ? 72 : isLink ? 40 : 32,
          height: isProject ? 72 : isLink ? 40 : 32,
          scale: cursorState.variant === 'hidden' ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 400, damping: 28, mass: 0.5 }}
      >
        {cursorState.text && (
          <motion.span
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="tracking-widest uppercase"
          >
            {cursorState.text}
          </motion.span>
        )}
      </motion.div>

      {/* Tiny Core Dot */}
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-[#B7FF00] rounded-full"
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          opacity: isProject || isLink ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 1000, damping: 50, mass: 0.1 }}
      />
    </div>
  );
};
