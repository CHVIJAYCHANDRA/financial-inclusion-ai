import React from 'react';
import { BrainCircuit } from 'lucide-react';

interface HeaderProps {
  language: string;
  setLanguage: (lang: string) => void;
}

const Header: React.FC<HeaderProps> = ({ language, setLanguage }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <BrainCircuit className="h-8 w-8 text-purple-600" />
          <h1 className="text-2xl font-bold text-purple-600">VittaSakhi</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="bg-purple-50 border border-purple-100 rounded-md px-3 py-1"
          >
            <option value="english">English</option>
            <option value="odia">ଓଡ଼ିଆ</option>
          </select>
          
          <button className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
            {language === 'english' ? 'Get Help' : 'ସାହାଯ୍ୟ ନିଅନ୍ତୁ'}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;