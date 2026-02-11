export type Language = 'en' | 'ku' | 'ar';
export type ThemeColor = 'blue' | 'green' | 'red' | 'yellow' | 'brown';

export interface NavItem {
  label: string;
  href: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  demoLink: string;
  repoLink: string;
}

export interface Skill {
  name: string;
  level: number; // 0-100
  icon: string; // lucide icon name
}

export interface TranslationContent {
  dir: 'ltr' | 'rtl';
  nav: {
    home: string;
    skills: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    role: string;
    description: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  skills: {
    title: string;
    subtitle: string;
  };
  projects: {
    title: string;
    subtitle: string;
    viewDemo: string;
    viewCode: string;
  };
  contact: {
    title: string;
    subtitle: string;
    nameLabel: string;
    namePlaceholder: string;
    emailLabel: string;
    messageLabel: string;
    sendButton: string;
    successMessage: string;
  };
  footer: {
    copyright: string;
  }
}

export type Translations = Record<Language, TranslationContent>;