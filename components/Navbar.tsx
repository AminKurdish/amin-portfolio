import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Language, TranslationContent } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (l: Language) => void;
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  t: TranslationContent;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, theme, toggleTheme, t }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: t.nav.home, href: '#home' },
    { label: t.nav.skills, href: '#skills' },
    { label: t.nav.projects, href: '#projects' },
    { label: t.nav.contact, href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg py-2' 
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
             <div className="text-2xl font-bold flex items-center">
               <motion.span
                 animate={{
                   color: theme === 'dark' 
                     ? ["#ffffff", "var(--color-primary-400)", "#ffffff"] 
                     : ["#1e293b", "var(--color-primary-600)", "#1e293b"]
                 }}
                 transition={{
                   duration: 4,
                   repeat: Infinity,
                   ease: "easeInOut"
                 }}
                 className="mr-1 rtl:mr-0 rtl:ml-1"
               >
                 Amin
               </motion.span>
               <span className="text-slate-800 dark:text-white">Dev</span>
             </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <a 
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-slate-600 dark:text-slate-300 hover:text-primary-600 dark:hover:text-primary-400 font-medium transition-colors cursor-pointer"
              >
                {link.label}
              </a>
            ))}

            <div className="flex items-center space-x-4 rtl:space-x-reverse border-l rtl:border-l-0 rtl:border-r border-slate-200 dark:border-slate-700 pl-4 rtl:pl-0 rtl:pr-4">
              {/* Language Switcher */}
              <div className="relative group">
                <button className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
                  <Globe className="w-5 h-5 text-slate-600 dark:text-slate-300" />
                </button>
                <div className="absolute right-0 rtl:right-auto rtl:left-0 mt-2 w-32 bg-white dark:bg-slate-800 rounded-lg shadow-xl py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all transform origin-top-right">
                  <button 
                    onClick={() => setLang('en')} 
                    className={`block w-full text-left rtl:text-right px-4 py-2 text-sm ${lang === 'en' ? 'text-primary-600 font-bold' : 'text-slate-700 dark:text-slate-200'}`}
                  >
                    English
                  </button>
                  <button 
                    onClick={() => setLang('ku')} 
                    className={`block w-full text-left rtl:text-right px-4 py-2 text-sm ${lang === 'ku' ? 'text-primary-600 font-bold' : 'text-slate-700 dark:text-slate-200'}`}
                  >
                    Kurdish (KU)
                  </button>
                  <button 
                    onClick={() => setLang('ar')} 
                    className={`block w-full text-left rtl:text-right px-4 py-2 text-sm ${lang === 'ar' ? 'text-primary-600 font-bold' : 'text-slate-700 dark:text-slate-200'}`}
                  >
                    Arabic (AR)
                  </button>
                </div>
              </div>

              {/* Theme Toggle */}
              <button 
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
                aria-label="Toggle Dark Mode"
              >
                {theme === 'light' ? (
                  <Moon className="w-5 h-5 text-slate-600" />
                ) : (
                  <Sun className="w-5 h-5 text-yellow-400" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu with Framer Motion Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-white dark:bg-slate-900 shadow-xl border-t border-slate-100 dark:border-slate-800 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-primary-600 cursor-pointer"
                  onClick={(e) => handleNavClick(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="pt-4 pb-4 border-t border-slate-200 dark:border-slate-700">
              <div className="flex items-center justify-around px-5">
                <div className="flex items-center space-x-4 rtl:space-x-reverse">
                   <button onClick={() => setLang('en')} className={`text-sm font-medium ${lang === 'en' ? 'text-primary-600' : 'text-slate-500'}`}>EN</button>
                   <button onClick={() => setLang('ku')} className={`text-sm font-medium ${lang === 'ku' ? 'text-primary-600' : 'text-slate-500'}`}>KU</button>
                   <button onClick={() => setLang('ar')} className={`text-sm font-medium ${lang === 'ar' ? 'text-primary-600' : 'text-slate-500'}`}>AR</button>
                </div>
                <button 
                  onClick={toggleTheme}
                  className="p-2 rounded-full bg-slate-100 dark:bg-slate-800"
                >
                   {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5 text-yellow-400" />}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;