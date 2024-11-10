import React, { createContext, useContext, useState } from 'react';

type Language = 'en' | 'hi' | 'or';

interface Translations {
  [key: string]: {
    en: string;
    hi: string;
    or: string;
  };
}

const translations: Translations = {
  dashboard: {
    en: 'Dashboard',
    hi: 'डैशबोर्ड',
    or: 'ଡ୍ୟାସବୋର୍ଡ',
  },
  goals: {
    en: 'Goals',
    hi: 'लक्ष्य',
    or: 'ଲକ୍ଷ୍ୟ',
  },
  learn: {
    en: 'Learn',
    hi: 'सीखें',
    or: 'ଶିଖନ୍ତୁ',
  },
  calculator: {
    en: 'Calculator',
    hi: 'कैलकुलेटर',
    or: 'କ୍ୟାଲକୁଲେଟର',
  },
  banking: {
    en: 'Banking',
    hi: 'बैंकिंग',
    or: 'ବ୍ୟାଙ୍କିଙ୍ଗ',
  },
  welcome: {
    en: 'Namaste, Lakshmi 🙏',
    hi: 'नमस्ते, लक्ष्मी 🙏',
    or: 'ନମସ୍କାର, ଲକ୍ଷ୍ମୀ 🙏',
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[key]?.[language] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}