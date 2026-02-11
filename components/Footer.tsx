import React from 'react';
import { TranslationContent } from '../types';
import { Github, Send } from 'lucide-react';

interface FooterProps {
  t: TranslationContent;
}

const Footer: React.FC<FooterProps> = ({ t }) => {
  return (
    <footer className="bg-white dark:bg-slate-950 py-8 border-t border-slate-200 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 dark:text-slate-400 text-sm text-center md:text-left rtl:md:text-right">
          {t.footer.copyright}
        </p>
        <div className="flex space-x-6 rtl:space-x-reverse">
          <a href="https://github.com/AminKurdish" target="_blank" className="text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors" title="Github">
            <Github className="w-5 h-5" />
          </a>
          <a href="https://t.me/D4RK_IT?text=Hello%20from%20my%20website" target="_blank" className="text-slate-400 hover:text-sky-500 transition-colors" title="Telegram">
            <Send className="w-5 h-5" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;