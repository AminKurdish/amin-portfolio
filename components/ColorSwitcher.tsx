import React, { useState } from 'react';
import { Palette, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ThemeColor } from '../types';

interface ColorSwitcherProps {
  currentColor: ThemeColor;
  onChange: (color: ThemeColor) => void;
  dir: 'ltr' | 'rtl';
}

const colors: { id: ThemeColor; value: string; label: string }[] = [
  { id: 'blue', value: '#3b82f6', label: 'Blue' },
  { id: 'green', value: '#22c55e', label: 'Dark Green' },
  { id: 'red', value: '#ef4444', label: 'Red' },
  { id: 'yellow', value: '#eab308', label: 'Yellow' },
  { id: 'brown', value: '#795548', label: 'Brown' },
];

const ColorSwitcher: React.FC<ColorSwitcherProps> = ({ currentColor, onChange, dir }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`fixed z-50 bottom-4 ${dir === 'rtl' ? 'left-4' : 'right-4'}`}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="mb-4 bg-white dark:bg-slate-800 rounded-xl shadow-xl p-3 border border-slate-200 dark:border-slate-700 flex flex-col gap-3"
          >
            {colors.map((color) => (
              <button
                key={color.id}
                onClick={() => {
                  onChange(color.id);
                  setIsOpen(false);
                }}
                className="flex items-center gap-3 w-32 p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition-colors group"
              >
                <span 
                  className="w-6 h-6 rounded-full border border-black/10 flex items-center justify-center"
                  style={{ backgroundColor: color.value }}
                >
                  {currentColor === color.id && (
                    <Check className="w-3.5 h-3.5 text-white stroke-[3px]" />
                  )}
                </span>
                <span className={`text-sm font-medium ${currentColor === color.id ? 'text-slate-900 dark:text-white' : 'text-slate-600 dark:text-slate-400 group-hover:text-slate-900 dark:group-hover:text-white'}`}>
                  {color.label}
                </span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-white dark:bg-slate-800 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 flex items-center justify-center text-slate-700 dark:text-slate-200 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
        aria-label="Change Color Theme"
      >
        <Palette className="w-6 h-6" />
      </button>
    </div>
  );
};

export default ColorSwitcher;