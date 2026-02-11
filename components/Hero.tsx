import React from 'react';
import { TranslationContent } from '../types';
import { ArrowDown, Facebook, Send, MessageCircle, ArrowRight } from 'lucide-react';
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

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-slate-50 dark:bg-slate-900 pt-20 pb-10">
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
            
            {/* Social Icons */}
            <div className="flex items-center justify-center gap-6 mb-10">
              <a href="https://www.facebook.com/share/16us14JKgR/" target="_blank" className="text-slate-500 hover:text-blue-600 transition-colors transform hover:scale-110" title="Facebook">
                <Facebook className="w-8 h-8" />
              </a>
              <a href="https://t.me/D4RK_IT?text=Hello%20from%20my%20website" target="_blank"  className="text-slate-500 hover:text-sky-500 transition-colors transform hover:scale-110" title="Telegram">
                <Send className="w-8 h-8" />
              </a>
              <a href="https://wa.me/9647826052788?text=Hello%20from%20my%20website"
              target="_blank" className="text-slate-500 hover:text-green-500 transition-colors transform hover:scale-110" title="WhatsApp">
                <MessageCircle className="w-8 h-8" />
              </a>
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

              {/* Decorative Arrow positioned lower */}

              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="w-full sm:w-auto px-10 py-4 rounded-lg border-2 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-white hover:border-primary-600 dark:hover:border-primary-500 hover:text-primary-600 dark:hover:text-primary-500 font-medium transition-all text-center"
              >
                {t.hero.ctaSecondary}
              </a>
            </div>
          </motion.div>

        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden md:block">
           <a 
             href="#skills" 
             onClick={(e) => scrollToSection(e, 'skills')}
             className="text-slate-400 hover:text-primary-500 transition-colors"
           >
             <ArrowDown className="w-6 h-6" />
           </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;