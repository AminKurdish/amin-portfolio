import React from 'react';
import { TranslationContent } from '../types';
import { ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
  t: TranslationContent;
}

const Hero: React.FC<HeroProps> = ({ t }) => {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const socialLinks = [
    {
      href: '/pdf/AminCV.pdf',
      label: 'CV',
      hoverColor: '#1e3a8a',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32" fill="none" className="cv-icon">
          <rect x="6" y="2" width="20" height="28" rx="3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M20 2 L20 8 L26 8" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <circle cx="13" cy="13" r="3" strokeWidth="1.6"/>
          <line x1="18" y1="11" x2="23" y2="11" strokeWidth="1.6" strokeLinecap="round"/>
          <line x1="18" y1="14.5" x2="22" y2="14.5" strokeWidth="1.4" strokeLinecap="round"/>
          <line x1="9" y1="20.5" x2="23" y2="20.5" strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
          <line x1="9" y1="23.5" x2="23" y2="23.5" strokeWidth="1.4" strokeLinecap="round"/>
          <line x1="9" y1="26.5" x2="18" y2="26.5" strokeWidth="1.4" strokeLinecap="round"/>
        </svg>
      ),
    },
    {
      href: 'https://www.facebook.com/share/16us14JKgR/',
      label: 'Facebook',
      hoverColor: '#3b82f6',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" className="cv-icon">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      href: 'https://t.me/D4RK_IT?text=Hello%20from%20my%20website',
      label: 'Telegram',
      hoverColor: '#38bdf8',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" className="cv-icon">
          <path d="M22 2L11 13M22 2L15 22l-4-9-9-4 20-7z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
    {
      href: 'https://wa.me/9647826052788?text=Hello%20from%20my%20website',
      label: 'WhatsApp',
      hoverColor: '#22c55e',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" className="cv-icon">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-slate-50 dark:bg-slate-900 pt-20 pb-10">
      <style>{`
        .cv-social-icon svg path,
        .cv-social-icon svg circle,
        .cv-social-icon svg line,
        .cv-social-icon svg rect {
          stroke: #94a3b8;
          transition: stroke 0.3s;
        }
        .group:hover .cv-social-icon {
          background-color: var(--hover-bg) !important;
        }
        .group:hover .cv-social-icon svg path,
        .group:hover .cv-social-icon svg circle,
        .group:hover .cv-social-icon svg line,
        .group:hover .cv-social-icon svg rect {
          stroke: white;
        }
        @media (prefers-color-scheme: dark) {
          .cv-social-icon svg path,
          .cv-social-icon svg circle,
          .cv-social-icon svg line,
          .cv-social-icon svg rect {
            stroke: #64748b;
          }
        }
      `}</style>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-primary-100 dark:bg-primary-900/20 blur-3xl opacity-50"></div>
        <div className="absolute top-1/2 -left-24 w-72 h-72 rounded-full bg-indigo-100 dark:bg-indigo-900/20 blur-3xl opacity-50"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="flex flex-col items-center justify-center gap-8 text-center">
          
          {/* Image Section - Top */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
             <div className="relative w-56 h-56 md:w-72 md:h-72 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary-500 to-indigo-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
                <img 
                  src="/image/me.jpg" 
                  alt="Me" 
                  className="rounded-full w-full h-full object-cover border-4 border-white dark:border-slate-800 shadow-2xl relative z-10"
                />
                {/* Floating Badge */}
                <div className="absolute bottom-2 right-0 rtl:right-auto rtl:left-0 bg-white dark:bg-slate-800 px-4 py-2 rounded-xl shadow-xl z-20 flex items-center gap-2 border border-slate-100 dark:border-slate-700">
                  <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-ping"></div>
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">Available</span>
                </div>
             </div>
          </motion.div>

          {/* Text Content - Below Image */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
              {t.hero.greeting}
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 leading-relaxed px-4">
              {t.hero.description}
            </p>
            
            {/* Social Icons - All with hover animation */}
            <div className="flex items-center justify-center gap-8 mb-10">
              {socialLinks.map(({ href, label, hoverColor, icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="overflow-x-visible relative w-14 h-14 overflow-y-clip group text-center block"
                  title={label}
                >
                  {/* Icon Circle */}
                  <div
                    className="flex justify-center items-center w-14 h-14 rounded-full border-2 border-slate-300 dark:border-slate-600 transition-all duration-300 absolute top-0 group-hover:scale-[.60] group-hover:origin-top group-hover:border-transparent cv-social-icon"
                    style={{ '--hover-bg': hoverColor } as React.CSSProperties}
                  >
                    {icon}
                  </div>
                  {/* Label */}
                  <div className="absolute font-bold -bottom-10 left-1/2 text-sm text-center whitespace-nowrap transition-all duration-300 transform -translate-x-1/2 group-hover:bottom-0 text-slate-700 dark:text-slate-200">
                    {label}
                  </div>
                </a>
              ))}
            </div>
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center">
              <a 
                href="#projects" 
                onClick={(e) => scrollToSection(e, 'projects')}
                className="w-full sm:w-auto px-10 py-4 rounded-lg bg-primary-600 hover:bg-primary-700 text-white font-semibold shadow-lg shadow-primary-500/30 transition-all transform hover:-translate-y-1 text-center"
              >
                {t.hero.ctaPrimary}
              </a>
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="w-full sm:w-auto px-10 py-4 rounded-lg border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-white hover:border-primary-600 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-500 font-medium transition-all text-center"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>

            {/* Arrow Down - below buttons */}
            <div className="flex justify-center mt-6 animate-bounce">
              <a 
                href="#skills" 
                onClick={(e) => scrollToSection(e, 'skills')}
                className="text-slate-400 hover:text-primary-500 transition-colors"
              >
                <ArrowDown className="w-6 h-6" />
              </a>
            </div>
          </motion.div>

        </div>
        

      </div>
    </section>
  );
};

export default Hero;