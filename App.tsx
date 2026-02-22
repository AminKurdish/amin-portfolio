import React, { useState, useEffect } from 'react';
import { Language, ThemeColor } from './types';
import { TRANSLATIONS, COLOR_PALETTES } from './constants';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ColorSwitcher from './components/ColorSwitcher';
import Preloader from './components/Preloader';
import { Analytics } from "@vercel/analytics/react";

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize state from local storage or defaults
  // Set default language to Kurdish ('ku')
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem('portfolio-lang');
    return (saved === 'en' || saved === 'ku' || saved === 'ar') ? saved : 'ku';
  });

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (typeof window !== 'undefined' && window.localStorage) {
       const saved = localStorage.getItem('portfolio-theme');
       if (saved) return saved as 'light' | 'dark';
       return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'light';
  });

  const [primaryColor, setPrimaryColor] = useState<ThemeColor>(() => {
    const saved = localStorage.getItem('portfolio-color');
    return (saved === 'blue' || saved === 'green' || saved === 'red' || saved === 'yellow' || saved === 'brown') ? saved : 'blue';
  });

  const t = TRANSLATIONS[lang];

  // Loading effect
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    localStorage.setItem('portfolio-lang', lang);
    document.documentElement.dir = t.dir;
    document.documentElement.lang = lang;
  }, [lang, t.dir]);

  useEffect(() => {
    localStorage.setItem('portfolio-theme', theme);
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  // Apply CSS variables for the selected color palette
  useEffect(() => {
    localStorage.setItem('portfolio-color', primaryColor);
    const palette = COLOR_PALETTES[primaryColor];
    const root = document.documentElement;
    
    Object.entries(palette).forEach(([shade, value]) => {
      root.style.setProperty(`--color-primary-${shade}`, value as string);
    });
  }, [primaryColor]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 transition-colors duration-300">
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        theme={theme} 
        toggleTheme={toggleTheme} 
        t={t}
      />
      
      <main>
        <Hero t={t} />
        <Skills t={t} />
        <Projects t={t} />
        <Contact t={t} lang={lang} />
      </main>

      <Footer t={t} />
      
      <ColorSwitcher 
        currentColor={primaryColor} 
        onChange={setPrimaryColor} 
        dir={t.dir}
      />
      <Analytics />
    </div>
  );
};

export default App;