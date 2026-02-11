import { Translations, Project, Skill } from './types';
import { 
  Code2, 
  Database, 
  Globe, 
  Server, 
  Layout, 
  Smartphone 
} from 'lucide-react';

export const COLOR_PALETTES = {
  blue: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6',
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },
  green: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },
  red: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444',
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },
  yellow: {
    50: '#fefce8',
    100: '#fef9c3',
    200: '#fef08a',
    300: '#fde047',
    400: '#facc15',
    500: '#eab308',
    600: '#ca8a04',
    700: '#a16207',
    800: '#854d0e',
    900: '#713f12',
  },
  brown: {
    50: '#efebe9',
    100: '#d7ccc8',
    200: '#bcaaa4',
    300: '#a1887f',
    400: '#8d6e63',
    500: '#795548',
    600: '#6d4c41',
    700: '#5d4037',
    800: '#4e342e',
    900: '#3e2723',
  }
};

export const TRANSLATIONS: Translations = {
  en: {
    dir: 'ltr',
    nav: {
      home: "Home",
      skills: "Skills",
      projects: "Projects",
      contact: "Contact"
    },
    hero: {
      greeting: "Hello, I'm Amin",
      role: "Full Stack Developer",
      description: "I am a web developer from Kurdistan. I have experience in web development, and I am constantly striving to learn new things to improve my projects and advance my career.",
      ctaPrimary: "View Projects",
      ctaSecondary: "Contact Me"
    },
    skills: {
      title: "Technical Proficiency",
      subtitle: "My technical toolkit and expertise"
    },
    projects: {
      title: "Featured Projects",
      subtitle: "A selection of my recent work",
      viewDemo: "Live Demo",
      viewCode: "Source Code"
    },
    contact: {
      title: "Get In Touch",
      subtitle: "Have a project in mind? Let's talk.",
      nameLabel: "Full Name",
      namePlaceholder: "Enter your name here",
      emailLabel: "Your Email",
      messageLabel: "Message",
      sendButton: "Send Message",
      successMessage: "Thanks! I'll get back to you soon."
    },
    footer: {
      copyright: "© 2026 Amin Dev. All rights reserved."
    }
  },
  ku: {
    dir: 'rtl',
    nav: {
      home: "سەرەتا",
      skills: "شارەزاییەکان",
      projects: "پڕۆژەکان",
      contact: "پەیوەندی"
    },
    hero: {
      greeting: "سڵاو، من ئەمینم",
      role: "گەشەپێدەری فوول ستاک",
      description: "من گەشەپێدەری وێبم و خەڵکی کوردستانم، من لە بواری گەشەپێدانی وێبدا ئەزموونم هەیە، بەردەوام لە هەوڵی فێربوونی شتی نوێدام بۆ باشترکردنی پڕۆژەکانم و بەرەوپێشبردنی کارەکانم.",
      ctaPrimary: "پڕۆژەکان ببینە",
      ctaSecondary: "پەیوەندیم پێوە بکە"
    },
    skills: {
      title: "توانا تەکنیکییەکان",
      subtitle: "کەرەستە و شارەزاییە تەکنیکییەکانم"
    },
    projects: {
      title: "پڕۆژە هەڵبژێردراوەکان",
      subtitle: "کۆمەڵێک لە کارە نوێیەکانم",
      viewDemo: "بینینی ڕاستەوخۆ",
      viewCode: "کۆدی سەرچاوە"
    },
    contact: {
      title: "پەیوەندی بکە",
      subtitle: "پڕۆژەیەکت هەیە؟ با قسە بکەین.",
      nameLabel: "ناوی تەواو",
      namePlaceholder: "ناوەکەت لێرە بنووسە",
      emailLabel: "ئیمەیڵەکەت",
      messageLabel: "نامە",
      sendButton: "نامەکە بنێرە",
      successMessage: "سوپاس! بەزووترین کات وەڵامت دەدەمەوە."
    },
    footer: {
      copyright: "© ٢٠٢٦ ئەمین دێڤ. هەموو مافەکان پارێزراون."
    }
  },
  ar: {
    dir: 'rtl',
    nav: {
      home: "الرئيسية",
      skills: "المهارات",
      projects: "المشاريع",
      contact: "اتصل بنا"
    },
    hero: {
      greeting: "مرحباً، أنا أمین",
      role: "مطور ويب شامل",
      description: "أنا مطور ويب من كردستان. لدي خبرة في مجال تطوير الويب، وأسعى دائمًا لتعلم أشياء جديدة لتحسين مشاريعي وتطوير عملي.",
      ctaPrimary: "عرض المشاريع",
      ctaSecondary: "تواصل معي"
    },
    skills: {
      title: "الخبرة التقنية",
      subtitle: "أدواتي وخبراتي التقنية"
    },
    projects: {
      title: "مشاريع مميزة",
      subtitle: "مجموعة مختارة من أعمالي الأخيرة",
      viewDemo: "عرض حي",
      viewCode: "الكود المصدري"
    },
    contact: {
      title: "تواصل معي",
      subtitle: "هل لديك مشروع في ذهنك؟ لنتحدث.",
      nameLabel: "الاسم الكامل",
      namePlaceholder: "أدخل اسمك هنا",
      emailLabel: "بريدك الإلكتروني",
      messageLabel: "الرسالة",
      sendButton: "إرسال الرسالة",
      successMessage: "شكراً! سأرد عليك قريباً."
    },
    footer: {
      copyright: "© ٢٠٢٦ أمين ديف. جميع الحقوق محفوظة."
    }
  }
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Huda Library",
    description: "Developed a digital library system using Python Flask and Bootstrap. The project supports bilingualism (Kurdish/Arabic) and includes features such as: Dark Mode, student testing system, and responsive design.",
    tags: ["Python Flask", "JavaScript", "Tailwind", "Bootstrap 5","Responsive Design", "RTL Support", "Using AI", "Dark Mode", "Reponsive Design"],
    image: "/image/HudaL.jpg",
    demoLink: "https://maktabahuda.netlify.app/",
    repoLink: "#",
  },
  {
    id: 2,
    title: "Portfolio Website",
    description: "This portfolio website is built using HTML, CSS, and JavaScript. It features a fully responsive design that works smoothly across mobile, tablet, and desktop devices.",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    image: "/image/Portfolio.jpg",
    demoLink: "https://aminit.netlify.app/",
    repoLink: "https://github.com/AminKurdish/Portfolio-Web"
  },
    {
    id: 3,
    title: "Lumani Links",
    description: "Designing a Lumani Links for easy finding a social midea links for Componey or Personal.",
    tags: ["Tailwind", "React", "JavaScript", "Responsive Design", "Using AI", "Dark Mode", "Bootstrap 5"],
    image: "/image/lumaniL.png",
    demoLink: "#",
    repoLink: "#"
  },
];

export const SKILL_SET = [
  { name: "Frontend", icon: Layout, level: 90 },
  { name: "Backend", icon: Server, level: 85 },
  { name: "Database", icon: Database, level: 80 },
  { name: "Mobile", icon: Smartphone, level: 70 },
  // { name: "Cloud/DevOps", icon: Globe, level: 75 },
  { name: "Algorithms", icon: Code2, level: 85 },
];