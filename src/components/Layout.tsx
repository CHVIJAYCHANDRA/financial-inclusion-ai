import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Target, BookOpen, Calculator, Wallet } from 'lucide-react';
import { useLanguage } from './LanguageContext';

const navItems = [
  { icon: Home, key: 'dashboard', path: '/' },
  { icon: Target, key: 'goals', path: '/goals' },
  { icon: BookOpen, key: 'learn', path: '/learn' },
  { icon: Calculator, key: 'calculator', path: '/calculator' },
  { icon: Wallet, key: 'banking', path: '/banking' },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const { language, setLanguage, t } = useLanguage();

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-indigo-600 text-white p-4">
        <div className="container mx-auto flex items-center justify-between">
          <h1 className="text-xl font-bold">VittaSakhi</h1>
          <div className="flex items-center space-x-2">
            <select
              className="bg-indigo-700 text-white px-3 py-1 rounded"
              value={language}
              onChange={(e) => setLanguage(e.target.value as 'en' | 'hi' | 'or')}
            >
              <option value="en">English</option>
              <option value="hi">हिंदी</option>
              <option value="or">ଓଡ଼ିଆ</option>
            </select>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-8">{children}</main>

      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
        <div className="flex justify-around p-2">
          {navItems.map(({ icon: Icon, key, path }) => (
            <Link
              key={path}
              to={path}
              className={`flex flex-col items-center p-2 ${
                location.pathname === path
                  ? 'text-indigo-600'
                  : 'text-gray-600'
              }`}
            >
              <Icon size={24} />
              <span className="text-xs mt-1">{t(key)}</span>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}